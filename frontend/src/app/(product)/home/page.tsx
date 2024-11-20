"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	DollarSign,
	ChevronRight,
	Info,
	Star,
	Users,
	Filter,
	Share,
	MoreHorizontal,
} from "lucide-react";
import { fetchPost, fetchGet, fetchDelete } from "@/fetch/client";
import { useRouter } from "next/navigation";

type Plan = {
	id: number;
	name: string;
	description: string;
	details: string;
	tip: string;
};

export default function FinancialPlans() {
	const [plans, setPlans] = useState<Plan[]>([]);
	const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

	useEffect(() => {
		async function fetchPlans() {
			try {
				const response = await fetchGet("plans");
				setPlans(response);
				if (response.length > 0) {
					setSelectedPlan(response[0]);
				}
			} catch (error) {
				console.error("Failed to fetch plans:", error);
			}
		}

		fetchPlans();
	}, []);

	const router = useRouter();
	async function goToPlan(id: number) {
		try {
			router.push(`/plan/${id}`);
		} catch (error) {
			console.log("cannot go to plan", error);
		}
	}

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
			<div className="flex">
				{/* Sidebar */}

				{/* Main content */}
				<main className="flex-1 p-6 overflow-auto">
					<h1 className="text-3xl font-bold mb-6">Financial Plans Overview</h1>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{plans.map((plan) => (
							<Card key={plan.id} className="hover:shadow-lg transition-shadow">
								<CardHeader>
									<CardTitle className="text-pretty truncate">
										{plan.name}
									</CardTitle>
									<CardDescription>{plan.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<Button
										variant="outline"
										className="w-full"
										onClick={() => {
											setSelectedPlan(plan);
											goToPlan(plan.id);
										}}
									>
										View Details <ChevronRight className="ml-2 h-4 w-4" />
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</main>
			</div>
      {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem doloribus dicta quod sunt ratione sit placeat eaque! Necessitatibus, iure neque. Quod cumque aspernatur perferendis amet itaque, neque quia quae ea deserunt ut laboriosam nulla consectetur libero excepturi est repellat incidunt vero consequatur a. Odit nulla ea eaque voluptatibus, iure illum magnam adipisci sapiente et perferendis culpa porro, libero reprehenderit veritatis eum eligendi velit, quo placeat quasi. Magnam, nihil? Ipsum totam quaerat quidem eveniet deserunt excepturi provident quibusdam repellendus. Rerum ullam mollitia libero provident facilis cumque nostrum id sapiente. Totam aspernatur hic sint veniam nulla consequatur dolore a, cupiditate nihil possimus dolor commodi tempora asperiores doloribus necessitatibus animi, voluptas quos excepturi deleniti iste sed molestiae beatae perspiciatis! Cumque perferendis voluptate voluptatum rerum? Porro fugiat, sed iste a ipsum commodi debitis alias laborum exercitationem ad numquam eligendi, deserunt voluptate doloribus quam vel deleniti sit libero. Id deleniti odit earum harum ex reprehenderit voluptates quisquam iure veritatis qui, officia sit neque distinctio quod officiis sint ipsam repellendus vitae similique assumenda necessitatibus voluptatum ducimus voluptas dolore. Quos eligendi dignissimos perferendis voluptatum voluptas quia qui sapiente soluta nulla, laboriosam quas porro magni voluptates. Sit autem ducimus, delectus aut rerum iusto culpa, voluptatem quos, quo consequuntur aspernatur accusamus cumque necessitatibus ullam dolore voluptates reprehenderit quis ratione officia maxime quasi nostrum illo atque fugit. Cupiditate, sequi nihil vero veniam necessitatibus debitis sunt autem neque nostrum quidem quas sapiente quo deleniti et eum blanditiis magni iste qui harum, eveniet quos exercitationem error repudiandae. Aspernatur, suscipit culpa ex consequatur quidem sit numquam deleniti molestias eos aut quam error sequi non harum! Dolor porro praesentium similique quae excepturi reiciendis non quia iste laboriosam hic ex architecto fugit ducimus, doloribus quis voluptatibus corrupti sed fugiat. Dolorem, aliquid! Totam fuga dolores eum molestias, explicabo fugit accusantium dolorum autem, exercitationem porro, est nemo id dolore voluptatem. Mollitia ipsam veniam minima eum necessitatibus repellendus illum, quisquam commodi omnis? Sapiente ratione suscipit nostrum fugit eum nobis libero fugiat, totam numquam ipsum nisi magnam doloribus iste repellat voluptatum itaque rem quas autem minima omnis nam? Aliquam obcaecati qui nobis tempore blanditiis quas beatae, corrupti amet nostrum eius quaerat id repudiandae, error sunt architecto aliquid a ipsam commodi. Enim adipisci ipsa vitae veritatis ipsum quo aperiam, repellat hic reiciendis error, esse aut officiis in molestiae animi vel? Ex saepe neque hic omnis accusamus, deserunt mollitia deleniti suscipit, iste veniam tempora dolores incidunt sapiente, eius amet! Itaque ducimus nemo tempora cupiditate corporis est, possimus culpa nobis iusto odit inventore quaerat molestiae dolorem numquam optio ratione tempore soluta molestias? Omnis necessitatibus velit quisquam aspernatur in aut ratione ipsum a. Tempore consectetur explicabo, non harum ipsam eligendi ipsa tenetur ullam placeat quos incidunt recusandae libero numquam magni. Iure iusto ut facere odit fuga repellendus quod eius! Animi ipsum officia laudantium molestiae nostrum itaque atque numquam pariatur, natus qui voluptatibus excepturi voluptates voluptas, consequuntur quia eos perspiciatis consequatur? Quaerat quibusdam voluptates distinctio consequuntur tenetur. Maiores incidunt modi deleniti, iusto molestiae ducimus asperiores velit vero doloribus delectus nemo nihil commodi? Sint.</div> */}
      {/* <div id="news">news</div> */}
      {/* <div id="plan">plan</div> */}
		</div>
	);
}
