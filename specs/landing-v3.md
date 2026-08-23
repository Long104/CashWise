# Technical Specification: Landing V3 Redesign (`specs/landing-v3.md`)

**Status**: ACTIVE TECHNICAL SPECIFICATION  
**Scope**: Full Dark Modern Financial Platform Landing Redesign (Obsidian `#0C0A09` Base, Warm Amber `#F59E0B` / Emerald `#10B981` / Sky `#38BDF8` accents, Interactive Product Engine)  
**Target Route**: `frontend/src/app/(landingPage)/`  
**Dependencies**: 0 new npm packages (Strict zero-dependency constraint; standard Tailwind CSS, Lucide icons, native SVG math, React state).

---

## 1. Executive Summary & Locked Architectural Decisions

Landing V3 transitions the Senzen public marketing surface from a static light-canvas into a precision-engineered, dark fintech experience. It merges high-fidelity product simulation (interactive Composer logic blocks, real-time dynamic SVG projections, tabbed `/home` and `/plan` sandbox viewports) with an immersive visual atmosphere.

### Locked Architectural Decisions
1. **Base Palette**: Obsidian Deep Base (`#0C0A09`), Layer 1 Surface (`#141210`), Layer 2 Card (`#1C1917`), Elevated Border (`#292524`), Hairline Divider (`#292524` with 60% opacity or `#1F1D1A`).
2. **Tri-Accent System**:
   - **Amber (`#F59E0B` / `rgba(245, 158, 11, 0.15)`)**: Execution state, active trigger nodes, primary CTA glow, intelligence aura.
   - **Emerald (`#10B981` / `rgba(16, 185, 129, 0.15)`)**: Positive cash flow deltas, surplus capital, verified financial backtests, live health indicators.
   - **Sky (`#38BDF8` / `rgba(56, 189, 248, 0.15)`)**: Telemetry charts, asset routing paths, ledger allocations, secondary metrics.
3. **Atmospheric Texture**: Warm aurora mesh (`radial-gradient` stacks) + inline SVG feTurbulence data URI noise overlay with `mix-blend-overlay` and strict opacity control (`opacity-[0.035]`).
4. **Unified Dark Restyle**: 100% of landing sub-components (Navbar, Hero Sandbox, Interactive Demo, Features Grid, FAQ Accordion, Footer) adhere strictly to the dark obsidian token architecture.
5. **Real App Recreation**: Live sandbox environments replicating actual dashboard `/home` and `/plan` behavior with working tab toggles, live state switches, and parameter-reactive SVG curves.
6. **Zero Dependencies**: Zero new npm installations. No WebGL, no Three.js, no heavyweight chart bundles. Implemented with clean React hooks (`useState`, `useMemo`), Lucide React, and pure Tailwind CSS.

---

## 2. 7 Graphic Identity Decisions

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           7 GRAPHIC IDENTITY LAWS                           │
├───────────────────────┬─────────────────────────────────────────────────────┤
│ 1. Emotional Register │ High-precision, quantitative sovereign financial   │
│                       │ intelligence. Calm, surgical, authoritative.       │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 2. Display Font       │ Plus Jakarta Sans / Inter display (tight tracking   │
│                       │ -0.035em, font-semibold to font-bold).              │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 3. Signature Move     │ Dynamic glowing rule evaluation node running down   │
│                       │ an interactive visual logic rail into SVG charts.   │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 4. Edge Language      │ 8px card radiuses (`rounded-lg`), 6px inner items   │
│                       │ (`rounded-md`), 9999px pills for mono tags only.    │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 5. Spacing Rhythm     │ Strict 4px/8px grid system. Section padding py-24   │
│                       │ (96px) desktop, py-16 (64px) mobile.                │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 6. Data as Design     │ Tabular numbers (`font-mono tabular-nums`), delta   │
│                       │ badges, timestamped execution ticks.                │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 7. Iconographic Voice │ Lucide linear stroke-1.5 icons framed in dark 24px  │
│                       │ square badges with subtle matching accent washes.   │
├───────────────────────┴─────────────────────────────────────────────────────┤
│ Signature Motif: Layered logic connector pipelines with glowing amber/     │
│ emerald execution pulses feeding deterministic balance forecasts.           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Section-by-Section Anatomy & Layout Trees

### 3.1 Navbar (`frontend/src/components/example/Navbar.tsx`)

