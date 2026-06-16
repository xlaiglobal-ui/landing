import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const runtime = "nodejs"
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default async function Icon() {
  const font = readFileSync(
    join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf")
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          fontFamily: "Geist",
        }}
      >
        {/* Subtle red glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% 40%, rgba(232,21,27,0.25) 0%, transparent 70%)",
            borderRadius: 6,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "baseline", position: "relative", zIndex: 1 }}>
          <span style={{ fontSize: 14, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em" }}>
            XL
          </span>
          <span style={{ fontSize: 14, fontWeight: 900, color: "#E8151B", letterSpacing: "-0.04em" }}>
            AI
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
