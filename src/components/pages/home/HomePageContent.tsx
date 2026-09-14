import { Hero } from "@/components/hero/Hero";
import { WaveTransition } from "@/components/motion/WaveTransition";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { GlobalAudienceSection } from "@/components/sections/GlobalAudienceSection";
import { HomeStationIntro } from "@/components/sections/HomeStationIntro";
import { LiveRadioSection } from "@/components/sections/LiveRadioSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { SoundscapeSection } from "@/components/sections/SoundscapeSection";
import { WhyListenSection } from "@/components/sections/WhyListenSection";

export function HomePageContent() {
  return (
    <>
      <Hero />
      <WaveTransition variant="deep" />

      <LiveRadioSection />
      <WaveTransition variant="mid" />

      <HomeStationIntro />
      <AboutSection />
      <WaveTransition variant="foam" />

      <WhyListenSection />
      <ServicesPreview />
      <SoundscapeSection />

      <GlobalAudienceSection />
      <WaveTransition variant="deep" flip />

      <CTASection
        title="Ready To Tune In?"
        description="Press play and let relaxing favorites carry you through the day — or reach out to connect with The Ocean Radio team."
        primaryHref="/#listen-live"
        primaryLabel="Listen Live"
        secondaryHref="/contact"
        secondaryLabel="Get In Touch"
      />
    </>
  );
}
