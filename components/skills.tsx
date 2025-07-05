import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Code, Server, Cloud, Database, Smartphone, Shield } from "lucide-react"
import ShinyText from './ShinyText'

export function Skills() {
  const skillCategories = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", url: "/logos/nodejs-icon.svg", type: 'logo' },
        { name: "NestJS", url: "/logos/NestJS.svg", type: 'logo' },
        { name: "TypeScript", url: "/logos/TypeScript.svg", type: 'logo' },
        { name: "JavaScript", url: "/logos/JavaScript.svg", type: 'logo' },
        { name: "Python", url: "/logos/Python.svg", type: 'logo' },
        { name: "Django", url: "/logos/Django.svg", type: 'logo' },
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases & Caching",
      skills: [
        { name: "PostgreSQL", url: "/logos/PostgresSQL.svg", type: 'logo' },
        { name: "MongoDB", url: "/logos/MongoDB.svg", type: 'logo' },
        { name: "Redis", url: "/logos/Redis.svg", type: 'logo' },
      ],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", url: "/logos/AWS.svg", type: 'logo' },
        { name: "Google Cloud", url: "/logos/Google%20Cloud.svg", type: 'logo' },
        { name: "Azure", url: "/logos/Azure.svg", type: 'logo' },
        { name: "Docker", url: "/logos/Docker.svg", type: 'logo' },
        { name: "Nginx", url: "/logos/NGINX.svg", type: 'logo' },
        { name: "Jenkins", url: "/logos/Jenkins.svg", type: 'logo' },
      ],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web3 & Blockchain",
      skills: [
        { name: "Ethereum", url: "/logos/ethereum.svg", type: 'logo' },
        { name: "Solana", url: "/logos/solana.svg", type: 'logo' },
        { name: "TON", url: "/logos/ton.svg", type: 'logo' },
        { name: "Solidity", url: "/logos/Solidity.svg", type: 'logo' },
      ],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Message Queues",
      skills: [
        { name: "Apache Kafka", url: "/logos/Apache%20Kafka.svg", type: 'logo' },
        { name: "Socket.io", url: "/logos/Socket.io.svg", type: 'logo' },
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Tools",
      skills: [
        { name: "HashiCorp Vault", url: "/logos/HashiCorp%20Vault.svg", type: 'logo' },
        { name: "Postman", url: "/logos/Postman.svg", type: 'logo' },
        { name: "NPM", url: "/logos/NPM.svg", type: 'logo' },
        { name: "Markdown", url: "/logos/Markdown.svg", type: 'logo' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-responsive-2xl font-bold text-center mb-responsive">
            <ShinyText 
              text="Technical Skills" 
              disabled={false} 
              speed={3} 
              className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm" 
            />
          </h2>

          <div className="grid grid-responsive-3 gap-responsive">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="h-full glass-card-hover glass-glow"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-primary">{category.icon}</span>
                    <span className="text-gradient">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-3">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="group flex flex-col items-center gap-2 p-3 rounded-md min-w-[80px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer backdrop-blur-sm bg-white/20 dark:bg-black/30 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 hover:border-primary/30"
                        style={{
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        <div className="flex items-center justify-center h-8 w-auto transition-transform duration-300 group-hover:scale-110 p-1 rounded bg-white/60 dark:bg-white/10 group-hover:bg-white/80 dark:group-hover:bg-white/20">
                          <img 
                            src={skill.url} 
                            alt={skill.name} 
                            className="h-6 w-auto object-contain transition-all duration-300"
                            style={{ 
                              filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                            }}
                          />
                        </div>
                        <span className="text-xs text-center text-muted-foreground font-medium leading-tight transition-colors duration-300 group-hover:text-foreground drop-shadow-sm">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
