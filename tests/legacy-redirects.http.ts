import assert from "node:assert/strict";
import { test } from "node:test";
import { LEGACY_REDIRECTS } from "../lib/legacy-redirects";

// Start the production build on port 3101 before running npm run test:seo:http.
const base = process.env.SEO_TEST_BASE_URL ?? "http://127.0.0.1:3101";

test("historical URLs permanently redirect to indexable canonical pages and retain query strings", async () => {
  for (const { source, destination } of LEGACY_REDIRECTS) {
    for (const slash of ["", "/"]) {
      let url = new URL(`${source}${slash}?utm_source=redirect-regression`, base);
      const expected = new URL(`${destination}?utm_source=redirect-regression`, base);
      let response: Response | undefined;
      let hops = 0;
      for (; hops < 3; hops++) {
        response = await fetch(url, { redirect: "manual" });
        if (response.status === 200) break;
        assert.equal(response.status, 308, `Non-permanent redirect or error: ${url}`);
        const location = response.headers.get("location");
        assert.ok(location, `Missing Location: ${url}`);
        url = new URL(location, url);
        assert.equal(url.origin, new URL(base).origin, "Unexpected external redirect");
      }
      assert.ok(hops >= 1 && hops <= 2, `Unexpected redirect chain: ${source}${slash}`);
      assert.equal(response?.status, 200, source);
      assert.equal(url.href, expected.href, source);
      const html = await response!.text();
      assert.ok(
        html.includes(`<link rel="canonical" href="https://yonke.law${destination}"`),
        `Missing canonical on ${destination}`
      );
      assert.ok(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html), destination);
    }
  }
});

test("a legacy path without a content-matched replacement remains a real 404", async () => {
  const response = await fetch(new URL("/previous-site/railroad-accidents", base));
  assert.equal(response.status, 404);
});
