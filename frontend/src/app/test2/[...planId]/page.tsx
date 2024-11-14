"use client";

import {
	Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPost, fetchGet, fetchDelete } from "@/fetch/client";
import { Button } from "@/components/ui/button";

type Transaction = {
	id: number;
	name: string; // Assuming every transaction needs a name
	transaction_date: string;
	category: {
		name: string;
	};
	budget_id?: number; // Optional if not always present
	plan_id?: number; // Optional if not always present
	description?: string;
	amount?: number | string;
	category_id?: number;
};

interface Plan {
	name?: string;
	id?: number;
	created_at?: string;
	description?: string;
	duration?: number;
	initial_budget?: number;
	plan_type?: string;
	user_id?: number;
	visibility?: string;
	Transactions: Transaction[];
	// budget: any[];
	// auto_save: boolean;
}

const page = () => {
	const params = useParams<{ planId: string }>();
	const [transactions, setTransactions] = useState<Plan>({
		name: "",
		id: 0,
		created_at: "",
		description: "",
		duration: 0,
		initial_budget: 0,
		plan_type: "",
		user_id: 0,
		visibility: "",
		Transactions: [], // Default empty array
	});

	useEffect(() => {
		async function fetchPlan() {
			const response = await fetchGet(`plan/${params.planId[0]}`);
			setTransactions(response);
			console.log("fetchPlan", response);
		}

		fetchPlan();
		console.log("useEffect start");
		// }, [transactions]);
	}, []);

	const handleDelete = async (id: number) => {
		try {
			await fetchDelete("transaction", id);

			setTransactions({
				...transactions,
				Transactions: transactions.Transactions.filter(
					(plan) => plan.id !== id,
				),
			});

			console.log("delete transaction", transactions);
		} catch (error) {
			console.error("Failed to delete transaction:", error);
		}
	};

	console.log(transactions);
	return (
		<>
			<div>{transactions?.name}</div>;<div>{transactions?.created_at}</div>;
			<div className="space-y-4">
				{(transactions?.Transactions ?? []).map((expense: any) => (
					<div
						key={expense.id}
						className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
					>
						<div className="flex items-center space-x-4">
							<div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full"></div>
							<div>
								<p className="font-medium">
									{/* {expense.description} */}
									{expense?.category?.name}
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{expense.transaction_date}
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<div className="text-right">
								<p className="font-medium">${expense.amount.toFixed(2)}</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{/* {expense?.category?.name} */}
									{expense.description}
								</p>
							</div>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => handleDelete(expense.id)}
							>
								<Trash2 className="h-4 w-4 text-red-500" />
							</Button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default page;
