import Script from "next/script"

export function Booking() {
  return (
    <section id="book" className="relative overflow-hidden border-t border-border px-4 py-24 text-center">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          Get Started
        </p>
        <h2 className="mx-auto mb-3 max-w-xl text-balance text-4xl font-black tracking-tight text-foreground">
          Ready to Add a{" "}
          <span className="text-primary">Commission-Only Sales Team?</span>
        </h2>
        <p className="mx-auto mb-12 max-w-md text-muted-foreground">
          15 minutes. No pitch deck. We&apos;ll tell you honestly if we&apos;re
          a fit — and what we&apos;d do in your market.
        </p>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border bg-white">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/xlai-global/discovery"
            style={{ minWidth: 320, height: 700 }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Having trouble?{" "}
          <a
            href="https://calendly.com/xlai-global/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Open booking page directly →
          </a>
        </p>
      </div>
    </section>
  )
}
