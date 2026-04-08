import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anish Rane - Backend Developer & AI OSS Contributor",
  description:
    "Backend developer & OSS contributor with 5+ years of experience. Authored DPSN SDKs for AI agents, contributed to GAME by Virtuals and GOAT SDK. Specializes in NestJS, Node.js, Web3, and cloud platforms.",
  keywords: "Backend Developer, AI Ecosystem, Open Source, DPSN, NestJS, Node.js, Web3, AWS, GCP, TypeScript, AI Agents",
  authors: [{ name: "Anish Rane" }],
  openGraph: {
    title: "Anish Rane - Backend Developer & AI OSS Contributor",
    description: "OSS contributor in the AI agent ecosystem. Authored DPSN SDKs and integrated with GAME by Virtuals & GOAT SDK.",
    type: "website",
  },
  generator: "AnishRane"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
