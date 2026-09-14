"use client";

import { cn } from "@/lib/utils";

type MiniEqualizerProps = {
  className?: string;
  variant?: "light" | "dark";
  active?: boolean;
};

export function MiniEqualizer({ className, variant = "light", active = true }: MiniEqualizerProps) {
  const bar =
    variant === "light"
      ? "bg-gradient-to-t from-foam/80 to-aqua"
      : "bg-gradient-to-t from-ocean-blue to-aqua";

  return (
    <div className={cn("flex h-4 items-end gap-0.5", className)} aria-hidden>
      {[0.5, 0.85, 0.65, 1, 0.7].map((h, i) => (
        <span
          key={i}
          className={cn("w-0.5 origin-bottom rounded-full", bar, active && "animate-[equalizer-bar_0.8s_ease-in-out_infinite]")}
          style={{
            height: `${h * 100}%`,
            animationDelay: active ? `${i * 0.1}s` : undefined,
            transform: active ? undefined : "scaleY(0.4)",
          }}
        />
      ))}
    </div>
  );
}
