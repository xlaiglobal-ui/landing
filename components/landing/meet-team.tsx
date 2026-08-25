import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { ChevronRight } from "lucide-react"

export function MeetTeam() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center md:px-8">
      <Reveal>
        <h2 className="mb-8 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Meet Your New Sales Team.
        </h2>

        <div className="mb-10 space-y-2 text-lg font-semibold">
          <p className="text-foreground">AI finds the opportunities.</p>
          <p className="text-foreground">Humans create the conversations.</p>
          <p className="text-primary">Your team closes the deals.</p>
        </div>

        <Button asChild size="lg">
          <a href="#book">
            Book a Strategy Call
            <ChevronRight className="size-4" />
          </a>
        </Button>
      </Reveal>
    </section>
  )
}
