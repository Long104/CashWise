# Senzen App Truth (ground truth for landing v2.1 copy) — from discover pass

## Honest Capability Verdict
The app is a basic personal money-management tool: create plans, set initial budgets, categorize expenses, track daily spending, view progress. Backend = simple CRUD (plan_handler.go CreatePlan/DeletePlan, transaction_handler.go CreateTransaction, basic REST). NO automated routing, NO backtesting, NO rule execution, NO bank integration. All "engine/backtest/execute" marketing is fiction.

## Real Feature Map (page by page)
- `/home` (product) — Plans overview: 3-col grid of plan cards; budgets, duration, auto-save status ("on track"/"behind"), "$412 saved · on track", "WK 32 · saved $412", "$1200 / $1500" progress bars
- `/createPlan` — form: name, description, type (personal/family/business), visibility, duration, initial budget, auto-save toggle
- `/plan/[...planId]` — daily expense ledger: category management, add/edit/delete transactions, spending breakdown, recent expenses
- `/viewPlan` — dashboard: balance, income/expenses/savings cards, expense pie chart, transaction history, budget overview progress bars (80%, 66%, 100%)

## Actual Vocabulary & Data Shapes
- Entities: Plan (plan_type, visibility, duration, auto_save, initial_budget), Budget (category, amount, remaining, dates), Category (name), Transaction (amount, date, description)
- UI words: Plan, Budget, Category, Transaction, Ledger, Auto-save, Initial Budget, on track, behind, saved-so-far, remaining, total expenses

## Landing Copy Offenders (delete/rewrite ALL) — file:line
spotlight-demo.tsx: 18 `[SYS_STATUS: ACTIVE]`, 19 PIPELINE strip, 20 EXECUTION_MODE, 27 `[01 // CASHFLOW_ENGINE]`, 53 "Build automated money rules with logic, backtest your budget, then execute—all in one place.", 73 "$12.8M+ Managed cashflow", 86 "45,210 Rules executed", 96 "100.0% Deterministic logic", 99 "NO AI GUESSWORK"
automation-demo.tsx: 9 `[AUTONOMOUS_LEDGER_SURFACE]`, 11-15 deterministic/state-machine copy, 27 `senzen-engine://production-rules-v1.4`, 32 LISTENER PORT, 40-48 TOTAL INFLOW/ALLOCATED/EXECUTION TIME, 66-123 fake rule ledger (ACH payroll, reserve sweep, S&P DCA), 130 [AUDIT_OK] hash line
ai-plan-demo.tsx: 44 `RULE · Auto-Save-600`
highlights-band.tsx: 6 "Backtest before you commit", 12 "Buffers absorb messy weeks", 17 "Zero spreadsheets", 22 "Read-only by design"
navbar.tsx: 14 "★ Meet Senzen: Automated financial rules without code"
footer.tsx: 50 "Automated money rules, executed weekly..."

## Truthful Positioning Candidates
1. "Plan your money. Track every day. See yourself get ahead." — plans + daily ledger + progress
2. "Money plans that run on habits, not spreadsheets." — plan/budget/ledger core loop
3. "Your budget, led day by day." — daily expense ledger + on-track progress

## Rules for the rewrite
- Hero stats must be product-honest (e.g. "Plans you can actually keep", "Every expense categorized", "Progress you can see") — NO invented metrics like $12.8M/45,210 rules
- OS-window card (warmwind.com style) must recreate REAL UI: plan card w/ progress bar ($1,200 / $1,500), budget categories (Groceries, Transport, Eating out…), recent transactions ledger rows with dates
- Auto-save may be mentioned only as a per-plan toggle (it exists), never as automatic bank routing
