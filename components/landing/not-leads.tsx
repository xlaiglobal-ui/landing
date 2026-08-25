import { Reveal } from "@/components/ui/reveal"

export function NotLeads() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center md:px-8">
        <Reveal>
          <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">We Don&apos;t Sell Leads.</h2>
          <h3 className="mb-8 text-3xl font-bold tracking-tight text-primary">We Build Sales Opportunities.</h3>
        </Reveal>

        <Reveal delay={100}>
          <p className="mb-8 text-lg text-muted-foreground">There&apos;s a difference.</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mb-8 space-y-2 text-lg text-muted-foreground">
            <p>A list of 10,000 names isn&apos;t a sales pipeline.</p>
            <p>10,000 emails sent isn&apos;t a sales pipeline.</p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mb-8 text-2xl font-bold text-foreground">A qualified prospect on your calendar is.</p>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-lg font-semibold text-primary">That&apos;s what XLAI is built to deliver.</p>
        </Reveal>
      </div>
    </section>
  )
}
