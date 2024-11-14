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

type Plan = {
	id: number;
	name: string;
	description: string;
	details: string;
	tip: string;
};

export default function FinancialPlans() {
	const [plans, setPlans] = useState<Plan[]>([]);
	const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

	useEffect(() => {
		async function fetchPlans() {
			try {
				const response = await fetchGet("plans");
				setPlans(response);
				if (response.length > 0) {
					setSelectedPlan(response[0]);
				}
			} catch (error) {
				console.error("Failed to fetch plans:", error);
			}
		}

		fetchPlans();
	}, []);

	const router = useRouter();
	async function goToPlan(id: number) {
		try {
			router.push(`/plan/${id}`);
		} catch (error) {
			console.log("cannot go to plan", error);
		}
	}

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
			<div className="bg-[#1e1e2e] text-white">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-center justify-between h-16 px-4">
						<div className="flex items-center space-x-4">
							<h1 className="text-xl font-semibold">Financial Plans</h1>
							<Star className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
							<Users className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
							<Button
								variant="secondary"
								className="bg-[#2a2a3c] text-white hover:bg-[#3a3a4c]"
							>
								Board
							</Button>
						</div>
						<div className="flex items-center space-x-4">
							<Filter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
							<div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
								AA
							</div>
							<Button
								variant="secondary"
								className="bg-[#2a2a3c] text-white hover:bg-[#3a3a4c]"
							>
								<Share className="w-4 h-4 mr-2" />
								Share
							</Button>
							<MoreHorizontal className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
						</div>
					</div>
				</div>
			</div>

			<div className="flex">
				{/* Sidebar */}
				<aside className="w-64 bg-white dark:bg-gray-800 h-[calc(100vh-4rem)] overflow-y-auto">
					<nav className="p-4">
						<h2 className="text-lg font-semibold mb-4">Financial Plans</h2>
						<ScrollArea className="h-[calc(100vh-8rem)]">
							{plans.map((plan) => (
								<Button
									key={plan.id}
									variant={selectedPlan?.id === plan.id ? "secondary" : "ghost"}
									className="w-full justify-start mb-2"
									onClick={() => setSelectedPlan(plan)}
								>
									<DollarSign className="mr-2 h-4 w-4" />
									{plan.name}
								</Button>
							))}
						</ScrollArea>
					</nav>
				</aside>

				{/* Main content */}
				<main className="flex-1 p-6 overflow-auto">
					<h1 className="text-3xl font-bold mb-6">Financial Plans Overview</h1>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{plans.map((plan) => (
							<Card key={plan.id} className="hover:shadow-lg transition-shadow">
								<CardHeader>
									<CardTitle>{plan.name}</CardTitle>
									<CardDescription>{plan.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<Button
										variant="outline"
										className="w-full"
										onClick={() => {
											setSelectedPlan(plan);
											goToPlan(plan.id);
										}}
									>
										View Details <ChevronRight className="ml-2 h-4 w-4" />
									</Button>
								</CardContent>
							</Card>
						))}
					</div>

					{selectedPlan && (
						<Card className="mt-8">
							<CardHeader>
								<CardTitle>{selectedPlan.name} Details</CardTitle>
								<CardDescription>{selectedPlan.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="mb-4">{selectedPlan.details}</p>
								<Tabs defaultValue="info" className="w-full">
									<TabsList>
										<TabsTrigger value="info">Plan Info</TabsTrigger>
										<TabsTrigger value="tip">Financial Tip</TabsTrigger>
									</TabsList>
									<TabsContent value="info">
										<p>{selectedPlan.details}</p>
									</TabsContent>
									<TabsContent value="tip">
										<div className="flex items-start space-x-2">
											<Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
											<p className="text-sm text-muted-foreground">
												{selectedPlan.tip}
											</p>
										</div>
									</TabsContent>
								</Tabs>
							</CardContent>
						</Card>
					)}
				</main>
			</div>
		</div>
	);
}
