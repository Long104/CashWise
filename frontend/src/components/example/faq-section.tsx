"use client";

import React, { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Plus } from "lucide-react";

const faqs = [
	{
		question: "Do I need to connect my bank?",
		answer: "No. Senzen is manual by design — you log expenses daily and track progress yourself.",
	},
	{
		question: "What is a plan?",
		answer: "A plan is a budget with a duration and categories. Create one, set budgets, then track spending against it.",
	},
	{
		question: "What does auto-save do?",
		answer: "It's a per-plan toggle. When on, Senzen nudges you to stay on track — it doesn't move money automatically.",
	},
	{
		question: "How is this different from a spreadsheet?",
		answer: "Plans, budgets, categories, and a daily ledger in one place — with progress bars that keep you honest.",
	},
];

export function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="w-full bg-[#EEEEEE]">
			<div className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28">
				<h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A] text-center">
					Questions, answered
				</h2>
				<div className="mt-12 md:mt-16 divide-y divide-[#E5E5E5] border-t border-[#E5E5E5]">
					{faqs.map((faq, index) => (
						<Collapsible
							key={faq.question}
							open={openIndex === index}
							onOpenChange={(open) => setOpenIndex(open ? index : null)}
						>
							<CollapsibleTrigger className="group py-6 flex w-full items-center justify-between gap-6 text-left">
								<span className="font-medium text-base md:text-lg text-[#0A0A0A]">
									{faq.question}
								</span>
								<Plus
									className={`h-5 w-5 shrink-0 text-[#0A0A0A] transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
								/>
							</CollapsibleTrigger>
							<CollapsibleContent>
								<p className="pb-6 pr-10 text-base leading-relaxed text-[#333333]">
									{faq.answer}
								</p>
							</CollapsibleContent>
						</Collapsible>
					))}
				</div>
			</div>
		</section>
	);
}
