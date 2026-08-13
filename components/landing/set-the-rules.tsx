export function SetTheRules() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-24 md:px-8">
        <h2 className="mb-8 text-4xl font-black tracking-tight text-foreground">
          You Set the Rules.
        </h2>
        <h3 className="mb-12 text-3xl font-bold tracking-tight text-primary">
          AI Does the Work.
        </h3>

        <div className="mb-12 rounded-xl border border-primary/30 bg-primary/5 p-8">
          <p className="mb-6 text-center font-semibold text-foreground">
            You define:
          </p>
          <div className="grid gap-4 text-center sm:grid-cols-2">
            <div className="text-sm text-muted-foreground">Who you sell to</div>
            <div className="text-sm text-muted-foreground">What you sell</div>
            <div className="text-sm text-muted-foreground">How you position it</div>
            <div className="text-sm text-muted-foreground">How you communicate</div>
            <div className="text-sm text-muted-foreground">What AI can/cannot do</div>
            <div className="text-sm text-muted-foreground">Your sales guardrails</div>
          </div>
        </div>

        <div className="space-y-3 text-center">
          <p className="text-lg font-semibold text-primary">Then XLAI operates inside those boundaries.</p>
          <div className="space-y-1">
            <p className="text-lg font-bold text-foreground">You stay in control.</p>
            <p className="text-lg font-bold text-muted-foreground">AI handles the execution.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
