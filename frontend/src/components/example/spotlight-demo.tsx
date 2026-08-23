import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroComposer() {
	return (
		<section className="relative w-full bg-[#EEEEEE] overflow-hidden">
			<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-28 pb-16 md:pb-24">
				<div className="w-full max-w-6xl mx-auto flex flex-col items-start text-left">
					<h1 className="font-sans font-extrabold text-[#0A0A0A] leading-[0.9]">
						<span className="block text-3xl md:text-5xl lg:text-6xl tracking-tight mb-1">
							Meet
						</span>
						<span className="relative inline-block">
							<span
								aria-hidden="true"
								className="absolute right-[-1rem] md:right-[-2rem] bottom-[-0.75rem] z-0 block h-[52%] w-[72%] bg-[#1EC072]"
								style={{
									backgroundImage:
										"radial-gradient(circle, rgba(10,10,10,0.12) 2.5px, transparent 2.5px)",
									backgroundSize: "14px 14px",
								}}
							/>
							<span className="relative z-10 block text-[4.5rem] md:text-[9rem] lg:text-[12rem] tracking-tighter">
								Senzen
							</span>
						</span>
					</h1>

					<div aria-hidden="true" className="mt-6 h-[2px] w-32 bg-[#0A0A0A]" />

					<p className="mt-8 text-lg md:text-xl leading-relaxed text-[#333333] max-w-[34rem]">
						Build automated money rules with logic, backtest your budget, then execute—all in one place.
					</p>

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
						<div key={stat.label} className="flex flex-col items-center py-8 sm:py-10 sm:px-8 first:sm:pl-0 last:sm:pr-0">
							<div className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tabular-nums tracking-tight">
								{stat.value}
							</div>
							<div aria-hidden="true" className="mt-3 h-[3px] w-10 bg-[#1EC072]" />
							<div className="mt-3 text-xs font-medium uppercase tracking-[0.08em] text-[#555555]">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
