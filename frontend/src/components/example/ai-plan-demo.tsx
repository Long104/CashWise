import React from "react";
import Link from "next/link";

export function AiPlanDemo() {
	return (
		<section className="w-full bg-[#EEEEEE]">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
					<div>
						<h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]">
							Ask for a plan in plain language
						</h2>
						<p className="mt-6 text-base md:text-lg leading-relaxed text-[#333333] max-w-md">
							Describe what you want to save for — Senzen drafts the plan, budgets, and categories. You stay in control.
						</p>
						<Link
							href="/createPlan"
							className="mt-8 inline-flex items-center gap-2 font-medium text-[#0A0A0A] underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
						>
							Try the planner →
						</Link>
					</div>

					<div>
						<p className="text-lg leading-relaxed text-[#333333] mb-6 max-w-md">
							I want to save $600 over the next 3 months for a trip.
						</p>

						<div className="bg-white rounded-xl border border-[#E5E5E5] p-6 md:p-8 space-y-6 max-w-lg">
							<div>
								<p className="text-sm leading-relaxed text-[#0A0A0A]">Done. Here's your draft —</p>
								<div className="space-y-4">
									<p className="font-mono text-xs uppercase tracking-wider text-[#555555]">Plan · Family Trip · $2,000 · 3 months</p>
									<div className="space-y-2">
										<div className="flex items-center justify-between py-1.5">
											<span className="text-sm text-[#666666]">Budget</span>
											<span className="font-mono text-sm tabular-nums text-[#0A0A0A]">$600 saved / $2,000</span>
										</div>
										<div className="h-1.5 w-full rounded-full bg-[#E5E5E5] overflow-hidden">
											<div className="h-full w-[30%] rounded-full bg-[#1EC072]" />
										</div>
										<div className="flex items-center justify-between py-2">
											<span className="text-sm text-[#666666]">Auto-save</span>
											<span className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-[#F9F8F6] px-3 py-1 font-mono text-xs font-medium text-[#333333]">Off <span className="h-3 w-6 rounded-full bg-[#E5E5E5] relative"><span className="absolute left-0.5 top-0.5 h-2 w-2 rounded-full bg-white shadow" /></span> On</span>
										</div>
										<p className="font-mono text-xs leading-relaxed text-[#555555]">Auto-save is a per-plan toggle. Turn it on if you want Senzen to nudge you — it doesn't move money on its own.</p>
									</div>
								</div>
							</div>

							<div className="flex items-center gap-3 text-sm text-[#666666]">
								<span className="h-2 w-2 rounded-full bg-[#1EC072]" /> Draft ready · edit budgets & categories before you start
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}