import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "XLAI — Your Sales Team. Without the Hiring Headache.",
  description:
    "XLAI builds and runs outbound sales teams that put qualified prospects on your calendar — AI-powered prospecting and email automation, backed by real human sales representatives.",
  metadataBase: new URL("https://xlai.live"),
  openGraph: {
    title: "XLAI — Your Sales Team. Without the Hiring Headache.",
    description: "We build the pipeline. You close the deals.",
    siteName: "XLAI",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn("dark antialiased", inter.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider defaultTheme="dark" enableSystem={false}>
          <div aria-hidden className="bg-grid-fade pointer-events-none fixed inset-0 -z-10" />
          {children}
        <SpeedInsights />
        <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
