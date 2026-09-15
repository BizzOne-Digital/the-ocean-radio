"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { MiniEqualizer } from "@/components/ui/MiniEqualizer";
import { RADIO_STREAM_URL, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HeaderMainNav } from "./HeaderMainNav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const streamReady = Boolean(RADIO_STREAM_URL);
  const onHomeHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] safe-top isolate">
      <div
        className={cn(
          "mx-auto max-w-7xl safe-x transition-all duration-500",
          scrolled ? "py-2 md:py-3" : "py-3 md:py-6",
        )}
      >
        <div
          className={cn(
            "flex min-h-11 min-w-0 items-center justify-between gap-2 transition-all duration-500 sm:min-h-12 sm:gap-3",
            scrolled &&
              "rounded-2xl border border-aqua/15 bg-dark-ocean/88 px-3 shadow-[0_12px_40px_rgb(0_0_0/0.35)] backdrop-blur-xl sm:px-4 lg:rounded-full",
          )}
        >
          <div className="flex h-11 shrink-0 items-center sm:h-12">
            <BrandLogo
              className={cn(
                "!w-auto min-w-0 max-w-[38vw] object-contain object-left transition-all duration-500 sm:max-w-[32vw] md:max-w-[140px] lg:max-w-[160px]",
                scrolled ? "max-h-8 sm:max-h-9" : "max-h-9 sm:max-h-10 md:max-h-11",
              )}
              priority
            />
          </div>

          <HeaderMainNav />

          <div className="flex h-11 shrink-0 items-center gap-1.5 sm:h-12 sm:gap-2">
            <Link
              href="/#listen-live"
              className={cn(
                "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 overflow-hidden rounded-full px-3 text-[10px] font-bold uppercase tracking-[0.15em] shadow-[0_0_28px_rgb(24_183_217/0.45)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua sm:px-5 sm:tracking-[0.2em] md:hidden",
                onHomeHero
                  ? "bg-gradient-to-r from-bright-water to-aqua text-dark-text"
                  : "bg-gradient-to-r from-ocean-blue to-bright-water text-dark-text",
              )}
              aria-label="Listen Live"
            >
              <MiniEqualizer variant="dark" active={streamReady} />
              <span className="hidden sm:inline">Listen Live</span>
            </Link>

            <Link
              href="/#listen-live"
              className={cn(
                "group relative hidden min-h-11 items-center gap-2.5 overflow-hidden rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_28px_rgb(24_183_217/0.45)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua md:inline-flex",
                onHomeHero
                  ? "bg-gradient-to-r from-bright-water to-aqua text-dark-text"
                  : "bg-gradient-to-r from-ocean-blue to-bright-water text-dark-text",
              )}
            >
              <MiniEqualizer variant="dark" active={streamReady} />
              Listen Live
            </Link>

            <Link
              href={SITE.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden min-h-11 min-w-11 items-center justify-center rounded-full p-2 transition-colors hover:text-aqua focus-visible:outline focus-visible:outline-2 focus-visible:outline-aqua md:inline-flex",
                onHomeHero ? "text-foam" : "text-aqua/80 hover:bg-foam/5",
              )}
              aria-label={SITE.facebook.label}
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>

            <MobileMenu streamReady={streamReady} />
          </div>
        </div>
      </div>

      <motion.div
        className="h-px origin-left bg-gradient-to-r from-bright-water via-aqua to-transparent"
        initial={false}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        aria-hidden
      />
    </header>
  );
}
