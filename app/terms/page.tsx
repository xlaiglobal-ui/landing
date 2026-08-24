import type { Metadata } from "next"
import { Nav } from "@/components/landing/nav"
import { Footer } from "@/components/landing/footer"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Terms of Service | XLAI",
  description: "The terms that govern your use of xlai.live and XLAI's services.",
}

function Section({
  title,
  first = false,
  children,
}: {
  title: string
  first?: boolean
  children: React.ReactNode
}) {
  return (
    <section className={cn("mt-11", first && "mt-8")}>
      <h2
        className={cn(
          "mb-3.5 border-t border-border pt-6 text-sm font-bold tracking-widest text-muted-foreground uppercase",
          first && "border-0 pt-0"
        )}
      >
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed text-foreground/90">{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-24 md:px-8">
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">Terms of Service</h1>
        <p className="mt-2 text-sm font-medium text-muted-foreground">Last updated: August 24, 2026</p>

        <Section title="Acceptance of terms" first>
          <p>
            These terms govern your use of xlai.live. By browsing this site, booking a call, or submitting a
            form, you agree to these terms. If you don&apos;t agree, please don&apos;t use the site.
          </p>
        </Section>

        <Section title="What this site is">
          <p>
            This website is informational — it describes XLAI&apos;s outbound sales services and lets you
            book an introductory call. It does not itself create a service agreement. Any engagement for
            XLAI&apos;s sales services is governed by a separate written agreement signed by both parties,
            which will control over anything on this site in the event of a conflict.
          </p>
        </Section>

        <Section title="Scheduling">
          <p>
            Call scheduling is handled through Calendly, a third-party service. Your use of that scheduling
            widget is also subject to Calendly&apos;s own terms and privacy policy.
          </p>
        </Section>

        <Section title="No guaranteed results">
          <p>
            Any figures, timelines, or outcomes referenced on this site (including pricing, deal-cycle, or
            performance examples) are illustrative, not guarantees. Actual results depend on your market,
            offer, pricing, and campaign performance, and are addressed directly in your service agreement.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            The content on this site — copy, design, and branding — belongs to XLAI and may not be copied or
            reused without our permission.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>
            Don&apos;t use this site in a way that could damage, disable, or impair it, or attempt to gain
            unauthorized access to any part of it or its underlying systems.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            This site and its content are provided &quot;as is,&quot; without warranties of any kind. To the
            fullest extent permitted by law, XLAI is not liable for any indirect, incidental, or consequential
            damages arising from your use of this site.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            We may update these terms from time to time. Continued use of the site after changes are posted
            means you accept the updated terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:info@xlai.live" className="text-primary hover:underline">
              info@xlai.live
            </a>
            .
          </p>
        </Section>
      </main>
      <Footer />
    </>
  )
}
