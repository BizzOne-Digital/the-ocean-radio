"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type WaveformProps = {
  active: boolean;
  className?: string;
};

export function Waveform({ active, className }: WaveformProps) {
  const reduceMotion = useReducedMotion();
  const points = 24;

  return (
    <svg
      className={cn("h-12 w-full text-aqua/60", className)}
      viewBox="0 0 240 48"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d={generateWavePath(points, 0.5)}
        animate={
          active && !reduceMotion
            ? {
                d: [
                  generateWavePath(points, 0.5),
                  generateWavePath(points, 0.85),
                  generateWavePath(points, 0.4),
                  generateWavePath(points, 0.5),
                ],
              }
            : undefined
        }
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function generateWavePath(count: number, amplitude: number) {
  const step = 240 / (count - 1);
  let d = "M 0 24";
  for (let i = 1; i < count; i++) {
    const x = i * step;
    const y = 24 + Math.sin(i * 0.9) * 16 * amplitude + Math.cos(i * 0.4) * 6 * amplitude;
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}
