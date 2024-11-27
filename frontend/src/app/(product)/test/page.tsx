"use client";
import { useUser } from "@/hooks/useUser";
import { useTransaction } from "@/hooks/useTransaction";
import { useCategory } from "@/hooks/useCategory";
import React from "react";

const Page = () => {
	const { userQuery } = useUser();
	const { data, isPending, error } = userQuery;
	const { categoriesQuery } = useCategory();
	const { data: category } = categoriesQuery("3");
	console.log("this is the best user", data);

	const {
		transactionQuery,
		createTransactionMutation,
		deleteTransactionMutation,
	} = useTransaction();

	const {
		data: transactions,
		isPending: transactionIsPending,
		error: transactionError,
	} = transactionQuery("3");
	console.log("this is the best transaction", transactions);
	console.log("this is the best category", category);
	return (
		<>
			<div>
				{transactions?.Transactions?.map((transaction: any) => (
					<div key={transaction.id}>{transaction?.description}</div>
				))}
			</div>
			<div>
				{category?.map((cat: any) => {
					return cat?.name;
				})}
			</div>
			<button>Create Category</button>
		</>
	);
};

export default Page;
