import { randomBytes } from "node:crypto"
import { auth } from "./auth"

export class ClientAlreadyExistsError extends Error {}

export async function createClientAccount({
  name,
  email,
  password: providedPassword,
}: {
  name: string
  email: string
  password?: string
}) {
  const ctx = await auth.$context
  const normalizedEmail = email.toLowerCase()

  const existing = await ctx.internalAdapter.findUserByEmail(normalizedEmail)
  if (existing?.user) {
    throw new ClientAlreadyExistsError(`A user with email ${normalizedEmail} already exists.`)
  }

  const password = providedPassword || randomBytes(9).toString("base64url")
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

  return { user, password }
}

export class ClientNotFoundError extends Error {}

// Issues a new password for an existing client account. Used when a webhook
// caller retries after a prior attempt created the account but failed to
// deliver the credentials email, so the client isn't left without a way in.
export async function resetClientPassword({
  email,
  password: providedPassword,
}: {
  email: string
  password?: string
}) {
  const ctx = await auth.$context
  const normalizedEmail = email.toLowerCase()

  const existing = await ctx.internalAdapter.findUserByEmail(normalizedEmail)
  if (!existing?.user) {
    throw new ClientNotFoundError(`No user with email ${normalizedEmail} exists.`)
  }

  const password = providedPassword || randomBytes(9).toString("base64url")
  const hash = await ctx.password.hash(password)
  await ctx.internalAdapter.updatePassword(existing.user.id, hash)

  return { user: existing.user, password }
}
