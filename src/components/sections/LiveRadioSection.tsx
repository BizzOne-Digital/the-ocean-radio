import Link from "next/link";
import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionImage } from "@/components/ui/SectionImage";
import { OceanRadioPlayer } from "@/components/radio/OceanRadioPlayer";
import { ON_AIR_SHOW } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/images";

export function LiveRadioSection() {
  return (
    <section
      id="listen-live"
      className="relative scroll-mt-28 overflow-hidden bg-dark-ocean py-14 safe-x sm:scroll-mt-32 sm:py-20 md:py-28"
      aria-labelledby="listen-live-heading"
    >
      <SectionImage
        src={SITE_IMAGES.premiumAudio}
        alt=""
        className="absolute inset-0 opacity-40"
        overlay="dark"
        sizes="100vw"
        imageClassName="object-cover object-right"
      />
      <div className="pointer-events-none absolute inset-0 bg-dark-ocean/60" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            eyebrow="On Air"
            title="Listen Live"
            description={`Relax and tune in. Nightly ${ON_AIR_SHOW.title}, ${ON_AIR_SHOW.timeLabel}.`}
            align="center"
          />
        </DirectionalReveal>
        <DirectionalReveal direction="scale" delay={0.15} className="mx-auto mt-12 max-w-2xl">
          <OceanRadioPlayer />
        </DirectionalReveal>
        <DirectionalReveal direction="bottom" delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center">
          <Link
            href="/on-air/recently-played"
            className="text-xs font-bold uppercase tracking-[0.16em] text-aqua hover:text-bright-water"
          >
            Recently Played
          </Link>
          <span className="text-foam/25" aria-hidden>|</span>
          <Link
            href="/on-air/schedule"
            className="text-xs font-bold uppercase tracking-[0.16em] text-aqua hover:text-bright-water"
          >
            On Air Schedule
          </Link>
        </DirectionalReveal>
      </div>
    </section>
  );
}
