/**
 * People First portal — end-to-end walk through every screen.
 *
 * Runs against the local dev server with the developer settings in
 * .env.local (AUTH_SECRET, PORTAL_INVITE_EMAILS). It signs in the same way a
 * person does: with a one-time link, made here with the same secret the
 * server uses. No email is sent and nothing touches the live site.
 *
 * Run: npx playwright test tests/portal.spec.ts
 */
import { test, expect, type Page } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";
import { createLinkToken } from "../lib/portal/link-token";

function setting(name: string): string {
  if (process.env[name]) return process.env[name]!;
  if (!existsSync(".env.local")) return "";
  const line = readFileSync(".env.local", "utf8").split("\n").find((l) => l.startsWith(`${name}=`));
  return line ? line.slice(name.length + 1).trim() : "";
}

const SECRET = setting("AUTH_SECRET");
const EMAIL = setting("PORTAL_INVITE_EMAILS").split(",")[0]?.trim() ?? "";
const SHOTS = process.env.PORTAL_SHOTS;

test.skip(!SECRET || !EMAIL, "Needs AUTH_SECRET and PORTAL_INVITE_EMAILS in .env.local");

async function signIn(page: Page, email = EMAIL) {
  const token = await createLinkToken(email, { secret: SECRET });
  await page.goto(`/people-first-login/verify?token=${encodeURIComponent(token)}`);
  await page.getByRole("button", { name: "Continue to People First" }).click();
  await page.waitForURL("**/people-first-login/home");
  return token;
}

async function shot(page: Page, name: string) {
  if (SHOTS) await page.screenshot({ path: `${SHOTS}/${name}.png`, fullPage: true });
}

async function noSidewaysScroll(page: Page) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
}

test.describe("People First portal: access", () => {
  test("private screens and data refuse anyone not signed in", async ({ page, request }) => {
    for (const path of ["home", "whats-next", "my-documents", "legal-documents", "videos", "schedule", "about-you"]) {
      await page.goto(`/people-first-login/${path}`);
      await expect(page).toHaveURL(/\/people-first-login$/);
    }
    for (const api of ["/api/portal/documents", "/api/portal/legal-documents/doc-hipaa"]) {
      expect((await request.get(api)).status(), api).toBe(401);
    }
    for (const api of ["/api/portal/checkin", "/api/portal/schedule", "/api/portal/profile", "/api/portal/documents"]) {
      expect((await request.post(api, { data: {} })).status(), api).toBe(401);
    }
  });

  test("asking for a link gives the same answer for invited and unknown emails", async ({ request }) => {
    const unknown = await request.post("/api/portal/request-link", { data: { email: "stranger@example.com" } });
    expect(unknown.status()).toBe(200);
    expect(await unknown.json()).toEqual({ ok: true });
    const bad = await request.post("/api/portal/request-link", { data: { email: "not-an-email" } });
    expect(bad.status()).toBe(400);
  });

  test("a link for someone who is not invited does not sign them in", async ({ page }) => {
    const token = await createLinkToken("stranger@example.com", { secret: SECRET });
    await page.goto(`/people-first-login/verify?token=${encodeURIComponent(token)}`);
    await page.getByRole("button", { name: "Continue to People First" }).click();
    await expect(page.getByText("This link can no longer be used")).toBeVisible();
    await page.goto("/people-first-login/home");
    await expect(page).toHaveURL(/\/people-first-login$/);
  });

  test("a sign-in link works once, and sign out ends access", async ({ page, browser }) => {
    const token = await signIn(page);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Welcome to the People First Portal");

    const second = await browser.newContext();
    const other = await second.newPage();
    await other.goto(`/people-first-login/verify?token=${encodeURIComponent(token)}`);
    await other.getByRole("button", { name: "Continue to People First" }).click();
    await expect(other.getByText("This link can no longer be used")).toBeVisible();
    await second.close();

    await page.getByRole("button", { name: "Sign out" }).click();
    await page.waitForURL(/\/people-first-login$/);
    await page.goto("/people-first-login/home");
    await expect(page).toHaveURL(/\/people-first-login$/);
  });
});

