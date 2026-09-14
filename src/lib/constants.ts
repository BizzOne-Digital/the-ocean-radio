export const HERO_BACKGROUND_IMAGE = "/images/backgrounds/hero-whale-ocean.jpg";

export const BRAND_LOGO_SRC = "/images/branding/ocean-radio-logo.png";

export const SITE = {
  name: "The Ocean Radio",
  tagline: "RELAXING FAVORITES",
  url: "https://theoceanradio.com",
  email: "sbyoung2000@gmail.com",
  phone: "778-239-8220",
  facebook: {
    label: "The Ocean Radio Online",
    url: "https://www.facebook.com/theoceanradioonline",
  },
} as const;

export const RADIO_STREAM_URL =
  process.env.NEXT_PUBLIC_RADIO_STREAM_URL?.trim() || "";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
