import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionImage } from "@/components/ui/SectionImage";
import { SITE_IMAGES } from "@/lib/images";

export function GlobalAudienceSection() {
  return (
    <section className="relative bg-dark-ocean py-20 md:py-28" aria-labelledby="global-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <DirectionalReveal direction="left">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-aqua/15 shadow-card lg:mx-0">
              <SectionImage
                src={SITE_IMAGES.globalConnection}
                alt="Glowing globe over the ocean representing listeners connected worldwide"
                className="h-full min-h-[280px] w-full"
                overlay="medium"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </DirectionalReveal>
          <DirectionalReveal direction="right">
            <SectionHeading
              id="global-heading"
              eyebrow="Everywhere You Are"
              title="Listen Anywhere"
              description="The Ocean Radio reaches listeners across the Philippines and North America — and anyone with a connection who wants a relaxing favorite on repeat."
            />
          </DirectionalReveal>
        </div>
      </div>
    </section>
  );
}
