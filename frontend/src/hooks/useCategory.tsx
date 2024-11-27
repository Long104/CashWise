import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDelete, fetchGet, fetchPost } from "@/fetch/client";
import { fetchDeleteCategory } from "@/api/Category";
import { Plan } from "@/types";

import useAuthStore from "@/zustand/auth";
export const useCategory = () => {
	const queryClient = useQueryClient();
	const users = useAuthStore((state) => state.user);
	const userId = users?.user_id;

	// if (!userId) {
	// 	return {
	// 		userQuery: {
	// 			data: null,
	// 			isPending: false,
	// 			error: null,
	// 			refetch: () => Promise.resolve(),
	// 		},
	// 		createCategoryMutation: null,
	// 		deleteCategoryMutation: null,
	// 	};
	// }
	// Fetch all plans
	const categoriesQuery = (planId: string | null) =>
		useQuery({
			queryKey: ["categories"],
			queryFn: async () => {
				if (!userId) {
					return null; // Fallback when no userId
				}
				const result = await fetchGet(
					`categories?user_id=${userId}&plan_id=${planId}`,
					// `categories?user_id=${userId},plan_id=${planId}`,

					// `categories`,
				);
				// console.log("Fetch Plans Result:", result);
				return result;
			},

			enabled: !!userId,
			staleTime: 1000 * 60 * 5, // 5 minutes
		});

	// Create a new plan
	const createCategoryMutation = useMutation({
		mutationFn: async ({
			planId,
			newCategory,
		}: { planId: string | null; newCategory: Partial<any> }) =>
			// await fetchPost(`category?user_id=${userId}&plan_id=${planId}`, {
			await fetchPost(`category`, {
				...newCategory, // Spread the newCategory data
				plan_id: Number(planId), // Add plan_id to the request body
				user_id: userId, // Add user_id to the request body
			}),
		onSuccess: () => {
			// Correctly invalidate the query
			queryClient.invalidateQueries({ queryKey: ["categories"] });
		},
	});

	const deleteCategoryMutation = useMutation({
		mutationFn: ({
			planId,
			categoryId,
		}: { planId: string | null; categoryId: number }) =>
			fetchDeleteCategory(
				`category?user_id=${userId}&plan_id=${planId}&category_id=${categoryId}`,
			), // Your delete API call
		onSuccess: () => {
			// After successfully deleting a plan, invalidate the 'plans' query
			queryClient.invalidateQueries({ queryKey: ["categories"] });
		},
		onError: (error) => {
			console.error("Failed to delete plan:", error);
		},
	});

	return { categoriesQuery, createCategoryMutation, deleteCategoryMutation };
};
