import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const faqs = [
  {
    question: "Is the sales team actually human?",
    answer:
      "Yes. Our sales representatives are real people. We use AI to make them more productive, but we don't replace human sales conversations with AI voice bots.",
  },
  {
    question: "Does XLAI make the calls?",
    answer: "Yes. Our human sales representatives handle calling, qualification, follow-up, and appointment setting.",
  },
  {
    question: "What does AI actually do?",
    answer:
      "AI helps with prospect research, lead enrichment, personalization, email campaigns, follow-up workflows, CRM administration, and sales intelligence.",
  },
  {
    question: "Do I need to hire anyone?",
    answer: "No. XLAI is designed to operate as your outsourced sales development team.",
  },
  {
    question: "Who is this best for?",
    answer:
      "We primarily focus on B2B companies with a clearly defined target customer and an offer that can be sold through outbound sales.",
  },
  {
    question: "How do you charge?",
    answer: "We operate on a predictable monthly fee based on the scope and volume of the sales operation.",
  },
  {
    question: "Do you guarantee meetings?",
    answer:
      "Meeting volume depends on your market, offer, ICP, pricing, and campaign performance. During the strategy call, we'll establish realistic targets before launching.",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* FAQ Section */}
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">FAQ</p>
        <h2 className="mb-12 text-4xl font-black tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="mb-2 font-bold text-foreground">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
          <div className="mb-8 text-center">
            <span className="text-sm font-extrabold tracking-widest text-foreground">
              <span className="text-primary">XL</span>AI
            </span>
            <p className="mt-3 text-sm font-semibold text-foreground">
              AI-powered sales infrastructure.
              <br />
              Human-powered sales conversations.
            </p>
            <p className="mt-2 text-sm text-primary">You close. We fill the calendar.</p>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="mailto:info@xlai.live" className="transition-colors hover:text-foreground">
              info@xlai.live
            </a>
            <Link href="/careers" className="transition-colors hover:text-foreground">
              Careers
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
            <span>© 2026 XLAI · xlai.live</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
