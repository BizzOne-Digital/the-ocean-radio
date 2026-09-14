"use client";

import { cn } from "@/lib/utils";

type EqualizerProps = {
  active: boolean;
  className?: string;
  bars?: number;
};

export function Equalizer({ active, className, bars = 9 }: EqualizerProps) {
  return (
    <div
      className={cn("flex h-8 items-end justify-center gap-1", className)}
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "w-1 origin-bottom rounded-full bg-gradient-to-t from-ocean-blue to-aqua",
            active && "animate-[equalizer-bar_0.9s_ease-in-out_infinite]",
          )}
          style={{
            height: `${40 + (i % 3) * 18}%`,
            animationDelay: active ? `${i * 0.08}s` : undefined,
            transform: active ? undefined : "scaleY(0.35)",
          }}
        />
      ))}
    </div>
  );
}
