'use client'
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import {
	ArrowUpIcon,
	ArrowDownIcon,
	DollarSign,
	PiggyBank,
	ArrowRight,
} from "lucide-react";

// Mock data
const userData = {
	name: "Alex Johnson",
	avatar: "https://i.pravatar.cc/150?img=33",
	balance: 5750.83,
	income: 3200,
	expenses: 2100,
	savings: 1100,
};

const expenseData = [
	{ category: "Housing", amount: 1200 },
	{ category: "Food", amount: 400 },
	{ category: "Transportation", amount: 200 },
	{ category: "Utilities", amount: 150 },
	{ category: "Entertainment", amount: 100 },
	{ category: "Healthcare", amount: 50 },
];

const transactionHistory = [
	{ id: 1, description: "Grocery Shopping", amount: -75.5, date: "2024-03-10" },
	{ id: 2, description: "Salary Deposit", amount: 3200, date: "2024-03-01" },
	{ id: 3, description: "Electric Bill", amount: -120, date: "2024-03-05" },
	{ id: 4, description: "Online Purchase", amount: -49.99, date: "2024-03-08" },
	{ id: 5, description: "Freelance Payment", amount: 500, date: "2024-03-07" },
];

export default function Dashboard() {
	return (
		<div className="min-h-screen bg-background">

			<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<div className="mb-8">
						<p className="font-mono text-xs text-primary mb-2">
							01 / LEDGER DETAIL
						</p>
						<h1 className="font-sans text-3xl font-bold tracking-tight text-foreground">
							Plan Ledger
						</h1>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
						<Card className="border border-border bg-card shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium text-muted-foreground">
									Total Balance
								</CardTitle>
								<DollarSign className="h-4 w-4 text-accent" strokeWidth={1.5} />
							</CardHeader>
							<CardContent>
								<div className="font-mono text-3xl font-semibold tabular-nums text-foreground">
									${userData.balance.toFixed(2)}
								</div>
								<p className="text-xs text-muted-foreground mt-1">
									+20.1% from last month
								</p>
							</CardContent>
						</Card>
						<Card className="border border-border bg-card shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium text-muted-foreground">Income</CardTitle>
								<ArrowUpIcon className="h-4 w-4 text-[hsl(var(--color-surplus-olive))] dark:text-[hsl(var(--color-surplus-olive))]" strokeWidth={1.5} />
							</CardHeader>
							<CardContent>
								<div className="font-mono text-3xl font-semibold tabular-nums text-foreground">
									${userData.income.toFixed(2)}
								</div>
								<p className="text-xs text-muted-foreground mt-1">
									+2.5% from last month
								</p>
							</CardContent>
						</Card>
						<Card className="border border-border bg-card shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium text-muted-foreground">Expenses</CardTitle>
								<ArrowDownIcon className="h-4 w-4 text-[hsl(var(--color-deficit-crimson))] dark:text-[hsl(var(--color-deficit-crimson))]" strokeWidth={1.5} />
							</CardHeader>
							<CardContent>
								<div className="font-mono text-3xl font-semibold tabular-nums text-foreground">
									${userData.expenses.toFixed(2)}
								</div>
								<p className="text-xs text-muted-foreground mt-1">
									-4.3% from last month
								</p>
							</CardContent>
						</Card>
						<Card className="border border-border bg-card shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium text-muted-foreground">Net Savings</CardTitle>
								<PiggyBank className="h-4 w-4 text-accent" strokeWidth={1.5} />
							</CardHeader>
							<CardContent>
								<div className="font-mono text-3xl font-semibold tabular-nums text-foreground">
									${userData.savings.toFixed(2)}
								</div>
								<p className="text-xs text-muted-foreground mt-1">
									+12.7% from last month
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<Card className="col-span-1 border border-border bg-card shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
							<CardHeader>
								<CardTitle className="font-sans text-xl font-semibold text-foreground">Expense Breakdown</CardTitle>
								<CardDescription>
									Your spending by category this month
								</CardDescription>
							</CardHeader>
							<CardContent className="pl-2">
								<ResponsiveContainer width="100%" height={300}>
									<BarChart data={expenseData}>
										<CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
										<XAxis dataKey="category" tick={{ fontSize: 12 }} />
										<YAxis tick={{ fontSize: 12 }} />
										<Tooltip
											contentStyle={{
												backgroundColor: "hsl(var(--card))",
												border: "1px solid hsl(var(--border))",
												borderRadius: "8px",
												fontSize: "12px",
											}}
										/>
										<Bar dataKey="amount" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
									</BarChart>
								</ResponsiveContainer>
							</CardContent>
						</Card>

						<Card className="col-span-1 border border-border bg-card shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
							<CardHeader>
								<CardTitle className="font-sans text-xl font-semibold text-foreground">Recent Transactions</CardTitle>
								<CardDescription>
									Your latest financial activities
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="divide-y divide-border">
									{transactionHistory.map((transaction) => (
<li key={transaction.id} className="flex items-center py-3">
				<div
					className={`rounded-full p-1.5 mr-3 ${
						transaction.amount > 0
							? "bg-[hsl(var(--color-surplus-subtle))] dark:bg-[hsl(var(--color-surplus-subtle))]"
							: "bg-[hsl(var(--color-deficit-subtle))] dark:bg-[hsl(var(--color-deficit-subtle))]"
					}`}
				>
					{transaction.amount > 0 ? (
						<ArrowUpIcon className="h-4 w-4 text-[hsl(var(--color-surplus-olive))] dark:text-[hsl(var(--color-surplus-olive))]" strokeWidth={1.5} />
					) : (
						<ArrowDownIcon className="h-4 w-4 text-[hsl(var(--color-deficit-crimson))] dark:text-[hsl(var(--color-deficit-crimson))]" strokeWidth={1.5} />
					)}
				</div>
				<div className="flex-1">
					<p className="text-sm font-medium text-foreground">
						{transaction.description}
					</p>
					<p className="text-xs text-muted-foreground font-mono">
						{transaction.date}
					</p>
				</div>
					<p
						className={`text-sm font-mono font-medium tabular-nums ${
						transaction.amount > 0
							? "text-[hsl(var(--color-surplus-olive))] dark:text-[hsl(var(--color-surplus-olive))]"
							: "text-[hsl(var(--color-deficit-crimson))] dark:text-[hsl(var(--color-deficit-crimson))]"
						}`}
					>
						{transaction.amount > 0 ? "+" : ""}
						{transaction.amount.toFixed(2)}
					</p>
				</li>
				))}
			</ul>
				<Button variant="link" className="mt-4 w-full text-primary">
					View All Transactions <ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</CardContent>
		</Card>
					</div>

					<Card className="mt-8 border border-border bg-card shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
						<CardHeader>
							<CardTitle className="font-sans text-xl font-semibold text-foreground">Budget Overview</CardTitle>
							<CardDescription>
								Track your spending against your budget
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Tabs defaultValue="monthly" className="w-full">
								<TabsList>
									<TabsTrigger value="monthly">Monthly</TabsTrigger>
									<TabsTrigger value="yearly">Yearly</TabsTrigger>
								</TabsList>
								<TabsContent value="monthly">
									<div className="space-y-4">
										<div>
											<div className="flex justify-between mb-1 text-sm font-medium">
												<span>Housing</span>
												<span className="font-mono">$1200 / $1500</span>
											</div>
											<Progress value={80} className="h-2" />
										</div>
										<div>
											<div className="flex justify-between mb-1 text-sm font-medium">
												<span>Food</span>
												<span className="font-mono">$400 / $500</span>
											</div>
											<Progress value={80} className="h-2" />
										</div>
										<div>
											<div className="flex justify-between mb-1 text-sm font-medium">
												<span>Transportation</span>
												<span className="font-mono">$200 / $300</span>
											</div>
											<Progress value={66} className="h-2" />
										</div>
									</div>
								</TabsContent>
								<TabsContent value="yearly">
									<p>Yearly budget overview coming soon...</p>
								</TabsContent>
							</Tabs>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
