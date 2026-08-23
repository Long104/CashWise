---
# START FILE CONTENT (write everything between the fences)
---
# Senzen Landing v2.1 — Real-Product Rewrite (cream bones kept)

> **Scope:** Spec only, no build. Worktree `feat/landing-real` (branch `feat/landing-real`). Keeps the APPROVED v2 cream landing's bones — palette `#EEEEEE` / `#E5E5E5` / `#0A0A0A`, section order, fonts, button styles, hero 100vh flex layout. Replaces fiction with the REAL app (see `specs/app-truth.md`). Touch ONLY `frontend/src/components/example/*` + `frontend/src/app/(landingPage)/layout.tsx` metadata. No new deps. One OS-window card (warmwind.com craft) showing the real app — plain React state + Tailwind + existing shadcn/ui, tabs OK.

## 0. Ground truth (read first)

- `specs/app-truth.md` — honest capability verdict, real feature map, actual vocabulary/data shapes, 41 offender strings with file:line, 3 positioning candidates.
- Real pages to mirror: `frontend/src/app/(product)/home/page.tsx` (plan cards grid, `initial_budget` / `duration` / `auto_save` · `on track` / `behind`, progress `$1,200 / $1,500`), `frontend/src/app/(product)/plan/[...planId]/page.tsx` (daily ledger: category chips, `Groceries/Transport/Eating out`, transaction rows with dates/amounts, `Expense Summary` + `Recent Expenses` tabs `All/Today/This Week`), `frontend/src/app/(product)/viewPlan/page.tsx` (balance/income/expenses cards + progress bars), `frontend/src/types` (`Plan`, `Budget`, `Category`, `Transaction`).
- Current landing components: `frontend/src/components/example/spotlight-demo.tsx`, `automation-demo.tsx`, `ai-plan-demo.tsx`, `highlights-band.tsx` (or `weekly-clarity.tsx` if present), `faq-section.tsx`, `navbar.tsx`, `footer.tsx`, plus `frontend/src/app/(landingPage)/page.tsx` (section order) and `layout.tsx` (metadata).

---

## 1. `spotlight-demo.tsx` — Hero (`HeroComposer`)

### Keep (do not touch)
- Outer `<section>`: `min-h-svh lg:h-screen flex flex-col justify-between`, cream `#EEEEEE`, `border-b border-[#E5E5E5]`, grid overlay, 100vh flex layout.
- Typography: `Meet` (3xl→6xl) + `Senzen` display (4.5rem→10rem, `tracking-tighter`, green dotted slab behind), `h-[2px] w-24 bg-[#0A0A0A]` rule, fonts/weights/letter-spacing.
- CTA: pill `Get started` → `/sign-up`, `bg-black text-white rounded-full px-8 py-3.5`, `ArrowRight` hover `translate-x-0.5`, focus ring.

### Replace — labels & ticker strip (top bar)
**Delete entirely** the mono ticker row:
```tsx
// DELETE: the whole flex row
<div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-[#555555]">
  <div className="h-2 w-2 rounded-full bg-[#1EC072]" /> [SYS_STATUS: ACTIVE]
  LATENCY: 14MS  PIPELINE: PAYDAY_AUTOMATION_V2  EXECUTION_MODE: INSTANT_ROUTING
</div>
```
Replace with a single honest eyebrow — ONE small-caps line, left-aligned, no brackets, no `//`:
```tsx
<p className="font-mono text-xs uppercase tracking-widest text-[#555555]">
  Plans · Budgets · Daily ledger
</p>
```
Also delete the hero eyebrow `[01 // CASHFLOW_ENGINE]` (line 27). No replacement — the top-bar eyebrow is the only eyebrow in the hero. (Eyebrow restraint: max 1 per 3 sections.)

