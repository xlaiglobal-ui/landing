const companies = [
  { name: "Impersonas", href: "https://impersonas.com/" },
  { name: "Brex", href: "https://www.brex.com/solutions/startups?partnerId=espm_xlai" },
  { name: "Eric Beasley", href: "https://www.ericbeasley.co/" },
]

export function Companies() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Companies We Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-black tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
