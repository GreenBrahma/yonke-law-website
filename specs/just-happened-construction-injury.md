---
title: /just-happened/construction-injury — Page Specification
route: /just-happened/construction-injury
file: just-happened-construction-injury.md
status: Draft for Mike review
pattern_source: just-happened-car-accident.md
parent_pattern: just-happened-workplace-injury.md
last_updated: 2026-05-10
---

# /just-happened/construction-injury

## Purpose

This page exists for the construction worker — or the family member of one — who was injured on a job site, and who has been told (or has assumed) that workers' compensation is the only path forward. On a multi-employer construction site, that is rarely the whole picture.

It is one of the destinations the homepage concierge can route to when the classifier detects a construction-related event in the "What happened?" input. It is also the natural specialization branch from `/just-happened/workplace-injury` for readers who were injured at a construction site specifically.

## Audience

The person on this page is, in most cases:

- A trades worker recently injured on an active construction site — residential, commercial, infrastructure, or industrial
- A spouse, parent, or adult child of a worker hospitalized after a serious injury or killed on the job
- A union steward or business agent helping a member figure out next steps
- Reading on a phone — sometimes within hours of the injury, sometimes after a few weeks of frustration with the comp process

They are not adversarial readers. They are often suspicious of the system, of the GC, of the carrier, and sometimes of attorneys. Many work in tight professional networks where being known as a worker who sued can carry real consequences. The page respects that and does not pretend it is not real.

## What this page does

This page makes one structural insight clear and then helps the reader act on it: on a construction site, fault rarely belongs to one company alone. The worker's own employer is typically not the right defendant — but several other companies on that site may be.

It explains, in plain language:

1. What to do right now — both for the comp claim and to preserve a third-party claim
2. Why a construction case has more moving parts than other workplace cases — the multi-employer doctrine, OSHA's role, and the statutory-employer wrinkle in Missouri and Kansas
3. What the general contractor and its insurers are doing in parallel
4. What evidence disappears — and how fast a job site changes
5. When to bring in an attorney
6. How Yonke Law approaches a construction case, including the multi-defendant fight it usually becomes

It does not promise that a third-party claim exists. It does not give legal advice. The "this is not legal advice" line is woven into the content, not buried at the bottom.

## Voice and tone

Direct. Plainspoken. Calm. Authoritative. The canonical Yonke Law line lives in section 7: *"We've seen this before, and we know what to do."*

The voice on this page respects the trades. It does not romanticize construction work, and it does not lecture. It assumes the reader knows what a job site looks like, what a hard hat is for, and what a punch list means. It does not over-explain. It also does not pretend the worker doesn't have other concerns — about retaliation, about future work, about being labeled. The page handles those concerns by being practical, not reassuring.

Person-first language throughout: "the worker who was injured," "your spouse," "your son or daughter," "the trade who was working nearby." Never "the victim," "the plaintiff," or "the client" on this page.

---

## Page architecture

The page is structured for two readers at once: a worker or family member reading on a phone in a tight window of time, and an LLM crawler indexing the content for retrieval. Every section heading doubles as a question or a moment.

### 1. Hero

**Visual:** A single, restrained photograph. A long view of an active or recently completed construction site at off-hours — a high-rise skeleton at dusk, a quiet job trailer area, a wide site fence with a project sign in the distance. No injured workers. No safety violations staged for the camera. No hard hats on the ground. Steel silver and chrome accents permitted; muted gold for selective emphasis only. Confirm asset from Drive folder `1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI`.

**Headline:** *More than one company was on that site. More than one may be responsible.*

**Subhead:** *Construction sites change daily. Workers move on. Equipment gets repaired or hauled away. Here is what to do in the first 48 hours, before the scene is gone.*

**No CTA in the hero.** The hero earns the next scroll, not the click.

### 2. What to do right now

A short, ordered list. Each item is one sentence, then one supporting sentence in plain language.

