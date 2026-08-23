"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Play, DollarSign, Zap, TrendingUp } from "lucide-react";

export function HeroComposer() {
	const [activeInflow, setActiveInflow] = useState(3200);
	const computedDelta = Math.round((activeInflow * 0.4 * 3) / 100) * 100;

	return (
		<section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-[#0C0A09] pt-24 pb-16" id="sandbox">
			{/* Background Layers: Ambient Warm Aurora + SVG Turbulence Noise */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Warm Aurora Radial Mesh */}
				<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/12 via-emerald-500/5 to-transparent blur-[120px] pointer-events-none" />
				<div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay" />
			</div>

			{/* Content Container */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
				{/* Header Stack */}
				<div className="max-w-3xl mx-auto text-center space-y-5 mb-12">
					{/* Pill Badge */}
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-wide uppercase">
						<Sparkles className="w-3.5 h-3.5" />
						<span>Senzen Engine 3.0 Live</span>
					</div>

					{/* Headline */}
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-[1.08]">
						Meet{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400">
							Senzen
						</span>
					</h1>

					{/* Sub-headline */}
					<p className="text-base sm:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
						Build automated money rules with logic, backtest your budget, then execute—all in one place.
					</p>

					{/* CTA Button Group */}
					<div className="flex flex-wrap items-center justify-center gap-4 pt-2">
						<Link
							href="/createPlan"
							className="bg-amber-500 hover:bg-amber-400 text-stone-950 px-6 py-3 rounded-lg font-semibold text-sm shadow-xl shadow-amber-500/15 flex items-center gap-2 transition-all"
						>
							<span>Build Your Routine</span>
							<ArrowRight className="w-4 h-4" />
						</Link>

						<Link
							href="#demo"
							className="bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-800 px-6 py-3 rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
						>
							<Play className="w-4 h-4 text-emerald-400" />
							<span>Explore Interactive Model</span>
						</Link>
					</div>
				</div>

				{/* Product Centerpiece: The Interactive Composer Sandbox */}
				<div className="max-w-4xl mx-auto rounded-xl bg-[#141210]/90 border border-stone-800/80 shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative">
					{/* Sandbox Header */}
					<div className="flex items-center justify-between pb-6 border-b border-stone-800">
						<div className="flex items-center gap-3">
							<div className="flex gap-1.5">
								<span className="w-2.5 h-2.5 rounded-full bg-stone-800" />
								<span className="w-2.5 h-2.5 rounded-full bg-stone-800" />
								<span className="w-2.5 h-2.5 rounded-full bg-stone-800" />
							</div>
							<span className="font-mono text-xs uppercase tracking-wider text-stone-400">
								Simulation Active
							</span>
						</div>

						<div className="flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
							<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
							<span>Simulation Active</span>
						</div>
					</div>

					{/* Interactive 3-Node Logic Rail */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
						{/* Node 1: Inflow Trigger (Clickable) */}
						<button
							type="button"
							onClick={() => setActiveInflow(activeInflow === 3200 ? 4500 : activeInflow === 4500 ? 6000 : 3200)}
							className="text-left border border-amber-500/40 bg-amber-500/5 p-3.5 rounded-lg hover:border-amber-500/80 transition-colors"
						>
						<div className="flex items-center gap-2 mb-1">
							<DollarSign className="w-4 h-4 text-amber-400" />
							<span className="font-mono text-xs text-amber-400">When payday arrives</span>
						</div>
							<div className="font-mono text-lg font-bold text-stone-100 tabular-nums">
								${activeInflow.toLocaleString()}.00
							</div>
						</button>

						{/* Node 2: Route & Buffer Split */}
						<div className="border border-emerald-500/40 bg-emerald-500/5 p-3.5 rounded-lg">
							<div className="flex items-center gap-2 mb-1">
								<Zap className="w-4 h-4 text-emerald-400" />
								<span className="font-mono text-xs text-emerald-400">Split 70/30</span>
							</div>
							<div className="font-mono text-sm text-stone-200">
								Auto-Split: 40% Save / 10% Buff
							</div>
						</div>

						{/* Node 3: Target Allocation */}
						<div className="border border-sky-500/40 bg-sky-500/5 p-3.5 rounded-lg">
							<div className="flex items-center gap-2 mb-1">
								<TrendingUp className="w-4 h-4 text-sky-400" />
								<span className="font-mono text-xs text-sky-400">Liquidity Shield</span>
							</div>
							<div className="font-mono text-sm text-stone-200">
								Zero-Deficit Guarantee
							</div>
						</div>
					</div>

					{/* Dynamic Backtest Projection Sandbox (SVG Canvas) */}
					<div>
						<div className="flex justify-between items-center text-xs font-mono text-stone-400 mb-2">
							<span>90-Day Projection Backtest</span>
							<span className="text-emerald-400 font-semibold tabular-nums">
								+{computedDelta.toLocaleString()}/Qtr Acceleration
							</span>
						</div>
						<svg
							className="w-full h-40 rounded-lg bg-stone-900/50 border border-stone-800/50 p-4"
							viewBox="0 0 700 160"
						>
							<defs>
								<linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="#F59E0B" />
									<stop offset="50%" stopColor="#10B981" />
									<stop offset="100%" stopColor="#38BDF8" />
								</linearGradient>
							</defs>
							<path
								d="M 20 130 C 150 120, 250 80, 400 60 C 500 45, 600 30, 680 15"
								fill="none"
								stroke="url(#curveGrad)"
								strokeWidth="2.5"
								strokeLinecap="round"
							/>
							<path
								d="M 20 130 C 150 128, 250 120, 400 115 C 500 110, 600 105, 680 100"
								fill="none"
								stroke="#44403C"
								strokeWidth="1.5"
								strokeDasharray="4 4"
							/>
							<circle cx="400" cy="60" r="4" fill="#10B981" />
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}