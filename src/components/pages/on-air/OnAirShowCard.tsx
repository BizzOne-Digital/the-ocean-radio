import { CalendarDays, Clock, Music2 } from "lucide-react";
import { ON_AIR_SHOW } from "@/lib/constants";
import { cn } from "@/lib/utils";

type OnAirShowCardProps = {
  className?: string;
  variant?: "default" | "featured";
};

export function OnAirShowCard({ className, variant = "default" }: OnAirShowCardProps) {
  const featured = variant === "featured";

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-aqua/20 bg-gradient-to-br from-dark-ocean via-deep-ocean to-dark-ocean shadow-[0_20px_60px_rgb(0_0_0/0.35)]",
        featured && "ring-1 ring-aqua/25",
        className,
      )}
    >
      <div className="border-b border-aqua/10 bg-aqua/5 px-6 py-4 md:px-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-aqua">
          {ON_AIR_SHOW.daysLabel}
        </p>
      </div>
      <div className="p-6 md:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-aqua/25 bg-aqua/10 text-aqua"
            aria-hidden
          >
            <Music2 className="h-7 w-7" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-2xl font-bold text-foam md:text-3xl">
              {ON_AIR_SHOW.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-foam/80 md:text-base">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
                <span className="font-semibold tracking-wide">{ON_AIR_SHOW.timeLabel}</span>
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
                <span>{ON_AIR_SHOW.daysLabel}</span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-foam/65 md:text-base">
              {ON_AIR_SHOW.summary}
            </p>
            {ON_AIR_SHOW.detail && (
              <p className="mt-3 text-sm leading-relaxed text-foam/55">{ON_AIR_SHOW.detail}</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
