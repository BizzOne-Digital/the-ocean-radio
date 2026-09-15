import { PageHero } from "@/components/layout/PageHero";
import { WaveTransition } from "@/components/motion/WaveTransition";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_IMAGES } from "@/lib/images";
import {
  ConcertsConnectSection,
  ConcertsHighlightsSection,
  ConcertsIntroSection,
} from "./ConcertsEventsSections";

export function ConcertsEventsPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Concerts"
        titleAccent="& Events"
        description="Live music, faith gatherings, and station happenings from The Ocean Radio — announced honestly, shared with our listeners worldwide."
        backgroundImage={SITE_IMAGES.globalConnection}
        backgroundAlt="Global connection — The Ocean Radio concerts and events"
      />
      <WaveTransition variant="deep" />

      <ConcertsIntroSection />
      <ConcertsHighlightsSection />
      <WaveTransition variant="mid" />

      <ConcertsConnectSection />

      <CTASection
        title="On Air Every Night"
        description="Tune in for Christian music from 9:00 PM to midnight, or browse what played recently on the station."
        primaryHref="/on-air/schedule"
        primaryLabel="On Air Schedule"
        secondaryHref="/on-air/recently-played"
        secondaryLabel="Recently Played"
        backgroundImage={SITE_IMAGES.oceanDigitalWaves}
      />
    </>
  );
}
