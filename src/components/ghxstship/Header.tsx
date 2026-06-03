"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRIMARY_NAV } from "@/lib/ghxstship";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="GHXSTSHIP home">
          <Image
            src="/assets/skull-bone.svg"
            alt="GHXSTSHIP ghost-ship logo"
            width={34}
            height={34}
            priority
          />
          <b>G H X S T S H I P</b>
        </Link>
        <button
          className="navtoggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i className="ph-bold ph-list" aria-hidden="true" />
        </button>
        <nav className={`navlinks${open ? " open" : ""}`} aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            className="gx-btn gx-btn--nebula gx-btn--sm"
            href="/contact"
            style={{ color: "var(--bone)" }}
            onClick={() => setOpen(false)}
          >
            Book Now ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}
