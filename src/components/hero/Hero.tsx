"use client";

import { ChevronDown, Play } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { MiniEqualizer } from "@/components/ui/MiniEqualizer";
import { HeroGlowTrails } from "@/components/hero/HeroGlowTrails";
import { HeroWhaleBackground } from "@/components/hero/HeroWhaleBackground";
import { RADIO_STREAM_URL, SITE } from "@/lib/constants";
import { easeCinematic } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const streamReady = Boolean(RADIO_STREAM_URL);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] min-h-[100dvh] flex-col justify-end overflow-hidden pt-[max(5.5rem,env(safe-area-inset-top)+4.5rem)] md:pt-28"
      aria-labelledby="hero-heading"
    >
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <HeroWhaleBackground className="relative h-full w-full" />
      </motion.div>

      <div className="hidden sm:block">
        <HeroGlowTrails />
      </div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex w-full max-w-7xl min-w-0 flex-1 flex-col justify-center px-4 pb-24 safe-x sm:pb-28 md:px-8 md:pb-32"
      >
        <div className="max-w-2xl min-w-0 text-left">
          <motion.div
            className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...easeCinematic, delay: 0.1 }}
          >
            <span className="h-px w-8 shrink-0 bg-aqua/70 sm:w-14" aria-hidden />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foam/90 sm:text-[11px] sm:tracking-[0.35em] md:text-xs">
              {SITE.name}
            </p>
          </motion.div>

          <h1 id="hero-heading" className="space-y-0.5 break-words">
            <motion.span
              className="block font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-foam sm:text-6xl md:text-7xl lg:text-[5.25rem]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...easeCinematic, delay: 0.2 }}
            >
              RELAXING
            </motion.span>
            <motion.span
              className="block font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-gradient-ocean sm:text-6xl md:text-7xl lg:text-[5.25rem]"
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...easeCinematic, delay: 0.32 }}
            >
              FAVORITES
            </motion.span>
          </h1>

          <motion.p
            className="mt-4 max-w-md text-sm leading-relaxed text-foam/80 sm:mt-6 sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeCinematic, delay: 0.45 }}
          >
            Your soundtrack for relaxing moments, wherever you are.
          </motion.p>

          <motion.div
            className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeCinematic, delay: 0.58 }}
          >
            <Link
              href="/#listen-live"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-bright-water to-aqua px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-dark-text shadow-[0_0_32px_rgb(24_183_217/0.5)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua sm:w-auto sm:px-8 sm:tracking-[0.2em]"
            >
              <Play className="h-4 w-4 shrink-0 fill-dark-text" aria-hidden />
              Listen Live
            </Link>
            <Button
              href="/on-air/schedule"
              variant="secondary"
              showArrow
              className="min-h-12 w-full border-foam/25 bg-foam/5 uppercase tracking-[0.14em] backdrop-blur-sm sm:w-auto sm:tracking-[0.18em]"
            >
              On Air Schedule
            </Button>
          </motion.div>

          <motion.div
            className="mt-6 flex items-center gap-2 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-aqua">
              Live Now
            </span>
            <MiniEqualizer active={streamReady} />
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-4 px-4 pb-6 safe-x safe-bottom sm:gap-6 sm:pb-8 md:grid-cols-3 md:px-8 md:pb-10">
        <motion.div
          className="hidden flex-col gap-1 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-aqua">
              Live Now
            </span>
            <MiniEqualizer active={streamReady} />
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-foam/55">
            {SITE.name}
          </p>
        </motion.div>

        <motion.a
          href="#listen-live"
          className="mx-auto flex flex-col items-center gap-2 text-foam/50 transition-colors hover:text-aqua"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          aria-label="Scroll down"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.28em] sm:tracking-[0.35em]">
            Scroll Down
          </span>
          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-foam/25 p-1.5">
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-3 w-3" aria-hidden />
            </motion.span>
          </span>
        </motion.a>

        <motion.div
          className="relative mx-auto hidden h-14 w-14 items-center justify-center rounded-full border border-aqua/30 bg-dark-ocean/50 backdrop-blur-md sm:h-16 sm:w-16 md:ml-auto md:flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85 }}
          aria-hidden
        >
          <MiniEqualizer active={streamReady} className="scale-125" />
          <span className="absolute -inset-1 rounded-full border border-aqua/20" />
        </motion.div>
      </div>
    </section>
  );
}
