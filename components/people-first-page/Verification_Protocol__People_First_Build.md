# Verification Protocol — People First Build

**Purpose:** Catch every form of Antigravity drift, freelancing, and confident-but-false claims. Pairs with `People_First_Preview__Antigravity_Prompt.md`.

**Philosophy:** Trust nothing Antigravity reports. Verify mechanically where possible, visually where not. AI coding agents fail in three predictable ways — copy drift, scope creep, and acceptance-criteria fraud. Every check below targets one of those.

**How to use:** After each phase Antigravity completes, run the checks for that phase **before** approving the next phase. If any check fails, do not advance — paste the failure back to Antigravity and require a fix.

---

## Universal checks — run after EVERY phase

These run in the terminal at the project root. Copy/paste, hit enter, read output.

### 1. What did it actually change?

```bash
git status
git diff --stat
```

**Pass condition:**
- Only files inside `components/people-first-page/` and the single page file (`app/how-it-works/people-portal/page.tsx` or `pages/how-it-works/people-portal.tsx`) appear.
- `package.json` and `package-lock.json` appear ONLY if a chart library was added with your approval.
- Nothing else. No layout files, no nav files, no footer files, no other pages.

**If any other file appears:** Antigravity exceeded scope. Revert with `git checkout -- <file>` and tell it to stay inside the assigned files.

### 2. Forbidden language scan

```bash
# Should return ZERO hits
grep -rin "People Portal" components/people-first-page/ app/ pages/ 2>/dev/null

# Should return ZERO hits (word boundary, case insensitive)
grep -rwin "client\|clients" components/people-first-page/ 2>/dev/null

# Should return ZERO hits — phonetic spelling never on screen
grep -rin "YONK-ee\|YONK ee\|yonkee" components/people-first-page/ 2>/dev/null

# Should return ZERO hits — forbidden imagery
grep -rin "gavel\|scales of justice\|scales-of-justice" components/people-first-page/ 2>/dev/null
```

**Pass condition:** Every command returns nothing. Any hit = drift. Find the line and require Antigravity to fix.

### 3. Stub / placeholder / mock fraud check

```bash
grep -rin "TODO\|FIXME\|mock\|stub\|dummy\|lorem ipsum\|coming soon" components/people-first-page/ 2>/dev/null
```

**Pass condition:** The only acceptable hits are the two `// TODO: Mike Yonke portrait` comments explicitly allowed by the prompt (Sections 4.1 and 4.2). Anything else = freelancing.

### 4. Dependency drift

```bash
git diff package.json
```

**Pass condition:** At most one new dependency added, and only if it's `recharts`, and only if you approved it. Anything else (Material UI, Chakra, Headless UI, Framer Motion, etc.) = unauthorized. Require removal.

### 5. Build actually compiles

Do not accept Antigravity's word that it builds. Run it yourself.

```bash
npm run build
```

**Pass condition:** Exits cleanly. No new TypeScript errors. No new lint errors.

---

## Phase 1 verification — Reconnaissance only

**What Antigravity should report:**
- The exact file path for the existing page
- Router type (App Router or Pages Router)
- Styling system (Tailwind? something else?)
- Existing icon library (`lucide-react`? `react-icons`? none?)
- Whether a chart library is already installed

**Verify it:**

```bash
# Confirm zero file edits — git status should be clean
git status

# Spot-check Antigravity's findings yourself
find app pages -path "*how-it-works/people-portal*" 2>/dev/null
cat package.json | grep -E "lucide|recharts|chart|tailwind|next"
```

**Red flags at Phase 1:**
- `git status` shows ANY modified file. It was told reconnaissance only.
- Its reported file path doesn't match what `find` returns.
- It claims a library is installed that doesn't appear in `package.json`.

**Approval rule:** Only advance to Phase 2 when Antigravity's findings match what you see in the terminal with your own eyes.

---

## Phase 2 verification — Static sections (Hero, Stance, Transparency Promise, Get Started)

### Component existence check

```bash
ls components/people-first-page/
```

**Pass condition (after Phase 2):** At minimum `HeroSection.tsx`, `TheStanceSection.tsx`, `TransparencyPromiseSection.tsx`, `GetStartedSection.tsx` exist. The other three (`WhatYouSeeSection.tsx`, `InteractiveDemoSection.tsx`, `MoodMonitorSection.tsx`) may or may not exist yet — that's later phases.

