import { Reveal } from "@/components/ui/reveal"

const needs = [
  "Lead generation",
  "Prospect research",
  "Email infrastructure",
  "Personalized outreach",
  "Follow-up",
  "Cold calling",
  "CRM management",
  "Sales development reps",
  "Constant optimization",
]

export function StopHiring() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 md:px-8">
      <Reveal>
        <h2 className="mb-8 text-4xl font-black tracking-tight text-foreground">
          Stop Hiring SDRs. <span className="text-primary">Start Booking Meetings.</span>
        </h2>

        <p className="mb-8 text-lg text-muted-foreground">
          Building an outbound sales team is expensive. You need:
        </p>

        <div className="mb-12 grid gap-3 sm:grid-cols-2">
          {needs.map((item) => (
            <div key={item} className="flex items-center gap-2 text-muted-foreground">
              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="card-hover rounded-xl border border-primary/30 bg-primary/5 p-8">
          <p className="mb-3 text-center text-lg font-semibold text-foreground">
            XLAI handles the entire process for you.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            One team. One monthly fee. One goal: qualified meetings on your calendar.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
