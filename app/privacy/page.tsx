import type { Metadata } from "next"
import { Nav } from "@/components/landing/nav"
import { Footer } from "@/components/landing/footer"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Privacy Policy | XLAI",
  description: "How XLAI collects, uses, and protects your information.",
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

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-24 md:px-8">
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
        <p className="mt-2 text-sm font-medium text-muted-foreground">Last updated: August 24, 2026</p>

        <Section title="Overview" first>
          <p>
            This policy explains what information XLAI (&quot;XLAI,&quot; &quot;we,&quot; &quot;us&quot;)
            collects through xlai.live, how we use it, and the choices you have. By using this site, you agree
            to the practices described here.
          </p>
        </Section>

        <Section title="Information we collect">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-foreground">Information you provide</strong> — your name,
              email, company, and any details you share when you book a call, submit a form, or email us.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Scheduling data</strong> — when you book a call
              through our Calendly widget, Calendly collects and processes your booking details under its own
              privacy policy.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Usage data</strong> — basic analytics (pages
              viewed, device/browser type, general location) collected automatically via Vercel Analytics and
              Speed Insights to help us understand how the site is used.
            </li>
          </ul>
        </Section>

        <Section title="How we use it">
          <ul className="list-disc space-y-2 pl-5">
            <li>To respond to inquiries and schedule calls</li>
            <li>To evaluate fit and prepare for strategy calls</li>
            <li>To deliver and improve our services for active clients</li>
            <li>To understand and improve this website</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </Section>

        <Section title="Sharing">
          <p>
            We share information only with service providers that help us run our business — for example,
            Calendly (scheduling), our CRM, email, and hosting/analytics providers — and only to the extent
            needed for them to perform that function. We may also disclose information if required by law.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            This site uses minimal cookies and similar technologies for basic analytics. You can control
            cookies through your browser settings; disabling them may affect some site functionality.
          </p>
        </Section>

        <Section title="Data retention">
          <p>
            We keep information for as long as reasonably necessary for the purposes described above, or as
            required by law, and delete or anonymize it when it&apos;s no longer needed.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            You can ask us to access, correct, or delete the personal information we hold about you at any
            time by emailing{" "}
            <a href="mailto:info@xlai.live" className="text-primary hover:underline">
              info@xlai.live
            </a>
            .
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy from time to time. Material changes will be reflected by updating the
            date at the top of this page.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy? Email{" "}
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
