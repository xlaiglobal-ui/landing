import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 text-center">
      {/* Red glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[600px] w-[700px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
        <span className="size-1.5 animate-pulse rounded-full bg-primary" />
        AI Sales Operating System
      </div>

      {/* Headline */}
      <h1 className="mx-auto max-w-3xl text-balance text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Your Sales Team Now Has <span className="text-primary">AI Employees</span> Doing the Work.
      </h1>

      {/* Subheading */}
      <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
        Build and operate your entire sales function without hiring an SDR team. XLAI gives your company an AI sales team that finds prospects, researches accounts, creates personalized outreach, handles conversations, qualifies opportunities, books meetings, and continuously improves from real sales outcomes.
      </p>

      {/* Tagline */}
      <p className="mx-auto mt-4 max-w-xl text-balance font-semibold text-foreground">
        You set the rules. AI does the work.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <a href="#book">
            Build My AI Sales Team — Free for 30 Days
            <ChevronRight className="size-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <a href="#workflow">See How It Works</a>
        </Button>
      </div>

      {/* Social proof line */}
      <p className="mt-10 text-sm text-muted-foreground">
        No long-term commitment · No SDR hiring · No complicated setup
      </p>
    </section>
  )
}
