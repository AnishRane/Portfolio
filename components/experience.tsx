import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"
import ShinyText from './ShinyText'

const achievements = [
  "Architected and maintained scalable backend systems and microservices using NestJS, Node.js, and PostgreSQL",
  "Integrated Redis, Kafka, and BullMQ for asynchronous processing and high-throughput event pipelines",
  "Led the development of decentralized crypto payment systems with Web3 RPC integration",
  "Engineered a custodial transaction processor for EVM DApps using HashiCorp Vault",
  "Implemented NFT-based KYC system on the Algorand blockchain",
  "Drove multi-cloud DevOps migration from AWS to GCP, managing containerized deployments with Docker and Kubernetes",
]

const notableProjects = [
  {
    name: "IP Content Enrichment MCP Servers",
    label: "AI / MCP",
    description:
      "Built Model Context Protocol servers that give AI agents real-time access to Eros Now's IP library metadata, enabling an Amazon Prime X-Ray-style contextual intelligence layer for content discovery and AI-driven features.",
    highlights: [
      "Designed MCP tool schemas for cast, crew, plot, genre, and scene-level metadata queries",
      "Enabled AI agents to surface live IP context and enrich content recommendations autonomously",
      "Integrated with existing CMS and content metadata pipelines via typed tool interfaces",
    ],
    technologies: ["MCP", "Node.js", "TypeScript", "AI Agents", "REST APIs", "PostgreSQL"],
  },
  {
    name: "Subtitle Generation Microservice",
    label: "AI Infra",
    description:
      "Developed an on-device subtitle generation service using Apple MLX Whisper, running on internal Mac Minis to process video audio locally with GPU acceleration, eliminating cloud API costs while delivering high transcription accuracy at scale.",
    highlights: [
      "Deployed on internal Mac Minis using Apple MLX framework with zero external API dependency",
      "GPU-accelerated transcription via MLX Whisper, leveraging Apple Silicon on the internal hardware",
      "Exposed as a REST microservice, integrating directly into the content pipeline for automated subtitle delivery",
    ],
    technologies: ["Python", "MLX", "Whisper", "Apple Silicon", "FastAPI", "Microservices"],
  },
]


export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-center mb-3">04 / Experience</p>
          <h2 className="text-responsive-2xl font-bold text-center mb-responsive">
            <ShinyText
              text="Professional Experience"
              disabled={false}
              speed={3}
              className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm"
            />
          </h2>

          <Card className="glass-card-hover glass-glow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-lg mb-2 text-gradient">Software Developer</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building className="h-4 w-4" />
                    <span className="text-responsive-sm">Xfinite Global Plc (Eros International)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-responsive-sm">2021 – Present · Andheri, Mumbai</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-responsive">

                {/* Notable Projects */}
                <div>
                  <h4 className="font-semibold mb-4 text-sm">Notable Projects</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {notableProjects.map((project) => (
                      <div
                        key={project.name}
                        className="rounded-lg border border-primary/10 bg-primary/[0.03] p-4 flex flex-col gap-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h5 className="font-semibold text-sm leading-tight text-foreground">{project.name}</h5>
                          <span className="text-[10px] font-mono tracking-wider text-accent/70 bg-accent/10 px-2 py-0.5 rounded-full shrink-0">
                            {project.label}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                        <ul className="space-y-1.5 flex-1">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5 shrink-0">▸</span>
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-[10px] glass-card-subtle px-1.5 py-0">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Key Achievements</h4>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
