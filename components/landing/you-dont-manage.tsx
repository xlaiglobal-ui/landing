export function YouDontManage() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-24 md:px-8">
        <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
          You Don't Manage the AI.
        </h2>
        <h3 className="mb-8 text-3xl font-bold tracking-tight text-primary">
          You Manage the Business.
        </h3>

        <p className="mb-8 text-lg text-muted-foreground">
          You don't need to babysit hundreds of messages. You don't need to approve every individual email.
        </p>

        <div className="mb-12 rounded-xl border border-primary/30 bg-primary/5 p-8">
          <p className="mb-4 text-center font-semibold text-foreground">
            You approve the:
          </p>
          <div className="grid gap-4 text-center sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-bold text-foreground">ICP</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Strategy</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Messaging</p>
            </div>
            <div>
              <p className="font-bold text-foreground">Guardrails</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-lg font-semibold text-foreground">
            Then XLAI operates within those boundaries.
          </p>
          <div className="space-y-2">
            <p className="text-lg font-bold text-primary">You stay in control.</p>
            <p className="text-lg font-bold text-foreground">AI does the work.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
