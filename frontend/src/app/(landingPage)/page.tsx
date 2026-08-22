import { HeroComposer, StatsProofRow } from "@example/spotlight-demo";
import { TimelineDemo } from "@example/timeline-demo";
import { Footer } from "@example/footer";

export default function Home() {
	return (
		<>
			<HeroComposer />
			<StatsProofRow />
			<TimelineDemo />
			<Footer />
		</>
	);
}
