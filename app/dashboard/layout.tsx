import { headers } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import { auth } from "@/lib/auth"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"
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
    <div className="min-h-screen bg-background md:flex">
      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:sticky md:top-0 md:flex md:h-screen">
        <div className="flex h-16 shrink-0 items-center px-6">
          <Link
            href="/dashboard"
            className="text-lg font-extrabold tracking-widest text-sidebar-foreground"
          >
            <span className="text-primary">XL</span>AI
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-3">
          <SidebarNav orientation="vertical" />
        </div>

        <div className="shrink-0 border-t border-sidebar-border p-3">
          <p className="truncate px-3 pb-2 text-xs text-muted-foreground">{session.user.email}</p>
          <SignOutButton />
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="flex flex-col gap-3 border-b border-border/60 px-4 py-3 md:hidden">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="text-lg font-extrabold tracking-widest text-foreground">
            <span className="text-primary">XL</span>AI
          </Link>
          <SignOutButton />
        </div>
        <SidebarNav orientation="horizontal" />
      </header>

      <main className="flex-1 px-4 py-10 md:px-10">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
    </div>
  )
}
