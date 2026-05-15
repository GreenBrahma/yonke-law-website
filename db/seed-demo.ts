/**
 * Spotlight Corner — Demo Seed Script
 *
 * Inserts 4 demo articles into spotlight_signals → spotlight_drafts → spotlight_publishes.
 * Every record has is_demo: true in its JSONB metadata for easy filtering/removal.
 *
 * Run: npx tsx db/seed-demo.ts
 * Requires: DATABASE_URL in .env.local
 *
 * ⚠ DEMO CONTENT — NOT REAL REPORTING ⚠
 * All content below is clearly fictional placeholder material for UI preview purposes.
 */

import "dotenv/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema/spotlight";
import { randomUUID } from "crypto";

const {
  spotlightSignals,
  spotlightDrafts,
  spotlightPublishes,
  spotlightAuditLog,
} = schema;

async function seed() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL not set. Add it to .env.local");
    process.exit(1);
  }

  const pool = new Pool({ connectionString: url, max: 1, ssl: { rejectUnauthorized: false } });
  const db = drizzle(pool, { schema });

  console.log("🌱 Seeding demo content...\n");

  const demoArticles = [
    {
      slug: "2026-05-15-demo-nws-severe-weather",
      sourceId: "nws",
      headline: "Demo: NWS Issues Severe Thunderstorm Warning for Jackson County",
      topicTags: ["car-accidents", "premises-liability"],
      severityTag: "multi-victim" as const,
      markdown: `## Severe Thunderstorm Warning Issued for Jackson County

The National Weather Service Kansas City office issued a severe thunderstorm warning for Jackson County, Missouri on the evening of May 14, 2026. The warning cited the potential for damaging winds exceeding 60 mph, quarter-sized hail, and localized flash flooding across the Kansas City metro area [1].

### What was reported

According to the NWS alert, the storm system was moving northeast at approximately 35 mph. Residents in Independence, Blue Springs, Lee's Summit, and Raytown were advised to seek shelter immediately [1]. The Kansas City Scout traffic management system reported multiple incidents along I-70 and I-435 during the storm window [2].

### Why this matters

Severe weather events create hazardous driving conditions and can expose dangerous property conditions — downed trees, flooded roadways, inadequate drainage, and damaged structures. Tracking these events in real time helps identify patterns in where storm damage repeatedly occurs and whether prior complaints were filed.

### What to watch

311 complaint data from the KCMO open data portal may show prior reports of flooding, drainage issues, or tree hazards at locations where storm damage is later reported [2].

**This is demo content for preview purposes only. It does not represent real incidents or real sources.**`,
      citations: [
        {
          claim: "Severe thunderstorm warning for Jackson County",
          sourceUrl: "https://api.weather.gov/alerts/active?area=MO",
          sourceSpan: "Severe Thunderstorm Warning for Jackson, MO",
          retrievedAt: "2026-05-14T22:00:00Z",
        },
        {
          claim: "Multiple incidents along I-70 and I-435",
          sourceUrl: "https://www.kcscout.net",
          sourceSpan: "KC Scout incident reports — Jackson County",
          retrievedAt: "2026-05-14T22:15:00Z",
        },
      ],
      mikeNote:
        "Demo article. Illustrates the NWS listener output format and how weather events connect to premises liability and driving hazard patterns.",
    },
    {
      slug: "2026-05-14-demo-311-dangerous-building",
      sourceId: "kcmo311",
      headline: "Demo: Repeat 311 Complaints Flag Dangerous Building on Prospect Avenue",
      topicTags: ["premises-liability", "civic-accountability"],
      severityTag: "systemic" as const,
      markdown: `## Repeat 311 Complaints Flag Dangerous Building on Prospect Avenue

KCMO 311 data shows seven complaints filed against a commercial property in the 4800 block of Prospect Avenue over an 18-month period, citing structural damage, an unsecured entrance, and debris in the sidewalk [1]. The property appears on the City's Dangerous Buildings List as of March 2026 [2].

### What the records show

The earliest complaint was logged in September 2024. Subsequent complaints in December 2024, February 2025, June 2025, and three more in early 2026 describe worsening conditions. The most recent report, filed April 2026, described "partial roof collapse visible from street" and "bricks falling onto sidewalk" [1].

### Why this matters

Repeated 311 complaints that go unresolved can establish prior notice — the property owner and the city both knew about the hazard and had time to act. When someone is later injured at a location with a long complaint history, that history becomes important evidence.

### Pattern context

The Dangerous Buildings dataset currently lists over 200 active cases across Kansas City [2]. Properties with five or more complaints over 12 months represent the highest-risk cluster.

**This is demo content for preview purposes only. It does not represent real properties, real complaints, or real sources.**`,
      citations: [
        {
          claim: "Seven complaints filed against a commercial property",
          sourceUrl: "https://data.kcmo.org/resource/d4px-6rwg.json",
          sourceSpan: "311 Call Center Reported Issues — Prospect Ave cluster",
          retrievedAt: "2026-05-14T18:00:00Z",
        },
        {
          claim: "Property appears on the City's Dangerous Buildings List",
          sourceUrl: "https://data.kcmo.org/resource/rm2v-mbk5.json",
          sourceSpan: "Dangerous Buildings List — active cases",
          retrievedAt: "2026-05-14T18:05:00Z",
        },
      ],
      mikeNote:
        "Demo article. Shows how 311 data and the Dangerous Buildings dataset combine to identify prior-notice premises liability patterns.",
    },
    {
      slug: "2026-05-13-demo-mshp-fatal-crash",
      sourceId: "mshp",
      headline: "Demo: MSHP Reports Fatal Two-Vehicle Crash on I-435 Near Raytown",
      topicTags: ["car-accidents", "wrongful-death"],
      severityTag: "fatality" as const,
      markdown: `## MSHP Reports Fatal Two-Vehicle Crash on I-435 Near Raytown

The Missouri State Highway Patrol reported a fatal two-vehicle crash on I-435 southbound near the Raytown Road exit on the afternoon of May 13, 2026 [1]. A local news report confirmed one person was pronounced dead at the scene and two others were transported to a Kansas City hospital [2].

### What was reported

According to the MSHP crash report, the collision occurred at approximately 3:45 PM when a southbound vehicle crossed the median into oncoming traffic. The at-fault driver was traveling at a high rate of speed [1]. KSHB 41 reported that the crash caused a multi-hour lane closure and significant traffic backups extending north to I-70 [2].

### What we're watching

I-435 through the Raytown corridor has appeared in MSHP crash data multiple times this year. Speed-related crashes in this section are consistent with patterns documented in the 2025 MSHP crash compendium, which showed Jackson County had the highest crash count in Missouri for the fifth consecutive year [1].

**This is demo content for preview purposes only. It does not represent real crashes, real people, or real sources.**`,
      citations: [
        {
          claim: "Fatal two-vehicle crash on I-435 southbound",
          sourceUrl: "https://mshp.dps.mo.gov/HP68/search.jsp",
          sourceSpan: "MSHP Crash Report — I-435 SB, Jackson County",
          retrievedAt: "2026-05-13T18:30:00Z",
        },
        {
          claim: "One person pronounced dead at the scene",
          sourceUrl: "https://kshb.com/rss/category/news/crime",
          sourceSpan: "KSHB 41 — Fatal crash on I-435 near Raytown",
          retrievedAt: "2026-05-13T19:00:00Z",
        },
      ],
      mikeNote:
        "Demo article. Illustrates the MSHP crash listener output with KSHB cross-reference, demonstrating the two-source verification pattern.",
    },
    {
      slug: "2026-05-12-demo-osha-construction",
      sourceId: "osha",
      headline: "Demo: OSHA Cites KC Contractor for Repeat Trench Safety Violations",
      topicTags: ["workplace-injuries", "civic-accountability"],
      severityTag: "hospitalization" as const,
      markdown: `## OSHA Cites KC Contractor for Repeat Trench Safety Violations

Federal workplace safety records show OSHA cited a Kansas City-area excavation contractor for serious violations related to trench safety in April 2026, including failure to use a protective system and failure to conduct daily inspections [1]. The citations were classified as repeat violations, indicating the company had been previously cited for the same hazards [1].

### What the records show

The OSHA accident investigation was initiated after a worker was hospitalized following a partial trench collapse at a residential construction site in Johnson County, Kansas [1]. KSHB 41 reported on the hospitalization and identified the worksite location [2].

### Why this matters

Repeat OSHA violations for trench safety are among the most dangerous workplace hazard patterns. The Federal Register shows trench collapses are responsible for an average of 40 fatalities per year nationally. When a contractor has been previously cited for the same violation, that history is significant in any subsequent injury claim [1].

### What to watch

OSHA's establishment search allows anyone to look up inspection history for Kansas City-area contractors by name or zip code. Companies with prior trench safety citations that continue to operate without corrective action represent ongoing risk [1].

**This is demo content for preview purposes only. It does not represent real companies, real incidents, or real OSHA records.**`,
      citations: [
        {
          claim: "OSHA cited a KC-area contractor for repeat trench violations",
          sourceUrl: "https://www.osha.gov/ords/imis/accidentsearch.search",
          sourceSpan: "OSHA Accident Investigation — Johnson County, KS",
          retrievedAt: "2026-05-12T14:00:00Z",
        },
        {
          claim: "Worker hospitalized following partial trench collapse",
          sourceUrl: "https://kshb.com/rss/category/news/crime",
          sourceSpan: "KSHB 41 — Construction worker hospitalized",
          retrievedAt: "2026-05-12T16:00:00Z",
        },
      ],
      mikeNote:
        "Demo article. Shows OSHA listener output with news cross-reference, demonstrating repeat-violator detection for workplace injury accountability.",
    },
  ];

  for (const article of demoArticles) {
    const signalId = randomUUID();
    const draftId = randomUUID();
    const publishId = randomUUID();
    const now = new Date();

    // 1. Insert signal
    await db.insert(spotlightSignals).values({
      id: signalId,
      sourceId: article.sourceId,
      sourceUrl: article.citations[0].sourceUrl,
      sourceRetrievedAt: now,
      rawContent: JSON.stringify({ demo: true, headline: article.headline }),
      rawContentHash: `demo-${article.slug}`,
      normalizedEntities: { orgs: [], people: [], places: ["Kansas City"] },
      location: { neighborhood: "Kansas City Metro" },
      eventTime: now,
      status: "published",
      topicTags: article.topicTags,
      severityTag: article.severityTag,
      geographyTags: { neighborhood: "Kansas City Metro" },
      score: "0.95",
    });

    // 2. Insert draft
    await db.insert(spotlightDrafts).values({
      id: draftId,
      signalId,
      articleMarkdown: article.markdown,
      articleCitations: article.citations,
      socialVariants: { facebook: "Demo post", linkedin: "Demo post", instagram: "Demo post" },
      mikeNote: article.mikeNote,
      suggestedVisuals: { hero: { type: "demo-placeholder" } },
      geminiPromptHash: `demo-prompt-${article.slug}`,
      geminiResponseHash: `demo-response-${article.slug}`,
      status: "published",
      approvedBy: "demo-seed",
      approvedAt: now,
    });

    // 3. Insert publish
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.headline,
      datePublished: now.toISOString(),
      dateModified: now.toISOString(),
      author: {
        "@type": "Person",
        name: "Michael T. Yonke",
        knowsAbout: [
          "Personal Injury Law",
          "Medical Malpractice",
          "Kansas City",
        ],
      },
      publisher: {
        "@type": "LegalService",
        name: "Yonke Law L.L.C.",
        url: "https://yonke.law",
      },
      sameAs: article.citations.map((c) => c.sourceUrl),
      about: article.topicTags.map((t) => ({ "@type": "Thing", name: t })),
      is_demo: true,
    };

    await db.insert(spotlightPublishes).values({
      id: publishId,
      draftId,
      slug: article.slug,
      publishedAt: now,
      jsonLd,
    });

    // 4. Audit
    await db.insert(spotlightAuditLog).values({
      eventType: "publish",
      signalId,
      draftId,
      actor: "system:demo-seed",
      details: { demo: true, slug: article.slug },
    });

    console.log(`  ✅ ${article.slug}`);
  }

  console.log(`\n🎉 Seeded ${demoArticles.length} demo articles.`);
  console.log("   All rows marked with is_demo: true for easy cleanup.\n");

  await pool.end();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
