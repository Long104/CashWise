import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUser, createPlan } from "@/api/User";
import { fetchDelete } from "@/fetch/client";
import { PlanSchema } from "@/types";
import { z } from "zod";

import useAuthStore from "@/zustand/auth";

export const usePlan = () => {
	const queryClient = useQueryClient();
	const users = useAuthStore((state) => state.user);
	const userId = users?.user_id;
	type Plan = z.infer<typeof PlanSchema>;

	// const planQuery = useQuery({
	// 	queryKey: ["user"],
	// 	queryFn: async () => {
	// 		if (!userId) {
	// 			return null; // Fallback when no userId
	// 		}
	// 		const result = await fetchUser(userId);
	// 		// console.log("Fetch Plans Result:", result);
	// 		return result;
	// 	},
	// 	enabled: !!userId,
	// 	staleTime: 1000 * 60 * 5, // 5 minutes
	// });

	// Create a new plan
	const createPlanMutation = useMutation({
		mutationFn: (newPlan: Partial<Plan>) => createPlan(newPlan),
		onSuccess: (data) => {
			// Correctly invalidate the query
			console.log("mutation data", data);
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
		onError: (error) => {
			console.log("this is error", error);
		},
	});

	const deletePlanMutation = useMutation({
		mutationFn: (id: number) => fetchDelete(`plan`, id), // Your delete API call
		onSuccess: () => {
			// After successfully deleting a plan, invalidate the 'plans' query
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
		onError: (error) => {
			console.error("Failed to delete plan:", error);
		},
	});

	return { createPlanMutation, deletePlanMutation };
};
