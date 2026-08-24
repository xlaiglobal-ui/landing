import { Scale, Landmark, Radio } from "lucide-react"

const clients = [
  {
    icon: Scale,
    tag: "Legal Tech",
    body: "An AI-powered legal contract platform backed by institutional investors.",
  },
  {
    icon: Landmark,
    tag: "Fintech",
    body: "A fast-growing finance automation startup building next-generation AI-driven accounts payable tools.",
  },
  {
    icon: Radio,
    tag: "Media & Identity",
    body: "An early-stage media and entertainment technology company building in the digital identity space.",
  },
]

export function SocialProof() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Who We&apos;ve Worked With</p>
        <h2 className="mb-4 text-4xl font-black tracking-tight text-foreground">
          Real, Funded Companies. Real Pipelines.
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          We run outbound for backed, fast-moving B2B companies — not hypothetical case studies. Client names stay
          confidential per our engagement agreements, but here&apos;s who we&apos;ve built pipeline for recently:
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {clients.map((c) => (
            <div key={c.tag} className="rounded-xl border border-border bg-background p-6">
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <c.icon className="size-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">{c.tag}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
