import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionImage } from "@/components/ui/SectionImage";
import { SITE_IMAGES } from "@/lib/images";

export function ContactFormSection() {
  return (
    <section className="bg-deep-ocean py-16 md:py-24" aria-labelledby="contact-form-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-stretch md:gap-12 md:px-8">
        <DirectionalReveal direction="left" className="hidden md:block">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-aqua/10 shadow-card">
            <SectionImage
              src={SITE_IMAGES.moonlitOcean}
              alt="Moonlit ocean — calm night listening"
              className="h-full w-full"
              overlay="medium"
              sizes="40vw"
            />
          </div>
        </DirectionalReveal>

        <DirectionalReveal direction="right">
          <GlassCard className="h-full p-6 md:p-10">
            <h2 id="contact-form-heading" className="font-display text-2xl font-bold text-foam">
              Send A Message
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foam/65">
              Share your name, email, and message below. When delivery is configured on the server,
              submissions are routed automatically — otherwise use the contact details above.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </GlassCard>
        </DirectionalReveal>
      </div>
    </section>
  );
}
