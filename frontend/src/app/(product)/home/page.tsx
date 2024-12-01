"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	DollarSign,
	ChevronRight,
	Info,
	Star,
	Users,
	Filter,
	Share,
	MoreHorizontal,
} from "lucide-react";
import { fetchPost, fetchGet, fetchDelete } from "@/fetch/client";
import { useRouter } from "next/navigation";
import useAuthStore from "@/zustand/auth";

import { usePlan } from "@/hooks/usePlan";
import { useEachPlan } from "@/hooks/useEachPlan";

export default function FinancialPlans() {
	const { plansQuery, deletePlanMutation } = usePlan();
	const { data: plans, isPending, error, refetch } = plansQuery;


	const users = useAuthStore((state) => state.user);
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
		<div className="min-h-screen dark:bg-gray-900">
			<div className="flex">
				<main className="flex-1 p-6 overflow-auto">
					<h1 className="text-3xl font-bold mb-6">Financial Plans Overview</h1>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{Array.isArray(plans) && plans?.length > 0
							? plans?.map((plan: any) => (
									<Card
										key={plan.id}
										className="hover:shadow-lg transition-shadow"
									>
										<CardHeader>
											<CardTitle className="text-pretty truncate flex justify-between w-full">
												<div className="w-34 whitespace-nowrap overflow-hidden truncate">
													{plan.name}
												</div>
												<Button
													variant="destructive"
													onClick={() => handleDeletePlan(plan?.id)}
												>
													X
												</Button>
											</CardTitle>
											<CardDescription>{plan.description}</CardDescription>
										</CardHeader>
										<CardContent>
											<Button
												variant="outline"
												className="w-full"
												onClick={() => {
													goToPlan(plan.name, plan.id);
												}}
											>
												View Details <ChevronRight className="ml-2 h-4 w-4" />
											</Button>
										</CardContent>
									</Card>
								))
							: ""}
					</div>
				</main>
			</div>
		</div>
	);
}
