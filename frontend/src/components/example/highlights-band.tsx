import React from "react";

const highlights = [
	{
		number: "01",
		title: "Plans for real life",
		body: "Name it, set a budget, pick a duration.",
		span: "md:col-span-3",
	},
	{
		number: "02",
		title: "Budgets by category",
		body: "Groceries, Transport, Eating out — your call.",
		span: "md:col-span-2",
	},
	{
		number: "03",
		title: "Daily ledger",
		body: "Log expenses as you go. Every entry counts.",
		span: "md:col-span-2",
	},
	{
		number: "04",
		title: "Progress you can see",
		body: "$1,200 / $1,500 · on track. Stay motivated.",
		span: "md:col-span-3",
	},
];

const rowBorders = [
	"border-b border-[#E5E5E5]",
	"border-b border-[#E5E5E5]",
	"border-b border-[#E5E5E5] md:border-b-0",
	"",
];

export function HighlightsBand() {
	return (
		<section className="w-full border-y border-[#E5E5E5] bg-[#EEEEEE]">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
				<p className="font-mono text-xs uppercase tracking-wider text-[#555555]">
					MORE FROM SENZEN
				</p>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-5 md:gap-x-12">
					{highlights.map((item, i) => (
						<div key={item.number} className={`py-8 md:py-10 ${item.span} ${rowBorders[i]}`}>
							<div className="flex items-center gap-3">
								<span className="font-mono text-sm text-[#555555]">{item.number}</span>
								<span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#1EC072]" />
								<h3 className="font-sans text-lg md:text-xl font-semibold tracking-tight text-[#0A0A0A]">
									{item.title}
								</h3>
							</div>
							<p className="mt-3 text-sm md:text-base leading-relaxed text-[#333333] md:pl-[3.75rem]">
								{item.body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
