import Link from "next/link";
import { Check } from "lucide-react";
import type { LifecyclePhase } from "@/lib/ghxstship/lifecycle";
import { paths } from "@/lib/ghxstship";

/**
 * Proposal-shape phase card — vertical, with sample-window deadline +
 * milestones + deliverables + approval gate. Same component drives the
 * phase pillar pages on the marketing site AND the proposal lifecycle
 * spine, so a visitor who reads /phases/build and later opens a
 * proposal sees the same artifact.
 */
export function LifecyclePhaseCard({ phase, linked = true }: { phase: LifecyclePhase; linked?: boolean }) {
  const body = (
    <div className="flex h-full flex-col gap-5 p-6">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--text-muted)] uppercase">
            Phase {phase.number} · {phase.sampleWindow}
          </div>
          <div className="mt-1 text-2xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
            {phase.name}
          </div>
        </div>
      </div>
      <div>
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--org-primary)" }}>
          Milestones
        </div>
        <ul className="mt-2 space-y-1.5 text-sm">
          {phase.milestones.map((m) => (
            <li key={m} className="flex items-start gap-2 text-[var(--text-secondary)]">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--org-primary)" }} />
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--org-primary)" }}>
          Deliverables
        </div>
        <ul className="mt-2 space-y-1.5 text-sm">
          {phase.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2 text-[var(--text-secondary)]">
              <span
                className="mt-2 inline-block h-1 w-1 shrink-0"
                style={{ background: "var(--org-accent)" }}
              />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto border-l-[3px] border-[var(--org-accent)] pl-3">
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)]">
          Approval Gate
        </div>
        <p className="mt-1 text-sm text-[var(--text-primary)]">{phase.approvalGate}</p>
      </div>
    </div>
  );

  if (!linked) return <article className="surface hover-lift h-full">{body}</article>;

  return (
    <Link href={paths.phaseDetail(phase.slug)} className="surface hover-lift block h-full">
      {body}
    </Link>
  );
}
