"use client";

import { useEffect, useState } from "react";

/**
 * Client-side polish for the static Spaceport page:
 *  - clock ticking in the FIDS header
 *  - split-flap shuffle for voyage codes
 *  - scroll-reveal fade-up
 *  - gate code from the current year
 *  - "Hero Mode" toggle (Cosmic Avenger palette)
 *
 * All animations honor prefers-reduced-motion.
 */
export function ClientEnhancements() {
  const [heroMode, setHeroMode] = useState(false);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    // CLOCK
    const clk = document.getElementById("clk");
    let clkIv: ReturnType<typeof setInterval> | null = null;
    if (clk) {
      const tick = () => {
        const d = new Date();
        clk.textContent =
          String(d.getHours()).padStart(2, "0") +
          ":" +
          String(d.getMinutes()).padStart(2, "0") +
          " EST";
      };
      tick();
      clkIv = setInterval(tick, 1000);
    }

    // GATE CODE
    const gate = document.getElementById("gate");
    if (gate) gate.textContent = "G" + String(new Date().getFullYear()).slice(-2);

    // SPLIT-FLAP
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const flaps = Array.from(document.querySelectorAll<HTMLElement>(".gx-flap[data-flap]"));
    const flapTimers: ReturnType<typeof setInterval>[] = [];
    flaps.forEach((el) => {
      const final = el.textContent ?? "";
      if (reduce) {
        el.textContent = final;
        return;
      }
      let n = 0;
      const iv = setInterval(() => {
        el.classList.add("flipping");
        setTimeout(() => el.classList.remove("flipping"), 180);
        el.textContent = final
          .split("")
          .map((c, i) => (i < n || c === " " ? c : chars[Math.floor(Math.random() * chars.length)]))
          .join("");
        if (n++ > final.length) {
          clearInterval(iv);
          el.textContent = final;
        }
      }, 90);
      flapTimers.push(iv);
    });

    // SCROLL-REVEAL
    let revealCleanup: number[] = [];
    if (!reduce) {
      const groups = document.querySelectorAll<HTMLElement>("main > section");
      groups.forEach((sec) => {
        const items = sec.querySelectorAll<HTMLElement>(
          ":scope .eyebrow, :scope h1, :scope h2.sec, :scope .answer, :scope .lede, :scope .dcard, :scope .vcard, :scope .gx-smap, :scope .gx-fids, :scope .bstep, :scope .log, :scope .ccard"
        );
        const targets = items.length ? Array.from(items) : [sec];
        targets.forEach((el) => el.classList.add("reveal"));
      });
      const revealSec = (sec: Element) => {
        Array.from(sec.querySelectorAll<HTMLElement>(".reveal")).forEach((el, i) => {
          el.style.transitionDelay = Math.min(i, 8) * 40 + "ms";
          el.classList.add("is-in");
        });
      };
      if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
      } else {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                revealSec(e.target);
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0, rootMargin: "0px 0px -8% 0px" }
        );
        groups.forEach((s) => io.observe(s));
      }
      revealCleanup.push(
        window.setTimeout(() => {
          document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
            el.style.transitionDelay = "0ms";
            el.classList.add("is-in");
          });
        }, 1500),
        window.setTimeout(() => {
          document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
            el.classList.remove("reveal");
            el.style.transitionDelay = "";
          });
        }, 2600)
      );
    }

    return () => {
      if (clkIv) clearInterval(clkIv);
      flapTimers.forEach((t) => clearInterval(t));
      revealCleanup.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <button
      type="button"
      className="modetoggle"
      onClick={() => {
        const next = !heroMode;
        setHeroMode(next);
        document.documentElement.classList.toggle("hero-mode", next);
      }}
      aria-pressed={heroMode}
    >
      <span className="dot" />
      Hero Mode: {heroMode ? "On" : "Off"}
    </button>
  );
}
