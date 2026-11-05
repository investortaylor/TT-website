import { motion } from "framer-motion";
import LineArt from "@/components/brand/LineArt";
import SectionKicker from "@/components/brand/SectionKicker";

const laws = [
  {
    n: "I",
    title: "Commitment comes first.",
    body: "A buyer pledges a refundable 5–25% deposit before anyone gets in a car. Interest becomes intent.",
  },
  {
    n: "II",
    title: "Identity is earned.",
    body: "Every seller passes a Didit government-ID check before their first listing goes live.",
  },
  {
    n: "III",
    title: "Both hands must agree.",
    body: "Money leaves escrow only when buyer and seller, standing face to face, both tap Accept.",
  },
];

const stats = [
  { value: "5–25%", label: "Refundable buyer deposit" },
  { value: "130 ft", label: "Auto-confirm arrival radius" },
  { value: "$0", label: "Listing fees, ever" },
  { value: "8.9%", label: "Only on successful sales" },
];

/** The Manifesto: two people, one agreement — TruTown's code of honor. */
export default function SocialProof() {
  return (
    <section
      data-testid="social-proof-section"
      className="relative bg-parchment pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <LineArt name="negotiation" tone="earth" className="w-full max-w-lg mx-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <SectionKicker>The code of the crown</SectionKicker>
            <h2
              data-testid="comparison-title"
              className="font-display font-bold text-ink tracking-[-0.02em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mt-5"
            >
              Two people.
              <br />
              One agreement.
              <br />
              <span className="italic text-bark">No games.</span>
            </h2>
            <p className="font-body text-lg text-stone-600 leading-relaxed mt-7 max-w-xl">
              Other marketplaces are built for scrolling. TruTown is built for the one moment
              that matters: when two neighbors meet, agree, and an item changes hands. We gave
              that moment a code of honor.
            </p>
          </motion.div>
        </div>

        {/* Three laws */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-3 gap-px bg-stone-300/70 border border-stone-300/70 rounded-3xl overflow-hidden">
          {laws.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`law-${i}`}
              className="group bg-parchment p-8 md:p-10 transition-colors duration-500 hover:bg-ink"
            >
              <span className="font-display text-6xl font-bold text-outline-gilt">{l.n}</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mt-6 transition-colors group-hover:text-white">
                {l.title}
              </h3>
              <p className="font-body text-base text-stone-600 leading-relaxed mt-3 transition-colors group-hover:text-stone-300">
                {l.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Numbers */}
        <div
          data-testid="stats-strip"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              data-testid={`stat-${s.label.replace(/\s+/g, "-").toLowerCase()}`}
              className="border-l-2 border-leaf pl-5"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-ink">{s.value}</p>
              <p className="font-body text-sm text-stone-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
