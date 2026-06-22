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

export default function Home() {
  return (
    <div style={{ background: "#08080C", color: "#F4F4F6", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <OpenSource />
      <GithubProfile />
      <Contact />
      <Footer />
    </div>
  )
}
