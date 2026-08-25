import { Compass, Hammer, Rocket, CheckCircle2, CalendarCheck, BarChart3 } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { TimelineStep } from "@/components/landing/timeline-step"

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
      <Reveal>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">How XLAI Works</p>
        <h2 className="mb-12 text-4xl font-black tracking-tight text-foreground">
          From Strategy to Booked Meetings.
        </h2>
      </Reveal>

      <div className="flex flex-col">
        {steps.map((s, i) => (
          <TimelineStep
            key={s.title}
            icon={<s.icon className="size-5 text-primary" strokeWidth={2} />}
            title={s.title}
            body={s.body}
            index={i}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
