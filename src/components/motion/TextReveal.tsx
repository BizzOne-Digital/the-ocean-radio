"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeCinematic } from "@/lib/motion";

type TextRevealProps = {
  id?: string;
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
};

export function TextReveal({ id, text, className, as = "h1", delay = 0 }: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  const Tag = as;

  if (reduceMotion) {
    return <Tag id={id} className={className}>{text}</Tag>;
  }

  return (
    <Tag id={id} className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span className="inline-flex flex-wrap gap-x-[0.25em]" aria-hidden>
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeCinematic, delay: delay + i * 0.06 }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
