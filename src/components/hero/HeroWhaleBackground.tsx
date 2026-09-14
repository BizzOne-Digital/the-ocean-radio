"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HERO_BACKGROUND_IMAGE } from "@/lib/constants";

type HeroWhaleBackgroundProps = {
  className?: string;
};

export function HeroWhaleBackground({ className }: HeroWhaleBackgroundProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={className} aria-hidden>
      <Image
        src={HERO_BACKGROUND_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%] sm:object-center"
        quality={90}
      />
      {/* Readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-ocean/85 via-dark-ocean/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-ocean/90 via-dark-ocean/20 to-dark-ocean/30" />
      <div className="ocean-grain absolute inset-0 opacity-30 mix-blend-overlay" />

      {!reduceMotion && (
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{ opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 70% 45%, rgb(24 183 217 / 0.25), transparent 60%)",
          }}
        />
      )}
    </div>
  );
}
