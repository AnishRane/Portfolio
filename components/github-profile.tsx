import { GithubIcon } from "@/components/ta-icons"

const LANGS = [
  { name: "TypeScript", pct: "38%" },
  { name: "Python", pct: "26%" },
  { name: "Rust", pct: "15%" },
  { name: "Solidity", pct: "12%" },
  { name: "JavaScript", pct: "9%" },
]

function heatmapCells() {
  const weeks = 22
  const days = 7
  const cells: { op: number }[] = []
  for (let i = 0; i < weeks * days; i++) {
    const r = Math.abs(Math.sin((i + 1) * 12.9898) * 43758.5453) % 1
    let op = 0.07
    if (r > 0.45) op = 0.2
    if (r > 0.68) op = 0.42
    if (r > 0.84) op = 0.68
    if (r > 0.94) op = 0.92
    cells.push({ op })
  }
  return cells
}

export function GithubProfile() {
  const cells = heatmapCells()

  return (
    <section id="github" style={{ position: "relative", padding: "clamp(72px,10vw,104px) 0", background: "#0F0F16", scrollMarginTop: 90 }}>
      <div className="ta-reveal" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <h2 className="ta-h2" style={{ margin: 0 }}>
          Find Me on GitHub
        </h2>

        <div data-gh-grid style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, marginTop: 42, textAlign: "left" }}>
          {/* profile card */}
          <div
            className="ta-card"
            style={{ borderRadius: 18, padding: 30, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14 }}
          >
            <div style={{ width: 96, height: 96, borderRadius: "50%", padding: 3, background: "var(--grad)", boxShadow: "0 0 30px rgba(var(--ac1-rgb),0.4)" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#0F0F16",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--f-head)",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#F4F4F6",
                }}
              >
                AR
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--f-head)", fontWeight: 700, fontSize: "1.4rem", margin: 0, color: "#F4F4F6" }}>Anish Rane</h3>
              <p style={{ fontFamily: "var(--f-mono)", fontSize: "0.85rem", color: "#6B6B76", margin: "4px 0 0" }}>@AnishRane</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 4 }}>
              <a href="https://github.com/AnishRane" target="_blank" rel="noopener" className="ta-gh-follow">
                <GithubIcon size={16} />
                Follow on GitHub
              </a>
              <a href="https://www.linkedin.com/in/anishrane" target="_blank" rel="noopener" className="ta-ghlink">
                LinkedIn
              </a>
              <a href="https://x.com/AnishRane" target="_blank" rel="noopener" className="ta-ghlink">
                X / Twitter
              </a>
            </div>
          </div>

          {/* stats */}
          <div data-gh-stats style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18 }}>
            {/* heatmap */}
            <div className="ta-card" style={{ borderRadius: 18, padding: 26 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 18 }}>
                <h4 style={{ fontFamily: "var(--f-head)", fontWeight: 600, fontSize: "1.05rem", margin: 0, color: "#F4F4F6" }}>Contribution Activity</h4>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: "0.78rem", color: "#34D399" }}>1,240+ this year</span>
              </div>
              <div style={{ overflowX: "auto", paddingBottom: 4 }}>
                <div style={{ display: "grid", gridTemplateRows: "repeat(7, 11px)", gridAutoFlow: "column", gridAutoColumns: "11px", gap: 3, minWidth: "max-content" }}>
                  {cells.map((c, i) => (
                    <div key={i} style={{ width: 11, height: 11, borderRadius: 2, background: `rgba(52,211,153,${c.op})` }} />
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "flex-end", marginTop: 14, fontFamily: "var(--f-mono)", fontSize: "0.7rem", color: "#6B6B76" }}>
                Less
                <span style={{ width: 11, height: 11, borderRadius: 2, background: "rgba(52,211,153,0.08)" }} />
                <span style={{ width: 11, height: 11, borderRadius: 2, background: "rgba(52,211,153,0.25)" }} />
                <span style={{ width: 11, height: 11, borderRadius: 2, background: "rgba(52,211,153,0.5)" }} />
                <span style={{ width: 11, height: 11, borderRadius: 2, background: "rgba(52,211,153,0.8)" }} />
                More
              </div>
            </div>

            <div data-gh-bottom style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18 }}>
              {/* top languages */}
              <div className="ta-card" style={{ borderRadius: 18, padding: 26 }}>
                <h4 style={{ fontFamily: "var(--f-head)", fontWeight: 600, fontSize: "1.05rem", margin: "0 0 20px", color: "#F4F4F6" }}>Top Languages</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {LANGS.map((l) => (
                    <div key={l.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--f-mono)", fontSize: "0.8rem", marginBottom: 7 }}>
                        <span style={{ color: "#F4F4F6" }}>{l.name}</span>
                        <span style={{ color: "#6B6B76" }}>{l.pct}</span>
                      </div>
                      <div style={{ height: 7, borderRadius: 9999, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: l.pct, borderRadius: 9999, background: "var(--grad)" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* streak */}
              <div className="ta-card" style={{ borderRadius: 18, padding: 26, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--f-head)",
                      fontWeight: 700,
                      fontSize: "2.4rem",
                      letterSpacing: "-0.02em",
                      background: "var(--grad)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      lineHeight: 1,
                    }}
                  >
                    28 days
                  </div>
                  <div style={{ color: "#A1A1AA", fontSize: "0.95rem", marginTop: 8 }}>Current contribution streak</div>
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
                <div style={{ display: "flex", gap: 28 }}>
                  <div>
                    <div style={{ fontFamily: "var(--f-head)", fontWeight: 700, fontSize: "1.5rem", color: "#F4F4F6" }}>40+</div>
                    <div style={{ color: "#6B6B76", fontSize: "0.82rem", fontFamily: "var(--f-mono)", marginTop: 4 }}>repos</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--f-head)", fontWeight: 700, fontSize: "1.5rem", color: "#F4F4F6" }}>4</div>
                    <div style={{ color: "#6B6B76", fontSize: "0.82rem", fontFamily: "var(--f-mono)", marginTop: 4 }}>PRs merged to OSS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
