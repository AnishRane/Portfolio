"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { useCopyEmail } from "@/hooks/use-copy-email"

export function Hero() {
  const { copyEmail } = useCopyEmail()

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-purple-500/10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Anish Rane
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Backend Developer & Web3 Specialist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Highly skilled Backend Developer with 4+ years of experience designing, building, and deploying scalable
            backend systems and Web3 applications using JavaScript, TypeScript, and NestJS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-gradient">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <button
              onClick={copyEmail}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Copy email"
            >
              <Mail className="h-6 w-6" />
            </button>
            <Link
              href="https://github.com/AnishRane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
