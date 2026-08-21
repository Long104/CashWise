"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChevronRight, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";

import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { usePlan } from "@/hooks/usePlan";
import { z } from "zod";
import { PlanSchema } from "@/types";

export default function FinancialPlans() {
	type Plan = z.infer<typeof PlanSchema>;
	const { plansQuery, deletePlanMutation } = usePlan();
	const { data: plans, isLoading } = plansQuery;

	const router = useRouter();
	async function goToPlan(planName: string, planId: number) {
		try {
			const formattedPlanName = planName.replace(/ /g, "_");
			router.push(`/plan/${formattedPlanName}?id=${planId}`);
		} catch (error) {
			console.log("cannot go to plan", error);
		}
	}

	async function handleDeletePlan(id: number) {
		deletePlanMutation.mutate(id);
		try {
		} catch (error) {
			console.log("cannot delete plan", error);
		}
	}

	return (
		<div className="min-h-screen bg-background">
			<div className="flex">
				<main className="flex-1 p-6 overflow-auto">
					<div className="mb-8">
						<p className="font-mono text-xs text-primary mb-2">
							01 / YOUR LEDGERS
						</p>
						<h1 className="font-serif text-3xl font-normal tracking-tight text-foreground">
							Financial Plans Overview
						</h1>
						<p className="text-muted-foreground mt-2 font-sans">
							A calm, deliberate record of every plan you keep.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{isLoading
							? Array.from({ length: 3 }).map((_, i) => (
									<Card key={i} className="p-6 border border-border">
										<Skeleton className="h-6 w-3/4 mb-4" />
										<Skeleton className="h-4 w-1/2 mb-6" />
										<Skeleton className="h-10 w-full" />
									</Card>
								))
							: Array.isArray(plans) && plans.length > 0
								? plans.map((plan: Plan) => (
										<Card
											key={plan.id}
											className="bg-card border border-border hover:border-primary/40 transition-colors shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]"
										>
											<CardHeader className="flex flex-row items-start justify-between space-y-0">
												<div className="space-y-1">
													<CardTitle className="font-serif text-xl font-semibold tracking-tight truncate">
														{plan.name}
													</CardTitle>
													<CardDescription className="font-mono text-xs">
														{plan.plan_type || "Uncategorized"} •{" "}
														{plan.createdAt
															? new Date(plan.createdAt).toLocaleDateString()
															: "—"}
													</CardDescription>
												</div>
												<Button
													variant="ghost"
													size="icon"
													className="text-muted-foreground hover:text-destructive"
													onClick={() => handleDeletePlan(plan.id as number)}
												>
													<span className="sr-only">Delete</span>
													✕
												</Button>
											</CardHeader>
											<CardContent className="space-y-3">
												<LedgerRow label="Budget" value={plan.initial_budget ? `$${plan.initial_budget.toLocaleString()}` : "—"} />
												<LedgerRow label="Duration" value={plan.duration || "—"} />
												<LedgerRow
													label="Auto-save"
													value={plan.auto_save ? "Enabled" : "Disabled"}
													tone={plan.auto_save ? "surplus" : "muted"}
												/>
												<Button
													variant="outline"
													className="w-full mt-2 border-border hover:border-primary/40"
													onClick={() => {
														goToPlan(plan.name, plan.id as number);
													}}
												>
													View Details <ChevronRight className="ml-2 h-4 w-4" />
												</Button>
											</CardContent>
										</Card>
									))
								: (
										<div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
											<div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center mb-4">
												<BookOpen className="h-7 w-7 text-accent" strokeWidth={1.5} />
											</div>
											<p className="text-foreground font-serif text-xl mb-2">No active plans found</p>
											<p className="text-muted-foreground mb-6 font-sans max-w-sm">
												Begin your first editorial ledger — a calm, deliberate plan for your money.
											</p>
											<Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
												<Link href="/createPlan">Create Your First Plan</Link>
											</Button>
										</div>
									)}
					</div>
				</main>
			</div>
		</div>
	);
}

function LedgerRow({ label, value, tone = "neutral" }: { label: string; value: string; tone?: "surplus" | "neutral" | "muted" }) {
	return (
		<div className="flex items-center justify-between py-1.5">
			<span className="font-sans text-sm text-muted-foreground">{label}</span>
			<div className="flex items-center gap-2">
				<span
					className={`h-1.5 w-1.5 rounded-full ${
						tone === "surplus"
							? "bg-[hsl(var(--color-surplus-olive))] dark:bg-[hsl(var(--color-surplus-olive))]"
							: tone === "muted"
								? "bg-accent/40"
								: "bg-border"
					}`}
					/>
				<span className="font-mono text-sm text-foreground tabular-nums">{value}</span>
				</div>
		</div>
	);
}
