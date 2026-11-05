const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M4.2 2.6c-.3.3-.4.7-.4 1.2v16.4c0 .5.1.9.4 1.2l.1.1 9.2-9.2v-.2L4.3 2.5l-.1.1zm12.4 12.3-3.1-3.1v-.2l3.1-3.1.1.1 3.6 2.1c1 .6 1 1.6 0 2.2l-3.6 2.1-.1-.1zm-.1.1L13.4 12l-9.2 9.2c.3.4.9.4 1.5.1l10.8-6.3M16.5 8.9 5.7 2.7c-.6-.4-1.2-.3-1.5.1l9.2 9.2 3.1-3.1z" />
  </svg>
);

/**
 * App Store + Google Play buttons. Links are placeholders until the store URLs exist.
 * testIds: { apple, google }
 */
export default function StoreButtons({ testIds = {}, className = "", size = "md" }) {
  const pad = size === "lg" ? "px-8 py-4 text-base" : "px-7 py-3.5 text-sm";
  return (
    <div className={`flex flex-wrap gap-3 sm:gap-4 ${className}`}>
      <a
        href="#"
        data-testid={testIds.apple}
        className={`group inline-flex items-center gap-3 rounded-full bg-gilt text-ink font-body font-bold ${pad} transition-all duration-300 hover:bg-citron hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(201,194,58,0.6)]`}
      >
        <AppleIcon />
        <span className="flex flex-col leading-none text-left">
          <span className="text-[10px] font-semibold uppercase tracking-wider opacity-70">Download on the</span>
          <span className="mt-0.5">App Store</span>
        </span>
      </a>
      <a
        href="#"
        data-testid={testIds.google}
        className={`group inline-flex items-center gap-3 rounded-full border-2 border-leaf text-leaf font-body font-bold ${pad} transition-all duration-300 hover:bg-leaf hover:text-ink hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(0,200,80,0.6)]`}
      >
        <PlayIcon />
        <span className="flex flex-col leading-none text-left">
          <span className="text-[10px] font-semibold uppercase tracking-wider opacity-70">Get it on</span>
          <span className="mt-0.5">Google Play</span>
        </span>
      </a>
    </div>
  );
}
