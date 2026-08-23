import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const beforeRows = [
	{ label: "Payday", amount: "$3,200" },
	{ label: "Checking", amount: "$3,200" },
	{ label: "Savings", amount: "$0" },
	{ label: "Buffer", amount: "$0" },
];

const afterRows = [
	{ label: "Checking", amount: "$2,240" },
	{ label: "Savings", amount: "$480", delta: true },
	{ label: "Buffer", amount: "$320", delta: true },
	{ label: "Invest", amount: "$160", delta: true },
];

export function AutomationDemo() {
	return (
		<section className="w-full bg-[#EEEEEE]">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
					<div className="md:order-1 w-full bg-white border border-[#E5E5E5] rounded-[8px] p-6 md:p-8">
						<p className="font-mono text-xs uppercase tracking-wider text-[#555555] mb-5">
							BEFORE · NO RULES
						</p>
						<div className="space-y-3">
							{beforeRows.map((row) => (
								<div key={row.label} className="flex items-center gap-3">
									<span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#BBBBBB]" />
									<span className="font-mono text-sm text-[#0A0A0A] tabular-nums">
										{row.label} {row.amount}
									</span>
								</div>
							))}
						</div>

						<div className="relative my-7">
							<div aria-hidden="true" className="h-px w-full bg-[#E5E5E5]" />
							<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 font-mono text-xs uppercase tracking-wider text-[#555555]">
								SENZEN ON
							</span>
						</div>

						<p className="font-mono text-xs uppercase tracking-wider text-[#555555] mb-5">
							AFTER · RULES LIVE
						</p>
						<div className="space-y-3">
							{afterRows.map((row) => (
								<div key={row.label} className="flex items-center gap-3">
									<span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#1EC072]" />
									<span className="font-mono text-sm text-[#0A0A0A] tabular-nums">
										{row.label} {row.amount}{" "}
										{row.delta ? (
										<span style={{ color: "#1EC072" }} aria-label="increase">
											▲
										</span>
									) : null}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="md:order-2">
						<h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]">
							Every payday, handled before you notice
						</h2>
						<p className="mt-6 text-base md:text-lg leading-relaxed text-[#333333] max-w-md">
							Rules fire the moment income lands. Money moves to savings, buffer, and investing before you open the app — a payday that runs itself.
						</p>
						<Link
							href="/home"
							className="mt-8 inline-flex items-center gap-2 font-medium text-[#0A0A0A] underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
						>
							See how rules run
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
