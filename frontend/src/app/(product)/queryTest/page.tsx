"use client";
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClientProvider,
	QueryClient,
} from "@tanstack/react-query";
import React from "react";
import { fetchGet, fetchPost } from "@/fetch/client";

type Plan = {
	id: number;
	user_id: number;
	name: string;
	plan_type: string;
	visibility: string;
	duration: string;
	description?: string;
	auto_save: boolean;
	initial_budget: number;
};

export default function Todos() {
	// Access the query client
	const queryClient = useQueryClient();

	// Queries
	const { isPending, error, data } = useQuery({
		queryKey: ["plans"],
		queryFn: () => fetchGet("plans"),
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	// Mutations
	const mutation = useMutation({
		// Make mutationFn a function that accepts the data
		mutationFn: (newPlan: {
			user_id: number;
			name: string;
			plan_type: string;
			visibility: string;
			duration: string;
			description?: string;
			auto_save: boolean;
			initial_budget: number;
		}) => fetchPost("plan", newPlan),
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ["plans"] });
			console.log("this is queryClient", queryClient);
		},
		onError: (error) => {
			console.log("this is error", error);
			console.log("this is queryClient", queryClient);
		},
	});

	if (error) return "An error has occurred: " + error.message;

	return (
		<div>
			<ul>
				{isPending
					? "Loading..."
					: data?.map((plan: Plan) => <li key={plan.id}>{plan.name}</li>)}
			</ul>

			<button
				onClick={() => {
					// Pass the data for the mutation
					mutation.mutate({
						user_id: 2,
						name: "Damn this is the newest plan",
						plan_type: "weekly",
						visibility: "private",
						duration: "7 days",
						description: "A plan to save money weekly.",
						auto_save: false,
						initial_budget: 1000.0,
					});
				}}
			>
				Add Plan
			</button>
		</div>
	);
}
