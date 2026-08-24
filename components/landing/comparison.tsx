const rows = [
  ["Hire SDRs", "Managed sales team"],
  ["Months to build", "Launch quickly"],
  ["Salaries + benefits", "Predictable monthly fee"],
  ["Manual prospecting", "AI-powered prospecting"],
  ["Manual email", "Automated campaigns"],
  ["Hire callers", "Human XLAI sales reps"],
  ["Multiple vendors", "One partner"],
  ["Build everything yourself", "We run it for you"],
]

export function ComparisonSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">The XLAI Advantage</p>
      <h2 className="mb-12 text-4xl font-black tracking-tight text-foreground">
        Traditional Sales Team vs. XLAI
      </h2>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="bg-muted px-6 py-4 text-left text-sm font-bold text-foreground">
                Traditional Sales Team
              </th>
              <th className="bg-primary/10 px-6 py-4 text-left text-sm font-bold text-primary">XLAI</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-border last:border-b-0 hover:bg-card/50">
                <td className="px-6 py-4 text-sm text-muted-foreground">{row[0]}</td>
                <td className="px-6 py-4 text-sm font-medium text-primary">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
