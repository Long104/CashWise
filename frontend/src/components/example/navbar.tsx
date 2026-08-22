import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors">
			<div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-10">
				<div className="flex items-center gap-8">
					<Link href="/" className="flex items-center gap-2.5 group">
						<div className="w-8 h-8 rounded-md bg-[#101516] flex items-center justify-center text-[#1ec072] font-mono font-bold text-base shadow-sm">
							S
						</div>
						<span className="font-sans text-xl font-bold tracking-tight text-foreground group-hover:opacity-90 transition-opacity">
							Senzen
						</span>
					</Link>

					<nav className="hidden md:flex items-center gap-6">
						<Link
							href="/#features"
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Features
						</Link>
						<Link
							href="/#strategies"
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Strategies
						</Link>
						<Link
							href="/pricing"
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Pricing
						</Link>
						<Link
							href="/createPlan"
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Docs
						</Link>
					</nav>
				</div>

				<div className="flex items-center gap-3">
						<Link href="/sign-in">
							<Button
								variant="ghost"
								size="sm"
								className="text-[#101516] hover:bg-[#e5e2dd]/40 font-semibold text-sm px-4 h-9"
							>
								Sign In
							</Button>
						</Link>
					<Link href="/sign-up">
						<Button
							size="sm"
							className="bg-[#1EC072] hover:bg-[#049F55] text-[#101516] font-semibold text-sm px-4 h-9 rounded-[6px] shadow-sm transition-all focus-visible:ring-[#1EC072]"
						>
							Get Started
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}
