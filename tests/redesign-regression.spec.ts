/* Regression pins for the Nov 2026 redesign.
   Each block pins something that was deliberately changed or fixed, so a
   later edit that undoes it fails here instead of on the live site.

   Run:  npx playwright test tests/redesign-regression.spec.ts
   The contact-form test intercepts /api/send-mail and /api/lead-docket, so
   it never emails the firm or creates a Lead Docket record. */

import { test, expect, type Page } from "@playwright/test";

const PHONE_TEL = "tel:+18162216400";

const NAV = [
  ["Just Happened To Me", "/just-happened"],
  ["What We Handle", "/what-we-handle"],
  ["Resources", "/resources"],
  ["Contact Us", "/talk-to-us"],
  ["People First", "/people-first"],
  ["Meet Mike", "/about"],
] as const;

const SMOKE_ROUTES = [
  "/",
  "/just-happened",
  "/what-we-handle",
  "/resources",
  "/talk-to-us",
  "/people-first",
  "/about",
  "/about/testimonials",
  "/about/recognition",
  "/how-to-prepare-for-a-deposition",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
  // Unlinked on purpose, but must still load for anyone holding the address
  "/promotion",
  "/spotlight-corner",
];

const SITUATIONS = [
  "car-accident", "truck-accident", "motorcycle-accident", "pedestrian-accident",
  "bicycle-accident", "rideshare-accident", "defective-vehicle",
  "medical-malpractice", "surgical-error", "diagnostic-error", "medication-error",
  "birth-injury", "traumatic-brain-injury", "slip-and-fall", "dog-bite",
  "product-recall", "workplace-injury", "construction-injury", "wrongful-death",
  "nursing-home-abuse", "sexual-abuse", "active-shooter", "family-perspective",
];

test.use({ viewport: { width: 1280, height: 900 } });

async function open(page: Page, path: string) {
  const res = await page.goto(path, { waitUntil: "domcontentloaded" });
  expect(res?.status(), `${path} status`).toBeLessThan(400);
}

test.describe("smoke: every page loads with the universal nav", () => {
  for (const path of SMOKE_ROUTES) {
    test(path, async ({ page }) => {
      await open(page, path);
      await expect(page.locator("header nav")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
    });
  }
});

test.describe("pin: universal navigation", () => {
  test("six items in order, logo is Home, phone is the only header CTA", async ({ page }) => {
    await open(page, "/what-we-handle");
    const links = page.locator("header nav ul").first().locator("a");
    await expect(links).toHaveCount(NAV.length);
    for (let i = 0; i < NAV.length; i++) {
      await expect(links.nth(i)).toContainText(NAV[i][0]);
      await expect(links.nth(i)).toHaveAttribute("href", NAV[i][1]);
    }
    await expect(page.locator("header nav a").first()).toHaveAttribute("href", "/");

    const header = page.locator("header");
    await expect(header.getByText("Send Us a Message")).toHaveCount(0);
    await expect(header.getByText("Talk to Us", { exact: true })).toHaveCount(0);
    const phone = header.locator(`a[href="${PHONE_TEL}"]`).first();
    await expect(phone).toContainText("816-221-6400");
    await expect(phone).toContainText("Click to Call");
  });

  test("Promotion, Spotlight Corner and the login page are not linked from header or footer", async ({ page }) => {
    await open(page, "/");
    for (const href of ["/promotion", "/spotlight-corner", "/people-first-login"]) {
      await expect(page.locator(`header a[href="${href}"], footer a[href="${href}"]`)).toHaveCount(0);
    }
  });

  test("mobile: menu opens with all six items and the phone stays visible", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 });
    await open(page, "/");
    await expect(page.locator(`header a[href="${PHONE_TEL}"]`).first()).toBeVisible();
    await page.getByRole("button", { name: "Open menu" }).click();
    for (const [label] of NAV) {
      await expect(page.locator("#mobile-nav").getByText(label, { exact: true })).toBeVisible();
    }
  });

  test("every nav destination loads", async ({ page }) => {
    for (const [, href] of NAV) await open(page, href);
  });
});

test.describe("pin: slim footer", () => {
  test("no link columns; address, phone, disclaimer, Best Lawyers badges and legal links remain", async ({ page }) => {
    await open(page, "/about");
    const footer = page.locator("footer");
    await expect(footer.locator("h3")).toHaveCount(0);
    await expect(footer.getByText("700W 47th St Suite 550")).toBeVisible();
    await expect(footer.locator(`a[href="${PHONE_TEL}"]`)).toBeVisible();
    await expect(footer.locator('a[href*="google.com/maps"]')).toBeVisible();
    await expect(footer.getByText("attorney-client relationship").first()).toBeVisible();
    // Best Lawyers badges are a contractual requirement
    await expect(footer.locator('a[href*="bestlawyers.com"]')).toHaveCount(2);
    for (const href of ["/privacy-policy", "/terms-and-conditions", "/disclaimer"]) {
      await expect(footer.locator(`a[href="${href}"]`)).toBeVisible();
    }
    await expect(footer.locator('a[href="#"]')).toHaveCount(0);
  });
});

test.describe("pin: Meet Mike carries I Stand For", () => {
  test("statement is on /about and the old address redirects there", async ({ page, request }) => {
    await open(page, "/about");
    const section = page.locator("#i-stand-for");
    await expect(section.getByText("Relentless.").first()).toBeVisible();
    await expect(section.getByText("I chose these three words")).toBeVisible();

    const res = await request.get("/about/i-stand-for", { maxRedirects: 0 });
    expect(res.status()).toBe(308);
    expect(res.headers()["location"]).toBe("/about#i-stand-for");
  });
});

