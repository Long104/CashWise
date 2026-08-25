import React from "react";
import Link from "next/link";

export function AiPlanDemo() {
	return (
		<section className="relative w-full overflow-hidden bg-[#EEEEEE]">

			<div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
					<div>
						<h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]">
							Ask for a{" "}
							<span className="relative inline-block">
								<span
									aria-hidden="true"
									className="absolute left-[-4%] bottom-[-0.35rem] z-0 block h-[44%] w-[108%] bg-[#F59E0B]"
									style={{
										backgroundImage:
											"radial-gradient(circle, rgba(10,10,10,0.12) 2.5px, transparent 2.5px)",
										backgroundSize: "14px 14px",
									}}
								/>
								<span className="relative z-10">plan</span>
							</span>{" "}
							in plain language
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

						<div className="space-y-6 max-w-lg">
							<div>
								<p className="text-sm leading-relaxed text-[#0A0A0A]">Done. Here's your draft —</p>
								<div className="space-y-4 mt-3">
									<p className="font-mono text-xs uppercase tracking-wider text-[#555555]">Plan · Family Trip · $2,000 · 3 months</p>
									<div className="space-y-2">
										<div className="flex items-center justify-between py-1.5">
											<span className="text-sm text-[#666666]">Budget</span>
											<span className="font-mono text-sm tabular-nums text-[#0A0A0A]">$600 saved / $2,000 · Saved 30%</span>
										</div>
										<div aria-hidden="true" className="h-[2px] w-full bg-[#0A0A0A]" />
										<p className="font-mono text-xs leading-relaxed text-[#555555] pt-1">Auto-save · per-plan — Off</p>
										<p className="font-mono text-xs leading-relaxed text-[#555555]">Turn it on if you want Senzen to nudge you — it doesn't move money on its own.</p>
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
