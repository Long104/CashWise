import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="w-full bg-[#101516] text-white border-t border-white/10">
			{/* Main footer container */}
			<div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
				{/* Top brand and directory */}
				<div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
					{/* Brand column */}
					<div className="md:col-span-2 space-y-4">
						<div className="flex items-center gap-3">
							<Image
								src={"/logo.webp"}
								alt="Senzen Logo"
								className="rounded-md object-cover"
								width={32}
								height={32}
							/>
							<span className="font-sans text-xl font-bold tracking-tight text-white">
								Senzen
							</span>
						</div>
						<p className="font-sans text-sm text-white/60 max-w-sm leading-relaxed">
							Financial planning. Built better. Build automated money rules without writing code.
						</p>
					</div>

					{/* Directory column 1 */}
					<div className="space-y-3">
						<h4 className="font-sans text-sm font-semibold text-white">
							Product
						</h4>
						<ul className="space-y-2 font-sans text-sm text-white/60">
							<li>
								<Link href="/createPlan" className="hover:text-white transition-colors">
									Create Plan
								</Link>
							</li>
							<li>
								<Link href="/home" className="hover:text-white transition-colors">
									Dashboard
								</Link>
							</li>
							<li>
								<Link href="/pricing" className="hover:text-white transition-colors">
									Pricing
								</Link>
							</li>
						</ul>
					</div>

					{/* Directory column 2 */}
					<div className="space-y-3">
						<h4 className="font-sans text-sm font-semibold text-white">
							Features
						</h4>
						<ul className="space-y-2 font-sans text-sm text-white/60">
							<li>
								<Link href="/#features" className="hover:text-white transition-colors">
									Automated Rules
								</Link>
							</li>
							<li>
								<Link href="/#strategies" className="hover:text-white transition-colors">
									Strategies
								</Link>
							</li>
							<li>
								<span>Bank-grade Encryption</span>
							</li>
						</ul>
					</div>

					{/* Directory column 3 */}
					<div className="space-y-3">
						<h4 className="font-sans text-sm font-semibold text-white">
							Account
						</h4>
						<ul className="space-y-2 font-sans text-sm text-white/60">
							<li>
								<Link href="/sign-in" className="hover:text-white transition-colors">
									Sign In
								</Link>
							</li>
							<li>
								<Link href="/sign-up" className="hover:text-white transition-colors">
									Get Started Free
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Hairline divider with legal line */}
				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-white/50">
					<div>
						© {new Date().getFullYear()} Senzen Financial Systems. All rights reserved.
					</div>
					<div className="flex gap-6">
						<span>Security First</span>
						<span>•</span>
						<span>WCAG AA Compliant</span>
						<span>•</span>
						<span>Encrypted Storage</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
