import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { Button } from "@/components/ui/Button";
import { Equalizer } from "@/components/radio/Equalizer";
import { RADIO_STREAM_URL } from "@/lib/constants";

export function ContactListenBanner() {
  const streamReady = Boolean(RADIO_STREAM_URL);

  return (
    <section className="border-y border-aqua/10 bg-dark-ocean/80 py-12" aria-label="Listen while you reach out">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <DirectionalReveal direction="left" className="text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-aqua">While You&apos;re Here</p>
          <p className="mt-2 font-display text-xl font-bold text-foam md:text-2xl">
            Tune in to The Ocean Radio
          </p>
          <p className="mt-2 max-w-md text-sm text-foam/65">
            Enjoy relaxing favorites online — then send us a message when you&apos;re ready.
          </p>
        </DirectionalReveal>
        <DirectionalReveal direction="right" className="flex flex-col items-center gap-4 sm:flex-row">
          <Equalizer active={streamReady} />
          <Button href="/#listen-live" showArrow className="uppercase tracking-[0.15em]">
            Listen Live
          </Button>
        </DirectionalReveal>
      </div>
    </section>
  );
}
