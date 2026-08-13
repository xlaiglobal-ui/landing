const steps = [
  {
    icon: "🎯",
    title: "Define",
    body: "We learn your company, ICP, offer, positioning, buying triggers, competitors, and sales strategy. You approve the strategy and guardrails. Then the AI gets to work.",
  },
  {
    icon: "🔍",
    title: "Find",
    body: "The system identifies hundreds of potential prospects matching your ICP. It researches companies, decision-makers, roles, buying signals, and relevant context.",
  },
  {
    icon: "✍️",
    title: "Personalize",
    body: "Every prospect is evaluated individually. The AI uses company information, role, industry, signals, and research to determine the right approach.",
  },
  {
    icon: "📨",
    title: "Reach",
    body: "Your AI sales team executes campaigns across email, LinkedIn, phone, and other channels. No generic blast-and-pray campaigns.",
  },
  {
    icon: "🔄",
    title: "Follow Up",
    body: "Most sales don't happen after the first message. XLAI continuously follows up with prospects based on the conversation and your approved strategy.",
  },
  {
    icon: "💬",
    title: "Converse",
    body: "When prospects respond, the AI can handle the conversation. It can answer questions, qualify interest, handle objections, and move qualified prospects toward a meeting.",
  },
  {
    icon: "📅",
    title: "Book",
    body: "Qualified prospects are routed to your calendar. Your job starts when the meeting starts.",
  },
  {
    icon: "🚀",
    title: "Learn",
    body: "The system continuously learns from replies, positive responses, meetings held, closed deals, and founder feedback. Your sales system gets smarter over time.",
  },
]

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-3xl px-4 py-24 md:px-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
        Your AI Sales Team
      </p>
      <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
        Does the Work
      </h2>
      <p className="mb-12 text-muted-foreground">
        From strategy to booked meetings.
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
              <h3 className="mb-1 font-bold text-foreground text-lg">0{i + 1} — {s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
