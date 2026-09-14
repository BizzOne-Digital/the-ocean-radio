import { cn } from "@/lib/utils";

type WaveTransitionProps = {
  className?: string;
  flip?: boolean;
  variant?: "deep" | "mid" | "foam";
};

const fills = {
  deep: "#042C38",
  mid: "#063B4A",
  foam: "#051f28",
};

export function WaveTransition({ className, flip, variant = "mid" }: WaveTransitionProps) {
  const fill = fills[variant];
  return (
    <div
      className={cn(
        "pointer-events-none relative -mt-px w-full overflow-hidden leading-[0]",
        flip && "rotate-180",
        className,
      )}
      aria-hidden
    >
      <svg
        className="relative block h-10 w-[200%] min-w-[800px] max-w-none animate-[wave-line_18s_linear_infinite] sm:h-16 sm:min-w-[1200px] md:h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
          fill={fill}
          opacity="0.9"
        />
        <path
          d="M0,80 C200,20 400,100 600,70 C800,40 1000,90 1200,70 L1200,120 L0,120 Z"
          fill={fill}
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
