"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

const STAT_TARGETS = [5, 2, 5, 4]
const STAT_SUFFIX = ["", "", "+", "+"]
const STAT_LABELS = ["Years Experience", "SDKs Authored", "Web3 Projects", "OSS Contributions"]

interface Capability {
  icon: ReactNode
  tint: 1 | 2
  title: string
  desc: string
}

const CAPABILITIES: Capability[] = [
  {
    tint: 1,
    title: "AI Ecosystem",
    desc: "Authored DPSN SDKs for AI agents; contributed to GAME by Virtuals & GOAT SDK.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    tint: 2,
    title: "Backend Architecture",
    desc: "Scalable microservices & robust backend systems built to ship and stay up.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    tint: 1,
    title: "Cloud Platforms",
    desc: "AWS, GCP & Azure with DevOps practices, Docker and Kubernetes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19a4.5 4.5 0 1 0 0-9 6 6 0 0 0-11.6-1.6A4.5 4.5 0 0 0 6.5 19z" />
      </svg>
    ),
  },
  {
    tint: 2,
    title: "Web3 & DeFi",
    desc: "Crypto payment processors & NFT identity on Ethereum, Solana, TON, Algorand.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
]

function useCountUp(anchorRef: React.RefObject<HTMLElement | null>) {
  const [counts, setCounts] = useState([0, 0, 0, 0])

  useEffect(() => {
    const el = anchorRef.current
    if (!el) return
    let started = false
    let raf = 0

    const run = () => {
      if (started) return
      started = true
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduce) {
        setCounts(STAT_TARGETS)
        return
      }
      const dur = 1300
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur)
        const ease = 1 - Math.pow(1 - p, 3)
        setCounts(STAT_TARGETS.map((v) => Math.round(v * ease)))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run()
            io.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [anchorRef])

  return counts
}

export function About() {
  const anchorRef = useRef<HTMLDivElement>(null)
  const counts = useCountUp(anchorRef)

  return (
    <section id="about" style={{ position: "relative", padding: "clamp(72px,10vw,104px) 0", scrollMarginTop: 90 }}>
      <div className="ta-reveal" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <p className="ta-eyebrow">02 / About</p>
        <h2 className="ta-h2">About Me</h2>

        <div data-about-grid style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32, marginTop: 46, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, color: "#A1A1AA", fontSize: "1.08rem", lineHeight: 1.7 }}>
            <p style={{ margin: 0 }}>
              I&apos;m a backend &amp; systems engineer with <span style={{ color: "#F4F4F6", fontWeight: 500 }}>5 years</span> building scalable
              microservices, high-throughput event pipelines, and the infrastructure that AI agents and decentralized apps run on.
            </p>
            <p style={{ margin: 0 }}>
              At <span style={{ color: "#F4F4F6", fontWeight: 500 }}>Xfinite Global (Eros International)</span> I architect NestJS/Node services
              backed by PostgreSQL, Redis, Kafka and BullMQ, and lead crypto payment systems with custodial transaction processing and on-chain
              identity.
            </p>
            <p style={{ margin: 0 }}>
              I care about systems that <span style={{ color: "#F4F4F6", fontWeight: 500 }}>ship and stay up</span> — and I give back through open
              source: two published SDKs (npm + PyPI) and contributions to agentic-AI frameworks like GAME by Virtuals and GOAT.
            </p>
          </div>

          <div
            ref={anchorRef}
            className="ta-card"
            style={{
              boxShadow: "0 0 40px rgba(var(--ac1-rgb),0.06)",
              padding: 8,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderRadius: 18,
            }}
          >
            {counts.map((n, i) => (
              <div key={i} style={{ padding: "28px 22px", borderRadius: 14 }}>
                <div
                  style={{
                    fontFamily: "var(--f-head)",
                    fontWeight: 700,
                    fontSize: "clamp(2.2rem,4vw,2.9rem)",
                    letterSpacing: "-0.02em",
                    background: "var(--grad)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    lineHeight: 1,
                  }}
                >
                  {n}
                  {STAT_SUFFIX[i]}
                </div>
                <div style={{ marginTop: 10, color: "#A1A1AA", fontSize: "0.95rem" }}>{STAT_LABELS[i]}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18, marginTop: 24 }}>
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="ta-card ta-card-hover" style={{ padding: 24 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: c.tint === 1 ? "rgba(var(--ac1-rgb),0.12)" : "rgba(var(--ac2-rgb),0.12)",
                  color: c.tint === 1 ? "var(--ac1)" : "var(--ac2)",
                  marginBottom: 16,
                }}
              >
                {c.icon}
              </div>
              <h3 style={{ fontFamily: "var(--f-head)", fontWeight: 600, fontSize: "1.18rem", margin: "0 0 8px", color: "#F4F4F6" }}>{c.title}</h3>
              <p style={{ margin: 0, color: "#A1A1AA", fontSize: "0.95rem", lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
