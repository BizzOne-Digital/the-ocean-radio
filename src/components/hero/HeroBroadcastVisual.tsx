"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Equalizer } from "@/components/radio/Equalizer";
import { RADIO_STREAM_URL, SITE } from "@/lib/constants";
import { easeCinematic } from "@/lib/motion";

export function HeroBroadcastVisual() {
  const reduceMotion = useReducedMotion();
  const streamReady = Boolean(RADIO_STREAM_URL);

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...easeCinematic, delay: 0.4 }}
    >
      {/* Outer orbit ring */}
      <div className="absolute -inset-4 rounded-[2rem] border border-aqua/10 bg-gradient-to-br from-aqua/5 to-transparent md:-inset-6" />
      <div
        className="absolute -inset-px rounded-[1.75rem] opacity-60"
        style={{
          background:
            "linear-gradient(135deg, rgb(98 217 232 / 0.35), transparent 40%, rgb(8 126 164 / 0.2))",
        }}
      />

      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-8 rounded-full border border-aqua/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-aqua shadow-[0_0_12px_#62D9E8]" />
        </motion.div>
      )}

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-deep-ocean/50 shadow-[0_32px_100px_rgb(0_0_0/0.45)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-bright-water/10 via-transparent to-dark-ocean/80" />

        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["0%", "220%"] }}
            transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          />
        )}

        <div className="relative px-6 pb-8 pt-6 md:px-10 md:pb-10 md:pt-8">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua/25 bg-dark-ocean/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-aqua">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {streamReady ? "On Air" : "Station"}
            </span>
            <Equalizer active={streamReady} className="h-6" />
          </div>

          <div className="mt-8 flex flex-col items-center">
            <BrandLogo href={null} className="w-[min(300px,85%)]" priority />
          </div>

          <p className="tagline-tracking mt-6 text-center text-xs font-semibold text-aqua/90 md:text-sm">
            {SITE.tagline}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/#listen-live"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-ocean-blue to-bright-water px-8 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-dark-text shadow-ocean-glow transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua"
            >
              <span className="relative z-10">Listen Live</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-bright-water to-aqua opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          </div>
        </div>

        {/* Waveform strip */}
        <div className="border-t border-white/5 bg-dark-ocean/40 px-4 py-3">
          <div className="flex items-center justify-center gap-1 opacity-70">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="w-0.5 rounded-full bg-aqua/80"
                style={{
                  height: `${8 + ((i * 7) % 20)}px`,
                  animation: reduceMotion
                    ? undefined
                    : `equalizer-bar ${0.7 + (i % 5) * 0.15}s ease-in-out infinite`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
