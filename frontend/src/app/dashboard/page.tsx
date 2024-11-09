"use client";

import { ChartWeek } from "@/components/example/chart-week";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { format } from "date-fns";
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Cookies from "js-cookie";

export async function postWithBearer(
	url: any,
	// data: any,
	data: { [key: string]: any },
	token: any,
	// ): Promise<string[] | null> {
): Promise<any> {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`, // Add the Bearer token
			},
			body: JSON.stringify(data), // Convert data to JSON string
		});

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		return await response.json(); // Parse JSON response
	} catch (error) {
		console.error("Error:", error);
		return null;
	}
}

export async function getWithBearer(
	url: any,
	// data: any,
	token: any,
	// ): Promise<string[] | null> {
): Promise<any[] | null> {
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`, // Add the Bearer token
			},
		});

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		return await response.json(); // Parse JSON response
	} catch (error) {
		console.error("Error:", error);
		return null;
	}
}

type Transaction = {
	id: number;
	category: string;
	category_id: string;
	amount: number;
	date: Date;
	description: string;
	// transaction_date: Date;
	transaction_date: Date;
	user_id: number;
	user: number;
};

type Category = {
	id: number;
	name: string;
};

// const categories = ["Food", "Transport", "Entertainment", "Bills", "Other"];

export default function Dashboard() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [category, setCategory] = useState("");
	const [amount, setAmount] = useState("");
	const [weeklyData, setWeeklyData] = useState<
		{ name: string; total: number }[]
	>([]);
	const [monthlyData, setMonthlyData] = useState<
		{ name: string; total: number }[]
	>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	useEffect(() => {
		const Fetch = async () => {
			const token = Cookies.get("jwt");
			if (token) {
				try {
					const data = await getWithBearer(
						"http://localhost:8080/categories",
						token,
					);
					if (data) {
						setCategories(data);
					}
				} catch (error) {
					console.log(error);
				}
			}
		};

		Fetch();
	}, []);

	const dataWeek = [
		{
			name: "Monday",
			before: 1000.1,
			after: 900.4,
			result: 2400,
		},
		{
			name: "Tuesday",
			before: 1000.2,
			after: 800,
			result: 2400,
		},
		{
			name: "Wednesday",
			before: 1000.3,
			after: 900.3,
			result: 2400,
		},
		{
			name: "Thursday",
			before: 1000.4,
			after: 700,
			result: 2400,
		},
		{
			name: "Friday",
			before: 1000.5,
			after: 850,
			result: 2400,
		},
		{
			name: "Saturday",
			before: 1000.6,
			after: 900,
			result: 2400,
		},
		{
			name: "Sunday",
			before: 1000.7,
			after: 600,
			result: 2400,
		},
	];

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
			<div className="container mx-auto p-4 sm:p-6 lg:p-8">
				<h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
					CashWise Dashboard
				</h1>

				<div className="grid gap-6 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Add Transaction</CardTitle>
							<CardDescription>
								Record your spending to track your budget
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit}>
								<div className="grid gap-4">
									<div className="grid gap-2">
										<Label htmlFor="category">Category</Label>
										<Select value={category} onValueChange={setCategory}>
											<SelectTrigger id="category">
												<SelectValue placeholder="Select category" />
											</SelectTrigger>
											<SelectContent>
												{/* {categories.map((cat) => ( */}
												{/* 	<SelectItem key={cat} value={cat}> */}
												{/* 		{cat} */}
												{/* 	</SelectItem> */}
												{/* ))} */}

												{categories.map((cat) => (
													<SelectItem key={cat.id} value={cat?.name}>
														{cat?.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="amount">Amount</Label>
										<Input
											id="amount"
											type="number"
											placeholder="Enter amount"
											value={amount}
											onChange={(e) => setAmount(e.target.value)}
										/>
									</div>
								</div>
								<Button className="w-full mt-4" type="submit">
									<Plus className="mr-2 h-4 w-4" /> Add Transaction
								</Button>
							</form>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Recent Transactions</CardTitle>
							<CardDescription>Your latest spending activities</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Category</TableHead>
										<TableHead>Amount</TableHead>
										<TableHead>Date</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{transactions.length > 0 ? (
										// transactions
										// 	.slice(-5)
										// 	.reverse()
										// 	.map((transaction) => (
										// 		<TableRow key={transaction.id}>
										// 			<TableCell>{transaction.category}</TableCell>
										// 			<TableCell>
										// 				${transaction.amount.toFixed(2)}
										// 			</TableCell>
										// 			<TableCell>
										// 				{format(transaction.date, "MMM dd, yyyy")}
										// 			</TableCell>
										// 		</TableRow>
										// 	))
										<TableRow>
											<TableCell colSpan={3} className="text-center">
												 transactions is here
											</TableCell>
										</TableRow>
									) : (
										<TableRow>
											<TableCell colSpan={3} className="text-center">
												No transactions yet
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</div>

				<div className="mt-6 grid gap-6 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Weekly Spending</CardTitle>
							<CardDescription>Total spending per week</CardDescription>
						</CardHeader>
						<CardContent>
							<ResponsiveContainer width="100%" height={300}>
								{/* <BarChart data={weeklyData} width={300} height={300}> */}
								<BarChart
									data={dataWeek}
									width={30}
									height={30}
									style={{ width: "300px", height: "300px" }}
								>
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									{/* <Bar dataKey="result" fill="#EC5800" /> */}
									<Bar dataKey="before" fill="#EC5800" />
									<Bar dataKey="after" fill="#FFAC1C" />
								</BarChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Monthly Spending</CardTitle>
							<CardDescription>Total spending per month</CardDescription>
						</CardHeader>
						<CardContent>
							<ResponsiveContainer width="100%" height={300}>
								<BarChart data={monthlyData}>
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Bar dataKey="result" fill="hsl(var(--primary))" />
								</BarChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
