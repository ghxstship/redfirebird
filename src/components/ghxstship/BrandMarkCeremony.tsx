"use client";

import { useEffect, useState } from "react";

/**
 * Brand-mark ceremony. On first visit, the spaced "G H X S T S H I P"
 * wordmark composes letter-by-letter over ~900ms, then dissolves into
 * the homepage. Cookie-gated so subsequent visits skip straight to the
 * page. Reduced-motion users get an instant fade-in instead.
 *
 * Marvel-Studios-grade ceremony for a one-time entrance. Cheap to
 * build, expensive feel.
 */

const COOKIE = "ghx_ceremony_seen";
const LETTERS = ["G", "H", "X", "S", "T", "S", "H", "I", "P"] as const;

function hasSeenCookie(): boolean {
  if (typeof document === "undefined") return true;
  return document.cookie.split("; ").some((c) => c.startsWith(`${COOKIE}=1`));
}

function setSeenCookie() {
  if (typeof document === "undefined") return;
  // 24-hour persistence — replays once a day, ceremonial without being intrusive.
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${COOKIE}=1; path=/; expires=${expires}; SameSite=Lax`;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

export function BrandMarkCeremony() {
  // Default open=false to keep the ceremony off SSR — only fire when the
  // client has confirmed the cookie isn't set. Otherwise SSR would flash
  // the overlay for repeat visitors who shouldn't see it.
  const [stage, setStage] = useState<"idle" | "playing" | "done">("idle");

  useEffect(() => {
    if (hasSeenCookie()) {
      setStage("done");
      return;
    }
    setSeenCookie();
    setStage("playing");
    const dwell = prefersReducedMotion() ? 600 : 1500;
    const fade = prefersReducedMotion() ? 200 : 450;
    const t1 = setTimeout(() => setStage("done"), dwell + fade);
    return () => clearTimeout(t1);
  }, []);

  if (stage === "idle" || stage === "done") return null;

  const reduced = prefersReducedMotion();

  return (
    <div
      role="presentation"
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: "var(--bg)",
        animation: reduced
          ? "ghx-ceremony-fade 200ms 600ms forwards"
          : "ghx-ceremony-fade 450ms 1500ms forwards",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="inline-block h-3 w-3"
          style={{
            background: "var(--org-accent)",
            animation: reduced ? "ghx-ceremony-letter 200ms forwards" : "ghx-ceremony-letter 220ms forwards",
            opacity: 0,
          }}
        />
        {LETTERS.map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            className="text-3xl font-semibold tracking-[0.18em] uppercase sm:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
              animation: reduced
                ? `ghx-ceremony-letter 200ms ${i * 20}ms forwards`
                : `ghx-ceremony-letter 220ms ${i * 90 + 60}ms forwards`,
              opacity: 0,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ghx-ceremony-letter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ghx-ceremony-fade {
          from { opacity: 1; }
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>
    </div>
  );
}
