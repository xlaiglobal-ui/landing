export function HowItWorks() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 md:px-8">
      <h2 className="mb-8 text-4xl font-black tracking-tight text-foreground">
        Stop Hiring SDRs to Do Work AI Can Do.
      </h2>

      <p className="mb-8 text-lg text-muted-foreground">
        Building outbound sales means assembling an entire stack:
      </p>

      <div className="mb-12 grid gap-3 sm:grid-cols-2">
        {["SDRs", "Data", "Prospecting tools", "Enrichment", "Research", "Email", "LinkedIn", "CRM", "Sales engagement", "Training", "Management"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            {item}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-primary/30 bg-primary/5 p-8">
        <p className="mb-3 text-center text-lg font-semibold text-foreground">
          XLAI gives you the sales function in one system.
        </p>
        <p className="text-center text-sm text-muted-foreground">
          One subscription. One sales system. One team working toward your pipeline.
        </p>
      </div>
    </section>
  )
}
