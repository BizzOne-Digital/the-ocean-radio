import type { Metadata } from "next";
import { ConcertsEventsPageContent } from "@/components/pages/concerts/ConcertsEventsPageContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Concerts & Events",
  description:
    "Concerts and community events from The Ocean Radio — updates on Facebook.",
  alternates: { canonical: `${SITE.url}/concerts-events` },
};

export default function ConcertsEventsPage() {
  return <ConcertsEventsPageContent />;
}
