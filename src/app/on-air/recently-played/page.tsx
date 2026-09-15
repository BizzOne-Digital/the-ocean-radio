import type { Metadata } from "next";
import { OnAirRecentlyPlayedContent } from "@/components/pages/on-air/OnAirRecentlyPlayedContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Recently Played",
  description:
    "Recently played on The Ocean Radio — tune in for Christian music nightly from 9:00 PM to 12:00 AM.",
  alternates: { canonical: `${SITE.url}/on-air/recently-played` },
};

export default function RecentlyPlayedPage() {
  return <OnAirRecentlyPlayedContent />;
}
