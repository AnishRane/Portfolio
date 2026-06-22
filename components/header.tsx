"use client"

import { useState } from "react"
import { DownloadIcon } from "@/components/ta-icons"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#opensource", label: "Open Source" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 18,
          left: 0,
          right: 0,
          zIndex: 60,
          display: "flex",
          justifyContent: "center",
          padding: "0 16px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            width: "100%",
            maxWidth: 980,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "10px 12px 10px 20px",
            borderRadius: 9999,
            background: "rgba(15,15,22,0.72)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
          }}
        >
          <a
            href="#top"
            style={{
              fontFamily: "var(--f-mono)",
              fontSize: "0.92rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: "#F4F4F6",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--grad)",
                boxShadow: "0 0 10px rgba(var(--ac1-rgb),0.8)",
              }}
            />
            ~/anish
          </a>

          <div data-navlinks style={{ display: "none", alignItems: "center", gap: 4, fontFamily: "var(--f-body)", fontSize: "0.9rem" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="ta-navlink">
                {l.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="/anish-rane-resume.pdf" target="_blank" rel="noopener" className="ta-resume" aria-label="Resume">
              <DownloadIcon />
              <span className="ta-resume-label">Resume</span>
            </a>
            <button onClick={() => setMenuOpen((o) => !o)} aria-label="Open menu" data-hamburger className="ta-hamburger">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 55,
            background: "rgba(8,8,12,0.6)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 78,
              left: 16,
              right: 16,
              padding: 14,
              borderRadius: 18,
              background: "rgba(15,15,22,0.96)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ padding: "13px 14px", borderRadius: 10, color: "#F4F4F6", textDecoration: "none", fontSize: "1rem" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
