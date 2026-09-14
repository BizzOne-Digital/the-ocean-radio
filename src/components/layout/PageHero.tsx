"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroOceanScene } from "@/components/hero/HeroOceanScene";
import { SectionImage } from "@/components/ui/SectionImage";
import { easeCinematic } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  className?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  className,
  backgroundImage,
  backgroundAlt = "",
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative flex min-h-[50vh] items-end overflow-hidden pb-10 pt-[max(6.5rem,env(safe-area-inset-top)+5rem)] safe-x sm:min-h-[55vh] sm:pb-14 md:min-h-[62vh] md:pb-20 md:pt-32",
        className,
      )}
    >
      <div className="absolute inset-0 scale-105">
        {backgroundImage ? (
          <SectionImage
            src={backgroundImage}
            alt={backgroundAlt}
            className="h-full w-full"
            overlay="dark"
            priority
            sizes="100vw"
            imageClassName="object-cover object-center"
          />
        ) : (
          <HeroOceanScene />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-ocean via-dark-ocean/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <motion.p
          className="text-[10px] font-bold uppercase tracking-[0.38em] text-aqua md:text-xs"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeCinematic, delay: 0.05 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-4xl break-words font-display text-3xl font-extrabold leading-[1.05] text-foam sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 32, filter: reduceMotion ? "none" : "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...easeCinematic, delay: 0.12 }}
        >
          {title}
          {titleAccent && (
            <span className="mt-1 block text-gradient-ocean">{titleAccent}</span>
          )}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-foam/75 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeCinematic, delay: 0.22 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
