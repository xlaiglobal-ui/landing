import { NextRequest, NextResponse } from "next/server"
import { createClientAccount, ClientAlreadyExistsError } from "@/lib/create-client"
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

  const body = await request.json().catch(() => null)
  const name = typeof body?.name === "string" ? body.name.trim() : ""
  const email = typeof body?.email === "string" ? body.email.trim() : ""

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 })
  }

  try {
    const { password } = await createClientAccount({ name: name || email, email })
    await sendClientWelcomeEmail({ to: email, name: name || email, password })
    return NextResponse.json({ created: true })
  } catch (err) {
    if (err instanceof ClientAlreadyExistsError) {
      return NextResponse.json({ created: false, reason: "already_exists" })
    }
    console.error("Failed to create client account from Zoho webhook", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
