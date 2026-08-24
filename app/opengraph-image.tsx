import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const runtime = "nodejs"
export const alt = "XLAI — Your Sales Team. Without the Hiring Headache."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage() {
  const font = readFileSync(
    join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf")
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Geist",
        }}
      >
        {/* Red radial glow — top center */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 600,
            background:
              "radial-gradient(ellipse at center, rgba(232,21,27,0.22) 0%, rgba(232,21,27,0.06) 45%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            display: "flex",
          }}
        />

        {/* Top row: logo + badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
            <span style={{ fontSize: 36, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em" }}>
              XL
            </span>
            <span style={{ fontSize: 36, fontWeight: 900, color: "#E8151B", letterSpacing: "-0.02em" }}>
              AI
            </span>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(232,21,27,0.12)",
              border: "1px solid rgba(232,21,27,0.35)",
              borderRadius: 100,
              padding: "8px 18px",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#E8151B",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#E8151B",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Onboarding New Accounts
            </span>
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontSize: 72,
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              Booked Calls &amp; Appointments
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 900,
                color: "#E8151B",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              — Done For You.
            </span>
          </div>

          <p
            style={{
              fontSize: 22,
              color: "#888888",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: 680,
            }}
          >
            AI-powered outbound and real human sales reps — built and run for
            you, so qualified prospects land straight on your calendar.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
          }}
        >
          {/* Stats */}
          <div style={{ display: "flex", gap: 40 }}>
            {[
              { value: "AI +", label: "Human Reps" },
              { value: "Flat Fee", label: "Monthly" },
              { value: "Cancel", label: "Anytime" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 22, fontWeight: 900, color: "#E8151B", letterSpacing: "-0.02em" }}>
                  {s.value}
                </span>
                <span style={{ fontSize: 13, color: "#666666", fontWeight: 500, letterSpacing: "0.03em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Domain */}
          <span style={{ fontSize: 18, color: "#555555", fontWeight: 500, letterSpacing: "0.04em" }}>
            xlai.live
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: font, style: "normal", weight: 400 }],
    }
  )
}
