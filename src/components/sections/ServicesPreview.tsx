import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreview() {
  return (
    <section className="relative bg-deep-ocean py-20 md:py-28" aria-labelledby="services-preview-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <DirectionalReveal direction="right">
          <SectionHeading
            id="services-preview-heading"
            eyebrow="Partnerships"
            title="Radio & Online Advertising"
            align="center"
          />
        </DirectionalReveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <DirectionalReveal direction="left" delay={0.1}>
          <GlassCard className="p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aqua">Online Advertising</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-foam md:text-3xl">
              Connect With Listeners
            </h3>
            <p className="mt-4 leading-relaxed text-foam/75">
              Connect your brand with listeners through online radio advertising opportunities
              on The Ocean Radio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" showArrow className="uppercase tracking-[0.12em]">
                Contact Us For Advertising
              </Button>
              <Button href="/services" variant="secondary" showArrow className="uppercase tracking-[0.12em]">
                View Services
              </Button>
            </div>
          </GlassCard>
        </DirectionalReveal>
        <DirectionalReveal direction="right" delay={0.15} className="hidden lg:block">
          <div className="rounded-2xl border border-dashed border-aqua/20 px-6 py-8 text-center">
            <p className="text-4xl font-display font-bold text-aqua/30">AD</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-foam/50">On-Air Presence</p>
          </div>
        </DirectionalReveal>
        </div>
      </div>
    </section>
  );
}
