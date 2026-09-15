"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Radio, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  streamReady?: boolean;
};

function isLinkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({ streamReady }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  let motionIndex = 0;

  const panel = (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-[200] cursor-default bg-dark-ocean/90 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            aria-label="Close menu"
          />
          <motion.nav
            id="mobile-nav"
            className="fixed inset-y-0 right-0 z-[210] flex w-full max-w-[340px] flex-col overflow-y-auto overflow-x-hidden border-l border-aqua/15 bg-deep-ocean shadow-2xl md:hidden"
            style={{
              paddingTop: "max(1rem, env(safe-area-inset-top))",
              paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            aria-label="Mobile navigation"
          >
            <div className="pointer-events-none absolute inset-0 gradient-ocean-hero opacity-95" aria-hidden />
            <div className="pointer-events-none ocean-grain absolute inset-0 opacity-40" aria-hidden />

            <div className="relative z-10 flex flex-1 flex-col p-6 pt-4">
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-aqua/10 pb-6">
                <div>
                  <BrandLogo href="/" className="w-[min(180px,70vw)]" onClick={close} />
                  <p className="tagline-tracking mt-3 text-[10px] font-semibold text-aqua">
                    {SITE.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="shrink-0 rounded-full border border-aqua/25 p-2.5 text-foam touch-manipulation"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  if (item.children) {
                    const groupActive = item.children.some((c) =>
                      isLinkActive(pathname, c.href),
                    );
                    return (
                      <li key={item.label} className="mb-2">
                        <Link
                          href="/on-air"
                          onClick={close}
                          className={cn(
                            "block px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] touch-manipulation",
                            groupActive || pathname === "/on-air"
                              ? "text-aqua"
                              : "text-foam/55 hover:text-foam/80",
                          )}
                        >
                          {item.label}
                        </Link>
                        <ul className="flex flex-col gap-0.5">
                          {item.children.map((link) => {
                            const active = isLinkActive(pathname, link.href);
                            const delay = 0.04 + motionIndex++ * 0.06;
                            return (
                              <motion.li
                                key={link.href}
                                initial={{ opacity: 0, x: 28 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay }}
                              >
                                <Link
                                  href={link.href}
                                  className={cn(
                                    "flex min-h-11 items-center justify-between rounded-xl py-2.5 pl-6 pr-4 text-[15px] font-semibold tracking-wide transition-colors touch-manipulation",
                                    active
                                      ? "bg-aqua/10 text-aqua"
                                      : "text-foam active:bg-foam/10",
                                  )}
                                  onClick={close}
                                >
                                  {link.label}
                                  {active && (
                                    <Radio className="h-4 w-4 opacity-70" aria-hidden />
                                  )}
                                </Link>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  }

                  const active = isLinkActive(pathname, item.href);
                  const delay = 0.04 + motionIndex++ * 0.06;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.12em] transition-colors touch-manipulation sm:tracking-[0.15em]",
                          active
                            ? "bg-aqua/10 text-aqua"
                            : "text-foam active:bg-foam/10",
                        )}
                        onClick={close}
                      >
                        {item.label}
                        {active && (
                          <Radio className="h-4 w-4 opacity-70" aria-hidden />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                className="mt-8 space-y-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
              >
                <Link
                  href="/#listen-live"
                  onClick={close}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ocean-blue to-bright-water py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-dark-text shadow-ocean-glow touch-manipulation sm:tracking-[0.18em]"
                >
                  {streamReady && (
                    <span className="h-2 w-2 animate-pulse rounded-full bg-dark-text/70" />
                  )}
                  Listen Live
                </Link>

                <Link
                  href={SITE.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-aqua/25 py-3 text-sm font-medium text-foam/90 touch-manipulation"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Facebook
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="relative z-[60] md:hidden">
      <button
        type="button"
        className={cn(
          "relative flex min-h-11 min-w-11 items-center justify-center rounded-full border p-2.5 touch-manipulation transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-aqua",
          open
            ? "border-aqua/40 bg-aqua/10 text-aqua"
            : "border-aqua/20 text-foam active:bg-foam/10",
        )}
        onClick={toggle}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mounted && typeof document !== "undefined" ? createPortal(panel, document.body) : null}
    </div>
  );
}
