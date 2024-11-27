"use client";
import { useUser } from "@/hooks/useUser";
import { useTransaction } from "@/hooks/useTransaction";
import { useCategory } from "@/hooks/useCategory";
import React from "react";

const Page = () => {
	const { userQuery } = useUser();
	const { data, isPending, error } = userQuery;
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
	return (
		<>
			<div>
				{transactions?.Transactions?.map((transaction: any) => (
					<div key={transaction.id}>
						{transaction?.description}
					</div>
				))}
			</div>
			<button>Create Category</button>
		</>
	);
};

export default Page;
