"use client";

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { GitHubStatsCards } from './github-stats-card'

export function GithubProfile() {
  const githubData = {
    name: "Anish Rane",
    username: "AnishRane",
    avatarUrl: "https://github.com/AnishRane.png",
    profileUrl: "https://github.com/AnishRane",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anishrane",
        icon: <Linkedin className="h-4 w-4" />
      },
      {
        name: "X",
        url: "https://x.com/stark_ar98",
        icon: <Twitter className="h-4 w-4" />
      }
    ]
  };

  return (
    <section id="github-profile" className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-responsive-2xl font-bold text-center mb-responsive text-[hsl(var(--github-text))]">
            Find Me on GitHub
          </h2>
          <div className="github-card p-8 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  src={githubData.avatarUrl}
                  alt={`${githubData.name}'s GitHub Avatar`}
                  width={128}
                  height={128}
                  className="rounded-full border-2 border-[hsl(var(--github-border))]"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-[hsl(var(--github-text))]">{githubData.name}</h3>
                <Link href={githubData.profileUrl} target="_blank" rel="noopener noreferrer">
                  <p className="text-lg text-[hsl(var(--github-text-muted))] hover:text-[hsl(var(--github-accent))] transition-colors">@{githubData.username}</p>
                </Link>

                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
                  <Button asChild className="bg-[hsl(var(--github-success))] hover:bg-[hsl(var(--github-success))]/90 text-white font-medium">
                    <Link href={githubData.profileUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Follow on GitHub
                    </Link>
                  </Button>
                  {githubData.socials.map((social) => (
                    <Button asChild key={social.name} variant="outline" className="github-btn-outline">
                      <Link href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                        <span className="ml-2">{social.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* GitHub Stats - Native API powered */}
            <div className="mt-8 pt-8 border-t border-[hsl(var(--github-border-muted))]">
              <h4 className="text-lg font-semibold mb-6 text-center text-[hsl(var(--github-text))]">Contribution Stats</h4>
              <GitHubStatsCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}