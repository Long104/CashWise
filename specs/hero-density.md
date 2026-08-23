# UI Specification: Hero Density & Product Surface (100vh Terminal & Warmwind OS Window)

## 1. Overview & Locked Decisions

- **Target Worktree**: `/Users/pantorn/satori/kaizen/Senzen/.worktrees/hero-density`
- **Scope Boundary**: Strictly two sections on the landing page:
  1. `HeroComposer` + `StatsProofRow` (`frontend/src/components/example/spotlight-demo.tsx`)
  2. `AutomationDemo` (`frontend/src/components/example/automation-demo.tsx`)
- **Key Locked Directives**:
  - **Hero Layout**: Full viewport height (`min-h-svh` / `h-screen`), structured with a dense technical layout, hairline grid system, monospace micro-labels, live ticker/status strip, and stats directly woven into the hero quadrant.
  - **Fonts & CTAs**: Retain current typography (`Plus Jakarta Sans` / `Inter` + `JetBrains Mono` / `GeistMonoVF`) and current CTA pill buttons (`bg-black text-white rounded-full font-semibold`).
  - **Dual Cards Replacement**: Replace the 2-column before/after card (fake chat bubbles) with **ONE single big product-surface card** inspired by Warmwind OS and Composer terminal windows. No chat-bubble theater, no fake dialogue, no emoji cards. Real rule entries with condition logic, trigger states, timestamps, and real execution telemetry.

---

## 2. Research & Inspiration Citations

1. **Composer by SoFi (`composer.trade`)**:
   - Technical canvas in warm/neutral light `#EEEEEE` / `#F6F2EE` with crisp `#0A0A0A` typography.
   - Monospace telemetry tags, micro-labels (`STATUS // ACTIVE`, `EXEC_FREQ // REALTIME`), and hairline grid rules (`border-[#E5E5E5]`).
   - Integrated metrics band directly grounding the hero without floating card fluff.
2. **Warmwind OS (`warmwind.com` / 2026 Bento & OS Surface Paradigms)**:
   - Single unified surface container ("window chrome") with real operating state: header bar with status indicators (`● ENGINE LIVE`, `v2.4.0-prod`), active rule execution log, and tabular row density.
   - Elimination of split "before/after" comparison cards in favor of a single rich operational workspace.
3. **2026 Awwwards SOTD Dark Technical SaaS / High-Density Trends**:
   - Modular tabular rules with mono timestamps, execution latency counters (`12ms`), and inline execution triggers.
   - Hairline crosshair/coordinate indicators (`[01] // RULE_ROUTING`, `LATENCY < 15MS`).

---

## 3. Section 1: 100vh High-Density Hero Spec

### File: `frontend/src/components/example/spotlight-demo.tsx`

### Visual Structure
- **Container**: `relative w-full min-h-svh lg:h-screen flex flex-col justify-between bg-[#EEEEEE] overflow-hidden border-b border-[#E5E5E5]`
- **Background Texture & Grid**:
  - Crisp hairline grid lines: `bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem]` with subtle opacity.
  - Accent green dot matrix block behind "Senzen" title (preserved: `bg-[#1EC072]` dot pattern).
- **Top Ticker / Status Micro-Strip** (integrated into top of hero quadrant):
  - Monospace telemetry badge: `font-mono text-xs uppercase tracking-widest text-[#555555]`
  - Elements:
    - `[SYS_STATUS: ACTIVE]` with glowing green indicator dot `h-2 w-2 rounded-full bg-[#1EC072]`
    - `LATENCY: 14MS`
    - `PIPELINE: PAYDAY_AUTOMATION_V2`
    - `EXECUTION_MODE: INSTANT_ROUTING`
- **Main Hero Core (Typography + Value Proposition)**:
  - **Eyebrow**: Monospace micro-label `[01 // CASHFLOW_ENGINE]` in `font-mono text-xs text-[#555555] uppercase tracking-wider mb-3`
  - **H1 Display**:
    - "Meet" in `text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A]`
    - "Senzen" in `text-[4.5rem] md:text-[8rem] lg:text-[10rem] font-extrabold tracking-tighter leading-[0.85] text-[#0A0A0A]` with the iconic `#1EC072` dot-matrix badge overlay.
  - **Divider**: Black hairline accent rule `h-[2px] w-24 bg-[#0A0A0A] mt-6`
  - **Copy**: `text-lg md:text-xl text-[#333333] max-w-xl font-normal leading-relaxed mt-6` ("Build automated money rules with logic, backtest your budget, then execute—all in one place.")
  - **CTA Row**:
    - Primary CTA: `rounded-full bg-black text-white text-base md:text-lg px-8 py-3.5 hover:bg-neutral-800 transition-all active:scale-[0.98] font-semibold flex items-center gap-2 shadow-sm`
    - Secondary CTA / Micro-link: `font-mono text-xs uppercase tracking-wider text-[#0A0A0A] border-b border-black pb-0.5 hover:opacity-70 transition-opacity flex items-center gap-1.5` ("EXPLORE SYSTEM DOCS →")
