"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Radio, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  streamReady?: boolean;
};

export function MobileMenu({ streamReady }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [trackedPath, setTrackedPath] = useState(pathname);

  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className={cn(
          "relative rounded-full border p-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-aqua",
          open
            ? "border-aqua/40 bg-aqua/10 text-aqua"
            : "border-aqua/20 text-foam hover:bg-foam/5",
        )}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-dark-ocean/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.nav
              id="mobile-nav"
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[min(100%,340px)] flex-col overflow-y-auto overflow-x-hidden border-l border-aqua/15 shadow-2xl pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              aria-label="Mobile"
            >
              <div className="absolute inset-0 gradient-ocean-hero opacity-95" />
              <div className="ocean-grain absolute inset-0 opacity-40" />

              <div className="relative flex flex-1 flex-col p-6 pt-8">
                <div className="mb-8 border-b border-aqua/10 pb-6">
                  <BrandLogo href="/" className="w-[180px]" onClick={() => setOpen(false)} />
                  <p className="tagline-tracking mt-3 text-[10px] font-semibold text-aqua">
                    {SITE.tagline}
                  </p>
                </div>

                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.07 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold uppercase tracking-[0.2em] transition-colors",
                          pathname === link.href
                            ? "bg-aqua/10 text-aqua"
                            : "text-foam hover:bg-foam/5",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                        {pathname === link.href && (
                          <Radio className="h-4 w-4 opacity-70" aria-hidden />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-8 space-y-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                >
                  <Link
                    href="/#listen-live"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ocean-blue to-bright-water py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-dark-text shadow-ocean-glow"
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
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-aqua/25 py-3 text-sm font-medium text-foam/90"
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
    </div>
  );
}
