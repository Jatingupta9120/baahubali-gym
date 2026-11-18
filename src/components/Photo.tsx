import Image from "next/image";
import { images, type ImageKey } from "@/lib/images";

type Props = { name: ImageKey; className?: string; ratio?: string; priority?: boolean; sizes?: string; alt?: string; position?: string; tone?: boolean };

/** Fixed-ratio image box (no layout shift). `tone` adds a subtle warm-black grade so all photos sit in the brand palette. */
export default function Photo({ name, className = "", ratio = "4 / 5", priority, sizes = "(min-width:1024px) 33vw, 100vw", alt, position = "50% 30%", tone = true }: Props) {
  const img = images[name];
  return (
    <div className={`relative overflow-hidden bg-panel ${className}`} style={{ aspectRatio: ratio }}>
      <Image src={img.src} alt={alt ?? img.alt} fill sizes={sizes} priority={priority} quality={78} className="object-cover" style={{ objectPosition: position }} />
      {tone && <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-gold/10 mix-blend-multiply" aria-hidden />}
    </div>
  );
}
