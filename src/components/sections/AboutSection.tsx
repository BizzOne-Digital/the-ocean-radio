import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionImage } from "@/components/ui/SectionImage";
import { SITE_IMAGES } from "@/lib/images";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-deep-ocean py-20 md:py-28" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <DirectionalReveal direction="left">
          <ParallaxLayer speed={0.2} className="relative aspect-[4/5] max-h-[520px] w-full overflow-hidden rounded-3xl border border-aqua/10 shadow-card">
            <SectionImage
              src={SITE_IMAGES.broadcastMicrophone}
              alt="Professional broadcast microphone in an ocean-inspired studio"
              className="h-full w-full"
              overlay="light"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ParallaxLayer>
        </DirectionalReveal>

        <DirectionalReveal direction="right">
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="A Different Kind of Radio"
          />
          <div className="mt-6 space-y-4 text-foam/80 leading-relaxed">
            <p>
              The Ocean Radio is an internet radio station built around relaxing favorites
              and a smooth listening experience for audiences in the Philippines, North America,
              and wherever listeners are connected.
            </p>
            <p>
              It serves as a dedicated online presence for the station — a calm, consistent
              way to tune in and stay connected to The Ocean Radio as a companion to your
              everyday listening.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {["Relaxing Favorites", "Online Broadcast", "Global Listeners"].map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-aqua/15 bg-dark-ocean/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-aqua/90"
              >
                {tag}
              </li>
            ))}
          </ul>
        </DirectionalReveal>
      </div>
    </section>
  );
}
