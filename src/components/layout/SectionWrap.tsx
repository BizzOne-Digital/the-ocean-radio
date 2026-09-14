import { WaveTransition } from "@/components/motion/WaveTransition";
import { cn } from "@/lib/utils";

type SectionWrapProps = {
  children: React.ReactNode;
  className?: string;
  waveTop?: boolean;
  waveBottom?: boolean;
  waveVariant?: "deep" | "mid" | "foam";
  id?: string;
  ariaLabelledBy?: string;
};

export function SectionWrap({
  children,
  className,
  waveTop,
  waveBottom,
  waveVariant = "deep",
  id,
  ariaLabelledBy,
}: SectionWrapProps) {
  return (
    <section
      id={id}
      className={cn("relative", className)}
      aria-labelledby={ariaLabelledBy}
    >
      {waveTop && <WaveTransition variant={waveVariant} className="absolute top-0 z-[1]" />}
      {children}
      {waveBottom && (
        <WaveTransition variant={waveVariant} flip className="absolute bottom-0 z-[1]" />
      )}
    </section>
  );
}
