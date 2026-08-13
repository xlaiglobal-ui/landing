const features = [
  {
    icon: "🎯",
    title: "Prospecting",
    description: "Find and research hundreds of relevant prospects.",
  },
  {
    icon: "✍️",
    title: "Personalized Outreach",
    description: "Generate messaging based on actual prospect data.",
  },
  {
    icon: "💬",
    title: "Handle Replies",
    description: "AI responds to prospects and handles conversations.",
  },
  {
    icon: "✅",
    title: "Qualify Opportunities",
    description: "Separate real opportunities from noise.",
  },
  {
    icon: "📅",
    title: "Book Meetings",
    description: "Get qualified prospects on your calendar.",
  },
  {
    icon: "🚀",
    title: "Continuous Learning",
    description: "AI improves based on real sales outcomes.",
  },
]

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <h2 className="mb-12 text-4xl font-black tracking-tight text-foreground">
        Your AI Sales Team Covers Everything.
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-3 text-3xl">{feature.icon}</div>
            <h3 className="mb-2 font-bold text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
