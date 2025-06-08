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
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[51]">
        <ThemeToggle />
      </div>
      <Header />
      <main>
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
