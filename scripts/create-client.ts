// Creates a client account for the dashboard. Client accounts are not
// self-serve (see disableSignUp in lib/auth.ts), so this is the only way
// to provision one.
//
// Usage: pnpm create-client "Jane Doe" jane@client.com [password]
// If no password is given, a random one is generated and printed once.

import { randomBytes } from "node:crypto"
import { auth } from "../lib/auth"

async function main() {
  const [name, email, providedPassword] = process.argv.slice(2)

  if (!name || !email) {
    console.error('Usage: pnpm create-client "Jane Doe" jane@client.com [password]')
    process.exit(1)
  }

  const password = providedPassword || randomBytes(9).toString("base64url")

  const ctx = await auth.$context
  const normalizedEmail = email.toLowerCase()

  const existing = await ctx.internalAdapter.findUserByEmail(normalizedEmail)
  if (existing?.user) {
    console.error(`A user with email ${normalizedEmail} already exists.`)
    process.exit(1)
  }

  const hash = await ctx.password.hash(password)

  const user = await ctx.internalAdapter.createUser({
    name,
    email: normalizedEmail,
    image: null,
    emailVerified: true,
  })

  await ctx.internalAdapter.linkAccount({
    userId: user.id,
    providerId: "credential",
    accountId: user.id,
    password: hash,
  })

  console.log(`Created client account for ${normalizedEmail}`)
  if (!providedPassword) {
    console.log(`Temporary password: ${password}`)
    console.log("Share this with the client securely — it will not be shown again.")
  }

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
