import { HeroComposer } from "@example/hero-composer";
import { AiPlanDemo } from "@example/ai-plan-demo";
import { HighlightsBand } from "@example/highlights-band";
import { FaqSection } from "@example/faq-section";
import { Footer } from "@example/footer";

export default function Home() {
	return (
		<>
			<HeroComposer />
			<AiPlanDemo />
			<HighlightsBand />
			<FaqSection />
			<Footer />
		</>
	);
}