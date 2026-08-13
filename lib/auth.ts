import { betterAuth } from "better-auth"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.MONGODB_URI!)
const db = client.db(process.env.MONGODB_DB)

const socialProviders: {
  github?: { clientId: string; clientSecret: string }
  google?: { clientId: string; clientSecret: string }
} = {}

if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  socialProviders.github = {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }
}

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  socialProviders.google = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }
}

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  // BETTER_AUTH_URL only trusts the apex domain; www.xlai.live is a
  // separate live alias for the same deployment with no redirect between
  // them, so it needs to be trusted explicitly too.
  trustedOrigins: ["https://www.xlai.live"],
  emailAndPassword: {
    enabled: true,
    // Client accounts are created by an admin via `pnpm create-client`,
    // not through public self-registration.
    disableSignUp: true,
  },
  socialProviders,
  user: {
    additionalFields: {
      tenantId: {
        type: "string",
        required: false,
        input: false,
        // Joins this user to the AI SDR agent backend's per-tenant data (see
        // lib/create-client.ts). Set at account-creation time from the Zoho
        // Account record ID (`${Accounts.id}`) — never user-editable, since a
        // wrong value would show one client another client's report data.
      },
      profileCompletedAt: {
        type: "date",
        required: false,
        input: false,
        // Set by app/api/onboarding/submit once the company profile has been
        // synced to Zoho at least once — lets the dashboard show a completion
        // state without a live Zoho round-trip on every page load.
      },
    },
  },
})
