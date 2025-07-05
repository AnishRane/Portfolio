import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Users } from "lucide-react"
import Link from "next/link"
import ShinyText from './ShinyText'

export function OpenSource() {
  const contributions = [
    {
      name: "GAME Python SDK",
      description: "A Python SDK library for developing AI agents powered by the GAME architecture. Enables creation of autonomous agents with custom logic and workflows.",
      repository: "game-by-virtuals/game-python",
      url: "https://github.com/game-by-virtuals/game-python",
      technologies: ["Python", "AI Agents", "SDK", "Machine Learning"],
      stats: {
        stars: 82,
        forks: 80,
        contributors: 25
      },
      highlights: [
        "Contributed to core SDK functionality",
        "Enhanced agent configuration and workflow management",
        "Improved documentation and examples"
      ]
    },
    {
      name: "GAME Node.js SDK", 
      description: "TypeScript/Node.js SDK for the GAME framework, mirroring Python SDK functionality. Provides developer-friendly interface for building AI agents.",
      repository: "game-by-virtuals/game-node",
      url: "https://github.com/game-by-virtuals/game-node",
      technologies: ["TypeScript", "Node.js", "AI Agents", "SDK"],
      stats: {
        stars: 78,
        forks: 86,
        contributors: 47
      },
      highlights: [
        "Cross-platform SDK development",
        "TypeScript implementation optimization",
        "Platform integration enhancements"
      ]
    },
    {
      name: "GOAT SDK",
      description: "An innovative SDK framework for building decentralized applications and blockchain integrations with advanced tooling and developer experience.",
      repository: "goat-sdk/goat",
      url: "https://github.com/goat-sdk/goat",
      technologies: ["TypeScript", "Blockchain", "DApps", "Web3"],
      stats: {
        stars: 156,
        forks: 45,
        contributors: 18
      },
      highlights: [
        "Blockchain integration development",
        "DApp tooling improvements",
        "Developer experience enhancements"
      ]
    }
  ]

  return (
    <section id="open-source" className="section-padding">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-responsive-2xl font-bold text-center mb-4">
            <ShinyText 
              text="Open Source Contributions" 
              disabled={false} 
              speed={3} 
              className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm" 
            />
          </h2>
          <p className="text-center text-muted-foreground mb-responsive max-w-2xl mx-auto text-responsive-base">
            Contributing to the developer community through meaningful open source projects. 
            Building tools and SDKs that empower other developers in AI, blockchain, and Web3 technologies.
          </p>

          <div className="grid grid-responsive-3 gap-responsive mb-8">
            {contributions.map((project, index) => (
              <Card
                key={index}
                className="h-full flex flex-col glass-card-hover glass-glow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-xl text-gradient flex-1 leading-tight">
                      {project.name}
                    </CardTitle>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#28a745] transition-colors duration-200 ml-3 flex-shrink-0"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">
                    {project.repository}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-0">
                  {/* Description with fixed height */}
                  <div className="mb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Repository Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span className="font-medium">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span className="font-medium">{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="font-medium">{project.stats.contributors}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs glass-card-subtle"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contribution Highlights */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">Key Contributions:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-[#9EECFF] text-black hover:bg-[#28a745] transition-colors duration-200 mt-auto"
                  >
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Repository
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glass-card glass-glow p-8 rounded-xl max-w-3xl mx-auto">
              <h3 className="text-responsive-lg font-semibold mb-4">
                <ShinyText 
                  text="Let's Build Together" 
                  disabled={false} 
                  speed={3} 
                  className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm" 
                />
              </h3>
              <p className="text-muted-foreground mb-6 text-responsive-base">
                I'm always excited to collaborate on innovative open source projects. 
                Whether it's AI, blockchain, or developer tooling, let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#28a745] to-[#238636] hover:from-[#238636] hover:to-[#1e7e34] text-white transition-all duration-200"
                >
                  <Link href="https://github.com/AnishRane" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Follow on GitHub
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="glass-card-subtle hover:glass-card"
                >
                  <Link href="#contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 