// XLAI's own Zoho CRM org (self-client OAuth, api-console.zoho.com) — distinct
// from the inbound webhook in app/api/webhooks/zoho and from each SDR agent
// tenant's own CRM credentials. Used to write data collected in the client
// dashboard back onto that client's Zoho Account record.

let cachedAccessToken: { token: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string> {
  if (cachedAccessToken && cachedAccessToken.expiresAt > Date.now()) {
    return cachedAccessToken.token
  }

  const response = await fetch(`${process.env.ZOHO_CRM_ACCOUNTS_URL}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.ZOHO_CRM_REFRESH_TOKEN!,
      client_id: process.env.ZOHO_CRM_CLIENT_ID!,
      client_secret: process.env.ZOHO_CRM_CLIENT_SECRET!,
    }),
  })

  if (!response.ok) {
    throw new Error(`Zoho token refresh failed: ${response.status} ${await response.text()}`)
  }

  const data = await response.json()
  // Refresh a minute early so a request never races an about-to-expire token.
  cachedAccessToken = { token: data.access_token, expiresAt: Date.now() + (data.expires_in - 60) * 1000 }
  return cachedAccessToken.token
}

export class ZohoAccountNotFoundError extends Error {}

// Overwrites the Account's Company_Context field with the client's latest
// onboarding profile — the SDR agent backend reads this as context for ICP
// and personalization, so each submission replaces rather than appends.
export async function updateAccountCompanyContext(tenantId: string, contextText: string) {
  const token = await getAccessToken()

  const response = await fetch(
    `${process.env.ZOHO_CRM_API_DOMAIN}/crm/v2/Accounts/${encodeURIComponent(tenantId)}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [{ Company_Context: contextText }] }),
    }
  )

  const body = await response.json().catch(() => null)
  const result = body?.data?.[0]

  if (!response.ok || result?.status !== "success") {
    if (result?.code === "INVALID_DATA" || result?.code === "RECORD_DOES_NOT_EXIST") {
      throw new ZohoAccountNotFoundError(`Zoho Account ${tenantId} not found`)
    }
    throw new Error(`Zoho update failed: ${response.status} ${JSON.stringify(body)}`)
  }
}
