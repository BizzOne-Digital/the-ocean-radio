"use client";

import { motion } from "framer-motion";
import { Globe2, Headphones, Radio, Waves } from "lucide-react";
import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollDirection } from "@/components/motion/ScrollDirectionProvider";
import { directionalVariants, type RevealDirection } from "@/lib/motion";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Waves,
    title: "Relaxing Favorites",
    description:
      "A carefully positioned musical identity built around relaxed listening.",
    direction: "left" as RevealDirection,
  },
  {
    icon: Globe2,
    title: "Listen Anywhere",
    description: "Enjoy the station wherever you are.",
    direction: "top" as RevealDirection,
  },
  {
    icon: Radio,
    title: "Always Connected",
    description:
      "Stay connected to The Ocean Radio from the Philippines to North America.",
    direction: "right" as RevealDirection,
  },
  {
    icon: Headphones,
    title: "A Soundtrack For Your Day",
    description: "Music designed to accompany your everyday moments.",
    direction: "bottom" as RevealDirection,
  },
];

export function WhyListenSection() {
  const { scrollDown } = useScrollDirection();

  return (
    <section className="relative bg-dark-ocean py-20 md:py-28" aria-labelledby="why-listen-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="why-listen-heading"
            eyebrow="The Experience"
            title="Why Listen"
            description="A broadcast-quality listening experience shaped by calm energy, ocean-inspired atmosphere, and music that lets you breathe."
            align="center"
          />
        </DirectionalReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const variants = directionalVariants(card.direction, scrollDown);
            return (
              <motion.article
                key={card.title}
                className="group relative overflow-hidden rounded-2xl border border-aqua/10 bg-gradient-to-b from-deep-ocean/80 to-dark-ocean/90 p-6 shadow-card transition-transform duration-500 hover:-translate-y-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={variants}
                transition={{ delay: i * 0.08 }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgb(24 183 217 / 0.15), transparent 55%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl border border-aqua/20 bg-ocean-blue/20 p-3 text-aqua">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foam">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foam/70">{card.description}</p>
                </div>
                <div
                  className={cn(
                    "pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-bright-water to-aqua transition-all duration-500 group-hover:w-full",
                  )}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
