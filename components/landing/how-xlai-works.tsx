import { Compass, Hammer, Rocket, CheckCircle2, CalendarCheck, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Compass,
    title: "Strategy",
    body: "We learn your business, ICP, offer, sales cycle, and ideal customer. Then we define exactly who we're targeting.",
  },
  {
    icon: Hammer,
    title: "Build",
    body: "We build your prospect database, messaging, campaigns, CRM pipeline, and sales process.",
  },
  {
    icon: Rocket,
    title: "Launch",
    body: "AI-powered outreach begins. Emails go out. Prospects are researched. Follow-ups happen. And our human sales team starts calling.",
  },
  {
    icon: CheckCircle2,
    title: "Qualify",
    body: "Interested prospects are contacted by our sales representatives. We answer questions, qualify opportunities, and handle follow-up.",
  },
  {
    icon: CalendarCheck,
    title: "Book",
    body: "Qualified prospects are booked directly onto your calendar. You focus on closing. We focus on filling the calendar.",
  },
  {
    icon: BarChart3,
    title: "Optimize",
    body: "Every week, we analyze what's working and improve the campaigns. Better targeting. Better messaging. Better conversations. More qualified meetings.",
  },
]

export function HowXlaiWorks() {
  return (
    <section id="how" className="mx-auto max-w-3xl px-4 py-24 md:px-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">How XLAI Works</p>
      <h2 className="mb-12 text-4xl font-black tracking-tight text-foreground">
        From Strategy to Booked Meetings.
      </h2>

      <div className="flex flex-col">
        {steps.map((s, i) => (
          <div key={s.title} className="flex gap-5 pb-8 last:pb-0">
            {/* Timeline spine */}
            <div className="flex flex-col items-center">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                <s.icon className="size-5 text-primary" strokeWidth={2} />
              </div>
              {i < steps.length - 1 && <div className="mt-2 w-px flex-1 bg-border" />}
            </div>

            {/* Content */}
            <div className="pt-2 pb-4">
              <h3 className="mb-1 text-lg font-bold text-foreground">
                0{i + 1} — {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
