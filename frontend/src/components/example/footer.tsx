import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Footer = () => {
	return (
		<footer className="w-full bg-[#181715] text-[#D6CFC7] border-t border-[#262320]">
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
								className="rounded-md object-cover brightness-90"
								width={32}
								height={32}
							/>
							<span className="font-serif text-2xl font-medium tracking-tight text-[#F7F4EF]">
								Senzen
							</span>
						</div>
						<p className="font-sans text-sm text-[#9E968D] max-w-sm leading-relaxed">
							An editorial ledger for mindful personal finance. Calm, private, and deliberate money management built for clarity.
						</p>
						<p className="font-mono text-xs text-[#9E968D]">
							[ EXHIBIT • LEDGER SYSTEM 2026 ]
						</p>
					</div>

					{/* Directory column 1 */}
					<div className="space-y-3">
						<h4 className="font-mono text-xs tracking-tight text-[#F7F4EF]">
							01 / Product
						</h4>
						<ul className="space-y-2 text-sm text-[#9E968D]">
							<li>
								<Link href="/createPlan" className="hover:text-[#F7F4EF] transition-colors">
									Create Plan
								</Link>
							</li>
							<li>
								<Link href="/home" className="hover:text-[#F7F4EF] transition-colors">
									Dashboard
								</Link>
							</li>
							<li>
								<Link href="/pricing" className="hover:text-[#F7F4EF] transition-colors">
									Pricing
								</Link>
							</li>
						</ul>
					</div>

					{/* Directory column 2 */}
					<div className="space-y-3">
						<h4 className="font-mono text-xs tracking-tight text-[#F7F4EF]">
							02 / Philosophy
						</h4>
						<ul className="space-y-2 text-sm text-[#9E968D]">
							<li>
								<span className="text-[#9E968D]">Tactile Paper</span>
							</li>
							<li>
								<span className="text-[#9E968D]">Editorial Ledgers</span>
							</li>
							<li>
								<span className="text-[#9E968D]">No Data Selling</span>
							</li>
						</ul>
					</div>

					{/* Directory column 3 */}
					<div className="space-y-3">
						<h4 className="font-mono text-xs tracking-tight text-[#F7F4EF]">
							03 / Access
						</h4>
						<ul className="space-y-2 text-sm text-[#9E968D]">
							<li>
								<Link href="/sign-in" className="hover:text-[#F7F4EF] transition-colors">
									Sign In
								</Link>
							</li>
							<li>
								<Link href="/sign-up" className="hover:text-[#F7F4EF] transition-colors">
									Register
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Hairline divider with stamp */}
				<div className="border-t border-[#262320] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9E968D]">
					<div className="font-mono">
						© {new Date().getFullYear()} SENZEN FINANCIAL SYSTEMS. ALL RIGHTS RESERVED.
					</div>
					<div className="flex gap-6 font-sans">
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
