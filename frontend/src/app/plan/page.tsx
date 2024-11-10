"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle, DollarSign, Calendar, Tag, Trash2 } from "lucide-react";

// Mock data for initial expenses
const initialExpenses = [
	{
		id: 1,
		description: "Groceries",
		amount: 50.75,
		category: "Food",
		date: "2024-03-10",
	},
	{
		id: 2,
		description: "Gas",
		amount: 30.0,
		category: "Transportation",
		date: "2024-03-10",
	},
	{
		id: 3,
		description: "Movie tickets",
		amount: 25.0,
		category: "Entertainment",
		date: "2024-03-09",
	},
	{
		id: 4,
		description: "Lunch",
		amount: 12.5,
		category: "Food",
		date: "2024-03-09",
	},
	{
		id: 5,
		description: "Phone bill",
		amount: 65.0,
		category: "Utilities",
		date: "2024-03-08",
	},
];

const categories = [
	"Food",
	"Transportation",
	"Entertainment",
	"Utilities",
	"Shopping",
	"Other",
];

export default function DailyExpenses() {
	const [expenses, setExpenses] = useState(initialExpenses);
	const [newExpense, setNewExpense] = useState({
		description: "",
		amount: "",
		category: "",
		date: new Date().toISOString().split("T")[0],
	});

	const addExpense = () => {
		if (newExpense.description && newExpense.amount && newExpense.category) {
			setExpenses([
				...expenses,
				{
					...newExpense,
					id: Date.now(),
					amount: parseFloat(newExpense.amount),
				},
			]);
			setNewExpense({
				description: "",
				amount: "",
				category: "",
				date: new Date().toISOString().split("T")[0],
			});
		}
	};

	const deleteExpense = (id: number) => {
		setExpenses(expenses.filter((expense) => expense.id !== id));
	};

	const totalExpenses = expenses.reduce(
		(sum, expense) => sum + expense.amount,
		0,
	);

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
			<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card className="col-span-1 md:col-span-2">
							<CardHeader>
								<CardTitle>Add New Expense</CardTitle>
								<CardDescription>Track your daily spending</CardDescription>
							</CardHeader>
							<CardContent>
								<form className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="description">Description</Label>
											<Input
												id="description"
												placeholder="What did you spend on?"
												value={newExpense.description}
												onChange={(e) =>
													setNewExpense({
														...newExpense,
														description: e.target.value,
													})
												}
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="amount">Amount</Label>
											<div className="relative">
												<DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
												<Input
													id="amount"
													type="number"
													placeholder="0.00"
													className="pl-10"
													value={newExpense.amount}
													onChange={(e) =>
														setNewExpense({
															...newExpense,
															amount: e.target.value,
														})
													}
												/>
											</div>
										</div>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="category">Category</Label>
											<Select
												value={newExpense.category}
												onValueChange={(value) =>
													setNewExpense({ ...newExpense, category: value })
												}
											>
												<SelectTrigger>
													<SelectValue placeholder="Select a category" />
												</SelectTrigger>
												<SelectContent>
													{categories.map((category) => (
														<SelectItem key={category} value={category}>
															{category}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</div>
										<div className="space-y-2">
											<Label htmlFor="date">Date</Label>
											<Input
												id="date"
												type="date"
												value={newExpense.date}
												onChange={(e) =>

													setNewExpense({ ...newExpense, date: e.target.value })
												}
											/>
										</div>
									</div>
								</form>
							</CardContent>
							<CardFooter>
								<Button className="w-full" onClick={addExpense}>
									<PlusCircle className="mr-2 h-4 w-4" /> Add Expense
								</Button>
							</CardFooter>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Expense Summary</CardTitle>
								<CardDescription>Your spending at a glance</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">
									${totalExpenses.toFixed(2)}
								</div>
								<p className="text-sm text-muted-foreground">Total Expenses</p>
								<div className="mt-4 space-y-2">
									{categories.map((category) => {
										const categoryTotal = expenses
											.filter((expense) => expense.category === category)
											.reduce((sum, expense) => sum + expense.amount, 0);
										return (
											<div
												key={category}
												className="flex justify-between items-center"
											>
												<span className="text-sm">{category}</span>
												<span className="text-sm font-medium">
													${categoryTotal.toFixed(2)}
												</span>
											</div>
										);
									})}
								</div>
							</CardContent>
						</Card>
					</div>

					<Card className="mt-6">
						<CardHeader>
							<CardTitle>Recent Expenses</CardTitle>
							<CardDescription>Your latest transactions</CardDescription>
						</CardHeader>
						<CardContent>
							<Tabs defaultValue="all" className="w-full">
								<TabsList>
									<TabsTrigger value="all">All</TabsTrigger>
									<TabsTrigger value="today">Today</TabsTrigger>
									<TabsTrigger value="week">This Week</TabsTrigger>
								</TabsList>
								<TabsContent value="all">
									<ScrollArea className="h-[300px]">
										<div className="space-y-4">
											{expenses.map((expense) => (
												<div
													key={expense.id}
													className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
												>
													<div className="flex items-center space-x-4">
														<div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
															<DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-300" />
														</div>
														<div>
															<p className="font-medium">
																{expense.description}
															</p>
															<p className="text-sm text-gray-500 dark:text-gray-400">
																{expense.date}
															</p>
														</div>
													</div>
													<div className="flex items-center space-x-4">
														<div className="text-right">
															<p className="font-medium">
																${expense.amount.toFixed(2)}
															</p>
															<p className="text-sm text-gray-500 dark:text-gray-400">
																{expense.category}
															</p>
														</div>
														<Button
															variant="ghost"
															size="icon"
															onClick={() => deleteExpense(expense.id)}
														>
															<Trash2 className="h-4 w-4 text-red-500" />
														</Button>
													</div>
												</div>
											))}
										</div>
									</ScrollArea>
								</TabsContent>
								<TabsContent value="today">
									<p>Today's expenses...</p>
								</TabsContent>
								<TabsContent value="week">
									<p>This week's expenses...</p>
								</TabsContent>
							</Tabs>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