Dark floating or sticky full-width navigation bar with subtle border bottom and frosted backdrop blur.

```
[ Container: w-full border-b border-[#292524]/80 bg-[#0C0A09]/85 backdrop-blur-md sticky top-0 z-50 ]
  └── [ Inner: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between ]
        ├── [ Left: Brand Logo + Monogram ]
        │     └── [ Link href="/" flex items-center gap-2.5 ]
        │           ├── [ Logo Icon: w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-base ]
        │           └── [ Brand Wordmark: font-semibold text-lg tracking-tight text-stone-100 ] -> "Senzen"
        ├── [ Center: Navigation Links (hidden on mobile) ]
        │     └── [ nav flex items-center gap-8 text-sm font-medium text-stone-400 ]
        │           ├── [ a href="#sandbox" hover:text-stone-100 transition-colors ] -> "Engine"
        │           ├── [ a href="#demo" hover:text-stone-100 transition-colors ] -> "Live Sandbox"
        │           ├── [ a href="#features" hover:text-stone-100 transition-colors ] -> "Architecture"
        │           └── [ a href="#faq" hover:text-stone-100 transition-colors ] -> "FAQ"
        └── [ Right: Auth & Action CTA ]
              └── [ flex items-center gap-4 ]
                    ├── [ Link href="/sign-in" text-sm font-medium text-stone-300 hover:text-white px-3 py-1.5 ] -> "Sign in"
                    └── [ Link href="/createPlan" bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm px-4 py-2 rounded-lg shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all flex items-center gap-1.5 ]
                          └── "Get Started" + <ArrowRight className="w-4 h-4" />
```

---

### 3.2 Hero Section (`frontend/src/components/example/HeroComposer.tsx`)

Viewport height target `min-h-[100dvh]` with multi-layer background mesh + SVG noise texture, bold value proposition, interactive Composer 3-node chip sandbox, and dynamic projection curve.

