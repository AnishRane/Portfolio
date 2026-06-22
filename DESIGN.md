# DESIGN.md - Anish Rane | Developer Portfolio

> **For Stitch:** This document is the single source of truth for generating a stunning, modern, dark-mode developer portfolio. Generate **one long-scroll single-page site** (desktop + mobile) composed of the sections in order. Treat the Design System tokens as global; every screen must reuse them exactly.

---

## 1. Product Brief

| Field | Value |
|-------|-------|
| **Type** | Personal developer portfolio (single-page, long-scroll) |
| **Owner** | Anish Rane |
| **Role / Tagline** | Backend | AI | DevOps Engineer |
| **Positioning** | Senior backend & systems engineer who builds scalable microservices, AI/MCP infrastructure, and Web3 payment systems. Authored 2 published SDKs (npm + PyPI). |
| **Goal** | Impress recruiters/founders in <10s, drive to GitHub, resume, and contact. |
| **Tone** | Premium, technical, confident, minimal noise. "Senior engineer who ships," not "flashy junior." |
| **Stack target** | Next.js + Tailwind (existing repo), Framer Motion, shadcn/ui. |

---

## 2. Design Direction

**Aesthetic: "Terminal Aurora"** - an OLED-deep dark canvas with a slow, atmospheric aurora mesh glow behind the hero, frosted-glass content cards, and crisp monospace accents that signal "engineer." Restrained color, generous whitespace, one confident accent gradient.