### Replace — headline sub-copy (truthful tagline)
**Pick candidate 1** (refined — shorter, warmer):
```tsx
<p className="mt-6 text-lg md:text-xl leading-relaxed text-[#333333] max-w-xl">
  Plan your money. Track every day. See yourself get ahead.
</p>
```
Alternatives (if CEO prefers shorter): candidate 3 `Your budget, led day by day.` — do not use candidate 2 here; reserve for elsewhere if needed. No `engine/backtest/execute/routing` language.

**Old → New:**
| Old (delete) | New |
|---|---|
| `Build automated money rules with logic, backtest your budget, then execute—all in one place.` | `Plan your money. Track every day. See yourself get ahead.` |

### Replace — bottom stats strip (product-honest, no invented metrics)
Keep the 3-col grid + `divide-x divide-[#E5E5E5]` + cream `bg-[#EEEEEE]/80 backdrop-blur-sm border-t`. Replace all three cells:

| Cell | Old (delete) | New |
|---|---|---|
| 1 | `$12.8M+` / `Managed cashflow` / `+34% MoM` | `3 steps` / `Plan → Budget → Ledger` / `No spreadsheets` |
| 2 | `45,210` / `Rules executed` / `0.00ms ERR` | `Every expense` / `Categorized daily` / `Groceries · Transport · Eating out` |
| 3 | `100.0%` / `Deterministic logic` / `NO AI GUESSWORK` | `$1,200 / $1,500` / `Progress you can see` / `· on track` (with green dot) |

Visual spec for cell 3's value: `font-mono text-3xl md:text-4xl font-extrabold tabular-nums` stays; add a tiny `h-2 w-2 rounded-full bg-[#1EC072]` dot before `· on track` subline to echo the real `LedgerRow` surplus dot. No dollar totals beyond the illustrative `$1,200 / $1,500` progress example (clearly a sample plan, not a claim).

### Hero side-panel (if present in current HEAD) → miniature plan-progress card
If the hero currently renders a right-side demo card/panel, replace its content with a **single miniature plan card** that mirrors `home/page.tsx`'s real card (do not add a second card — one window total on the page lives in `automation-demo.tsx`; this is a small static preview, not a second OS window):

```tsx
<div className="hidden lg:block w-[360px] shrink-0 rounded-xl border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
  <div className="flex items-start justify-between">
    <div>
      <p className="font-sans text-base font-semibold tracking-tight text-[#0A0A0A]">April Plan</p>
      <p className="font-mono text-xs text-[#555555]">personal · Apr 2026</p>
    </div>
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1EC072]/30 bg-[#EBF9F1] px-2.5 py-1 font-mono text-xs font-medium text-[#049F55]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#1EC072]" /> on track
    </span>
  </div>
  <div className="mt-4 space-y-2">
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-[#666666]">Budget</span>
      <span className="font-mono text-sm tabular-nums text-[#0A0A0A]">$1,500</span>
    </div>
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-[#666666]">Saved so far</span>
      <span className="font-mono text-sm tabular-nums text-[#0A0A0A]">$1,200 / $1,500</span>
    </div>
    <div className="h-1.5 w-full rounded-full bg-[#E5E5E5] overflow-hidden">
      <div className="h-full w-[80%] rounded-full bg-[#1EC072]" />
    </div>
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-[#666666]">Auto-save</span>
      <span className="inline-flex items-center gap-1.5 font-mono text-sm text-[#0A0A0A]"><span className="h-1.5 w-1.5 rounded-full bg-[#1EC072]" /> Enabled</span>
    </div>
  </div>
</div>
```
Mobile: hide this miniature card (`hidden lg:block`) — hero stays single-column on mobile, no horizontal scroll.

---

## 2. `automation-demo.tsx` — THE OS window (warmwind.com-caliber, ONE card)

