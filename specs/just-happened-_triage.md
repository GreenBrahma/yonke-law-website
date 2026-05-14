# Yonke Law `/just-happened/*` — Triage

**File path:** `just-happened-_triage.md`
**Purpose:** Maps every case type from the schultzmyers/source list into a disposition. Tier 1 status, Tier 2 build queue, Tier 3 reference content, or out-of-scope. Includes Tier 1 parent assignment and sensitivity tier for everything that needs to be produced.
**Source list:** Practical attorney-facing PI case-type list pasted into the conversation, organized in 11 categories.
**Pattern doc:** `just-happened-_template.md`
**Last updated:** 2026-05-10

---

## Overview

The source list contains roughly 70 case types across 11 categories. The triage below sorts them as follows:

- **Tier 1 done:** 15 hero pages already spec'd
- **Tier 2 build queue:** 22 pages worth producing as template-driven pattern pages
- **Tier 3 reference:** 8 categories that belong as supporting reference content rather than scenario pages
- **Mike's call / out of scope:** 5 categories that may not belong on this site at all

Tier 2 production runs at roughly 2–3 pages per working session using the master template. Total Tier 2 work is roughly 8–10 sessions.

---

## A. Tier 1 — Done (15 pages)

| Page | Sensitivity | Status |
|---|---|---|
| car-accident | Standard | Done (template-setter) |
| truck-accident | Standard | Done |
| motorcycle-accident | Standard | Done |
| slip-and-fall | Standard | Done |
| workplace-injury | Standard | Done |
| construction-injury | Standard | Done |
| product-recall | Standard | Done |
| dog-bite | Moderate | Done |
| medical-malpractice | Moderate | Done |
| nursing-home-abuse | Moderate | Done |
| birth-injury | Moderate | Done |
| traumatic-brain-injury | Moderate | Done (result overlay) |
| wrongful-death | Moderate | Done (result overlay) |
| active-shooter | High | Done |
| sexual-abuse | High | Done |

---

## B. Tier 2 — Build queue (22 pages)

Each Tier 2 page inherits structure from its Tier 1 parent and changes only what the master template Section K identifies: Section 2 procedural steps, Section 3 defendant-behavior framing, Section 4 FAQ, Section 5 MO/KS rules where the variation introduces specific legal differences, cross-links, and hero copy.

### Motor vehicle variations

| Page | Parent | Sensitivity | What's distinctive |
|---|---|---|---|
| bicycle-accident | car-accident | Standard | Cyclist visibility/bias parallels motorcycle bias; helmet laws differ; cyclist often deemed at-fault by default at scene |
| pedestrian-accident | car-accident | Standard | Crosswalk vs. mid-block distinction; comparative fault often weaponized; severe injury rate is high |
| rideshare-accident | car-accident | Standard | Commercial coverage tiers (period 0/1/2/3); Uber/Lyft $1M policies; driver-as-contractor questions |
| bus-transit-accident | car-accident + truck-accident | Standard | Sovereign immunity for public transit; commercial-carrier rules; common-carrier higher duty |
| boating-accident | car-accident | Standard | MO/KS state waters jurisdiction; alcohol rates higher; rental vs. owned vessel; PFD/safety equipment rules |
| atv-offroad-accident | car-accident | Standard | Insurance gaps common; recreational-use waivers; rider-passenger dynamics; manufacturer defects frequent |
| taxi-accident | rideshare-accident | Standard | Folded into rideshare for AEO; if separately built, sits as low-volume variant |

### Premises variations

| Page | Parent | Sensitivity | What's distinctive |
|---|---|---|---|
| pool-drowning | slip-and-fall | Moderate | Attractive nuisance doctrine; fence/gate requirements; lifeguard standards; child victims disproportionate |
| elevator-escalator-injury | slip-and-fall + product-recall | Standard | Maintenance vendor liability; building owner duty; product-defect overlay frequent |
| falls-from-heights | slip-and-fall + construction-injury | Standard | OSHA standards for fall protection; balcony/railing code; window-fall and toddler scenarios |
| negligent-security | active-shooter | Moderate-to-High | Covers apartment crime, parking-lot assaults, hotel and retail violence that isn't mass-shooting; foreseeability central |

