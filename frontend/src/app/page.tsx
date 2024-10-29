import { SpotlightPreview } from "@example/spotlight-demo";
import { TimelineDemo } from "@example/timeline-demo";
import { Footer } from "@example/footer";
import {InfiniteMovingCardsDemo} from "@example/infinite-moving-cards-demo"
export default function Home() {
	return (
		<>
			<SpotlightPreview />
			<TimelineDemo />
    <InfiniteMovingCardsDemo />
			<Footer />
      <div>hello</div>
		</>
	);
}
