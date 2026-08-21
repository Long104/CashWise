import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, LineChart, PiggyBank, ShieldCheck } from "lucide-react";

export function SpotlightPreview() {
	return (
		<section className="relative w-full bg-background overflow-hidden">
			{/* Editorial hairline rule motif */}
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
			
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left column — editorial headline */}
					<div className="flex flex-col">
						<p className="font-mono text-xs text-primary mb-6">
							01 / EXHIBIT A • LEDGER 2026
						</p>
						<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground">
							Master your cashflow with quiet clarity
						</h1>
						<p className="mt-6 font-sans text-lg md:text-xl leading-relaxed text-muted-foreground max-w-md">
							A calm, deliberate ledger for your money. Audit what you spend, plan what you keep, and preserve what matters — one honest line at a time.
						</p>
						
						<div className="mt-10 flex flex-col sm:flex-row gap-3">
							<Link href="/sign-up">
								<Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans shadow-sm w-full sm:w-auto">
									Start Planning
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							<Link href="/sign-in">
								<Button size="lg" variant="outline" className="border-border bg-card text-foreground hover:border-primary/40 font-sans w-full sm:w-auto">
									View a Ledger
								</Button>
							</Link>
						</div>
						
						<div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<LineChart className="h-4 w-4 text-accent" strokeWidth={1.5} />
								<span className="font-sans">Live tracking</span>
							</div>
							<div className="flex items-center gap-2">
								<PiggyBank className="h-4 w-4 text-accent" strokeWidth={1.5} />
								<span className="font-sans">Auto-save rules</span>
							</div>
							<div className="flex items-center gap-2">
								<ShieldCheck className="h-4 w-4 text-accent" strokeWidth={1.5} />
								<span className="font-sans">Private by design</span>
							</div>
						</div>
					</div>

					{/* Right column — live ledger card mockup */}
					<div className="relative">
						<Card className="bg-card border border-border shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)] rounded-lg">
							<CardHeader className="border-b border-border pb-4">
								<div className="flex items-center justify-between">
									<p className="font-mono text-xs text-muted-foreground tracking-wide">
										FIG. 01 — WEEKLY SURPLUS
									</p>
									<span className="font-mono text-xs text-primary">+12.4%</span>
								</div>
							</CardHeader>
							<CardContent className="pt-6">
								<div className="flex items-baseline justify-between mb-6">
									<span className="font-sans text-sm text-muted-foreground">Net this week</span>
									<span className="font-mono text-3xl font-semibold text-foreground tabular-nums">
										$1,284.50
									</span>
								</div>
								
								<div className="space-y-3">
									<LedgerRow label="Income" value="$3,200.00" tone="surplus" />
									<LedgerRow label="Fixed costs" value="$1,540.00" tone="neutral" />
									<LedgerRow label="Discretionary" value="$375.50" tone="neutral" />
									<LedgerRow label="Auto-saved" value="$420.00" tone="surplus" />
								</div>
								
								<div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
									<span className="font-sans text-xs text-muted-foreground">Projected month-end</span>
									<span className="font-mono text-lg font-medium text-accent tabular-nums">$5,140.00</span>
								</div>
							</CardContent>
						</Card>
						
						{/* Secondary stamp motif */}
						<div className="absolute -bottom-4 -left-4 hidden md:block">
							<div className="bg-secondary border border-border rounded-md px-3 py-2 shadow-sm">
								<p className="font-mono text-[10px] text-muted-foreground">
									02 / BALANCED
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function LedgerRow({ label, value, tone }: { label: string; value: string; tone: "surplus" | "neutral" }) {
	return (
		<div className="flex items-center justify-between py-1.5">
			<span className="font-sans text-sm text-muted-foreground">{label}</span>
			<div className="flex items-center gap-2">
				<span
					className={`h-1.5 w-1.5 rounded-full ${
						tone === "surplus" ? "bg-[hsl(var(--color-surplus-olive))] dark:bg-[hsl(var(--color-surplus-olive))]" : "bg-border"
					}`}
				/>
				<span className="font-mono text-sm text-foreground tabular-nums">{value}</span>
			</div>
		</div>
	);
}
