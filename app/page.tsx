import { Nav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { Companies } from "@/components/landing/companies"
import { Stats } from "@/components/landing/stats"
import { HowItWorks } from "@/components/landing/how-it-works"
import { WhyXlai } from "@/components/landing/why-xlai"
import { WhoWeWorkWith } from "@/components/landing/who-we-work-with"
import { Process } from "@/components/landing/process"
import { Booking } from "@/components/landing/booking"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Companies />
        <Stats />
        <HowItWorks />
        <WhyXlai />
        <WhoWeWorkWith />
        <Process />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
