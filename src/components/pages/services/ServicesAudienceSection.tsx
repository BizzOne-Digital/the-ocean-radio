import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionImage } from "@/components/ui/SectionImage";
import { SITE_IMAGES } from "@/lib/images";

export function ServicesAudienceSection() {
  return (
    <section className="bg-dark-ocean py-20 md:py-28" aria-labelledby="services-audience-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <DirectionalReveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-aqua/15 shadow-card">
              <SectionImage
                src={SITE_IMAGES.oceanBroadcastStudio}
                alt="Ocean-themed broadcast studio with professional microphone"
                className="h-full w-full min-h-[260px]"
                overlay="light"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </DirectionalReveal>

          <DirectionalReveal direction="right">
            <h2
              id="services-audience-heading"
              className="font-display text-3xl font-bold text-foam md:text-4xl"
            >
              Reach Listeners Where They Relax
            </h2>
            <p className="mt-4 leading-relaxed text-foam/75">
              The Ocean Radio connects with audiences in the Philippines and North America through
              online listening — a natural place for brands that want presence without noise.
            </p>
            <p className="mt-4 leading-relaxed text-foam/75">
              Advertising opportunities are tailored to internet radio: promotional exposure within
              a station identity built around relaxing favorites.
            </p>

            <GlassCard className="mt-8 p-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-aqua">
                Ideal For
              </p>
              <ul className="mt-6 space-y-4 text-sm text-foam/80">
                <li className="flex gap-3 border-b border-aqua/10 pb-4">
                  <span className="text-aqua" aria-hidden>—</span>
                  Local and online businesses building brand awareness
                </li>
                <li className="flex gap-3 border-b border-aqua/10 pb-4">
                  <span className="text-aqua" aria-hidden>—</span>
                  Campaigns that benefit from a calm, music-led environment
                </li>
                <li className="flex gap-3">
                  <span className="text-aqua" aria-hidden>—</span>
                  Partners seeking radio-style reach on the web
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="secondary" showArrow className="uppercase tracking-[0.12em]">
                  Contact For Advertising
                </Button>
              </div>
            </GlassCard>
          </DirectionalReveal>
        </div>
      </div>
    </section>
  );
}
