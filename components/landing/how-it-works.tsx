const steps = [
  {
    num: "01",
    icon: "🤝",
    title: "We Sign a Partnership",
    body: "You share your product, ICP, and pricing. We sign a Sales Rep Agreement — commission rate, territory, tail clause. No payment due.",
  },
  {
    num: "02",
    icon: "🎯",
    title: "We Build Your Pipeline",
    body: "We identify, research, and reach out to 50–100 qualified prospects per week using targeted outbound — email, LinkedIn, and warm intros.",
  },
  {
    num: "03",
    icon: "📞",
    title: "We Run Discovery & Qualify",
    body: "We handle the first touch, qualify every lead hard, and bring you only deals worth your time — budget, authority, need, and timeline confirmed.",
  },
  {
    num: "04",
    icon: "✍️",
    title: "Deal Closes — We Invoice",
    body: "You collect payment from the customer. We send you a commission invoice. That's it. No close = no cost to you, ever.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
        How It Works
      </p>
      <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
        Simple. Aligned. Effective.
      </h2>
      <p className="mb-12 max-w-lg text-muted-foreground">
        No retainers. No monthly fees. We act as your dedicated outbound sales
        team and get paid only when we close.
      </p>

      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-border">
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col gap-4 bg-card p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Step {s.num}
            </span>
            <span className="text-3xl">{s.icon}</span>
            <div>
              <h3 className="mb-2 font-bold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
