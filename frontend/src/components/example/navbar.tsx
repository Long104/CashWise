import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
	return (
		<header className="w-full border-b border-[#292524]/80 bg-[#0C0A09]/85 backdrop-blur-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				{/* Left: Brand Logo + Monogram */}
				<Link href="/" className="flex items-center gap-2.5">
					<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-base">
						S
					</div>
					<span className="font-semibold text-lg tracking-tight text-stone-100">
						Senzen
					</span>
				</Link>

				{/* Center: Navigation Links (hidden on mobile) */}
				<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
					<Link
						href="#sandbox"
						className="hover:text-stone-100 transition-colors"
					>
						Engine
					</Link>
					<Link
						href="#demo"
						className="hover:text-stone-100 transition-colors"
					>
						Live Sandbox
					</Link>
					<Link
						href="#features"
						className="hover:text-stone-100 transition-colors"
					>
						Architecture
					</Link>
					<Link
						href="#faq"
						className="hover:text-stone-100 transition-colors"
					>
						FAQ
					</Link>
				</nav>

				{/* Right: Auth & Action CTA */}
				<div className="flex items-center gap-4">
					<Link
						href="/sign-in"
						className="text-sm font-medium text-stone-300 hover:text-white px-3 py-1.5 transition-colors"
					>
						Sign in
					</Link>
					<Link
						href="/createPlan"
						className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm px-4 py-2 rounded-lg shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all flex items-center gap-1.5"
					>
						<span>Get Started</span>
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</div>
		</header>
	);
}