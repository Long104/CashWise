"use client";

import { usePlans } from "@/hooks/useUser";
import { Plan } from "@/types";

export default function Todos() {
	const { plansQuery, createPlanMutation } = usePlans();

	const { data: plans, isPending, error, refetch } = plansQuery;

	if (error) return <div>An error has occurred: {error.message}</div>;

	return (
		<div>
			<ul>
				{isPending
					? "Loading..."
					: plans?.map((plan: Plan) => <li key={plan.id}>{plan.name}</li>)}
			</ul>

			<button
				onClick={() =>
					createPlanMutation.mutate({
						user_id: 2,
						name: "New Weekly Plan",
						plan_type: "weekly",
						visibility: "private",
						duration: "7 days",
						description: "Plan description",
						auto_save: false,
						initial_budget: 1000.0,
					})
				}
			>
				Add Plan
			</button>
		</div>
	);
}
