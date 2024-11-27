import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDelete, fetchGet, fetchPost } from "@/fetch/client";
import { fetchDeleteCategory } from "@/api/Category";
import { Plan } from "@/types";

import useAuthStore from "@/zustand/auth";
export const useTransaction = () => {
	const queryClient = useQueryClient();
	const users = useAuthStore((state) => state.user);
	const userId = users?.user_id;

	const transactionQuery = (planId: string | null) =>
		useQuery({
			queryKey: ["transaction"],
			queryFn: async () => {
				if (!userId) {
					return null; // Fallback when no userId
				}
				const result = await fetchGet(
					// `transaction?user_id=${userId}&plan_id=${planId}`,
					`plan/${planId}`,

					// `categories`,
				);
				// console.log("Fetch Plans Result:", result);
				return result;
			},

			enabled: !!userId,
			staleTime: 1000 * 60 * 5, // 5 minutes
		});

	// Create a new plan
	const createTransactionMutation = useMutation({
		mutationFn: async ({
			planId,
			newTransaction,
		}: { planId: string | null; newTransaction: Partial<any> }) =>
			// await fetchPost(`category?user_id=${userId}&plan_id=${planId}`, {
			await fetchPost(`transaction`, {
				...newTransaction, // Spread the newCategory data
				plan_id: Number(planId), // Add plan_id to the request body
				user_id: userId, // Add user_id to the request body
			}),
		onSuccess: () => {
			// Correctly invalidate the query
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});

	const deleteTransactionMutation = useMutation({
		mutationFn: ({
			planId,
			categoryId,
		}: { planId: string | null; categoryId: number }) =>
			fetchDeleteCategory(
				`category?user_id=${userId}&plan_id=${planId}&category_id=${categoryId}`,
			), // Your delete API call
		onSuccess: () => {
			// After successfully deleting a plan, invalidate the 'plans' query
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
		onError: (error) => {
			console.error("Failed to delete plan:", error);
		},
	});

	return {
		transactionQuery,
		createTransactionMutation,
		deleteTransactionMutation,
	};
};
