import { PageHero } from "@/components/layout/PageHero";
import { WaveTransition } from "@/components/motion/WaveTransition";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_IMAGES } from "@/lib/images";
import { ContactChannels } from "./ContactChannels";
import { ContactFormSection } from "./ContactFormSection";
import { ContactListenBanner } from "./ContactListenBanner";

export function ContactPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Connect"
        description="Reach out for listening questions, partnerships, or online advertising on The Ocean Radio. We're happy to hear from you."
        backgroundImage={SITE_IMAGES.contactConnect}
        backgroundAlt="Mobile connection by the ocean — contact The Ocean Radio"
      />
      <WaveTransition variant="deep" />

      <ContactChannels />
      <ContactListenBanner />
      <WaveTransition variant="mid" />

      <ContactFormSection />

      <CTASection
        title="Prefer The Airwaves?"
        description="Head back to the homepage player and enjoy relaxing favorites while you wait for a reply."
        primaryHref="/#listen-live"
        primaryLabel="Open Live Player"
        secondaryHref="/services"
        secondaryLabel="View Services"
        backgroundImage={SITE_IMAGES.underwaterRays}
      />
    </>
  );
}
