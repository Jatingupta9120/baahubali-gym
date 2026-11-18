import type { ReactNode } from "react";

export default function SectionHeading({ eyebrow, title, accent, children, align = "center" }: { eyebrow: string; title: string; accent?: string; children?: ReactNode; align?: "center" | "left" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section mt-4">{title} {accent && <span className="text-gold">{accent}</span>}</h2>
      <div className={`mt-6 ${align === "center" ? "justify-center" : ""} divider ${align === "center" ? "" : "[&::before]:hidden"}`}><span className="text-xs">◆</span></div>
      {children && <p className="mt-6 leading-relaxed text-mute">{children}</p>}
    </div>
  );
}
