import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { SITE_IMAGES } from "@/lib/images";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  backgroundImage?: string;
};

export function CTASection({
  title = "Ready To Tune In?",
  description = "Press play and let relaxing favorites carry you through the day — or reach out to connect with The Ocean Radio team.",
  primaryHref = "/#listen-live",
  primaryLabel = "Listen Live",
  secondaryHref = "/contact",
  secondaryLabel = "Get In Touch",
  backgroundImage = SITE_IMAGES.moonlitOcean,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="cta-heading">
      <SectionImage
        src={backgroundImage}
        alt=""
        className="absolute inset-0"
        overlay="dark"
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <DirectionalReveal direction="top">
          <h2
            id="cta-heading"
            className="font-display text-3xl font-bold text-foam md:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-lg text-foam/80">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} showArrow className="uppercase tracking-[0.12em]">
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant="secondary"
              showArrow
              className="uppercase tracking-[0.12em]"
            >
              {secondaryLabel}
            </Button>
          </div>
        </DirectionalReveal>
      </div>
    </section>
  );
}