### Delete entirely
Remove ALL fake engine content — the entire `senzen-engine://production-rules-v1.4` window chrome, `LISTENER: ACTIVE [PORT 8080]`, `TOTAL INFLOW / ALLOCATED / EXECUTION TIME` strip, 4-row rule ledger (`ACH_CREDIT // EMPLOYER_PAYROLL`, `RULE // RESERVE_SWEEP`, `DISCRETIONARY_LOCK`, `INDEX_PORTFOLIO_DCA`, `SPLIT 15%`, `S&P 500 DCA`, `EXECUTED (00:01:0x)`), and the `> [AUDIT_OK] … VERIFIED BY LEDGER HASH #8F29A` footer. Also delete the `[AUTONOMOUS_LEDGER_SURFACE]` eyebrow and the `Every payday, routed deterministically…` heading + `No chat assistants… state machines…` sub-copy.

### New section header (truthful)
```tsx
<div className="flex flex-col items-center text-center mb-10">
  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#555555] mb-3">
    Your money, led day by day
  </p>
  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] max-w-2xl">
    Plans you keep. Progress you can see.
  </h2>
  <p className="text-base md:text-lg text-[#333333] max-w-2xl mt-4 leading-relaxed">
    Create a plan, set budgets by category, log expenses daily — and watch your progress stay on track.
  </p>
</div>
```

### New: ONE warmwind-OS-style window (the only demo card on the page)
Recreates the REAL app's two core surfaces behind tabs — **Plans** (default) and **Daily ledger** — using plain React `useState` for tab switching. Zero new deps. Warmwind craft cues: warm paper window, soft border, traffic-light dots, restrained mono, generous whitespace, no neon, no brackets.

**Outer window:**
```tsx
"use client";
import React, { useState } from "react";

export function AutomationDemo() {
  const [tab, setTab] = useState<"plans" | "ledger">("plans");
  // ...
  return (
    <section className="w-full bg-[#EEEEII] py-20 md:py-28 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* header above */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl border border-[#E5E2DD] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* titlebar */}
          <div className="h-11 bg-[#F9F8F6] border-b border-[#E5E2DD] px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8E4DE] border border-[#E5E2DD]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E5E2DD]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#DCD8D3]" />
              <span className="ml-2 font-mono text-xs font-medium tracking-tight text-[#555555]">Senzen — April Plan</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 rounded-full bg-[#F9F8F6] border border-[#E5E2DD] p-1">
              <button onClick={() => setTab("plans")} className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${tab==="plans" ? "bg-[#0A0A0A] text-white" : "text-[#555555] hover:text-[#0A0A0A]"}`}>Plans</button>
              <button onClick={() => setTab("ledger")} className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${tab==="ledger" ? "bg-[#0A0A0A] text-white" : "text-[#555555] hover:text-[#0A0A0A]"}`}>Daily ledger</button>
            </div>
          </div>
          {/* tab content below */}
        </div>
      </div>
    </section>
  );
}
```
- Titlebar: warm `#F9F8F6`, dots `#E8E4DE/#E5E2DD/#DCD8D3` (muted warm, not red/yellow/green), title `Senzen — April Plan` (en-dash, no `://`, no brackets, no `//`).
- Tab switcher: pill segmented control, `Plans` default, `Daily ledger` second. Mobile: same control centered below titlebar if wrapping.

**Tab 1 — Plans (default): 3-col plan cards mirroring `home/page.tsx`**
- Grid `grid-cols-1 md:grid-cols-3 gap-4 p-5 md:p-6 bg-white`.
- Three static cards (hardcoded sample data, clearly illustrative):
  - Card A: `April Plan` · `personal · Apr 2026` · Budget `$1,500` · Saved `$1,200 / $1,500` · progress 80% (`w-[80%] bg-[#1EC072]`) · `on track` badge (green dot) · `Auto-save Enabled`.
  - Card B: `Family Trip` · `family · May 2026` · Budget `$2,000` · Saved `$800 / $2,000` · progress 40% · `on track` (muted dot) · `Auto-save Disabled`.
  - Card C: `Buffer` · `personal · Apr 2026` · Budget `$600` · Saved `$600 / $600` · progress 100% · `on track` · `Auto-save Enabled`.
