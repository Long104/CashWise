import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const planRows = [
	"IF payday → route $300 → savings",
	"IF balance > $800 → move 50% excess → buffer",
	"ELSE → pause + notify",
];

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
							Senzen builds, runs, and adjusts money rules from one sentence — the same conversation you have in the planner, executed with mono precision.
						</p>
						<Link
							href="/createPlan"
							className="mt-8 inline-flex items-center gap-2 font-medium text-[#0A0A0A] underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
						>
							Try the planner
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>

					<div className="relative w-full bg-white border border-[#E5E5E5] rounded-[8px] overflow-hidden">
						<div
							aria-hidden="true"
							className="h-6 w-full"
							style={{
								backgroundImage:
									"radial-gradient(circle, rgba(10,10,10,0.08) 2.5px, transparent 2.5px)",
								backgroundSize: "14px 14px",
							}}
						/>
						<div className="p-6 md:p-8 space-y-6">
							<div className="flex justify-end">
								<p className="max-w-[80%] rounded-2xl bg-[#0A0A0A] px-5 py-3 text-sm leading-relaxed text-[#EEEEEE]">
									I take home $3,200 a month. Can I save $600 without thinking about it?
								</p>
							</div>

							<div className="max-w-[90%] rounded-2xl border border-[#E5E5E5] bg-white px-5 py-4 space-y-4">
								<p className="text-sm leading-relaxed text-[#0A0A0A]">
									Done. Here&apos;s your plan —
								</p>
								<div>
									<p className="font-mono text-xs uppercase tracking-wider text-[#555555] mb-3">
										RULE · AUTO-SAVE-600
									</p>
									<div className="space-y-3">
										{planRows.map((row) => (
											<div key={row} className="flex items-center gap-3">
												<span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#1EC072]" />
												<span className="font-mono text-sm text-[#0A0A0A]">{row}</span>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#1EC072]" />
								<span className="font-mono text-xs text-[#0A0A0A]">
									Plan ready · 3 rules · starts next payday
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