1. **Report the injury to your employer in writing — and keep a copy.** Workers' comp notice deadlines still apply, the same as on any workplace injury. *(MIKE: confirm MO § 287.420 — 30 days; KS K.S.A. 44-520 — 10/20-day framework.)* A short written report on the same day protects the comp claim.
2. **Get medical care, and note exactly where on the site it happened.** Floor, area, what trade was working nearby, what equipment was in use, weather, lighting. A construction site does not retain its layout the way a factory does — the location itself is evidence and the location itself disappears.
3. **Photograph everything you can.** The scene. The equipment. The PPE you were wearing — hard hat, harness, lanyard, boots, gloves, vest. Damage to PPE often tells a clearer story than any narrative. Have a coworker do it if you cannot.
4. **Get the name of every company on site that day, the general contractor, and the project address.** Other trades on site are often the most useful witnesses — they were paying attention to their own work and may have seen yours. Names, phone numbers, employers, and what they saw.
5. **Do not give a recorded statement to the GC's safety team, any subcontractor's insurer, or your employer's comp carrier beyond the basic notice.** Do not sign settlement documents from any side without legal review. The pressure to do both will be early and friendly.

### 3. Why a construction injury case is different

Three short paragraphs.

A construction site has more moving parts than a typical workplace because more companies are on it. On any given day a single site can host the property owner, the general contractor, half a dozen subcontractors across different trades, equipment lessors, material suppliers, and site security. Each one is a separate employer with separate insurance and separate obligations. Many of them have safety responsibilities — under federal law, under the GC's site safety plan, or under the contracts they signed to be on the project. When something goes wrong, more than one of them may have contributed to it.

The injured worker's own employer is typically not the company the case is brought against. Workers' compensation is still the exclusive remedy against the direct employer in most situations. The personal injury case — when there is one — is usually against another company on the site: the GC who controlled overall safety, a sub from another trade whose work created the hazard, an equipment lessor whose machine failed, or a property owner who allowed an unsafe condition to persist. *(MIKE: confirm statutory-employer doctrine — MO § 287.040 and KS K.S.A. 44-503 / 44-501e — and when the GC receives comp-immunity treatment versus when the third-party case can proceed.)* The statutory-employer question is jurisdiction-specific and fact-specific, and is the first issue an attorney evaluates on a construction case.

OSHA also plays a particular role on construction sites. Serious injuries trigger reportable events, and an inspection may follow. The resulting file — photographs, employee interviews, citation history — becomes part of the public record after the investigation closes. OSHA findings do not decide a civil case. They do, however, document what a federal agency observed, and they are often the most reliable contemporaneous record of what happened on the site that day.

### 4. What the GC and its insurers are doing right now

Two short paragraphs.

Within hours of a serious injury on a construction site, multiple insurers move at once. The GC's commercial general liability carrier opens a file. If the project is covered by a contractor-controlled or owner-controlled insurance program — a "wrap-up" policy known as an OCIP or CCIP — that program's administrator also responds. Each subcontractor that may have been involved notifies its own insurer. Several adjusters may attempt contact with the injured worker, often before the worker has left the hospital.

On the site itself, the GC's safety team typically conducts an internal incident review within the first day. Photos are taken. Statements are gathered from other workers — sometimes by supervisors with their own pressures. The scene is cleaned or fixed. Equipment is repaired or removed. Daily logs and safety records are filed away. The site moves on, often within the same shift. None of this is improper. It is, however, coordinated. The worker has, again, memory and whatever they happened to photograph.

### 5. Evidence that disappears — and how fast

A short list. Each item is one phrase, then one supporting sentence.

- **The scene.** Construction sites change daily by design. Within 24 to 48 hours the location of the injury may be unrecognizable — scaffolding moved, holes covered, equipment relocated, materials placed. The scene as it was at the moment of injury exists only in photographs taken that day.
- **PPE.** Hard hats, harnesses, lanyards, boots, gloves. Damage to PPE often tells a more complete story than any photograph. Do not let it be discarded, washed, or replaced.
- **The equipment involved.** Whether owned by the employer, rented from a third party, or operated by another contractor on site. Maintenance and inspection records belong to whoever holds the equipment, and the equipment itself may be sent off site for repair within days.
- **The GC's site safety plan and toolbox-talk logs.** Required documents that often establish what was supposed to be done that day. Their absence is sometimes more telling than their content.
- **Subcontractor agreements and certificates of insurance.** The contracts allocate responsibility among the companies on site and identify which insurers are on the risk.
- **Daily logs.** GCs and many subs keep daily logs of work performed, personnel present, weather, deliveries, and incidents. These are filed away quickly.
- **OSHA records.** If an inspection follows, the resulting file — photographs, employee interviews, citations — becomes available after the investigation closes. Knowing it exists and watching the process matters.
- **Witness identity.** Other trades on site move to other projects, sometimes other states, within weeks. The window to identify and reach them is narrow.

