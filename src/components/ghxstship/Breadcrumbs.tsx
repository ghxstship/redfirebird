import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="wrap">
      <p className="crumbs">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <span key={`${c.label}-${i}`}>
              {c.href && !last ? <Link href={c.href}>{c.label}</Link> : <span style={{ color: last ? "var(--brass)" : undefined }}>{c.label}</span>}
              {!last && " / "}
            </span>
          );
        })}
      </p>
    </div>
  );
}
