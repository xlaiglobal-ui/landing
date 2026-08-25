"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#what", label: "What We Do" },
  { href: "#how", label: "How It Works" },
  { href: "#fit", label: "Who We Work With" },
  { href: "#pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isCareersPage = pathname === "/careers"
  const hashHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {!isCareersPage && (
        <Link
          href="/careers"
          className="fixed inset-x-0 top-0 z-50 flex h-10 items-center justify-center gap-1.5 bg-primary px-4 text-center text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:text-sm"
        >
          We&apos;re hiring commission-only Sales Development Reps — uncapped earnings
          <ArrowRight className="size-3.5 shrink-0" />
        </Link>
      )}

      <header
        className={cn(
          "fixed inset-x-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md transition-[top,box-shadow,background-color] duration-200",
          isCareersPage ? "top-0" : "top-10",
          scrolled && "bg-background/95 shadow-lg shadow-black/10"
        )}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="text-lg font-extrabold tracking-widest text-foreground">
            <span className="text-primary">XL</span>AI
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href.startsWith("/") ? l.href : hashHref(l.href)}
                className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link href={hashHref("#book")}>Book a Call</Link>
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md transition-all duration-200 md:hidden",
          isCareersPage ? "top-14" : "top-24",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href.startsWith("/") ? l.href : hashHref(l.href)}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-t border-border/60">
            <Button asChild className="w-full" onClick={() => setOpen(false)}>
              <Link href={hashHref("#book")}>Book a Call</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
