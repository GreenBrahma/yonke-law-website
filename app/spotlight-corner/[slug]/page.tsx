import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db/client";
import {
  spotlightPublishes,
  spotlightDrafts,
  spotlightSignals,
} from "@/db/schema/spotlight";
import { eq, desc, ne } from "drizzle-orm";

// Force dynamic rendering — reads from DB at request time
export const dynamic = "force-dynamic";

interface ArticleCitation {
  claim: string;
  sourceUrl: string;
  sourceSpan: string;
  retrievedAt: string;
}

interface ArticleData {
  slug: string;
  publishedAt: Date;
  jsonLd: Record<string, unknown>;
  headline: string;
  articleMarkdown: string;
  citations: ArticleCitation[];
  mikeNote: string;
  topicTags: string[];
  isDemo: boolean;
  sourceId: string;
}

async function getArticle(slug: string): Promise<ArticleData | null> {
  try {
    const rows = await db
      .select({
        slug: spotlightPublishes.slug,
        publishedAt: spotlightPublishes.publishedAt,
        jsonLd: spotlightPublishes.jsonLd,
        articleMarkdown: spotlightDrafts.articleMarkdown,
        articleCitations: spotlightDrafts.articleCitations,
        mikeNote: spotlightDrafts.mikeNote,
        signalId: spotlightDrafts.signalId,
        topicTags: spotlightSignals.topicTags,
        sourceId: spotlightSignals.sourceId,
      })
      .from(spotlightPublishes)
      .innerJoin(spotlightDrafts, eq(spotlightPublishes.draftId, spotlightDrafts.id))
      .innerJoin(spotlightSignals, eq(spotlightDrafts.signalId, spotlightSignals.id))
      .where(eq(spotlightPublishes.slug, slug))
      .limit(1);

    if (rows.length === 0) return null;

    const row = rows[0];
    const ld = (row.jsonLd ?? {}) as Record<string, unknown>;

    return {
      slug: row.slug,
      publishedAt: row.publishedAt,
      jsonLd: ld,
      headline: (ld.headline as string) ?? row.slug,
      articleMarkdown: row.articleMarkdown,
      citations: (row.articleCitations ?? []) as ArticleCitation[],
      mikeNote: row.mikeNote,
      topicTags: (row.topicTags ?? []) as string[],
      isDemo: (ld.is_demo as boolean) ?? false,
      sourceId: row.sourceId,
    };
  } catch {
    return null;
  }
}

async function getRelatedArticles(
  currentSlug: string,
  topicTags: string[]
): Promise<Array<{ slug: string; headline: string; publishedAt: Date }>> {
  try {
    const rows = await db
      .select({
        slug: spotlightPublishes.slug,
        publishedAt: spotlightPublishes.publishedAt,
        jsonLd: spotlightPublishes.jsonLd,
      })
      .from(spotlightPublishes)
      .where(ne(spotlightPublishes.slug, currentSlug))
      .orderBy(desc(spotlightPublishes.publishedAt))
      .limit(3);

    return rows.map((r) => ({
      slug: r.slug,
      headline: ((r.jsonLd as Record<string, unknown>)?.headline as string) ?? r.slug,
      publishedAt: r.publishedAt,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.headline} | Spotlight Corner — Yonke Law`,
    description: article.articleMarkdown.slice(0, 160).replace(/[#\[\]]/g, ""),
    alternates: {
      canonical: `https://yonke.law/spotlight-corner/${slug}/`,
    },
    openGraph: {
      title: article.headline,
      type: "article",
      publishedTime: article.publishedAt.toISOString(),
    },
  };
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Render markdown to simple HTML.
 * Handles: headings, paragraphs, bold, inline citation links, lists.
 */
function renderMarkdown(md: string): string {
  const lines = md.split("\n");
  let html = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    let processed = trimmed
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Inline links [text](url)
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-muted-gold hover:underline">$1</a>'
      );

    if (trimmed.startsWith("### ")) {
      html += `<h3 class="font-display text-lg text-chrome-highlight mt-8 mb-3">${processed.slice(4)}</h3>`;
    } else if (trimmed.startsWith("## ")) {
      html += `<h2 class="font-display text-xl text-chrome-highlight mt-10 mb-4">${processed.slice(3)}</h2>`;
    } else if (trimmed.startsWith("- ")) {
      html += `<li class="text-steel-silver leading-relaxed ml-4">${processed.slice(2)}</li>`;
    } else {
      html += `<p class="text-steel-silver leading-relaxed mb-4">${processed}</p>`;
    }
  }

  return html;
}

