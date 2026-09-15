import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO_SRC } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string | null;
  onClick?: () => void;
};

/** Official logo aspect ratio from brand asset (wide horizontal lockup). */
const LOGO_WIDTH = 320;
const LOGO_HEIGHT = 140;

export function BrandLogo({ className, priority, href = "/", onClick }: BrandLogoProps) {
  const img = (
    <Image
      src={BRAND_LOGO_SRC}
      alt="The Ocean Radio — Relaxing Favorites"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={cn(
        "h-auto max-h-11 w-auto max-w-full object-contain object-left",
        className,
      )}
    />
  );

  if (href != null && href !== "") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
      >
        {img}
      </Link>
    );
  }

  return img;
}