A preservation letter — addressed to the GC, each involved sub, the property owner, and any equipment lessor — protects records and physical evidence in the window when they can still be saved.

### 6. When to bring in an attorney

Plain, direct prose.

Sooner than in almost any other workplace case. The construction scene exists in its injured-condition for hours, not weeks. The companies that may be responsible are coordinated and moving. The OSHA process — if there will be one — begins immediately and unfolds without input from the worker unless someone is paying attention. The first 48 hours shape what the case can look like a year from now.

If the worker is hospitalized, a spouse, parent, or adult child can make these calls. The window does not pause while someone recovers. A conversation does not commit anyone to anything. What it does is start the preservation work before things can be lost.

### 7. How Yonke Law approaches a construction case

Two paragraphs.

We start by mapping the site. Who was the general contractor. Which subs were on site that day. Who owned and who operated the equipment. What the project address, contract chain, and insurance structure looked like. Within the first day, we send preservation letters to every party we can identify, and we put each insurer on notice that evidence is to be retained. We watch the OSHA process when an inspection follows — the records produced there often matter to the civil case in ways the agency itself does not intend.

We also tell people honestly when a third-party case cannot be brought. Many construction injuries are tragic but legally limited to workers' compensation, particularly when statutory-employer doctrine applies. When that is the picture, we say so. When a third-party case does exist — and on construction sites, there often is one — we build it for the multi-defendant fight it is going to be. *We've seen this before, and we know what to do.*

### 8. What to do next

Two paths, side by side. No fake urgency.

- **Left card — "Talk to Mike."** A free, no-commitment conversation. Routes to `/resources/offer-review/`. Subhead: *Fifteen minutes. No paperwork. Just answers.*
- **Right card — "Submit what you have."** Routes to the intake flow on the portal. Subhead: *Incident report, site photos, project address, comp paperwork. Send what you have, and we'll review it before we talk.*

### 9. Related reading

Internal links only. Three to five items. Each is one line.

- *Workers' comp and third-party claims: the foundation* (cross-link to `/just-happened/workplace-injury`)
- *OSHA's multi-employer worksite doctrine and what it means for civil cases* (route TBD)
- *Statutory employer in Missouri and Kansas: when the GC has comp immunity* (route TBD)
- *Construction's "Fatal Four": falls, struck-by, caught-in/between, electrocution* (route TBD)
- *Wrap-up policies (OCIP and CCIP) and what they mean for an injured worker* (route TBD)

### 10. The disclaimer, woven in

The disclaimer does not live in a footer in 10pt grey type. It lives in the content. Sample sentences placed throughout the page:

- "This page is not legal advice."
- "Every construction case is different. Whether a third-party claim exists depends on facts and contracts we cannot see from a webpage."
- "Reading this page does not create an attorney-client relationship."

These read as part of the voice, not a legal notice.

---

## Structured data (JSON-LD)

Two schema blocks required on this page.

### A. LegalService

Standard `LegalService` schema. `areaServed` set to Missouri and Kansas. `serviceType` = "Construction Site Injury and Multi-Employer Liability Representation". `provider` linked to the Yonke Law `LegalService` entity defined site-wide.

### B. FAQPage

The page renders the following Q&A pairs as both visible content (drawn from sections 2–7) and as `FAQPage` structured data for LLM and search retrieval.

1. Who can I sue if I was injured on a construction site?
2. Why isn't my own employer the company I sue for a construction injury?
3. Is the general contractor responsible if a subcontractor's work caused the hazard?
4. What is OSHA's role after a construction injury?
5. What is a multi-employer worksite?
6. What is a statutory employer, and why does it matter?
7. How do I preserve evidence on a construction site that changes every day?
8. How long do I have to file a construction injury lawsuit in Missouri?
9. How long do I have to file a construction injury lawsuit in Kansas?
10. What is a wrap-up policy (OCIP/CCIP) and how does it affect my claim?

