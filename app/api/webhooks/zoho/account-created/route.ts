import { NextRequest, NextResponse } from "next/server"
import { createClientAccount, resetClientPassword, ClientAlreadyExistsError } from "@/lib/create-client"
import { sendClientWelcomeEmail } from "@/lib/email"

// Called by a Zoho CRM workflow rule ("When an Account is created" -> Instant
// Action -> Webhook) to provision a client dashboard login. Configure the
// webhook in Zoho as:
//   URL:    https://<your-domain>/api/webhooks/zoho/account-created?secret=<ZOHO_WEBHOOK_SECRET>
//   Method: POST
//   Body params: name  -> ${Accounts.Account_Name}
//                email -> ${Accounts.Client_Email}
export async function POST(request: NextRequest) {
  const secret =
    request.headers.get("x-webhook-secret") || request.nextUrl.searchParams.get("secret")

  if (!secret || secret !== process.env.ZOHO_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Zoho's Workflow Rule "Webhook" action sends its configured parameters as
  // an application/x-www-form-urlencoded body, not JSON — accept either.
  const contentType = request.headers.get("content-type") || ""
  const rawBody = await request.text()
  let name = ""
  let email = ""

  if (contentType.includes("application/json")) {
    const body = (() => {
      try {
        return JSON.parse(rawBody)
      } catch {
        return null
      }
    })()
    name = typeof body?.name === "string" ? body.name.trim() : ""
    email = typeof body?.email === "string" ? body.email.trim() : ""
  } else if (rawBody) {
    const params = new URLSearchParams(rawBody)
    name = (params.get("name") || "").trim()
    email = (params.get("email") || "").trim()
  }

  // Fall back to URL query params in case the webhook action sends its
  // parameters on the URL instead of in the body.
  if (!email) {
    name = name || (request.nextUrl.searchParams.get("name") || "").trim()
    email = email || (request.nextUrl.searchParams.get("email") || "").trim()
  }

  if (!email) {
    console.error("Zoho webhook missing email", { contentType, rawBody: rawBody.slice(0, 500) })
    return NextResponse.json({ error: "Missing email" }, { status: 400 })
  }

  try {
    const { password } = await createClientAccount({ name: name || email, email })
    await sendClientWelcomeEmail({ to: email, name: name || email, password })
    return NextResponse.json({ created: true })
  } catch (err) {
    if (err instanceof ClientAlreadyExistsError) {
      // Most likely Zoho retrying after a prior call created the account but
      // failed to email the credentials — issue a new password and resend
      // rather than leaving the client without a way to log in.
      try {
        const { password } = await resetClientPassword({ email })
        await sendClientWelcomeEmail({ to: email, name: name || email, password })
        return NextResponse.json({ created: false, reason: "resent" })
      } catch (resendErr) {
        console.error("Failed to resend credentials for existing client", resendErr)
        return NextResponse.json({ error: "Internal error" }, { status: 500 })
      }
    }
    console.error("Failed to create client account from Zoho webhook", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
