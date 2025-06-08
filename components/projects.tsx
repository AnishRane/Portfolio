import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Solana Token Launch System",
      description:
        "Decentralized token launch platform on Solana with smart contracts for secure token distribution and launch mechanisms.",
      technologies: ["Solana", "Rust", "Web3", "Smart Contracts"],
      githubUrl: "https://github.com/osnHQ/SOL-meme-stack",
    },
    {
      title: "Market Maker Bot (Solana)",
      description:
        "Automated market maker bot for liquidity provision on Solana DEXs, implementing sophisticated trading algorithms.",
      technologies: ["Solana", "TypeScript", "DeFi", "Trading Algorithms"],
      githubUrl: "https://github.com/AnishRane/SolMarketMaker",
    },
    {
      title: "TON Blockchain Airdrop System",
      description:
        "Secure and efficient token distribution system built on the TON blockchain with advanced airdrop mechanisms.",
      technologies: ["TON", "Blockchain", "Smart Contracts", "Token Distribution"],
      githubUrl: "https://github.com/AnishRane/JettonAirdrop",
    },
    {
      title: "Ethereum Crowdfunding Platform",
      description:
        "Smart contract-based crowdfunding platform on Ethereum enabling secure and transparent fundraising campaigns.",
      technologies: ["Ethereum", "Solidity", "Web3", "Smart Contracts"],
      githubUrl: "https://github.com/AnishRane/CrowdFunding",
    },
    {
      title: "E-Sign Application (NestJS)",
      description:
        "Secure digital document signing application with robust authentication and document management features.",
      technologies: ["NestJS", "TypeScript", "Authentication", "Document Management"],
      githubUrl: "https://github.com/AnishRane/E-Sign-Document",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/30 via-primary/5 to-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
            Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of my work in backend development, Web3 applications, and blockchain technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="h-full flex flex-col glass-card-hover glass-glow"
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2 text-gradient">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs glass-card-subtle"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 glass-card-subtle hover:glass-card"
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-card-hover glass-glow"
            >
              <Link href="https://github.com/AnishRane" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