#### Visual Layout Structure
```
[ Hero Root: relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-[#0C0A09] pt-24 pb-16 ]
  ├── [ Background Layers: Ambient Warm Aurora + SVG Turbulence Noise ]
  │     ├── [ Radial Glow Top-Center: absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/12 via-emerald-500/5 to-transparent blur-[120px] pointer-events-none ]
  │     └── [ SVG Noise Overlay: absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay ]
  │
  ├── [ Content Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full ]
  │     ├── [ Header Stack: max-w-3xl mx-auto text-center space-y-5 mb-12 ]
  │     │     ├── [ Pill Badge: inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-wide uppercase ]
  │     │     │     └── <Sparkles className="w-3.5 h-3.5" /> + "Senzen Engine 3.0 Live"
  │     │     ├── [ Headline: text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-[1.08] ]
  │     │     │     └── "Programmable Capital." <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400">Automated to the Cent.</span>
  │     │     ├── [ Sub-headline: text-base sm:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed ]
  │     │     │     └── "Construct modular financial logic routines. Automatically route paydays, absorb volatile weeks, and backtest your wealth velocity before execution."
  │     │     └── [ CTA Button Group: flex flex-wrap items-center justify-center gap-4 pt-2 ]
  │     │           ├── [ Primary CTA: href="/createPlan" bg-amber-500 hover:bg-amber-400 text-stone-950 px-6 py-3 rounded-lg font-semibold text-sm shadow-xl shadow-amber-500/15 flex items-center gap-2 ]
  │     │           │     └── "Build Your Routine" + <ArrowRight className="w-4 h-4" />
  │     │           └── [ Secondary CTA: href="#demo" bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-800 px-6 py-3 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 ]
  │     │                 └── <Play className="w-4 h-4 text-emerald-400" /> + "Explore Interactive Model"
  │     │
  │     └── [ Product Centerpiece: The Interactive Composer Sandbox ]
  │           └── [ Glass Card: max-w-4xl mx-auto rounded-xl bg-[#141210]/90 border border-stone-800/80 shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative ]
  │                 ├── [ Sandbox Header: flex items-center justify-between pb-6 border-b border-stone-800 ]
  │                 │     ├── [ Left: Window Controls + Title ]
  │                 │     │     └── [ flex items-center gap-3 ]
  │                 │     │           ├── [ Dot Indicators: 3x w-2.5 h-2.5 rounded-full bg-stone-800 ]
  │                 │     │           └── [ Title: font-mono text-xs uppercase tracking-wider text-stone-400 ] -> "LOGIC_PIPELINE // PAYDAY_ROUTER_V3"
  │                 │     └── [ Right: Live Execution Status ]
  │                 │           └── [ flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs ]
  │                 │                 └── <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> + "SIMULATION ACTIVE"
  │                 │
  │                 ├── [ Interactive 3-Node Logic Rail: grid grid-cols-1 md:grid-cols-3 gap-3 my-6 ]
  │                 │     ├── [ Node 1: Inflow Trigger (Clickable) ]
  │                 │     │     └── State: activeInflowIndex (e.g. $3,200 vs $4,500 vs $6,000)
  │                 │     │     └── UI: Card border-amber-500/40 bg-amber-500/5 p-3.5 rounded-lg hover:border-amber-500 cursor-pointer
  │                 │     │           ├── Top: <DollarSign className="w-4 h-4 text-amber-400" /> + "01 · IF PAYDAY"
  │                 │     │           └── Value: font-mono text-lg font-bold text-stone-100 ($3,200.00)
  │                 │     ├── [ Node 2: Route & Buffer Split ]
  │                 │     │     └── State: bufferRate (e.g. 15% Buffer / 35% Savings)
  │                 │     │     └── UI: Card border-emerald-500/40 bg-emerald-500/5 p-3.5 rounded-lg
  │                 │     │           ├── Top: <Zap className="w-4 h-4 text-emerald-400" /> + "02 · SPLIT LOGIC"
  │                 │     │           └── Value: font-mono text-sm text-stone-200 ("Auto-Split: 40% Save / 10% Buff")
  │                 │     └── [ Node 3: Target Allocation ]
  │                 │           └── State: investmentTarget (e.g. Index Fund vs Emergency Vault)
  │                 │           └── UI: Card border-sky-500/40 bg-sky-500/5 p-3.5 rounded-lg
  │                 │                 ├── Top: <TrendingUp className="w-4 h-4 text-sky-400" /> + "03 · LIQUIDITY SHIELD"
  │                 │                 └── Value: font-mono text-sm text-stone-200 ("Zero-Deficit Guarantee")
  │                 │
  │                 └── [ Dynamic Backtest Projection Sandbox (SVG Canvas) ]
  │                       ├── [ Canvas Header: flex justify-between items-center text-xs font-mono text-stone-400 mb-2 ]
  │                       │     <span>90-DAY PROJECTION BACKTEST</span>
  │                       │     <span className="text-emerald-400 font-semibold tabular-nums">+${computedDelta}/QTR ACCELERATION</span>
  │                       └── [ Native SVG ViewBox 0 0 700 180: with path curves, area gradient, baseline comparison, cursor hover point ]
```

---

### 3.3 Real App Sandbox Section (`frontend/src/components/example/AiPlanDemo.tsx` + `AutomationDemo.tsx` or Unified Sandbox)

An interactive, high-density dashboard simulator that lets visitors experience the two core application views without logging in:
- **Tab 1: Your Plans (`/home`)**: Real-time plan cards with target progress bars, category breakdown chips, allocated monthly spend, and active automation triggers.
- **Tab 2: Plan Ledger (`/plan`)**: Dynamic categorized ledger entries, live simulated transaction stream with pending/executed states, and net surplus calculation.