### Verbatim copy spot-check

Open the rendered page in browser. View Source (Cmd+U / Ctrl+U). Search the source for these exact strings. Each must appear character-for-character:

- `This is what it looks like to be seen.`
- `We call it People First.`
- `We build every case as if it is going to trial.`
- `Insurance companies count on the fact that most personal injury attorneys settle.`
- `which is why we built People First.`
- `The Transparency Promise`
- `Pay for a copy of your own file`
- `Sit in silence with how you are feeling`
- `Ready to see your own People First space?`
- `you will have a People First account before our first call ends.`

**If any of these are missing or reworded:** copy drift. Paste the missing line back to Antigravity and require an exact restore.

### CTA wiring check

In the rendered HTML, the secondary CTA on the hero must link to `/talk-to-us`. The phone CTA must be `tel:+18162216400`. Right-click each button and inspect the href.

---

## Phase 3 verification — Panels overview grid

### Six cards, exact text

The grid must contain six cards. View Source and confirm all six panel names appear:

- `Roadmap to Justice`
- `Documents`
- `Journal`
- `Messages`
- `Calendar & Events`
- `Well-Being Check`

**Each card must have both** a description sentence and a "why it matters" caption. Spot-check three at random against the prompt table (Section 4.3). Any rewording = drift.

### Responsive check

Open browser dev tools. Switch to mobile view (375px). The grid should reflow to 1 column. At 768px (tablet) it should be 2 columns. At desktop it should be 3 columns. If columns don't reflow, the grid is broken.

---

## Phase 4 verification — Interactive demo (the centerpiece — most likely to drift)

### Demo data integrity

```bash
# Sarah M.'s exact incident details must appear in the demo data file
grep -E "Sarah M|I-435|Holmes|October 12, 2025|Stage 9" components/people-first-page/demo-data.ts
```

**Pass condition:** All five strings appear. If Sarah was renamed, the date was changed, or the incident location was altered = drift.

### Documents tab — exact four documents

View the Documents tab in the browser. The four rows must read exactly:

1. `Police Report — Incident 10-12-2025` — status `Verified`
2. `ER Discharge Summary — KU Med` — status `Verified`
3. `MRI Imaging — Cervical` — status `Under Review`
4. `Defendant Insurance Response` — status `Flagged for Discussion`

Any other documents = made up. Missing documents = dropped. Wrong status = drift.

### Documents modal — exact wording

Click any document row. The modal must say exactly:

> Inside People First, this opens the file in a secure viewer. Demo only.

Not "in the live portal." Not "this would open." Exact wording.

### Messages tab — exact three messages

View the Messages tab. Three threaded messages, most recent first. Spot-check the most recent one — it must read exactly:

> Sarah — got the updated MRI from KU Med. Reviewing tonight. Will call you tomorrow with the read.

Any rewording = drift. Any extra "helpful" messages Antigravity invented = freelancing.

### Messages input placeholder

The disabled input box at the bottom must have placeholder text:

> This is a demo. People First is where real conversations happen.

### Roadmap stepper — functional check

1. Land on the Roadmap tab. Stage 9 of 14 must be visibly active (pulsing ring or equivalent). Stages 1–8 must be styled as complete. Stages 10–14 must be styled as upcoming.
2. Click `Advance to next stage (demo)` once. Stage 10 should now be active. Click again — Stage 11.
3. Click until Stage 14 is active. The button should disable.
4. Click `Reset to Stage 9`. Stage 9 should be active again.

**Pass condition:** All four behaviors work exactly as described. If clicking the button does nothing, or the stage doesn't visibly change, or the reset doesn't reset — functional drift.

### No persistence test

Refresh the page. Demo should reset to Stage 9 with original mood data. If the page remembers your state, Antigravity added localStorage despite the prompt forbidding it. Search for it:

```bash
grep -rin "localStorage\|sessionStorage" components/people-first-page/ 2>/dev/null
```

Should return zero hits.

---

## Phase 5 verification — Mood Monitor (high drift risk on the chart)

### Five cards, exact labels and emojis

