import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionImage } from "@/components/ui/SectionImage";
import { WaveTransition } from "@/components/motion/WaveTransition";
import { SITE_IMAGES } from "@/lib/images";

export function SoundscapeSection() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden py-24 md:min-h-[60vh]" aria-label="Ocean soundscape">
      <WaveTransition variant="mid" />
      <SectionImage
        src={SITE_IMAGES.oceanDigitalWaves}
        alt="Dark ocean waves with luminous cyan sound waves across the water"
        className="absolute inset-0"
        overlay="dark"
        sizes="100vw"
        imageClassName="object-cover"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <DirectionalReveal direction="scale">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-aqua">
            Ocean Soundscape
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foam md:text-5xl">
            Broadcast From The Depths
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foam/80">
            Deep ocean tones, soft light, and a steady rhythm — the visual language of
            The Ocean Radio mirrors the calm you hear on air.
          </p>
        </DirectionalReveal>
      </div>
      <WaveTransition variant="deep" flip className="absolute bottom-0 z-10" />
    </section>
  );
}
