import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Cloud, Shield } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend Architecture",
      description: "Expert in designing scalable microservices and robust backend systems",
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud Platforms",
      description: "Proficient in AWS, GCP, and Azure with DevOps collaboration experience",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web3 Development",
      description: "Specialized in blockchain applications, DApps, and crypto payment systems",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security & Scalability",
      description: "Focus on secure key management and high-availability systems",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                Passionate Backend Developer & Web3 Enthusiast
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 4 years of experience in backend development, I specialize in building robust, scalable
                  systems using modern technologies like Node.js, NestJS, and PostgreSQL. My expertise extends into
                  the exciting world of Web3, where I develop decentralized applications and blockchain solutions.
                </p>
                <p>
                  I have a proven track record of architecting microservices, integrating complex payment systems,
                  and optimizing performance across cloud platforms. My passion for emerging technologies drives me
                  to stay at the forefront of blockchain development and decentralized finance.
                </p>
                <p>
                  Currently working at Xfinite Global Plc (Eros International), I've successfully led projects
                  ranging from custodial transaction processors to NFT-based KYC systems, always focusing on
                  security, scalability, and user experience.
                </p>
              </div>
            </div>

            <div className="glass-card glass-glow p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-6 text-gradient">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="text-center p-6 glass-card-hover glass-glow"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
