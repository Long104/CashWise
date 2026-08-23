import { HeroComposer } from "@example/spotlight-demo";
import { AiPlanDemo } from "@example/ai-plan-demo";
import { AutomationDemo } from "@example/automation-demo";
import { HighlightsBand } from "@example/highlights-band";
import { WeeklyClarity } from "@example/weekly-clarity";
import { FaqSection } from "@example/faq-section";
import { Footer } from "@example/footer";
import { HeroStatsBand } from "@example/spotlight-demo";

export default function Home() {
	return (
		<>
			<HeroComposer />
			<HeroStatsBand />
			<AiPlanDemo />
			<AutomationDemo />
			<HighlightsBand />
			<WeeklyClarity />
			<FaqSection />
			<Footer />
		</>
	);
}