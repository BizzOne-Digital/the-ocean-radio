"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ON_AIR_LINKS = [
  { href: "/on-air", label: "Overview" },
  { href: "/on-air/recently-played", label: "Recently Played" },
  { href: "/on-air/schedule", label: "On Air Schedule" },
] as const;

export function OnAirSubNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-[max(4.5rem,env(safe-area-inset-top)+3.5rem)] z-[90] border-b border-aqua/10 bg-dark-ocean/95 backdrop-blur-md"
      aria-label="On Air sections"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 safe-x py-3 md:gap-2 md:px-8">
        <span className="mr-1 shrink-0 self-center text-[10px] font-bold uppercase tracking-[0.3em] text-aqua/80">
          On Air
        </span>
        {ON_AIR_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors sm:px-4 sm:text-xs sm:tracking-[0.12em]",
                active
                  ? "bg-aqua/15 text-aqua shadow-[inset_0_0_0_1px_rgb(24_183_217/0.35)]"
                  : "text-foam/65 hover:bg-foam/5 hover:text-foam",
              )}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
