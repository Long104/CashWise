"use client";
import React from "react";
import Todos from "@/components/PlanList";
import useAuthStore from "@/zustand/auth";
import { fetchGet } from "@/fetch/client";

import { usePlans } from "@/hooks/usePlans";
const page = () => {
	const [state, setState] = React.useState();
	const user = useAuthStore((state) => state.user);
	const { plansQuery, createPlanMutation } = usePlans();
	const { data: plans, isPending, error, refetch } = plansQuery;

	const userId = user?.user_id;
	// console.log("damn this is user", user?.user_id);
	React.useEffect(() => {
		const fetchPlans = async () => {
			if (!user) return;
			try {
				const response = await fetchGet(`user/${userId}`);
				setState(response);
			} catch (error) {
				console.error("Error fetching plans:", error);
			}
			// const userId = user?.user_id;
		};

		fetchPlans();
	}, [userId]);

	console.log("damn this is plans", plans );
	console.log("damn this is res", state);
	return (
		<>
			<Todos />
			{Array.isArray(plans) && plans.length > 0 ? (
				plans.map((plan: { id: number }) => (
					<div key={plan.id}>{plan.id}</div>
				))
			) : (
				<div>No plans available</div>
			)}
		</>
	);
};

export default page;
