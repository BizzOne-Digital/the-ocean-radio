import { PageHero } from "@/components/layout/PageHero";
import { WaveTransition } from "@/components/motion/WaveTransition";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_IMAGES } from "@/lib/images";
import { OnAirListenSection } from "./OnAirListenSection";
import { OnAirNowStrip } from "./OnAirNowStrip";
import { OnAirSubNav } from "./OnAirSubNav";
import {
  RecentlyPlayedIntroSection,
  RecentlyPlayedListSection,
} from "./RecentlyPlayedSections";

export function OnAirRecentlyPlayedContent() {
  return (
    <>
      <PageHero
        eyebrow="On Air"
        title="Recently Played"
        description="Catch up on what just aired on The Ocean Radio — song history for our nightly Christian music program, 9:00 PM to 12:00 AM."
        backgroundImage={SITE_IMAGES.premiumAudio}
        backgroundAlt="Premium audio listening — The Ocean Radio recently played"
      />
      <OnAirSubNav />
      <OnAirNowStrip />
      <WaveTransition variant="deep" />

      <RecentlyPlayedIntroSection />
      <RecentlyPlayedListSection />
      <WaveTransition variant="mid" />

      <OnAirListenSection />
      <WaveTransition variant="foam" flip />

      <CTASection
        title="See Tonight's Show"
        description="The on-air schedule lists our single nightly program — Christian music at the same time every evening."
        primaryHref="/on-air/schedule"
        primaryLabel="On Air Schedule"
        secondaryHref="/concerts-events"
        secondaryLabel="Concerts & Events"
        backgroundImage={SITE_IMAGES.moonlitOcean}
      />
    </>
  );
}
