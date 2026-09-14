"use client";

import { Pause, Play, Radio, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { RADIO_STREAM_URL, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Equalizer } from "./Equalizer";
import { Waveform } from "./Waveform";
import { GlassCard } from "@/components/ui/GlassCard";

type LiveRadioPlayerProps = {
  className?: string;
  compact?: boolean;
};

export function LiveRadioPlayer({ className, compact }: LiveRadioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [muted, setMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const streamAvailable = Boolean(RADIO_STREAM_URL);

  useEffect(() => {
    if (!streamAvailable) return;
    const audio = new Audio();
    audio.preload = "none";
    audio.crossOrigin = "anonymous";
    audioRef.current = audio;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = () => {
      setPlaying(false);
      setError("Unable to connect to the live stream.");
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
      audioRef.current = null;
    };
  }, [streamAvailable]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = muted ? 0 : volume;
  }, [volume, muted]);

  const togglePlay = useCallback(async () => {
    if (!streamAvailable) return;
    const audio = audioRef.current;
    if (!audio) return;

    setError(null);

    if (playing) {
      audio.pause();
      return;
    }

    if (!audio.src) {
      audio.src = RADIO_STREAM_URL;
    }

    try {
      await audio.play();
    } catch {
      setError("Playback was blocked or the stream is unavailable.");
      setPlaying(false);
    }
  }, [playing, streamAvailable]);

  return (
    <GlassCard
      className={cn(
        "relative overflow-hidden p-4 sm:p-6 md:p-8",
        !streamAvailable && "opacity-95",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-bright-water/10 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-200",
                streamAvailable && playing && "border-emerald-400/40 bg-emerald-500/10 text-emerald-100",
              )}
            >
              <span
                className={cn(
                  "h-2 w-2 rounded-full bg-red-400",
                  streamAvailable && playing && "animate-pulse bg-emerald-400",
                )}
                aria-hidden
              />
              {streamAvailable ? "Live Now" : "Coming Soon"}
            </span>
            {!compact && (
              <Radio className="h-5 w-5 text-aqua/70" aria-hidden />
            )}
          </div>
          <Equalizer active={streamAvailable && playing} />
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-foam md:text-xl">
            {SITE.name}
          </p>
          <p className="tagline-tracking mt-1 text-xs font-medium text-aqua sm:text-sm md:text-base">
            {SITE.tagline}
          </p>
        </div>

        <Waveform active={streamAvailable && playing} />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={togglePlay}
            disabled={!streamAvailable}
            className={cn(
              "inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-wide transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua sm:w-auto sm:px-8 sm:text-sm sm:tracking-wider",
              streamAvailable
                ? "bg-gradient-to-r from-ocean-blue to-bright-water text-dark-text shadow-ocean-glow hover:scale-[1.02] hover:shadow-[0_0_40px_rgb(24_183_217/0.4)]"
                : "cursor-not-allowed bg-foam/10 text-foam/50",
            )}
            aria-label={playing ? "Pause live stream" : "Play live stream"}
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            {streamAvailable ? (playing ? "Pause" : "Listen Live") : "Live Stream Coming Soon"}
          </button>

          {streamAvailable && (
            <div className="flex w-full items-center justify-center gap-3 sm:w-auto sm:justify-start">
              <button
                type="button"
                onClick={() => setMuted((m) => !m)}
                className="rounded-full p-2 text-foam/80 transition-colors hover:bg-foam/10 hover:text-foam focus-visible:outline focus-visible:outline-2 focus-visible:outline-aqua"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted || volume === 0 ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
              <label className="sr-only" htmlFor="radio-volume">Volume</label>
              <input
                id="radio-volume"
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={muted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  setMuted(false);
                }}
                className="h-1 min-w-0 flex-1 max-w-[10rem] accent-aqua sm:w-28 sm:flex-none"
              />
            </div>
          )}
        </div>

        {!streamAvailable && (
          <p className="text-sm text-foam/60">
            The live player is ready for your stream URL. Set{" "}
            <code className="rounded bg-dark-ocean/80 px-1.5 py-0.5 text-xs text-aqua">
              NEXT_PUBLIC_RADIO_STREAM_URL
            </code>{" "}
            when your broadcast feed is available.
          </p>
        )}

        {error && (
          <p className="text-sm text-red-200/90" role="alert">{error}</p>
        )}
      </div>
    </GlassCard>
  );
}
