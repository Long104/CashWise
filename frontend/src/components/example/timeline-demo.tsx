import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TimelineDemo() {
	return (
		<section className="w-full py-24 bg-background relative overflow-hidden">
			{/* Editorial hairline rule motif */}
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
			
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				{/* Section header with chapter number */}
				<div className="mb-20">
					<p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
						[ EXHIBIT B • Timeline 2026 ]
					</p>
					<h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground">
						How it works
					</h2>
				</div>
				
				<div className="relative">
					{/* Vertical timeline line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border z-0" />
					
					<div className="space-y-24 relative z-10">
						{/* Step 1: AUDIT */}
						<div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
							<div className="w-full md:w-5/12 md:text-right order-2 md:order-1">
								<Card className="bg-card border border-border shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)] rounded-lg overflow-hidden">
									<CardHeader className="border-b border-border pb-4">
										<div className="flex items-center justify-between">
											<p className="font-mono text-xs text-muted-foreground tracking-wide">
												01 / AUDIT
											</p>
												<Badge variant="secondary" className="font-mono text-xs">2.3k users</Badge>
										</div>
									</CardHeader>
									<CardContent className="pt-6">
										<div className="space-y-4">
											<TimelineMetric label="Income tracked" value="$12,400" tone="surplus" />
											<TimelineMetric label="Expenses logged" value="$8,900" tone="neutral" />
											<TimelineMetric label="Saved this week" value="$1,340" tone="surplus" />
										</div>
										<Link href="/createPlan">
											<Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
												Begin Audit
												<ArrowRight className="ml-2 h-4 w-4" />
											</Button>
										</Link>
									</CardContent>
								</Card>
							</div>
							
							<div className="w-24 h-24 rounded-full bg-card border-2 border-border flex items-center justify-center z-20 relative">
								<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
									<span className="font-mono text-white font-medium">01</span>
								</div>
							</div>
							
							<div className="w-full md:w-5/12 order-1 md:order-2">
								<h3 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-4">
										Capture your data
								</h3>
								<p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
										Automatically sync bank feeds, categorize transactions, and establish baseline spending patterns.
									</p>
								</div>
							</div>
							
						{/* Step 2: PLAN */}
						<div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
							<div className="w-full md:w-5/12 md:text-left order-2 md:order-2">
								<Card className="bg-card border border-border shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)] rounded-lg overflow-hidden">
									<CardHeader className="border-b border-border pb-4">
										<div className="flex items-center justify-between">
											<p className="font-mono text-xs text-muted-foreground tracking-wide">
												02 / PLAN
											</p>
												<Badge variant="secondary" className="font-mono text-xs">3.1k users</Badge>
										</div>
									</CardHeader>
									<CardContent className="pt-6">
											<div className="space-y-4">
												<TimelineMetric label="Goals set" value="4 targets" tone="surplus" />
												<TimelineMetric label="Rules defined" value="12 rules" tone="neutral" />
												<TimelineMetric label="Alerts active" value="5 alerts" tone="neutral" />
											</div>
											<Link href="/createPlan">
												<Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
													Create Plan
													<ArrowRight className="ml-2 h-4 w-4" />
											</Button>
										</Link>
									</CardContent>
								</Card>
							</div>
							
							<div className="w-24 h-24 rounded-full bg-card border-2 border-border flex items-center justify-center z-20 relative">
								<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
									<span className="font-mono text-white font-medium">02</span>
								</div>
							</div>
							
							<div className="w-full md:w-5/12 md:text-right order-1 md:order-1">
								<h3 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-4">
										Design your strategy
								</h3>
								<p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
										Establish savings targets, allocate budget categories, and set up automated rules for your financial goals.
									</p>
								</div>
							</div>
							
						{/* Step 3: PRESERVE */}
						<div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
							<div className="w-full md:w-5/12 md:text-right order-2 md:order-1">
								<Card className="bg-card border border-border shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)] rounded-lg overflow-hidden">
									<CardHeader className="border-b border-border pb-4">
										<div className="flex items-center justify-between">
											<p className="font-mono text-xs text-muted-foreground tracking-wide">
												03 / PRESERVE
											</p>
												<Badge variant="secondary" className="font-mono text-xs">1.8k users</Badge>
										</div>
									</CardHeader>
									<CardContent className="pt-6">
											<div className="space-y-4">
												<TimelineMetric label="Money preserved" value="$45,200" tone="surplus" />
												<TimelineMetric label="Growth achieved" value="$3,120" tone="surplus" />
												<TimelineMetric label="Milestones met" value="127" tone="surplus" />
											</div>
											<Link href="/createPlan">
												<Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
													Start Preserving
													<ArrowRight className="ml-2 h-4 w-4" />
											</Button>
										</Link>
									</CardContent>
								</Card>
							</div>
							
							<div className="w-24 h-24 rounded-full bg-card border-2 border-border flex items-center justify-center z-20 relative">
								<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
									<span className="font-mono text-white font-medium">03</span>
								</div>
							</div>
							
							<div className="w-full md:w-5/12 md:text-left order-1 md:order-2">
								<h3 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-4">
										Achieve your goals
								</h3>
								<p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
										Watch your plans come to life with intelligent monitoring, automated insights, and preserved wealth.
									</p>
								</div>
							</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function TimelineMetric({ label, value, tone }: { label: string; value: string; tone: "surplus" | "neutral" }) {
	return (
		<div className="flex items-center justify-between py-2">
			<span className="font-sans text-sm text-muted-foreground">{label}</span>
			<div className="flex items-center gap-2">
				<span
					className={`h-1.5 w-1.5 rounded-full ${
						tone === "surplus" ? "bg-[#2D6A4F] dark:bg-[#4ADE80]" : "bg-border"
					}`}
				/>
				<span className="font-mono text-sm text-foreground tabular-nums">{value}</span>
				</div>
		</div>
	);
}