**Three pillars**
1. **Deep dark, never flat** - near-black base (#08080C) with layered surfaces and a single luminous violet->cyan gradient used sparingly for emphasis.
2. **Glass + depth** - content lives on frosted glass cards (`backdrop-blur`, 1px hairline borders, soft inner glow) floating above the aurora.
3. **Engineer's signature** - monospace labels (`01 / Hero`, `// about`, file-path captions) and a subtle terminal/code motif tie the brand to the craft.

**Avoid:** rainbow gradients, drop-shadow soup, emoji icons, neon-on-neon, busy backgrounds behind text, more than 2 accent hues.

---

## 3. Design System (Global Tokens)

### 3.1 Color Palette (dark, primary theme)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#08080C` | Page background (OLED near-black) |
| `--bg-elev` | `#0F0F16` | Elevated sections / alt bands |
| `--surface` | `rgba(255,255,255,0.04)` | Glass card fill |
| `--surface-strong` | `rgba(255,255,255,0.06)` | Hover / active card fill |
| `--border` | `rgba(255,255,255,0.08)` | Hairline card & divider borders |
| `--border-glow` | `rgba(139,92,246,0.35)` | Accent border on hover/focus |
| `--text` | `#F4F4F6` | Primary text / headings |
| `--text-muted` | `#A1A1AA` | Body copy, captions |
| `--text-faint` | `#6B6B76` | Mono labels, metadata |
| `--primary` | `#8B5CF6` | Primary accent (violet) |
| `--secondary` | `#22D3EE` | Secondary accent (cyan) |
| `--accent-gradient` | `linear-gradient(120deg, #8B5CF6 0%, #22D3EE 100%)` | CTAs, key headings, glow |
| `--success` | `#34D399` | GitHub/OSS positive stats |
| `--cta-text` | `#08080C` | Text on gradient buttons |

**Contrast rules:** body text (`--text-muted` on `--bg`) and all headings must meet WCAG AA (>=4.5:1). Never place body text directly over the aurora - keep it on glass or solid bands.

### 3.2 Typography

CSS import:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
```

| Role | Font | Notes |
|------|------|-------|
| **Display / Headings** | Space Grotesk | 600-700, tight tracking (-0.02em) |
| **Body** | DM Sans | 400-500, line-height 1.6 |
| **Mono / Labels / Code** | JetBrains Mono | Section numbers, tech tags, file paths, stats |

**Type scale (desktop -> mobile)**
- Hero name (H1): `clamp(3rem, 8vw, 6rem)`
- Section title (H2): `clamp(2rem, 5vw, 3.25rem)`
- Card title (H3): `1.25rem`
- Body: `1rem` (min 16px on mobile), large body `1.125rem`
- Mono label: `0.8rem`, uppercase, letter-spacing 0.15em, color `--text-faint`

### 3.3 Spacing, Radius, Effects

- **Container:** `max-w-6xl` (1152px), centered, `px-6` mobile / `px-8` desktop.
- **Section padding:** `py-24` desktop, `py-16` mobile. Consistent everywhere.
- **Radius:** cards `1rem` (rounded-2xl), buttons `0.625rem`, pills/tags `9999px`.
- **Glass card:** `bg: --surface`, `border: 1px solid --border`, `backdrop-blur: 16px`, soft outer glow `0 0 40px rgba(139,92,246,0.06)`.
- **Aurora mesh:** large blurred radial blobs (violet + cyan) at ~12-18% opacity, slow 12-18s drift animation, only behind Hero (and faint echo in Contact). Honors `prefers-reduced-motion` (freezes).
- **Transitions:** 150-250ms ease-out; hover = border->`--border-glow` + fill->`--surface-strong` + subtle lift (translateY -2px). **No layout-shifting scale transforms.**
- **Icons:** Lucide / Simple Icons SVG only, 24px viewBox, `--text-muted` default -> `--primary` on hover.
- **Grid grain (optional):** faint 1px dot-grid or noise overlay at 3% opacity for texture.

### 3.4 Component Patterns

- **Primary button:** gradient fill (`--accent-gradient`), `--cta-text`, mono-ish weight 500, glow on hover.
- **Secondary button:** transparent, `1px --border`, `--text`; hover -> `--border-glow` + `--surface`.
- **Tech tag / pill:** mono 0.75rem, `--surface` fill, `--border`, `--text-muted`. Used for skills & project stacks.
- **Section header block:** mono number+label (e.g. `01 / About`) above gradient H2, left or center aligned consistently.
- **Glass card:** used for about, experience, projects, OSS, contact. Consistent padding `p-6`/`p-8`.
- **Floating navbar:** glass pill, `top-4`, centered, `max-w-3xl`; links + theme toggle + "Resume" gradient button. Active-section indicator (left dot rail optional).

---

## 4. Screens / Sections (in scroll order)

### NAV - Floating Glass Navbar (sticky)
- Glass pill, inset from top (`top-4 left-4 right-4` -> centered `max-w-4xl`).
- Left: mono wordmark `anish.rane` or `~/anish`.
- Center: anchor links - `About | Experience | Skills | Projects | Open Source | Contact`.
- Right: theme toggle (sun/moon) + **Resume** gradient button (downloads `anish-rane-resume.pdf`).
- Mobile: wordmark + hamburger -> glass slide-down sheet.

### 01 - Hero (full viewport)
- **Background:** aurora mesh (violet+cyan blurred blobs drifting), faint dot-grid overlay, vignette to `--bg` at edges.
- **Eyebrow:** mono `// Backend | AI | DevOps Engineer` in `--text-faint`.
- **H1:** "Anish Rane" - huge Space Grotesk; the name in `--text`, with a gradient underline accent OR a rotating-role line below.
- **Rotating subtitle:** "I build **[ scalable backends / AI infrastructure / Web3 payment systems ]**" (animated word swap), gradient on the rotating word.
- **Sub-copy (1-2 lines, --text-muted):** "Software Engineer at Xfinite Global (Eros International). I design microservices, AI/MCP infra, and decentralized systems - and I've shipped 2 published SDKs used by AI agents."
- **CTAs:** Primary gradient **"View My Work"** (scrolls to Projects) + secondary **"Get in Touch"**.
- **Social row:** GitHub, LinkedIn, X, Email (icon buttons, glass, hover->primary).
- **Scroll cue:** subtle animated chevron / mono `scroll `.

### 02 - About
- Header: `02 / About` -> "About Me".
- **Left:** 2-3 short paragraphs (bio: backend/AI/DevOps engineer, 4+ yrs, focus on scalable systems, AI agent infra, and Web3).
- **Right:** glass **stats card** with animated count-ups in a 2x2 grid:
  - `4+` Years Experience
  - `2` SDKs Authored (npm + PyPI)
  - `5+` Web3 Projects
  - `4+` OSS Contributions
- Below: **4 capability cards** (glass, icon + title + one-liner):
  1. **AI Ecosystem** - Authored DPSN SDKs for AI agents; contributed to GAME by Virtuals & GOAT SDK. (icon: cpu)
  2. **Backend Architecture** - Scalable microservices & robust backend systems. (icon: server)
  3. **Cloud Platforms** - AWS, GCP, Azure with DevOps & Kubernetes. (icon: cloud)
  4. **Web3 & DeFi** - Crypto payment processors & NFT identity on Ethereum, Solana, TON, Algorand. (icon: code)

### 03 - Experience (timeline)
- Header: `03 / Experience` -> "Professional Experience".
- Single glass card (or vertical timeline rail with gradient line):
  - **Software Developer** - *Xfinite Global Plc (Eros International)* | mono date range.
  - Bullet highlights (concise):
    - Architected scalable backend microservices with NestJS, Node.js, PostgreSQL.
    - Integrated Redis, Kafka, BullMQ for async + high-throughput event pipelines.
    - Led decentralized crypto payment systems with Web3 RPC integration.
    - Engineered a custodial transaction processor for EVM dApps using HashiCorp Vault.
    - Implemented an NFT-based KYC system on Algorand.
    - Drove multi-cloud DevOps migration (AWS -> GCP) with Docker & Kubernetes.
- **Featured project sub-cards** (2, glass, with tech tags):
  - **IP Content Enrichment MCP Servers** - MCP servers giving AI agents real-time access to the IP library (Prime X-Ray-style intelligence). Tags: MCP, Node.js, TypeScript, AI Agents, PostgreSQL.
  - **Subtitle Generation Microservice** - On-device MLX Whisper subtitle service on internal Mac Minis; zero cloud API cost, GPU-accelerated. Tags: Python, MLX, Whisper, Apple Silicon, FastAPI.

### 04 - Skills (category grid)
- Header: `04 / Skills` -> "Tech Stack".
- Responsive grid of **6 glass category cards**, each: icon + title + wrapped logo/tag chips (use brand SVG logos already in `/public/logos`):
  1. **Backend Development** - Node.js, NestJS, TypeScript, JavaScript, Python, Django.
  2. **Databases & Caching** - PostgreSQL, MongoDB, Redis.
  3. **Cloud & DevOps** - AWS, Google Cloud, Azure, Docker, Nginx, Jenkins.
  4. **Web3 & Blockchain** - Ethereum, Solana, TON, Solidity.
  5. **Message Queues & Realtime** - Apache Kafka, Socket.io.
  6. **Security & Tools** - HashiCorp Vault, Postman, NPM, Markdown.
- Logos render in muted/monochrome, regain color on card hover.

### 05 - Projects (card grid)
- Header: `05 / Projects` -> "Featured Projects".
- Sub-copy: "Backend, Web3, and blockchain work."
- 3-col responsive grid of glass project cards. Each card: title, description, tech tags (pills), GitHub icon-link. Hover -> border glow + lift.
  1. **Solana Token Launch System** - Decentralized token launch platform with secure distribution smart contracts. `Solana | Rust | Web3 | Smart Contracts` -> github.com/osnHQ/SOL-meme-stack
  2. **Market Maker Bot (Solana)** - Automated AMM for DEX liquidity with trading algorithms. `Solana | TypeScript | DeFi | Trading` -> github.com/AnishRane/SolMarketMaker
  3. **TON Blockchain Airdrop System** - Secure token distribution with advanced airdrop mechanisms. `TON | Blockchain | Smart Contracts` -> github.com/AnishRane/JettonAirdrop
  4. **Ethereum Crowdfunding Platform** - Smart-contract crowdfunding for transparent fundraising. `Ethereum | Solidity | Web3` -> github.com/AnishRane/CrowdFunding
  5. **E-Sign Application** - Secure digital document signing with auth & doc management. `NestJS | TypeScript | Auth` -> github.com/AnishRane/E-Sign-Document

### 06 - Open Source (highlight cards)
- Header: `06 / Open Source` -> "Open Source & SDKs".
- Sub-copy: "Published packages and contributions to AI-agent frameworks."
- Glass cards with package badge (npm/PyPI), repo link, description, tech tags, and a "what I did" mini-list:
  1. **DPSN Node.js SDK** - `npm: dpsn-client`. Built the full Node.js client for DPSN (decentralized pub/sub) from scratch; used by AI agents & DeFi apps. `TypeScript | Node.js | Pub/Sub | AI | DeFi`
  2. **DPSN Python SDK** - `PyPI: dpsn-client`. Python SDK enabling AI agents & DeFi bots to consume real-time decentralized streams. `Python | Pub/Sub | AI Agents | DeFi`
  3. **GAME by Virtuals** - Contributed Python PR #110 & Node.js PR #95 integrating DPSN streaming into the agentic AI framework. `Python | TypeScript | Agentic AI`
  4. **GOAT SDK** - Contributed DPSN integration (Python #481, Node.js #480) for agentic DeFi market-data access. `Python | TypeScript | DeFi | AI Agents`
- Show small repo metric chips (stars / forks / PRs) using `--success` accent.

### 07 - GitHub (profile + stats)
- Header: "Find Me on GitHub".
- Glass profile card: avatar (`github.com/AnishRane.png`), name **Anish Rane**, `@AnishRane`, **Follow on GitHub** (success-green button) + LinkedIn / X buttons.
- Below: **GitHub stats cards** (contributions, top languages, streak) styled to match glass theme (not raw third-party colors).

### 08 - Contact (CTA close)
- Header: `08 / Contact` -> "Let's Build Something".
- Faint aurora echo behind, centered glass panel.
- Sub-copy: "Open to backend, AI, and Web3 opportunities. Let's talk."
- Two-column: **(a)** contact methods (Email - copy-to-clipboard with toast, GitHub, X, LinkedIn) | **(b)** large primary CTA **"Email Me"** (`anishrane.dev@gmail.com`) + **Download Resume**.

### FOOTER
- Glass top border. Left: wordmark **Anish Rane** + mono tagline `Backend | AI | DevOps`. Right: social icons (GitHub, Email, X, LinkedIn).
- Bottom: ` {year} Anish Rane. All rights reserved.` (mono, `--text-faint`).

---

## 5. Responsive

| Breakpoint | Behavior |
|------------|----------|
| **375px** | Single column; hero H1 scales to clamp min; nav -> hamburger sheet; stat grid 2x2; project/skill cards stack. |
| **768px** | 2-col skill/project grids; hero CTAs inline. |
| **1024px** | 3-col project grid; about 2-col (text + stats). |
| **1440px** | `max-w-6xl` centered; aurora fills full bleed behind contained content. |

No horizontal scroll at any width. Reserve space for async content (GitHub stats, count-ups) to prevent layout jump.

---

## 6. Motion

- Section reveal: fade + 16px rise on scroll-in (stagger children ~60ms).
- Hero: aurora drift (12-18s), role-word rotate (~2.5s hold), count-ups on enter.
- Hover: 150-250ms color/border/translateY only.
- **All motion respects `prefers-reduced-motion: reduce`** -> disable drift, count-up jumps to final, reveals become instant.

---

## 7. Accessibility Checklist
- [ ] Body & heading contrast >= 4.5:1 against their actual background (test over glass, not aurora).
- [ ] Visible focus rings (`--border-glow`, 2px) on every interactive element.
- [ ] Icon-only buttons have `aria-label` (Email, GitHub, theme toggle, menu).
- [ ] Tab order follows visual order; nav anchors keyboard-reachable.
- [ ] All meaningful images (avatar, logos) have alt text; decorative aurora `aria-hidden`.
- [ ] Touch targets >= 44x44px.
- [ ] `cursor-pointer` on all clickable cards/links.
- [ ] Theme toggle works; light mode (if generated) keeps >=4.5:1 and visible glass/borders.
