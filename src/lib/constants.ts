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

/** Single on-air program — same Christian music show nightly */
export const ON_AIR_SHOW = {
  title: "Christian Music",
  timeLabel: "9:00 PM – 12:00 AM",
  daysLabel: "Every night",
  summary:
    "The Ocean Radio airs one dedicated show each evening — the same Christian music format from 9:00 PM to 12:00 AM.",
  detail:
    "There is no rotating daytime lineup on this schedule: one program, one time block, every day. Outside those hours, relaxing favorites may still stream when the station is live online.",
} as const;

export type NavChildLink = {
  href: string;
  label: string;
};

export type NavItem =
  | {
      label: string;
      href: string;
      children?: undefined;
    }
  | {
      label: string;
      href?: string;
      children: readonly NavChildLink[];
    };

export const NAV_ITEMS: readonly NavItem[] = [
  {
    label: "On Air",
    children: [
      { href: "/on-air/recently-played", label: "Recently Played" },
      { href: "/on-air/schedule", label: "On Air Schedule" },
    ],
  },
  { label: "Concerts & Events", href: "/concerts-events" },
  { label: "Contact Us", href: "/contact" },
];

/** Flat links for footer and simple lists */
export const NAV_FLAT_LINKS: readonly NavChildLink[] = [
  { href: "/on-air/recently-played", label: "Recently Played" },
  { href: "/on-air/schedule", label: "On Air Schedule" },
  { href: "/concerts-events", label: "Concerts & Events" },
  { href: "/contact", label: "Contact Us" },
];
