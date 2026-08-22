import { HeroComposer, StatsProofRow } from "@example/spotlight-demo";
import { TimelineDemo } from "@example/timeline-demo";
import { Footer } from "@example/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<>
			{/* <div className="[&_*]:overscroll-none"> */}
			<HeroComposer />
			<StatsProofRow />
			<TimelineDemo />
			<section className="w-full py-24 bg-background relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 md:px-10">
					{/* CTA Box */}
					<div className="w-full max-w-3xl mx-auto">
						<div className="bg-card border border-border rounded-lg p-10 shadow-sm">
							<div className="text-center space-y-8">
								<p className="font-mono text-xs text-primary">GET STARTED</p>
								<h2 className="font-sans text-4xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight">
									Financial planning. Built better.
								</h2>
								<p className="font-sans text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
									Build automated money rules without writing code.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
									<Link href="/sign-up">
										<Button size="lg" className="w-full sm:w-auto bg-[#1EC072] hover:bg-[#049F55] text-[#101516] font-sans font-semibold shadow-sm focus-visible:ring-[#1EC072]">
											Get Started Free
										</Button>
									</Link>
									<Link href="/pricing">
										<Button variant="outline" size="lg" className="w-full sm:w-auto border-border bg-card text-[#101516] hover:border-[#1EC072]/40 font-sans font-semibold">
											Explore Strategies
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-24 bg-background relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 md:px-10">
					<div className="w-full max-w-4xl mx-auto">
						<div className="text-center space-y-4 mb-12">
							<p className="font-mono text-xs text-primary">TRANSPARENT PRICING</p>
							<h2 className="font-sans text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
								Two plans. No hidden fees.
							</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Free Plan */}
							<div className="bg-card border border-border rounded-lg p-8 shadow-sm flex flex-col">
								<p className="font-mono text-xs text-muted-foreground uppercase mb-2">Free Plan</p>
								<p className="font-sans text-4xl font-bold text-[#101516] mb-1">$0<span className="text-base font-medium text-muted-foreground">/mo</span></p>
								<p className="font-sans text-sm text-muted-foreground mb-6">Everything you need to start planning.</p>
								<ul className="space-y-3 font-sans text-sm text-foreground mb-8 flex-1">
									<li className="flex items-center gap-2"><span className="text-[#1EC072] font-bold">✓</span> Unlimited budgets &amp; ledgers</li>
									<li className="flex items-center gap-2"><span className="text-[#1EC072] font-bold">✓</span> Core money rules</li>
									<li className="flex items-center gap-2"><span className="text-[#1EC072] font-bold">✓</span> Bank-grade encryption</li>
								</ul>
								<Link href="/sign-up" className="block">
									<Button size="lg" variant="outline" className="w-full border-border bg-card text-[#101516] hover:border-[#1EC072]/40 font-semibold focus-visible:ring-[#1EC072]">
										Get Started Free
									</Button>
								</Link>
							</div>
							{/* Pro Pass */}
							<div className="bg-[#101516] border border-[#101516] rounded-lg p-8 shadow-sm flex flex-col relative overflow-hidden">
								<span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-wider bg-[#1EC072] text-[#101516] font-semibold px-2 py-0.5 rounded-full">Most Popular</span>
								<p className="font-mono text-xs text-[#1EC072] uppercase mb-2">Pro Pass</p>
								<p className="font-sans text-4xl font-bold text-white mb-1">$19<span className="text-base font-medium text-white/60">/mo</span></p>
								<p className="font-sans text-sm text-white/60 mb-6">Full automation power for serious planners.</p>
								<ul className="space-y-3 font-sans text-sm text-white/90 mb-8 flex-1">
									<li className="flex items-center gap-2"><span className="text-[#1EC072] font-bold">✓</span> Everything in Free</li>
									<li className="flex items-center gap-2"><span className="text-[#1EC072] font-bold">✓</span> Unlimited automated money rules</li>
									<li className="flex items-center gap-2"><span className="text-[#1EC072] font-bold">✓</span> Real-time strategy intelligence</li>
									<li className="flex items-center gap-2"><span className="text-[#1EC072] font-bold">✓</span> Priority support</li>
								</ul>
								<Link href="/sign-up" className="block">
									<Button size="lg" className="w-full bg-[#1EC072] hover:bg-[#049F55] text-[#101516] font-sans font-semibold shadow-sm focus-visible:ring-[#1EC072] focus-visible:ring-offset-2">
										Get Pro Pass
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
			{/* </div> */}
		</>
	);
}