- Each card: `rounded-xl border border-[#E5E5E5] bg-white p-4`, header `CardTitle` 17px semibold, `CardDescription` mono xs `#555555`, rows via `LedgerRow` pattern (label `text-sm text-[#666666]`, value `font-mono text-sm tabular-nums`), progress track `h-1.5 bg-[#E5E5E5] rounded-full`, fill `bg-[#1EC072]` (or `bg-[#0A0A0A]` for 100%), badge `rounded-full border border-[#1EC072]/30 bg-[#EBF9F1] text-[#049F55]` with dot.
- Bottom hint: `View details →` link style `text-sm font-medium underline underline-offset-4` (non-functional, visual only).

**Tab 2 — Daily ledger: category chips + transaction rows mirroring `plan/[...planId]/page.tsx`**
- Layout: `p-5 md:p-6 bg-white space-y-5`.
- Top: `Expense Summary` row — `Total Expenses $342.50` (`font-mono text-2xl font-semibold tabular-nums`), plus category totals inline: `Groceries $128.40 · Transport $42.00 · Eating out $86.10 · Utilities $86.00` (muted, mono sm).
- Category chips (filter affordance, visual only — no logic needed beyond optional local state):
  `Groceries` `Transport` `Eating out` `Utilities` — each `rounded-full border border-[#E5E5E5] bg-[#F9F8F6] px-3 py-1 font-mono text-xs font-medium text-[#333333]`, active chip `bg-[#0A0A0A] text-white border-[#0A0A0A]`.
- Transaction rows (4 rows, realistic dates/amounts, no invented routing):
  | Category | Date | Description | Amount |
  |---|---|---|---|
  | Groceries | 2026-04-08 | Weekly shop | $64.20 |
  | Transport | 2026-04-09 | Bus pass | $28.00 |
  | Eating out | 2026-04-10 | Lunch | $18.50 |
  | Groceries | 2026-04-11 | Market | $32.10 |
  Each row: `flex items-center justify-between py-3 border-b border-[#E5E5E5] last:border-0`, left `h-8 w-8 rounded-full bg-[#F9F8F6] border border-[#E5E2DD]` + category name `text-sm font-medium`, date `font-mono text-xs text-[#555555]`, right amount `font-mono text-sm font-medium tabular-nums`, description `text-xs text-[#666666]`. No `EXECUTED`, no hashes, no `AUDIT`.

**Window footer (subtle, honest):**
```tsx
<div className="bg-[#F9F8F6] border-t border-[#E5E2DD] px-5 py-3 flex items-center justify-between">
  <span className="font-mono text-xs text-[#555555]">3 plans · 12 transactions · updated today</span>
  <span className="font-mono text-xs text-[#555555]">Auto-save is a per-plan toggle</span>
</div>
```

**Responsive:** Mobile stacks cards single-column, transaction rows keep `flex` but truncate description; no horizontal scroll. Tabs remain accessible via keyboard (`role="tablist"` + `aria-selected`).

---

## 3. `ai-plan-demo.tsx` — reframe auto-save

### Keep
- 2-col grid `md:grid-cols-2`, cream `bg-[#EEEEEE]`, heading `Ask for a plan in plain language` (keep), left copy block, right white card `rounded-xl border border-[#E5E5E5] bg-white p-6 md:p-8`.

### Replace
- **Delete** `RULE · AUTO-SAVE-600` label and the 3-row `IF payday → route… / IF balance > … / ELSE → pause` rule ledger (`planRows` array).
- **Delete** `Senzen builds, runs, and adjusts money rules from one sentence — the same conversation you have in the planner, executed with mono precision.` (fiction: builds/runs/adjusts rules).
- **New left copy:**
  ```tsx
  <p className="mt-6 text-base md:text-lg leading-relaxed text-[#333333] max-w-md">
    Describe what you want to save for — Senzen drafts the plan, budgets, and categories. You stay in control.
  </p>
  ```
