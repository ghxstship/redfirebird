/**
 * Engagement Bar — proposal-style commercial-framework summary. A
 * horizontal bar of 4–6 hard data points, used at the top of the
 * pricing page so the visitor sees the bones of a real engagement
 * before reading the tier cards.
 *
 * The same shape lands at the top of every signed proposal — Total,
 * Deposit, Balance, Window, Equipment / Pass-Through. Sample data here
 * represents a Run-tier engagement; real engagements bind real numbers.
 */

export interface EngagementCell {
  label: string;
  value: string;
  sub?: string;
}

const SAMPLE: EngagementCell[] = [
  { label: "Sample Engagement", value: "The Run", sub: "Per-project, mid-tier" },
  { label: "Professional Fee", value: "$75K", sub: "Locked at SOW" },
  { label: "Deposit", value: "60%", sub: "On signature" },
  { label: "Balance", value: "40%", sub: "At load-in" },
  { label: "Window", value: "12 weeks", sub: "Discovery → Wrap" },
  { label: "Pass-Through", value: "12–18%", sub: "Admin on production" },
];

export function EngagementBar({ cells = SAMPLE }: { cells?: EngagementCell[] }) {
  return (
    <div className="surface-raised relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: "linear-gradient(90deg, var(--org-primary), var(--org-accent))" }}
      />
      <div className="grid grid-cols-2 gap-px bg-[var(--border-color)] sm:grid-cols-3 lg:grid-cols-6">
        {cells.map((cell) => (
          <div key={cell.label} className="bg-[var(--background)] p-5">
            <div className="text-[10px] font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase">
              {cell.label}
            </div>
            <div
              className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--org-primary)" }}
            >
              {cell.value}
            </div>
            {cell.sub && <div className="mt-1 text-[11px] text-[var(--text-muted)]">{cell.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
