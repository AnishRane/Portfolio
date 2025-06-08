import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Users } from "lucide-react"
import Link from "next/link"

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
    <section id="open-source" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
            Open Source Contributions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Contributing to the developer community through meaningful open source projects. 
            Building tools and SDKs that empower other developers in AI, blockchain, and Web3 technologies.
          </p>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {contributions.map((project, index) => (
              <Card
                key={index}
                className="h-full flex flex-col glass-card-hover glass-glow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-gradient flex-1">
                      {project.name}
                    </CardTitle>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.repository}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Repository Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{project.stats.contributors}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
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

                  {/* Contribution Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Contributions:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full glass-card-subtle hover:glass-card mt-auto"
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
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                Let's Build Together
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to collaborate on innovative open source projects. 
                Whether it's AI, blockchain, or developer tooling, let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
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