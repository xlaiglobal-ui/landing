import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Booking() {
  return (
    <section id="book" className="relative overflow-hidden border-t border-border px-4 py-24 text-center">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        <h2 className="mb-4 text-5xl font-black tracking-tight text-foreground">
          Your Sales Team Is Already Here.
        </h2>

        <p className="mb-3 text-2xl font-bold text-primary">
          Stop Hiring SDRs.
        </p>

        <p className="mb-8 text-2xl font-bold text-foreground">
          Start Your AI Sales Team.
        </p>

        <div className="mb-8 text-lg font-semibold text-muted-foreground">
          <p>Your ICP · Your strategy · Your guardrails · Our AI</p>
        </div>

        <div className="mb-8 flex flex-col items-center gap-3">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="https://app.xlai.live/signup">
              Build My AI Sales Team — Free for 30 Days
              <ChevronRight className="size-4" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            No credit card required · Cancel anytime
          </p>
        </div>

        <p className="text-muted-foreground">
          You set the rules. AI does the work.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div
          className="calendly-inline-widget rounded-2xl border border-border"
          data-url="https://calendly.com/xlai-global/discovery?hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "700px" }}
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </div>
    </section>
  )
}
