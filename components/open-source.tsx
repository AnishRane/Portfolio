import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, ExternalLink, GitPullRequest } from "lucide-react"
import Link from "next/link"
import ShinyText from "./ShinyText"

const sdksAuthored = [
  {
    name: "DPSN Node.js SDK",
    package: "dpsn-client",
    packageUrl: "https://www.npmjs.com/package/dpsn-client",
    packageRegistry: "npm",
    description:
      "Built the complete Node.js client library for DPSN from scratch, a decentralized publish-subscribe network providing real-time, censorship-resistant data streaming used by AI agents and DeFi applications.",
    repository: "DPSN-org/dpsn-client-nodejs",
    url: "https://github.com/DPSN-org/dpsn-client-nodejs",
    technologies: ["TypeScript", "Node.js", "Pub/Sub", "AI", "DeFi"],
    highlights: [
      "Developed full publish/subscribe client logic from scratch",
      "Comprehensive TypeScript types and error handling",
      "Published to npm, available as dpsn-client",
    ],
  },
  {
    name: "DPSN Python SDK",
    package: "dpsn-client",
    packageUrl: "https://pypi.org/project/dpsn-client/",
    packageRegistry: "PyPI",
    description:
      "Implemented the Python SDK for DPSN, enabling Python-based AI agents and DeFi bots to consume real-time decentralized data streams with cross-platform payload compatibility.",
    repository: "DPSN-org/dpsn-python-client",
    url: "https://github.com/DPSN-org/dpsn-python-client",
    technologies: ["Python", "Pub/Sub", "AI Agents", "DeFi"],
    highlights: [
      "Implemented subscription flows and event handling",
      "Cross-platform payload serialization",
      "Published to PyPI, available as dpsn-client",
    ],
  },
]

const integrations = [
  {
    name: "GAME by Virtuals",
    description:
      "Contributed to both Python (PR #110) and Node.js (PR #95) of GAME, an Agentic AI framework by Virtuals Protocol, integrating DPSN streaming capabilities so AI agents can consume live decentralized data.",
    repository: "game-by-virtuals/game-python",
    url: "https://github.com/game-by-virtuals/game-python",
    technologies: ["Python", "TypeScript", "AI Agents", "Agentic AI"],
    stats: { stars: 82, forks: 80 },
    prs: [
      { label: "Python PR #110", url: "https://github.com/game-by-virtuals/game-python/pull/110" },
      { label: "Node.js PR #95", url: "https://github.com/game-by-virtuals/game-node/pull/95" },
    ],
  },
  {
    name: "GOAT SDK",
    description:
      "Contributed DPSN integration PRs for Python (#481) and Node.js (#480) of GOAT SDK, enabling AI agents in the Agentic DeFi ecosystem to access real-time decentralized market data for autonomous operations.",
    repository: "goat-sdk/goat",
    url: "https://github.com/goat-sdk/goat",
    technologies: ["TypeScript", "Python", "Agentic DeFi", "AI Agents"],
    stats: { stars: 156, forks: 45 },
    prs: [
      { label: "Python PR #481", url: "https://github.com/goat-sdk/goat/pull/481" },
      { label: "Node.js PR #480", url: "https://github.com/goat-sdk/goat/pull/480" },
    ],
  },
]

export function OpenSource() {
  return (
    <section id="open-source" className="section-padding">
      <div className="container">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-4">
            <p className="section-label mb-3">02 / Open Source</p>
            <h2 className="text-responsive-2xl font-bold mb-4">
              <ShinyText
                text="Open Source Contributions"
                disabled={false}
                speed={3}
                className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-sm"
              />
            </h2>
            <p className="text-center text-muted-foreground mb-2 max-w-2xl mx-auto text-responsive-base">
              Building the AI agent data layer, from SDKs authored from scratch to integrations in leading
              Agentic AI &amp; DeFi frameworks.
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <Link
                href="https://docs.dpsn.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-accent/80 hover:text-accent transition-colors duration-200 flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                docs.dpsn.org
              </Link>
            </div>
          </div>

          {/* AI Framework Integrations */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-accent/20" />
              <span className="text-xs font-mono tracking-widest text-accent/70 uppercase">AI Framework Integrations</span>
              <div className="h-px flex-1 bg-accent/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrations.map((item, index) => (
                <Card key={index} className="flex flex-col glass-card-hover glass-glow relative overflow-hidden">
                  {/* Contributed badge */}
                  <div className="absolute top-4 right-4">
                    <span className="badge-contributed px-2 py-0.5 rounded-full">Contributed</span>
                  </div>

                  <CardHeader className="pb-3 pr-20">
                    <div className="flex items-start gap-3 mb-1">
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#28a745] transition-colors duration-200 flex-shrink-0 mt-0.5"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <CardTitle className="text-lg text-gradient leading-tight">{item.name}</CardTitle>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono mt-1">{item.repository}</p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                    {/* Stats + PRs */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" />
                        <span className="font-medium">{item.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" />
                        <span className="font-medium">{item.stats.forks}</span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {item.prs.map((pr) => (
                          <Link
                            key={pr.label}
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-mono text-primary/70 hover:text-primary transition-colors duration-150 hover:underline underline-offset-2 cursor-pointer"
                          >
                            <GitPullRequest className="h-3 w-3" />
                            {pr.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs glass-card-subtle">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* SDKs Authored */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-primary/20" />
              <span className="text-xs font-mono tracking-widest text-primary/70 uppercase">SDKs Authored</span>
              <div className="h-px flex-1 bg-primary/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sdksAuthored.map((sdk, index) => (
                <Card key={index} className="flex flex-col glass-card-hover glass-glow relative overflow-hidden">
                  {/* Authored badge */}
                  <div className="absolute top-4 right-4">
                    <span className="badge-authored px-2 py-0.5 rounded-full">Authored</span>
                  </div>

                  <CardHeader className="pb-3 pr-20">
                    <div className="flex items-start gap-3 mb-1">
                      <Link
                        href={sdk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#28a745] transition-colors duration-200 flex-shrink-0 mt-0.5"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <CardTitle className="text-lg text-gradient leading-tight">{sdk.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap mt-1">
                      <p className="text-xs text-muted-foreground font-mono">{sdk.repository}</p>
                      <span className="text-muted-foreground/30">·</span>
                      <Link
                        href={sdk.packageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-accent/80 hover:text-accent transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {sdk.packageRegistry}: {sdk.package}
                      </Link>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sdk.description}</p>

                    <ul className="space-y-1.5 mb-4 flex-1">
                      {sdk.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {sdk.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs glass-card-subtle">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact stats */}
          <div className="glass-card glass-glow rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "2", label: "SDKs Built" },
                { value: "4", label: "PRs Merged" },
                { value: "4", label: "AI Frameworks" },
                { value: "2", label: "Languages" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold count-up-text">{value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-mono tracking-wide uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-[#28a745] to-[#238636] hover:from-[#238636] hover:to-[#1e7e34] text-white transition-all duration-200"
            >
              <Link href="https://github.com/AnishRane" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Follow on GitHub
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
