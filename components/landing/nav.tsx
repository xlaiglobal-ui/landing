"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#how", label: "How It Works" },
  { href: "#why", label: "Why XLAI" },
  { href: "#fit", label: "Who We Work With" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <a href="#" className="text-lg font-extrabold tracking-widest text-foreground">
            <span className="text-primary">XL</span>AI
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#book">Book a Call</a>
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
          "fixed inset-x-0 top-14 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md transition-all duration-200 md:hidden",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 pt-2 border-t border-border/60">
            <Button asChild className="w-full" onClick={() => setOpen(false)}>
              <a href="#book">Book a Call</a>
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
