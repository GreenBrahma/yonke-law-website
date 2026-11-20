/**
 * People First portal — pins for the parts that guard access.
 * Run: npm run test:portal
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createLinkToken, verifyLinkToken, LINK_TTL_MS } from "../lib/portal/link-token";
import { isInvited, userIdFor } from "../lib/portal/invite";
import { sampleCase } from "../lib/portal/sample-case";
import { samplePdf } from "../lib/portal/sample-pdf";

const SECRET = "unit-test-secret-0123456789abcdef";

test("a sign-in link verifies for the email it was made for", async () => {
  const token = await createLinkToken("Person@Example.com", { secret: SECRET });
  const v = await verifyLinkToken(token, { secret: SECRET });
  assert.equal(v?.email, "person@example.com");
  assert.match(v!.linkId, /^[0-9a-f-]{36}$/);
});

test("a sign-in link expires after 15 minutes", async () => {
  const t0 = Date.now();
  const token = await createLinkToken("p@example.com", { secret: SECRET, now: t0 });
  assert.ok(await verifyLinkToken(token, { secret: SECRET, now: t0 + LINK_TTL_MS - 1000 }));
  assert.equal(await verifyLinkToken(token, { secret: SECRET, now: t0 + LINK_TTL_MS + 1000 }), null);
});

test("a tampered or forged sign-in link is refused", async () => {
  const token = await createLinkToken("p@example.com", { secret: SECRET });
  const [body, sig] = token.split(".");
  const forgedBody = Buffer.from(JSON.stringify({ e: "someone-else@example.com", x: Date.now() + 60000, n: crypto.randomUUID() }))
    .toString("base64url");
  assert.equal(await verifyLinkToken(`${forgedBody}.${sig}`, { secret: SECRET }), null);
  assert.equal(await verifyLinkToken(`${body}.${sig.slice(0, -2)}AA`, { secret: SECRET }), null);
  assert.equal(await verifyLinkToken(token, { secret: "a-different-secret-0123456789" }), null);
  assert.equal(await verifyLinkToken("", { secret: SECRET }), null);
  assert.equal(await verifyLinkToken("not-a-token", { secret: SECRET }), null);
});

test("only invited emails may sign in", () => {
  process.env.PORTAL_INVITE_EMAILS = " Mike@Yonke.law , second@example.com ";
  assert.equal(isInvited("mike@yonke.law"), true);
  assert.equal(isInvited("  MIKE@yonke.law "), true);
  assert.equal(isInvited("second@example.com"), true);
  assert.equal(isInvited("stranger@example.com"), false);
  assert.equal(isInvited(""), false);
  process.env.PORTAL_INVITE_EMAILS = "";
  assert.equal(isInvited("mike@yonke.law"), false);
});

test("each person gets their own stable storage id", async () => {
  const a = await userIdFor("a@example.com");
  assert.equal(a, await userIdFor(" A@Example.com "));
  assert.notEqual(a, await userIdFor("b@example.com"));
  assert.match(a, /^pf_[0-9a-f]{32}$/);
});

test("the sample case is marked as a sample and always has something coming up", () => {
  const now = new Date();
  const c = sampleCase("p@example.com", now);
  assert.equal(c.isSample, true);
  assert.ok(c.keyDates.some((d) => new Date(d.when) > now));
  assert.ok(c.legalDocuments.some((d) => d.signature === "not_signed"));
  assert.ok(c.legalDocuments.some((d) => d.signature === "signed"));
});

test("sample documents are real PDFs that say they are samples", () => {
  const text = new TextDecoder().decode(samplePdf("Notice (of) Deposition", ["line"]));
  assert.ok(text.startsWith("%PDF-1.4"));
  assert.ok(text.includes("SAMPLE DOCUMENT"));
  assert.ok(text.trimEnd().endsWith("%%EOF"));
});

test("sign-in never creates an account and never accepts a password", () => {
  const auth = readFileSync(new URL("../auth.ts", import.meta.url), "utf8");
  assert.ok(!/\.insert\(/.test(auth), "auth.ts must not create users");
  assert.ok(!/password/i.test(auth.replace(/no passwords/gi, "")), "auth.ts must not take a password");
  assert.ok(auth.includes("isInvited("), "sign-in must check the invited list");
  assert.ok(auth.includes("consumeLinkId("), "sign-in links must be single use");
});

test("portal copy follows the firm's wording rules", () => {
  const files = [
    "../app/people-first-login/page.tsx",
    "../app/people-first-login/(portal)/home/page.tsx",
    "../app/people-first-login/(portal)/whats-next/page.tsx",
    "../app/people-first-login/(portal)/legal-documents/page.tsx",
    "../app/people-first-login/(portal)/my-documents/page.tsx",
    "../app/people-first-login/(portal)/schedule/page.tsx",
    "../app/people-first-login/(portal)/about-you/page.tsx",
    "../app/people-first-login/(portal)/videos/page.tsx",
    "../components/portal/CheckIn.tsx",
    "../components/portal/SignInForm.tsx",
    "../lib/portal/sample-case.ts",
  ];
  for (const f of files) {
    const visible = readFileSync(new URL(f, import.meta.url), "utf8").replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
    assert.ok(!/\bhonest/i.test(visible), `${f} uses "honest"`);
    assert.ok(!/>[^<{]*\bclients?\b[^<{]*</i.test(visible), `${f} says "client" on screen`);
    assert.ok(!/YONK-ee/i.test(visible), `${f} shows the phonetic spelling`);
  }
});
