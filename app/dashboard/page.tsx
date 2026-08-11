import { headers } from "next/headers"
import { auth } from "@/lib/auth"

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const firstName = session?.user.name?.split(" ")[0]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Welcome{firstName ? `, ${firstName}` : ""}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          This is your XLAI client dashboard.
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          We&apos;re setting things up here. Reporting on your pipeline and results will
          show up on this page soon — in the meantime, reach out to your XLAI contact
          for updates.
        </p>
      </div>
    </div>
  )
}
