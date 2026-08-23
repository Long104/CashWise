import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ledgerRows = [
	{ label: "WK 32 · saved $412 · on track", onTrack: true, fill: "92%" },
	{ label: "WK 31 · saved $405 · on track", onTrack: true, fill: "88%" },
	{ label: "WK 30 · saved $398 · behind", onTrack: false, fill: "61%" },
	{ label: "WK 29 · saved $441 · on track", onTrack: true, fill: "100%" },
];

export function WeeklyClarity() {
	return (
		<section className="w-full bg-[#EEEEEE]">
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
					<div>
						<h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A]">
							Your money, one line a week
						</h2>
						<p className="mt-6 text-base md:text-lg leading-relaxed text-[#333333] max-w-md">
							Every week closes itself out — saved, spent, on-track or behind, in a single ledger line you&apos;ll actually read.
						</p>
						<Link
							href="/home"
							className="mt-8 inline-flex items-center gap-2 font-medium text-[#0A0A0A] underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
						>
							Open your ledger
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>

					<div className="w-full bg-white border border-[#E5E5E5] rounded-[8px] p-6 md:p-8">
						<div className="space-y-6">
							{ledgerRows.map((row) => (
								<div key={row.label}>
									<div className="flex items-center gap-3">
										<span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${row.onTrack ? "bg-[#1EC072]" : "bg-[#BBBBBB]"}`} />
										<span className="font-mono text-sm text-[#0A0A0A]">{row.label}</span>
									</div>
									<div className="mt-3 h-1 w-full rounded bg-[#E5E5E5]">
										<div className="h-1 rounded bg-[#1EC072]" style={{ width: row.fill }} />
									</div>
								</div>
							))}
						</div>
						<div className="mt-8 border-t border-[#E5E5E5] pt-5">
							<p className="font-mono text-xs uppercase tracking-wider text-[#555555]">
								STREAK · 3 WEEKS ON TRACK
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
