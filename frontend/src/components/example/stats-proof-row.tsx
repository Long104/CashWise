"use client";

import React from "react";

export function StatsProofRow() {
	return (
		<section className="py-20 sm:py-28 bg-[rgb(12,10,9)]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-3 gap-6 md:gap-8 mb-10">
					{/* Metric 1: Total Allocated */}
					<div className="bg-[#141210] border border-stone-800/80 rounded-xl p-5 text-center">
						<div className="font-mono text-3xl font-bold text-amber-400 tabular-nums">$5,700.00</div>
						<div className="font-mono text-xs text-stone-500 uppercase tracking-wider mb-1">Total Allocated</div>
					</div>

					{/* Metric 2: Safe-to-Spend */}
					<div className="bg-[#141210] border border-stone-800/80 rounded-xl p-5 text-center">
						<div className="font-mono text-3xl font-bold text-emerald-400 tabular-nums">$3,850.00</div>
						<div className="font-mono text-xs text-stone-500 uppercase tracking-wider mb-1">Safe-to-Spend</div>
					</div>

					{/* Metric 3: Buffer Cushion */}
					<div className="bg-[#141210] border border-stone-800/80 rounded-xl p-5 text-center">
						<div className="font-mono text-3xl font-bold text-sky-400 tabular-nums">$2,100.00</div>
						<div className="font-mono text-xs text-stone-500 uppercase tracking-wider mb-1">Buffer Cushion</div>
					</div>
				</div>
			</div>
		</section>
	);
}