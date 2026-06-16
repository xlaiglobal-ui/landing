import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const runtime = "nodejs"
export const alt = "XLAI — Commission-Only B2B SaaS Sales"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Re-export the same image for Twitter
export { default } from "./opengraph-image"
