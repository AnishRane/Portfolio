const SKILL_CATS = [
  { glyph: "{}", title: "Backend Development", items: ["Node.js", "NestJS", "TypeScript", "JavaScript", "Python", "Django"] },
  { glyph: "DB", title: "Databases & Caching", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { glyph: "☁", title: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Azure", "Docker", "Nginx", "Jenkins"] },
  { glyph: "⬡", title: "Web3 & Blockchain", items: ["Ethereum", "Solana", "TON", "Solidity"] },
  { glyph: "≋", title: "Message Queues & Realtime", items: ["Apache Kafka", "Socket.io"] },
  { glyph: "⚿", title: "Security & Tools", items: ["HashiCorp Vault", "Postman", "NPM", "Markdown"] },
]

export function Skills() {
  return (
    <section id="skills" style={{ position: "relative", padding: "clamp(72px,10vw,104px) 0", scrollMarginTop: 90 }}>
      <div className="ta-reveal" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <p className="ta-eyebrow">04 / Skills</p>
        <h2 className="ta-h2">Tech Stack</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginTop: 46 }}>
          {SKILL_CATS.map((cat) => (
            <div key={cat.title} className="ta-card ta-card-hover" style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 11,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(var(--ac1-rgb),0.12)",
                    color: "var(--ac1)",
                    fontFamily: "var(--f-mono)",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                  }}
                >
                  {cat.glyph}
                </div>
                <h3 style={{ fontFamily: "var(--f-head)", fontWeight: 600, fontSize: "1.12rem", margin: 0, color: "#F4F4F6" }}>{cat.title}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.items.map((tech) => (
                  <span key={tech} className="ta-tag" style={{ fontSize: "0.78rem" }}>
                    {tech}
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
