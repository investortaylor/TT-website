/** Emblem + serif wordmark lockup, matching the logo's typography & colours. */
export default function BrandLogo({ size = "md", onDark = true, showWordmark = true }) {
  const emblem = { sm: "h-10 w-10", md: "h-12 w-12 md:h-14 md:w-14", lg: "h-16 w-16" }[size];
  const word = { sm: "text-xl", md: "text-2xl md:text-[28px]", lg: "text-3xl" }[size];
  return (
    <span className="flex items-center gap-3">
      <img
        src="/logo-emblem.png"
        alt="TruTown Marketplace emblem"
        className={`${emblem} flex-shrink-0 drop-shadow-[0_4px_14px_rgba(0,200,80,0.25)]`}
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={`font-display font-semibold tracking-tight text-[#00C850] ${word}`}>
            TruTown
          </span>
          <span
            className={`font-display font-medium text-[11px] md:text-[13px] tracking-[0.22em] uppercase mt-1 ${
              onDark ? "text-gilt" : "text-ochre"
            }`}
          >
            Marketplace
          </span>
        </span>
      )}
    </span>
  );
}