### Workplace/industrial variations

| Page | Parent | Sensitivity | What's distinctive |
|---|---|---|---|
| machinery-accident | workplace-injury + construction-injury | Standard | Lockout/tagout; missing guards; product-defect overlay; amputation outcomes frequent |
| asbestos-mesothelioma | product-recall | Moderate | Mass tort heavy; long latency periods; statute-of-repose complexity; trust-fund recoveries |
| industrial-explosion-fire | workplace-injury + construction-injury | Standard | OSHA, EPA, ATF investigations frequent; refinery, chemical, agricultural settings |
| toxic-exposure | product-recall | Moderate | Single-event and long-term; chemical spills, groundwater, air pollution |

### Medical variations

| Page | Parent | Sensitivity | What's distinctive |
|---|---|---|---|
| surgical-error | medical-malpractice | Moderate | Wrong-site, retained-instrument, anesthesia-event; operative reports central |
| medication-error | medical-malpractice | Moderate | Pharmacy, hospital, nursing home contexts; MAR review; contraindication checks |
| diagnostic-error | medical-malpractice | Moderate | Failure-to-diagnose, delayed diagnosis (cancer, cardiac, stroke); discovery rule prominent |
| hospital-negligence | medical-malpractice + nursing-home-abuse | Moderate | Falls in hospital, hospital-acquired infections, pressure sores in hospitalized patients |

### Product liability variations

| Page | Parent | Sensitivity | What's distinctive |
|---|---|---|---|
| defective-vehicle | product-recall + car-accident | Standard | Airbags, brakes, tires, EDR/black box; NHTSA recall overlay |
| defective-medical-device | product-recall | Moderate | Implants, mesh, IVC filters, CPAP, hip/knee; FDA reporting; MDL routes |
| dangerous-pharmaceutical | product-recall | Moderate | Adverse event reporting, FDA, label warnings; MDL routes |

### Recreational variations

| Page | Parent | Sensitivity | What's distinctive |
|---|---|---|---|
| amusement-park-accident | slip-and-fall + product-recall | Standard | Ride mechanics, operator training; state amusement-device regulation varies widely |
| sports-recreational-injury | slip-and-fall | Standard | Waivers and assumption-of-risk doctrine; gym/fitness center cases; sports concussion overlap with TBI |
| sports-concussion | traumatic-brain-injury | Moderate | Return-to-play protocols; baseline testing; coach/school liability; high-school football cases |

### Result-category overlays (parallel to TBI / wrongful death)

| Page | Parent | Sensitivity | What's distinctive |
|---|---|---|---|
| spinal-cord-injury | traumatic-brain-injury | Moderate | Same result-overlay logic; quadriplegia/paraplegia; life care planning central |
| amputation | traumatic-brain-injury | Moderate | Same result-overlay logic; prosthetics, phantom limb, vocational impact |
| severe-burn-injury | traumatic-brain-injury | Moderate | Same result-overlay logic; long-term reconstruction; psychological impact |

---

## C. Tier 3 — Reference content (not `/just-happened/*` pages)

These belong as supporting content on `/resources/*` pages or as sub-sections within `/what-we-handle/*` practice-area pages. They are damage categories or sub-features, not scenarios — a reader does not have "soft tissue injury" happen to them, they have a car crash that produces soft tissue injury.

