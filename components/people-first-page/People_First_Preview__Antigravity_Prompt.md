# Antigravity Prompt v3 — Build the People First Preview + Mood Monitor Demo

**Owner:** Geoff Pickering → for Yonke Law L.L.C.
**Target site:** `yonkelawwebsite.netlify.app` (the public marketing site — Next.js, deployed via Netlify)
**Target route:** `/how-it-works/people-portal`
**Date:** March 2026
**Scope:** Front-end only. No backend, no auth, no API calls. All demo data is local and in-memory.

> **Naming convention:** This product is called **People First**. Every human-readable label, headline, body line, button, comment, and component name uses "People First." The legacy term "People Portal" is retired.
>
> **Route slug note for Geoff:** The existing placeholder route is `/how-it-works/people-portal`. The build keeps that URL so Antigravity can target the existing file with no routing changes. As a clean follow-up, the slug should likely be renamed to `/how-it-works/people-first` with a redirect from the old URL. That is a separate, small task — flagged so it does not get forgotten. If you want it bundled into this build, change the route reference in Section 2 and add a redirect to Section 8.

---

## 0. Read this first — non-negotiable rules

These are firm-level rules. They override default Antigravity assumptions:

1. **Language:** Use "person" and "people" everywhere. **Never** use "client" or "clients" in copy or UI labels. Code variables may use `person` / `people` (not `client`).
2. **Product name:** The product is **People First**. Use "People First" with no article ("People First," not "the People First") unless the sentence requires it ("inside People First" reads better than "inside the People First"). Never use "People Portal" — that name is retired.
3. **Firm name on screen:** Always render as **Yonke Law**. **Never** show "YONK-ee" or any phonetic spelling — phonetics are audio-only.
4. **No gavels, scales-of-justice, or sketch art.** Photographic imagery only.
5. **Litigation-forward positioning:** Mike Yonke prepares every personal injury case for trial. Copy and visuals must reflect that. Avoid soft "we'll handle it for you" language.
6. **Transparency is the product.** Every panel must visibly demonstrate that the person can see files, meetings, messages, attorney activity, and their own well-being trend in real time.
7. **Before/after confirmation discipline:** Before any file is changed or created, Antigravity echoes back the file path and proposed diff. After execution, Antigravity runs the project's existing type-check and lint commands and reports any new errors.

---

## 1. What we are building

A public, scroll-based explainer + interactive demo page that replaces the placeholder at `/how-it-works/people-portal`.

The page does three things at once:
- **Educates** prospective and incoming people on what People First contains, panel by panel.
- **Demonstrates** the experience via an embedded, fully interactive demo using fictional demo data — no login, no backend.
- **States the firm's posture plainly** — Yonke Law prepares every case for trial. People First exists because a person going through that fight deserves to see the machine working on their behalf.

This is a marketing-site page. It is the public preview of People First. Anyone who scans it should think: *I want this attorney because I want this level of access.*

---

## 2. Placement, route, and stack

- **Site:** `yonkelawwebsite.netlify.app`
- **Route:** `/how-it-works/people-portal` (see slug note at the top)
- **Stack (verify, do not assume):** Next.js with TypeScript. Antigravity must inspect `package.json` and `next.config.*` to confirm App Router vs. Pages Router and the styling system in use (Tailwind is the likely candidate based on existing site patterns).
- **File to modify:** The existing page file for this route. Antigravity must locate it via search:
  - If App Router: `app/how-it-works/people-portal/page.tsx`
  - If Pages Router: `pages/how-it-works/people-portal.tsx`
- **Existing placeholder content to remove:** the H1 *"Most law firms never ask how you're actually doing."* and the line *"Placeholder — People Portal preview + Mood Monitor demo."* The H1 copy is **kept** but moved to its proper section (see 4.5). The placeholder line is **deleted**.
- **Nav, footer, header:** Do not modify any layout, nav, or footer component. Only the page content changes.

---

## 3. Page structure (top to bottom)

Seven sections, in this order. Each section is its own component under `components/people-first-page/` (or whatever convention the codebase already uses for page-scoped components — Antigravity must check):

