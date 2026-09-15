import type { Metadata } from "next";
import { OnAirScheduleContent } from "@/components/pages/on-air/OnAirScheduleContent";
import { ON_AIR_SHOW, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "On Air Schedule",
  description: `${ON_AIR_SHOW.title} — ${ON_AIR_SHOW.timeLabel} on The Ocean Radio.`,
  alternates: { canonical: `${SITE.url}/on-air/schedule` },
};

export default function OnAirSchedulePage() {
  return <OnAirScheduleContent />;
}
