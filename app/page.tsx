import { Nav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { StopHiring } from "@/components/landing/stop-hiring"
import { AiHuman } from "@/components/landing/ai-human"
import { WhatWeDo } from "@/components/landing/what-we-do"
import { WhoWeWorkWith } from "@/components/landing/who-we-work-with"
import { HowXlaiWorks } from "@/components/landing/how-xlai-works"
import { SocialProof } from "@/components/landing/social-proof"
import { Pricing } from "@/components/landing/pricing"
import { ComparisonSection } from "@/components/landing/comparison"
import { NotLeads } from "@/components/landing/not-leads"
import { MeetTeam } from "@/components/landing/meet-team"
import { Booking } from "@/components/landing/booking"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StopHiring />
        <AiHuman />
        <WhatWeDo />
        <WhoWeWorkWith />
        <HowXlaiWorks />
        <SocialProof />
        <Pricing />
        <ComparisonSection />
        <NotLeads />
        <MeetTeam />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
