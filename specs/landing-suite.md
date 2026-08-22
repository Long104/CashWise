# Senzen — Landing Suite (Composer-class expansion)

Status: ACTIVE SPEC. Extends `specs/grid-redesign.md` (token/motif law — unchanged, still binding).
Goal: expand landing from 3 sections to a rich suite: demo, automation, highlights, weekly clarity, FAQ. Kill dead space below footer. Zero AI slop.

## 1. Page map — `frontend/src/app/(landingPage)/page.tsx`

Order (one continuous flow, no boxed CTAs, no card walls):
HeroComposer → StatsProofRow → **AiPlanDemo** → **AutomationDemo** → **HighlightsBand** → **WeeklyClarity** → **FaqSection** → Footer.

Rhythm law (from research): alternate split ↔ band. Never two identical layouts back-to-back.

## 2. Full-height fix — `frontend/src/app/(landingPage)/layout.tsx` (SHARED — all 4 landing routes render Footer)

```tsx
<div className="light flex min-h-screen flex-col bg-[#EEEEEE] text-[#0A0A0A]">
  <Navbar />
  <main className="flex flex-1 flex-col">{children}</main>
</div>
```
Footer (last child of each page) pins to viewport bottom when content is short. No dead #EEEEEE void below footer on ANY landing route (/, /pricing, /sign-in, /sign-up).

## 3. New components — `frontend/src/components/example/`

