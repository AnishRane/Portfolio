import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Anish Rane — Backend & AI Engineer",
  description:
    "Software Engineer at Xfinite Global (Eros International). I design microservices, MCP servers and tooling for AI agents, and decentralized systems — and I've shipped 2 published SDKs used by AI agents.",
  keywords:
    "Backend Engineer, AI Engineer, MCP, DPSN, NestJS, Node.js, Web3, AWS, GCP, TypeScript, AI Agents, Solana, Ethereum",
  authors: [{ name: "Anish Rane" }],
  openGraph: {
    title: "Anish Rane — Backend & AI Engineer",
    description:
      "Backend & systems engineer building scalable microservices, AI/MCP infrastructure, and Web3 payment systems. Authored 2 published SDKs (npm + PyPI).",
    type: "website",
  },
  generator: "AnishRane",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
