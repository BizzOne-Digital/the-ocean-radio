"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkClass =
  "relative inline-flex items-center whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua lg:text-sm";

export function HeaderMainNav() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden h-11 min-w-0 flex-1 items-center justify-center md:flex lg:gap-1"
      aria-label="Main"
    >
      <ul className="flex min-w-0 flex-wrap items-center justify-center gap-x-0.5 gap-y-1 lg:gap-x-1">
        {NAV_ITEMS.map((item, itemIndex) => {
          if (item.children) {
            const groupActive =
              pathname === "/on-air" ||
              item.children.some((c) => isActive(pathname, c.href));

            return (
              <li
                key={item.label}
                className={cn(
                  "flex max-w-full items-center",
                  itemIndex < NAV_ITEMS.length - 1 &&
                    "lg:border-r lg:border-aqua/15 lg:pr-3 lg:mr-2",
                )}
              >
                <span
                  className={cn(
                    "mr-1 shrink-0 text-[9px] font-bold uppercase tracking-[0.16em] md:mr-1.5 md:text-[10px] md:tracking-[0.2em]",
                    groupActive ? "text-aqua" : "text-aqua/70",
                  )}
                >
                  {item.label}
                </span>
                <ul className="flex items-center">
                  {item.children.map((link, i) => {
                    const active = isActive(pathname, link.href);
                    return (
                      <li key={link.href} className="flex items-center">
                        {i > 0 && (
                          <span className="mx-1 text-foam/20 select-none" aria-hidden>
                            |
                          </span>
                        )}
                        <Link
                          href={link.href}
                          className={cn(
                            linkClass,
                            active ? "text-foam" : "text-foam/70 hover:text-foam",
                          )}
                          aria-current={active ? "page" : undefined}
                        >
                          {link.label}
                          {active && (
                            <span
                              className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-foam"
                              aria-hidden
                            />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }

          const active = isActive(pathname, item.href);
          return (
            <li
              key={item.href}
              className={cn(
                "flex items-center",
                itemIndex < NAV_ITEMS.length - 1 &&
                  "lg:border-r lg:border-aqua/15 lg:pr-3 lg:mr-2",
              )}
            >
              <Link
                href={item.href}
                className={cn(
                  linkClass,
                  active ? "text-foam" : "text-foam/70 hover:text-foam",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-foam"
                    aria-hidden
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
