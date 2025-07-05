"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Twitter } from "lucide-react"
import Link from "next/link"
import { useCopyEmail } from "@/hooks/use-copy-email"
import ShinyText from './ShinyText'

export function Contact() {
  const { copyEmail, email } = useCopyEmail()
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: email,
      href: "mailto:" + email,
      onClick: copyEmail,
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/AnishRane",
      href: "https://github.com/AnishRane",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-responsive-2xl font-bold text-center mb-4">
            <ShinyText 
              text="Get In Touch" 
              disabled={false} 
              speed={3} 
              className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm" 
            />
          </h2>
          <p className="text-center text-muted-foreground mb-responsive max-w-2xl mx-auto text-responsive-base">
            I'm always interested in discussing new opportunities, innovative projects, and collaborations in backend
            development and Web3 technologies.
          </p>

          <div className="grid grid-responsive-2 gap-responsive">
            <Card className="glass-card-hover glass-glow">
              <CardHeader>
                <CardTitle className="text-gradient">
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking for a backend developer, want to discuss a Web3 project, or just want to
                  connect, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-primary">{item.icon}</span>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          item.onClick ? (
                            <button
                              onClick={item.onClick}
                              className="font-medium hover:text-primary transition-colors text-left"
                            >
                              {item.value}
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              className="font-medium hover:text-primary transition-colors"
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {item.value}
                            </Link>
                          )
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-hover glass-glow">
              <CardHeader>
                <CardTitle className="text-gradient">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={copyEmail}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full glass-card-subtle hover:glass-card"
                  size="lg"
                >
                  <Link href="https://github.com/AnishRane" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View GitHub Profile
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full glass-card-subtle hover:glass-card"
                  size="lg"
                >
                  <Link href="https://x.com/stark_ar98" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4 mr-2" />
                    Follow on Twitter
                  </Link>
                </Button>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground text-center">
      
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
