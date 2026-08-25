"use client"

import { useRef } from "react"

export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        el.style.setProperty("--x", `${e.clientX - rect.left}px`)
        el.style.setProperty("--y", `${e.clientY - rect.top}px`)
      }}
      className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--primary) 15%, transparent), transparent 70%)",
      }}
    />
  )
}