test.describe("People First portal: every screen", () => {
  test.beforeEach(async ({ page }) => {
    await signIn(page);
  });

  test("home shows the five choices, the sample label and the check-in", async ({ page }) => {
    await expect(page.getByTestId("sample-banner")).toBeVisible();
    for (const id of ["tile-whats-next", "tile-my-documents", "tile-legal-documents", "tile-videos", "tile-about-you", "tile-about-mike"]) {
      await expect(page.getByTestId(id)).toBeVisible();
    }
    await expect(page.getByTestId("tile-whats-next")).toContainText("1 to sign");
    await expect(page.getByTestId("tile-whats-next")).toContainText("Check-in call with Mike");
    await expect(page.getByRole("link", { name: "Call", exact: true })).toHaveAttribute("href", /schedule\?type=call/);
    await expect(page.getByRole("link", { name: "Meeting", exact: true })).toHaveAttribute("href", /schedule\?type=meeting/);
    await expect(page.getByTestId("tile-about-mike")).toHaveAttribute("href", "/about");
    await shot(page, "01-home");

    await page.getByRole("button", { name: "Hopeful" }).click();
    await page.getByRole("button", { name: "Calm" }).click();
    await page.getByRole("button", { name: "Send my check-in" }).click();
    await expect(page.getByText("Thank you for telling us")).toBeVisible();
    await expect(page.getByText("Your check-in is saved.")).toBeVisible();
  });

  test("a hard check-in tells the firm", async ({ page }) => {
    await page.getByRole("button", { name: "Frustrated" }).click();
    await page.getByLabel("I would like someone to call me").check();
    await page.getByRole("button", { name: "Send my check-in" }).click();
    await expect(page.getByText("We have let the firm know.")).toBeVisible();
  });

  test("What's Next shows dates and what needs a signature", async ({ page }) => {
    await page.getByTestId("tile-whats-next").click();
    await expect(page.getByRole("heading", { level: 1, name: "What's Next?" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Medical Records Authorization" })).toBeVisible();
    await expect(page.getByText("Not signed yet")).toBeVisible();
    await expect(page.getByText("Already signed: Representation Agreement.")).toBeVisible();
    for (const t of ["Check-in call with Mike", "Deposition preparation session", "Your deposition", "Mediation"]) {
      await expect(page.getByRole("heading", { name: t })).toBeVisible();
    }
    await shot(page, "02-whats-next");
    await page.getByRole("link", { name: "Back to People First home" }).click();
    await expect(page).toHaveURL(/\/home$/);
  });

  test("Legal Documents shows signed status and opens a file", async ({ page, request }) => {
    await page.getByTestId("tile-legal-documents").click();
    await expect(page.getByText("Signed", { exact: true })).toHaveCount(1);
    await expect(page.getByText("Not signed yet")).toHaveCount(1);
    await expect(page.getByText("No signature needed")).toHaveCount(2);
    await shot(page, "03-legal-documents");
    const cookies = (await page.context().cookies()).map((c) => `${c.name}=${c.value}`).join("; ");
    const res = await request.get("/api/portal/legal-documents/doc-agreement", { headers: { cookie: cookies } });
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toBe("application/pdf");
    expect((await res.body()).subarray(0, 5).toString()).toBe("%PDF-");
    const missing = await request.get("/api/portal/legal-documents/nope", { headers: { cookie: cookies } });
    expect(missing.status()).toBe(404);
  });

  test("My Documents: add, download, remove, and stay private to the person", async ({ page, browser }) => {
    await page.getByTestId("tile-my-documents").click();
    const name = `hospital-bill-${Date.now()}.pdf`;
    await page.getByTestId("doc-input").setInputFiles({ name, mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4 test") });
    await expect(page.getByText(`"${name}" is saved`)).toBeVisible();
    const row = page.getByTestId("doc-list").locator("li", { hasText: name });
    await expect(row).toBeVisible();
    await shot(page, "04-my-documents");

    const href = await row.getByRole("link", { name: "Download" }).getAttribute("href");
    const res = await page.request.get(href!);
    expect(res.status()).toBe(200);
    expect((await res.body()).toString()).toBe("%PDF-1.4 test");

    // A program file is refused.
    await page.getByTestId("doc-input").setInputFiles({ name: "run.exe", mimeType: "application/x-msdownload", buffer: Buffer.from("MZ") });
    await expect(page.getByText("That file type is not accepted.")).toBeVisible();

    // Someone else, signed in as a different invited person, cannot fetch it.
    const second = setting("PORTAL_INVITE_EMAILS").split(",")[1]?.trim();
    if (second) {
      const ctx = await browser.newContext();
      const other = await ctx.newPage();
      await signIn(other, second);
      expect((await other.request.get(href!)).status()).toBe(404);
      await other.goto("/people-first-login/my-documents");
      await expect(other.getByText(name)).toHaveCount(0);
      await ctx.close();
    }

    page.once("dialog", (d) => d.accept());
    await row.getByRole("button", { name: "Remove" }).click();
    await expect(page.getByText(`"${name}" was removed.`)).toBeVisible();
    expect((await page.request.get(href!)).status()).toBe(404);
  });

  test("Preparation Videos plays the firm's videos", async ({ page }) => {
    await page.getByTestId("tile-videos").click();
    await expect(page.locator('iframe[src*="youtube-nocookie.com/embed/q-_tGOFkYjs"]')).toHaveCount(1);
    const src = await page.locator("video source").getAttribute("src");
    expect((await page.request.fetch(src!, { method: "HEAD" })).status()).toBe(200);
    await shot(page, "05-videos");
  });

  test("Schedule sends a request the firm confirms", async ({ page }) => {
    await page.getByRole("link", { name: "Meeting", exact: true }).click();
    await expect(page.getByRole("button", { name: "A meeting", exact: true })).toHaveAttribute("aria-pressed", "true");
    await page.getByRole("button", { name: "Request a meeting" }).click();
    await expect(page.getByText("Choose at least one day and a time of day.")).toBeVisible();
    await page.getByRole("button", { name: "Tuesday" }).click();
    await page.getByRole("button", { name: "Morning" }).click();
    await shot(page, "06-schedule");
    await page.getByRole("button", { name: "Request a meeting" }).click();
    await expect(page.getByText("Your request is with the firm")).toBeVisible();
  });

  test("Tell Us About You saves and is remembered", async ({ page }) => {
    await page.getByTestId("tile-about-you").click();
    const phone = `816-555-${String(Date.now()).slice(-4)}`;
    await page.getByLabel("Best phone number").fill(phone);
    await page.getByRole("button", { name: "Text" }).click();
    await shot(page, "07-about-you");
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.getByText("Saved. We have passed this along to the firm.")).toBeVisible();
    await page.reload();
    await expect(page.getByLabel("Best phone number")).toHaveValue(phone);
    await expect(page.getByRole("button", { name: "Text" })).toHaveAttribute("aria-pressed", "true");
  });

  test("no screen scrolls sideways on a phone", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const path of ["home", "whats-next", "my-documents", "legal-documents", "videos", "schedule", "about-you"]) {
      await page.goto(`/people-first-login/${path}`);
      await noSidewaysScroll(page);
      await shot(page, `phone-${path}`);
    }
  });
});

test("sign-in screen", async ({ page }) => {
  await page.goto("/people-first-login");
  await expect(page.getByLabel("Your email address")).toBeVisible();
  await page.getByLabel("Your email address").fill("stranger@example.com");
  await page.getByRole("button", { name: "Email me a sign-in link" }).click();
  await expect(page.getByText("Check your email")).toBeVisible();
  await shot(page, "00-sign-in");
});
