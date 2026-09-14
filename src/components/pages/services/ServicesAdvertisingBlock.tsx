import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Megaphone, Radio, Sparkles, Target } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Brand Awareness",
    text: "Position your brand alongside a relaxing, music-focused listening environment.",
  },
  {
    icon: Radio,
    title: "Online Audience Reach",
    text: "Connect with listeners tuning in online across regions and time zones.",
  },
  {
    icon: Megaphone,
    title: "Radio Advertising Opportunities",
    text: "Explore on-air style promotional placement tailored to internet radio.",
  },
  {
    icon: Sparkles,
    title: "Promotional Exposure",
    text: "Share your message with an audience that values calm, consistent listening.",
  },
];

export function ServicesAdvertisingBlock() {
  return (
    <section className="bg-dark-ocean py-20 md:py-28" aria-labelledby="advertising-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <DirectionalReveal direction="scale">
          <GlassCard className="p-8 md:p-12">
            <SectionHeading
              id="advertising-heading"
              eyebrow="Primary Service"
              title="Online Radio Advertising"
              description="Partner with The Ocean Radio to introduce your brand to an audience built around relaxing favorites and everyday listening."
            />
            <div className="mt-8 grid gap-6 border-b border-aqua/10 pb-10 md:grid-cols-2">
              <p className="text-sm leading-relaxed text-foam/75">
                Your advertisement becomes part of the listening experience — not a distraction
                from it. We prioritize messages that sound natural in a music-forward, low-stress
                format, so your brand is associated with the same calm tone listeners come for.
              </p>
              <p className="text-sm leading-relaxed text-foam/75">
                From first conversation to launch, you work directly with the station team.
                We review your goals, suggest placement approaches, and align timing with your
                marketing plans. Creative requirements and technical details are handled step
                by step — no self-serve checkout or hidden packages.
              </p>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-aqua">
              What partners gain
            </p>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <DirectionalReveal
                    key={item.title}
                    direction={i % 2 === 0 ? "left" : "right"}
                    delay={i * 0.05}
                  >
                    <li className="flex h-full gap-4 rounded-2xl border border-aqua/10 bg-deep-ocean/40 p-5 transition-colors hover:border-aqua/20">
                      <div className="shrink-0 rounded-xl border border-aqua/15 bg-ocean-blue/25 p-3 text-aqua">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foam">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-foam/70">{item.text}</p>
                      </div>
                    </li>
                  </DirectionalReveal>
                );
              })}
            </ul>
            <div className="mt-10 flex flex-col items-start gap-4 border-t border-aqua/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold uppercase tracking-widest text-aqua">
                Contact For Pricing
              </p>
              <Button href="/contact" showArrow className="uppercase tracking-[0.12em]">
                Start A Conversation
              </Button>
            </div>
          </GlassCard>
        </DirectionalReveal>
      </div>
    </section>
  );
}