- **New right card content** (reframe as per-plan toggle, real feature):
  ```tsx
  <p className="text-lg leading-relaxed text-[#333333] mb-6 max-w-md">
    I want to save $600 over the next 3 months for a trip.
  </p>
  <div className="bg-white rounded-xl border border-[#E5E5E5] p-6 md:p-8 space-y-6 max-w-lg">
    <p className="text-sm leading-relaxed text-[#0A0A0A]">Done. Here's your draft —</p>
    <div className="space-y-4">
      <p className="font-mono text-xs uppercase tracking-wider text-[#555555]">Plan · Family Trip · $2,000 · 3 months</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between py-1.5"><span className="text-sm text-[#666666]">Budget</span><span className="font-mono text-sm tabular-nums text-[#0A0A0A]">$600 saved / $2,000</span></div>
        <div className="h-1.5 w-full rounded-full bg-[#E5E5E5] overflow-hidden"><div className="h-full w-[30%] rounded-full bg-[#1EC072]" /></div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-[#666666]">Auto-save</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-[#F9F8F6] px-3 py-1 font-mono text-xs font-medium text-[#333333]">Off <span className="h-3 w-6 rounded-full bg-[#E5E5E5] relative"><span className="absolute left-0.5 top-0.5 h-2 w-2 rounded-full bg-white shadow" /></span> On</span>
        </div>
        <p className="font-mono text-xs leading-relaxed text-[#555555]">Auto-save is a per-plan toggle. Turn it on if you want Senzen to nudge you — it doesn't move money on its own.</p>
      </div>
    </div>
    <div className="flex items-center gap-3 text-sm text-[#666666]">
      <span className="h-2 w-2 rounded-full bg-[#1EC072]" /> Draft ready · edit budgets & categories before you start
    </div>
  </div>
  ```
- **CTA:** keep `Try the planner →` → `/createPlan`, style unchanged.
- Remove `planRows` constant entirely.

---

## 4. `highlights-band.tsx` / `faq-section.tsx` / `navbar.tsx` / `footer.tsx` — truth rewrites

### `highlights-band.tsx`
Keep grid `md:grid-cols-5`, cream, `MORE FROM SENZEN` eyebrow (this is the one allowed small-caps eyebrow for this band — keep it, but ensure no brackets), numbered `01–04` with green dots, `border-[#E5E5E5]` dividers.

Replace `highlights` array:

| # | Old title (delete) | Old body (delete) | New title | New body |
|---|---|---|---|---|
| 01 | Backtest before you commit | dry-run any rule against your last 90 days. | Plans for real life | Name it, set a budget, pick a duration. |
| 02 | Buffers absorb messy weeks | a rule can't run? it holds, never fails. | Budgets by category | Groceries, Transport, Eating out — your call. |
| 03 | Zero spreadsheets | plain-language rules, mono-precision execution. | Daily ledger | Log expenses as you go. Every entry counts. |
| 04 | Read-only by design | bank links view money, never move it without you. | Progress you can see | $1,200 / $1,500 · on track. Stay motivated. |

No `backtest`, `buffer`, `routing`, `read-only bank link` claims.

### `faq-section.tsx`
Keep `Collapsible` + `Plus` rotate-45 pattern, cream, `Questions, answered` heading.

Replace `faqs` array:

| Old Q (delete) | Old A (delete) | New Q | New A |
|---|---|---|---|
| Is my bank connection safe? | Read-only links, encrypted at rest, Senzen never moves money without a rule you wrote. | Do I need to connect my bank? | No. Senzen is manual by design — you log expenses daily and track progress yourself. |
| Do I need to change banks? | No. Senzen sits beside your accounts and coordinates them. | What is a plan? | A plan is a budget with a duration and categories. Create one, set budgets, then track spending against it. |
| What happens when a rule can't run? | It pauses into your buffer and tells you. Nothing bounces. | What does auto-save do? | It's a per-plan toggle. When on, Senzen nudges you to stay on track — it doesn't move money automatically. |
| How is this different from a budget app? | Budgets track what you did. Senzen decides what happens next. | How is this different from a spreadsheet? | Plans, budgets, categories, and a daily ledger in one place — with progress bars that keep you honest. |

