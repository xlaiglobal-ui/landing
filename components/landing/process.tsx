const steps = [
  {
    icon: "📋",
    title: "Day 1–2: Intake & Deep Dive",
    body: "We study your product, your existing customers, your ICP, and your competition. We shadow your best demo if possible.",
  },
  {
    icon: "✍️",
    title: "Day 3–4: Agreement & Playbook",
    body: "Commission agreement signed. We build a custom outreach playbook: messaging, sequences, objection handling, pricing framework.",
  },
  {
    icon: "🎯",
    title: "Day 5–7: List Build & Launch",
    body: "We build your first target list of 100+ qualified prospects and launch outreach sequences across email and LinkedIn.",
  },
  {
    icon: "📞",
    title: "Week 2: First Calls",
    body: "Discovery calls booked and running. Qualified leads handed off for demos. Weekly reporting begins.",
  },
  {
    icon: "💰",
    title: "Week 4–8: First Close",
    body: "Target timeline for first closed deal. Commission invoiced within 15 days of your customer's first payment.",
  },
]

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-3xl px-4 py-24 md:px-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
        Our Process
      </p>
      <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
        What Week One Looks Like
      </h2>
      <p className="mb-12 text-muted-foreground">
        From handshake to live pipeline in two weeks.
      </p>

      <div className="flex flex-col">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-5 pb-8 last:pb-0">
            {/* Timeline spine */}
            <div className="flex flex-col items-center">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-lg">
                {s.icon}
              </div>
              {i < steps.length - 1 && (
                <div className="mt-2 w-px flex-1 bg-border" />
              )}
            </div>

            {/* Content */}
            <div className="pt-2 pb-4">
              <h3 className="mb-1 font-bold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
