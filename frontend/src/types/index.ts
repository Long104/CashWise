// types/index.ts
export type Plan = {
	id: number;
	user_id: number;
	name: string;
	plan_type: string;
	visibility: string;
	duration: string;
	description?: string;
	auto_save: boolean;
	initial_budget: number;
};
