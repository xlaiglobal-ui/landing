const stats = [
  { value: "$0", label: "Upfront cost to get started" },
  { value: "10–20%", label: "Commission on ACV closed" },
  { value: "30–90d", label: "Typical deal cycle we target" },
  { value: "100%", label: "Aligned incentives — we win when you win" },
]

export function Stats() {
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center px-4 py-8 text-center [&:not(:last-child)]:border-r-0 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-border border-b md:border-b-0 [&:nth-child(odd)]:border-r [&:nth-child(odd)]:border-border md:[&:nth-child(odd)]:border-r-0"
          >
            <span className="text-3xl font-black tracking-tight text-primary">
              {s.value}
            </span>
            <span className="mt-1.5 text-xs font-medium text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
