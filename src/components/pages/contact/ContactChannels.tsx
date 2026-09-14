import { Globe, Mail, Phone } from "lucide-react";
import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { GlassCard } from "@/components/ui/GlassCard";
import { SITE } from "@/lib/constants";

const channels = [
  {
    key: "email",
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    key: "phone",
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/-/g, "")}`,
  },
  {
    key: "facebook",
    label: "Facebook",
    value: SITE.facebook.label,
    href: SITE.facebook.url,
    external: true,
  },
  {
    key: "web",
    label: "Website",
    value: "theoceanradio.com",
    href: SITE.url,
  },
] as const;

function ChannelIcon({ channelKey }: { channelKey: string }) {
  const className = "mt-0.5 h-5 w-5 shrink-0 text-aqua/80";
  if (channelKey === "email") return <Mail className={className} aria-hidden />;
  if (channelKey === "phone") return <Phone className={className} aria-hidden />;
  if (channelKey === "facebook") return <FacebookIcon className={className} />;
  return <Globe className={className} aria-hidden />;
}

export function ContactChannels() {
  return (
    <section className="bg-dark-ocean py-16 md:py-20" aria-labelledby="channels-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <DirectionalReveal direction="top">
          <h2
            id="channels-heading"
            className="text-center font-display text-sm font-bold uppercase tracking-[0.3em] text-aqua"
          >
            Direct Lines
          </h2>
        </DirectionalReveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((ch, i) => (
            <DirectionalReveal
              key={ch.key}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.06}
            >
              <li className="h-full">
                <GlassCard className="h-full p-6 transition-transform hover:-translate-y-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-foam/45">
                    {ch.label}
                  </p>
                  <a
                    href={ch.href}
                    target={"external" in ch && ch.external ? "_blank" : undefined}
                    rel={"external" in ch && ch.external ? "noopener noreferrer" : undefined}
                    className="mt-4 flex items-start gap-3 text-foam transition-colors hover:text-aqua"
                  >
                    <ChannelIcon channelKey={ch.key} />
                    <span className="text-sm font-medium leading-snug break-all">{ch.value}</span>
                  </a>
                </GlassCard>
              </li>
            </DirectionalReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