Each answer is 1–3 sentences, drawn from the corresponding page section. Answers are written so that an LLM quoting any one of them returns content that is accurate, neutral, and identifiably Yonke Law's voice.

---

## Page metadata

| Field | Value |
|---|---|
| `<title>` | Injured on a Construction Site? More Than One Company May Be Responsible. \| Yonke Law |
| Meta description | On a construction site, more than one company is usually responsible for safety — and the scene changes by the hour. Here is what to do in the first 48 hours and how Yonke Law builds a multi-defendant construction case. Kansas City construction injury attorney. |
| Open Graph image | Restrained construction-site photograph (same as hero) |
| Canonical | https://yonke.law/just-happened/construction-injury |

---

## Statutes and facts that need Mike's confirmation

Flag each item visually in the build until Mike signs off.

- Missouri workers' compensation notice period — 30 days under § 287.420 (consistent with workplace-injury page).
- Kansas workers' compensation notice period — 10/20-day framework under K.S.A. 44-520 (consistent with workplace-injury page).
- Missouri statutory employer doctrine — § 287.040. Confirm current case-law treatment, especially in construction-context cases where the GC requires subs to carry comp.
- Kansas statutory employer doctrine — K.S.A. 44-503 / 44-501e. Confirm current case-law treatment.
- Missouri personal injury statute of limitations — 5 years under § 516.120 (consistent with other `/just-happened/` pages).
- Kansas personal injury statute of limitations — 2 years under K.S.A. 60-513(a)(4) (consistent with other `/just-happened/` pages).
- OSHA injury reporting timelines — confirm 8-hour reporting for fatalities, 24-hour reporting for in-patient hospitalization, amputation, and loss of an eye, under 29 CFR 1904.39.
- OSHA multi-employer worksite policy — CPL 2-0.124. Confirm current version.
- OSHA construction industry standards — 29 CFR Part 1926. Confirm general citation framework.
- Bar-advertising compliance review on the entire page, especially section 7.

---

## Visual and technical notes

**Imagery:** One hero photograph. No additional photography on this page. Restrained, real, quiet. No stock. No injured workers. No staged hazards. No "powerful man in hard hat" imagery.

**Typography:** Display serif (Libre Baskerville or Playfair Display) for the hero headline and section titles. Inter for body and UI. Statute and CFR references in Inter mono if available.

**Layout:** Single column on mobile. Two columns on desktop where the "What to do right now" list and "Why a construction injury case is different" section sit side by side from breakpoint `lg` upward.

**Color:** Background `--obsidian-graphite #1C1C1E`. Body copy on near-white. Section dividers in steel silver. The two CTAs in section 8 use a muted-gold accent on hover only — no gold fills.

**Performance:** Full SSR (Next.js App Router server component). No client-side data fetching. AEO indexability is the value driver.

---

## Out of scope for this page

- No live chat widget.
- No "do I have a case" quiz or injury-severity calculator.
- No testimonials block — testimonials live on dedicated pages, not on `/just-happened/*` scenarios.
- No firm-history sidebar.
- No author byline or "written by" attribution at this stage.
- No imagery of injured workers, blood, ambulances, or emergency response.

---

## Open items

- Verify the ten `(MIKE: confirm …)` flags above before publish — particularly the statutory-employer doctrines, which are jurisdiction-sensitive, fact-sensitive, and case-law-driven.
- Confirm hero image selection from the Drive folder.
- Decide whether the page should be available in Spanish given Hispanic/Latino representation in the trades. If yes, a `/es/just-happened/construction-injury` parallel is the right approach and a translation workstream needs to be scoped.
- Decide whether crane accidents warrant a separate `/just-happened/crane-accident` page given their unique evidence profile (rigging records, operator certification, OSHA Subpart CC), or whether crane cases are folded into this page.
- Decide whether scaffolding falls and trench collapse cases get their own pages — both are high-fatality categories with specific OSHA frameworks.
- Confirm whether "Related reading" links should be live now (with placeholder routes) or hidden until those pages exist.
- Confirm cross-link from `/just-happened/workplace-injury` Related Reading section back to this page.
