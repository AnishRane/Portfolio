import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Cloud, Shield } from "lucide-react"
import CountUp from './CountUp'
import ShinyText from './ShinyText'

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
    <section id="about" className="section-padding">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-responsive-2xl font-bold text-center mb-responsive">
            <ShinyText 
              text="About Me" 
              disabled={false} 
              speed={3} 
              className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm" 
            />
          </h2>

          <div className="grid lg:grid-cols-2 gap-responsive items-center mb-responsive">
            <div>
              <h3 className="text-responsive-xl font-semibold mb-6 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm">
                Passionate Backend Developer & Web3 Enthusiast
              </h3>
              <div className="space-y-responsive text-muted-foreground">
                <p className="text-responsive-base">
                  With over 4 years of experience in backend development, I specialize in building robust, scalable
                  systems using modern technologies like Node.js, NestJS, and PostgreSQL. My expertise extends into
                  the exciting world of Web3, where I develop decentralized applications and blockchain solutions.
                </p>
                <p className="text-responsive-base">
                  I have a proven track record of architecting microservices, integrating complex payment systems,
                  and optimizing performance across cloud platforms. My passion for emerging technologies drives me
                  to stay at the forefront of blockchain development and decentralized finance.
                </p>
                <p className="text-responsive-base">
                  Currently working at Xfinite Global Plc (Eros International), I've successfully led projects
                  ranging from custodial transaction processors to NFT-based KYC systems, always focusing on
                  security, scalability, and user experience.
                </p>
              </div>
            </div>

            <div className="glass-card glass-glow p-6 sm:p-8 rounded-xl">
              <h4 className="text-responsive-lg font-semibold mb-6 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-responsive">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">
                    <CountUp
                      from={0}
                      to={4}
                      direction="up"
                      duration={2.5}
                      className="count-up-text"
                    />
                    <span className="count-up-text">+</span>
                  </div>
                  <div className="text-responsive-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">
                    <CountUp
                      from={0}
                      to={50}
                      direction="up"
                      duration={3}
                      delay={0.3}
                      className="count-up-text"
                    />
                    <span className="count-up-text">+</span>
                  </div>
                  <div className="text-responsive-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">
                    <CountUp
                      from={0}
                      to={10}
                      direction="up"
                      duration={2.5}
                      delay={0.6}
                      className="count-up-text"
                    />
                    <span className="count-up-text">+</span>
                  </div>
                  <div className="text-responsive-sm text-muted-foreground">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-responsive-4 gap-responsive">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="text-center p-4 sm:p-6 glass-card-hover glass-glow"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2 text-responsive-sm">{item.title}</h3>
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
