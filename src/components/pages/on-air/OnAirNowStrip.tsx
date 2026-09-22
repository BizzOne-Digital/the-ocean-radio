"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import {
  getCurrentBroadcastSlotInfo,
  getCurrentBroadcastSlot,
} from "@/lib/broadcast-schedule";
import { DAYTIME_SHOW } from "@/lib/playlists";
import { ON_AIR_SHOW } from "@/lib/constants";

export function OnAirNowStrip() {
  const [slotInfo, setSlotInfo] = useState(getCurrentBroadcastSlotInfo());

  useEffect(() => {
    const tick = () => setSlotInfo(getCurrentBroadcastSlotInfo());
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const isChristian = getCurrentBroadcastSlot() === "christian-music";
  const title = isChristian ? ON_AIR_SHOW.title : DAYTIME_SHOW.title;
  const time = slotInfo.timeLabel;

  return (
    <section
      className="border-b border-aqua/10 bg-gradient-to-r from-dark-ocean via-deep-ocean to-dark-ocean"
      aria-label="Current programming"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-4 safe-x sm:flex-row sm:items-center md:px-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-aqua">On air now</p>
          <p className="mt-1 font-display text-lg font-bold text-foam md:text-xl">{title}</p>
        </div>
        <p className="flex items-center gap-2 text-sm text-foam/80">
          <Clock className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
          <span className="font-medium">{time}</span>
          <span className="hidden text-foam/40 sm:inline">·</span>
          <span className="hidden sm:inline">Philippine Time</span>
        </p>
        <Link
          href="/on-air/schedule"
          className="text-xs font-bold uppercase tracking-[0.16em] text-aqua hover:text-bright-water"
        >
          Full schedule
        </Link>
      </div>
    </section>
  );
}
