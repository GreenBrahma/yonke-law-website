import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { BASE, DISCLAIMER, JUST_HAPPENED_TOPICS, buildLlmsFullTxt, buildLlmsTxt, testimonialLines } from "../lib/llms";
import { TESTIMONIALS } from "../app/about/testimonials/data";
import sitemap from "../app/sitemap";

// Pins for /llms.txt and /llms-full.txt (LLM discoverability files).

const index = buildLlmsTxt();
const full = buildLlmsFullTxt(new Date("2026-01-02T00:00:00Z"));
const squash = (s: string) => s.replace(/\s+/g, " ").trim();

test("llms.txt follows the llms.txt shape: one H1, a summary blockquote, H2 sections", () => {
  const lines = index.split("\n");
  assert.equal(lines[0], "# Yonke Law");
  assert.equal(lines.filter((l) => l.startsWith("# ")).length, 1);
  assert.ok(lines[2].startsWith("> "));
  assert.ok(lines.filter((l) => l.startsWith("## ")).length >= 6);
  assert.ok(index.includes("## Optional"));
});

test("every yonke.law page linked from llms.txt is a page the sitemap knows", () => {
  const known = new Set(sitemap().map((e) => e.url));
  const links = Array.from(index.matchAll(/\]\((https:\/\/yonke\.law[^)]*)\)/g), (m) => m[1]);
  assert.ok(links.length > 40);
  for (const url of links) {
    const isFile = /\.(pdf|txt|xml)$/.test(url);
    const isTopic = url.startsWith(`${BASE}/just-happened/`);
    if (isFile || isTopic) continue;
    assert.ok(known.has(url), `${url} is linked from llms.txt but is not in the sitemap`);
  }
});

test("all 20 practice areas appear in both files", () => {
  const areas = sitemap()
    .map((e) => e.url)
    .filter((u) => u.startsWith(`${BASE}/what-we-handle/`));
  assert.equal(areas.length, 20);
  for (const url of areas) {
    assert.ok(index.includes(`(${url})`), `${url} missing from llms.txt`);
    assert.ok(full.includes(`URL: ${url}\n`), `${url} missing from llms-full.txt`);
  }
});

test("Just Happened topics match the topic page", () => {
  const src = readFileSync("app/just-happened/[topic]/page.tsx", "utf8");
  const block = src.slice(src.indexOf("const KNOWN_TOPICS"), src.indexOf("] as const"));
  const slugs = Array.from(block.matchAll(/"([a-z-]+)"/g), (m) => m[1]);
  assert.deepEqual(JUST_HAPPENED_TOPICS.map(([s]) => s), slugs);
});

test("the required disclaimer is verbatim from the footer, in both files", () => {
  const footer = squash(readFileSync("components/Footer.tsx", "utf8"));
  assert.ok(footer.includes(DISCLAIMER), "DISCLAIMER no longer matches components/Footer.tsx");
  assert.ok(index.includes(DISCLAIMER));
  assert.ok(full.includes(DISCLAIMER));
});

test("every testimonial carries the phrase Yonke Law and the quote is verbatim", () => {
  const lines = testimonialLines();
  assert.equal(lines.length, TESTIMONIALS.length);
  assert.ok(lines.length >= 7);
  lines.forEach((line, i) => {
    assert.ok(line.startsWith("Testimonial about Yonke Law from "), line);
    assert.ok(line.endsWith(`"${TESTIMONIALS[i].quote}"`), "quote must be unedited");
    assert.ok(full.includes(line), "testimonial missing from llms-full.txt");
  });
  assert.ok(index.includes("[Testimonials about Yonke Law](https://yonke.law/about/testimonials)"));
});

test("no pronunciation spelling, case results, unlinked or private pages", () => {
  for (const doc of [index, full]) {
    assert.ok(!/YONK-ee/i.test(doc), "phonetic spelling must not appear");
    assert.ok(!/\$\d[\d.,]*M\b/.test(doc), "dollar results must not appear");
    for (const path of ["/about/outcomes", "/promotion", "/spotlight-corner", "/people-first-login", "/command", "/api/"]) {
      assert.ok(!doc.includes(`${BASE}${path}`), `${path} must not appear`);
    }
  }
});

test("llms-full.txt carries the full practice-area text and the generation date", () => {
  assert.ok(full.includes("Generated: 2026-01-02"));
  assert.ok(full.includes("RSMo § 516.120"));
  assert.ok(full.includes("KSA § 60-513"));
  assert.ok(full.length > 50_000);
});
