"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FloatingElementProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
};

export function FloatingElement({
  children,
  className,
  duration = 6,
  delay = 0,
}: FloatingElementProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
