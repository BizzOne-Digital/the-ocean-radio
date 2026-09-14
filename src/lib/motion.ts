import type { Transition, Variants } from "framer-motion";

export const springSmooth: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 22,
  mass: 0.8,
};

export const easeCinematic: Transition = {
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1],
};

export const easeSoft: Transition = {
  duration: 0.65,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const easeSharp: Transition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
};

export type RevealDirection = "top" | "bottom" | "left" | "right" | "scale";

const hiddenOffsets: Record<RevealDirection, { x?: number; y?: number; scale?: number }> = {
  top: { y: -72 },
  bottom: { y: 72 },
  left: { x: -80 },
  right: { x: 80 },
  scale: { scale: 0.92 },
};

export function directionalVariants(
  direction: RevealDirection,
  scrollDown: boolean,
): Variants {
  const enterFrom = scrollDown
    ? direction
    : direction === "top"
      ? "bottom"
      : direction === "bottom"
        ? "top"
        : direction === "left"
          ? "right"
          : direction === "right"
            ? "left"
            : "scale";

  const offset = hiddenOffsets[enterFrom];

  return {
    hidden: {
      opacity: 0,
      x: offset.x ?? 0,
      y: offset.y ?? 0,
      scale: offset.scale ?? 1,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: easeCinematic,
    },
  };
}

export const fadeScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: easeSoft,
  },
};
