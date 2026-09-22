"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import {
  getCurrentBroadcastSlot,
  getCurrentBroadcastSlotInfo,
} from "@/lib/broadcast-schedule";
import { DAYTIME_SHOW, RELAXING_FAVORITES_PLAYLIST } from "@/lib/playlists";
import { ON_AIR_SHOW } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PlaylistTrackList() {
  const [query, setQuery] = useState("");
  const slot = getCurrentBroadcastSlot();
  const slotInfo = getCurrentBroadcastSlotInfo();

  const tracks = useMemo(() => {
    if (slot !== "relaxing-favorites") return [];
    const q = query.trim().toLowerCase();
    if (!q) return RELAXING_FAVORITES_PLAYLIST;
    return RELAXING_FAVORITES_PLAYLIST.filter(
      (t) =>
        t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q),
    );
  }, [slot, query]);

  return (
    <div className="overflow-hidden rounded-2xl border border-aqua/15 bg-deep-ocean/80 shadow-card">
      <div className="border-b border-aqua/10 px-5 py-4 md:px-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-aqua">
          {slotInfo.label} · {slotInfo.timeLabel} (PH)
        </p>
        {slot === "relaxing-favorites" ? (
          <>
            <p className="mt-2 text-sm text-foam/65">
              {DAYTIME_SHOW.trackCount} songs from the client playlist — each title appears once.
            </p>
            <label className="mt-4 block">
              <span className="sr-only">Search playlist</span>
              <input
                type="search"
                placeholder="Search artist or song…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-aqua/20 bg-dark-ocean/80 px-4 py-2.5 text-sm text-foam placeholder:text-foam/40 focus:border-aqua/50 focus:outline-none"
              />
            </label>
          </>
        ) : (
          <p className="mt-2 text-sm text-foam/65">
            {ON_AIR_SHOW.title} ({ON_AIR_SHOW.timeLabel} Philippine Time). Track list plays from
            the station&apos;s Spotify playlist when configured.
          </p>
        )}
      </div>

      {slot === "relaxing-favorites" ? (
        <div className="max-h-[min(70vh,520px)] overflow-y-auto overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead className="sticky top-0 bg-deep-ocean/95 backdrop-blur-sm">
              <tr className="border-b border-aqua/10 text-[10px] font-bold uppercase tracking-[0.2em] text-aqua/80">
                <th className="px-5 py-3 md:px-6" scope="col">Title</th>
                <th className="px-5 py-3 md:px-6" scope="col">Artist</th>
                <th className="px-5 py-3 md:px-6 text-right" scope="col">Play</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track) => (
                <tr
                  key={track.id}
                  className="border-b border-aqua/5 transition-colors hover:bg-foam/5"
                >
                  <td className="px-5 py-3 font-medium text-foam md:px-6">{track.title}</td>
                  <td className="px-5 py-3 text-foam/75 md:px-6">{track.artist}</td>
                  <td className="px-5 py-3 text-right md:px-6">
                    <Link
                      href={`/on-air/recently-played?play=${encodeURIComponent(track.id)}&autoplay=1#listen-live`}
                      className={cn(
                        "inline-flex min-h-9 min-w-9 items-center justify-center rounded-full border border-aqua/25 text-aqua hover:bg-aqua/10",
                      )}
                      aria-label={`Play ${track.title} on Spotify`}
                    >
                      <Play className="h-4 w-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="px-5 py-12 text-center md:px-6">
          <Link
            href="/on-air/recently-played#listen-live"
            className="text-sm font-semibold text-aqua hover:underline"
          >
            Open player for Christian Music →
          </Link>
        </div>
      )}
    </div>
  );
}
