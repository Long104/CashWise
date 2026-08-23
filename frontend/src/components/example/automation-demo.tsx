"use client";
import React, { useState } from "react";

export function AutomationDemo() {
	const [tab, setTab] = useState<"plans" | "ledger">("plans");
	return (
		<section className="w-full bg-[#EEEEEE] py-20 md:py-28 border-b border-[#E5E5E5]">
			<div className="max-w-7xl mx-auto px-6 md:px-10">
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

				<div className="max-w-5xl mx-auto bg-white rounded-xl border border-[#E5E2DD] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
					<div className="h-11 bg-[#F9F8F6] border-b border-[#E5E2DD] px-4 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<span className="h-2.5 w-2.5 rounded-full bg-[#E8E4DE] border border-[#E5E2DD]" />
							<span className="h-2.5 w-2.5 rounded-full bg-[#E5E2DD]" />
							<span className="h-2.5 w-2.5 rounded-full bg-[#DCD8D3]" />
							<span className="ml-2 font-mono text-xs font-medium tracking-tight text-[#555555]">Senzen — April Plan</span>
						</div>
						<div className="hidden sm:flex items-center gap-1 rounded-full bg-[#F9F8F6] border border-[#E5E2DD] p-1">
							<button
								onClick={() => setTab("plans")}
								className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${tab==="plans" ? "bg-[#0A0A0A] text-white" : "text-[#555555] hover:text-[#0A0A0A]"}`}>Plans</button>
							<button
								onClick={() => setTab("ledger")}
								className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${tab==="ledger" ? "bg-[#0A0A0A] text-white" : "text-[#555555] hover:text-[#0A0A0A]"}`}>Daily ledger</button>
						</div>
					</div>

					<div className="p-6 md:p-8 space-y-6">
						<div className="space-y-6">
							 {/* Tab 1 — Plans */}
							{tab === "plans" && (
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 md:p-6 bg-white">
									 {/* Card A: April Plan */}
									<div className="rounded-xl border border-[#E5E5E5] bg-white p-4">
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

									 {/* Card B: Family Trip */}
									<div className="rounded-xl border border-[#E5E5E5] bg-white p-4">
										<div className="flex items-start justify-between">
											<div>
												<p className="font-sans text-base font-semibold tracking-tight text-[#0A0A0A]">Family Trip</p>
												<p className="font-mono text-xs text-[#555555]">family · May 2026</p>
											</div>
											<span className="inline-flex items-center gap-1.5 rounded-full border border-[#1EC072]/30 bg-[#EBF9F1] px-2.5 py-1 font-mono text-xs font-medium text-[#049F55]">
												<span className="h-1.5 w-1.5 rounded-full bg-[#1EC072]" /> on track
											</span>
										</div>
										<div className="mt-4 space-y-2">
											<div className="flex items-center justify-between py-1">
												<span className="text-sm text-[#666666]">Budget</span>
												<span className="font-mono text-sm tabular-nums text-[#0A0A0A]">$2,000</span>
											</div>
											<div className="flex items-center justify-between py-1">
												<span className="text-sm text-[#666666]">Saved so far</span>
												<span className="font-mono text-sm tabular-nums text-[#0A0A0A]">$800 / $2,000</span>
											</div>
											<div className="h-1.5 w-full rounded-full bg-[#E5E5E5] overflow-hidden">
												<div className="h-full w-[40%] rounded-full bg-[#1EC072]" />
											</div>
											<div className="flex items-center justify-between py-1">
												<span className="text-sm text-[#666666]">Auto-save</span>
												<span className="inline-flex items-center gap-1.5 font-mono text-sm text-[#0A0A0A]"><span className="h-1.5 w-1.5 rounded-full bg-[#1EC072]" /> Disabled</span>
											</div>
										</div>
									</div>

									 {/* Card C: Buffer */}
									<div className="rounded-xl border border-[#E5E5E5] bg-white p-4">
										<div className="flex items-start justify-between">
											<div>
												<p className="font-sans text-base font-semibold tracking-tight text-[#0A0A0A]">Buffer</p>
												<p className="font-mono text-xs text-[#555555]">personal · Apr 2026</p>
											</div>
											<span className="inline-flex items-center gap-1.5 rounded-full border border-[#1EC072]/30 bg-[#EBF9F1] px-2.5 py-1 font-mono text-xs font-medium text-[#049F55]">
												<span className="h-1.5 w-1.5 rounded-full bg-[#1EC072]" /> on track
											</span>
										</div>
										<div className="mt-4 space-y-2">
											<div className="flex items-center justify-between py-1">
												<span className="text-sm text-[#666666]">Budget</span>
												<span className="font-mono text-sm tabular-nums text-[#0A0A0A]">$600</span>
											</div>
											<div className="flex items-center justify-between py-1">
												<span className="text-sm text-[#666666]">Saved so far</span>
												<span className="font-mono text-sm tabular-nums text-[#0A0A0A]">$600 / $600</span>
											</div>
											<div className="h-1.5 w-full rounded-full bg-[#E5E5E5] overflow-hidden">
												<div className="h-full w-full rounded-full bg-[#1EC072]" />
											</div>
											<div className="flex items-center justify-between py-1">
												<span className="text-sm text-[#666666]">Auto-save</span>
												<span className="inline-flex items-center gap-1.5 font-mono text-sm text-[#0A0A0A]"><span className="h-1.5 w-1.5 rounded-full bg-[#1EC072]" /> Enabled</span>
											</div>
										</div>
									</div>
								</div>
							)}

							 {/* Tab 2 — Daily ledger */}
							{tab === "ledger" && (
								<div className="p-5 md:p-6 bg-white space-y-5">
									<div className="flex items-center justify-between py-1">
										<span className="text-sm text-[#666666]">Total Expenses</span>
										<span className="font-mono text-2xl font-semibold tabular-nums text-[#0A0A0A]">$342.50</span>
									</div>

									<div className="text-sm text-[#666666] mb-3">
										Groceries $128.40 · Transport $42.00 · Eating out $86.10 · Utilities $86.00
									</div>

								 {/* Category Chips */}
									<div className="flex gap-2 mb-4">
										<button
											role="button"
											className="rounded-full border border-[#E5E5E5] bg-[#F9F8F6] px-3 py-1 font-mono text-xs font-medium text-[#333333] hover:bg-[#EBF9F1]"
										>Groceries</button>
										<button
											role="button"
											className="rounded-full border border-[#E5E5E5] bg-[#F9F8F6] px-3 py-1 font-mono text-xs font-medium text-[#333333] hover:bg-[#EBF9F1]"
										>Transport</button>
										<button
											role="button"
											className="rounded-full border border-[#E5E5E5] bg-[#F9F8F6] px-3 py-1 font-mono text-xs font-medium text-[#333333] hover:bg-[#EBF9F1]"
										>Eating out</button>
										<button
											role="button"
											className="rounded-full border border-[#E5E5E5] bg-[#F9F8F6] px-3 py-1 font-mono text-xs font-medium text-[#333333] hover:bg-[#EBF9F1]"
										>Utilities</button>
									</div>

								 {/* Transaction Rows */}
									<div className="space-y-3 border-b border-[#E5E5E5] last:border-0">
										<div className="flex items-center justify-between py-3">
											<div className="flex items-center gap-3">
												<div className="h-8 w-8 rounded-full bg-[#F9F8F6] border border-[#E5E2DD]"></div>
												<span className="text-sm font-medium text-[#0A0A0A]">Groceries</span>
											</div>
											<span className="font-mono text-xs text-[#555555]">2026-04-08</span>
											<span className="text-xs text-[#666666]">Weekly shop</span>
											<span className="font-mono text-sm font-medium tabular-nums text-[#0A0A0A]">$64.20</span>
										</div>

										<div className="flex items-center justify-between py-3">
											<div className="flex items-center gap-3">
												<div className="h-8 w-8 rounded-full bg-[#F9F8F6] border border-[#E5E2DD]"></div>
												<span className="text-sm font-medium text-[#0A0A0A]">Transport</span>
											</div>
											<span className="font-mono text-xs text-[#555555]">2026-04-09</span>
											<span className="text-xs text-[#666666]">Bus pass</span>
											<span className="font-mono text-sm font-medium tabular-nums text-[#0A0A0A]">$28.00</span>
										</div>

										<div className="flex items-center justify-between py-3">
											<div className="flex items-center gap-3">
												<div className="h-8 w-8 rounded-full bg-[#F9F8F6] border border-[#E5E2DD]"></div>
												<span className="text-sm font-medium text-[#0A0A0A]">Eating out</span>
											</div>
											<span className="font-mono text-xs text-[#555555]">2026-04-10</span>
											<span className="text-xs text-[#666666]">Lunch</span>
											<span className="font-mono text-sm font-medium tabular-nums text-[#0A0A0A]">$18.50</span>
										</div>

										<div className="flex items-center justify-between py-3">
											<div className="flex items-center gap-3">
												<div className="h-8 w-8 rounded-full bg-[#F9F8F6] border border-[#E5E2DD]"></div>
												<span className="text-sm font-medium text-[#0A0A0A]">Groceries</span>
											</div>
											<span className="font-mono text-xs text-[#555555]">2026-04-11</span>
											<span className="text-xs text-[#666666]">Market</span>
											<span className="font-mono text-sm font-medium tabular-nums text-[#0A0A0A]">$32.10</span>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>

					<div className="bg-[#F9F8F6] border-t border-[#E5E2DD] px-5 py-3 flex items-center justify-between">
						<span className="font-mono text-xs text-[#555555]">3 plans · 12 transactions · updated today</span>
						<span className="font-mono text-xs text-[#555555]">Auto-save is a per-plan toggle</span>
					</div>
				</div>
			</div>
		</section>
	);
}