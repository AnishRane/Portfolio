import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anish Rane - Backend Developer Portfolio",
  description:
    "Highly skilled Backend Developer with 4+ years of experience in scalable systems, Web3 applications, and cloud platforms.",
  keywords: "Backend Developer, NestJS, Node.js, Web3, AWS, GCP, Azure, TypeScript, JavaScript",
  authors: [{ name: "Anish Rane" }],
  openGraph: {
    title: "Anish Rane - Backend Developer Portfolio",
    description: "Experienced Backend Developer specializing in scalable systems and Web3 applications",
    type: "website",
  },
    generator: 'v0.dev'
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
