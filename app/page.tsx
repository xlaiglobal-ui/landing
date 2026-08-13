import { Nav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { Workflow } from "@/components/landing/workflow"
import { SetTheRules } from "@/components/landing/set-the-rules"
import { Features } from "@/components/landing/features"
import { TrialSection } from "@/components/landing/trial-section"
import { Booking } from "@/components/landing/booking"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Workflow />
        <SetTheRules />
        <Features />
        <TrialSection />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
