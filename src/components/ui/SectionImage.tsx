import Image from "next/image";
import { cn } from "@/lib/utils";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  overlay?: "dark" | "medium" | "light" | "none";
  sizes?: string;
};

const overlays = {
  dark: "from-dark-ocean/90 via-dark-ocean/50 to-dark-ocean/70",
  medium: "from-dark-ocean/75 via-dark-ocean/35 to-dark-ocean/60",
  light: "from-dark-ocean/40 via-transparent to-dark-ocean/50",
  none: "",
};

export function SectionImage({
  src,
  alt,
  className,
  imageClassName,
  priority,
  overlay = "medium",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: SectionImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      {overlay !== "none" && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br",
            overlays[overlay],
          )}
          aria-hidden
        />
      )}
    </div>
  );
}
