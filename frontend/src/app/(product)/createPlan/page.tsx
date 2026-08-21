"use client";
import { useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Users } from "lucide-react";
import useAuthStore from "@/zustand/auth";
import { useRouter } from "next/navigation";
import { usePlan } from "@/hooks/usePlan";
import { z } from "zod";
import { PlanSchema } from "@/types";

export default function CreatePlan() {
	const user = useAuthStore((state) => state.user);
	const router = useRouter();
	const [planName, setPlanName] = useState("");
	const [planDescription, setPlanDescription] = useState("");
	const [planType, setPlanType] = useState("personal");
	const [planVisibility, setPlanVisibility] = useState("private");
	const [planDuration, setPlanDuration] = useState("");
	const [initialBudget, setInitialBudget] = useState("");
	const [autoSave, setAutoSave] = useState(true);
	const { createPlanMutation } = usePlan();

	type Plan = z.infer<typeof PlanSchema>;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the data to your backend
		const planData: Partial<Plan> = {
			name: planName,
			user_id: user?.user_id,
			description: planDescription,
			plan_type: planType,
			visibility: planVisibility,
			duration: planDuration,
			initial_budget: isNaN(parseFloat(initialBudget))
				? 0
				: parseFloat(initialBudget),
			auto_save: autoSave,
		};

		try {
			// const res = await fetchPost("plan", planData);
			const data = PlanSchema.parse(planData);
			const res = await createPlanMutation.mutateAsync(data);
			setPlanName("");
			setPlanDescription("");
			setPlanType("personal");
			setPlanVisibility("private");
			setPlanDuration("");
			setInitialBudget("");
			setAutoSave(true);

			console.log(res);
			router.push(`/plan/${res.name.replace(/ /g, "_")}?id=${res.id}`);
		} catch (error) {
			console.error("Error submitting plan:", error);
		}
		// Reset form or redirect to the new plan page
	};

	return (
		<div className="min-h-screen bg-background">
			<main className="max-w-3xl mx-auto py-12 sm:px-6 lg:px-8">
				<div className="mb-8">
					<p className="font-mono text-xs text-primary mb-2">
						01 / NEW FINANCIAL BRIEF
					</p>
					<h1 className="font-serif text-3xl font-normal tracking-tight text-foreground">
						Create Your Plan
					</h1>
					<p className="text-muted-foreground mt-2 font-sans">
						A structured brief for your next chapter of calm money management.
					</p>
				</div>
				<form onSubmit={handleSubmit}>
					<Card className="border border-border bg-card shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
						<CardContent className="flex flex-col gap-10 pt-6">
							{/* 01. Plan Identity */}
							<section className="space-y-4">
								<div className="flex items-center gap-3 border-b border-border pb-2">
									<span className="font-mono text-sm text-primary">01.</span>
									<h2 className="font-serif text-xl font-medium text-foreground">Plan Identity</h2>
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="plan-name">Plan name</Label>
									<Input
										id="plan-name"
										placeholder="e.g. My 2024 Savings Plan"
										value={planName}
										onChange={(e) => setPlanName(e.target.value)}
										required
									/>
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="plan-description">Description (optional)</Label>
									<Textarea
										id="plan-description"
										placeholder="Describe your financial goals and strategies"
										value={planDescription}
										onChange={(e) => setPlanDescription(e.target.value)}
									/>
								</div>
							</section>

							{/* 02. Budget Allocation */}
							<section className="space-y-4">
								<div className="flex items-center gap-3 border-b border-border pb-2">
									<span className="font-mono text-sm text-primary">02.</span>
									<h2 className="font-serif text-xl font-medium text-foreground">Budget Allocation</h2>
								</div>

								<div className="flex flex-col gap-2">
									<Label>Plan Type</Label>
									<RadioGroup
										value={planType}
										onValueChange={setPlanType}
										className="grid grid-cols-1 sm:grid-cols-3 gap-3"
										defaultValue="personal"
									>
										{[
											{ value: "personal", label: "Personal", desc: "Individual focus" },
											{ value: "family", label: "Family", desc: "Shared household" },
											{ value: "business", label: "Business", desc: "Operational funds" },
										].map((opt) => (
											<Label
												key={opt.value}
												htmlFor={opt.value}
												className={`flex flex-col gap-1 rounded-md border p-4 cursor-pointer transition-colors ${
													planType === opt.value
														? "border-primary bg-primary/5"
														: "border-border bg-card hover:border-primary/40"
												}`}
											>
												<div className="flex items-center gap-2">
													<RadioGroupItem
														value={opt.value}
														id={opt.value}
														className="border-border text-primary"
													/>
													<span className="font-sans font-medium text-foreground">{opt.label}</span>
												</div>
												<span className="font-sans text-xs text-muted-foreground pl-6">{opt.desc}</span>
											</Label>
										))}
									</RadioGroup>
								</div>

								<div className="flex flex-col gap-2">
									<Label>Plan Visibility</Label>
									<Select
										value={planVisibility}
										onValueChange={setPlanVisibility}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select visibility" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="private">
												<div className="flex items-center">
													<Lock className="mr-2 h-4 w-4" />
													Private
												</div>
											</SelectItem>
											<SelectItem value="shared">
												<div className="flex items-center">
													<Users className="mr-2 h-4 w-4" />
													Shared with specific people
												</div>
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="flex flex-col gap-2">
									<Label>Plan Duration</Label>
									<Select value={planDuration} onValueChange={setPlanDuration}>
										<SelectTrigger>
											<SelectValue placeholder="Select duration" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1week">1 Week</SelectItem>
											<SelectItem value="1month">1 Month</SelectItem>
											<SelectItem value="3months">3 Months</SelectItem>
											<SelectItem value="6months">6 Months</SelectItem>
											<SelectItem value="1year">1 Year</SelectItem>
											<SelectItem value="custom">Custom</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="flex flex-col gap-2">
									<Label htmlFor="initial-budget">Initial Budget</Label>
									<div className="relative">
										<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground font-mono">
											$
										</span>
										<Input
											id="initial-budget"
											type="number"
											placeholder="0.00"
											value={initialBudget}
											onChange={(e) => setInitialBudget(e.target.value)}
											className="pl-7 font-mono"
										/>
									</div>
								</div>
							</section>

							{/* 03. Automation & Rules */}
							<section className="space-y-4">
								<div className="flex items-center gap-3 border-b border-border pb-2">
									<span className="font-mono text-sm text-primary">03.</span>
									<h2 className="font-serif text-xl font-medium text-foreground">Automation & Rules</h2>
								</div>
								<div className="flex items-center gap-3 rounded-md border border-border p-4 bg-secondary/40">
									<Switch
										id="auto-save"
										checked={autoSave}
										onCheckedChange={setAutoSave}
										className="data-[state=checked]:bg-primary"
									/>
									<div>
										<Label htmlFor="auto-save" className="font-sans">Enable auto-save feature</Label>
										<p className="font-sans text-xs text-muted-foreground">Automatically set aside surplus into savings.</p>
									</div>
								</div>
							</section>
						</CardContent>
						<CardFooter className="pt-2">
							<Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
								Create Financial Plan
							</Button>
						</CardFooter>
					</Card>
				</form>
			</main>
		</div>
	);
}
