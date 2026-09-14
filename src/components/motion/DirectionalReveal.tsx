"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { directionalVariants, type RevealDirection } from "@/lib/motion";
import { useScrollDirection } from "./ScrollDirectionProvider";
import { cn } from "@/lib/utils";

type DirectionalRevealProps = {
  children: ReactNode;
  direction?: RevealDirection;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
};

export function DirectionalReveal({
  children,
  direction = "top",
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: DirectionalRevealProps) {
  const { scrollDown } = useScrollDirection();
  const reduceMotion = useReducedMotion();
  const variants = directionalVariants(direction, scrollDown);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
