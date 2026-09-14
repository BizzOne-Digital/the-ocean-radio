"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroGlowTrails() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#18B7D9" stopOpacity="0" />
          <stop offset="40%" stopColor="#62D9E8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#18B7D9" stopOpacity="0" />
        </linearGradient>
        <filter id="trailGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d="M900,520 C1050,480 1150,400 1280,350 C1320,330 1380,300 1420,280"
        fill="none"
        stroke="url(#trailGrad)"
        strokeWidth="3"
        filter="url(#trailGlow)"
        initial={{ pathLength: 0, opacity: 0.3 }}
        animate={{ pathLength: 1, opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M880,560 C1000,520 1120,450 1250,420 C1300,405 1360,370 1410,340"
        fill="none"
        stroke="url(#trailGrad)"
        strokeWidth="2"
        opacity="0.6"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}
