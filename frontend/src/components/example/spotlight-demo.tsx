import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroComposer() {
	return (
		<section className="relative w-full bg-[#EEEEEE] overflow-hidden">
			<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-28 pb-16 md:pb-24">
				<div className="w-full max-w-6xl mx-auto flex flex-col items-start text-left">
					{/* Headline block: solid green slab with dot-matrix texture, sliced by "Senzen" */}
					<div className="relative w-full flex flex-col items-start justify-start">
					{/* Solid green slab with dot-matrix texture — sharp rectangle behind headline only */}
					<div
						aria-hidden="true"
						className="absolute left-[16%] top-[26%] z-0 w-[300px] h-[130px] md:w-[460px] md:h-[200px] lg:w-[560px] lg:h-[260px] bg-[#1EC072]"
						style={{
							backgroundImage: "radial-gradient(circle, rgba(10,10,10,0.14) 2.5px, transparent 2.5px)",
							backgroundSize: "14px 14px",
							backgroundPosition: "center",
						}}
					/>
						{/* Pink swatch (top-right of headline zone) */}
						<div
							aria-hidden="true"
							className="absolute right-[8%] top-[-12px] z-0 h-16 w-10 md:h-24 md:w-14 rounded-xl bg-[#FFB8D2]"
						/>
						{/* Blue accent (bottom-left of headline zone) */}
						<div
							aria-hidden="true"
							className="absolute left-0 bottom-[-28px] z-0 h-10 w-10 md:h-14 md:w-14 rounded-full bg-[#0047FF]"
						/>

						{/* Headline */}
					<h1 className="relative z-10 font-sans font-extrabold text-[#0A0A0A] leading-[0.9]">
						<span className="block text-3xl md:text-5xl lg:text-6xl tracking-tight mb-1">
							Meet
						</span>
						<span className="block text-[4.5rem] md:text-[9rem] lg:text-[12rem] tracking-tighter">
							Senzen
						</span>
					</h1>
					</div>

					{/* Subtitle */}
					<p className="mt-12 text-lg md:text-xl leading-relaxed text-[#333333] max-w-[34rem]">
						Build automated money rules with logic, backtest your budget, then execute—all in one place.
					</p>

					{/* Primary CTA */}
					<div className="mt-10">
						<Link href="/sign-up" className="group inline-flex items-center gap-2 rounded-full bg-black text-white text-lg px-8 py-4 hover:bg-neutral-800 transition-all active:scale-[0.98] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
							Get started
							<ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export function StatsProofRow() {
	const stats = [
		{ value: "$12M+", label: "Managed cashflow" },
		{ value: "45k+", label: "Plans executed" },
		{ value: "100%", label: "Automated rules" },
	];

	return (
		<section className="w-full bg-[#EEEEEE] pb-16 md:pb-20">
			<div className="max-w-4xl mx-auto px-6 md:px-10">
				<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5] border-y border-[#E5E5E5]">
					{stats.map((stat) => (
						<div key={stat.label} className="text-center py-8 sm:py-10 sm:px-8 first:sm:pl-0 last:sm:pr-0">
							<div className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-2 tabular-nums tracking-tight">
								{stat.value}
							</div>
							<div className="text-xs font-medium uppercase tracking-[0.08em] text-[#555555]">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
