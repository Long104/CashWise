"use client";

import React, { useState } from "react";
import Link from "next/link";

export function AiPlanDemo() {
	const [tab, setTab] = useState<'home' | 'plan'>('home');

	return (
		<section className="py-20 sm:py-28" id="demo">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center max-w-2xl mx-auto mb-10">
						<span className="font-mono text-xs text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
							System Interface
						</span>
					<h2 className="text-3xl font-bold text-stone-100 mt-3">Inspect the Operating System</h2>
					<p className="text-stone-400 text-sm mt-2">
						Switch views to see how Senzen plans structure income and enforce real-time discipline.
					</p>
				</div>

				{/* Viewport Frame */}
				<div className="rounded-xl bg-[#141210] border border-stone-800 shadow-2xl overflow-hidden">
					{/* Tab Bar Header */}
					<div className="bg-[#171412] px-6 py-3 border-b border-stone-800 flex items-center justify-between">
						<div className="flex items-center gap-2 bg-stone-900/90 p-1 rounded-lg border border-stone-800">
							{/* Tab 1: Your Plans (/home) */}
							<button
								type="button"
								onClick={() => setTab('home')}
								className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
									tab === 'home' ? 'bg-stone-800 text-stone-100' : 'text-stone-400'
								}`}
							>
								Your Plans (/home)
							</button>

							{/* Tab 2: Plan Ledger (/plan) */}
							<button
								type="button"
								onClick={() => setTab('plan')}
								className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
									tab === 'plan' ? 'bg-stone-800 text-stone-100' : 'text-stone-400'
								}`}
							>
								Plan Ledger (/plan)
							</button>
						</div>

						{/* Live Ping */}
						<span className="font-mono text-xs text-stone-400 flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
							Sandbox Feed
						</span>
					</div>

					{/* Tab Content Pane */}
					<div className="p-6 sm:p-8 min-h-[420px]">
						{/* TAB 1: Plans Grid (/home recreation) */}
						{tab === 'home' && (
							<div>
								<div className="grid grid-cols-3 gap-4 mb-6">
									{/* Metric Cards Bar: 3x compact stats */}
									<div className="bg-[#171412] border border-stone-800 rounded-xl p-3">
										<div className="font-mono text-xs text-stone-400 uppercase tracking-wider mb-1">Total Allocated</div>
										<div className="font-mono text-lg font-bold text-stone-100">$5,700.00/mo</div>
									</div>
									<div className="bg-[#171412] border border-stone-800 rounded-xl p-3">
										<div className="font-mono text-xs text-stone-400 uppercase tracking-wider mb-1">Safe-to-Spend</div>
										<div className="font-mono text-lg font-bold text-stone-100">$3,850.00/mo</div>
									</div>
									<div className="bg-[#171412] border border-stone-800 rounded-xl p-3">
										<div className="font-mono text-xs text-stone-400 uppercase tracking-wider mb-1">Buffer Cushion</div>
										<div className="font-mono text-lg font-bold text-stone-100">$2,100.00</div>
									</div>
								</div>

								{/* Plan Cards Grid: 2-col interactive cards */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{/* Card A: Primary Growth & Ops */}
									<div className="bg-[#171412] border border-stone-800 rounded-xl p-5 hover:border-amber-500/40 transition-colors">
										<div className="flex items-center justify-between mb-3">
											<div className="font-bold text-stone-100">Primary Growth & Ops</div>
											<div className="text-amber-400 font-medium text-sm">$4,200.00/mo</div>
										</div>
										<div className="h-2 bg-stone-800 rounded-full overflow-hidden mb-3">
											<div className="h-full bg-amber-500 rounded-full" style={{ width: '68%' }} />
										</div>
										<div className="flex justify-between text-xs text-stone-400">
											<span>68% allocated</span>
											<span className="text-amber-400">4 active rules</span>
											<span className="text-emerald-400">Auto-save: LIVE</span>
										</div>
									</div>

									{/* Card B: Short-Term Buffer Vault */}
									<div className="bg-[#171412] border border-stone-800 rounded-xl p-5 hover:border-emerald-500/40 transition-colors">
										<div className="flex items-center justify-between mb-3">
											<div className="font-bold text-stone-100">Short-Term Buffer Vault</div>
											<div className="text-emerald-400 font-medium text-sm">$1,500.00/mo</div>
										</div>
										<div className="h-2 bg-stone-800 rounded-full overflow-hidden mb-3">
											<div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }} />
										</div>
										<div className="flex justify-between text-xs text-stone-400">
											<span>92% allocated</span>
											<span className="text-emerald-400">Emergency liquidity cap</span>
										</div>
									</div>
								</div>
							</div>
						)}

						{/* TAB 2: Plan Ledger (/plan recreation) */}
						{tab === 'plan' && (
							<div>
								{/* Category Allocation Summary: 4x Category Pills with spend percentage bars */}
								<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
									<div className="bg-[#171412] border border-stone-800 rounded-xl p-3">
										<div className="font-mono text-xs text-amber-400 uppercase tracking-wider mb-1">Income</div>
										<div className="font-mono text-lg font-bold text-stone-100">40%</div>
										<div className="h-1.5 bg-stone-800 rounded-full overflow-hidden mt-2">
											<div className="h-full bg-amber-500 rounded-full" style={{ width: '40%' }} />
										</div>
									</div>
									<div className="bg-[#171412] border border-stone-800 rounded-xl p-3">
										<div className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-1">Buffer</div>
										<div className="font-mono text-lg font-bold text-stone-100">25%</div>
										<div className="h-1.5 bg-stone-800 rounded-full overflow-hidden mt-2">
											<div className="h-full bg-emerald-500 rounded-full" style={{ width: '25%' }} />
										</div>
									</div>
									<div className="bg-[#171412] border border-stone-800 rounded-xl p-3">
										<div className="font-mono text-xs text-sky-400 uppercase tracking-wider mb-1">Growth</div>
										<div className="font-mono text-lg font-bold text-stone-100">20%</div>
										<div className="h-1.5 bg-stone-800 rounded-full overflow-hidden mt-2">
											<div className="h-full bg-sky-500 rounded-full" style={{ width: '20%' }} />
										</div>
									</div>
									<div className="bg-[#171412] border border-stone-800 rounded-xl p-3">
										<div className="font-mono text-xs text-stone-400 uppercase tracking-wider mb-1">Reserve</div>
										<div className="font-mono text-lg font-bold text-stone-100">15%</div>
										<div className="h-1.5 bg-stone-800 rounded-full overflow-hidden mt-2">
											<div className="h-full bg-stone-600 rounded-full" style={{ width: '15%' }} />
										</div>
									</div>
								</div>

								{/* Live Transaction Feed: Table */}
								<div className="space-y-2 max-h-80 overflow-y-auto">
									<div className="font-mono text-xs uppercase tracking-wider text-stone-500 border-b border-stone-800 pb-2 grid grid-cols-12 gap-2">
										<span className="col-span-2">Time</span>
										<span className="col-span-4">Vendor</span>
										<span className="col-span-2">Category</span>
										<span className="col-span-2">Amount</span>
										<span className="col-span-2 text-right">Route</span>
									</div>

									<div className="py-2 border-b border-stone-800/40 grid grid-cols-12 gap-2 text-sm items-center">
										<span className="col-span-2 font-mono text-xs text-stone-400">14:32</span>
										<span className="col-span-4 text-stone-200">Direct Deposit</span>
										<span className="col-span-2 font-mono text-xs text-amber-400">Income</span>
										<span className="col-span-2 font-mono text-emerald-400 tabular-nums">+$4,200.00</span>
										<span className="col-span-2 text-right font-mono text-xs text-emerald-400">Auto-route → Buffer</span>
									</div>

									<div className="py-2 border-b border-stone-800/40 grid grid-cols-12 gap-2 text-sm items-center">
										<span className="col-span-2 font-mono text-xs text-stone-400">14:28</span>
										<span className="col-span-4 text-stone-200">Grocery Store</span>
										<span className="col-span-2 font-mono text-xs text-emerald-400">Buffer</span>
										<span className="col-span-2 font-mono text-stone-300 tabular-nums">-$89.43</span>
										<span className="col-span-2 text-right font-mono text-xs text-stone-400">Manual</span>
									</div>

									<div className="py-2 grid grid-cols-12 gap-2 text-sm items-center">
										<span className="col-span-2 font-mono text-xs text-stone-400">14:20</span>
										<span className="col-span-4 text-stone-200">Freelance Payment</span>
										<span className="col-span-2 font-mono text-xs text-amber-400">Income</span>
										<span className="col-span-2 font-mono text-emerald-400 tabular-nums">+$1,500.00</span>
										<span className="col-span-2 text-right font-mono text-xs text-sky-400">Auto-route → Growth</span>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}