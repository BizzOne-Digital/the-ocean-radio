import Link from "next/link";
import { ListMusic } from "lucide-react";
import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RADIO_STREAM_URL, ON_AIR_SHOW } from "@/lib/constants";

export function RecentlyPlayedIntroSection() {
  return (
    <section
      className="relative bg-deep-ocean py-16 md:py-24"
      aria-labelledby="recently-played-intro"
    >
      <div className="mx-auto max-w-3xl px-4 safe-x md:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="recently-played-intro"
            eyebrow="Track log"
            title="What Was On The Air"
            description="Recently Played is your look-back at songs that aired on The Ocean Radio. During our nightly Christian music show (9:00 PM – 12:00 AM), this list will reflect what listeners just heard — once the live stream provides track information."
            align="center"
          />
        </DirectionalReveal>
      </div>
    </section>
  );
}

export function RecentlyPlayedListSection() {
  const streamReady = Boolean(RADIO_STREAM_URL);

  return (
    <section
      className="relative border-t border-aqua/10 bg-dark-ocean/40 py-16 md:py-20"
      aria-labelledby="recently-played-list"
    >
      <div className="mx-auto max-w-4xl px-4 safe-x md:px-8">
        <DirectionalReveal direction="left">
          <div className="overflow-hidden rounded-2xl border border-aqua/15 bg-deep-ocean/80 shadow-card">
            <div className="flex items-center gap-3 border-b border-aqua/10 px-5 py-4 md:px-6">
              <ListMusic className="h-5 w-5 text-aqua" aria-hidden />
              <h2
                id="recently-played-list"
                className="font-display text-lg font-bold text-foam md:text-xl"
              >
                Recently played tracks
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[320px] text-left text-sm">
                <thead>
                  <tr className="border-b border-aqua/10 text-[10px] font-bold uppercase tracking-[0.2em] text-aqua/80">
                    <th className="px-5 py-3 md:px-6" scope="col">Title</th>
                    <th className="px-5 py-3 md:px-6" scope="col">Artist</th>
                    <th className="hidden px-5 py-3 sm:table-cell md:px-6" scope="col">
                      Played
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="px-5 py-12 text-center md:px-6">
                      <p className="text-base font-medium text-foam/80">
                        No tracks to display yet
                      </p>
                      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foam/55">
                        {streamReady
                          ? "Track metadata is not connected yet. Listen live during Christian Music (9:00 PM – 12:00 AM) and check back here once history is enabled."
                          : "The live stream is not configured yet. When The Ocean Radio is on the air, recently played songs will appear in this table."}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </DirectionalReveal>

        <DirectionalReveal direction="right" delay={0.06} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-aqua/10 bg-dark-ocean/50 px-5 py-5 text-center sm:flex-row sm:text-left md:px-6">
            <p className="text-sm text-foam/70">
              <span className="font-semibold text-foam">{ON_AIR_SHOW.title}</span>
              {" · "}
              {ON_AIR_SHOW.timeLabel}
            </p>
            <Link
              href="/on-air/schedule"
              className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em] text-aqua transition-colors hover:text-bright-water"
            >
              View full schedule →
            </Link>
          </div>
        </DirectionalReveal>
      </div>
    </section>
  );
}
