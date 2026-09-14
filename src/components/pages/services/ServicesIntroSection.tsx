import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

export function ServicesIntroSection() {
  return (
    <section className="border-b border-aqua/10 bg-deep-ocean py-16 md:py-20" aria-labelledby="services-intro-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <DirectionalReveal direction="left">
            <SectionHeading
              id="services-intro-heading"
              eyebrow="Why The Ocean Radio"
              title="Advertising In A Calm Listening Space"
            />
            <p className="mt-6 leading-relaxed text-foam/75">
              {SITE.name} is built around {SITE.tagline.toLowerCase()} — a smooth internet radio
              experience for people who want music that feels easy, familiar, and unhurried. That
              environment is a strong fit for brands that want to be heard without shouting.
            </p>
          </DirectionalReveal>
          <DirectionalReveal direction="right">
            <div className="space-y-5 text-sm leading-relaxed text-foam/70 md:text-base">
              <p>
                Online radio advertising on The Ocean Radio puts your message alongside the
                station&apos;s broadcast — reaching listeners who are already tuned in for
                relaxation, focus, or background listening at home, at work, or on the move.
              </p>
              <p>
                We work with businesses and organizations that value clarity and consistency.
                Whether you are growing awareness in the Philippines, North America, or both,
                we can talk through options that match your goals and our station format.
              </p>
              <p className="rounded-2xl border border-aqua/15 bg-dark-ocean/50 px-5 py-4 text-foam/80">
                All campaigns are discussed individually.{" "}
                <strong className="font-semibold text-aqua">Contact for pricing</strong> — we do
                not publish rate cards online.
              </p>
            </div>
          </DirectionalReveal>
        </div>
      </div>
    </section>
  );
}
