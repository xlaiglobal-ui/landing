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

const tags = ["Remote", "Commission-Only", "Contract", "B2B SaaS", "Uncapped Earnings"]

const commissionRows = [
  { deal: "$10,000", commission: "$400" },
  { deal: "$25,000", commission: "$1,000" },
  { deal: "$50,000", commission: "$2,000" },
  { deal: "$100,000", commission: "$4,000" },
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
          You book qualified demos for B2B software companies. You earn 4% of every deal
          that closes behind you. No base salary, no ceiling, no one counting your hours.
        </p>

        <Section title="About XL AI" first>
          <p>
            XL AI is a B2B SaaS sales agency. Software companies across legal, healthcare,
            finance, and media hire us to fill their pipeline. Our SDRs run outbound on
            their behalf — each rep is assigned one product and one ideal customer profile
            at a time, so you go deep on a single market instead of spreading thin across
            five.
          </p>
        </Section>

        <Section title="What you'll do">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Run outbound prospecting from lead lists and ICPs we provide — email,
              LinkedIn, and text/WhatsApp where appropriate.
            </li>
            <li>Write and send outreach using our messaging frameworks and AI tooling.</li>
            <li>Qualify responses and book intro and demo calls with real buyers.</li>
            <li>Hand off interested prospects to the client team or to us for closing.</li>
            <li>
              Join regular team sessions where we review messaging, test angles, and share
              what&apos;s converting.
            </li>
          </ul>
        </Section>

        <Section title="Compensation">
          <p>
            <strong className="font-semibold text-foreground">
              You earn 4% of the total value of every deal that closes from a meeting you
              booked.
            </strong>{" "}
            There is no base salary and no cap.
          </p>

          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Deal size
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Your commission
                  </th>
                </tr>
              </thead>
              <tbody>
                {commissionRows.map((r) => (
                  <tr key={r.deal} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 tabular-nums">{r.deal}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-primary">
                      {r.commission}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Your monthly income is a function of two things: how many qualified meetings
            you book, and how large the deals are. Three $25,000 deals in a month is $3,000
            to you.
          </p>

          <div className="rounded-xl border border-primary/25 bg-primary/5 p-5">
            <p className="font-semibold text-foreground">
              On payment timing — we&apos;d rather you hear this now than in month three.
            </p>
            <p className="mt-2 mb-0">
              Commission is paid roughly 15 days after our client receives their first
              payment from the customer. Between the demo you book, the client&apos;s sales
              cycle, and their billing terms, expect{" "}
              <strong className="font-semibold text-foreground">
                30–90 days from booked call to your first payout
              </strong>
              . This role rewards people who can build a pipeline before they need the
              income from it.
            </p>
          </div>
        </Section>

        <Section title="What we provide">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Vetted lead lists and defined ideal customer profiles — you are not sourcing
              from scratch.
            </li>
            <li>
              Outreach frameworks, message templates, and AI tooling that our team has
              already tested.
            </li>
            <li>A single assigned account so you can learn one buyer deeply.</li>
            <li>
              Transparent attribution — handoffs happen in tracked email threads and are
              logged in our systems, so credit is never in question.
            </li>
            <li>
              A written agreement covering commission structure, payment timing, and lead
              ownership before you start.
            </li>
          </ul>
        </Section>

        <Section title="Who we're looking for">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You can write a cold email that a busy executive actually answers. This
              matters more than years of experience.
            </li>
            <li>
              You&apos;re self-directed. Nobody will assign you a daily activity quota —
              the results are the quota.
            </li>
            <li>
              You&apos;re comfortable with rejection at volume and can keep sending after a
              quiet week.
            </li>
            <li>
              You have reliable internet, a professional LinkedIn presence, and overlap
              with U.S. business hours.
            </li>
            <li>
              Prior SDR, recruiting, fundraising, or agency outreach experience is a plus,
              not a requirement.
            </li>
          </ul>
        </Section>

        <Section title="This is probably not for you if">
          <ul className="list-disc space-y-2 pl-5">
            <li>You need predictable income in the next 60 days.</li>
            <li>You want a manager structuring your day.</li>
            <li>You&apos;re looking for inbound or warm leads — this role is outbound.</li>
          </ul>
          <p>
            We&apos;d rather you self-select out now than three weeks in. Commission-only
            is a real trade: you take on the income risk, and in exchange nobody caps what
            you make or tells you when to log on.
          </p>
        </Section>

        <Section title="Conditions worth naming upfront">
          <p>
            The prospect lists and ICP data we provide are XL AI property. They can&apos;t
            be reused to sell other products or for personal use. Full terms are in the
            written agreement, which you&apos;ll review before committing to anything.
          </p>
        </Section>

        <div className="mt-16 border-t border-border pt-10">
          <h2 className="mb-3 text-sm font-bold tracking-widest text-muted-foreground uppercase">
            How to apply
          </h2>
          <p className="mb-6 text-foreground/90">
            Send us your LinkedIn profile and a short note on the most difficult person
            you&apos;ve ever gotten a meeting with, and how you did it. Skip the cover
            letter — that story tells us more.
          </p>
          <Button asChild size="lg">
            <a href="mailto:info@xlai.live?subject=SDR%20Application">
              Apply for this role
              <ChevronRight className="size-4" />
            </a>
          </Button>
          <p className="mt-8 text-sm text-muted-foreground">
            This is an independent contractor position compensated solely by commission.
            Earnings depend on individual performance and deal volume, and are not
            guaranteed. XL AI is an equal opportunity organization.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