### 3.1 `ai-plan-demo.tsx` — split (text left, panel right)
Headline: "Ask for a plan in plain language". Body: Senzen builds, runs, and adjusts money rules from one sentence — mirrors the real /ws chat.
Right panel (white, 1px #E5E5E5 border, rounded-[8px]):
- Chat: user bubble (bg #0A0A0A, text #EEEEEE, rounded-2xl, max-w): "I take home $3,200 a month. Can I save $600 without thinking about it?"
- Senzen reply (white bubble, 1px border): "Done. Here's your plan —" + inline plan block:
  `RULE · AUTO-SAVE-600` (mono xs uppercase #555555)
  `IF payday → route $300 → savings`
  `IF balance > $800 → move 50% excess → buffer`
  `ELSE → pause + notify` (each row: green dot + mono sm #0A0A0A)
- Status row: green dot + "Plan ready · 3 rules · starts next payday" (mono xs).
- Dot-matrix strip (h-6, rgba(10,10,10,0.08)) at panel top edge (motif placement #2).
Text link CTA: "Try the planner" → /createPlan.

### 3.2 `automation-demo.tsx` — split FLIPPED (panel left, text right)
Headline: "Every payday, handled before you notice". Body: rules fire the moment income lands.
Panel (same white surface):
- Label `BEFORE · NO RULES` (mono xs #555555): rows `Payday $3,200`, `Checking $3,200`, `Savings $0`, `Buffer $0` — grey dots (#BBBBBB), mono, tabular-nums.
- Divider: 1px #E5E5E5 + centered mono label `SENZEN ON`.
- Label `AFTER · RULES LIVE`: `Checking $2,240`, `Savings $480 ▲`, `Buffer $320 ▲`, `Invest $160 ▲` — green dots + green `▲` only on deltas; amounts ink.
Text link CTA: "See how rules run" → /home.

### 3.3 `highlights-band.tsx` — band, NOT cards
Full-width band, border-y 1px #E5E5E5. Eyebrow: mono xs uppercase "MORE FROM SENZEN" #555555.
4 editorial rows (single column, divide-y #E5E5E5; on md: 2-col asymmetric grid — rows span varied widths, NOT uniform boxes):
- `01` Backtest before you commit — dry-run any rule against your last 90 days.
- `02` Buffers absorb messy weeks — a rule can't run? it holds, never fails.
- `03` Zero spreadsheets — plain-language rules, mono-precision execution.
- `04` Read-only by design — bank links view money, never move it without you.
Row anatomy: mono number #555555 → green dot → bold ink title → #333333 one-liner. No borders per row beyond divide lines. No icons.

### 3.4 `weekly-clarity.tsx` — split (text left, ledger right)
Headline: "Your money, one line a week". Body: every week closes itself out — saved, spent, on-track or behind, in a single ledger line you'll actually read.
Ledger panel (white surface): 4 rows `WK 32 · saved $412 · on track` etc. Each row: green/grey status dot, mono text, and a thin 4px progress track (h-1 bg #E5E5E5, fill #1EC072, width = pct: 92/88/61/100). Footer row: `STREAK · 3 WEEKS ON TRACK` mono xs.
Dot-matrix divider strip (3rem, rgba(10,10,10,0.08), full-width) ABOVE this section (motif placement #3; hero green block = #1, footer strip = #4).
Text link CTA: "Open your ledger" → /home.

### 3.5 `faq-section.tsx` — centered column, max-w-3xl
Headline: "Questions, answered". 4 items, shadcn Collapsible (`@components/ui/collapsible` — EXISTS; @radix-ui/react-accordion NOT installed and DNA law says no new deps):
1. Is my bank connection safe? — Read-only links, encrypted at rest, Senzen never moves money without a rule you wrote.
2. Do I need to change banks? — No. Senzen sits beside your accounts and coordinates them.
3. What happens when a rule can't run? — It pauses into your buffer and tells you. Nothing bounces.
4. How is this different from a budget app? — Budgets track what you did. Senzen decides what happens next.
Anatomy: trigger row = question (font-medium ink, text-left, w-full) + plus/minus (lucide `Plus`, rotate-45 when open); content = #333333 answer. Divide-y #E5E5E5. Single-open behavior (opening one closes others — track openIndex state). No borders/cards around the list.

## 4. Deletions
- DELETE `timeline-demo.tsx` and its import (BOTH sections replaced by AiPlanDemo/AutomationDemo/WeeklyClarity).
- HeroComposer, StatsProofRow, Footer: UNCHANGED (grid-redesign.md §1/§4/§5 stands).

## 5. Anti-slop law (carried over + extended)
- Green text on light bg: BANNED. Green = fills, dots, ▲ deltas, ≥3px underlines, progress fills only.
- No card walls, no uniform icon grids, no gradients, no glassmorphism, no stock illustration, no emoji.
- ONE CTA per section; text links (underline underline-offset-4) except hero pill.
- No AI-vocab: "seamless", "unlock", "revolutionize", "empower", "effortlessly" — grep-verifiable.
- Copy: declarative sentences, no exclamation marks on landing.
- Motion: hover micro only (underline weight, arrow translate). No framer-motion additions.
- Icon direction (NOTE ONLY — separate task, do NOT build): geometric dot-matrix mark, 5×5 ink dot grid forming an S/ledger glyph, single green dot accent.

## 6. Verification Exit Criteria (Engineer self-checks ALL before DONE)
- [ ] `npm run build` in frontend/ exits 0 (all 11 routes) — command exit code
- [ ] `npm run lint` exits 0 — command exit code
- [ ] `npm run test:run` no new failures — command output
- [ ] `grep -rn "seamless\|unlock\|revolutionize\|empower\|effortlessly" frontend/src/components/example/` returns 0 hits
- [ ] `grep -rn "text-\[#1EC072\]" frontend/src/components/example/` returns 0 hits (no green text on light)
- [ ] timeline-demo.tsx deleted; `grep -rn "timeline-demo" frontend/src/` returns 0 hits
- [ ] Dev server renders / — page contains sections in order: hero, stats, ai plan, automation, highlights, weekly clarity, faq, footer (DOM order check)
- [ ] FAQ: trigger click opens content, second click closes; opening Q2 closes Q1 — manual browser check
- [ ] document.body.scrollHeight ends at footer bottom edge (no gap below footer) at 1440×900 — devtools/console check
- [ ] Same no-gap check passes on /pricing, /sign-in, /sign-up (shared layout fix)
- [ ] Screenshots saved to qa-screenshots/: hero.png, ai-plan-demo.png, automation-demo.png, highlights-band.png, weekly-clarity.png, faq.png, full-page.png

## 7. Out of scope
Pricing page content, /ws app, product routes, auth, backend, new deps, animations, icon asset build.
