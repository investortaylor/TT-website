import { CrownGlyph } from "./CrownSkyline";

export default function SectionKicker({ children, onDark = false, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-body text-xs md:text-[13px] font-bold tracking-[0.24em] uppercase ${
        onDark ? "text-gilt" : "text-ochre"
      } ${className}`}
    >
      <CrownGlyph className="w-5 h-3.5" />
      {children}
    </span>
  );
}
