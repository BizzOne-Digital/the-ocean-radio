"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getCurrentBroadcastSlot,
  getCurrentBroadcastSlotInfo,
  getRotationIndex,
} from "@/lib/broadcast-schedule";
import { getPlaylistForSlot, type PlaylistTrack } from "@/lib/playlists";
import {
  spotifyPlaylistEmbedUrl,
  spotifyTrackEmbedUrl,
} from "@/lib/spotify/embed";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import { Equalizer } from "./Equalizer";

type SpotifyStationPlayerProps = {
  className?: string;
  compact?: boolean;
  initialTrackId?: string | null;
  autoPlay?: boolean;
};

const CHRISTIAN_PLAYLIST_ID =
  process.env.NEXT_PUBLIC_SPOTIFY_CHRISTIAN_PLAYLIST_ID?.trim() || "";

const RELAXING_PLAYLIST_ID =
  process.env.NEXT_PUBLIC_SPOTIFY_RELAXING_PLAYLIST_ID?.trim() || "";

function embedForTrack(track: PlaylistTrack | null, slot: ReturnType<typeof getCurrentBroadcastSlot>) {
  if (slot === "christian-music" && CHRISTIAN_PLAYLIST_ID) {
    return spotifyPlaylistEmbedUrl(CHRISTIAN_PLAYLIST_ID);
  }
  if (slot === "relaxing-favorites") {
    if (track?.spotifyId) return spotifyTrackEmbedUrl(track.spotifyId);
    if (RELAXING_PLAYLIST_ID) return spotifyPlaylistEmbedUrl(RELAXING_PLAYLIST_ID);
  }
  return null;
}

function initialTrackIndex(
  playlist: PlaylistTrack[],
  slot: ReturnType<typeof getCurrentBroadcastSlot>,
  initialTrackId?: string | null,
) {
  if (initialTrackId && slot === "relaxing-favorites") {
    const i = playlist.findIndex((t) => t.id === initialTrackId);
    if (i >= 0) return i;
  }
  return getRotationIndex(playlist.length);
}