export default async function SpotlightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const related = await getRelatedArticles(slug, article.topicTags);
  const bodyHtml = renderMarkdown(article.articleMarkdown);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article.jsonLd),
        }}
      />

      {/* Demo Banner */}
      {article.isDemo && (
        <div className="bg-signal-red/90 text-chrome-highlight text-center py-3 px-4 text-sm font-semibold tracking-wide">
          ⚠ PREVIEW — DEMO CONTENT — NOT REAL REPORTING ⚠
        </div>
      )}

      {/* Article */}
      <article className="bg-obsidian-graphite py-16 md:py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Dateline + Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <time className="text-xs text-steel-silver/70">
              KC, MO — {formatDate(article.publishedAt)}
            </time>
            {article.topicTags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest text-muted-gold/80 bg-muted-gold/10 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="font-display text-3xl md:text-4xl lg:text-5xl text-chrome-highlight leading-[1.15] mb-8"
            aria-label={`Yonke, pronounced YONK-ee, Law Spotlight Corner: ${article.headline}`}
          >
            {article.headline}
          </h1>

          {/* Demo warning inline */}
          {article.isDemo && (
            <div className="bg-signal-red/10 border border-signal-red/30 rounded-lg p-4 mb-8">
              <p className="text-signal-red text-sm font-semibold">
                This is demo content for preview purposes only. It does not
                represent real reporting, real incidents, or real sources.
              </p>
            </div>
          )}

          {/* Body */}
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {/* Sources */}
          {article.citations.length > 0 && (
            <section className="mt-16 pt-8 border-t border-steel-silver/10">
              <h2 className="font-display text-lg text-chrome-highlight mb-4">
                Sources
              </h2>
              <ol className="space-y-2">
                {article.citations.map((cite, i) => (
                  <li key={i} className="text-sm text-steel-silver/70">
                    <span className="text-muted-gold mr-2">[{i + 1}]</span>
                    <a
                      href={cite.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-chrome-highlight transition-colors break-all"
                    >
                      {cite.sourceUrl}
                    </a>
                    <span className="text-steel-silver/40 ml-2">
                      retrieved {cite.retrievedAt}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-12 pt-8 border-t border-steel-silver/10">
              <h2 className="font-display text-lg text-chrome-highlight mb-4">
                Related
              </h2>
              <div className="space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/spotlight-corner/${r.slug}`}
                    className="block text-steel-silver hover:text-muted-gold transition-colors"
                  >
                    {r.headline}{" "}
                    <span className="text-xs text-steel-silver/50">
                      — {formatDate(r.publishedAt)}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* Back + CTA */}
      <section className="bg-charcoal-slate py-12 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/spotlight-corner"
            className="text-steel-silver hover:text-chrome-highlight transition-colors"
          >
            ← All articles
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/talk-to-us"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-6 py-3 rounded hover:bg-muted-gold/90 transition-colors text-sm"
            >
              Talk to Us
            </Link>
            <a
              href="tel:8162216400"
              className="text-steel-silver hover:text-chrome-highlight transition-colors text-sm"
            >
              816-221-6400
            </a>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <div className="bg-obsidian-graphite border-t border-steel-silver/10 py-6 px-4">
        <p className="mx-auto max-w-3xl text-xs text-steel-silver/50 leading-relaxed">
          Spotlight Corner provides factual reporting based on publicly available
          sources. It is not legal advice and does not create an attorney-client
          relationship. If you believe you have a legal matter, contact an
          attorney directly.
        </p>
      </div>
    </>
  );
}
