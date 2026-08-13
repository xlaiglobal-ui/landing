"use client"

import { useEffect, useState } from "react"
import { Loader2, Search, CheckCircle2, Mail, MessageSquare, Star, CalendarCheck } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface DailySummary {
  tenant_id: string
  date: string
  prospects_researched: number
  prospects_qualified: number
  prospects_contacted: number
  replies_received: number
  qualified_opportunities: number
  meetings_booked: number
}

const TILES: {
  key: keyof Omit<DailySummary, "tenant_id" | "date">
  label: string
  icon: typeof Search
}[] = [
  { key: "prospects_researched", label: "Prospects researched", icon: Search },
  { key: "prospects_qualified", label: "Prospects qualified", icon: CheckCircle2 },
  { key: "prospects_contacted", label: "Prospects contacted", icon: Mail },
  { key: "replies_received", label: "Replies received", icon: MessageSquare },
  { key: "qualified_opportunities", label: "Qualified opportunities", icon: Star },
  { key: "meetings_booked", label: "Meetings booked", icon: CalendarCheck },
]

export function DailyReport() {
  const [summary, setSummary] = useState<DailySummary | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const response = await fetch("/api/reports/daily")
        if (!response.ok) {
          const body = await response.json().catch(() => null)
          throw new Error(body?.error || "Failed to load report")
        }
        const data: DailySummary = await response.json()
        if (!cancelled) setSummary(data)
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load report")
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading today&apos;s activity...
      </div>
    )
  }

  if (error || !summary) {
    return (
      <div className="rounded-3xl border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          {error || "No report available yet."}
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="mb-4 text-sm text-muted-foreground">
        What your AI sales team did on {summary.date}
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {TILES.map(({ key, label, icon: Icon }) => (
          <Card key={key}>
            <CardHeader>
              <Icon className="h-5 w-5 text-primary" />
              <CardTitle className="mt-2 text-3xl font-semibold tabular-nums">
                {summary[key].toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
