import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mic2, MonitorSpeaker, Waves } from "lucide-react";

const offerings = [
  {
    icon: Mic2,
    title: "On-Air Style Promotions",
    description:
      "Audio placements woven into the live internet radio stream — your brand heard during regular listening sessions.",
    points: [
      "Suitable for announcements, offers, and brand reminders",
      "Aligned with the station’s relaxed music format",
      "Duration and frequency agreed before launch",
    ],
  },
  {
    icon: MonitorSpeaker,
    title: "Station & Online Presence",
    description:
      "Visibility beyond the stream when options are available — reinforcing your message where listeners discover and return to the station.",
    points: [
      "Coordinated with your audio campaign where applicable",
      "Consistent with The Ocean Radio brand presentation",
      "Details confirmed during planning",
    ],
  },
  {
    icon: Waves,
    title: "Flexible Campaign Planning",
    description:
      "We tailor each partnership to your timeline and message — from a focused push to ongoing presence on the station.",
    points: [
      "Clear goals discussed up front",
      "Copy and creative direction reviewed together",
      "No obligation until you approve the plan",
    ],
  },
];

export function ServicesOfferingsSection() {
  return (
    <section className="bg-dark-ocean py-20 md:py-28" aria-labelledby="offerings-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="offerings-heading"
            eyebrow="What We Offer"
            title="Online Radio Advertising Options"
            description="The Ocean Radio focuses on internet radio advertising. Specific placement types and schedules are confirmed with you directly — below is how we typically structure partnerships."
            align="center"
          />
        </DirectionalReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {offerings.map((item, i) => {
            const Icon = item.icon;
            return (
              <DirectionalReveal
                key={item.title}
                direction={i === 0 ? "left" : i === 2 ? "right" : "top"}
                delay={i * 0.06}
              >
                <article className="flex h-full flex-col rounded-2xl border border-aqua/10 bg-deep-ocean/40 p-6 md:p-8">
                  <div className="mb-4 inline-flex rounded-xl border border-aqua/20 bg-ocean-blue/20 p-3 text-aqua">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foam">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foam/70">{item.description}</p>
                  <ul className="mt-6 flex-1 space-y-2 border-t border-aqua/10 pt-6 text-sm text-foam/65">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-aqua" aria-hidden>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </DirectionalReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
