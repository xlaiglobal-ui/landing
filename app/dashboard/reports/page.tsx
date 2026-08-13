import { DailyReport } from "@/components/dashboard/daily-report"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Reports</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your AI sales team&apos;s end-of-day activity.
        </p>
      </div>

      <DailyReport />
    </div>
  )
}
