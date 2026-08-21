import React from "react";
import { NavigationMenuDemo } from "@components/navbar-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between py-3.5 px-6 md:px-16 bg-background/90 backdrop-blur-sm border-b border-border text-foreground transition-colors">
			<div className="flex items-center gap-3">
				<Image
					src={"/logo.webp"}
					alt="Senzen Logo"
					className="rounded-md object-cover"
					width={28}
					height={28}
				/>
				<Link href="/" className="font-serif text-xl tracking-tight font-medium text-foreground hover:opacity-90 transition-opacity">
					Senzen
				</Link>
			</div>
			
			<div className="flex items-center gap-6">
				<ul className="hidden md:flex items-center gap-4">
					<NavigationMenuDemo />
				</ul>
				<div className="flex items-center gap-3">
					<Link href="/sign-in">
						<Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-sans text-sm">
							Sign In
						</Button>
					</Link>
					<Link href="/sign-up">
						<Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm px-4 shadow-sm">
							Start Planning
						</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
