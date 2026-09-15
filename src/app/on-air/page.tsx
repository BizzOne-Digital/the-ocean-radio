import type { Metadata } from "next";
import { OnAirHubContent } from "@/components/pages/on-air/OnAirHubContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "On Air",
  description:
    "The Ocean Radio on air — Christian music nightly 9:00 PM to 12:00 AM. Recently played and schedule.",
  alternates: { canonical: `${SITE.url}/on-air` },
};

export default function OnAirPage() {
  return <OnAirHubContent />;
}
