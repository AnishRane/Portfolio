"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { OpenSource } from "@/components/open-source"
import { GithubProfile } from "@/components/github-profile"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function Home() {
  useSmoothScroll()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <OpenSource />
        <GithubProfile />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
