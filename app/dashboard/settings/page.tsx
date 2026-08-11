import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { ProfileForm } from "./profile-form"
import { PasswordForm } from "./password-form"

export default async function SettingsPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const user = session!.user

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Account settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your profile and password.
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold text-foreground">Profile</h2>
        <ProfileForm name={user.name} email={user.email} />
      </div>

      <div className="rounded-3xl border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold text-foreground">Password</h2>
        <PasswordForm />
      </div>
    </div>
  )
}
