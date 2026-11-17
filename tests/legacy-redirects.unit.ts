import assert from "node:assert/strict";
import { test } from "node:test";
import nextConfig from "../next.config";
import { LEGACY_REDIRECT_GROUPS, LEGACY_REDIRECTS } from "../lib/legacy-redirects";
import { PRACTICE_AREAS } from "../app/what-we-handle/practiceAreaData";
import { PRACTICE_AREAS_2 } from "../app/what-we-handle/practiceAreaData2";
import { PRACTICE_AREAS_3 } from "../app/what-we-handle/practiceAreaData3";
import { PRACTICE_AREAS_4 } from "../app/what-we-handle/practiceAreaData4";
import auditMappings from "./fixtures/legacy-redirects.json";

test("all 19 content-matched spreadsheet rows retain both historical path shapes", async () => {
  const redirects = await nextConfig.redirects!();
  assert.equal(LEGACY_REDIRECT_GROUPS.length, 19);
  assert.equal(LEGACY_REDIRECTS.length, 38);
  for (const expected of LEGACY_REDIRECTS) {
    const actual = redirects.find(({ source }) => source === expected.source);
    assert.ok(actual, `Missing redirect: ${expected.source}`);
    assert.equal(actual.destination, expected.destination);
    assert.ok("permanent" in actual && actual.permanent);
  }
});

test("the redirect table agrees with the independently audited spreadsheet paths", async () => {
  const redirects = await nextConfig.redirects!();
  assert.equal(auditMappings.length, 19);
  for (const { originalPath, intermediatePath, destination } of auditMappings) {
    for (const source of [originalPath, intermediatePath]) {
      assert.equal(redirects.find((rule) => rule.source === source)?.destination, destination, source);
    }
  }
});

test("legacy destinations are real canonical practice routes with no extra hop", async () => {
  const slugs = new Set(
    [...PRACTICE_AREAS, ...PRACTICE_AREAS_2, ...PRACTICE_AREAS_3, ...PRACTICE_AREAS_4]
      .map(({ slug }) => slug)
  );
  const redirects = await nextConfig.redirects!();
  const sources = new Set(redirects.map(({ source }) => source));
  assert.equal(sources.size, redirects.length, "Duplicate redirect sources");
  for (const { source, destination } of LEGACY_REDIRECTS) {
    assert.ok(slugs.has(destination.replace("/what-we-handle/", "")), destination);
    assert.ok(!destination.endsWith("/"), "Use the canonical no-trailing-slash destination");
    assert.ok(!sources.has(destination), `Redirect chain from ${source}`);
    assert.notEqual(source, destination);
  }
});

test("unmatched content is not hidden by a blanket or homepage redirect", () => {
  for (const { source, destination } of LEGACY_REDIRECTS) {
    assert.ok(!source.includes(":"), "Only explicit known paths are allowed");
    assert.notEqual(destination, "/");
  }
  for (const path of [
    "/previous-site/railroad-accidents",
    "/previous-site/scooter-accidents",
    "/previous-site/cerebral-palsy",
    "/previous-site/signs-of-cerebral-palsy-at-birth",
    "/previous-site/traumatic-brain-injuries",
    "/video/video-auto-accidents",
  ]) {
    assert.ok(!LEGACY_REDIRECTS.some(({ source }) => source === path), path);
  }
});
