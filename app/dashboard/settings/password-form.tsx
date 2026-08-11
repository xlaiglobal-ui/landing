"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export function PasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("saving")
    setError(null)

    const { error } = await authClient.changePassword({
      currentPassword,
      newPassword,
      revokeOtherSessions: true,
    })

    if (error) {
      setStatus("error")
      setError(error.message ?? "Couldn't change password.")
      return
    }

    setStatus("saved")
    setCurrentPassword("")
    setNewPassword("")
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="current-password" className="text-sm font-medium text-foreground">
          Current password
        </label>
        <input
          id="current-password"
          type="password"
          autoComplete="current-password"
          required
          value={currentPassword}
          onChange={(e) => {
            setCurrentPassword(e.target.value)
            setStatus("idle")
          }}
          className="h-10 max-w-sm rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="new-password" className="text-sm font-medium text-foreground">
          New password
        </label>
        <input
          id="new-password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value)
            setStatus("idle")
          }}
          className="h-10 max-w-sm rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" size="sm" disabled={status === "saving"}>
          {status === "saving" && <Loader2 className="size-4 animate-spin" />}
          Update password
        </Button>
        {status === "saved" && <span className="text-sm text-muted-foreground">Updated.</span>}
        {status === "error" && <span className="text-sm text-destructive">{error}</span>}
      </div>
    </form>
  )
}