1. `HeroSection.tsx`
2. `TheStanceSection.tsx`
3. `WhatYouSeeSection.tsx` (the six-panel overview)
4. `InteractiveDemoSection.tsx` (the sandboxed walkthrough — centerpiece)
5. `MoodMonitorSection.tsx` (the five-state well-being explainer with live preview)
6. `TransparencyPromiseSection.tsx`
7. `GetStartedSection.tsx`

The page file itself imports and stacks them.

---

## 4. Section content (use this copy verbatim)

### 4.1 HeroSection

**Headline:**
> This is what it looks like to be seen.

**Subhead:**
> Most law firms hand you a phone number and a folder. We hand you the whole machine — every file, every meeting, every step we are taking to prepare your case for trial. We call it People First.

**Visual:** A photographic image. If a Mike Yonke portrait is available in the site asset library (check `public/` for existing imagery), use it on the right with copy on the left. If no suitable asset exists, leave a clean two-column layout with copy left and a placeholder `<div>` right, labeled in a code comment: `// TODO: Mike Yonke portrait — photographic only, no illustration`.

**Primary CTA:** `Walk Through It` — smooth-scrolls to `#interactive-demo`.
**Secondary CTA:** `Talk to Us` — links to `/talk-to-us` (existing route).

### 4.2 TheStanceSection

**Section heading:**
> We build every case as if it is going to trial.

**Body paragraph (verbatim):**
> Insurance companies count on the fact that most personal injury attorneys settle. We don't. From the day you sign with Yonke Law, we prepare your file, your evidence, your witnesses, and your timeline as if a jury is going to hear it. That changes what an insurer offers. It changes what you walk away with. And it changes what you should expect from your attorney — which is why we built People First.

**Visual:** Photographic — wide shot of Mike at a conference table or in deposition prep. No gavels. If no asset is available, leave a placeholder comment as in 4.1.

### 4.3 WhatYouSeeSection — the panels overview

A six-card grid. Each card: an icon (use `lucide-react` if the site already has it; otherwise leave a placeholder icon slot — do **not** add a new icon library), a panel name, a one-sentence description, and a one-line "why it matters" caption.

| Panel Name | Description | Why it matters |
|---|---|---|
| **Roadmap to Justice** | A visual tracker of all fourteen stages of your case, from application through resolution. | You always know exactly where you are and what is next. |
| **Documents** | Every file related to your case — yours and ours — with a live status on each one. | Nothing gets lost in an inbox. You see what is received, reviewed, verified, or flagged. |
| **Journal** | A structured log for medical visits, pain levels, missed work, and daily impact. | Your day-to-day becomes evidence. Categorized the way damages are categorized in a claim. |
| **Messages** | A direct line to the Yonke Law team, threaded by case milestone. | No more wondering if your email got through. You see it land and you see it answered. |
| **Calendar & Events** | Depositions, consultations, court dates, and scene walk-throughs — each one with prep notes attached. | You walk into every meeting prepared, not guessing. |
| **Well-Being Check** | A simple way to tell us how you're doing emotionally at every stage. | A personal injury case is not just a legal fight. We watch how you are holding up, and we act on it. |

Grid: 3 columns desktop, 2 columns tablet, 1 column mobile.

### 4.4 InteractiveDemoSection — the centerpiece

**Anchor id:** `interactive-demo`

**Section heading:**
> Walk Through It

**Subhead:**
> This is a sandboxed demo using a fictional person named "Sarah M." Click any panel, advance the case stage, log a mood, open a document. Nothing here is real — but everything works the way People First works.

**Implementation notes:**
- All interactivity is **client-side React state**. No fetch, no API, no localStorage.
- All demo data lives in a single TypeScript file: `components/people-first-page/demo-data.ts`. Antigravity must create it.
- Use the `"use client"` directive if the site is on App Router (required for interactivity).

**Demo person profile:**
- Name: Sarah M.
- Incident: Rear-end collision, I-435 and Holmes, October 12, 2025
- Current stage: Stage 9 of 14 — Case Preparation
- Attorney: Mike Yonke

**Three tabs in a tabbed container:**

