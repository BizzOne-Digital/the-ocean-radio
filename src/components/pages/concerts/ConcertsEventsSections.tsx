import Link from "next/link";
import { CalendarHeart, Megaphone, Users } from "lucide-react";
import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionImage } from "@/components/ui/SectionImage";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { SITE } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/images";

const HIGHLIGHTS = [
  {
    icon: CalendarHeart,
    title: "Concerts & gatherings",
    text:
      "Community concerts, worship nights, and special appearances connected to The Ocean Radio are announced when dates are confirmed.",
  },
  {
    icon: Megaphone,
    title: "On-air features",
    text:
      "Look for event shout-outs and reminders during our nightly Christian music show and across station social channels.",
  },
  {
    icon: Users,
    title: "Listener community",
    text:
      "Philippines, North America, and online listeners stay in the loop through Facebook — the home for real-time updates.",
  },
] as const;

export function ConcertsIntroSection() {
  return (
    <section
      className="relative overflow-hidden bg-deep-ocean py-16 md:py-24"
      aria-labelledby="concerts-intro"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <DirectionalReveal direction="left">
          <ParallaxLayer
            speed={0.18}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-aqua/10 shadow-card"
          >
            <SectionImage
              src={SITE_IMAGES.globalConnection}
              alt="Listeners connected around the world — concerts and events"
              className="h-full w-full"
              overlay="light"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ParallaxLayer>
        </DirectionalReveal>

        <DirectionalReveal direction="right">
          <SectionHeading
            id="concerts-intro"
            eyebrow="Concerts & Events"
            title="Where The Station Meets The Crowd"
            description="This page is your hub for live happenings around The Ocean Radio. We do not publish unverified dates or ticket links here — everything official is shared through our Facebook community and direct contact with the team."
          />
          <a
            href={SITE.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ocean-blue to-bright-water px-7 text-sm font-bold uppercase tracking-[0.14em] text-dark-text shadow-ocean-glow"
          >
            <FacebookIcon className="h-4 w-4" />
            Follow {SITE.facebook.label}
          </a>
        </DirectionalReveal>
      </div>
    </section>
  );
}

export function ConcertsHighlightsSection() {
  return (
    <section
      className="relative border-t border-aqua/10 bg-dark-ocean/40 py-16 md:py-24"
      aria-labelledby="concerts-highlights"
    >
      <div className="mx-auto max-w-7xl px-4 safe-x md:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="concerts-highlights"
            eyebrow="What to expect"
            title="Events Worth Following"
            description="When something is on the calendar, you will hear about it in these channels first."
            align="center"
          />
        </DirectionalReveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => (
            <DirectionalReveal key={item.title} direction="bottom" delay={i * 0.06}>
              <li className="h-full rounded-2xl border border-aqua/12 bg-deep-ocean/70 p-6 shadow-card">
                <item.icon className="h-8 w-8 text-aqua" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-bold text-foam">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foam/70">{item.text}</p>
              </li>
            </DirectionalReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ConcertsConnectSection() {
  return (
    <section
      className="relative bg-deep-ocean py-16 md:py-24"
      aria-labelledby="concerts-connect"
    >
      <div className="mx-auto max-w-3xl px-4 text-center safe-x md:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="concerts-connect"
            eyebrow="Get involved"
            title="Questions About An Event?"
            description="Promoters, churches, and partners can reach The Ocean Radio team by email or phone. For the fastest public updates, keep an eye on Facebook."
            align="center"
          />
        </DirectionalReveal>
        <DirectionalReveal direction="bottom" delay={0.08} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-aqua/30 px-8 text-sm font-bold uppercase tracking-[0.14em] text-foam transition-colors hover:border-aqua/50 hover:text-aqua sm:w-auto"
          >
            Contact Us
          </Link>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-foam/5 px-8 text-sm font-semibold text-foam/90 transition-colors hover:bg-foam/10 sm:w-auto"
          >
            {SITE.email}
          </a>
        </DirectionalReveal>
      </div>
    </section>
  );
}
