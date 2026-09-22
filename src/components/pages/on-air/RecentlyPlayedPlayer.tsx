"use client";

import { useSearchParams } from "next/navigation";
import { OceanRadioPlayer } from "@/components/radio/OceanRadioPlayer";

export function RecentlyPlayedPlayer() {
  const searchParams = useSearchParams();
  const play = searchParams.get("play");
  const autoplay = searchParams.get("autoplay") === "1";

  return (
    <OceanRadioPlayer
      key={`${play ?? "default"}-${autoplay ? "1" : "0"}`}
      initialTrackId={play}
      autoPlay={autoplay}
    />
  );
}
