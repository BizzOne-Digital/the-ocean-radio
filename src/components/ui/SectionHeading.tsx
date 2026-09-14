import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-aqua/90 sm:text-xs sm:tracking-[0.3em]">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-2xl font-bold tracking-tight text-foam sm:text-3xl md:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-foam/75 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
