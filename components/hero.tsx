"use client"

import { useEffect, useState } from "react"
import { GithubIcon, LinkedinIcon, XIcon, MailIcon, ArrowRightIcon } from "@/components/ta-icons"

const ROLES = ["scalable backends", "tools for AI agents", "Web3 payment systems"]

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "140px 0 90px",
      }}
    >
      {/* aurora */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-12%",
            left: "50%",
            marginLeft: -450,
            width: 900,
            height: 900,
            background: "radial-gradient(circle,rgba(var(--ac1-rgb),0.55),transparent 60%)",
            filter: "blur(120px)",
            opacity: 0.18,
            animation: "drift1 16s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "14%",
            width: 680,
            height: 680,
            background: "radial-gradient(circle,rgba(var(--ac2-rgb),0.5),transparent 60%)",
            filter: "blur(120px)",
            opacity: 0.15,
            animation: "drift2 19s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-8%",
            right: "8%",
            width: 620,
            height: 620,
            background: "radial-gradient(circle,rgba(var(--ac1-rgb),0.45),transparent 60%)",
            filter: "blur(120px)",
            opacity: 0.13,
            animation: "drift1 22s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px,transparent 1px)",
            backgroundSize: "34px 34px",
            opacity: 0.035,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 70% at 50% 45%,transparent 35%,#08080C 92%)",
          }}
        />
      </div>

      <div style={{ position: "relative", maxWidth: 1152, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <p
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6B6B76",
            margin: "0 0 22px",
          }}
        >
          // Backend &amp; AI Engineer
        </p>
        <h1
          style={{
            fontFamily: "var(--f-head)",
            fontWeight: 700,
            fontSize: "clamp(3rem,8.5vw,6.2rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            margin: 0,
            color: "#F4F4F6",
          }}
        >
          Anish Rane
        </h1>
        <div
          style={{
            height: 5,
            width: 148,
            margin: "22px 0 30px",
            borderRadius: 9999,
            background: "var(--grad)",
            boxShadow: "0 0 22px rgba(var(--ac1-rgb),0.5)",
          }}
        />
        <div
          style={{
            fontFamily: "var(--f-head)",
            fontWeight: 500,
            fontSize: "clamp(1.4rem,3.6vw,2.3rem)",
            letterSpacing: "-0.01em",
            color: "#F4F4F6",
            minHeight: "1.4em",
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "0.4ch",
          }}
        >
          <span>I build</span>
          <span
            key={roleIdx}
            style={{
              background: "var(--grad)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              animation: "fadeRole .5s ease",
              fontWeight: 700,
            }}
          >
            {ROLES[roleIdx]}
          </span>
          <span
            style={{
              display: "inline-block",
              width: 3,
              height: "1.05em",
              transform: "translateY(0.16em)",
              background: "var(--ac2)",
              animation: "blink 1.1s step-end infinite",
              borderRadius: 2,
            }}
          />
        </div>
        <p style={{ maxWidth: 620, color: "#A1A1AA", fontSize: "1.12rem", lineHeight: 1.65, margin: "26px 0 0" }}>
          Software Engineer at Xfinite Global (Eros International). I design microservices, MCP servers and tooling for AI
          agents, and decentralized systems — and I&apos;ve shipped 2 published SDKs used by AI agents.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, margin: "36px 0 0" }}>
          <a href="#projects" className="ta-cta-primary">
            View My Work
            <ArrowRightIcon />
          </a>
          <a href="#contact" className="ta-cta-secondary">
            Get in Touch
          </a>
        </div>
        <div style={{ display: "flex", gap: 12, margin: "38px 0 0" }}>
          <a href="https://github.com/AnishRane" target="_blank" rel="noopener" aria-label="GitHub" className="ta-social">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/anishrane" target="_blank" rel="noopener" aria-label="LinkedIn" className="ta-social">
            <LinkedinIcon />
          </a>
          <a href="https://x.com/AnishRane" target="_blank" rel="noopener" aria-label="X" className="ta-social">
            <XIcon />
          </a>
          <a href="mailto:anishrane.dev@gmail.com" aria-label="Email" className="ta-social">
            <MailIcon />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            margin: "64px auto 0",
            width: "fit-content",
            color: "#6B6B76",
          }}
        >
          <span style={{ fontFamily: "var(--f-mono)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            scroll
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "bob 1.8s ease-in-out infinite" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  )
}
