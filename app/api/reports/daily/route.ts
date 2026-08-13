import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"

// Server-side proxy to the AI SDR agent backend's reporting API — never calls
// it from the browser, since that would require exposing AGENT_API_INTERNAL_KEY
// client-side. Reads the caller's own tenantId off their session so one client
// can never request another client's report by passing a different tenant_id.
export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const tenantId = session.user.tenantId
  if (!tenantId) {
    return NextResponse.json({ error: "No tenant linked to this account yet" }, { status: 404 })
  }

  const baseUrl = process.env.AGENT_API_BASE_URL
  const internalKey = process.env.AGENT_API_INTERNAL_KEY
  if (!baseUrl || !internalKey) {
    console.error("AGENT_API_BASE_URL / AGENT_API_INTERNAL_KEY not configured")
    return NextResponse.json({ error: "Reporting is not configured" }, { status: 500 })
  }

  const date = request.nextUrl.searchParams.get("date")
  const upstreamUrl = new URL("/reports/daily-summary", baseUrl)
  upstreamUrl.searchParams.set("tenant_id", tenantId)
  if (date) {
    upstreamUrl.searchParams.set("date", date)
  }

  const upstreamResponse = await fetch(upstreamUrl, {
    headers: { "X-Internal-Api-Key": internalKey },
    cache: "no-store",
  })

  if (!upstreamResponse.ok) {
    console.error("Agent reporting API error", upstreamResponse.status)
    return NextResponse.json({ error: "Failed to load report" }, { status: 502 })
  }

  const data = await upstreamResponse.json()
  return NextResponse.json(data)
}