**Tab 1: Roadmap to Justice**
- Horizontal stepper with all 14 stages: Application → Attorney Review → Schedule Call → Dashboard → Call Preparation → Consultation → Agreement → Payment → Case Preparation → Depositions → Resolution → Closing → Testimonial → Referral.
- Stages 1–8 styled as complete (filled, checkmark).
- Stage 9 styled as active (pulsing ring).
- Stages 10–14 styled as upcoming (outlined).
- Button below the stepper: `Advance to next stage (demo)` — clicking advances the active stage by one. Disables after Stage 14.
- Reset button: `Reset to Stage 9`.

**Tab 2: Documents**
- A table with four demo documents:
  - "Police Report — Incident 10-12-2025" — **Verified**
  - "ER Discharge Summary — KU Med" — **Verified**
  - "MRI Imaging — Cervical" — **Under Review**
  - "Defendant Insurance Response" — **Flagged for Discussion**
- Each status is a colored pill. Verified = green, Under Review = blue, Flagged for Discussion = amber. Use existing site color tokens if available; otherwise use Tailwind defaults (`bg-green-100 text-green-800`, etc.).
- Clicking a row opens a small modal: *"Inside People First, this opens the file in a secure viewer. Demo only."*

**Tab 3: Messages**
- Three threaded messages, most recent first:
  - From Mike Yonke, 2 days ago: *"Sarah — got the updated MRI from KU Med. Reviewing tonight. Will call you tomorrow with the read."*
  - From Sarah M., 3 days ago: *"Pain has been worse this week. I'm logging it in the journal."*
  - From Mike Yonke, 5 days ago: *"Deposition prep meeting is on the calendar for next Thursday. Prep packet attached to the event."*
- Disabled input box at the bottom with placeholder: *"This is a demo. People First is where real conversations happen."*

**Persistence:** None. Page refresh resets the demo.

### 4.5 MoodMonitorSection — the five-state well-being explainer

**Section heading:**
> How are you actually doing?

**Subhead (the H1 from the existing placeholder, repurposed):**
> Most law firms never ask. We do — at every stage. Because how you are holding up and where your case is going are not separate questions.

**The five states.** Render as five large pill-cards in a single row (desktop) / 2-column wrap (tablet) / stacked (mobile). Each card has a label, a color, an emoji, and a one-line meaning.

| Score | Label | Emoji | Color guidance | Meaning |
|---|---|---|---|---|
| 1 | Angry | 😠 | Red family (e.g. `bg-red-100`, `text-red-700`) | Something is wrong. We need to talk today. |
| 2 | Upset | 😟 | Orange family | You're not okay. Mike will reach out within 24 hours. |
| 3 | Confused | 😕 | Yellow family | You need clarity. We'll send a plain-English update. |
| 4 | Curious | 🤔 | Teal family | You're tracking. Keep the questions coming. |
| 5 | Good | 🙂 | Green family | You're steady. We'll keep you posted. |

> **Note for Antigravity:** The underlying back-end (when it ships) uses a 1–6 Likert scale. This page uses 5 labels for clarity. The data layer in `demo-data.ts` should remain 1–6 compatible — if a 6 ever arrives, it folds into the "Good" bucket on this page. Build the demo data structure with this in mind.

**Below the five cards, render an interactive demo strip:**
- A horizontal line chart showing Sarah M.'s last 10 weeks of well-being scores. Data series: `[4, 4, 5, 4, 3, 2, 2, 3, 4, 4]`.
- Use a charting library already in the site's `package.json`. If none exists, use `recharts` (preferred) and add it as a dependency — but only after confirming with Geoff via a diff message.
- Highlight the dip at week 6 (`4 → 2`) with a visible callout: *"This is the moment Mike got a notification. He called Sarah the same afternoon."*
- A button: `Log a mood (demo)` opens a small picker with the five states. Picking one appends a new point to the chart in component state.

**Closing line below the chart (verbatim):**
> We don't wait for a satisfaction survey at the end. We watch the whole way through.

### 4.6 TransparencyPromiseSection

**Section heading:**
> The Transparency Promise

A two-column list.

**You always have access to:**
- Every document in your case file, with its current status
- Every calendar event Mike has scheduled on your behalf
- Every message thread with the firm
- Every journal entry you have made
- Your full well-being history
- A direct phone number, a direct email, and a one-click meeting request

