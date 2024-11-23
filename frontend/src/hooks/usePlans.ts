import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPlans, createPlan } from "@/api/plans";
import { Plan } from "@/types";

import useAuthStore from "@/zustand/auth";
export const usePlans = () => {
	const queryClient = useQueryClient();
	const users = useAuthStore((state) => state.user);
	const userId = users?.user_id;

	if (!userId) {
		throw new Error("User ID is not defined");
	}
	// Fetch all plans
	const plansQuery = useQuery({
		queryKey: ["plans"],
		queryFn: () => fetchPlans(userId),
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	// Create a new plan
	const createPlanMutation = useMutation({
		mutationFn: (newPlan: Partial<Plan>) => createPlan(newPlan),
		onSuccess: () => {
			// Correctly invalidate the query
			queryClient.invalidateQueries({ queryKey: ["plans"] });
		},
	});

	return { plansQuery, createPlanMutation };
};
