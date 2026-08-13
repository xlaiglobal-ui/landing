import { ThemeToggle } from "@/components/theme-toggle"

const faqs = [
  {
    question: "Do I have to approve every message?",
    answer: "No. You approve the strategy and guardrails. The AI operates within those boundaries.",
  },
  {
    question: "Can it handle replies?",
    answer: "Yes. XLAI handles inbound conversations, qualifies prospects, and moves opportunities toward meetings.",
  },
  {
    question: "Who takes the meetings?",
    answer: "You do. XLAI creates and qualifies the opportunity. You take the meeting and close.",
  },
  {
    question: "How much does it cost?",
    answer: "XLAI is subscription-based with plans for different sales volumes. Start with a 30-day free trial.",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* FAQ Section */}
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
        <h2 className="mb-12 text-4xl font-black tracking-tight text-foreground">
          Common Questions
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="mb-2 font-bold text-foreground">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-muted-foreground sm:flex-row md:px-8">
          <span className="text-sm font-extrabold tracking-widest text-foreground">
            <span className="text-primary">XL</span>AI
          </span>
          <span>The AI Sales Operating System</span>
          <div className="flex items-center gap-4">
            <span>© 2026 XLAI · xlai.live</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
