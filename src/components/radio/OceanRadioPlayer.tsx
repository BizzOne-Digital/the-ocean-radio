"use client";

import { RADIO_STREAM_URL } from "@/lib/constants";
import { LiveRadioPlayer } from "./LiveRadioPlayer";
import { SpotifyStationPlayer } from "./SpotifyStationPlayer";

type OceanRadioPlayerProps = {
  className?: string;
  compact?: boolean;
  initialTrackId?: string | null;
  autoPlay?: boolean;
};

/** Live stream when configured; otherwise scheduled Spotify programming. */
export function OceanRadioPlayer(props: OceanRadioPlayerProps) {
  const streamAvailable = Boolean(RADIO_STREAM_URL);

  if (streamAvailable) {
    return <LiveRadioPlayer {...props} />;
  }

  return <SpotifyStationPlayer {...props} />;
}
