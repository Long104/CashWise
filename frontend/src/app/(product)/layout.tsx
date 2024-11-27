"use client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname } from "next/navigation"; // This hook gets the current pathname
import Link from "next/link";
import ReactQueryProvider from "@/tanstack/query/ReactQueryProvider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname(); // Get the current pathname
	const eachPath = pathname?.split("/") ?? []; // Split pathname into segments

	return (
		<ReactQueryProvider>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<ModeToggle />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<Breadcrumb>
								<BreadcrumbList>
									{/* Dynamic breadcrumb item for the first path segment */}
									{eachPath[1] && (
										<BreadcrumbItem className="hidden md:block">
											<BreadcrumbLink href="#">{eachPath[1]}</BreadcrumbLink>
										</BreadcrumbItem>
									)}

									{/* Dynamic breadcrumb item for the second path segment */}
									{eachPath[2] && (
										<>
											<BreadcrumbSeparator className="hidden md:block" />
											<BreadcrumbItem>
												<BreadcrumbPage>{eachPath[2]}</BreadcrumbPage>
											</BreadcrumbItem>
										</>
									)}

									{/* You can add more path segments (3, 4, etc.) if needed */}
								</BreadcrumbList>
							</Breadcrumb>
						</div>
						<Button variant={"outline"} className="mr-2" asChild>
							<Link href="/createPlan">+</Link>
						</Button>
					</header>
					{children}
				</SidebarInset>
			</SidebarProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</ReactQueryProvider>
	);
}
