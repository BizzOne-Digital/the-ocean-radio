"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroOceanScene({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 gradient-ocean-hero animate-ocean-drift" />
      <div className="ocean-grain absolute inset-0 opacity-50" />

      {/* Sunlight through water */}
      <div
        className="absolute -top-1/4 left-1/2 h-[140%] w-[80%] -translate-x-1/2 opacity-40"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 0%, transparent 0deg, rgb(24 183 217 / 0.15) 40deg, transparent 80deg, rgb(98 217 232 / 0.08) 120deg, transparent 360deg)",
        }}
      />

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-bright-water/20 blur-[100px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[25%] right-[5%] h-96 w-96 rounded-full bg-ocean-blue/25 blur-[120px]"
            animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Horizon glow */}
      <div className="absolute inset-x-0 top-[38%] h-px bg-gradient-to-r from-transparent via-aqua/40 to-transparent" />

      {/* Layered waves */}
      <svg
        className="hero-wave-layer absolute bottom-0 w-[200%] min-w-[1400px] text-deep-ocean/80"
        viewBox="0 0 1200 280"
        preserveAspectRatio="none"
        style={{ animation: reduceMotion ? undefined : "hero-wave-a 22s ease-in-out infinite" }}
      >
        <path
          fill="currentColor"
          d="M0,160 C200,220 400,100 600,170 C800,240 1000,120 1200,180 L1200,280 L0,280 Z"
          opacity="0.55"
        />
      </svg>
      <svg
        className="hero-wave-layer absolute bottom-0 w-[200%] min-w-[1400px] text-ocean-blue/30"
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
        style={{ animation: reduceMotion ? undefined : "hero-wave-b 16s ease-in-out infinite reverse" }}
      >
        <path
          fill="currentColor"
          d="M0,140 C180,80 360,200 540,130 C720,60 900,190 1200,120 L1200,240 L0,240 Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 w-full text-dark-ocean"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,70 C300,110 500,40 750,80 C950,110 1100,50 1200,75 L1200,120 L0,120 Z"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-dark-ocean/30 via-transparent to-dark-ocean" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(4_44_56/0.65)_100%)]" />
    </div>
  );
}
