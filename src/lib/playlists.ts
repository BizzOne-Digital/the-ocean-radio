import relaxingData from "@/data/relaxing-favorites.json";

export type PlaylistTrack = {
  id: string;
  artist: string;
  title: string;
  /** Spotify track ID for embed playback (no API at runtime). */
  spotifyId?: string;
};

export type BroadcastSlotId = "relaxing-favorites" | "christian-music";

export const RELAXING_FAVORITES_PLAYLIST: PlaylistTrack[] = relaxingData.tracks;

export const PLAYLIST_TIMEZONE = "Asia/Manila";

export const DAYTIME_SHOW = {
  id: "relaxing-favorites" as const,
  title: "Relaxing Favorites",
  timeLabel: "12:00 AM – 9:00 PM",
  timezoneLabel: "Philippine Time",
  trackCount: RELAXING_FAVORITES_PLAYLIST.length,
} as const;

export function getPlaylistForSlot(slot: BroadcastSlotId): PlaylistTrack[] {
  if (slot === "relaxing-favorites") return RELAXING_FAVORITES_PLAYLIST;
  return [];
}

export function findTrackById(id: string): PlaylistTrack | undefined {
  return RELAXING_FAVORITES_PLAYLIST.find((t) => t.id === id);
}
