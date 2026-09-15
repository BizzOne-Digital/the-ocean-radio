import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WaveTransition } from "@/components/motion/WaveTransition";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { OceanBackground } from "@/components/effects/OceanBackground";

export function Footer() {
  return (
    <footer className="relative mt-0 overflow-hidden bg-dark-ocean">
      <WaveTransition variant="deep" flip />
      <div className="relative">
        <OceanBackground intensity="subtle" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 safe-x safe-bottom md:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <BrandLogo href="/" className="w-[200px]" />
              <p className="tagline-tracking mt-4 text-sm font-semibold text-aqua">
                {SITE.tagline}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-foam/65">
                Your soundtrack for relaxing moments — Christian music nightly from 9:00 PM
                to midnight, plus concerts and community updates online.
              </p>
            </div>

            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-foam">
                Navigate
              </h2>
              <ul className="mt-4 space-y-4">
                {NAV_ITEMS.map((item) => {
                  if (item.children) {
                    return (
                      <li key={item.label}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-aqua/80">
                          {item.label}
                        </p>
                        <ul className="mt-2 space-y-2 pl-0">
                          <li>
                            <Link
                              href="/on-air"
                              className="text-foam/75 transition-colors hover:text-aqua focus-visible:outline focus-visible:outline-2 focus-visible:outline-aqua"
                            >
                              Overview
                            </Link>
                          </li>
                          {item.children.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="text-foam/75 transition-colors hover:text-aqua focus-visible:outline focus-visible:outline-2 focus-visible:outline-aqua"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-foam/75 transition-colors hover:text-aqua focus-visible:outline focus-visible:outline-2 focus-visible:outline-aqua"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-foam">
                Contact
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-foam/75">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-aqua"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-aqua/80" aria-hidden />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phone.replace(/-/g, "")}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-aqua"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-aqua/80" aria-hidden />
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-aqua"
                  >
                    <FacebookIcon className="h-4 w-4 shrink-0 text-aqua/80" />
                    {SITE.facebook.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-aqua/10 pt-8 text-center text-xs text-foam/50 md:flex-row md:text-left">
            <p>© 2026 {SITE.name}. All rights reserved.</p>
            <a href={SITE.url} className="transition-colors hover:text-aqua">
              theoceanradio.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
