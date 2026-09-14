import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollDirectionProvider } from "@/components/motion/ScrollDirectionProvider";
import { BRAND_LOGO_SRC, SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteTitle = `${SITE.name} | Relaxing Favorites`;
const description =
  "The Ocean Radio — Relaxing Favorites. Tune in online and enjoy a smooth selection of music wherever you are.";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: siteTitle,
    template: `%s | ${SITE.name}`,
  },
  description,
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: siteTitle,
    description,
    images: [
      {
        url: BRAND_LOGO_SRC,
        width: 320,
        height: 140,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description,
    images: [BRAND_LOGO_SRC],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-dark-ocean font-body antialiased"
        suppressHydrationWarning
      >
        <ScrollDirectionProvider>
          <Header />
          <main className="min-w-0 overflow-x-clip">{children}</main>
          <Footer />
        </ScrollDirectionProvider>
      </body>
    </html>
  );
}
