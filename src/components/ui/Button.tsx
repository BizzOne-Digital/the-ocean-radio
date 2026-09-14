"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children" | "className">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-ocean-blue via-bright-water to-aqua text-dark-text shadow-ocean-glow hover:shadow-[0_0_50px_rgb(24_183_217/0.45)]",
  secondary:
    "border border-aqua/30 bg-deep-ocean/40 text-foam backdrop-blur-sm hover:border-aqua/50 hover:bg-deep-ocean/60",
  ghost: "text-foam/90 hover:text-foam hover:bg-foam/5",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    showArrow = false,
    children,
    className,
    href,
    ...rest
  } = props;

  const reduceMotion = useReducedMotion();
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua disabled:pointer-events-none disabled:opacity-50 sm:min-h-12 sm:px-6 sm:py-3";

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      )}
    </>
  );

  const motionProps = reduceMotion
    ? {}
    : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } };

  if (href) {
    const linkProps = rest as Omit<ButtonAsLink, keyof CommonProps | "href">;
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={cn(base, variants[variant], "group", className)}
          {...linkProps}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof CommonProps | "href">;
  return (
    <motion.div {...motionProps} className="inline-block">
      <button
        type={buttonProps.type ?? "button"}
        className={cn(base, variants[variant], "group", className)}
        {...buttonProps}
      >
        {content}
      </button>
    </motion.div>
  );
}
