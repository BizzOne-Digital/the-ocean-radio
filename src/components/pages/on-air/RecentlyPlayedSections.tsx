import Link from "next/link";
import { Suspense } from "react";
import { ListMusic } from "lucide-react";
import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DAYTIME_SHOW } from "@/lib/playlists";
import { ON_AIR_SHOW } from "@/lib/constants";
import { PlaylistTrackList } from "./PlaylistTrackList";
import { RecentlyPlayedPlayer } from "./RecentlyPlayedPlayer";

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
            title="Playlist & Recently Played"
            description={`Browse the station lineup — ${DAYTIME_SHOW.trackCount} unique relaxing favorites (12:00 AM – 9:00 PM Philippine Time), plus ${ON_AIR_SHOW.title} evenings (9:00 PM – midnight). Tap play to hear any song on Spotify.`}
            align="center"
          />
        </DirectionalReveal>
      </div>
    </section>
  );
}

export function RecentlyPlayedListSection() {
  return (
    <section
      className="relative border-t border-aqua/10 bg-dark-ocean/40 py-16 md:py-20"
      aria-labelledby="recently-played-list"
    >
      <div className="mx-auto max-w-4xl px-4 safe-x md:px-8">
        <DirectionalReveal direction="left">
          <div id="recently-played-list">
            <div className="mb-4 flex items-center gap-3">
              <ListMusic className="h-5 w-5 text-aqua" aria-hidden />
              <h2 className="font-display text-lg font-bold text-foam md:text-xl">
                Station playlist
              </h2>
            </div>
            <PlaylistTrackList />
          </div>
        </DirectionalReveal>

        <DirectionalReveal direction="right" delay={0.06} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-aqua/10 bg-dark-ocean/50 px-5 py-5 text-center sm:flex-row sm:text-left md:px-6">
            <p className="text-sm text-foam/70">
              <span className="font-semibold text-foam">{DAYTIME_SHOW.title}</span>
              {" · "}
              {DAYTIME_SHOW.timeLabel} PH
            </p>
            <Link
              href="/on-air/schedule"
              className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em] text-aqua transition-colors hover:text-bright-water"
            >
              View full schedule →
            </Link>
          </div>
        </DirectionalReveal>

        <div className="mt-12" id="listen-live">
          <Suspense fallback={<p className="text-center text-sm text-foam/60">Loading player…</p>}>
            <RecentlyPlayedPlayer />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
