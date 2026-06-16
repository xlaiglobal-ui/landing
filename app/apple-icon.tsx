import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const runtime = "nodejs"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  const font = readFileSync(
    join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf")
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 38,
          fontFamily: "Geist",
        }}
      >
        {/* Red glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% 35%, rgba(232,21,27,0.28) 0%, transparent 65%)",
            borderRadius: 38,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "baseline", position: "relative", zIndex: 1 }}>
          <span style={{ fontSize: 76, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em" }}>
            XL
          </span>
          <span style={{ fontSize: 76, fontWeight: 900, color: "#E8151B", letterSpacing: "-0.04em" }}>
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
