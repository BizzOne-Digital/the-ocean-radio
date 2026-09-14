import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "How do I get started?",
    a: "Use the contact page or email us with your business name, what you would like to promote, and your preferred timing. We will reply to discuss fit and next steps.",
  },
  {
    q: "Do you publish advertising rates online?",
    a: "No. Pricing depends on your campaign scope and placement. Contact us for a quote tailored to your needs.",
  },
  {
    q: "Who listens to The Ocean Radio?",
    a: "The station serves listeners online, with audiences connected from the Philippines, North America, and wherever people tune in on the web. We do not quote listener statistics on the website — ask us when you inquire.",
  },
  {
    q: "What kind of businesses advertise with you?",
    a: "Local services, online brands, community organizations, and others who want a calm, music-led context for their message. If you are unsure whether you are a fit, reach out and we will talk it through.",
  },
  {
    q: "Can I hear the station before committing?",
    a: "Yes. Visit the homepage and use Listen Live to experience the format and tone of The Ocean Radio.",
  },
];

export function ServicesFaqSection() {
  return (
    <section className="bg-deep-ocean py-20 md:py-28" aria-labelledby="services-faq-heading">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="services-faq-heading"
            eyebrow="Common Questions"
            title="Before You Advertise"
            align="center"
          />
        </DirectionalReveal>

        <dl className="mt-12 space-y-6">
          {faqs.map((item, i) => (
            <DirectionalReveal key={item.q} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.04}>
              <div className="rounded-2xl border border-aqua/10 bg-dark-ocean/50 px-5 py-5 md:px-6">
                <dt className="font-display font-semibold text-foam">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-foam/70">{item.a}</dd>
              </div>
            </DirectionalReveal>
          ))}
        </dl>

        <DirectionalReveal direction="scale" className="mt-12 text-center">
          <p className="text-sm text-foam/65">
            Ready to discuss your campaign?
          </p>
          <div className="mt-5">
            <Button href="/contact" showArrow className="uppercase tracking-[0.12em]">
              Contact For Advertising
            </Button>
          </div>
        </DirectionalReveal>
      </div>
    </section>
  );
}
