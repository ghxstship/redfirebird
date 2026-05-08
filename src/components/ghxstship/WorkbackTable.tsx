import { LIFECYCLE } from "@/lib/ghxstship/lifecycle";

/**
 * Workback Schedule — milestone × phase × sample-week table. Same
 * artifact every proposal closes with, ported to marketing as a sample
 * 12-week engagement so visitors can see the rhythm before they brief
 * us.
 */

interface WorkbackRow {
  milestone: string;
  phase: string;
  week: string;
}

const SAMPLE_WORKBACK: WorkbackRow[] = [
  { milestone: "Brief intake + MSA signed", phase: "Discovery", week: "Week 1" },
  { milestone: "Venue selected, insurance bound", phase: "Discovery", week: "Week 2" },
  { milestone: "Concept renderings approved", phase: "Concept", week: "Week 3" },
  { milestone: "Technical design + menu locked", phase: "Concept", week: "Week 4" },
  { milestone: "Stamped engineering delivered", phase: "Develop", week: "Week 5" },
  { milestone: "Permits filed, vendors onboarded", phase: "Develop", week: "Week 6" },
  { milestone: "Travel booked, hotel block confirmed", phase: "Advance", week: "Week 7" },
  { milestone: "Advance ship dispatched", phase: "Advance", week: "Week 8" },
  { milestone: "Per diem distributed, catering live", phase: "Advance", week: "Week 9" },
  { milestone: "Load-in begins", phase: "Build", week: "Week 10" },
  { milestone: "AV commissioned, fire-marshal sign-off", phase: "Build", week: "Week 11" },
  { milestone: "Show opens", phase: "Show", week: "Show Week" },
  { milestone: "Strike + load-out", phase: "Strike", week: "Strike + 1" },
  { milestone: "Reconciliation + ESG report delivered", phase: "Wrap", week: "Wrap + 4" },
];

export function WorkbackTable({ rows = SAMPLE_WORKBACK }: { rows?: WorkbackRow[] }) {
  // Color rows by phase using the lifecycle order.
  const phaseOrder = LIFECYCLE.map((p) => p.name);
  const phaseIndex = (name: string) => phaseOrder.indexOf(name);

  return (
    <div className="surface overflow-hidden">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-[var(--bg-secondary)]">
          <tr>
            <th className="px-4 py-3 text-left text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)]">
              Milestone
            </th>
            <th className="px-4 py-3 text-left text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)]">
              Phase
            </th>
            <th className="px-4 py-3 text-left text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)]">
              Sample Week
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={`${row.milestone}-${i}`}
              className="border-t border-[var(--border-color)]"
              style={{
                background:
                  phaseIndex(row.phase) % 2 === 0 ? "var(--background)" : "var(--bg-secondary)",
              }}
            >
              <td className="px-4 py-3 text-[var(--text-primary)]">{row.milestone}</td>
              <td className="px-4 py-3">
                <span
                  className="inline-flex items-baseline gap-2 font-mono text-[11px] tracking-wide"
                  style={{ color: "var(--org-primary)" }}
                >
                  <span
                    className="inline-block h-1.5 w-1.5"
                    style={{ background: "var(--org-accent)" }}
                  />
                  {row.phase}
                </span>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-[var(--text-secondary)]">{row.week}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
