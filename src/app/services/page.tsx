import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/services/ServicesPageContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Online radio advertising on The Ocean Radio — on-air promotions, brand awareness, and partnerships for listeners in the Philippines and North America. Contact for pricing.",
  alternates: { canonical: `${SITE.url}/services` },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
