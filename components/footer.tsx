"use client"

import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { useCopyEmail } from "@/hooks/use-copy-email"

export function Footer() {
  const { copyEmail } = useCopyEmail()

  return (
    <footer className="bg-gradient-to-r from-background to-muted/20 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Anish Rane
              </h3>
              <p className="text-muted-foreground">Backend Developer & Web3 Specialist</p>
            </div>

            <div className="flex space-x-6">
              <button
                onClick={copyEmail}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Copy email"
              >
                <Mail className="h-5 w-5" />
              </button>
              <Link
                href="https://github.com/AnishRane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Anish Rane. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
