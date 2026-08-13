import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { AIChatIntake } from "@/components/dashboard/ai-chat-intake"

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const isUpdate = Boolean(session?.user.profileCompletedAt)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Company profile</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {isUpdate
            ? "Update what your AI sales team knows about your business."
            : "Tell us about your business so your AI sales team knows who to target and how to reach them."}
        </p>
      </div>

      <AIChatIntake />
    </div>
  )
}
