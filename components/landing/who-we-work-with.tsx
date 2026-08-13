const criteria = [
  { label: "Need more sales", body: "" },
  { label: "Don't want to hire an SDR team yet", body: "" },
  { label: "Don't want to manage outbound every day", body: "" },
  { label: "Don't want to stitch together 10 sales tools", body: "" },
  { label: "Have a clear product and ICP", body: "" },
  { label: "Want a scalable way to create pipeline", body: "" },
]

export function WhoWeWorkWith() {
  return (
    <section id="fit" className="border-y border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-24 md:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          Built For
        </p>

        <h2 className="mb-4 text-4xl font-black tracking-tight text-foreground">
          Founders Who Need Pipeline.
        </h2>
        <p className="mb-8 text-muted-foreground">
          XLAI is built for founders who:
        </p>
        <ul className="flex flex-col gap-4 mb-12">
          {criteria.map((c) => (
            <li key={c.label} className="flex items-start gap-3 text-sm">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
              <span className="text-muted-foreground">
                <span className="font-semibold text-foreground">{c.label}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
          <p className="text-lg font-semibold text-foreground">
            Give us your ICP.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll build the machine.
          </p>
        </div>
      </div>
    </section>
  )
}
