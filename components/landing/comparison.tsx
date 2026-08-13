export function ComparisonSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <h2 className="mb-3 text-4xl font-black tracking-tight text-foreground">
        One AI Sales Team.
      </h2>
      <h3 className="mb-12 text-3xl font-bold tracking-tight text-primary">
        An Entire Outbound Function.
      </h3>

      <div className="mb-12 overflow-x-auto rounded-xl border border-border">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="bg-muted px-6 py-4 text-left text-sm font-bold text-foreground">
                Feature
              </th>
              <th className="bg-muted px-6 py-4 text-left text-sm font-bold text-foreground">
                Traditional SDR Team
              </th>
              <th className="bg-primary/10 px-6 py-4 text-left text-sm font-bold text-primary">
                XLAI
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Recruit", "Recruit", "Subscribe"],
              ["Deploy", "Deploy", "Deploy"],
              ["Hire", "Hire", "Subscribe"],
              ["Training", "Training", "Configure"],
              ["Manage", "Manage", "Automate"],
              ["Cost", "Salary + benefits", "Monthly subscription"],
              ["Tools", "Buy multiple tools", "Integrated sales operation"],
              ["Capacity", "Limited human capacity", "AI-scale prospecting"],
              ["Follow-up", "Manual follow-up", "Automated follow-up"],
              ["Research", "Human research", "AI research"],
              ["Personalization", "Human personalization", "AI personalization"],
              ["CRM", "Manual CRM updates", "Automated CRM"],
              ["Optimization", "Periodic optimization", "Continuous learning"],
            ].map((row, i) => (
              <tr
                key={i}
                className="border-b border-border last:border-b-0 hover:bg-card/50"
              >
                <td className="px-6 py-4 font-semibold text-foreground">
                  {row[0]}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {row[1]}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-primary">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
        <p className="text-lg font-semibold text-foreground">
          Stop building the infrastructure around your sales team.
        </p>
        <p className="mt-2 text-lg font-semibold text-foreground">
          Build the sales team into the infrastructure.
        </p>
      </div>
    </section>
  )
}