| Category | Recommended placement |
|---|---|
| Fractures and orthopedic injuries | `/resources/injuries/fractures-and-orthopedic/` |
| Soft-tissue injuries | `/resources/injuries/soft-tissue/` |
| Internal organ damage | `/resources/injuries/internal-organ/` |
| Disfigurement and scarring | `/resources/injuries/scarring-and-disfigurement/` |
| Chronic pain syndromes | `/resources/injuries/chronic-pain/` |
| Emotional distress / PTSD | `/resources/injuries/ptsd-and-emotional-injury/` |
| Vision/hearing loss | `/resources/injuries/sensory-loss/` |
| Survival actions | Folded into `/just-happened/wrongful-death/` |
| Trip-and-fall (as separate from slip-and-fall) | Folded into `/just-happened/slip-and-fall/` |
| Inadequate lighting / defective sidewalks | Folded into `/just-happened/slip-and-fall/` |
| Chiropractic negligence | Folded into `/just-happened/medical-malpractice/` |

These reference pages can follow a much simpler structure — AEO-optimized, ~800 words, focused on what the injury is, how it's documented, how it affects damages, and a link back to the cause-scenario pages. They are a separate workstream from the `/just-happened/*` pattern and don't need the full 11-section treatment.

---

## D. Mike's call / out of scope

| Category | Question for Mike |
|---|---|
| Aviation/airplane accidents | Specialty practice with FAA preemption, NTSB involvement, and high case complexity. Most PI firms refer these out. Skip on the site, or include a brief "we refer aviation cases to [partner firm]" placement? |
| Defamation, libel, slander, invasion of privacy | These are torts but typically handled by a different tort bar. Does Yonke Law take them? If yes, they need their own URL family — `/just-happened/*` does not fit. Recommendation: skip from `/just-happened/*`. If Yonke Law takes them, build a separate `/just-said/*` or `/communications-harm/*` collection. |
| Domestic violence civil claims | Highly sensitive. Belongs in a High-sensitivity Tier 2 page if Yonke Law takes these. Often overlaps with sexual-abuse framework. Mike's call on whether to build separately. Recommendation: build a separate `/just-happened/domestic-violence/` page at High sensitivity if Mike has the case volume; otherwise fold the framework into sexual-abuse content. |
| False imprisonment / unlawful restraint | Low volume. Usually arises in narrow contexts (retail security, false arrest by police, etc.). Mike's call on whether to build. Recommendation: skip from initial Tier 2; revisit if volume warrants. |
| Assault and battery (as general category) | Often handled within the active-shooter / negligent-security framework or as a workplace third-party case. Standalone `/just-happened/assault/` page may overlap too much with existing content. Recommendation: skip standalone; surface the framework through related pages. |

---

## E. Recommended Tier 2 build sequence

Build priority is driven by three things, in order:

1. **Mike's actual case mix.** Mike's firm sees more car-adjacent and medical cases than recreational. Pages should support what comes in the door.
2. **AEO search volume.** "Rideshare accident attorney" and "pedestrian accident" are heavily searched. Niche scenarios like "ATV accident" have lower search volume but less competition.
3. **Pattern testing.** Build a couple of different parent-page variations early to stress-test the template before doing the long tail.

### Wave 1 — Foundation (4 pages, 2 sessions)

Build these first. They are the highest-volume Tier 2 pages and they stress-test the template against two different parent pages.

1. `bicycle-accident` (parent: car-accident)
2. `pedestrian-accident` (parent: car-accident)
3. `rideshare-accident` (parent: car-accident)
4. `defective-vehicle` (parent: product-recall + car-accident)

After Wave 1, pause and check: does the car-accident page need any updates to reflect what emerged from the variants? Are there cross-link gaps?

### Wave 2 — Medical variations (4 pages, 2 sessions)

5. `surgical-error` (parent: medical-malpractice)
6. `diagnostic-error` (parent: medical-malpractice)
7. `medication-error` (parent: medical-malpractice)
8. `hospital-negligence` (parent: medical-malpractice + nursing-home-abuse)

These are all Moderate-sensitivity inheriting from medical-malpractice. Stress-test the Moderate-sensitivity calibrations.

### Wave 3 — Premises and recreational (4 pages, 2 sessions)

