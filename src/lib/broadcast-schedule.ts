import type { BroadcastSlotId } from "@/lib/playlists";
import { PLAYLIST_TIMEZONE } from "@/lib/playlists";

export type BroadcastSlotInfo = {
  id: BroadcastSlotId;
  label: string;
  timeLabel: string;
};

const SLOTS: Record<BroadcastSlotId, BroadcastSlotInfo> = {
  "relaxing-favorites": {
    id: "relaxing-favorites",
    label: "Relaxing Favorites",
    timeLabel: "12:00 AM – 9:00 PM",
  },
  "christian-music": {
    id: "christian-music",
    label: "Christian Music",
    timeLabel: "9:00 PM – 12:00 AM",
  },
};

/** Hour 0–23 in Philippine Time */
export function getManilaHour(date: Date = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: PLAYLIST_TIMEZONE,
    hour: "numeric",
    hour12: false,
  }).formatToParts(date);
  const hour = parts.find((p) => p.type === "hour")?.value;
  return hour ? parseInt(hour, 10) : 0;
}

/** 9:00 PM – 11:59 PM Manila = Christian Music; otherwise Relaxing Favorites */
export function getCurrentBroadcastSlot(date: Date = new Date()): BroadcastSlotId {
  const hour = getManilaHour(date);
  return hour >= 21 ? "christian-music" : "relaxing-favorites";
}

export function getBroadcastSlotInfo(slot: BroadcastSlotId): BroadcastSlotInfo {
  return SLOTS[slot];
}

export function getCurrentBroadcastSlotInfo(date?: Date): BroadcastSlotInfo {
  return getBroadcastSlotInfo(getCurrentBroadcastSlot(date));
}

/** Radio-style rotation index from clock (changes every ~3.5 minutes per track). */
export function getRotationIndex(trackCount: number, date: Date = new Date()): number {
  if (trackCount <= 0) return 0;
  const ms = date.getTime();
  const slotMs = 3.5 * 60 * 1000;
  return Math.floor(ms / slotMs) % trackCount;
}
