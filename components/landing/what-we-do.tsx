import { Mail, Phone, Target, TrendingUp, KanbanSquare } from "lucide-react"

const items = [
  {
    icon: Mail,
    title: "Email Outreach",
    body: "We build targeted outbound campaigns designed around your ICP, offer, and messaging. AI researches and personalizes. Humans monitor, optimize, and respond.",
  },
  {
    icon: Phone,
    title: "Human Cold Calling",
    body: "Real sales representatives call your prospects. No AI voice bots. No robotic conversations. Real people having real sales conversations.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    body: "We identify and build targeted prospect lists based on the companies and decision-makers most likely to buy from you.",
  },
  {
    icon: TrendingUp,
    title: "Paid Advertising",
    body: "We can help generate inbound demand through targeted advertising campaigns that feed directly into your sales pipeline.",
  },
  {
    icon: KanbanSquare,
    title: "CRM & Pipeline Management",
    body: "Every prospect, conversation, meeting, and opportunity is tracked inside your CRM. You always know what's happening with your pipeline.",
  },
]

export function WhatWeDo() {
  return (
    <section id="what" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">What We Do</p>
      <h2 className="mb-12 text-4xl font-black tracking-tight text-foreground">
        A Full Outbound Sales Operation.
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="size-5 text-primary" strokeWidth={2} />
            </div>
            <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
