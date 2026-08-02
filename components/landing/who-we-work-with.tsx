const criteria = [
  { label: "Post-PMF SaaS:", body: "you have 10+ paying customers and a repeatable use case" },
  { label: "ACV $10K–$100K:", body: "deals large enough to justify commission, short enough to close fast" },
  { label: "30–90 day cycles:", body: "no 12-month enterprise procurement loops" },
  { label: "Clear ICP:", body: "you know exactly who buys and why" },
  { label: "Founder / sales lead available:", body: "to run demos and answer questions during the deal" },
]

export function WhoWeWorkWith() {
  return (
    <section id="fit" className="border-y border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-24 md:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          Who We Work With
        </p>

        <h2 className="mb-4 text-4xl font-black tracking-tight text-foreground">
          Is XLAI Right for You?
        </h2>
        <p className="mb-8 text-muted-foreground">
          We work best with SaaS companies that have product-market fit and
          are ready to scale revenue without scaling headcount.
        </p>
        <ul className="flex flex-col gap-4">
          {criteria.map((c) => (
            <li key={c.label} className="flex items-start gap-3 text-sm">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
              <span className="text-muted-foreground">
                <span className="font-semibold text-foreground">{c.label}</span>{" "}
                {c.body}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
