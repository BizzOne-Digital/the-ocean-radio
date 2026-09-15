import { PageHero } from "@/components/layout/PageHero";
import { WaveTransition } from "@/components/motion/WaveTransition";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_IMAGES } from "@/lib/images";
import { OnAirListenSection } from "./OnAirListenSection";
import { OnAirNowStrip } from "./OnAirNowStrip";
import { OnAirSubNav } from "./OnAirSubNav";
import {
  ScheduleIntroSection,
  ScheduleProgramSection,
  ScheduleTableSection,
} from "./ScheduleSections";

export function OnAirScheduleContent() {
  return (
    <>
      <PageHero
        eyebrow="On Air"
        title="On Air Schedule"
        description="One show on the clock: Christian music every night from 9:00 PM to 12:00 AM on The Ocean Radio."
        backgroundImage={SITE_IMAGES.oceanBroadcastStudio}
        backgroundAlt="Ocean broadcast studio — The Ocean Radio on-air schedule"
      />
      <OnAirSubNav />
      <OnAirNowStrip />
      <WaveTransition variant="deep" />

      <ScheduleIntroSection />
      <ScheduleProgramSection />
      <ScheduleTableSection />
      <WaveTransition variant="mid" />

      <OnAirListenSection />
      <WaveTransition variant="deep" flip />

      <CTASection
        title="Missed A Song?"
        description="Recently Played keeps a running log of tracks from the stream once metadata is available."
        primaryHref="/on-air/recently-played"
        primaryLabel="Recently Played"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
        backgroundImage={SITE_IMAGES.underwaterRays}
      />
    </>
  );
}
