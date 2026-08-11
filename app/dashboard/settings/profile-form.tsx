"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export function ProfileForm({ name: initialName, email }: { name: string; email: string }) {
  const router = useRouter()
  const [name, setName] = useState(initialName)
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("saving")

    const { error } = await authClient.updateUser({ name })

    if (error) {
      setStatus("error")
      return
    }

    setStatus("saved")
    router.refresh()
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setStatus("idle")
          }}
          className="h-10 max-w-sm rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-foreground">Email</label>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" size="sm" disabled={status === "saving" || name === initialName}>
          {status === "saving" && <Loader2 className="size-4 animate-spin" />}
          Save changes
        </Button>
        {status === "saved" && <span className="text-sm text-muted-foreground">Saved.</span>}
        {status === "error" && (
          <span className="text-sm text-destructive">Couldn&apos;t save. Try again.</span>
        )}
      </div>
    </form>
  )
}
