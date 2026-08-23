"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "How does Senzen differ from traditional budgeting apps?",
		answer:
			"Traditional budgeting tools rely on passive, retroactive expense tracking. Senzen uses deterministic rule-based logic to actively orchestrate your cash flow the moment income lands, eliminating manual intervention.",
	},
	{
		question: "Do I have to move my primary bank accounts?",
		answer:
			"No. Senzen operates as an intelligent logic layer connecting to your existing checking and savings accounts via secure, read-only connections. You retain full custody.",
	},
	{
		question: "What happens when an irregular emergency occurs?",
		answer:
			"Senzen features an elastic buffer hold mechanism. If a balance falls below your defined safety threshold, lower-priority automated rules dynamically pause to absorb the shock without triggering overdrafts.",
	},
	{
		question: "How are my credentials and data secured?",
		answer:
			"We enforce 256-bit encryption at rest and in transit, read-only tokenized banking connections, and strict data isolation. We never sell your financial data or execute unauthorized transfers.",
	},
];

export function FaqSection() {
	const [openIdx, setOpenIdx] = useState<number | null>(null);

	return (
		<section className="py-20 sm:py-28" id="faq">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
						<span className="font-mono text-xs text-stone-400 uppercase tracking-wider">
							Clear Specifications
						</span>
					<h2 className="text-3xl font-bold text-stone-100 mt-2 tracking-tight">
						Frequently Answered Questions
					</h2>
				</div>

				{/* Accordion Stack */}
				<div className="space-y-3">
					{faqs.map((faq, idx) => {
						const isOpen = openIdx === idx;
						return (
							<div
								key={faq.question}
								className="border border-stone-800/80 bg-[#141210] rounded-lg overflow-hidden transition-colors"
							>
								<button
									type="button"
									onClick={() => setOpenIdx(isOpen ? null : idx)}
									className="w-full px-6 py-4 text-left flex items-center justify-between text-stone-200 hover:text-stone-100 font-medium text-base transition-colors"
								>
									<span>{faq.question}</span>
									<ChevronDown
										className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
											isOpen ? "rotate-180 text-amber-400" : ""
										}`}
									/>
								</button>
								{isOpen && (
									<div className="px-6 pb-4 pt-1 text-sm text-stone-400 leading-relaxed border-t border-stone-800/50">
										{faq.answer}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}