import React from "react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="w-full border-t border-stone-800/80 bg-[#0C0A09] text-stone-400 text-sm py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
				{/* Col 1 & 2 (Brand) */}
				<div className="col-span-2 space-y-4">
					<div className="font-bold text-stone-100 text-lg">Senzen</div>
					<p className="text-stone-400 text-xs max-w-sm leading-relaxed">
						The sovereign financial operating system. Rule-driven budgeting,
						algorithmic routing, and deterministic wealth velocity.
					</p>
					<div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
						<span className="w-2 h-2 rounded-full bg-emerald-500" />
						All Systems Operational
					</div>
				</div>

				{/* Col 3 (Platform) */}
				<div className="space-y-2.5">
					<div className="font-semibold text-stone-200 text-xs font-mono uppercase tracking-wider">
						Platform
					</div>
					<ul className="space-y-2.5 text-sm">
						<li>
							<Link href="#sandbox" className="hover:text-stone-100 transition-colors">Logic Engine</Link>
						</li>
						<li>
							<Link href="#demo" className="hover:text-stone-100 transition-colors">Interactive Sandbox</Link>
						</li>
						<li>
							<Link href="/createPlan" className="hover:text-stone-100 transition-colors">Plan Builder</Link>
						</li>
						<li>
							<Link href="/pricing" className="hover:text-stone-100 transition-colors">Plans &amp; Tiers</Link>
						</li>
					</ul>
				</div>

				{/* Col 4 (Resources) */}
				<div className="space-y-2.5">
					<div className="font-semibold text-stone-200 text-xs font-mono uppercase tracking-wider">
						Architecture
					</div>
					<ul className="space-y-2.5 text-sm">
						<li>
							<Link href="#features" className="hover:text-stone-100 transition-colors">Deterministic Rules</Link>
						</li>
						<li>
							<Link href="#faq" className="hover:text-stone-100 transition-colors">Security &amp; Encryption</Link>
						</li>
						<li>
							<Link href="/docs" className="hover:text-stone-100 transition-colors">Documentation</Link>
						</li>
					</ul>
				</div>

				{/* Col 5 (Legal) */}
				<div className="space-y-2.5">
					<div className="font-semibold text-stone-200 text-xs font-mono uppercase tracking-wider">
						Sovereignty
					</div>
					<ul className="space-y-2.5 text-sm">
						<li>
							<Link href="/privacy" className="hover:text-stone-100 transition-colors">Privacy Policy</Link>
						</li>
						<li>
							<Link href="/terms" className="hover:text-stone-100 transition-colors">Terms of Protocol</Link>
						</li>
						<li>
							<span className="text-xs text-stone-500">&copy; {new Date().getFullYear()} Senzen Inc.</span>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
