import { headers } from "next/headers"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react"
import { auth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { DailyReport } from "@/components/dashboard/daily-report"

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const firstName = session?.user.name?.split(" ")[0]
  const profileCompletedAt = session?.user.profileCompletedAt

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Welcome{firstName ? `, ${firstName}` : ""}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Here&apos;s what your AI sales team is up to.
        </p>
      </div>

      {profileCompletedAt ? (
        <div className="flex items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Company profile complete</p>
              <p className="text-sm text-muted-foreground">
                Last updated {new Date(profileCompletedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/profile">
              Edit profile
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-4 rounded-3xl border border-primary/30 bg-primary/5 p-6">
          <div className="flex items-center gap-3">
            <Building2 className="size-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Set up your company profile</p>
              <p className="text-sm text-muted-foreground">
                Tell us about your business so your AI sales team knows who to target.
              </p>
            </div>
          </div>
          <Button size="sm" asChild>
            <Link href="/dashboard/profile">
              Get started
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      )}

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Today&apos;s activity</h2>
          <Link
            href="/dashboard/reports"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View full report
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <DailyReport variant="compact" />
      </div>
    </div>
  )
}
