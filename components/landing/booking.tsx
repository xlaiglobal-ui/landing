import Script from "next/script"
import { Reveal } from "@/components/ui/reveal"

export function Booking() {
  return (
    <section id="book" className="relative overflow-hidden border-t border-border px-4 py-24 text-center">
      {/* Ambient glow — layered, slowly drifting */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div className="animate-drift h-[400px] w-[600px] rounded-full bg-primary/8 blur-[100px]" />
        <div className="animate-drift-reverse animate-glow-pulse absolute h-[280px] w-[380px] -translate-x-16 rounded-full bg-primary/8 blur-[90px]" />
      </div>

      <Reveal className="relative mx-auto max-w-2xl">
        <h2 className="mb-4 text-5xl font-black tracking-tight text-foreground">
          Ready to Build Your Pipeline?
        </h2>

        <p className="mb-3 text-2xl font-bold text-foreground">
          Let&apos;s Put Qualified Prospects on Your Calendar.
        </p>

        <p className="mb-8 text-lg text-muted-foreground">
          Tell us what you&apos;re selling, who you&apos;re trying to reach, and how much growth you&apos;re looking
          for. We&apos;ll show you how XLAI can build the sales engine to get you there.
        </p>
      </Reveal>

      <Reveal delay={150} className="relative mx-auto mt-8 max-w-3xl">
        <div
          className="calendly-inline-widget overflow-hidden rounded-2xl border border-border bg-card"
          data-url="https://calendly.com/xlai-global/discovery?hide_gdpr_banner=1&background_color=18181b&text_color=fafafa&primary_color=e8151b"
          style={{ minWidth: "320px", height: "700px" }}
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </Reveal>
    </section>
  )
}
