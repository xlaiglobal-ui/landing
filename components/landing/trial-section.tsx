import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function TrialSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 md:px-8">
      <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
        Start with 30 Days.
      </h2>
      <h3 className="mb-8 text-2xl font-bold tracking-tight text-primary">
        Don't Take Our Word for It.
      </h3>

      <p className="mb-12 text-lg text-muted-foreground">
        Your first 30 days are about proving the system against your actual business.
      </p>

      <div className="mb-12 grid gap-8 sm:grid-cols-4">
        <div>
          <p className="mb-3 font-bold text-foreground">Week 1</p>
          <p className="text-sm text-muted-foreground">Understand your company, ICP, offer, strategy, and guardrails.</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-foreground">Week 2</p>
          <p className="text-sm text-muted-foreground">Build target accounts, prospect lists, research, and messaging.</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-foreground">Week 3</p>
          <p className="text-sm text-muted-foreground">Launch email, LinkedIn, calls, and AI-powered conversations.</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-foreground">Week 4</p>
          <p className="text-sm text-muted-foreground">See replies, conversations, meetings booked, and pipeline created.</p>
        </div>
      </div>

      <div className="mb-12 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
        <p className="mb-4 font-semibold text-foreground">Then we show you what happened:</p>
        <p className="mb-4 text-sm text-muted-foreground">Prospects identified · Outreach executed · Replies generated · Meetings booked · Pipeline created</p>
        <p className="text-lg font-bold text-foreground">
          If it works, keep it running.
          <br />
          If it doesn't, walk away.
        </p>
      </div>

      <div className="flex justify-center">
        <Button asChild size="lg">
          <a href="#book">
            Build My AI Sales Team — Free for 30 Days
            <ChevronRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}
