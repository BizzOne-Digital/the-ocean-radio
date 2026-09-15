import Link from "next/link";
import { Calendar, ListMusic } from "lucide-react";
import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ON_AIR_SHOW } from "@/lib/constants";

export function OnAirHomeSection() {
  return (
    <section
      className="relative bg-deep-ocean py-20 md:py-28"
      aria-labelledby="on-air-home-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="on-air-home-heading"
            eyebrow="On Air"
            title={ON_AIR_SHOW.title}
            description={`Every night, ${ON_AIR_SHOW.timeLabel}. One show on the schedule — the same Christian music program you can count on.`}
            align="center"
          />
        </DirectionalReveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <DirectionalReveal direction="left" delay={0.05}>
            <GlassCard className="flex h-full flex-col p-8">
              <ListMusic className="h-8 w-8 text-aqua" aria-hidden />
              <h3 className="mt-4 font-display text-xl font-bold text-foam">Recently Played</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foam/75">
                Look back at songs from the live stream during show hours and beyond.
              </p>
              <Button href="/on-air/recently-played" showArrow className="mt-6 uppercase tracking-[0.12em]">
                Recently Played
              </Button>
            </GlassCard>
          </DirectionalReveal>

          <DirectionalReveal direction="right" delay={0.1}>
            <GlassCard className="flex h-full flex-col p-8">
              <Calendar className="h-8 w-8 text-aqua" aria-hidden />
              <h3 className="mt-4 font-display text-xl font-bold text-foam">On Air Schedule</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foam/75">
                {ON_AIR_SHOW.summary}
              </p>
              <Button
                href="/on-air/schedule"
                variant="secondary"
                showArrow
                className="mt-6 uppercase tracking-[0.12em]"
              >
                View Schedule
              </Button>
            </GlassCard>
          </DirectionalReveal>
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/on-air"
            className="text-sm font-semibold text-aqua underline-offset-4 hover:underline"
          >
            All On Air pages →
          </Link>
        </p>
      </div>
    </section>
  );
}
