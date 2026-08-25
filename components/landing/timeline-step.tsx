"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function TimelineStep({
  icon,
  title,
  body,
  index,
  isLast,
}: {
  icon: React.ReactNode
  title: string
  body: string
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex gap-5 pb-8 last:pb-0">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-full border bg-card transition-all duration-500 ease-out",
            visible ? "scale-100 border-primary/60 opacity-100" : "scale-75 border-border opacity-0"
          )}
        >
          {icon}
        </div>

        {!isLast && (
          <div className="relative mt-2 w-px flex-1">
            <div className="absolute inset-0 bg-border" />
            <div
              className="absolute inset-0 bg-primary transition-transform duration-700 ease-out"
              style={{
                transformOrigin: "top",
                transform: visible ? "scaleY(1)" : "scaleY(0)",
                transitionDelay: "200ms",
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={cn("pt-2 pb-4 transition-all duration-500 ease-out", visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")}
        style={{ transitionDelay: visible ? "100ms" : "0ms" }}
      >
        <h3 className="mb-1 text-lg font-bold text-foreground">
          0{index + 1} — {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </div>
  )
}
