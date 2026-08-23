import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroComposer() {
	return (
		<section className="relative w-full min-h-svh lg:h-screen flex flex-col justify-between bg-[#EEEEEE] overflow-hidden border-b border-[#E5E5E5]">
			<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

			<div className="relative z-10 w-full px-6 md:px-10 pt-6 pb-4 bg-[#EEEEEE]/90 backdrop-blur-sm border-b border-[#E5E5E5]">
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-[#555555]">
						<p>Plans · Budgets · Daily ledger</p>
					</div>
				</div>
			</div>

			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 flex-1 flex items-center">
				<div className="w-full max-w-6xl flex flex-col items-start text-left">
					<div aria-hidden="true" className="mt-6 h-[2px] w-24 bg-[#0A0A0A]" />

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
			</div>

			<div className="relative z-10 w-full bg-[#EEEEEE]/80 backdrop-blur-sm border-t border-[#E5E5E5]">
				<div className="max-w-7xl mx-auto px-6 md:px-10">
					<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5]">
						<div className="flex flex-col items-center py-8 sm:py-10 sm:px-8 first:sm:pl-0 last:sm:pr-0">
							<div className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] tabular-nums tracking-tight">
								3 steps
							</div>
							<div className="mt-3 text-xs font-medium uppercase tracking-[0.08em] text-[#555555]">
								Plan → Budget → Ledger
							</div>
							<div className="mt-3 font-mono text-xs text-[#555555]">
								No spreadsheets
							</div>
						</div>
						<div className="flex flex-col items-center py-8 sm:py-10 sm:px-8 first:sm:pl-0 last:sm:pr-0">
							<div className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] tabular-nums tracking-tight">
								Every expense
							</div>
							<div className="mt-3 text-xs font-medium uppercase tracking-[0.08em] text-[#555555]">
								Categorized daily
							</div>
							<div className="mt-3 font-mono text-xs text-[#555555]">
								Groceries · Transport · Eating out
							</div>
						</div>
						<div className="flex flex-col items-center py-8 sm:py-10 sm:px-8 first:sm:pl-0 last:sm:pr-0">
							<div className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] tabular-nums tracking-tight">
								$1,200 / $1,500
							</div>
							<div className="mt-3 text-xs font-medium uppercase tracking-[0.08em] text-[#555555]">
								Progress you can see
							</div>
							<div className="mt-3 font-mono text-xs text-[#555555]">
								· on track
								<span className="inline-flex items-center gap-1.5 rounded-full border border-[#1EC072]/30 bg-[#EBF9F1] px-2.5 py-1 font-mono text-xs font-medium text-[#049F55]">
									<span className="h-1.5 w-1.5 rounded-full bg-[#1EC072]" />&nbsp;on track
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function StatsProofRow() {
	// Stats are now inline in HeroComposer; this is kept for API compatibility
	return null;
}