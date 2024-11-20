"use client";

import * as React from "react";
import {
	AudioWaveform,
	BookOpen,
	Bot,
	Command,
	Frame,
	GalleryVerticalEnd,
	Map,
	PieChart,
	Settings2,
	SquareTerminal,
	Package,
	Building2,
	NotebookPen,
	Newspaper,
	House,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { fetchGet, fetchPost, fetchDelete } from "@/fetch/client";

import { useAuth } from "@/context/auth";
// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { user, login, logout } = useAuth();

	const data = {
		user: {
			name: user?.name,
			email: user?.email,
			avatar: "/avatars/shadcn.jpg",
		},
		teams: [
			{
				name: "CashWise",
				logo: Building2,
				plan: "Company",
			},
			{
				name: "Pricing",
				logo: Package,
				plan: "pricing",
			},
			{
				name: "About Us",
				logo: GalleryVerticalEnd,
				plan: "About us",
			},
		],
		navMain: [
			{
				title: "Plan",
				url: "#",
				icon: NotebookPen,
				// isActive: true,
				items: [
					{
						title: "History",
						url: "#",
					},
					{
						title: "Starred",
						url: "#",
					},
					{
						title: "Settings",
						url: "#",
					},
				],
			},
			{
				title: "News&Forums",
				url: "#",
				icon: Newspaper,
				items: [
					{
						title: "Money",
						url: "#",
					},
					{
						title: "Saving",
						url: "#",
					},
					{
						title: "Story",
						url: "#",
					},
				],
			},
			{
				title: "Settings",
				url: "#",
				icon: Settings2,
				items: [
					{
						title: "General",
						url: "#",
					},
					{
						title: "Team",
						url: "#",
					},
					{
						title: "Billing",
						url: "#",
					},
					{
						title: "Limits",
						url: "#",
					},
				],
			},
		],
		projects: [
			{
				name: "Home",
				url: "/home",
				icon: House,
			},
			{
				name: "Plan",
				url: "#plan",
				icon: Newspaper,
			},
			{
				name: "News",
				url: "#news",
				icon: Newspaper,
			},
		],
	};
	// useEffect(() => {}, []);
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
