import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { updateAccountCompanyContext, ZohoAccountNotFoundError } from "@/lib/zoho-crm"

// Ordered so the formatted profile reads naturally; also the allow-list that
// keeps arbitrary client payloads from writing unexpected text into Zoho.
const FIELDS: { key: string; label: string }[] = [
  { key: "company_name", label: "Company name" },
  { key: "company_stage", label: "Company stage" },
  { key: "product_description", label: "Product/service description" },
  { key: "company_website", label: "Website" },
  { key: "biggest_challenge", label: "Biggest sales challenge" },
  { key: "current_sales_process", label: "Current sales process" },
  { key: "sales_team_size", label: "Sales team size" },
  { key: "average_deal_size", label: "Average deal size (ACV)" },
  { key: "decision_maker", label: "Decision maker" },
  { key: "target_monthly_meetings", label: "Target monthly meetings" },
  { key: "success_metrics", label: "Success metrics" },
  { key: "timeline", label: "Timeline" },
]

function formatProfile(answers: Record<string, unknown>, submittedVia: string): string {
  const lines = [`Client onboarding profile — submitted ${new Date().toISOString().slice(0, 10)} via ${submittedVia}`, ""]

  for (const { key, label } of FIELDS) {
    const value = answers[key]
    const text = Array.isArray(value) ? value.join(", ") : typeof value === "string" ? value.trim() : ""
    if (text) lines.push(`${label}: ${text}`)
  }

  return lines.join("\n")
}

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const tenantId = session.user.tenantId
  if (!tenantId) {
    return NextResponse.json(
      { error: "No Zoho account is linked to this login yet. Contact your XLAI contact." },
      { status: 409 }
    )
  }

  const body = await request.json().catch(() => null)
  if (!body || typeof body !== "object" || typeof body.answers !== "object") {
    return NextResponse.json({ error: "Malformed submission" }, { status: 400 })
  }

  const submittedVia = body.submittedVia === "chat" ? "chat" : "form"
  const profileText = formatProfile(body.answers, submittedVia)

  try {
    await updateAccountCompanyContext(tenantId, profileText)
  } catch (err) {
    if (err instanceof ZohoAccountNotFoundError) {
      return NextResponse.json(
        { error: "This account's Zoho record couldn't be found. Contact your XLAI contact." },
        { status: 409 }
      )
    }
    console.error("Failed to sync onboarding profile to Zoho", err)
    return NextResponse.json({ error: "Couldn't save your profile right now. Please try again." }, { status: 502 })
  }

  const ctx = await auth.$context
  await ctx.internalAdapter.updateUser(session.user.id, { profileCompletedAt: new Date() })

  return NextResponse.json({ ok: true })
}
