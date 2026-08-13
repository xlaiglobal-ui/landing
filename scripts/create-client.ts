// Creates a client account for the dashboard. Client accounts are not
// self-serve (see disableSignUp in lib/auth.ts) — this is the manual path,
// alongside the automatic one at app/api/webhooks/zoho/account-created.
//
// Usage: pnpm create-client "Jane Doe" jane@client.com [password] [tenantId]
// If no password is given, a random one is generated. tenantId is the Zoho
// Account record ID (Accounts.id) that joins this client to their data in the
// AI SDR agent backend — omit it only for accounts that don't need the
// Reports page yet. The welcome email (with login link + password) is sent
// via Resend either way.

import { createClientAccount, ClientAlreadyExistsError } from "../lib/create-client"
import { sendClientWelcomeEmail } from "../lib/email"

async function main() {
  const [name, email, providedPassword, tenantId] = process.argv.slice(2)

  if (!name || !email) {
    console.error(
      'Usage: pnpm create-client "Jane Doe" jane@client.com [password] [tenantId]',
    )
    process.exit(1)
  }

  try {
    const { password } = await createClientAccount({
      name,
      email,
      password: providedPassword,
      tenantId,
    })
    console.log(`Created client account for ${email.toLowerCase()}`)

    try {
      await sendClientWelcomeEmail({ to: email, name, password })
      console.log("Welcome email sent.")
    } catch (err) {
      console.error("Account created, but the welcome email failed to send:", err)
      console.log(`Temporary password: ${password}`)
    }
  } catch (err) {
    if (err instanceof ClientAlreadyExistsError) {
      console.error(err.message)
      process.exit(1)
    }
    throw err
  }

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