**You will never have to:**
- Wonder if your email was received
- Call to ask "what is happening with my case"
- Pay for a copy of your own file
- Find out about a court date from somewhere else
- Sit in silence with how you are feeling

### 4.7 GetStartedSection

**Heading:**
> Ready to see your own People First space?

**Body:**
> Tell us what happened. If Yonke Law is the right fit, you will have a People First account before our first call ends.

**CTAs:**
- Primary: `Start the Conversation` → `/talk-to-us` (existing route)
- Secondary: `Call 816-221-6400` → `tel:+18162216400`

---

## 5. Design tokens and styling

- **Reuse the marketing site's existing design system.** Do not introduce a new color palette, new typography, or new component library.
- Match the spacing, type, and color of `/how-it-works`, `/just-happened`, and `/what-we-handle`.
- Section vertical padding minimum `py-16 md:py-24`.
- The page should feel like the rest of the marketing site, not a separate microsite.

---

## 6. Responsive

- Every section renders correctly on a 375px viewport.
- The interactive demo's tab container reflows to stacked panels (no horizontal scrolling tabs) below 640px.
- The Mood Monitor's five cards stack vertically below 768px.

---

## 7. Accessibility

- Every interactive element has a real `aria-label` or visible label.
- Color is never the only signal — every status pill in the Documents demo also has a text label.
- The trendline chart has a text-readable summary for screen readers.
- Tab navigation works without a mouse.
- The page passes a basic Lighthouse accessibility audit with no critical violations.

---

## 8. Out of scope

- No backend, no API, no auth-aware logic
- No analytics, tracking, or third-party scripts beyond what the site already loads
- No modifications to existing components, layouts, nav, footer, or other pages
- No new icon libraries; reuse what is already in the codebase
- No new dependencies except `recharts` if no chart library exists — and only after Geoff confirms
- No route rename (slug stays `/how-it-works/people-portal` for this build — see top-of-document note)

---

## 9. Acceptance criteria

The build is complete when:

1. `/how-it-works/people-portal` loads with all seven sections in order
2. The existing placeholder text is gone; the H1 has been repurposed as described in 4.5
3. The interactive demo's three tabs work, the "advance stage" button advances the stepper, the reset button resets, and the document status modal opens
4. The Mood Monitor chart renders Sarah M.'s data, the dip callout is visible, the "Log a mood (demo)" picker appends to the chart
5. The phrase "People Portal" appears nowhere in the new code or copy
6. The word "client" appears nowhere in the new code or copy
7. No gavel, scales-of-justice, or sketch-art imagery appears anywhere on the page
8. The site's existing build command (`npm run build` or equivalent) completes with zero new errors
9. The page passes a basic Lighthouse accessibility audit
10. Antigravity reports back a file-by-file diff summary and screenshots of desktop + mobile renders

---

## 10. Recommended execution phases

Antigravity may do this in one pass if confident, but staging is preferred:

- **Phase 1:** Locate the existing page file. Verify Next.js router type, styling system, and existing dependencies. Report findings before any edit.
- **Phase 2:** Replace placeholder with Sections 4.1, 4.2, 4.6, 4.7 (static content). Confirm with screenshot.
- **Phase 3:** Build Section 4.3 (panels overview grid). Confirm.
- **Phase 4:** Build Section 4.4 (interactive demo with tabs and demo data file). Confirm.
- **Phase 5:** Build Section 4.5 (Mood Monitor with chart and mood logger). Confirm.
- **Phase 6:** Responsive + accessibility pass. Final build check. Confirm.

After each phase, Antigravity reports: files changed (full paths), a one-paragraph summary, and a screenshot. Geoff approves before the next phase begins.

---

## 11. Final instruction to Antigravity

If anything in this spec conflicts with existing site conventions, **stop and ask before deviating**. The prompt is the source of truth for what the page is. Existing site patterns are the source of truth for how to build within the codebase. When in doubt, ask.

When complete, report:
- Files created (full paths)
- Files modified (full paths + reason)
- Any dependencies added (there should be at most one: `recharts`, only if no chart library is present, only after confirmation)
- Two screenshots: desktop and mobile renders of the page
- Build status (clean / errors)

End of prompt.
