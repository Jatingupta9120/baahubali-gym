import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

/** Uses the client's logo file when `site.logo.src` is set; otherwise a plain gold wordmark (no invented emblem). */
export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <Link href="/" aria-label={`${site.name} - home`} className="inline-flex items-center">
      {site.logo.src ? (
        <Image src={site.logo.src} alt={`${site.name} logo`} width={site.logo.width} height={site.logo.height} priority className={size === "lg" ? "h-20 w-auto" : "h-12 w-auto"} />
      ) : (
        <span className="flex items-baseline gap-2 leading-none">
          <span className={`font-deva font-extrabold text-gold ${size === "lg" ? "text-5xl" : "text-[1.9rem]"}`}>{site.hindiName}</span>
          <span className={`font-display tracking-[0.18em] text-white ${size === "lg" ? "text-3xl" : "text-xl"}`}>GYM</span>
        </span>
      )}
    </Link>
  );
}
