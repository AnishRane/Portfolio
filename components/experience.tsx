const BULLETS = [
  "Architected scalable backend microservices with NestJS, Node.js and PostgreSQL.",
  "Integrated Redis, Kafka and BullMQ for async + high-throughput event pipelines.",
  "Led decentralized crypto payment systems with Web3 RPC integration.",
  "Engineered a custodial transaction processor for EVM dApps using HashiCorp Vault.",
  "Implemented an NFT-based KYC system on Algorand.",
  "Drove multi-cloud DevOps migration (AWS → GCP) with Docker & Kubernetes.",
]

const FEATURED = [
  {
    title: "IP Content Enrichment MCP Servers",
    desc: "MCP servers giving AI agents real-time access to the IP library — Prime X-Ray-style intelligence over a vast content catalog.",
    tags: ["MCP", "Node.js", "TypeScript", "AI Agents", "PostgreSQL"],
  },
  {
    title: "Subtitle Generation Microservice",
    desc: "On-device MLX Whisper subtitle service on internal Mac Minis — zero cloud-API cost, GPU-accelerated on Apple Silicon.",
    tags: ["Python", "MLX", "Whisper", "Apple Silicon", "FastAPI"],
  },
]

export function Experience() {
  return (
    <section id="experience" style={{ position: "relative", padding: "clamp(72px,10vw,104px) 0", background: "#0F0F16", scrollMarginTop: 90 }}>
      <div className="ta-reveal" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <p className="ta-eyebrow">03 / Experience</p>
        <h2 className="ta-h2">Professional Experience</h2>

        <div style={{ marginTop: 46, position: "relative", paddingLeft: 32, borderLeft: "2px solid rgba(255,255,255,0.08)" }}>
          <span
            style={{
              position: "absolute",
              left: -9,
              top: 4,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "var(--grad)",
              boxShadow: "0 0 16px rgba(var(--ac1-rgb),0.7)",
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 14px" }}>
            <h3 style={{ fontFamily: "var(--f-head)", fontWeight: 600, fontSize: "1.4rem", margin: 0, color: "#F4F4F6" }}>Software Developer</h3>
            <span style={{ color: "var(--ac1)", fontSize: "1.05rem" }}>Xfinite Global Plc (Eros International)</span>
          </div>
          <p style={{ fontFamily: "var(--f-mono)", fontSize: "0.8rem", color: "#6B6B76", margin: "6px 0 0", letterSpacing: "0.04em" }}>
            2022 — Present
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "22px 0 0", display: "flex", flexDirection: "column", gap: 13 }}>
            {BULLETS.map((b) => (
              <li key={b} style={{ display: "flex", gap: 12, color: "#A1A1AA", fontSize: "1.02rem", lineHeight: 1.6 }}>
                <span style={{ color: "var(--ac2)", flex: "none", marginTop: 2 }}>▹</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18, marginTop: 34 }}>
          {FEATURED.map((f) => (
            <div key={f.title} className="ta-card ta-card-hover" style={{ padding: 24 }}>
              <p style={{ fontFamily: "var(--f-mono)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ac2)", margin: "0 0 10px" }}>
                Featured
              </p>
              <h4 style={{ fontFamily: "var(--f-head)", fontWeight: 600, fontSize: "1.15rem", margin: "0 0 10px", color: "#F4F4F6" }}>{f.title}</h4>
              <p style={{ margin: "0 0 16px", color: "#A1A1AA", fontSize: "0.95rem", lineHeight: 1.6 }}>{f.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {f.tags.map((t) => (
                  <span key={t} className="ta-tag ta-tag-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
