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
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
          <p className="font-mono text-xs font-bold text-red-400 tracking-wider uppercase mb-3">
            The Old Way
          </p>
          <svg viewBox="0 0 160 140" fill="none" className="w-full">
            {/* Sad person */}
            <circle cx="80" cy="40" r="20" fill="#fecaca" />
            <circle cx="72" cy="36" r="2" fill="#991b1b" />
            <circle cx="88" cy="36" r="2" fill="#991b1b" />
            <path d="M70 48c4-3 16-3 20 0" stroke="#991b1b" strokeWidth="2" strokeLinecap="round" transform="scale(1,-1) translate(0,-96)" />
            {/* Phone with messages */}
            <rect x="55" y="70" width="50" height="50" rx="8" fill="#fee2e2" />
            <rect x="62" y="78" width="36" height="5" rx="2" fill="#fecaca" />
            <rect x="62" y="87" width="28" height="5" rx="2" fill="#fecaca" />
            <rect x="62" y="96" width="32" height="5" rx="2" fill="#fecaca" />
            <rect x="62" y="105" width="20" height="5" rx="2" fill="#fecaca" />
            {/* Question marks */}
            <text x="120" y="50" fill="#dc2626" fontSize="20" fontWeight="bold" opacity="0.4">?</text>
            <text x="30" y="90" fill="#dc2626" fontSize="16" fontWeight="bold" opacity="0.3">?</text>
            <text x="130" y="100" fill="#dc2626" fontSize="14" fontWeight="bold" opacity="0.2">?</text>
          </svg>
          <p className="font-body text-xs text-red-400 text-center mt-2">
            "Is this still available?"
          </p>
        </div>
      </div>

      {/* After - TruTown way */}
      <div className="relative">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
          <p className="font-mono text-xs font-bold text-primary tracking-wider uppercase mb-3">
            The TruTown Way
          </p>
          <svg viewBox="0 0 160 140" fill="none" className="w-full">
            {/* Happy person */}
            <circle cx="80" cy="40" r="20" fill="#d1fae5" />
            <circle cx="72" cy="36" r="2" fill="#15803d" />
            <circle cx="88" cy="36" r="2" fill="#15803d" />
            <path d="M70 46c4 4 16 4 20 0" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
            {/* Phone with checkmarks */}
            <rect x="55" y="70" width="50" height="50" rx="8" fill="#ecfdf5" />
            <circle cx="70" cy="82" r="4" fill="#15803d" />
            <path d="M68 82l1.5 1.5 3-3" stroke="white" strokeWidth="1" strokeLinecap="round" />
            <rect x="80" y="80" width="18" height="4" rx="2" fill="#a7f3d0" />
            <circle cx="70" cy="95" r="4" fill="#15803d" />
            <path d="M68 95l1.5 1.5 3-3" stroke="white" strokeWidth="1" strokeLinecap="round" />
            <rect x="80" y="93" width="18" height="4" rx="2" fill="#a7f3d0" />
            <circle cx="70" cy="108" r="4" fill="#facc15" />
            <text x="67" y="112" fill="#713f12" fontSize="8" fontWeight="bold">$</text>
            <rect x="80" y="106" width="18" height="4" rx="2" fill="#fef9c3" />
            {/* Sparkles */}
            <circle cx="125" cy="50" r="3" fill="#facc15" />
            <circle cx="30" cy="80" r="2" fill="#15803d" />
            <circle cx="135" cy="100" r="2" fill="#facc15" />
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
            className="font-heading text-4xl md:text-5xl text-stone-900 tracking-tight"
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