View the Mood Monitor section. Five pill cards in order:

| Position | Label | Emoji |
|---|---|---|
| 1 | Angry | 😠 |
| 2 | Upset | 😟 |
| 3 | Confused | 😕 |
| 4 | Curious | 🤔 |
| 5 | Good | 🙂 |

Any other labels (e.g. "Frustrated" instead of "Angry") or wrong emojis = drift.

### Chart data integrity

```bash
grep -E "\[4,\s*4,\s*5,\s*4,\s*3,\s*2,\s*2,\s*3,\s*4,\s*4\]" components/people-first-page/demo-data.ts
```

**Pass condition:** The exact array `[4, 4, 5, 4, 3, 2, 2, 3, 4, 4]` appears in the demo data file. Any other series = made-up data.

### Dip callout visible

The dip at week 6 (4 → 2) must be visibly highlighted on the chart with a callout reading exactly:

> This is the moment Mike got a notification. He called Sarah the same afternoon.

If the callout is missing, or worded differently, or pointing at the wrong week = drift.

### Mood logger functional check

1. Click `Log a mood (demo)`.
2. A picker with the five states should appear.
3. Click any one (e.g. "Good").
4. A new data point should appear on the chart.

Refresh the page. The added point should disappear (no persistence).

### Closing line check

Below the chart, the closing line must read exactly:

> We don't wait for a satisfaction survey at the end. We watch the whole way through.

---

## Phase 6 verification — Responsive + accessibility + final pass

### Mobile render

Open the page in browser dev tools at 375px viewport. Walk through every section top to bottom.

**Pass condition:**
- Hero stacks (no side-by-side at 375px)
- Six-panel grid is single column
- Interactive demo tabs stack vertically (no horizontal scroll)
- Five mood cards stack vertically
- Two-column transparency list stacks
- Nothing overflows horizontally — no horizontal scrollbar on the page itself

### Accessibility — do not trust Antigravity's "passed Lighthouse" claim

Run Lighthouse yourself:

1. Open the page in Chrome
2. DevTools → Lighthouse tab
3. Select "Accessibility" only, mobile preset
4. Generate report

**Pass condition:** Score is 90+ and there are zero critical violations. If Antigravity claimed it passed but Lighthouse shows violations, that is acceptance-criteria fraud — flag it.

### Keyboard navigation

Tab through the entire page using only the keyboard. Every interactive element (tabs, buttons, table rows, mood picker) must be reachable and operable without a mouse.

### Final acceptance-criteria audit

Walk through Section 9 of the original prompt. For each numbered criterion, do not accept Antigravity's checkmark — verify with your own eyes or terminal:

| Criterion | How you verify |
|---|---|
| Page loads with all seven sections in order | Scroll the page top to bottom |
| Placeholder text is gone | `grep -in "Placeholder" app/how-it-works/people-portal/page.tsx` returns nothing |
| Three demo tabs work | Click each one |
| Mood chart renders + dip callout + log-a-mood | Click and observe |
| "People Portal" appears nowhere | Run grep from Universal Check #2 |
| "client" appears nowhere | Run grep from Universal Check #2 |
| No gavel / scales / sketch art | Visual scan + grep from Universal Check #2 |
| Build clean | Run `npm run build` yourself |
| Lighthouse passes | Run Lighthouse yourself |
| Screenshots reported | Compare against the live URL — do not trust attached images |

---

## What to do when a check fails

1. **Don't argue, don't negotiate.** Paste the failing check + your terminal output back to Antigravity. Require it to fix and re-report.
2. **Don't accept "I'll fix it next phase."** Every check is a phase gate. Failed checks block phase advancement.
3. **Don't accept rewording as a fix.** If verbatim copy was changed, the only acceptable fix is exact restoration. Not a "better version."
4. **If Antigravity claims something is "intentionally different" or "improved":** That is the definition of drift. Require it to revert.

---

## The final question

After Phase 6 passes every check above, ask yourself one question: **Could I hand this page to Mike right now and have him click through it confidently?**

If yes, ship it. If you hesitate, find what's bothering you and fix that one thing before shipping. Trust your gut here — the checklist catches mechanical drift, but you catch taste-level drift.

End of protocol.
