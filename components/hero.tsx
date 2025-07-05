"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { useCopyEmail } from "@/hooks/use-copy-email"
import RotatingText from './RotatingText'
import ShinyText from './ShinyText'
// import Beams from './Beams'

export function Hero() {
  const { copyEmail } = useCopyEmail()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Beams Background */}
      {/* <div className="absolute inset-0 w-full h-full">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={-15}
        />
      </div> */}
      
      {/* Content */}
      <div className="container text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-responsive-3xl font-bold mb-6">
            <ShinyText 
              text="Anish Rane" 
              disabled={false} 
              speed={3} 
              className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm" 
            />
          </h1>
          <h2 className="text-responsive-xl font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent flex items-center justify-center gap-2 flex-wrap">

                          <RotatingText
                texts={['Backend','Web3','Devops']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white shadow-lg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg border border-gray-400/30"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 } as any}
                animate={{ y: 0, opacity: 1 } as any}
                exit={{ y: "-100%", opacity: 0 } as any}
                staggerDuration={0.015}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 25, stiffness: 500, mass: 0.8 }}
                rotationInterval={3000}
              />
            Specialist
          </h2>
          <p className="text-responsive-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Highly skilled Backend Developer with 4+ years of experience designing, building, and deploying scalable
            backend systems and Web3 applications using JavaScript, TypeScript, and NestJS.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white shadow-lg border border-gray-400/30 hover:from-gray-300 hover:via-gray-400 hover:to-gray-500"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white shadow-lg border border-gray-400/30 hover:from-gray-300 hover:via-gray-400 hover:to-gray-500">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <button
              onClick={copyEmail}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Copy email"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <Link
              href="https://github.com/AnishRane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
