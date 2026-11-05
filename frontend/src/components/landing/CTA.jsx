import { motion } from "framer-motion";
import LineArt from "@/components/brand/LineArt";
import CrownSkyline from "@/components/brand/CrownSkyline";
import SectionKicker from "@/components/brand/SectionKicker";
import StoreButtons from "@/components/brand/StoreButtons";

export default function CTA() {
  return (
    <section
      data-testid="cta-section"
      id="download"
      className="grain relative bg-ink text-stone-100 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-bark/40 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionKicker onDark>Claim your crown</SectionKicker>
          <h2
            data-testid="cta-title"
            className="font-display font-bold tracking-[-0.03em] leading-[0.9] text-6xl sm:text-7xl lg:text-[8.5rem] mt-6"
          >
            Your city.
            <br />
            <span className="italic text-crown-gradient">Your deal.</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-stone-300 leading-relaxed mt-8 max-w-2xl mx-auto">
            Download TruTown and make your next exchange the easiest one you&rsquo;ve ever had.
            Free to list. Free to browse. Honor included.
          </p>
          <StoreButtons
            size="lg"
            className="justify-center mt-10"
            testIds={{ apple: "cta-apple-store-btn", google: "cta-google-play-btn" }}
          />
        </motion.div>

        <div className="relative mt-16 md:mt-20" data-testid="cta-illustration">
          <CrownSkyline
            draw
            strokeWidth={1.5}
            gradientId="cta-crown"
            className="absolute left-1/2 bottom-[18%] -translate-x-1/2 w-[70%] max-w-3xl opacity-50 pointer-events-none"
          />
          <LineArt name="handshake" className="relative w-[130%] -ml-[15%] md:w-full md:ml-0 opacity-90" />
        </div>
      </div>
    </section>
  );
}