#### Layout Specification
```
[ Sandbox Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ]
  ├── [ Section Header: text-center max-w-2xl mx-auto mb-10 ]
  │     ├── [ Badge: font-mono text-xs text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full ] -> "AUTHENTIC APPLICATION INTERFACE"
  │     ├── [ Heading: text-3xl font-bold text-stone-100 mt-3 ] -> "Inspect the Operating System"
  │     └── [ Subhead: text-stone-400 text-sm mt-2 ] -> "Switch views to see how Senzen plans structure income and enforce real-time discipline."
  │
  ├── [ Viewport Frame: rounded-xl bg-[#141210] border border-stone-800 shadow-2xl overflow-hidden ]
  │     ├── [ Tab Bar Header: bg-[#171412] px-6 py-3 border-b border-stone-800 flex items-center justify-between ]
  │     │     ├── [ Tab Switcher: flex items-center gap-2 bg-stone-900/90 p-1 rounded-lg border border-stone-800 ]
  │     │     │     ├── [ Tab 1 Button: "Your Plans (/home)" -> active: bg-stone-800 text-stone-100, inactive: text-stone-400 ]
  │     │     │     └── [ Tab 2 Button: "Plan Ledger (/plan)" -> active: bg-stone-800 text-stone-100, inactive: text-stone-400 ]
  │     │     └── [ Live Ping: font-mono text-xs text-stone-400 flex items-center gap-2 ]
  │     │           └── <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> + "SANDBOX FEED"
  │     │
  │     └── [ Tab Content Pane: p-6 sm:p-8 min-h-[420px] ]
  │           ├── [ TAB 1 CONTENT: Plans Grid (/home recreation) ]
  │           │     ├── [ Metric Cards Bar: 3x compact stats (Total Allocated, Safe-to-Spend, Buffer Cushion) ]
  │           │     └── [ Plan Cards Grid: 2-col interactive cards ]
  │           │           ├── Card A: "Primary Growth & Ops" ($4,200/mo) with progress bar 68%, 4 active rules, auto-save status: LIVE
  │           │           └── Card B: "Short-Term Buffer Vault" ($1,500/mo) with progress bar 92%, emergency liquidity cap
  │           │
  │           └── [ TAB 2 CONTENT: Plan Ledger (/plan recreation) ]
  │                 ├── [ Category Allocation Summary: 4x Category Pills with spend percentage bars ]
  │                 └── [ Live Transaction Feed: Table with timestamp, vendor, category badge, amount, and automated route tag ]
```

---

### 3.4 Features & Architecture Bento Grid (`frontend/src/components/example/HighlightsBand.tsx` & Grid)

High-density architectural breakdown structured as an asymmetric bento grid. Each tile demonstrates a quantitative platform capability with concrete numerical telemetry.

```
[ Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ]
  ├── [ Grid Header: max-w-2xl mx-auto text-center mb-14 ]
  │     ├── [ Badge: font-mono text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full ] -> "DETERMINISTIC ADVANTAGE"
  │     └── [ Heading: text-3xl sm:text-4xl font-bold text-stone-100 mt-3 ] -> "Engineered for Complete Capital Certainty."
  │
  └── [ Bento Grid: grid grid-cols-1 md:grid-cols-3 gap-6 ]
        ├── [ Card 1 (Span 2 Cols): 90-Day Deterministic Backtester ]
        │     └── [ bg-[#171412] border border-stone-800 hover:border-amber-500/40 rounded-xl p-6 transition-all ]
        │           ├── [ Top Tag: font-mono text-xs text-amber-400 ] -> "01 // BACKTEST ENGINE"
        │           ├── [ Title: text-xl font-bold text-stone-100 mt-2 ] -> "Dry-Run Against Real Historical Volatility"
        │           ├── [ Description: text-stone-400 text-sm mt-1 mb-4 ] -> "Verify every conditional trigger against 90 days of prior transactions before committing real funds."
        │           └── [ Mini Visual: SVG Step Chart comparing Senzen Automated Path vs Unstructured Drift ]
        │
        ├── [ Card 2 (Span 1 Col): Dynamic Buffer Shield ]
        │     └── [ bg-[#171412] border border-stone-800 hover:border-emerald-500/40 rounded-xl p-6 transition-all ]
        │           ├── [ Top Tag: font-mono text-xs text-emerald-400 ] -> "02 // VOLATILITY SHIELD"
        │           ├── [ Title: text-xl font-bold text-stone-100 mt-2 ] -> "Elastic Buffer Reserves"
        │           ├── [ Description: text-stone-400 text-sm mt-1 mb-4 ] -> "Irregular expenses absorb cleanly without breaking monthly targets or triggering deficit loops."
        │           └── [ Mini Visual: Live Health Gauge indicating 99.4% Solvency Cushion ]
        │
        ├── [ Card 3 (Span 1 Col): Sub-Second Payday Routing ]
        │     └── [ bg-[#171412] border border-stone-800 hover:border-sky-500/40 rounded-xl p-6 transition-all ]
        │           ├── [ Top Tag: font-mono text-xs text-sky-400 ] -> "03 // INSTANT DISPATCH"
        │           ├── [ Title: text-xl font-bold text-stone-100 mt-2 ] -> "Zero-Latency Routing"
        │           ├── [ Description: text-stone-400 text-sm mt-1 mb-4 ] -> "Direct deposits evaluate through the logic engine and route instantly across buckets."
        │           └── [ Mini Visual: Visual pipeline nodes with execution timestamps ]
        │
        └── [ Card 4 (Span 2 Cols): AI Natural Language Compiler ]
              └── [ bg-[#171412] border border-stone-800 hover:border-amber-500/40 rounded-xl p-6 transition-all ]
                    ├── [ Top Tag: font-mono text-xs text-amber-400 ] -> "04 // SYNTACTIC COMPILER"
                    ├── [ Title: text-xl font-bold text-stone-100 mt-2 ] -> "Plain English to Strict Logic Blocks"
                    ├── [ Description: text-stone-400 text-sm mt-1 mb-4 ] -> "Describe your financial objectives casually. Senzen extracts variables, constraints, and automated triggers."
                    └── [ Mini Visual: Interactive typing terminal prompt converting prompt -> rule AST ]
```

