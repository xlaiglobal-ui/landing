import { Reveal } from "@/components/ui/reveal"

const segments = [
  { title: "B2B SaaS", body: "Need more demos? We'll build the outbound engine." },
  { title: "Technology Companies", body: "Turn your sales development into a predictable pipeline." },
  { title: "Professional Services", body: "Put qualified decision-makers on your calendar." },
  { title: "Startups", body: "Get a sales team without immediately building a large internal sales organization." },
  { title: "Growth Companies", body: "Scale outbound without scaling headcount at the same rate." },
]

export function WhoWeWorkWith() {
  return (
    <section id="fit" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
        <Reveal>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Who We Work With</p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-foreground">
            Built for Companies That Need More Customers.
          </h2>
          <p className="mb-12 max-w-2xl text-muted-foreground">
            XLAI is designed for businesses where one new customer can justify the cost of an entire sales campaign.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="card-hover h-full rounded-xl border border-border bg-background p-6">
                <h3 className="mb-2 font-bold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
