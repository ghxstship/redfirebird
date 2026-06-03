import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, POST_BY_SLUG, ORG } from "@/lib/ghxstship";
import { Breadcrumbs } from "@/components/ghxstship/Breadcrumbs";
import { Schema, blogPostingSchema, breadcrumbSchema } from "@/components/ghxstship/Schemas";

export const dynamic = "force-static";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = POST_BY_SLUG[slug];
  if (!p) return {};
  const url = `${ORG.url}logs/${p.slug}`;
  return {
    title: `${p.title} — GHXSTSHIP Logs`,
    description: p.excerpt,
    keywords: [p.primaryKeyword],
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.excerpt, url, type: "article" },
  };
}

function renderBody(body: string) {
  // Lightweight markdown-ish: support "## " headings, paragraphs separated by blank lines.
  const blocks = body.split(/\n\s*\n/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return <h2 key={i}>{trimmed.slice(3)}</h2>;
    }
    return <p key={i}>{trimmed}</p>;
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = POST_BY_SLUG[slug];
  if (!p) return notFound();
  const url = `${ORG.url}logs/${p.slug}`;

  return (
    <>
      <Schema
        data={[
          blogPostingSchema({
            url,
            headline: p.title,
            description: p.excerpt,
            datePublished: p.iso,
            authorName: p.authorName ?? `GHXSTSHIP ${p.authorRank}`,
            articleSection: p.cat,
            keywords: [p.primaryKeyword],
          }),
          breadcrumbSchema([
            { name: "Home", url: ORG.url },
            { name: "Logs", url: `${ORG.url}logs` },
            { name: p.title, url },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Logs", href: "/logs" },
          { label: p.title },
        ]}
      />
      <main>
        <section className="subhero">
          <div className="wrap">
            <p className="eyebrow">
              {p.cat} · {p.date}
            </p>
            <h1>{p.title}</h1>
            <p className="answer">{p.excerpt}</p>
            <div className="voymeta" style={{ marginTop: 22 }}>
              <span>
                By <b>GHXSTSHIP {p.authorRank}</b>
              </span>
              <span>
                Filed under <b>{p.cat}</b>
              </span>
            </div>
          </div>
        </section>
        <section className="pad">
          <div className="wrap">
            <div className="post-body">{renderBody(p.body)}</div>
          </div>
        </section>
        <section className="cta">
          <div className="wrap">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              More from the Log
            </p>
            <h2>
              Keep
              <br />
              Reading.
            </h2>
            <div className="hero-cta" style={{ justifyContent: "center" }}>
              <Link className="gx-btn gx-btn--lg" href="/logs">
                All Dispatches
              </Link>
              <Link className="gx-btn gx-btn--ghost gx-btn--lg" href="/voyages">
                Past Voyages
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