export function SpotifyStationPlayer({
  className,
  compact,
  initialTrackId,
  autoPlay = false,
}: SpotifyStationPlayerProps) {
  const [slot, setSlot] = useState(getCurrentBroadcastSlot);
  const slotInfo = getCurrentBroadcastSlotInfo();
  const playlist = useMemo(() => getPlaylistForSlot(slot), [slot]);

  const [index, setIndex] = useState(() =>
    initialTrackIndex(playlist, slot, initialTrackId),
  );

  const current: PlaylistTrack | null = playlist[index] ?? null;

  const [embedSrc, setEmbedSrc] = useState<string | null>(() => {
    if (!autoPlay) return null;
    const track = playlist[initialTrackIndex(playlist, slot, initialTrackId)] ?? null;
    return embedForTrack(track, slot);
  });
  const [embedKey, setEmbedKey] = useState(0);
  const [playing, setPlaying] = useState(() => {
    if (!autoPlay) return false;
    const track = playlist[initialTrackIndex(playlist, slot, initialTrackId)] ?? null;
    return embedForTrack(track, slot) !== null;
  });

  const spotifyOpenUrl = useMemo(() => {
    if (slot === "christian-music" && CHRISTIAN_PLAYLIST_ID) {
      return `https://open.spotify.com/playlist/${CHRISTIAN_PLAYLIST_ID}`;
    }
    if (current?.spotifyId) {
      return `https://open.spotify.com/track/${current.spotifyId}`;
    }
    if (RELAXING_PLAYLIST_ID) {
      return `https://open.spotify.com/playlist/${RELAXING_PLAYLIST_ID}`;
    }
    if (current) {
      return `https://open.spotify.com/search/${encodeURIComponent(`${current.artist} ${current.title}`)}`;
    }
    return null;
  }, [slot, current]);

  const startPlayback = useCallback(() => {
    const src = embedForTrack(current, slot);
    if (!src) {
      return;
    }
    setEmbedSrc(src);
    setEmbedKey((k) => k + 1);
    setPlaying(true);
  }, [current, slot]);

  const missingConfig =
    slot === "christian-music"
      ? !CHRISTIAN_PLAYLIST_ID
      : !RELAXING_PLAYLIST_ID && !current?.spotifyId;

  useEffect(() => {
    const tick = () => setSlot(getCurrentBroadcastSlot());
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const go = useCallback(
    (delta: number) => {
      if (playlist.length === 0) return;
      setIndex((i) => (i + delta + playlist.length) % playlist.length);
      setPlaying(false);
      setEmbedSrc(null);
    },
    [playlist.length],
  );

  return (
    <GlassCard className={cn("relative overflow-hidden p-4 sm:p-6 md:p-8", className)}>
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-bright-water/10 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-aqua">
            <span className="h-2 w-2 animate-pulse rounded-full bg-aqua" aria-hidden />
            {slotInfo.label}
          </span>
          <Equalizer active={playing} />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foam/50">
            {slotInfo.timeLabel} · Philippine Time
          </p>
          {slot === "relaxing-favorites" && current && (
            <>
              <p className="mt-2 font-display text-lg font-semibold text-foam md:text-xl">
                {current.title}
              </p>
              <p className="mt-1 text-sm text-aqua/90">{current.artist}</p>
            </>
          )}
          {slot === "christian-music" && (
            <p className="mt-2 font-display text-lg font-semibold text-foam md:text-xl">
              Christian Music
            </p>
          )}
        </div>

        {embedSrc ? (
          <iframe
            key={embedKey}
            title="Spotify player"
            src={embedSrc}
            className="h-[152px] w-full rounded-xl border-0 bg-dark-ocean/50"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="eager"
          />
        ) : (
          <div className="flex h-[152px] w-full items-center justify-center rounded-xl border border-dashed border-aqua/20 bg-dark-ocean/40 px-4 text-center text-sm text-foam/50">
            Press Play — Spotify loads here (no site API)
          </div>
        )}

        {missingConfig && (
          <p className="text-sm text-amber-100/90">
            Client ko Spotify par playlist banani hogi, phir{" "}
            <code className="rounded bg-dark-ocean/80 px-1 text-xs">
              NEXT_PUBLIC_SPOTIFY_RELAXING_PLAYLIST_ID
            </code>{" "}
            (daytime) ya{" "}
            <code className="rounded bg-dark-ocean/80 px-1 text-xs">
              NEXT_PUBLIC_SPOTIFY_CHRISTIAN_PLAYLIST_ID
            </code>{" "}
            (9 PM–12 AM) .env mein paste karein. Optional:{" "}
            <code className="text-xs">node scripts/import-spotify-playlist-to-json.mjs</code> se har
            gaane ka track ID JSON mein aa jata hai.
          </p>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {slot === "relaxing-favorites" && playlist.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-aqua/25 text-foam hover:bg-foam/5"
                  aria-label="Previous track"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={startPlayback}
                  disabled={missingConfig}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ocean-blue to-bright-water px-6 text-xs font-bold uppercase tracking-wider text-dark-text shadow-ocean-glow disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none sm:px-8"
                >
                  <Play className="h-5 w-5" />
                  Play
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-aqua/25 text-foam hover:bg-foam/5"
                  aria-label="Next track"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            {slot === "christian-music" && (
              <button
                type="button"
                onClick={startPlayback}
                disabled={missingConfig}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ocean-blue to-bright-water px-8 text-xs font-bold uppercase tracking-wider text-dark-text shadow-ocean-glow disabled:opacity-50"
              >
                <Play className="h-5 w-5" />
                Play
              </button>
            )}
          </div>

          {spotifyOpenUrl && !compact && (
            <a
              href={spotifyOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-foam/70 hover:text-aqua"
            >
              Open in Spotify
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
