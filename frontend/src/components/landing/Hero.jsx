import { motion } from "framer-motion";
import LineArt from "@/components/brand/LineArt";
import CrownSkyline, { CrownGlyph } from "@/components/brand/CrownSkyline";
import StoreButtons from "@/components/brand/StoreButtons";

const seals = [
  { k: "5–25%", v: "deposit pledged before you meet" },
  { k: "ID", v: "every seller government-verified" },
  { k: "2 taps", v: "both say yes — then money moves" },
];

const rise = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="grain relative min-h-[100svh] overflow-hidden bg-ink text-stone-100 flex flex-col"
    >
      {/* Atmosphere: warm brown glow + green/gold light, like a city at dusk */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[1100px] rounded-full bg-bark/40 blur-[140px]" />
        <div className="absolute bottom-0 -left-40 h-[420px] w-[520px] rounded-full bg-leaf/15 blur-[120px]" />
        <div className="absolute bottom-10 -right-40 h-[420px] w-[520px] rounded-full bg-gilt/15 blur-[120px]" />
      </div>

      {/* The crown of the city, rising faintly behind everything */}
      <CrownSkyline
        draw
        strokeWidth={1.2}
        gradientId="hero-crown"
        className="absolute left-1/2 top-[12%] -translate-x-1/2 w-[160%] md:w-[96%] max-w-[1500px] opacity-[0.22] pointer-events-none"
      />

      {/* The handshake — two people agreeing, drawn across the city as the backdrop */}
      <div
        className="absolute inset-x-0 bottom-[26%] sm:bottom-[6%] md:bottom-[2%] z-0 pointer-events-none"
        data-testid="hero-illustration"
      >
        <LineArt
          name="handshake"
          animateOnMount
          delay={0.3}
          duration={3.2}
          className="w-[190%] -ml-[45%] sm:w-[150%] sm:-ml-[25%] lg:w-[112%] lg:-ml-[6%] opacity-[0.55]"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-ink/80 via-ink/25 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-48 z-0 pointer-events-none bg-gradient-to-b from-ink/70 to-transparent" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16">
        <motion.div {...rise(0)} className="flex items-center gap-3 mb-8">
          <CrownGlyph className="w-6 h-4 text-gilt" />
          <span className="font-body text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gilt">
            Royalty at street level · iOS &amp; Android
          </span>
        </motion.div>

        <motion.h1
          {...rise(0.1)}
          data-testid="hero-tagline"
          className="font-display font-bold tracking-[-0.03em] leading-[0.88] text-[15vw] sm:text-[12vw] lg:text-[9.2rem] xl:text-[10.5rem]"
        >
          The city
          <br />
          <span className="italic font-semibold text-crown-gradient pr-2">shakes on it.</span>
        </motion.h1>

        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-end">
          <motion.p
            {...rise(0.25)}
            data-testid="hero-description"
            className="lg:col-span-6 font-body text-lg md:text-xl text-stone-300 leading-relaxed max-w-xl"
          >
            TruTown is the local marketplace where every item changes hands with honor.
            The buyer&rsquo;s deposit is down. The seller is verified. And not a cent moves
            until you meet, look each other in the eye, and{" "}
            <span className="text-white font-semibold">both say yes.</span>
          </motion.p>
          <motion.div {...rise(0.35)} className="lg:col-span-6 lg:justify-self-end">
            <StoreButtons
              size="lg"
              testIds={{ apple: "apple-store-btn", google: "google-play-btn" }}
              className="lg:justify-end"
            />
          </motion.div>
        </div>
      </div>

      {/* Seals */}
      <div className="relative z-10 mt-auto border-t border-gilt/15 bg-ink/60 backdrop-blur-md">
        <div
          data-testid="trust-badges"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gilt/15"
        >
          {seals.map((s) => (
            <div key={s.k} className="flex items-baseline gap-4 py-5 sm:px-6 first:sm:pl-0">
              <span className="font-display text-3xl font-bold text-gilt">{s.k}</span>
              <span className="font-body text-sm text-stone-400">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
