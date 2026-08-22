import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function SpotlightPreview() {
	return (
		<section className="relative w-full bg-background overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 min-h-[calc(100vh-4rem)] flex items-center justify-center">
				<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
					{/* Left column — Composer bold sans headline */}
					<div className="lg:col-span-7 flex flex-col">
						<p className="font-mono text-xs text-[#1ec072] mb-6 uppercase tracking-wider">
							01 / COMPOSER
						</p>
						<h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#101516]">
							Build your money engine without code
						</h1>
						<p className="mt-6 font-sans text-lg md:text-xl leading-relaxed text-muted-foreground max-w-md">
							Build automated money rules without writing code.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row gap-4">
							<Link href="/sign-up">
								<Button size="lg" className="bg-[#1EC072] hover:bg-[#049F55] text-[#101516] font-sans font-semibold shadow-sm w-full sm:w-auto px-6 h-12 focus-visible:ring-[#1EC072] focus-visible:ring-offset-2">
									Get Started Free
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							<Link href="/pricing">
								<Button size="lg" variant="outline" className="border-[#e5e2dd] bg-background text-[#101516] hover:border-[#1EC072]/40 font-sans font-semibold w-full sm:w-auto px-6 h-12">
									Explore Strategies
								</Button>
							</Link>
						</div>
					</div>

					{/* Right column — live interactive product preview card */}
					<div className="lg:col-span-5 relative">
						<Card className="bg-white border border-[#e5e2dd] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_16px_rgba(0,0,0,0.02)] rounded-[8px]">
							<CardHeader className="border-b border-[#e5e2dd] pb-4">
								<div className="flex items-center justify-between">
									<p className="font-mono text-xs text-muted-foreground">
										STRATEGY BUILDER • LIVE EXAMPLE
									</p>
									<span className="font-mono text-xs text-[#1ec072]">LIVE</span>
								</div>
							</CardHeader>
							<CardContent className="pt-6">
									<div className="space-y-4">
										{/* Logic block example: IF monthly income > $5,000 -> Allocate 20% to Growth */}
										<div className="flex items-center gap-2 mb-4">
											<div className="w-2 h-2 rounded-full bg-[#1ec072] animate-pulse" />
											<p className="font-mono text-xs text-muted-foreground">IF monthly income &gt; $5,000 → Allocate 20% to Growth</p>
										</div>
										{/* Visual logic flow */}
										<div className="space-y-2">
											<div className="flex items-center gap-2">
												<div className="w-6 h-6 rounded border border-[#e5e2dd] bg-[#f6f2ee] flex items-center justify-center">
													<span className="font-mono text-xs font-bold text-[#1ec072]">+</span>
												</div>
												<p className="font-sans text-sm text-foreground">Income: $5,000</p>
											</div>
											<div className="flex items-center gap-2 ml-6">
												<div className="w-6 h-6 rounded border border-[#e5e2dd] bg-[#f6f2ee] flex items-center justify-center">
													<span className="font-mono text-xs font-bold text-[#1ec072]">+</span>
												</div>
												<p className="font-sans text-sm text-foreground">Allocate 20% = $1,000</p>
											</div>
											<div className="flex items-center gap-2 ml-6">
												<div className="w-6 h-6 rounded border border-[#e5e2dd] bg-[#f6f2ee] flex items-center justify-center">
													<span className="font-mono text-xs font-bold text-[#1ec072]">-</span>
												</div>
												<p className="font-sans text-sm text-foreground">Growth Fund: $1,000</p>
											</div>
										</div>
										{/* Stats row below logic */}
										<div className="mt-6 pt-4 border-t border-[#e5e2dd] grid grid-cols-3 gap-4">
											<div className="text-center">
												<p className="font-mono text-xs text-muted-foreground uppercase mb-1">Account Minimum</p>
												<p className="font-sans text-lg font-bold text-[#1ec072]">$0</p>
											</div>
											<div className="text-center">
												<p className="font-mono text-xs text-muted-foreground uppercase mb-1">Automated Logic</p>
												<p className="font-sans text-lg font-bold text-[#1ec072]">100%</p>
											</div>
											<div className="text-center">
												<p className="font-mono text-xs text-muted-foreground uppercase mb-1">Real-time</p>
												<p className="font-sans text-lg font-bold text-[#1ec072]">Tracking</p>
											</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