test.describe("pin: help bot stays hidden", () => {
  for (const path of ["/", "/talk-to-us", "/just-happened"]) {
    test(path, async ({ page }) => {
      await open(page, path);
      await expect(page.getByText("HELP REPRESENTATIVE")).toHaveCount(0);
      await expect(page.locator('[aria-label*="chat" i]')).toHaveCount(0);
    });
  }
});

test.describe("pin: Just Happened visual view", () => {
  test("one H1, 23 image cards, every image loads", async ({ page }) => {
    await open(page, "/just-happened");
    await expect(page.locator("h1")).toHaveCount(1);
    const cards = page.locator("#situations li a");
    await expect(cards).toHaveCount(SITUATIONS.length);
    for (const slug of SITUATIONS) {
      const card = page.locator(`#situations a[href="/just-happened/${slug}"]`);
      await expect(card).toHaveCount(1);
      const img = card.locator("img");
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(async () => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0), {
          message: `${slug} image loads`,
        })
        .toBe(true);
      expect(await img.getAttribute("alt")).toBeTruthy();
    }
  });

  test("every situation page loads", async ({ request }) => {
    for (const slug of SITUATIONS) {
      const res = await request.get(`/just-happened/${slug}`);
      expect(res.status(), slug).toBe(200);
    }
  });

  test('"Describe it in your own words" stays on the page and reaches the form', async ({ page }) => {
    await open(page, "/just-happened");
    await expect(page.getByRole("link", { name: /Describe it in your own words/ })).toHaveAttribute(
      "href",
      "#consultation"
    );
    await expect(page.locator("#consultation form")).toHaveCount(1);
  });
});

test.describe("pin: People First page", () => {
  test("self-hosted video and poster exist; no dead YouTube players", async ({ page, request }) => {
    await open(page, "/people-first");
    const video = page.locator("video").first();
    await expect(video).toBeVisible();
    const src = await video.locator("source").getAttribute("src");
    const poster = await video.getAttribute("poster");
    expect(src).toBe("/media/people-first/people-first-portal.mp4");
    for (const url of [src!, poster!]) {
      const res = await request.fetch(url, { method: "HEAD" });
      expect(res.status(), url).toBe(200);
    }
    const html = await page.content();
    expect(html).not.toContain("sLcrjRp8qPc");
    expect(html).not.toContain("om6L1RHfKic");
  });

  test("portal sign-in is reachable from the People First page", async ({ page }) => {
    await open(page, "/people-first");
    const signIn = page.getByRole("link", { name: "Sign in to People First" });
    await expect(signIn).toHaveAttribute("href", "/people-first-login");
    await open(page, "/people-first-login");
  });
});

test.describe("E2E: contact form fires both handoffs", () => {
  test("Contact Us form sends the email and the Lead Docket record", async ({ page }) => {
    const calls: Record<string, unknown> = {};
    await page.route("**/api/send-mail", async (route) => {
      calls.mail = route.request().postDataJSON();
      await route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' });
    });
    await page.route("**/api/lead-docket", async (route) => {
      calls.lead = route.request().postDataJSON();
      await route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' });
    });

    await open(page, "/talk-to-us");
    const form = page.locator("form").filter({ has: page.locator('[name="case_type"]') }).first();
    await form.locator('[name="first_name"]').fill("Test");
    await form.locator('[name="last_name"]').fill("Regression");
    await form.locator('[name="phone"]').fill("8165550100");
    await form.locator('[name="email"]').fill("test@example.com");
    await form.locator('[name="case_type"]').selectOption({ index: 1 });
    await form.locator('[name="message"]').fill("Automated regression test. Not a real inquiry.");
    await form.locator('button[type="submit"]').click();

    await expect.poll(() => Boolean(calls.mail), { message: "email handoff fired" }).toBe(true);
    await expect.poll(() => Boolean(calls.lead), { message: "Lead Docket handoff fired" }).toBe(true);
    const mail = calls.mail as { to: string[]; subject: string };
    expect(mail.to).toContain("mike@yonke.law");
    expect(mail.subject).toContain("Test Regression");
    expect(JSON.stringify(calls.lead)).toContain("Regression");
  });
});

test.describe("E2E: links and calls to action resolve", () => {
  for (const path of ["/", "/just-happened", "/what-we-handle", "/resources", "/talk-to-us", "/people-first", "/about"]) {
    test(`internal links on ${path}`, async ({ page, request }) => {
      await open(page, path);
      const hrefs = await page.locator("a[href]").evaluateAll((as) =>
        Array.from(new Set(as.map((a) => a.getAttribute("href") || "")))
      );
      for (const tel of hrefs.filter((h) => h.startsWith("tel:"))) {
        expect(tel, "phone links use the firm number").toBe(PHONE_TEL);
      }
      const internal = hrefs.filter((h) => h.startsWith("/") && !h.startsWith("//"));
      const bad: string[] = [];
      for (const href of internal) {
        const res = await request.get(href.split("#")[0] || "/");
        if (res.status() >= 400) bad.push(`${href} -> ${res.status()}`);
      }
      expect(bad, `broken links on ${path}`).toEqual([]);
      expect(hrefs.filter((h) => h === "#"), `dead "#" links on ${path}`).toEqual([]);
    });
  }
});

test.describe("pin: no sideways scrolling on phones", () => {
  for (const path of ["/", "/just-happened", "/what-we-handle", "/resources", "/talk-to-us", "/people-first", "/about"]) {
    test(path, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 900 });
      await open(page, path);
      await page.waitForLoadState("load");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(overflow, `${path} horizontal overflow in px`).toBeLessThanOrEqual(0);
    });
  }
});
