"use client"

import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export function SignOutButton() {
  const router = useRouter()

  async function onClick() {
    await authClient.signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <Button variant="ghost" size="sm" onClick={onClick}>
      <LogOut data-icon="inline-start" />
      Sign out
    </Button>
  )
}
