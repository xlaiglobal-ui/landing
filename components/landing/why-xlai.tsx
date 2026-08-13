const features = [
  {
    icon: "🎯",
    title: "Prospecting",
    body: "Find the companies and people most likely to buy.",
  },
  {
    icon: "🔍",
    title: "Research",
    body: "Understand who they are, what they do, and why they might buy.",
  },
  {
    icon: "📊",
    title: "Enrichment",
    body: "Build complete prospect profiles and contact data.",
  },
  {
    icon: "⭐",
    title: "ICP Scoring",
    body: "Prioritize the prospects that fit your ideal customer profile.",
  },
  {
    icon: "✍️",
    title: "Personalization",
    body: "Create relevant messaging based on each prospect.",
  },
  {
    icon: "📨",
    title: "Multichannel Outreach",
    body: "Reach prospects through the channels that make sense.",
  },
  {
    icon: "🔄",
    title: "Follow-Up",
    body: "Stay persistent without manually managing sequences.",
  },
  {
    icon: "💬",
    title: "AI Conversations",
    body: "Handle replies and move prospects through the early sales process.",
  },
  {
    icon: "✅",
    title: "Qualification",
    body: "Identify real opportunities before they reach you.",
  },
  {
    icon: "📅",
    title: "Meeting Booking",
    body: "Turn qualified conversations into meetings.",
  },
  {
    icon: "📁",
    title: "CRM",
    body: "Keep your sales data and activity organized.",
  },
  {
    icon: "🚀",
    title: "Learning",
    body: "Continuously improve based on real sales outcomes.",
  },
]

export function WhyXlai() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 pb-24 md:px-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
        Features
      </p>
      <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
        A Complete AI Sales Function
      </h2>
      <p className="mb-12 max-w-lg text-muted-foreground">
        Everything you need to run a world-class sales development operation.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-xl">
              {f.icon}
            </div>
            <h3 className="mb-2 font-bold text-foreground">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
