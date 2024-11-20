"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export async function postWithBearer(
	url: string,
	token: string,
	data: { [key: string]: any },
): Promise<any[] | undefined> {
	try {
		const response = await fetch(url, {
			// method: "GET",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error:", error);
	}
}

type Transaction = {
	// id: number;
	// category: string;
	category_id: number;
	amount: number;
	description: string;
	// transaction_date: Date;
	transaction_date: Date;
	user_id: number | undefined;
	// user: number;
};

const Page = () => {
	const token = Cookies.get("jwt");
	// let decode;
	// if (token) {
	// decode = jwtDecode<{ user_id: number }>(token);
	const decode = jwtDecode<{ user_id: number }>(token as string);
	// }
	// else {
	// console.error("Error decoding JWT:");
	// }
	const [result, setResult] = useState<any[]>([]);
	const [transaction, setTransaction] = useState<Transaction>({
		amount: 0,
		user_id: decode?.user_id,
		transaction_date: new Date(),
		category_id: 16,
		description: "test",
	});

	async function handleTransactionSubmit(e: React.FormEvent) {
		e.preventDefault();
		// const token = Cookies.get("jwt");

		if (token) {
			try {
				const data = await postWithBearer(
					"http://localhost:8080/transaction",
					token,
					// { amount: transaction.amount, user_id: transaction.user_id, transaction_date: transaction.transaction_date, category_id: transaction.category_id },
					transaction,
				);
				if (data) {
					setResult(data);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
	}

	return (
		<>
			<div>
				<form onSubmit={handleTransactionSubmit}>
					<input
						type="number"
						name="amount"
						// value={isNaN(transaction.amount) ? " " : transaction.amount }
						value={isNaN(transaction.amount) ? " "  : transaction.amount === 0 ? "" : transaction.amount}
            // placeholder="amount"
						// value={String(transaction.amount)}
						className="border border-gray-400 text-indigo-300"
						// onChange={(e) => setTransaction({ amount: e.target.value })}
						onChange={(e) =>
							setTransaction({
								...transaction,
								amount: parseFloat(e.target.value),
							})
						}
					/>
					<button type="submit" className="text-indigo-500">
						Submit
					</button>
				</form>
				{/* <Select value={category} onValueChange={setCategory}> */}
				<Select>
					<SelectTrigger id="category">
						<SelectValue placeholder="Select category" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="1">Food</SelectItem>
						<SelectItem value="1">good</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</>
	);
};

export default Page;
