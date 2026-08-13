import { headers } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import { auth } from "@/lib/auth"
import { SignOutButton } from "./sign-out-button"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-8">
          <Link href="/dashboard" className="text-lg font-extrabold tracking-widest text-foreground">
            <span className="text-primary">XL</span>AI
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/reports"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Reports
            </Link>
            <Link
              href="/dashboard/settings"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Settings
            </Link>
            <SignOutButton />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 md:px-8">{children}</main>
    </div>
  )
}
