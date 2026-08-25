import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Starter",
    price: "$1,750",
    setup: "One-time setup: $750",
    features: [
      "Single-channel outbound (email or LinkedIn sequencing)",
      "Lead list build + data enrichment",
      "Light SDR calling for warm lead follow-up",
      "Monthly performance reporting",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$3,000",
    setup: "One-time setup: $1,000",
    features: [
      "Multi-channel outbound — email + LinkedIn + phone",
      "Full enrichment with buyer-intent signals",
      "Dedicated SDR calling block for appointment booking",
      "Weekly reporting + live pipeline dashboard",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "$5,500",
    setup: "One-time setup: $1,500",
    features: [
      "Everything in Growth — higher volume, expanded ICP/market testing",
      "Full SDR team coverage across calling blocks",
      "Dedicated account strategist + strategy check-ins",
      "Priority appointment setting with calendar handoff",
      "Exclusive territory/vertical available on request",
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <Reveal>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Pricing</p>
        <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
          Booked Calls &amp; Appointments — Done For You
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Full-stack outbound lead generation — multi-channel outreach, enrichment, and live SDR calling to fill your
          pipeline with qualified conversations.
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 100} className="h-full">
            <div
              className={cn(
                "card-hover relative flex h-full flex-col rounded-xl border p-8",
                tier.featured ? "border-primary/40 bg-primary/5" : "border-border bg-card"
              )}
            >
              {tier.featured && (
                <div className="animate-glow-pulse pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-primary/20 blur-xl" />
              )}
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-black text-foreground">{tier.price}</span>
                <span className="text-sm font-medium text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{tier.setup}</p>

              <ul className="mt-6 mb-8 flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant={tier.featured ? "default" : "outline"} className="w-full">
                <a href="#book">Book a Strategy Call</a>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-10 space-y-3 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">All plans include:</span> cancel anytime, no long-term
            contract, and access to our full outbound stack (CRM, sequencing, and enrichment tooling) — you never pay
            for software separately.
          </p>
          <p>
            <span className="font-semibold text-foreground">What to expect:</span> Month 1 is setup and calibration —
            sequences, targeting, and call cadence are tuned to your ICP. A steady flow of qualified conversations
            typically builds from day 30–45 onward.
          </p>
          <p className="font-semibold text-primary">Currently onboarding a limited number of new accounts.</p>
        </div>
      </Reveal>
    </section>
  )
}
