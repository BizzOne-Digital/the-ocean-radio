"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeaderNavLinkProps = {
  href: string;
  label: string;
  active: boolean;
};

export function HeaderNavLink({ href, label, active }: HeaderNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua md:px-4",
        active ? "text-foam" : "text-foam/70 hover:text-foam",
      )}
    >
      {label}
      {active && (
        <motion.span
          layoutId="header-nav-active"
          className="absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-foam"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
