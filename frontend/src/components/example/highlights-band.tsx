"use client";

export function HighlightsBand() {
	return (
		<section className="py-20 sm:py-28" id="features">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Grid Header */}
				<div className="max-w-2xl mx-auto text-center mb-14">
					<span className="font-mono text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
						DETERMINISTIC ADVANTAGE
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mt-3 tracking-tight">
						Engineered for Complete Capital Certainty.
					</h2>
				</div>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Card 1: 90-Day Deterministic Backtester (Span 2 Cols) */}
					<div className="md:col-span-2 bg-[#171412] border border-stone-800 hover:border-amber-500/40 rounded-xl p-6 transition-all">
						<span className="font-mono text-xs text-amber-400">01 // BACKTEST ENGINE</span>
						<h3 className="text-xl font-bold text-stone-100 mt-2">Dry-Run Against Real Historical Volatility</h3>
						<p className="text-stone-400 text-sm mt-1 mb-4 leading-relaxed">
							Verify every conditional trigger against 90 days of prior transactions before committing real funds.
						</p>
						{/* Mini Visual: SVG Step Chart comparing Senzen Automated Path vs Unstructured Drift */}
						<svg
							className="w-full h-32 rounded-lg bg-stone-900/50 border border-stone-800/50 p-4"
							viewBox="0 0 400 120"
						>
							<path
								d="M0 100 L50 80 L100 85 L150 60 L200 65 L250 40 L300 35 L350 15 L400 10"
								fill="none"
								stroke="#F59E0B"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<path
								d="M0 100 L50 95 L100 92 L150 88 L200 86 L250 84 L300 82 L350 81 L400 80"
								fill="none"
								stroke="#57534E"
								strokeWidth="1.5"
								strokeDasharray="4 3"
								strokeLinecap="round"
							/>
						</svg>
					</div>

					{/* Card 2: Dynamic Buffer Shield */}
					<div className="bg-[#171412] border border-stone-800 hover:border-emerald-500/40 rounded-xl p-6 transition-all">
						<span className="font-mono text-xs text-emerald-400">02 // VOLATILITY SHIELD</span>
						<h3 className="text-xl font-bold text-stone-100 mt-2">Elastic Buffer Reserves</h3>
						<p className="text-stone-400 text-sm mt-1 mb-4 leading-relaxed">
							Irregular expenses absorb cleanly without breaking monthly targets or triggering deficit loops.
						</p>
						{/* Mini Visual: Live Health Gauge indicating 99.4% Solvency Cushion */}
						<div className="relative flex items-center justify-center py-4">
							<svg viewBox="0 0 100 100" className="w-24 h-24">
								<circle cx="50" cy="50" r="40" fill="none" stroke="#292524" strokeWidth="8" />
								<circle
									cx="50"
									cy="50"
									r="40"
									fill="none"
									stroke="#10B981"
									strokeWidth="8"
									strokeDasharray="251.2"
									strokeDashoffset="1.5"
									strokeLinecap="round"
									transform="rotate(-90 50 50)"
								/>
							</svg>
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="font-mono font-bold text-emerald-400">99.4%</span>
							</div>
						</div>
						<div className="text-center font-mono text-xs text-stone-400 uppercase tracking-wider">
							Solvency Cushion
						</div>
					</div>

					{/* Card 3: Sub-Second Payday Routing */}
					<div className="bg-[#171412] border border-stone-800 hover:border-sky-500/40 rounded-xl p-6 transition-all">
						<span className="font-mono text-xs text-sky-400">03 // INSTANT DISPATCH</span>
						<h3 className="text-xl font-bold text-stone-100 mt-2">Zero-Latency Routing</h3>
						<p className="text-stone-400 text-sm mt-1 mb-4 leading-relaxed">
							Direct deposits evaluate through the logic engine and route instantly across buckets.
						</p>
						{/* Mini Visual: Visual pipeline nodes with execution timestamps */}
						<div className="space-y-2">
							<div className="flex items-center justify-between px-3 py-2 bg-stone-900/50 rounded-md border border-sky-500/20">
								<span className="font-mono text-xs text-sky-400">DEPOSIT_IN</span>
								<span className="font-mono text-xs text-stone-400 tabular-nums">00:00:01</span>
							</div>
							<div className="flex items-center justify-between px-3 py-2 bg-stone-900/50 rounded-md border border-sky-500/20">
								<span className="font-mono text-xs text-sky-400">SPLIT_EVAL</span>
								<span className="font-mono text-xs text-stone-400 tabular-nums">00:00:02</span>
							</div>
							<div className="flex items-center justify-between px-3 py-2 bg-stone-900/50 rounded-md border border-sky-500/20">
								<span className="font-mono text-xs text-sky-400">ROUTE_EXEC</span>
								<span className="font-mono text-xs text-stone-400 tabular-nums">00:00:02</span>
							</div>
						</div>
					</div>

					{/* Card 4: AI Natural Language Compiler (Span 2 Cols) */}
					<div className="md:col-span-2 bg-[#171412] border border-stone-800 hover:border-amber-500/40 rounded-xl p-6 transition-all">
						<span className="font-mono text-xs text-amber-400">04 // SYNTACTIC COMPILER</span>
						<h3 className="text-xl font-bold text-stone-100 mt-2">Plain English to Strict Logic Blocks</h3>
						<p className="text-stone-400 text-sm mt-1 mb-4 leading-relaxed">
							Describe your financial objectives casually. Senzen extracts variables, constraints, and automated triggers.
						</p>
						{/* Mini Visual: Interactive typing terminal prompt converting prompt to rule AST */}
						<div className="bg-stone-900/70 rounded-lg border border-stone-800 p-4 font-mono text-xs space-y-2">
							<div className="flex items-start gap-2">
								<span className="text-amber-400">&gt;</span>
								<span className="text-stone-300">
									Save $600 every month, but pause if my balance drops under $1,000
								</span>
							</div>
							<div className="border-t border-stone-800 pt-2 space-y-1">
								<div className="text-stone-400">rule AST compiled:</div>
								<div className="pl-3 text-emerald-400">target: $600/mo</div>
								<div className="pl-3 text-sky-400">guard: balance &gt; $1,000</div>
								<div className="pl-3 text-amber-400">trigger: payday + 0d</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}