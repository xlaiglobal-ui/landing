import { Reveal } from "@/components/ui/reveal"

const aiItems = [
  "Finding prospects",
  "Researching companies",
  "Enriching lead data",
  "Personalizing emails",
  "Building prospect lists",
  "Running email campaigns",
  "Managing follow-ups",
  "Updating CRM records",
  "Identifying high-intent prospects",
  "Reporting and optimization",
]

const humanItems = [
  "Cold calls",
  "Prospect conversations",
  "Qualification",
  "Follow-up calls",
  "Objection handling",
  "Relationship building",
  "Meeting booking",
]

export function AiHuman() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
        <Reveal className="mb-4 text-center">
          <p className="text-sm text-muted-foreground">We&apos;re not replacing salespeople with AI.</p>
          <h2 className="mt-1 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            AI Does the Work. <span className="text-primary">Humans Do the Selling.</span>
          </h2>
          <p className="mt-3 text-lg font-semibold text-foreground">We&apos;re giving salespeople AI.</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-hover h-full rounded-xl border border-border bg-background p-8">
              <h3 className="mb-1 text-xl font-bold text-primary">AI-Powered</h3>
              <p className="mb-6 text-sm text-muted-foreground">AI handles the repetitive work:</p>
              <ul className="flex flex-col gap-3">
                {aiItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-hover h-full rounded-xl border border-primary/30 bg-primary/5 p-8">
              <h3 className="mb-1 text-xl font-bold text-foreground">Human-Powered</h3>
              <p className="mb-6 text-sm text-muted-foreground">Our sales team handles the conversations:</p>
              <ul className="flex flex-col gap-3">
                {humanItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-lg font-bold text-foreground">
            The result: <span className="text-primary">AI efficiency + human sales.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
