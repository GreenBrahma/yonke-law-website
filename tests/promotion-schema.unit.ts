import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import PromotionPage from "../app/promotion/page";

// This is a sponsorship/visitor-information page, not an event listing.
// Inspect rendered JSON-LD recursively so nested Event nodes cannot regress.
const html = renderToStaticMarkup(PromotionPage());
const schemas = Array.from(
  html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  (match) => JSON.parse(match[1]) as Record<string, unknown>,
);

function schemaTypes(value: unknown): string[] {
  if (!value || typeof value !== "object") return [];
  if (Array.isArray(value)) return value.flatMap(schemaTypes);
  const record = value as Record<string, unknown>;
  const type = record["@type"];
  const own = typeof type === "string" ? [type] : Array.isArray(type) ? type : [];
  return [...own, ...Object.values(record).flatMap(schemaTypes)];
}

test("promotion retains WebPage and LegalService publisher schema", () => {
  assert.equal(schemas.length, 1);
  const page = schemas[0];
  assert.equal(page["@type"], "WebPage");
  assert.equal(page.url, "https://yonke.law/promotion");
  assert.equal(page.name, "Welcome to Kansas City — FIFA World Cup 2026");
  assert.equal((page.publisher as Record<string, unknown>)["@type"], "LegalService");
});

test("promotion does not misrepresent sponsorship content as an Event", () => {
  assert.ok(!schemaTypes(schemas).some((type) => /Event$/.test(type)));
});

test("promotion preserves visible campaign content and contact CTA", () => {
  assert.ok(html.includes("The World Is Coming to Kansas City."));
  assert.ok(html.includes("Best Lawyers"));
  assert.ok(html.includes("/promotions/Yonke-Law-World-Cup-Video.mp4"));
  assert.ok(html.includes('href="tel:+18162216400"'));
});