### `navbar.tsx`
Keep layout: black announcement bar (h-10) + cream sticky header with `S` green mark, center nav, right `Login` + pill `Get Started`.

| Location | Old (delete) | New |
|---|---|---|
| Announcement bar | `★ Meet Senzen: Automated financial rules without code` | `★ Meet Senzen: Plan your money. Track every day.` |
| Announcement href | `/#features` | `/#plans` (or `/home` if anchor not present — pick one, keep consistent) |

No `engine/rule/automated` in nav copy.

### `footer.tsx`
Keep dark `#0A0A0A` footer, dotted top rule, 4-col grid, `SENZEN` wordmark.

| Location | Old (delete) | New |
|---|---|---|
| Tagline (under SENZEN) | `Automated money rules, executed weekly. Financial planning, built better.` | `Plans, budgets, and a daily ledger — progress you can see.` |

Optional: add a tiny `Auto-save is a per-plan toggle.` footnote in `text-xs text-[#999999]` if space allows — not required.

---

## 5. BANNED list — grep gate (must pass before merge)

No landing file (`frontend/src/components/example/*`, `frontend/src/app/(landingPage)/*`) may contain:

```
\[.*\]          — brackets-as-labels (e.g. [01 // CASHFLOW_ENGINE], [SYS_STATUS, [AUTONOMOUS_LEDGER_SURFACE], [AUDIT_OK], [PORT)
 //             — double-slash in JSX text content (e.g. "01 // CASHFLOW_ENGINE", "ACH_CREDIT //")
// — allow only in JS comments and URLs (https://); forbid in rendered text nodes
senzen-engine://
SYS_STATUS
AUDIT
LISTENER
PORT 8080
PIPELINE
EXECUTION_MODE
PIPELINE strip
backtest
execute (as product claim — "executed", "execution", "rules executed")
routing / routed / router (as product claim — not Next.js router)
engine (as product claim — "cashflow engine", "senzen-engine")
deterministic
state machine
ACH
reserve sweep
DCA
S&P
INFLOW
ALLOCATED
buffer (as product fiction — "buffers absorb")
read-only by design / bank links
RULE ·  (bracketed rule labels)
```

**Grep gate commands (run from repo root):**
```bash
# brackets-as-labels in landing
rg -n '\[.*(SYS_STATUS|CASHFLOW|AUTONOMOUS|AUDIT|PORT|RULE)' frontend/src/components/example/ frontend/src/app/\(landingPage\)/
# double-slash in JSX text (allow comments/URLs)
rg -n '"[^"]*//[^"]*"' frontend/src/components/example/ frontend/src/app/\(landingPage\)/
# fiction vocabulary
rg -ni 'senzen-engine|SYS_STATUS|AUDIT|LISTENER|PORT 8080|PIPELINE|EXECUTION_MODE|backtest|deterministic|state.?machine|ACH_CREDIT|RESERVE_SWEEP|DISCRETIONARY_LOCK|INDEX_PORTFOLIO|S&P 500 DCA|TOTAL INFLOW|ALLOCATED.*100%|read-only by design' frontend/src/components/example/ frontend/src/app/\(landingPage\)/
# invented metrics
rg -n '\$12\.8M|45,210|100\.0%|NO AI GUESSWORK' frontend/src/components/example/
```
All must return **no matches**. If any match, fix before review.

Also forbid: `//` inside JSX text nodes — use `&mdash;` or `·` for separators.

---

## 6. File map + what to touch / what not to touch

### Touch (only these)
| File | Action |
|---|---|
| `frontend/src/components/example/spotlight-demo.tsx` | Rewrite labels/stats/tagline + miniature plan card (keep layout/palette/fonts/buttons) |
| `frontend/src/components/example/automation-demo.tsx` | Full rewrite → ONE OS window with Plans/Ledger tabs (delete fake engine) |
| `frontend/src/components/example/ai-plan-demo.tsx` | Reframe `RULE · Auto-Save-600` → per-plan toggle card; delete `planRows` |
| `frontend/src/components/example/highlights-band.tsx` | Replace 4 highlight titles/bodies (keep grid/borders) |
| `frontend/src/components/example/faq-section.tsx` | Replace 4 Q&A pairs |
| `frontend/src/components/example/navbar.tsx` | Announcement bar copy only |
| `frontend/src/components/example/footer.tsx` | Tagline only |
| `frontend/src/app/(landingPage)/layout.tsx` | Metadata `title` + `description` (see below) |

