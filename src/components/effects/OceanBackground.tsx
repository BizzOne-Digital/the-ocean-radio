"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OceanBackgroundProps = {
  className?: string;
  intensity?: "hero" | "section" | "subtle";
};

export function OceanBackground({ className, intensity = "section" }: OceanBackgroundProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 gradient-ocean-hero opacity-90" />
      <div className="ocean-grain absolute inset-0 opacity-60" />
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-bright-water/10 blur-[100px]"
            animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-ocean-blue/15 blur-[90px]"
            animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      {intensity === "hero" && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-ocean to-transparent" />
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-aqua/40"
              style={{
                left: `${8 + i * 7.5}%`,
                top: `${20 + (i % 5) * 12}%`,
              }}
              animate={reduceMotion ? undefined : { y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
