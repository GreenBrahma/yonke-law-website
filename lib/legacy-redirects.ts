/**
 * Legacy migration paths with an existing, relevant replacement page.
 *
 * The 2025 redirect spreadsheet pointed the old domain at /practice-areas and
 * /previous-site URLs. The current site uses /what-we-handle. Keep both earlier
 * path shapes working, including when the old domain preserves its path.
 *
 * Only explicit, content-matched paths belong here. Do not add a wildcard or
 * send missing videos / unmatched topics to the homepage: those need a content
 * decision, not a redirect that masks a missing page.
 */
export const LEGACY_REDIRECT_GROUPS = [
  ["/medical-malpractice", "/practice-areas/medical-malpractice", "medical-malpractice"],
  ["/premises-liability", "/practice-areas/premises-liability", "premises-liability"],
  ["/motor-vehicle-accidents/truck-accidents", "/practice-areas/truck-accidents", "truck-accidents"],
  ["/wrongful-death", "/practice-areas/wrongful-death", "wrongful-death"],
  // The replacement explicitly covers dangerous drugs as product liability.
  ["/dangerous-drugs", "/practice-areas/dangerous-drugs", "product-liability"],
  ["/work-related-injuries", "/practice-areas/work-related-injuries", "workplace-injuries"],
  ["/work-related-injuries/construction-accidents", "/practice-areas/construction-accidents", "construction-injury"],
  ["/work-related-injuries/workers-compensation", "/practice-areas/workers-compensation", "workplace-injuries"],
  ["/motor-vehicle-accidents/car-accidents", "/previous-site/car-accidents", "car-accidents"],
  // Both driving subtopics are covered on the current car-accidents page.
  ["/motor-vehicle-accidents/distracted-driver-accidents", "/previous-site/distracted-driver-accidents", "car-accidents"],
  ["/motor-vehicle-accidents/drunk-driving-accidents", "/previous-site/drunk-driving-accidents", "car-accidents"],
  ["/motor-vehicle-accidents/motorcycle-accidents", "/previous-site/motorcycle-accidents", "motorcycle-accidents"],
  ["/motor-vehicle-accidents/pedestrian-accidents", "/previous-site/pedestrian-accidents", "pedestrian-bicycle"],
  ["/work-related-injuries/third-party-claims", "/previous-site/third-party-claims", "workplace-injuries"],
  ["/medical-malpractice/birth-injuries", "/previous-site/birth-injuries", "birth-injury"],
  ["/medical-malpractice/surgical-errors", "/previous-site/surgical-errors", "surgical-error"],
  ["/premises-liability/inadequate-security", "/previous-site/inadequate-security", "premises-liability"],
  ["/premises-liability/slip-and-falls", "/previous-site/slip-and-falls", "premises-liability"],
  ["/nursing-home-negligence", "/previous-site/nursing-home-negligence", "nursing-home-abuse"],
] as const;

export const LEGACY_REDIRECTS = LEGACY_REDIRECT_GROUPS.flatMap(
  ([originalPath, intermediatePath, currentSlug]) =>
    [originalPath, intermediatePath].map((source) => ({
      source,
      destination: `/what-we-handle/${currentSlug}`,
      permanent: true,
    }))
);