---

### 3.5 FAQ Section (`frontend/src/components/example/FaqSection.tsx`)

Dark restyled accordion utilizing standard primitives with clean expand/collapse state, subtle border transitions, and razor-sharp financial explanations.

```
[ Container: max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ]
  ├── [ Header: text-center mb-12 ]
  │     ├── [ Badge: font-mono text-xs text-stone-400 uppercase tracking-wider ] -> "CLEAR SPECIFICATIONS"
  │     └── [ Heading: text-3xl font-bold text-stone-100 mt-2 ] -> "Frequently Answered Questions"
  │
  └── [ Accordion Stack: space-y-3 ]
        ├── [ Item 1: How does Senzen differ from traditional budgeting apps? ]
        │     └── Answer explaining rule-based automation vs passive backward-looking expense tagging.
        ├── [ Item 2: Do I have to move my primary bank accounts? ]
        │     └── Answer clarifying that Senzen sits as an intelligent logic layer over existing checking & savings.
        ├── [ Item 3: What happens when an irregular emergency occurs? ]
        │     └── Answer breaking down the elastic buffer hold mechanism.
        ├── [ Item 4: How are my credentials and data secured? ]
        │     └── Answer stating 256-bit encryption, read-only tokenization, and strict data isolation.
```

---

### 3.6 Footer (`frontend/src/components/example/Footer.tsx`)

Clean dark multi-column footer with copyright notice, system status indicator, route navigation links, and brand tagline.

```
[ Footer Container: w-full border-t border-stone-800/80 bg-[#0C0A09] text-stone-400 text-sm py-16 ]
  └── [ Inner: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 ]
        ├── [ Col 1 & 2 (Brand): space-y-4 ]
        │     ├── [ Logo Wordmark: font-bold text-stone-100 text-lg ] -> "Senzen"
        │     ├── [ Tagline: text-stone-400 text-xs max-w-sm leading-relaxed ] -> "The sovereign financial operating system. Rule-driven budgeting, algorithmic routing, and deterministic wealth velocity."
        │     └── [ System Status: flex items-center gap-2 font-mono text-xs text-emerald-400 ] -> <span className="w-2 h-2 rounded-full bg-emerald-500" /> "All Systems Operational"
        ├── [ Col 3 (Platform): space-y-2.5 ]
        │     <div className="font-semibold text-stone-200 text-xs font-mono uppercase tracking-wider">Platform</div>
        │     ├── a href="#sandbox" -> "Logic Engine"
        │     ├── a href="#demo" -> "Interactive Sandbox"
        │     ├── a href="/createPlan" -> "Plan Builder"
        │     └── a href="/pricing" -> "Plans & Tiers"
        ├── [ Col 4 (Resources): space-y-2.5 ]
        │     <div className="font-semibold text-stone-200 text-xs font-mono uppercase tracking-wider">Architecture</div>
        │     ├── a href="#features" -> "Deterministic Rules"
        │     ├── a href="#faq" -> "Security & Encryption"
        │     └── a href="/docs" -> "Documentation"
        └── [ Col 5 (Legal): space-y-2.5 ]
              <div className="font-semibold text-stone-200 text-xs font-mono uppercase tracking-wider">Sovereignty</div>
              ├── a href="/privacy" -> "Privacy Policy"
              ├── a href="/terms" -> "Terms of Protocol"
              └── span text-xs text-stone-400 -> "© 2026 Senzen Inc."
```

---

## 4. Typography & Labels Guidelines (with Explicit BANNED List)