- **Bottom Grounding: Integrated Telemetry & Stats Proof Quadrant**:
  - Instead of a detached section below the fold, weave the 3 stats into the bottom grid of the 100vh hero:
  - Grid: `grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5] border-t border-[#E5E5E5] bg-[#EEEEEE]/80 backdrop-blur-sm`
  - Stat items:
    1. `$12.8M+` | `font-mono text-3xl md:text-4xl font-extrabold text-[#0A0A0A] tabular-nums` | `MANAGED CASHFLOW` (with micro-tag `+34% MoM`)
    2. `45,210` | `font-mono text-3xl md:text-4xl font-extrabold text-[#0A0A0A] tabular-nums` | `RULES EXECUTED` (with micro-tag `0.00ms ERR`)
    3. `100.0%` | `font-mono text-3xl md:text-4xl font-extrabold text-[#0A0A0A] tabular-nums` | `DETERMINISTIC LOGIC` (with micro-tag `NO AI GUESSWORK`)

---

## 4. Section 2: Warmwind OS Big Product-Surface Card Spec

### File: `frontend/src/components/example/automation-demo.tsx`

### Visual Structure (Replaces the split dual cards)
- **Container Section**: `w-full bg-[#EEEEEE] py-20 md:py-28 border-b border-[#E5E5E5]`
- **Section Heading**:
  - Eyebrow: `font-mono text-xs font-semibold uppercase tracking-widest text-[#555555] mb-3` (`[AUTONOMOUS_LEDGER_SURFACE]`)
  - Headline: `text-3xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] max-w-2xl` ("Every payday, routed deterministically before you wake up.")
  - Subtitle: `text-base md:text-lg text-[#333333] max-w-2xl mt-4 leading-relaxed` ("No chat assistants. No prompt hallucinations. Senzen runs structured financial state machines triggered directly by your banking events.")
