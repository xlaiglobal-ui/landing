import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { AIChatIntake } from "@/components/dashboard/ai-chat-intake"

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const firstName = session?.user.name?.split(" ")[0]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Welcome{firstName ? `, ${firstName}` : ""}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Let's configure your AI sales team. Answer a few questions and we'll get you set up.
        </p>
      </div>

      <AIChatIntake />
    </div>
  )
}
