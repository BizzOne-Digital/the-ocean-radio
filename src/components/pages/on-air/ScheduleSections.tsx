import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionImage } from "@/components/ui/SectionImage";
import { ON_AIR_SHOW } from "@/lib/constants";
import { DAYTIME_SHOW } from "@/lib/playlists";
import { SITE_IMAGES } from "@/lib/images";
import { OnAirShowCard } from "./OnAirShowCard";

export function ScheduleIntroSection() {
  return (
    <section
      className="relative overflow-hidden bg-deep-ocean py-16 md:py-24"
      aria-labelledby="schedule-intro"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <DirectionalReveal direction="left">
          <SectionHeading
            id="schedule-intro"
            eyebrow="Programming"
            title="One Show. One Slot."
            description="A single Christian music program runs every night from 9:00 PM to 12:00 AM — the same show, the same time, seven days a week."
          />
          <p className="mt-6 text-sm leading-relaxed text-foam/65 md:text-base">
            {ON_AIR_SHOW.detail}
          </p>
        </DirectionalReveal>

        <DirectionalReveal direction="right">
          <ParallaxLayer
            speed={0.15}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-aqua/10 shadow-card"
          >
            <SectionImage
              src={SITE_IMAGES.broadcastMicrophone}
              alt="Broadcast microphone — The Ocean Radio on-air schedule"
              className="h-full w-full"
              overlay="light"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ParallaxLayer>
        </DirectionalReveal>
      </div>
    </section>
  );
}

export function ScheduleProgramSection() {
  return (
    <section
      className="relative border-t border-aqua/10 bg-dark-ocean/50 py-16 md:py-24"
      aria-labelledby="schedule-program"
    >
      <div className="mx-auto max-w-3xl px-4 safe-x md:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="schedule-program"
            eyebrow="On air tonight"
            title="Your Nightly Show"
            description="Below is the complete on-air schedule for The Ocean Radio — one entry covers every day of the week."
            align="center"
          />
        </DirectionalReveal>
        <DirectionalReveal direction="bottom" delay={0.08} className="mt-10">
          <OnAirShowCard variant="featured" />
        </DirectionalReveal>
      </div>
    </section>
  );
}

export function ScheduleTableSection() {
  return (
    <section
      className="relative bg-deep-ocean py-16 md:py-20"
      aria-labelledby="schedule-table"
    >
      <div className="mx-auto max-w-4xl px-4 safe-x md:px-8">
        <DirectionalReveal direction="left">
          <h2
            id="schedule-table"
            className="font-display text-xl font-bold text-foam md:text-2xl"
          >
            Schedule at a glance
          </h2>
          <p className="mt-2 text-sm text-foam/60">
            All times Philippine Time (Asia/Manila), Monday through Sunday.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-aqua/15">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-aqua/15 bg-aqua/5 text-[10px] font-bold uppercase tracking-[0.2em] text-aqua">
                  <th className="px-5 py-3 md:px-6" scope="col">Program</th>
                  <th className="px-5 py-3 md:px-6" scope="col">Time</th>
                  <th className="px-5 py-3 md:px-6" scope="col">Playlist</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-aqua/10 bg-dark-ocean/60">
                  <td className="px-5 py-4 font-semibold text-foam md:px-6">
                    {DAYTIME_SHOW.title}
                  </td>
                  <td className="px-5 py-4 text-foam/85 md:px-6">{DAYTIME_SHOW.timeLabel}</td>
                  <td className="px-5 py-4 text-foam/85 md:px-6">
                    {DAYTIME_SHOW.trackCount} songs (no repeats)
                  </td>
                </tr>
                <tr className="bg-dark-ocean/40">
                  <td className="px-5 py-4 font-semibold text-foam md:px-6">
                    {ON_AIR_SHOW.title}
                  </td>
                  <td className="px-5 py-4 text-foam/85 md:px-6">{ON_AIR_SHOW.timeLabel}</td>
                  <td className="px-5 py-4 text-foam/85 md:px-6">Spotify playlist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DirectionalReveal>
      </div>
    </section>
  );
}