### Do NOT touch
- `frontend/src/app/(product)/*` (real app pages — read-only reference)
- `frontend/src/components/ui/*` (shadcn primitives)
- `frontend/src/app/(landingPage)/page.tsx` section order (keep `HeroComposer → AiPlanDemo → AutomationDemo → HighlightsBand → WeeklyClarity → FaqSection → Footer`)
- Global cream tokens / Tailwind config / fonts
- Any backend (`backend/*`, `plan_handler.go`, `transaction_handler.go`)

### Metadata (`frontend/src/app/(landingPage)/layout.tsx`)
```tsx
export const metadata = {
  title: "Senzen — Plan your money. Track every day.",
  description: "Plans, budgets, categories, and a daily ledger — progress you can see. Auto-save is a per-plan toggle.",
};
```
(Current is `title: "Senzen"` / `description: "Smart budgeting..."` — update to honest tagline; if the file instead has `Programmable Capital…`, replace that title too.)

---

## 7. Copy table — every offender line old → new (for reviewer grep)

| File:line (approx) | Old (offender — delete) | New (truthful) |
|---|---|---|
| `spotlight-demo.tsx:15` | `[SYS_STATUS: ACTIVE]` | *(deleted — replaced by `Plans · Budgets · Daily ledger`)* |
| `spotlight-demo.tsx:18` | `PIPELINE: PAYDAY_AUTOMATION_V2` | *(deleted)* |
| `spotlight-demo.tsx:19` | `EXECUTION_MODE: INSTANT_ROUTING` | *(deleted)* |
| `spotlight-demo.tsx:27` | `[01 // CASHFLOW_ENGINE]` | *(deleted — no hero bracket label)* |
| `spotlight-demo.tsx:53` | `Build automated money rules with logic, backtest your budget, then execute—all in one place.` | `Plan your money. Track every day. See yourself get ahead.` |
| `spotlight-demo.tsx:70` | `$12.8M+ / Managed cashflow / +34% MoM` | `3 steps / Plan → Budget → Ledger / No spreadsheets` |
| `spotlight-demo.tsx:81` | `45,210 / Rules executed / 0.00ms ERR` | `Every expense / Categorized daily / Groceries · Transport · Eating out` |
| `spotlight-demo.tsx:92` | `100.0% / Deterministic logic / NO AI GUESSWORK` | `$1,200 / $1,500 / Progress you can see / · on track` |
| `automation-demo.tsx:9` | `[AUTONOMOUS_LEDGER_SURFACE]` | `Your money, led day by day` |
| `automation-demo.tsx:12` | `Every payday, routed deterministically before you wake up.` | `Plans you keep. Progress you can see.` |
| `automation-demo.tsx:15` | `No chat assistants… state machines… banking events.` | `Create a plan, set budgets by category, log expenses daily — and watch your progress stay on track.` |
| `automation-demo.tsx:28` | `senzen-engine://production-rules-v1.4` | `Senzen — April Plan` |
| `automation-demo.tsx:32` | `LISTENER: ACTIVE [PORT 8080]` | *(deleted — replaced by Plans/Daily ledger tab control)* |
| `automation-demo.tsx:40-50` | `TOTAL INFLOW / ALLOCATED / EXECUTION TIME` strip | *(deleted — replaced by plan cards + ledger tabs)* |
| `automation-demo.tsx:64-125` | 4 rule-ledger rows (`ACH_CREDIT`, `RESERVE_SWEEP`, `DISCRETIONARY_LOCK`, `INDEX_PORTFOLIO_DCA`, `S&P 500 DCA`) | 3 plan cards + 4 transaction rows (Groceries/Transport/Eating out) |
| `automation-demo.tsx:130` | `[AUDIT_OK] … VERIFIED BY LEDGER HASH #8F29A` | `3 plans · 12 transactions · updated today / Auto-save is a per-plan toggle` |
| `ai-plan-demo.tsx:44` | `RULE · Auto-Save-600` + `IF payday → route…` rows | `Plan · Family Trip · $2,000 · 3 months` + per-plan toggle |
| `ai-plan-demo.tsx:21` | `Senzen builds, runs, and adjusts money rules… mono precision.` | `Describe what you want to save for — Senzen drafts the plan… You stay in control.` |
| `highlights-band.tsx:6` | `Backtest before you commit / dry-run any rule…` | `Plans for real life / Name it, set a budget, pick a duration.` |
| `highlights-band.tsx:12` | `Buffers absorb messy weeks / a rule can't run…` | `Budgets by category / Groceries, Transport, Eating out — your call.` |
| `highlights-band.tsx:17` | `Zero spreadsheets / plain-language rules…` | `Daily ledger / Log expenses as you go. Every entry counts.` |
| `highlights-band.tsx:22` | `Read-only by design / bank links view money…` | `Progress you can see / $1,200 / $1,500 · on track. Stay motivated.` |
| `navbar.tsx:14` | `★ Meet Senzen: Automated financial rules without code` | `★ Meet Senzen: Plan your money. Track every day.` |
| `footer.tsx:50` | `Automated money rules, executed weekly…` | `Plans, budgets, and a daily ledger — progress you can see.` |

