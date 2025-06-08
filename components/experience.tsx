import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function Experience() {
  const achievements = [
    "Architected, developed, and maintained robust backend systems and microservices using NestJS, Node.js, and PostgreSQL",
    "Integrated Redis, Kafka, and message queuing systems for efficient, asynchronous request processing",
    "Led the development of decentralized crypto payment systems with Web3 RPC integration",
    "Engineered a custodial transaction processor for EVM DApps using HashiCorp Vault",
    "Collaborated with DevOps to migrate services from AWS to GCP for cost optimization",
    "Deployed and managed applications using Docker, PM2, and NGINX",
    "Implemented NFT-based KYC system on the Algorand blockchain",
  ]

  const technologies = [
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "BullMQ",
    "AWS",
    "GCP",
    "Azure",
    "Docker",
    "Kubernetes",
    "Web3",
    "Blockchain",
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">Professional Experience</h2>

          <Card className="mb-8 glass-card-hover glass-glow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 text-gradient">Software Developer</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building className="h-4 w-4" />
                    <span>Xfinite Global Plc (Eros International)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2021 – Present | Andheri, Mumbai</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glass-card-subtle">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
