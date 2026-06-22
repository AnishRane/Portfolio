import { StarIcon, ExternalLinkIcon } from "@/components/ta-icons"

const OPEN_SOURCE = [
  {
    badge: "npm",
    badgeColor: "#CB3837",
    pkg: "dpsn-client",
    title: "DPSN Node.js SDK",
    desc: "Built the full Node.js client for DPSN (decentralized pub/sub) from scratch — used by AI agents & DeFi apps.",
    tags: ["TypeScript", "Node.js", "Pub/Sub", "AI", "DeFi"],
    metric: "published",
    url: "https://www.npmjs.com/package/dpsn-client",
  },
  {
    badge: "PyPI",
    badgeColor: "#3775A9",
    pkg: "dpsn-client",
    title: "DPSN Python SDK",
    desc: "Python SDK enabling AI agents & DeFi bots to consume real-time decentralized streams.",
    tags: ["Python", "Pub/Sub", "AI Agents", "DeFi"],
    metric: "published",
    url: "https://pypi.org/project/dpsn-client/",
  },
  {
    badge: "PR",
    badgeColor: "#8B5CF6",
    pkg: "#110 · #95",
    title: "GAME by Virtuals",
    desc: "Contributed Python PR #110 & Node.js PR #95 integrating DPSN streaming into the agentic-AI framework.",
    tags: ["Python", "TypeScript", "Agentic AI"],
    metric: "2 PRs merged",
    url: "https://github.com/game-by-virtuals",
  },
  {
    badge: "PR",
    badgeColor: "#8B5CF6",
    pkg: "#481 · #480",
    title: "GOAT SDK",
    desc: "Contributed DPSN integration (Python #481, Node.js #480) for agentic DeFi market-data access.",
    tags: ["Python", "TypeScript", "DeFi", "AI Agents"],
    metric: "2 PRs merged",
    url: "https://github.com/goat-sdk/goat",
  },
]

export function OpenSource() {
  return (
    <section id="opensource" style={{ position: "relative", padding: "clamp(72px,10vw,104px) 0", scrollMarginTop: 90 }}>
      <div className="ta-reveal" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <p className="ta-eyebrow">06 / Open Source</p>
        <h2 className="ta-h2">Open Source &amp; SDKs</h2>
        <p style={{ color: "#A1A1AA", fontSize: "1.08rem", margin: "14px 0 0" }}>
          Published packages and contributions to AI-agent frameworks.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 18, marginTop: 42 }}>
          {OPEN_SOURCE.map((o) => (
            <div key={o.title} className="ta-card ta-os" style={{ display: "flex", flexDirection: "column", padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
                <span
                  style={{
                    fontFamily: "var(--f-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: 6,
                    color: "#fff",
                    background: o.badgeColor,
                  }}
                >
                  {o.badge}
                </span>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: "0.78rem", color: "#6B6B76" }}>{o.pkg}</span>
              </div>
              <h3 style={{ fontFamily: "var(--f-head)", fontWeight: 600, fontSize: "1.18rem", margin: "0 0 10px", color: "#F4F4F6" }}>{o.title}</h3>
              <p style={{ margin: "0 0 16px", color: "#A1A1AA", fontSize: "0.95rem", lineHeight: 1.6, flex: 1 }}>{o.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 16 }}>
                {o.tags.map((t) => (
                  <span key={t} className="ta-tag ta-tag-sm">
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--f-mono)", fontSize: "0.76rem", color: "#34D399" }}>
                  <StarIcon />
                  {o.metric}
                </span>
                <a
                  href={o.url}
                  target="_blank"
                  rel="noopener"
                  className="ta-repo-link"
                  style={{
                    marginLeft: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--f-mono)",
                    fontSize: "0.76rem",
                    color: "#A1A1AA",
                    textDecoration: "none",
                  }}
                >
                  repo
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
