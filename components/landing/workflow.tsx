const steps = [
  { title: "Find", description: "Identify companies and decision-makers that match your ICP." },
  { title: "Research", description: "Understand the company, buyer, industry, technology, signals, and context." },
  { title: "Score", description: "Determine which prospects are actually worth pursuing." },
  { title: "Personalize", description: "Create relevant messaging based on the individual prospect—not generic templates." },
  { title: "Reach", description: "Engage prospects across email, LinkedIn, phone, SMS, and other channels." },
  { title: "Follow Up", description: "Continue conversations automatically without your team manually managing sequences." },
  { title: "Respond", description: "Handle prospect replies, questions, objections, and conversations." },
  { title: "Qualify", description: "Determine whether a prospect is actually worth your time." },
  { title: "Book", description: "Turn qualified conversations into meetings on your calendar." },
  { title: "Update", description: "Keep your CRM and sales activity organized automatically." },
  { title: "Learn", description: "Learn from what actually happens after outreach." },
]

export function Workflow() {
  return (
    <section id="workflow" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
        How It Works
      </p>
      <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
        You're Not Buying Software.
      </h2>
      <h3 className="mb-12 text-3xl font-bold tracking-tight text-primary">
        You're Getting a Sales Team.
      </h3>

      <p className="mb-12 max-w-lg text-muted-foreground">
        Your sales team now has AI employees doing the work. They work together across the entire sales development process:
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
