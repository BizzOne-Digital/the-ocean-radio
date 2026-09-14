import { PageHero } from "@/components/layout/PageHero";
import { WaveTransition } from "@/components/motion/WaveTransition";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_IMAGES } from "@/lib/images";
import { ServicesAdvertisingBlock } from "./ServicesAdvertisingBlock";
import { ServicesAudienceSection } from "./ServicesAudienceSection";
import { ServicesFaqSection } from "./ServicesFaqSection";
import { ServicesIntroSection } from "./ServicesIntroSection";
import { ServicesOfferingsSection } from "./ServicesOfferingsSection";
import { ServicesProcessSection } from "./ServicesProcessSection";

export function ServicesPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Radio That Connects."
        titleAccent="Advertising That Stands Out."
        description="The Ocean Radio offers online advertising opportunities for brands that want to reach listeners in a relaxed, engaging radio environment."
        backgroundImage={SITE_IMAGES.oceanDigitalWaves}
        backgroundAlt="Ocean waves with luminous broadcast-style light trails"
      />
      <WaveTransition variant="deep" />

      <ServicesIntroSection />
      <ServicesAdvertisingBlock />
      <WaveTransition variant="mid" />

      <ServicesOfferingsSection />
      <ServicesProcessSection />
      <ServicesAudienceSection />
      <ServicesFaqSection />

      <CTASection
        title="Let's Build Your Campaign"
        description="Tell us about your brand and we'll walk you through advertising options on The Ocean Radio — pricing shared on request."
        primaryHref="/contact"
        primaryLabel="Contact For Pricing"
        secondaryHref="/#listen-live"
        secondaryLabel="Listen To The Station"
        backgroundImage={SITE_IMAGES.moonlitOcean}
      />
    </>
  );
}
