"use client"

import Link from "next/link"

interface Section {
  id: string
  label: string
}

interface SectionIndicatorProps {
  sections: Section[]
  activeSection: string
}

// Git branch color palette — cycling like `git log --graph --oneline`
const GIT_COLORS = [
  "#4ade80", // green  — main
  "#60a5fa", // blue
  "#f59e0b", // amber
  "#c084fc", // purple
  "#34d399", // emerald
  "#f472b6", // pink
  "#38bdf8", // sky
  "#fb923c", // orange
]

// Short fake hash for each section — gives the git commit vibe
const HASHES = ["a1b2c3d", "e4f5a6b", "c7d8e9f", "b1c2d3e", "f4a5b6c", "d7e8f9a", "a2b3c4d", "e5f6a7b"]

export function SectionIndicator({ sections, activeSection }: SectionIndicatorProps) {
  const activeIndex = sections.findIndex((s) => s.id === activeSection)

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {sections.map(({ id, label }, index) => {
        const isActive = activeSection === id
        const isPast = index < activeIndex
        const color = GIT_COLORS[index % GIT_COLORS.length]
        const hash = HASHES[index % HASHES.length]

        return (
          <div key={id} className="flex flex-col items-center">
            {/* Branch line connecting nodes */}
            {index > 0 && (
              <div
                className="w-px transition-colors duration-500"
                style={{
                  height: "22px",
                  backgroundColor: isPast || isActive
                    ? GIT_COLORS[(index - 1) % GIT_COLORS.length]
                    : "rgba(100,116,139,0.18)",
                  opacity: isPast || isActive ? 0.7 : 1,
                }}
              />
            )}

            {/* Commit row */}
            <Link
              href={`#${id}`}
              className="group flex items-center gap-2 cursor-pointer"
              aria-label={`Go to ${label}`}
            >
              {/* Label + hash — right of the dot, visible on hover or active */}
              <div
                className={`flex flex-col items-end transition-all duration-200 select-none ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-80"
                }`}
              >
                <span
                  className="text-xs font-mono font-semibold whitespace-nowrap leading-tight"
                  style={{ color }}
                >
                  {label}
                </span>
                <span className="text-[10px] font-mono leading-tight" style={{ color, opacity: 0.5 }}>
                  {hash}
                </span>
              </div>

              {/* Commit circle */}
              <div className="relative flex items-center justify-center flex-shrink-0 w-5 h-5">
                {/* Glow pulse — active only */}
                {isActive && (
                  <div
                    className="absolute w-5 h-5 rounded-full animate-pulse"
                    style={{ backgroundColor: color, opacity: 0.2 }}
                  />
                )}

                {/* Outer ring */}
                <div
                  className="rounded-full border-2 transition-all duration-300 flex items-center justify-center"
                  style={{
                    width: isActive ? "14px" : isPast ? "10px" : "8px",
                    height: isActive ? "14px" : isPast ? "10px" : "8px",
                    borderColor: isActive || isPast ? color : "rgba(100,116,139,0.3)",
                    backgroundColor: isActive
                      ? color
                      : isPast
                      ? `${color}55`
                      : "transparent",
                    boxShadow: isActive
                      ? `0 0 8px ${color}cc, 0 0 18px ${color}55`
                      : "none",
                  }}
                />
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
