import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionImage } from "@/components/ui/SectionImage";
import { SITE } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/images";

const highlights = [
  { label: "Format", value: "Internet Radio" },
  { label: "Focus", value: "Relaxing Favorites" },
  { label: "Reach", value: "Philippines & North America" },
];

export function HomeStationIntro() {
  return (
    <section
      className="relative border-y border-aqua/10 bg-deep-ocean/80 py-10 md:py-12"
      aria-label="Station overview"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 safe-x md:grid-cols-2 md:items-center md:px-8 lg:grid-cols-[1fr_1.1fr_1fr]">
        <DirectionalReveal direction="left">
          <p className="font-display text-2xl font-bold text-foam md:text-3xl">
            {SITE.name}
          </p>
          <p className="tagline-tracking mt-2 text-sm font-semibold text-aqua">
            {SITE.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foam/70 md:text-base">
            A calm online broadcast built for listeners who want smooth music and an
            easy tuning experience — at home, at work, or on the go.
          </p>
        </DirectionalReveal>

        <DirectionalReveal direction="top" className="hidden md:block">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-aqua/10 shadow-card">
            <SectionImage
              src={SITE_IMAGES.underwaterRays}
              alt="Sunlight rays through deep ocean water"
              className="h-full w-full"
              overlay="light"
              sizes="33vw"
            />
          </div>
        </DirectionalReveal>

        <DirectionalReveal direction="right">
          <ul className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-aqua/10 bg-dark-ocean/50 px-4 py-4 text-center backdrop-blur-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-foam/45">
                  {item.label}
                </p>
                <p className="mt-2 text-xs font-semibold leading-snug text-foam md:text-sm">
                  {item.value}
                </p>
              </li>
            ))}
          </ul>
        </DirectionalReveal>
      </div>
    </section>
  );
}
