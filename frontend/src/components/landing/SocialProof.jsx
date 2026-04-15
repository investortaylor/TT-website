import { motion } from "framer-motion";

const stats = [
  { value: "Zero", label: "No-shows tolerated" },
  { value: "100%", label: "Deposits refundable" },
  { value: "ID", label: "Verified sellers" },
  { value: "24/7", label: "Dispute resolution" },
];

function ComparisonIllustration() {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
      {/* Before - Old way */}
      <div className="relative">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-fun text-sm md:text-base font-semibold text-blue-500 tracking-wider uppercase mb-3">
            The Old Way
          </p>
          <svg viewBox="0 0 160 140" fill="none" className="w-full">
            {/* Sad person with full body */}
            {/* Head */}
            <circle cx="80" cy="24" r="16" fill="#bfdbfe" />
            <circle cx="74" cy="21" r="2" fill="#1877F2" />
            <circle cx="86" cy="21" r="2" fill="#1877F2" />
            <path d="M72 30c4-3 12-3 16 0" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" transform="scale(1,-1) translate(0,-60)" />
            {/* Neck */}
            <rect x="76" y="40" width="8" height="5" fill="#bfdbfe" rx="2" />
            {/* Torso */}
            <path d="M62 50c0-3 8-6 18-6s18 3 18 6v22c0 3-8 5-18 5s-18-2-18-5V50z" fill="#93c5fd" />
            {/* Arms */}
            <path d="M62 54c-4 2-10 8-14 16" stroke="#bfdbfe" strokeWidth="5" strokeLinecap="round" />
            <path d="M98 54c4 2 10 8 14 16" stroke="#bfdbfe" strokeWidth="5" strokeLinecap="round" />
            {/* Hands */}
            <circle cx="47" cy="71" r="4" fill="#bfdbfe" />
            <circle cx="113" cy="71" r="4" fill="#bfdbfe" />
            {/* Legs */}
            <rect x="68" y="75" width="8" height="24" rx="4" fill="#60a5fa" />
            <rect x="84" y="75" width="8" height="24" rx="4" fill="#60a5fa" />
            {/* Shoes */}
            <ellipse cx="72" cy="100" rx="7" ry="4" fill="#3b82f6" />
            <ellipse cx="88" cy="100" rx="7" ry="4" fill="#3b82f6" />
            {/* Question marks floating around */}
            <text x="22" y="40" fill="#1877F2" fontSize="18" fontWeight="bold" opacity="0.4">?</text>
            <text x="125" y="35" fill="#1877F2" fontSize="14" fontWeight="bold" opacity="0.3">?</text>
            <text x="130" y="90" fill="#1877F2" fontSize="12" fontWeight="bold" opacity="0.2">?</text>
            {/* Slumped shoulders indicator - sweat drop */}
            <path d="M40 48c-1 3-2 6 0 7s3-1 3-4-2-5-3-3z" fill="#93c5fd" opacity="0.6" />
          </svg>
          <p className="font-body text-xs text-blue-500 text-center mt-2">
            "Is this still available?"
          </p>
        </div>
      </div>

      {/* After - TruTown way */}
      <div className="relative">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
          <p className="font-fun text-sm md:text-base font-semibold text-primary tracking-wider uppercase mb-3">
            The TruTown Way
          </p>
          <svg viewBox="0 0 160 140" fill="none" className="w-full">
            {/* Happy person with full body */}
            {/* Head */}
            <circle cx="80" cy="24" r="16" fill="#d1fae5" />
            <circle cx="74" cy="21" r="2" fill="#15803d" />
            <circle cx="86" cy="21" r="2" fill="#15803d" />
            <path d="M72 30c4 3 12 3 16 0" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
            {/* Neck */}
            <rect x="76" y="40" width="8" height="5" fill="#d1fae5" rx="2" />
            {/* Torso */}
            <path d="M62 50c0-3 8-6 18-6s18 3 18 6v22c0 3-8 5-18 5s-18-2-18-5V50z" fill="#6ee7b7" />
            {/* Arms raised in celebration */}
            <path d="M62 54c-6-2-12-10-14-20" stroke="#d1fae5" strokeWidth="5" strokeLinecap="round" />
            <path d="M98 54c6-2 12-10 14-20" stroke="#d1fae5" strokeWidth="5" strokeLinecap="round" />
            {/* Hands */}
            <circle cx="47" cy="33" r="4" fill="#d1fae5" />
            <circle cx="113" cy="33" r="4" fill="#d1fae5" />
            {/* Legs */}
            <rect x="68" y="75" width="8" height="24" rx="4" fill="#34d399" />
            <rect x="84" y="75" width="8" height="24" rx="4" fill="#34d399" />
            {/* Shoes */}
            <ellipse cx="72" cy="100" rx="7" ry="4" fill="#15803d" />
            <ellipse cx="88" cy="100" rx="7" ry="4" fill="#15803d" />
            {/* Sparkles / celebration */}
            <circle cx="38" cy="22" r="3" fill="#facc15" />
            <circle cx="122" cy="22" r="3" fill="#facc15" />
            <path d="M42 16l2-6" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
            <path d="M36 18l-4-4" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
            <path d="M118 16l-2-6" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
            <path d="M124 18l4-4" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
            {/* Checkmark badge on torso */}
            <circle cx="80" cy="58" r="7" fill="#15803d" />
            <path d="M76 58l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-body text-xs text-primary text-center mt-2">
            Deposit placed. Meeting confirmed.
          </p>
        </div>
      </div>
    </div>
  );
}

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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-stone-50 border border-stone-100"
            >
              <p className="font-heading text-3xl md:text-4xl text-primary">
                {stat.value}
              </p>
              <p className="font-body text-sm text-stone-500 mt-1">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <ComparisonIllustration />
        </motion.div>
      </div>
    </section>
  );
}
