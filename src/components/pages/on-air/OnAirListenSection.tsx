import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { OceanRadioPlayer } from "@/components/radio/OceanRadioPlayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OceanBackground } from "@/components/effects/OceanBackground";

type OnAirListenSectionProps = {
  id?: string;
};

export function OnAirListenSection({ id = "listen-live" }: OnAirListenSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-dark-ocean py-20 md:py-28"
      aria-labelledby="on-air-listen-heading"
    >
      <OceanBackground intensity="subtle" />
      <div className="relative mx-auto max-w-4xl px-4 safe-x md:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="on-air-listen-heading"
            eyebrow="Listen"
            title="Tune In Now"
            align="center"
          />
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-foam/70 md:text-base">
            Press play on The Ocean Radio live stream. During show hours, enjoy our nightly
            Christian music program from 9:00 PM to midnight.
          </p>
        </DirectionalReveal>
        <DirectionalReveal direction="bottom" delay={0.08} className="mt-12">
          <OceanRadioPlayer />
        </DirectionalReveal>
      </div>
    </section>
  );
}
