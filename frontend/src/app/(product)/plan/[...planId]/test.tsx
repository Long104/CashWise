"use client";
import React, { useState, useEffect } from "react";
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
import {
	DollarSign,
	PlusCircle,
	Trash2,
	Star,
	Users,
	Filter,
	Share,
	MoreHorizontal,
	ChevronDown,
	X,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchPost, fetchGet, fetchDelete } from "@/fetch/client";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogDescription,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useUser } from "@/hooks/useUser";
type Expense = {
	budget_id: number;
	plan_id: number;
	description: string;
	amount: number | string;
	category_id: number;
	transaction_date: string;
};

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

type Plan = {
	name: string;
	id: number;
	created_at: string;
	description: string;
	duration: number;
	initial_budget: number;
	plan_type: string;
	user_id: number;
	visibility: string;
	Transactions: Transaction[];
	budget?: any[];
	auto_save?: boolean;
};

export default function DailyExpenses() {
	// params
	// const params = useParams<{ planId: string }>();
	// const router = useRouter();
	const { userQuery, deleteUserMutation } = useUser();
	const {
		data: plans,
		isPending: planIsPending,
		error: planError,
		refetch: planRefetch,
	} = userQuery;

	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const now = new Date();
	const currentHours = now.getHours();
	const currentMinutes = now.getMinutes();
	const currentSeconds = now.getSeconds();

	// useState
	const [isAddingCategory, setIsAddingCategory] = useState(false);
	const [newCategory, setNewCategory] = useState("");
	// const [categories, setCategories] = useState<any[]>([]);
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
		Transactions: [], // initialize as an empty array
	});
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
	const [categoryToDelete, setCategoryToDelete] = useState<number | null>(null);

	//handle
	const handleAddCategory = async () => {
		if (newCategory.trim()) {
			try {

				// const response = await fetchPost("category", {
				// 	name: newCategory,
				// 	plan_id: id,
				// });
				// setCategories([...categories, response]);
				// setNewCategory("");
				// setIsAddingCategory(false);
			} catch (error) {
				console.error("Failed to add category:", error);
			}
		}
	};

	const [newExpense, setNewExpense] = useState<Expense>({
		budget_id: 1,
		plan_id: id ? parseInt(id) : 1,
		description: "",
		amount: 0,
		category_id: 1,
		transaction_date: new Date().toISOString().split("T")[0],
	});
	//
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewExpense((prev: any) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const padZero = (num: number) => num.toString().padStart(2, "0");

		const fullISODate = `${new Date(newExpense.transaction_date).toISOString().split("T")[0]}T${padZero(currentHours)}:${padZero(currentMinutes)}:${padZero(currentSeconds)}Z`;

		try {
			const response = await fetchPost("transaction", {
				...newExpense,
				transaction_date: fullISODate,
			});

			console.log("response", response);

			setTransactions((prev) => ({
				...prev,
				Transactions: [...prev.Transactions, response],
			}));
			console.log("transaction this is it ", transactions);

			// Reset the form using setNewExpense
			setNewExpense({
				budget_id: 1,
				plan_id: id ? parseInt(id) : 1,
				description: "",
				amount: 0,
				category_id: 1,
				transaction_date: new Date().toISOString().split("T")[0],
			});

			// Optionally, reset the form fields to ensure UI is in sync
			if (event.target instanceof HTMLFormElement) {
				event.target.reset();
			}

			// You could add a success message here
			// setSuccessMessage("Transaction added successfully!");
		} catch (error) {
			// Handle the error in a way that's meaningful for this component
			console.error("Failed to add transaction:", error);
			// You could set an error state here to display to the user
			// setErrorMessage("Failed to add transaction. Please try again.");
		}
	};

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

	const handleDeleteCategory = async (categoryId: number) => {
		try {
			// const response = await fetchDelete("category", categoryId);
			// console.log(response);
			// setCategories(
			// 	categories.filter((category) => category.id !== categoryId),
			// );
			setIsDeleteDialogOpen(false);
			setCategoryToDelete(null);
		} catch (error) {
			console.error("Failed to delete category:", error);
		}
	};

	useEffect(() => {
		// async function fetchCategories() {
		// const response = await fetchGet("categories");
		// setCategories(response);
		// }

		async function fetchPlan() {
			// const response = await fetchGet(`plan/${params.planId[0]}`);
			const response = await fetchGet(`plan/${id}`);
			setTransactions(response);
			console.log("fetchPlan", response);
		}

		// fetchCategories();
		fetchPlan();
		console.log("useEffect start");
		// }, [transactions]);
	}, []);

	return (
		<>
			<div className="min-h-screen bg-primary">
				<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<Card className="col-span-1 md:col-span-2">
								<CardHeader>
									<CardTitle>Add New Expense</CardTitle>
									<CardDescription>Track your daily spending</CardDescription>
								</CardHeader>
								<form onSubmit={handleSubmit}>
									<CardContent>
										<div className="space-y-4">
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												{/*TODO: here */}

												<div className="space-y-2">
													<Label htmlFor="category">Category</Label>

													<DropdownMenu>
														<DropdownMenuTrigger asChild>
															<Button
																variant="outline"
																className="w-full justify-between"
															>
																{/* {categories.find( */}
																{/* 	(c:any) => c.id === newExpense.category_id, */}
																{/* )?.name || "Select a category"} */}
																<ChevronDown className="ml-2 h-4 w-4 opacity-50" />
															</Button>
														</DropdownMenuTrigger>
														<DropdownMenuContent className="w-[--radix-dropdown-trigger-width] min-w-[8rem]">
															{/* {categories.map((category:any) => ( */}
															{/* 	<DropdownMenuItem */}
															{/* 		key={category.id} */}
															{/* 		onClick={() => */}
															{/* 			setNewExpense({ */}
															{/* 				...newExpense, */}
															{/* 				category_id: category.id, */}
															{/* 			}) */}
															{/* 		} */}
															{/* 		className="justify-between" */}
															{/* 	> */}
															{/* 		{category.name} */}
															{/**/}
															{/* 		<Button */}
															{/* 			variant="outline" */}
															{/* 			className="h-4 w-4 opacity-50 hover:opacity-100 bg-secondary" */}
															{/* 			onClick={(e) => { */}
															{/* 				e.stopPropagation(); */}
															{/* 				setCategoryToDelete(category.id); */}
															{/* 				setIsDeleteDialogOpen(true); */}
															{/* 			}} */}
															{/* 		> */}
															{/* 			X */}
															{/* 		</Button> */}
															{/* 	</DropdownMenuItem> */}
															{/* ))} */}
															<DropdownMenuItem
																onClick={() => setIsAddingCategory(true)}
																className="justify-center font-medium"
															>
																+ Add new category
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</div>
												<div className="space-y-2">
													<Label htmlFor="amount">Amount</Label>
													<div className="relative">
														<DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
														<Input
															id="amount"
															name="amount"
															type="number"
															placeholder="0.00"
															className="pl-10"
															required
															value={
																newExpense.amount === 0 ? "" : newExpense.amount
															}
															// onChange={handleChange}
															// value={newExpense.amount}
															onChange={(e) =>
																setNewExpense({
																	...newExpense,
																	// amount: parseFloat(e.target.value),
																	amount: isNaN(parseFloat(e.target.value))
																		? 0
																		: parseFloat(e.target.value),
																})
															}
														/>
													</div>
												</div>
											</div>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div className="space-y-2">
													<Label htmlFor="description">Description</Label>
													<Input
														id="description"
														placeholder="What did you spend on? (optional)"
														name="description"
														value={newExpense.description}
														onChange={handleChange}
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="transaction_date">Date</Label>
													<Input
														id="transaction_date"
														name="transaction_date"
														type="date"
														value={newExpense.transaction_date}
														onChange={handleChange}
													/>
												</div>
											</div>
										</div>
									</CardContent>
									<CardFooter>
										{/* <Button className="w-full" onClick={addExpense}> */}
										<Button className="w-full bg-secondary" type="submit">
											<PlusCircle className="mr-2 h-4 w-4" /> Add Expense
										</Button>
									</CardFooter>
								</form>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Expense Summary</CardTitle>
									<CardDescription>Your spending at a glance</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">
										{Array.isArray(transactions?.Transactions)
											? transactions.Transactions.reduce(
													(sum: number, transaction: any) => {
														const amount = parseFloat(transaction.amount) || 0; // Default to 0 if not a valid number
														return sum + amount;
													},
													0,
												).toFixed(2)
											: 0}
									</div>
									<p className="text-sm text-muted-foreground">
										Total Expenses
									</p>
									<div className="mt-4 space-y-2">
										{/* {categories.map((category) => { */}
										{/* 	const categoryTotal = (transactions?.Transactions ?? []) */}
										{/* 		.filter( */}
										{/* 			(transaction: any) => */}
										{/* 				transaction.category_id === category.id, */}
										{/* 		) */}
										{/* 		.reduce((sum: number, transaction: any) => { */}
										{/* 			const amount = parseFloat(transaction.amount) || 0; */}
										{/* 			return sum + amount; */}
										{/* 		}, 0); */}
										{/* 	return ( */}
										{/* 		<div */}
										{/* 			key={category.id} */}
										{/* 			className="flex justify-between items-center" */}
										{/* 		> */}
										{/* 			<span className="text-sm">{category.name}</span> */}
										{/* 			<span className="text-sm font-medium"> */}
										{/* 				${categoryTotal?.toFixed(2) ?? 0} */}
										{/* 			</span> */}
										{/* 		</div> */}
										{/* 	); */}
										{/* })} */}
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
												{(transactions?.Transactions ?? []).map(
													(expense: any) => (
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
																	<p className="font-medium">
																		{/* ${expense.amount.toFixed(2)} */}$
																		{parseFloat(expense.amount || 0).toFixed(2)}
																	</p>
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
													),
												)}
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

				<Dialog open={isAddingCategory} onOpenChange={setIsAddingCategory}>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Add New Category</DialogTitle>
							<DialogDescription>
								Add your own category (e.g., Food, Entertain, Education).
							</DialogDescription>
						</DialogHeader>
						<div className="flex items-center space-x-2">
							<div className="grid flex-1 gap-2">
								<Label
									htmlFor="new-category"
									className="grid flex-1 gap-2 py-2"
								>
									Name
								</Label>
								<Input
									id="new-category"
									value={newCategory}
									onChange={(e) => setNewCategory(e.target.value)}
									required
								/>
							</div>
						</div>
						<DialogFooter>
							<Button
								variant="outline"
								onClick={() => setIsAddingCategory(false)}
							>
								Cancel
							</Button>
							<Button onClick={handleAddCategory} className="bg-secondary">
								Add Category
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>

				<Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Delete Category</DialogTitle>
							<DialogDescription>
								Are you sure you want to delete this category? This action
								cannot be undone.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button
								variant="outline"
								onClick={() => setIsDeleteDialogOpen(false)}
							>
								Cancel
							</Button>
							<Button
								variant="destructive"
								onClick={() =>
									categoryToDelete && handleDeleteCategory(categoryToDelete)
								}
							>
								Delete
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</>
	);
}