- **Single Product-Surface Container ("Warmwind OS Window")**:
  - Frame: `w-full max-w-5xl mx-auto mt-12 bg-white rounded-lg border border-[#DCD8D3] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden`
  - **Window Titlebar / Top Chrome**:
    - Height: `h-11 bg-[#F9F8F6] border-b border-[#E5E2DD] px-4 flex items-center justify-between`
    - Left: Window controls dots (`h-2.5 w-2.5 rounded-full bg-[#E5E2DD]`, `#DCD8D3`, `#D0CCC6`) + Monospace window label: `font-mono text-xs font-semibold text-[#0A0A0A]` (`senzen-engine://production-rules-v1.4`)
    - Center/Right: Live status badge: `flex items-center gap-2 bg-[#EBF9F1] border border-[#1EC072]/30 px-2.5 py-0.5 rounded text-xs font-mono font-medium text-[#049F55]` ("● LISTENER: ACTIVE [PORT 8080]")
  - **Surface Sub-Header / Summary Metrics Strip**:
    - 3-column metric header over the table:
      - `TOTAL INFLOW: $4,500.00`
      - `ALLOCATED: $4,500.00 (100%)`
      - `EXECUTION TIME: 18ms`
  - **Rule Ledger Rows (Dense, Realistic Business Rules)**:
    - Header row: `font-mono text-[11px] uppercase tracking-wider text-[#666666] bg-[#FAFAFA] border-b border-[#E5E5E5] px-5 py-2.5 grid grid-cols-12 gap-2`
      - Columns: `01. TRIGGER / EVENT` (col-span-3), `02. CONDITION & LOGIC` (col-span-4), `03. ROUTED ACTION` (col-span-3), `04. STATUS / TIME` (col-span-2 text-right)
    - Row 1 (Direct Deposit):
      - Trigger: `font-mono text-xs font-medium text-[#0A0A0A]` → `ACH_CREDIT // EMPLOYER_PAYROLL`
      - Condition: `font-mono text-xs text-[#333333]` → `IF amount >= $3,000.00`
      - Action: `font-mono text-xs text-[#0A0A0A] font-semibold` → `Deposit $3,200.00 → Checking`
      - Status: `font-mono text-xs text-[#049F55]` → `✓ EXECUTED (00:01:04)`
    - Row 2 (Emergency Reserve Sweep):
      - Trigger: `font-mono text-xs font-medium text-[#0A0A0A]` → `RULE // RESERVE_SWEEP`
      - Condition: `font-mono text-xs text-[#333333]` → `SPLIT 15% (Checking > Threshold)`
      - Action: `font-mono text-xs text-[#0A0A0A] font-semibold` → `Transfer $480.00 → High-Yield Vault`
      - Status: `font-mono text-xs text-[#049F55]` → `✓ EXECUTED (00:01:05)`
    - Row 3 (Discretionary Buffer Split):
      - Trigger: `font-mono text-xs font-medium text-[#0A0A0A]` → `RULE // DISCRETIONARY_LOCK`
      - Condition: `font-mono text-xs text-[#333333]` → `SPLIT 10% (Fixed Buffer)`
      - Action: `font-mono text-xs text-[#0A0A0A] font-semibold` → `Allocate $320.00 → Buffer Account`
      - Status: `font-mono text-xs text-[#049F55]` → `✓ EXECUTED (00:01:05)`
    - Row 4 (Auto-Invest DCA):
      - Trigger: `font-mono text-xs font-medium text-[#0A0A0A]` → `RULE // INDEX_PORTFOLIO_DCA`
      - Condition: `font-mono text-xs text-[#333333]` → `REMAINDER (Post-Sweeps)`
      - Action: `font-mono text-xs text-[#0A0A0A] font-semibold` → `Execute $160.00 → S&P 500 DCA`
      - Status: `font-mono text-xs text-[#049F55]` → `✓ EXECUTED (00:01:06)`
  - **Footer Console / Audit Log Strip**:
    - Background: `bg-[#101516] text-[#EEEEEE] px-5 py-3 border-t border-[#101516] flex items-center justify-between font-mono text-xs`
    - Left: `> [AUDIT_OK] 4 of 4 rules processed successfully. 0 errors, 0 manual interventions.`
    - Right: `VERIFIED BY LEDGER HASH #8F29A`

---

## 5. Anti-Slop Enforcement Checklist (Engineer Must Pass)

- [ ] **NO Fake Chat Bubbles**: The old split card with conversation bubbles (`user: "I need to save"`) is 100% removed.
- [ ] **NO Emoji Icons**: Only clean Lucide icons or raw unicode status glyphs (`✓`, `●`, `→`).
- [ ] **NO Fuzzy Purple/Indigo Gradient Glows**: Strictly `#EEEEEE` canvas, `#FFFFFF` card surface, `#0A0A0A` ink, and `#1EC072` brand accent.
- [ ] **NO Generic 3-Column Card Walls**: The before/after section is a single unified high-density product surface.
- [ ] **Exact 100vh Hero**: Mobile & Desktop use `min-h-svh lg:h-screen flex flex-col justify-between` to ensure true full-viewport framing without overflow jitter.
- [ ] **Font & Button Preservation**: Must use existing `font-sans` (`Plus Jakarta Sans`) and `font-mono` (`JetBrains Mono`) with black pill buttons (`rounded-full bg-black text-white`).

---

## 6. Files to Modify and Delete Summary

### Files to Modify:
1. `frontend/src/components/example/spotlight-demo.tsx`:
   - Refactor `HeroComposer` to full 100vh (`min-h-svh lg:h-screen`) layout with hairline grid, micro-labels, and integrated telemetry.
   - Refactor `StatsProofRow` or merge it as the grounded bottom row of `HeroComposer`.
2. `frontend/src/components/example/automation-demo.tsx`:
   - Completely replace the two-card split layout (`beforeRows` / `afterRows`) with the single **Warmwind OS Big Product Surface Card** (`senzen-engine://production-rules-v1.4`).
3. `frontend/src/app/(landingPage)/page.tsx`:
   - Ensure clean section hierarchy and layout flow between `HeroComposer` and `AutomationDemo`.

### Files / Artifacts to Delete:
- Delete `beforeRows` / `afterRows` fake chat/split state in `automation-demo.tsx`.
- Delete any redundant padding/margins that prevent the hero from locking at `100vh` (`min-h-svh`).
