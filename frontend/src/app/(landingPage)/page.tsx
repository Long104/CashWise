import { SpotlightPreview } from "@example/spotlight-demo";
import { TimelineDemo } from "@example/timeline-demo";
import { Footer } from "@example/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<>
			{/* <div className="[&_*]:overscroll-none"> */}
			<SpotlightPreview />
			<section className="w-full py-16 md:py-20 bg-background relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 md:px-10">
					<div className="w-full">
						<div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
							<p className="font-mono text-xs text-primary mb-8">VERIFIED LEDGER • ENCRYPTED • NO ADS</p>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-border">
								<div className="md:pr-8">
									<p className="font-mono text-[10px] text-muted-foreground mb-2">WEEKLY SURPLUS LEDGER</p>
									<p className="font-sans text-sm md:text-base text-foreground leading-relaxed">
										Every week closes with one honest number — what you kept.
									</p>
								</div>
								<div className="md:px-8">
									<p className="font-mono text-[10px] text-muted-foreground mb-2">AUTOMATED RULES</p>
									<p className="font-sans text-sm md:text-base text-foreground leading-relaxed">
										Rules move money to savings before you can spend it.
									</p>
								</div>
								<div className="md:pl-8">
									<p className="font-mono text-[10px] text-muted-foreground mb-2">ENCRYPTED &amp; PRIVATE</p>
									<p className="font-sans text-sm md:text-base text-foreground leading-relaxed">
										Your ledger stays encrypted and yours. Never sold, never shared.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<TimelineDemo />
			<section className="w-full py-24 bg-background relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 md:px-10">
					{/* CTA Box */}
					<div className="w-full max-w-3xl mx-auto">
						<div className="bg-card border border-border rounded-lg p-10 shadow-sm">
							<div className="text-center space-y-8">
								<p className="font-mono text-xs text-primary">GET STARTED</p>
								<h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight">
									Your money, kept honestly.
								</h2>
								<p className="font-sans text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
									Set your first ledger in under five minutes. No spreadsheets, no bank sellouts — just an honest record of what you earn, spend, and keep.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
									<Link href="/sign-up">
										<Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
											Start Planning
										</Button>
									</Link>
									<Link href="/sign-in">
										<Button variant="outline" size="lg" className="w-full sm:w-auto border-border bg-card text-foreground hover:border-primary/40 font-sans">
											Sign In
										</Button>
									</Link>
								</div>
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
