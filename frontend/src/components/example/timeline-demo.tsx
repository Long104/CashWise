import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TrendingUp, Calendar, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TimelineDemo() {
	return (
		<section id="features" className="w-full py-24 bg-background relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				{/* Section header */}
				<div className="mb-20 text-center">
					<p className="font-mono text-xs text-[#1ec072] mb-4 uppercase tracking-wider">
						02 / FEATURES
					</p>
					<h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-[#101516]">
						Everything you need to plan better
					</h2>
				</div>

				{/* Feature grid: 3-column split */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
					{/* Feature 1: Automated Budgeting */}
					<Card className="bg-white border border-[#e5e2dd] rounded-[8px] shadow-sm hover:shadow-md transition-shadow">
						<CardHeader className="pb-2">
							<div className="w-10 h-10 rounded-md bg-[#1ec072]/10 flex items-center justify-center mb-4">
								<Target className="h-5 w-5 text-[#1ec072]" strokeWidth={2} />
							</div>
							<p className="font-sans font-semibold text-lg text-[#101516]">Automated Budgeting</p>
						</CardHeader>
						<CardContent>
							<p className="font-sans text-sm text-muted-foreground leading-relaxed">
								Set it once and let your money move itself. Rules route income to savings before you can spend it.
							</p>
						</CardContent>
					</Card>

					{/* Feature 2: Visual Logic Builder */}
					<Card className="bg-white border border-[#e5e2dd] rounded-[8px] shadow-sm hover:shadow-md transition-shadow">
						<CardHeader className="pb-2">
							<div className="w-10 h-10 rounded-md bg-[#1ec072]/10 flex items-center justify-center mb-4">
								<Calendar className="h-5 w-5 text-[#1ec072]" strokeWidth={2} />
							</div>
							<p className="font-sans font-semibold text-lg text-[#101516]">Visual Logic Builder</p>
						</CardHeader>
						<CardContent>
							<p className="font-sans text-sm text-muted-foreground leading-relaxed">
								Design financial strategies with simple IF/THEN blocks. No code required — just drag, drop, done.
							</p>
						</CardContent>
					</Card>

					{/* Feature 3: Real-time Ledger Intelligence */}
					<Card className="bg-white border border-[#e5e2dd] rounded-[8px] shadow-sm hover:shadow-md transition-shadow">
						<CardHeader className="pb-2">
							<div className="w-10 h-10 rounded-md bg-[#1ec072]/10 flex items-center justify-center mb-4">
								<TrendingUp className="h-5 w-5 text-[#1ec072]" strokeWidth={2} />
							</div>
							<p className="font-sans font-semibold text-lg text-[#101516]">Real-time Ledger Intelligence</p>
						</CardHeader>
						<CardContent>
							<p className="font-sans text-sm text-muted-foreground leading-relaxed">
								Watch balances, budgets, and savings update live. Know exactly where every dollar stands.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Interactive strategy builder demo */}
				<div id="strategies" className="bg-white border border-[#e5e2dd] rounded-[8px] p-8 md:p-12 shadow-sm">
					<div className="text-center space-y-8">
						<p className="font-mono text-xs text-[#1ec072] uppercase tracking-wider">STRATEGY BUILDER</p>
						<h3 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#101516]">
							Build a strategy in minutes
						</h3>
						<div className="max-w-xl mx-auto space-y-3 mt-8">
							{[
								{ step: "01", title: "Set a trigger", desc: "When monthly income arrives" },
								{ step: "02", title: "Define the logic", desc: "IF income > $5,000 → save 20%" },
								{ step: "03", title: "Watch it run", desc: "Money moves automatically, every cycle" },
							].map((item) => (
								<div key={item.step} className="flex items-start gap-4 text-left bg-[#f6f2ee] rounded-md p-4 border border-[#e5e2dd]">
									<span className="font-mono text-xs font-bold text-[#1ec072] pt-0.5">{item.step}</span>
									<div>
										<p className="font-sans text-sm font-semibold text-[#101516]">{item.title}</p>
										<p className="font-sans text-sm text-muted-foreground">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
						<Link href="/createPlan">
							<Button size="lg" className="bg-[#1ec072] hover:bg-[#049f55] text-white font-sans shadow-sm px-6 h-12">
								Try It Now
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
