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
  title: "XLAI — Commission-Only B2B SaaS Sales",
  description:
    "XLAI is a commission-only B2B sales agency for SaaS companies. We close your deals — you pay only when we win.",
  metadataBase: new URL("https://xlai.live"),
  openGraph: {
    title: "XLAI — Commission-Only B2B SaaS Sales",
    description: "We close your deals. You pay when we win.",
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
          {children}
        <SpeedInsights />
        <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
