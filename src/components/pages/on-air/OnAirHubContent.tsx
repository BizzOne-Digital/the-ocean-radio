import Link from "next/link";
import { ArrowRight, ListMusic, Calendar } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { WaveTransition } from "@/components/motion/WaveTransition";
import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { CTASection } from "@/components/sections/CTASection";
import { ON_AIR_SHOW } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/images";
import { OnAirListenSection } from "./OnAirListenSection";
import { OnAirNowStrip } from "./OnAirNowStrip";
import { OnAirShowCard } from "./OnAirShowCard";
import { OnAirSubNav } from "./OnAirSubNav";

const ON_AIR_PAGES = [
  {
    href: "/on-air/recently-played",
    label: "Recently Played",
    description: "See what just aired on the stream — track history for our nightly show.",
    icon: ListMusic,
  },
  {
    href: "/on-air/schedule",
    label: "On Air Schedule",
    description: "One program, one time slot: Christian music every night, 9 PM to midnight.",
    icon: Calendar,
  },
] as const;

export function OnAirHubContent() {
  return (
    <>
      <PageHero
        eyebrow="On Air"
        title="Live On"
        titleAccent="The Ocean Radio"
        description="Tune in for relaxing favorites and our nightly Christian music show — same format, 9:00 PM to 12:00 AM, every evening."
        backgroundImage={SITE_IMAGES.oceanBroadcastStudio}
        backgroundAlt="The Ocean Radio on-air broadcast"
      />
      <OnAirSubNav />
      <OnAirNowStrip />
      <WaveTransition variant="deep" />

      <section className="relative bg-deep-ocean py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 safe-x md:px-8">
          <DirectionalReveal direction="top">
            <OnAirShowCard variant="featured" />
          </DirectionalReveal>
        </div>
      </section>

      <section
        className="border-t border-aqua/10 bg-dark-ocean/50 py-16 md:py-24"
        aria-labelledby="on-air-pages"
      >
        <div className="mx-auto max-w-5xl px-4 safe-x md:px-8">
          <h2 id="on-air-pages" className="text-center font-display text-2xl font-bold text-foam md:text-3xl">
            On Air Pages
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-foam/65 md:text-base">
            {ON_AIR_SHOW.title} · {ON_AIR_SHOW.timeLabel} · {ON_AIR_SHOW.daysLabel}
          </p>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {ON_AIR_PAGES.map((page, i) => (
              <DirectionalReveal key={page.href} direction="bottom" delay={i * 0.06}>
                <li>
                  <Link
                    href={page.href}
                    className="group flex h-full flex-col rounded-2xl border border-aqua/15 bg-deep-ocean/80 p-6 shadow-card transition-colors hover:border-aqua/30 hover:bg-deep-ocean md:p-8"
                  >
                    <page.icon className="h-8 w-8 text-aqua" aria-hidden />
                    <h3 className="mt-4 font-display text-xl font-bold text-foam group-hover:text-aqua transition-colors">
                      {page.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-foam/70">
                      {page.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-aqua">
                      Open page
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              </DirectionalReveal>
            ))}
          </ul>
        </div>
      </section>

      <WaveTransition variant="mid" />
      <OnAirListenSection />

      <CTASection
        title="Concerts & Community"
        description="Event news and gatherings are posted on Facebook — or send us a message anytime."
        primaryHref="/concerts-events"
        primaryLabel="Concerts & Events"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
        backgroundImage={SITE_IMAGES.moonlitOcean}
      />
    </>
  );
}
