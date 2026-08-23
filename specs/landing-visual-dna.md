# Landing Visual DNA Research (input for v3 spec)

Source: external research pass (composer.trade, warmwind.com, Awwwards SOTD 2025-2026 trends, Linear/Stripe hero patterns). This is INPUT for the detailed v3 design spec — the Designer turns this into the buildable spec.

## 1. Verdict & Strategic Direction
- **Card Concept**: Replace the static dual-card mock with a single, high-fidelity **interactive product sandbox** (Composer-style rule editor + live backtest curve).
- **Background**: Replace cold hairline grids with a **subtle warm-aurora gradient mesh with SVG noise texture**.
- **Aesthetic**: Warm, high-contrast fintech (Amber/Emerald/Obsidian) — clean, human, and product-accurate.
- **USER DECISIONS (locked)**: whole landing goes dark+colorful (not just hero); app demo = interactive recreation of real app pages (plans overview + rule/ledger), not screenshots.

## 2. Hero Section Anatomy (100dvh with fallback)
- Container: `w-full min-h-[100dvh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 relative overflow-hidden` (dvh prevents mobile address-bar clipping; user complained hero is "still not 100vh").
- Badge: pill style, soft amber tint (e.g. "Rule Automation Engine").
- Headline: keep current display font, `text-stone-100`, concise value prop.
- Dual CTAs: Primary `bg-amber-400 text-stone-950 hover:bg-amber-300 font-medium px-6 py-3 rounded-lg shadow-lg` + Secondary ghost `text-stone-300 border border-stone-800 hover:bg-stone-900 px-6 py-3 rounded-lg`. (User likes current buttons — keep their shape/weight, restyle color for dark.)
- Centerpiece: framed window `bg-[#121110]/90 border border-stone-800/80 rounded-2xl shadow-2xl backdrop-blur-xl` containing:
  - Interactive 3-node rule composer: `When: Payday arrives` → `Condition: Balance > $2,500` → `Action: Split 70% invest / 30% savings` (natural-language chips like composer.trade, NOT code, NOT brackets)
  - Live backtest projection curve that reacts to rule changes

## 3. Color System Tokens (whole landing)
- Background base: `#0C0A09` (warm stone-950)
- Surface L1: `#171412`; Surface L2 (cards): `#1C1917`
- Border: `#292524` (stone-800), active `#44403C` (stone-700)
- Accent primary (warmth/action): `#F59E0B` amber-500 / `#FBBF24` hover
- Accent success/execution: `#10B981` emerald-500 / `#34D399`
- Accent dynamic/metric (composer-teal family): `#38BDF8` sky-400
- Text primary: `#FAFAF9`; secondary: `#A8A29E`

## 4. Typography & Labels
- Keep existing font families (user likes fonts).
- Allowed micro-labels: semantic badges `text-xs font-medium text-stone-400 uppercase tracking-wider`; status pills `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs bg-emerald-950/50 text-emerald-400 border border-emerald-800/40`.
- **BANNED (user hates)**: bracket labels `[01 // CASHFLOW_ENGINE]`, `[SYS_STATUS: ACTIVE]` tickers, latency/pipeline strips, URI strings `senzen-engine://...`, `[PORT 8080]`, ledger hash stamps, `[AUDIT_OK]`, `[AUTONOMOUS_LEDGER_SURFACE]`.

## 5. Second Section: Real App Demo (interactive recreation)
- Format: switchable 2-step tabs or split flow:
  - Tab 1 "Your plans": recreation of real app /home — plan cards with progress, amounts, rule counts
  - Tab 2 "Plan in action": recreation of /plan ledger — executed allocations with real date stamps, amounts, category chips, success states
- Model on real app components (app-sidebar plan list, LedgerRow, transaction rows) — explore `(product)/home/page.tsx`, `(product)/plan/[...planId]/page.tsx`, `(product)/createPlan/page.tsx` for exact structure/copy.

## 6. Anti-Slop Checklist (hard gate)
- No `[...]` bracket labels, no `//` separator labels, no `[PORT ...]`, no hash/audit stamps
- No fake URI schemes
- No purple/violet AI-gradient glow
- No static dual-card walls / generic table rows the user already rejected twice
- 100dvh hero verified on desktop AND mobile emulation
- Every section restyled to the dark warm palette (no half-dark page)

## 7. Reference citations
- composer.trade [official]: natural-language rule chips, backtest curves, dark surfaces #0B0F17/#131B2E, teal #00E599/#00D4FF, amber #FFB238
- warmwind.com [secondary]: warm stone/terracotta #1C1917/#F5F0EB/#C4804A, human-centered UI
- Awwwards SOTD 2025-26 [secondary]: aurora/mesh + noise grain > hairline grids; interactive widgets in hero; 100dvh standard
- linear.app / stripe [official]: real-product-in-hero framing
