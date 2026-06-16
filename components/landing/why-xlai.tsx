const cards = [
  {
    icon: "⚡",
    title: "Zero Financial Risk",
    body: "No retainer, no setup fee, no monthly minimum. You pay commission only after money hits your bank account.",
  },
  {
    icon: "🧠",
    title: "SaaS Specialists",
    body: "We focus exclusively on B2B SaaS. We understand your buyers, your objections, your sales cycle — and we speak their language.",
  },
  {
    icon: "🔥",
    title: "Motivated to Close",
    body: "A salaried rep has no urgency. We do. Every day we don't close is a day we don't earn. That's alignment you can't buy with a retainer.",
  },
  {
    icon: "📊",
    title: "Full Transparency",
    body: "Weekly pipeline reports, live CRM access, and regular check-ins. You always know what we're working and where every deal stands.",
  },
  {
    icon: "🚀",
    title: "Fast to Start",
    body: "No 6-month onboarding. We learn your product in week one and have live outreach running by week two.",
  },
  {
    icon: "🌐",
    title: "Your Network + Ours",
    body: "We bring our existing relationships in the SaaS ecosystem. Warm intros close faster — and we have them.",
  },
]

export function WhyXlai() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 pb-24 md:px-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
        Why XLAI
      </p>
      <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
        Built Differently.
        <br />
        Motivated Differently.
      </h2>
      <p className="mb-12 max-w-lg text-muted-foreground">
        Most agencies charge you to try. We only get paid when we deliver —
        which means our interests are identical to yours.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-xl">
              {c.icon}
            </div>
            <h3 className="mb-2 font-bold text-foreground">{c.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
