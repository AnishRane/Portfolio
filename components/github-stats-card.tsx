"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { fetchGitHubStats, GitHubStats } from "@/lib/github-api";
import { Github, Star, GitCommit, Flame, Code2, Users, BookOpen } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  suffix?: string;
  className?: string;
  delay?: number;
}

function StatCard({ title, value, icon, suffix, className, delay = 0 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible || typeof value !== "number") return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value, isVisible]);

  return (
    <div
      className={cn(
        "github-stat-card rounded-md p-4 transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[hsl(var(--github-text-muted))] text-xs font-medium">{title}</span>
        <span className="text-[hsl(var(--github-text-muted))]">{icon}</span>
      </div>
      <div className="text-2xl font-semibold text-[hsl(var(--github-text))]">
        {typeof value === "number" ? displayValue : value}
        {suffix && <span className="text-sm text-[hsl(var(--github-text-muted))] ml-1">{suffix}</span>}
      </div>
    </div>
  );
}

function LanguageBar({ languages }: { languages: GitHubStats["languages"] }) {
  return (
    <div className="github-stat-card rounded-md p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[hsl(var(--github-text-muted))] text-xs font-medium">Top Languages</span>
        <Code2 className="h-4 w-4 text-[hsl(var(--github-text-muted))]" />
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full overflow-hidden flex mb-3 bg-[hsl(var(--github-border-muted))]">
        {languages.map((lang, index) => (
          <div
            key={lang.name}
            className="h-full transition-all duration-1000"
            style={{
              width: `${lang.percentage}%`,
              backgroundColor: lang.color,
              transitionDelay: `${index * 100}ms`,
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <div key={lang.name} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: lang.color }}
            />
            <span className="text-xs text-[hsl(var(--github-text))]">{lang.name}</span>
            <span className="text-xs text-[hsl(var(--github-text-muted))]">{lang.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="github-stat-card rounded-md p-4">
            <div className="h-3 bg-[hsl(var(--github-border-muted))] rounded w-16 mb-2" />
            <div className="h-6 bg-[hsl(var(--github-border-muted))] rounded w-12" />
          </div>
        ))}
      </div>
      <div className="github-stat-card rounded-md p-4">
        <div className="h-3 bg-[hsl(var(--github-border-muted))] rounded w-20 mb-3" />
        <div className="h-2 bg-[hsl(var(--github-border-muted))] rounded-full mb-3" />
        <div className="flex gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-3 bg-[hsl(var(--github-border-muted))] rounded w-16" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function GitHubStatsCards() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await fetchGitHubStats();
        setStats(data);
      } catch (err) {
        setError("Failed to load GitHub stats");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error || !stats) {
    return (
      <div className="github-stat-card rounded-md p-6 text-center">
        <p className="text-[hsl(var(--github-text-muted))]">Unable to load GitHub stats</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard
          title="Total Stars"
          value={stats.totalStars}
          icon={<Star className="h-4 w-4" />}
          delay={0}
        />
        <StatCard
          title="Commits"
          value={stats.totalCommits}
          icon={<GitCommit className="h-4 w-4" />}
          suffix="+"
          delay={100}
        />
        <StatCard
          title="Current Streak"
          value={stats.currentStreak}
          icon={<Flame className="h-4 w-4" />}
          suffix="days"
          delay={200}
        />
        <StatCard
          title="Repositories"
          value={stats.publicRepos}
          icon={<BookOpen className="h-4 w-4" />}
          delay={300}
        />
      </div>

      {/* Secondary stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <LanguageBar languages={stats.languages} />

        <div className="github-stat-card rounded-md p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[hsl(var(--github-text-muted))] text-xs font-medium">Profile Stats</span>
            <Users className="h-4 w-4 text-[hsl(var(--github-text-muted))]" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[hsl(var(--github-text))]">Followers</span>
              <span className="text-sm font-semibold text-[hsl(var(--github-text))]">{stats.followers}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[hsl(var(--github-text))]">Following</span>
              <span className="text-sm font-semibold text-[hsl(var(--github-text))]">{stats.following}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[hsl(var(--github-text))]">Longest Streak</span>
              <span className="text-sm font-semibold text-[hsl(var(--github-text))]">{stats.longestStreak} days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
