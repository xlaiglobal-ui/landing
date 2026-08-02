import type { Metadata } from "next"
import { ChevronRight } from "lucide-react"
import { Nav } from "@/components/landing/nav"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Careers — Sales Development Representative | XLAI",
  description:
    "XLAI is hiring commission-only Sales Development Representatives. Remote, uncapped earnings, 4% commission on every deal that closes behind you.",
}

const tags = ["Remote", "Commission-Only", "Independent Contractor", "B2B SaaS"]

const reasons = [
  {
    lead: "You go deep, not wide — and depth is where the money is.",
    body: "One product, one ideal customer profile, fully assigned to you. No juggling five accounts and being mediocre at all of them. You become the person who gets this specific buyer, and that's exactly what makes a cold email land instead of get deleted.",
  },
  {
    lead: "Our clients are genuinely good — and genuinely real.",
    body: "Right now that includes an AI-powered legal contract platform backed by institutional investors, a fast-growing finance automation startup building the next generation of AI-driven accounts payable tools, and an early-stage media/entertainment technology company building in the digital identity space. These are real products solving real problems for real companies — not vaporware you'll feel weird pitching. You're representing something you can actually stand behind on a call.",
  },
  {
    lead: "We hand you a loaded gun, not a blank page.",
    body: "Vetted lead lists. A defined ICP. Messaging frameworks and AI tooling our team has already tested and iterated on. You're not starting from zero — you're starting from what's already working.",
  },
  {
    lead: "Total freedom, zero micromanagement.",
    body: "No one is watching your hours, your Slack status, or your “activity metrics.” You run your own operation. For people who are actually good at this, that's not a risk — it's the whole appeal.",
  },
  {
    lead: "You'll get better, faster, than anywhere else.",
    body: "As we build out this team, we'll run regular sessions to compare notes on what's converting in real time — not stale playbooks, live intel from the field. Most people spend their first sales job learning generic fundamentals. You'll spend it learning how to actually get replies from people who ignore 200 emails a day. That skill compounds for the rest of your career, wherever you take it next.",
  },
  {
    lead: "Grow with us.",
    body: "As XL AI takes on more clients, reps who perform get first pick of new accounts, bigger ICPs, and more senior roles inside the org — this is a place to build something, not just clock in.",
  },
  {
    lead: "Attribution is airtight.",
    body: "Every handoff is logged and tracked in email threads and our systems. If you booked it, you get paid for it. No gray areas, no “actually that one doesn't count.”",
  },
  {
    lead: "Everything is in writing before you start anything.",
    body: "A real agreement covering commission, payment timing, and lead ownership — reviewed by you before you commit to a thing.",
  },
]