### Font Scale & Letter Spacing
- **Display Hero**: `text-5xl sm:text-6xl font-bold tracking-tight text-stone-100` (`tracking-[-0.035em]`)
- **Section Headings**: `text-3xl sm:text-4xl font-bold tracking-tight text-stone-100` (`tracking-[-0.025em]`)
- **Card Headings**: `text-lg sm:text-xl font-semibold text-stone-100` (`tracking-[-0.015em]`)
- **Body Text**: `text-sm sm:text-base text-stone-400 font-normal leading-relaxed`
- **Technical Badges / Data**: `font-mono text-xs tabular-nums uppercase tracking-wider`

### BANNED Marketing Slop Vocabulary
The following buzzwords and fluff terms are **strictly prohibited** across all copy, labels, and micro-copy:
- ❌ **"AI-Powered Magic" / "Magic" / "Revolutionary"** -> Use: **"Deterministic Logic" / "Automated Rules"**
- ❌ **"Next-Gen / Supercharge your wallet"** -> Use: **"Programmable Capital Management"**
- ❌ **"Effortless / Seamless / Frictionless"** -> Use: **"Sub-Second Payday Routing" / "Zero-Intervention"**
- ❌ **"Game-changing / Disruptive"** -> Use: **"Deterministic Execution"**
- ❌ **"Smart AI / Mind-blowing insights"** -> Use: **"Quantitative Telemetry" / "Backtested Projections"**

---

## 5. Background & Texture Specification

All visual depth is achieved through CSS gradients and embedded SVG filter noise. **Zero external graphics or runtime shader libraries.**

### 1. Warm Aurora Radial Mesh (`Tailwind / CSS`)
```css
/* Placed at container root */
background-color: #0C0A09;
background-image: 
  radial-gradient(at 50% 0%, rgba(245, 158, 11, 0.10) 0px, transparent 60%),
  radial-gradient(at 100% 20%, rgba(16, 185, 129, 0.06) 0px, transparent 50%),
  radial-gradient(at 0% 50%, rgba(56, 189, 248, 0.05) 0px, transparent 50%);
```

### 2. Embedded SVG Turbulence Noise Data URI
To prevent network waterfalls or canvas overhead, noise is rendered via an inline CSS SVG background:
```css
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");
```

---

## 6. Anti-Slop Hard Gate Checklist

Before declaring any section implementation complete, the following gates must be verified:

- [ ] **Contrast Verification**: All body text on `#0C0A09` or `#141210` must meet WCAG AA contrast (Stone-300 `#D6D3D1` or Stone-400 `#A8A29E` minimum).
- [ ] **Tabular Alignment**: Every monetary quantity (e.g., `$3,200.00`, `+18.4%`) must have `font-mono tabular-nums`.
- [ ] **Zero Floating Card Slop**: No generic floating cards with generic gradient borders that do not correspond to actual app data or real user actions.
- [ ] **Interactive Responsiveness**: All interactive sandbox chips, toggles, and view tabs must respond instantly to mouse clicks with zero layout shift.
- [ ] **Zero Dependency Compliance**: Verify `package.json` contains no additions (`framer-motion`, `three`, `chart.js`, etc.).
- [ ] **Height Integrity**: Ensure `min-h-[100dvh]` on Hero does not produce double scrollbars or overflow clipping on mobile viewports (`100dvh` supported).

---

## 7. File Map & Modification Strategy

```
frontend/src/
├── app/
│   └── (landingPage)/
│       ├── layout.tsx                # UPDATE: Ensure dark theme wrapper (bg-[#0C0A09] text-stone-100)
│       └── page.tsx                  # UPDATE: Section order: Navbar -> HeroComposer -> AiPlanDemo (Interactive Sandbox) -> HighlightsBand (Bento) -> FaqSection -> Footer
└── components/
    └── example/
        ├── Navbar.tsx                # UPDATE: Full dark restyle, frosted glass, amber CTA
        ├── HeroComposer.tsx          # UPDATE: Full dark rewrite with interactive 3-node sandbox & SVG dynamic curve
        ├── AiPlanDemo.tsx            # UPDATE: Multi-tab interactive sandbox (/home vs /plan view simulation)
        ├── HighlightsBand.tsx        # UPDATE: Bento architectural grid with telemetry cards
        ├── FaqSection.tsx            # UPDATE: Dark restyled accordion with clear copy
        ├── Footer.tsx                # UPDATE: Clean 5-column dark footer with system status indicator
        └── StatsProofRow.tsx         # UPDATE: Dark restyle with tabular numerical metrics
```
