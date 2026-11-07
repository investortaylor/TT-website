import { motion } from "framer-motion";
import LineArt from "@/components/brand/LineArt";

const stats = [
  { value: "5-25%", label: "Refundable buyer deposit required" },
  { value: "Proximity", label: "Verified between parties" },
  { value: "Stripe", label: "Bank-grade escrow" },
  { value: "Mandatory ID", label: "Verified sellers" },
  { value: "Optional ID", label: "Verified buyers" },
  { value: "8.9%", label: "Fee on successful sales" },
];

export default function SocialProof() {
  return (
    <section data-testid="social-proof-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-testid="stats-strip"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              data-testid={`stat-${stat.label.replace(/\s+/g, "-").toLowerCase()}`}
              className="flex flex-col justify-center text-center px-3 py-5 md:py-6 rounded-2xl bg-stone-50 border border-stone-200"
            >
              <p className="font-fun text-[22px] md:text-2xl font-bold text-primary leading-tight">
                {stat.value}
              </p>
              <p className="font-body text-xs md:text-sm text-stone-600 mt-1 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            data-testid="comparison-title"
            className="font-fun text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight"
          >
            Selling shouldn't feel like a gamble.
          </h2>
          <p className="font-body text-base md:text-lg text-stone-500 mt-4 max-w-2xl mx-auto">
            On other platforms, you're rolling the dice. On TruTown, you're
            dealing with people who've already proved they're serious.
          </p>
        </motion.div>

        {/* Two people facing each other — one agreement */}
        <div data-testid="comparison-illustration" className="max-w-xl mx-auto">
          <LineArt
            name="negotiation"
            tone="linear-gradient(100deg, #6B4E24 0%, #6B4E24 40%, #00C850 100%)"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
