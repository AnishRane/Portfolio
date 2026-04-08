"use client"

import { useEffect, useState } from "react"
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
import { SectionIndicator } from "@/components/section-indicator"
import { AnimateIn } from "@/components/animate-in"

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "open-source", label: "Open Source" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "github-profile", label: "GitHub" },
  { id: "contact", label: "Contact" },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: "-100px 0px 0px 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} />
      <SectionIndicator sections={SECTIONS} activeSection={activeSection} />

      <main className="relative">
        <Hero />
        <AnimateIn><OpenSource /></AnimateIn>
        <AnimateIn><About /></AnimateIn>
        <AnimateIn><Experience /></AnimateIn>
        <AnimateIn><Projects /></AnimateIn>
        <AnimateIn><Skills /></AnimateIn>
        <AnimateIn><GithubProfile /></AnimateIn>
        <AnimateIn><Contact /></AnimateIn>
      </main>
      <Footer />
    </div>
  )
}
