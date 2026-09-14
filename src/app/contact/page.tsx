import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/contact/ContactPageContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Ocean Radio — email, phone, and Facebook.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
