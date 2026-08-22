import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ruleRows = [
	"IF income > $2,500",
	"→ allocate 20% to savings",
	"→ route 10% to buffer",
	"ELSE → hold in buffer",
];

const ledgerRows = [
	"WK 32 · saved $412 · on track",
	"WK 31 · saved $405 · on track",
	"WK 30 · saved $398 · behind",
	"WK 29 · saved $441 · on track",
];

function LogicBlock({ title, rows }: { title: string; rows: string[] }) {
	return (
		<div className="w-full bg-white border border-[#E5E5E5] rounded-[8px] p-6 md:p-8">
			<p className="font-mono text-xs uppercase tracking-wider text-[#555555] mb-6">
				{title}
			</p>
			<div className="space-y-4">
				{rows.map((row) => (
					<div key={row} className="flex items-center gap-3">
						<span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#1EC072]" />
						<span className="font-mono text-sm text-[#0A0A0A]">{row}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export function TimelineDemo() {
	return (
		<section id="features" className="w-full bg-[#EEEEEE]">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
					<div>
						<h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]">
							Rules that run themselves
						</h2>
						<p className="mt-6 text-base md:text-lg leading-relaxed text-[#333333] max-w-md">
							Define a rule once and Senzen enforces it every payday. Income lands, allocations fire, and leftovers wait in a buffer — no spreadsheets, no willpower required.
						</p>
						<Link
							href="/createPlan"
							className="mt-8 inline-flex items-center gap-2 font-medium text-[#0A0A0A] underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
						>
							Build your first rule
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
					<LogicBlock title="RULE · PAYDAY-SPLIT" rows={ruleRows} />
				</div>
			</div>

			<div
				aria-hidden="true"
				className="h-12 w-full"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(10,10,10,0.08) 2.5px, transparent 2.5px)",
					backgroundSize: "14px 14px",
				}}
			/>

			<div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
					<div className="md:order-2">
						<h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]">
							See every week clearly
						</h2>
						<p className="mt-6 text-base md:text-lg leading-relaxed text-[#333333] max-w-md">
							Every week gets its own ledger line. Savings, rule hits, and spending roll into one clear view, so you always know if you are on track — no end-of-month surprises.
						</p>
						<Link
							href="/home"
							className="mt-8 inline-flex items-center gap-2 font-medium text-[#0A0A0A] underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
						>
							See your ledger
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
					<div className="md:order-1">
						<LogicBlock title="LEDGER · LAST 4 WEEKS" rows={ledgerRows} />
					</div>
				</div>
			</div>
		</section>
	);
}
