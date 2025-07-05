import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"
import ShinyText from './ShinyText'

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
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-responsive-2xl font-bold text-center mb-responsive">
            <ShinyText 
              text="Professional Experience" 
              disabled={false} 
              speed={3} 
              className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm" 
            />
          </h2>

          <Card className="mb-8 glass-card-hover glass-glow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-responsive-xl mb-2 text-gradient">Software Developer</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building className="h-4 w-4" />
                    <span className="text-responsive-sm">Xfinite Global Plc (Eros International)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-responsive-sm">2021 – Present | Andheri, Mumbai</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-responsive">
                <div>
                  <h4 className="font-semibold mb-3 text-responsive-base">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-responsive-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-responsive-base">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glass-card-subtle text-responsive-sm">
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
