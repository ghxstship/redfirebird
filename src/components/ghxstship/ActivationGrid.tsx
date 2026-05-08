/**
 * Activation Grid — proposal-shape capability cards, one per anchor /
 * site / venue. Same component drives the markets pages on the
 * marketing site AND the "Where Every Element Lands." section of every
 * proposal.
 *
 * Each card carries a tag (numeric or short label), a name, and a
 * one-paragraph capability description. Visual identity overlays via
 * the parent's `[data-spotlight]` if any.
 */

export interface ActivationSite {
  /** Short prefix (number, code, district label). */
  tag: string;
  /** Site name. */
  name: string;
  /** Capability paragraph. */
  body: string;
}

export function ActivationGrid({ sites }: { sites: ActivationSite[] }) {
  return (
    <div className="grid gap-px border-[3px] border-[var(--border-color)] bg-[var(--border-color)] sm:grid-cols-2 lg:grid-cols-3">
      {sites.map((site) => (
        <article key={site.tag + site.name} className="bg-[var(--background)] p-6">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--org-primary)" }}>
            {site.tag}
          </div>
          <h3 className="mt-2 text-xl uppercase" style={{ fontFamily: "var(--font-display)" }}>
            {site.name}
          </h3>
          <p className="mt-3 text-sm text-[var(--text-secondary)]">{site.body}</p>
        </article>
      ))}
    </div>
  );
}
