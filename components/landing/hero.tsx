import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { HeroSpotlight } from "@/components/landing/hero-spotlight"
import { ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 text-center">
      {/* Ambient glow — layered, slowly drifting */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="animate-drift h-[600px] w-[700px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="animate-drift-reverse animate-glow-pulse absolute h-[400px] w-[500px] translate-x-24 translate-y-16 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      {/* Interactive cursor spotlight */}
      <HeroSpotlight />

      {/* Badge */}
      <Reveal>
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="size-1.5 animate-pulse rounded-full bg-primary" />
          XLAI
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal delay={80}>
        <h1 className="mx-auto max-w-3xl text-balance text-5xl font-black uppercase tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Booked Calls &amp; Appointments <span className="text-primary">— Done For You</span>
        </h1>
      </Reveal>

      {/* Subheading */}
      <Reveal delay={160}>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
          Full-stack outbound lead generation — <span className="font-semibold text-foreground">multi-channel outreach, enrichment, and live SDR calling</span> to
          fill your pipeline with qualified conversations.
        </p>
      </Reveal>

      {/* Tagline */}
      <Reveal delay={240}>
        <p className="mx-auto mt-6 max-w-xl text-balance font-semibold text-foreground">
          You tell us who you want to sell to.
          <br />
          <span className="text-primary">We build the pipeline.</span>
        </p>
      </Reveal>

      {/* CTAs */}
      <Reveal delay={320}>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#book">
              Book a Strategy Call
              <ChevronRight className="size-4" />
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