9. `pool-drowning` (parent: slip-and-fall) — Moderate sensitivity
10. `elevator-escalator-injury` (parent: slip-and-fall + product-recall)
11. `amusement-park-accident` (parent: slip-and-fall + product-recall)
12. `sports-recreational-injury` (parent: slip-and-fall)

### Wave 4 — Industrial variations (4 pages, 2 sessions)

13. `machinery-accident` (parent: workplace-injury + construction-injury)
14. `industrial-explosion-fire` (parent: workplace-injury + construction-injury)
15. `asbestos-mesothelioma` (parent: product-recall)
16. `toxic-exposure` (parent: product-recall)

### Wave 5 — Product liability sub-pages (3 pages, 1–2 sessions)

17. `defective-medical-device` (parent: product-recall)
18. `dangerous-pharmaceutical` (parent: product-recall)
19. `negligent-security` (parent: active-shooter) — Moderate-to-High sensitivity

### Wave 6 — Result-category overlays (3 pages, 1–2 sessions)

20. `spinal-cord-injury` (parent: traumatic-brain-injury)
21. `amputation` (parent: traumatic-brain-injury)
22. `severe-burn-injury` (parent: traumatic-brain-injury)

### Wave 7 — Niche variations (4 pages, 2 sessions) — optional

23. `bus-transit-accident` (parent: car-accident + truck-accident)
24. `boating-accident` (parent: car-accident)
25. `atv-offroad-accident` (parent: car-accident)
26. `sports-concussion` (parent: traumatic-brain-injury)
27. `falls-from-heights` (parent: slip-and-fall + construction-injury)

Wave 7 is optional and should be built only if Mike's case volume justifies the AEO investment. These are lower-volume scenarios.

---

## F. Workstream estimate

| Wave | Pages | Sessions | Cumulative |
|---|---|---|---|
| 1 — Foundation | 4 | 2 | 4 pages |
| 2 — Medical | 4 | 2 | 8 pages |
| 3 — Premises/rec | 4 | 2 | 12 pages |
| 4 — Industrial | 4 | 2 | 16 pages |
| 5 — Product/security | 3 | 1–2 | 19 pages |
| 6 — Result overlays | 3 | 1–2 | 22 pages |
| 7 — Niche (optional) | 5 | 2 | 27 pages |

**Total realistic Tier 2 work:** 22 pages in 10–12 working sessions, or 27 pages with Wave 7 in 12–14 sessions.

**Tier 3 reference content:** Separate workstream, not blocked by Tier 2. Roughly 8 short pages at a different cadence (~30 minutes per page rather than full sessions).

---

## G. Open decisions for Mike before Tier 2 production starts

Three calls Mike should make before the first Wave 1 session:

1. **Aviation, defamation, domestic violence, false imprisonment, assault** — confirm which of these (if any) belong on the site. Default recommendation per Section D above is skip for all five from the `/just-happened/*` collection.
2. **Wave order** — confirm the Wave 1–7 sequence reflects Mike's case mix priorities. If Wave 4 (industrial) or Wave 6 (result overlays) should come earlier because of current case volume, reorder.
3. **Sports concussion sub-page** — confirm whether this gets built as a Tier 2 (Wave 7) or whether it sits as a sub-section within the TBI page. The high-school football and second-impact-syndrome cases are searchable and high-emotion; a dedicated page is defensible but not required.

---

## H. Cross-linking maintenance

After each Wave, the Tier 1 parent pages need cross-link updates in their Section 9 cards. Pattern:

- After Wave 1, the car-accident page's "Related guidance" should surface bicycle, pedestrian, and rideshare cards
- After Wave 2, the medical-malpractice page should surface surgical-error, diagnostic-error, medication-error
- After each subsequent Wave, similar updates

This is a small maintenance task per Wave but it matters for AEO and reader navigation. Recommendation: add this as the last step in each Wave's session, with explicit verification.

---

*End of triage.*
