"use client"

import { useEffect, useRef, useState } from "react"
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, CopyIcon, CheckIcon } from "@/components/ta-icons"

const EMAIL = "anishrane.dev@gmail.com"

export function Contact() {
  const [toast, setToast] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  const copyEmail = () => {
    try {
      navigator.clipboard?.writeText(EMAIL)
    } catch {
      /* noop */
    }
    setToast(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(false), 2200)
  }

  return (
    <section id="contact" style={{ position: "relative", padding: "clamp(80px,11vw,120px) 0", overflow: "hidden", scrollMarginTop: 90 }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: -400,
            width: 800,
            height: 600,
            background: "radial-gradient(circle,rgba(var(--ac1-rgb),0.4),transparent 60%)",
            filter: "blur(130px)",
            opacity: 0.12,
            animation: "drift1 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "10%",
            width: 500,
            height: 500,
            background: "radial-gradient(circle,rgba(var(--ac2-rgb),0.4),transparent 60%)",
            filter: "blur(120px)",
            opacity: 0.1,
            animation: "drift2 22s ease-in-out infinite",
          }}
        />
      </div>

      <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="ta-card"
          style={{ borderRadius: 22, boxShadow: "0 0 60px rgba(var(--ac1-rgb),0.08)", padding: "clamp(28px,5vw,52px)" }}
        >
          <p className="ta-eyebrow" style={{ textAlign: "center" }}>
            08 / Contact
          </p>
          <h2
            className="ta-h2"
            style={{ textAlign: "center", background: "var(--grad)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
          >
            Let&apos;s Build Something
          </h2>
          <p style={{ color: "#A1A1AA", fontSize: "1.12rem", lineHeight: 1.6, margin: "18px auto 0", textAlign: "center", maxWidth: 520 }}>
            Open to backend, AI, and Web3 opportunities. Let&apos;s talk.
          </p>

          <div data-contact-grid style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32, marginTop: 42, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button onClick={copyEmail} className="ta-contact-row">
                <span style={{ width: 40, height: 40, flex: "none", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(var(--ac1-rgb),0.12)", color: "var(--ac1)" }}>
                  <MailIcon size={19} />
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: "0.95rem" }}>{EMAIL}</span>
                  <span style={{ fontFamily: "var(--f-mono)", fontSize: "0.7rem", color: "#6B6B76" }}>click to copy</span>
                </span>
                <span style={{ marginLeft: "auto", color: "#6B6B76" }}>
                  <CopyIcon />
                </span>
              </button>

              <a href="https://github.com/AnishRane" target="_blank" rel="noopener" className="ta-contact-row">
                <span style={{ width: 40, height: 40, flex: "none", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(var(--ac2-rgb),0.12)", color: "var(--ac2)" }}>
                  <GithubIcon size={19} />
                </span>
                <span style={{ fontSize: "0.95rem" }}>github.com/AnishRane</span>
              </a>

              <a href="https://www.linkedin.com/in/anishrane" target="_blank" rel="noopener" className="ta-contact-row">
                <span style={{ width: 40, height: 40, flex: "none", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(var(--ac1-rgb),0.12)", color: "var(--ac1)" }}>
                  <LinkedinIcon size={19} />
                </span>
                <span style={{ fontSize: "0.95rem" }}>linkedin.com/in/anishrane</span>
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "stretch" }}>
              <a href={`mailto:${EMAIL}`} className="ta-contact-cta-primary">
                <MailIcon size={19} />
                Email Me
              </a>
              <a href="/anish-rane-resume.pdf" target="_blank" rel="noopener" className="ta-contact-cta-secondary">
                <DownloadIcon size={19} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 90,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "13px 20px",
            borderRadius: 12,
            background: "rgba(15,15,22,0.95)",
            border: "1px solid rgba(52,211,153,0.4)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            color: "#F4F4F6",
            fontSize: "0.92rem",
            animation: "fadeRole .3s ease",
          }}
        >
          <CheckIcon />
          Email copied to clipboard
        </div>
      )}
    </section>
  )
}
