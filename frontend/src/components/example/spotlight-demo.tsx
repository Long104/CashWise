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
		<section className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden bg-[#EEEEEE]">
			<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />


			<div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center pb-[10vh] lg:pb-[14vh]">
				<div className="w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center py-10 lg:py-0">
					{/* LEFT: headline block */}
					<div className="w-full flex flex-col items-start text-left">
						<div aria-hidden="true" className="h-[2px] w-24 bg-[#0A0A0A]" />

						<h1 className="font-sans font-extrabold text-[#0A0A0A] leading-[0.9]">
							<span className="block text-3xl md:text-5xl lg:text-6xl tracking-tight">
								Meet
							</span>
							<span className="relative inline-block">
								<span
									aria-hidden="true"
									className="absolute right-[-1rem] md:right-[-2rem] bottom-[-0.5rem] z-0 block h-[52%] w-[72%] bg-[#1EC072]"
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

						<p className="mt-8 text-lg md:text-xl leading-relaxed text-[#333333] max-w-xl">
							Plan your money. Track every day. See yourself get ahead.
						</p>

						<div aria-hidden="true" className="mt-10">
							<Link href="/sign-up" className="group inline-flex items-center gap-2 rounded-full bg-black text-white text-base md:text-lg px-8 py-3.5 hover:bg-neutral-800 transition-all active:scale-[0.98] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
								Get started
								<ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
							</Link>
						</div>
					</div>

				{/* RIGHT: mascot slot — full-size floating, no container chrome */}
				<div className="relative w-full flex-1 min-h-[420px] lg:min-h-[540px]">
					{/* subtle dotted halo — flat, no box edge */}
					<div aria-hidden="true" className="absolute inset-0 z-0 opacity-[0.14]"
						style={{ backgroundImage: "radial-gradient(circle, #1EC072 3px, transparent 3px)", backgroundSize: "18px 18px" }} />
					<img src="/logo-hero.png" alt="Senzen" className="relative z-10 h-full w-full object-contain drop-shadow-2xl" />
				</div>
				</div>
			</div>
		</section>
	);
}
