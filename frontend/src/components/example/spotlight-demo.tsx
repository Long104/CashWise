import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroStatsBand() {
	return (
		<div className="w-full bg-[#EEEEEE] border-y border-[#E5E5E5]">
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5]">
					<div className="flex items-center justify-between sm:justify-center gap-4 py-5 sm:py-6">
						<span className="text-xl font-extrabold tracking-tight text-[#0A0A0A] tabular-nums">3 steps</span>
						<span className="font-mono text-xs uppercase tracking-widest text-[#555555]">Plan → Budget → Ledger</span>
					</div>
					<div className="flex items-center justify-between sm:justify-center gap-4 py-5 sm:py-6 sm:px-6">
						<span className="text-xl font-extrabold tracking-tight text-[#0A0A0A]">Every expense</span>
						<span className="font-mono text-xs text-[#555555]">Groceries · Transport · Eating out</span>
					</div>
					<div className="flex items-center justify-between sm:justify-center gap-4 py-5 sm:py-6 sm:px-6">
						<span className="text-xl font-extrabold tracking-tight text-[#0A0A0A] tabular-nums">$1,200 / $1,500</span>
						<span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#049F55]"><span className="h-1.5 w-1.5 rounded-full bg-[#1EC072]"/> on track</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export function HeroComposer() {
	return (
		<section className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden bg-[#EEEEEE] border-b border-[#E5E5E5]">
			<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

			<div className="relative z-10 w-full px-6 md:px-10 pt-6 pb-4 bg-[#EEEEEE]/90 backdrop-blur-sm border-b border-[#E5E5E5]">
				<p className="font-mono text-xs uppercase tracking-widest text-[#555555]">Plans · Budgets · Daily ledger</p>
			</div>

			<div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
				<div className="w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center py-10 lg:py-0">
					{/* LEFT: headline block */}
					<div className="w-full flex flex-col items-start text-left">
						<div aria-hidden="true" className="h-[2px] w-24 bg-[#0A0A0A]" />

						<h1 className="font-sans font-extrabold text-[#0A0A0A] leading-[0.9] mt-6">
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
								<span className="relative z-10 block text-[4.5rem] md:text-[8rem] lg:text-[10rem] font-extrabold tracking-tighter leading-[0.85]">
									Senzen
								</span>
							</span>
						</h1>

						<p className="mt-6 text-lg md:text-xl leading-relaxed text-[#333333] max-w-xl">
							Plan your money. Track every day. See yourself get ahead.
						</p>

						<div aria-hidden="true" className="mt-10">
							<Link href="/sign-up" className="group inline-flex items-center gap-2 rounded-full bg-black text-white text-base md:text-lg px-8 py-3.5 hover:bg-neutral-800 transition-all active:scale-[0.98] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
								Get started
								<ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
							</Link>
						</div>
					</div>

					{/* RIGHT: mascot slot */}
					<div className="relative w-full max-w-[360px] aspect-square mx-auto lg:max-w-[520px] lg:mx-0 lg:ml-auto">
						{/* dotted motif halo — emerald */}
						<div aria-hidden="true" className="absolute inset-0 z-0 rounded-[2rem] bg-[#1EC072] opacity-[0.14]"
							style={{ backgroundImage: "radial-gradient(circle, rgba(10,10,10,0.14) 2.5px, transparent 2.5px)", backgroundSize: "14px 14px" }} />
						{/* inner card — warm white */}
						<div className="absolute inset-[10%] z-10 rounded-[1.5rem] border border-[#E5E2DD] bg-white/90 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center p-8">
							<img src="/logo.png" alt="Senzen" className="h-24 w-24 object-contain opacity-90" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