---

## 8. Verification checklist

- [ ] `pnpm -C frontend build` (or `npm run build`) passes — no TS errors, no new deps, no missing imports. `automation-demo.tsx` uses only `React.useState` + Tailwind + existing `Button`/`Card` if needed (prefer plain divs to avoid extra imports).
- [ ] `rg` grep gate (Section 5) returns **zero matches** in `frontend/src/components/example/` + `frontend/src/app/(landingPage)/`.
- [ ] Cream palette unchanged: `#EEEEEE` page bg, `#E5E5E5` borders, `#0A0A0A` text, `#1EC072` accent, `#F9F8F6` window chrome. No purple/beige drift.
- [ ] Hero keeps `min-h-svh lg:h-screen flex flex-col justify-between` + `Meet`/`Senzen` display + green dotted slab + `Get started` pill.
- [ ] Only ONE OS-window card on the page (in `automation-demo.tsx`); hero miniature card is a small static preview, not a second window (hide on mobile).
- [ ] OS window tabs switch with `useState`, keyboard-accessible, no horizontal scroll on mobile, plan cards stack 1-col on mobile.
- [ ] Real vocabulary only: `Plan`, `Budget`, `Category`, `Transaction`, `Daily ledger`, `Auto-save` (as toggle), `on track`/`behind`, `saved so far`, `remaining`, `total expenses`.
- [ ] Screenshots: desktop (1440) + mobile (390) of hero, OS window (both tabs), and full page — no clipped text, no overflow, no bracket labels visible.
- [ ] Metadata title/description updated and honest.

---

## 9. Engineer notes

- Keep all Tailwind classes literal (no dynamic `w-[${pct}%]` — use `w-[80%]`/`w-[40%]`/`w-[30%]`/`w-full` literals so Tailwind JIT picks them up).
- Dates in ledger: `YYYY-MM-DD` (e.g. `2026-04-08`) to match `transaction_date` shape.
- Amounts: `font-mono tabular-nums`, always `$` + two decimals.
- Do not add `framer-motion`, `recharts`, or any new dep for the landing — the window is static + `useState` tabs only.
- If `weekly-clarity.tsx` / `container-scroll-animation-demo.tsx` are still in the landing page, leave them as-is (out of scope) — but ensure they don't reintroduce banned copy.

---
# END FILE CONTENT