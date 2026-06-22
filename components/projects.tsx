import { GithubIcon, CodeIcon } from "@/components/ta-icons"

const PROJECTS = [
  {
    title: "Solana Token Launch System",
    desc: "Decentralized token launch platform with secure distribution smart contracts.",
    tags: ["Solana", "Rust", "Web3", "Smart Contracts"],
    url: "https://github.com/osnHQ/SOL-meme-stack",
  },
  {
    title: "Market Maker Bot (Solana)",
    desc: "Automated AMM for DEX liquidity with custom trading algorithms.",
    tags: ["Solana", "TypeScript", "DeFi", "Trading"],
    url: "https://github.com/AnishRane/SolMarketMaker",
  },
  {
    title: "TON Blockchain Airdrop System",
    desc: "Secure token distribution with advanced airdrop mechanisms.",
    tags: ["TON", "Blockchain", "Smart Contracts"],
    url: "https://github.com/AnishRane/JettonAirdrop",
  },
  {
    title: "Ethereum Crowdfunding Platform",
    desc: "Smart-contract crowdfunding for transparent, trustless fundraising.",
    tags: ["Ethereum", "Solidity", "Web3"],
    url: "https://github.com/AnishRane/CrowdFunding",
  },
  {
    title: "E-Sign Application",
    desc: "Secure digital document signing with auth and document management.",
    tags: ["NestJS", "TypeScript", "Auth"],
    url: "https://github.com/AnishRane/E-Sign-Document",
  },
]

export function Projects() {
  return (
    <section id="projects" style={{ position: "relative", padding: "clamp(72px,10vw,104px) 0", scrollMarginTop: 90 }}>
      <div className="ta-reveal" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <p className="ta-eyebrow">05 / Projects</p>
        <h2 className="ta-h2">Featured Projects</h2>
        <p style={{ color: "#A1A1AA", fontSize: "1.08rem", margin: "14px 0 0" }}>Backend, Web3, and blockchain work.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 18, marginTop: 42 }}>
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener"
              className="ta-card ta-project"
              style={{ display: "flex", flexDirection: "column", padding: 24, textDecoration: "none", cursor: "pointer" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 11,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(140deg,rgba(var(--ac1-rgb),0.18),rgba(var(--ac2-rgb),0.18))",
                    color: "var(--ac2)",
                  }}
                >
                  <CodeIcon />
                </div>
                <span className="ta-gh-ico" style={{ color: "#6B6B76" }}>
                  <GithubIcon />
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--f-head)", fontWeight: 600, fontSize: "1.18rem", margin: "18px 0 10px", color: "#F4F4F6" }}>{p.title}</h3>
              <p style={{ margin: "0 0 18px", color: "#A1A1AA", fontSize: "0.95rem", lineHeight: 1.6, flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {p.tags.map((t) => (
                  <span key={t} className="ta-tag ta-tag-sm">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