function Section({
  title,
  first = false,
  children,
}: {
  title: string
  first?: boolean
  children: React.ReactNode
}) {
  return (
    <section className={cn("mt-11", first && "mt-8")}>
      <h2
        className={cn(
          "mb-3.5 border-t border-border pt-6 text-sm font-bold tracking-widest text-muted-foreground uppercase",
          first && "border-0 pt-0"
        )}
      >
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed text-foreground/90">{children}</div>
    </section>
  )
}

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-24 md:px-8">
        <p className="mb-2.5 text-xs font-semibold tracking-widest text-primary uppercase">
          Now hiring
        </p>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Sales Development Representative
        </h1>
        <p className="mt-2 text-sm font-medium text-muted-foreground">
          Remote &middot; Commission-Only &middot; Independent Contractor &middot; B2B SaaS
        </p>

        <ul className="mt-6 mb-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-muted px-3.5 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <p className="mb-10 border-l-2 border-primary pl-5 text-lg text-foreground">
          Your income has no ceiling. We mean that literally.
        </p>

        <Section title="Your income has no ceiling" first>
          <p>
            Most &quot;entry-level&quot; sales jobs cap what you can earn — a fixed salary
            whether you book 2 meetings or 20. XL AI doesn&apos;t work that way. You earn 4%
            of every deal that closes from a meeting you booked, no cap, no diminishing
            returns, no manager deciding you&apos;ve &quot;earned enough this quarter.&quot;
          </p>
          <p>
            What does that actually look like? Land three mid-sized enterprise deals in a
            month — the kind our clients close regularly — and you&apos;re looking at
            several thousand dollars from a handful of great conversations. Land one big
            one, and that single deal can outearn what a salaried SDR makes in months.
            There&apos;s no ceiling because we don&apos;t build one in — your output is your
            paycheck, and it scales as far as your pipeline does.
          </p>
          <p>
            This isn&apos;t a &quot;grind for years to get promoted into real money&quot;
            role. It&apos;s a &quot;get good at this fast and the upside shows up
            immediately&quot; role.
          </p>
        </Section>

        <Section title="Why sharp people are choosing XL AI over a normal sales job">
          <ul className="list-disc space-y-3 pl-5">
            {reasons.map((r) => (
              <li key={r.lead}>
                <strong className="font-semibold text-foreground">{r.lead}</strong>{" "}
                {r.body}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="What you'll actually be doing">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Running outbound across email, LinkedIn, and text/WhatsApp using lead lists
              and ICPs we hand you
            </li>
            <li>Writing and sending outreach with our proven messaging frameworks and AI tools</li>
            <li>Qualifying responses and booking real demo calls with real buyers</li>
            <li>Handing off hot prospects to the client or closing team</li>
            <li>
              Sitting in on team sessions where we compare notes on what&apos;s converting
              right now
            </li>
          </ul>
        </Section>

        <Section title="Let's be straight about timing">
          <div className="rounded-xl border border-primary/25 bg-primary/5 p-5">
            <p>
              This is commission-only, and we&apos;d rather tell you the truth upfront than
              have you find out in month three: you&apos;ll typically see your first payout{" "}
              <strong className="font-semibold text-foreground">
                30–90 days after you book a meeting
              </strong>
              , once the deal closes and the client pays. Commission lands about 15 days
              after that.
            </p>
            <p className="mt-2 mb-0">
              That&apos;s the trade-off of a role with no ceiling — and it means the reps who
              do best here are the ones who start building pipeline in week one, before they
              need the income from it.
            </p>
          </div>
        </Section>

        <Section title="Is this you?">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You can write a cold email that a busy executive actually replies to — that
              instinct matters more here than a resume full of job titles
            </li>
            <li>
              You&apos;re the kind of self-motivated person who treats &quot;no one&apos;s
              checking on you&quot; as freedom, not a lack of structure
            </li>
            <li>
              You want to build a real, transferable skill — persuasive writing and outbound
              sales — not just clock hours
            </li>
            <li>
              You can take rejection at volume without it getting in your head, and keep
              sending after a slow week
            </li>
            <li>
              You have solid internet, a professional LinkedIn presence, and can overlap
              with U.S. business hours
            </li>
            <li>
              Bonus points for SDR, recruiting, fundraising, or agency outreach experience —
              but it&apos;s genuinely not required. What we can&apos;t teach is hustle and a
              way with words; the rest, we&apos;ll show you.
            </li>
          </ul>
          <p>
            This probably isn&apos;t the right fit if you need guaranteed income in the next
            two months, want a manager building your day for you, or are only looking for
            warm/inbound leads. That&apos;s a fair thing to know about yourself — better to
            find out now than three weeks in.
          </p>
        </Section>

        <Section title="One thing to know upfront">
          <p>
            The lead lists and ICP data we give you are XL AI property, licensed for this
            work only — not for reuse on other products or personal ventures. It&apos;s all
            spelled out plainly in the agreement you&apos;ll review before you commit to
            anything.
          </p>
        </Section>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="mb-3 text-sm font-bold tracking-widest text-muted-foreground uppercase">
            Ready to apply?
          </h2>
          <p className="mb-3 text-foreground/90">Skip the cover letter. Send us:</p>
          <ol className="mb-3 list-decimal space-y-1.5 pl-5 text-foreground/90">
            <li>Your LinkedIn profile</li>
            <li>
              A short story about the toughest person you ever landed a meeting with, and how
              you pulled it off
            </li>
          </ol>
          <p className="mb-6 text-foreground/90">
            That story tells us more than any resume could.
          </p>
          <Button asChild size="lg">
            <a href="mailto:info@xlai.live?subject=SDR%20Application">
              Apply for this role
              <ChevronRight className="size-4" />
            </a>
          </Button>
          <p className="mt-8 text-sm text-muted-foreground">
            This is an independent contractor position compensated solely by commission.
            Earnings depend on individual performance and deal volume and are not
            guaranteed. XL AI is an equal opportunity organization.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
