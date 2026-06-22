import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from "@/components/ta-icons"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 0" }}>
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--f-head)", fontWeight: 600, fontSize: "1.1rem", color: "#F4F4F6" }}>Anish Rane</div>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: "0.78rem", color: "#6B6B76", marginTop: 4, letterSpacing: "0.06em" }}>
            Backend &amp; AI Engineer
          </div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="https://github.com/AnishRane" target="_blank" rel="noopener" aria-label="GitHub" className="ta-fsocial">
            <GithubIcon size={18} />
          </a>
          <a href="mailto:anishrane.dev@gmail.com" aria-label="Email" className="ta-fsocial">
            <MailIcon size={18} />
          </a>
          <a href="https://x.com/AnishRane" target="_blank" rel="noopener" aria-label="X" className="ta-fsocial">
            <XIcon size={15} />
          </a>
          <a href="https://www.linkedin.com/in/anishrane" target="_blank" rel="noopener" aria-label="LinkedIn" className="ta-fsocial">
            <LinkedinIcon size={17} />
          </a>
        </div>
      </div>
      <div style={{ maxWidth: 1152, margin: "24px auto 0", padding: "0 24px", fontFamily: "var(--f-mono)", fontSize: "0.74rem", color: "#6B6B76" }}>
        © {year} Anish Rane. All rights reserved.
      </div>
    </footer>
  )
}
