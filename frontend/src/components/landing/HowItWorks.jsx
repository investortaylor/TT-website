import { motion } from "framer-motion";
import { ListPlus, DollarSign, Handshake, ThumbsUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ListPlus,
    title: "List Your Item",
    description:
      "Snap a photo, set your price, and describe your item. Your listing goes live to local buyers in minutes.",
    color: "bg-emerald-50 text-primary",
    accent: "#15803d",
  },
  {
    num: "02",
    icon: DollarSign,
    title: "Buyer Places Deposit",
    description:
      "Interested buyers put down 5-25% as a refundable deposit, placed in an escrow account. This filters out tire-kickers and proves they're serious.",
    color: "bg-gold-50 text-secondary",
    accent: "#ca8a04",
  },
  {
    num: "03",
    icon: Handshake,
    title: "Meet & Inspect",
    description:
      "Meetup (preferably at a community-vetted safe spot). Buyers get inspection time — up to 45 minutes for electronics, 3 hours for vehicles, up to 10 days for real estate.",
    color: "bg-emerald-50 text-primary",
    accent: "#15803d",
  },
  {
    num: "04",
    icon: ThumbsUp,
    title: "Complete the Deal",
    description:
      "Both parties confirm the exchange. With 2 button presses, the deposit + remaining balance is moved to seller's account. Transaction records are emailed.",
    color: "bg-gold-50 text-secondary",
    accent: "#ca8a04",
  },
];

function StepIllustration({ step, index }) {
  const illustrations = [
    // Step 1: Phone with camera
    <svg key="s1" viewBox="0 0 120 120" fill="none" className="w-16 h-16">
      <rect x="30" y="15" width="60" height="90" rx="10" fill="#1c1917" />
      <rect x="35" y="22" width="50" height="76" rx="6" fill="#fafaf9" />
      <circle cx="60" cy="55" r="14" stroke="#15803d" strokeWidth="2" fill="none" />
      <circle cx="60" cy="55" r="5" fill="#15803d" />
      <rect x="44" y="78" width="32" height="8" rx="4" fill="#d1fae5" />
    </svg>,
    // Step 2: Coins with deposit
    <svg key="s2" viewBox="0 0 120 120" fill="none" className="w-16 h-16">
      <ellipse cx="60" cy="70" rx="35" ry="10" fill="#fef9c3" />
      <ellipse cx="60" cy="60" rx="35" ry="10" fill="#facc15" />
      <ellipse cx="60" cy="60" rx="28" ry="7" fill="#eab308" />
      <ellipse cx="60" cy="50" rx="35" ry="10" fill="#facc15" />
      <ellipse cx="60" cy="50" rx="28" ry="7" fill="#eab308" />
      <ellipse cx="60" cy="40" rx="35" ry="10" fill="#facc15" />
      <ellipse cx="60" cy="40" rx="28" ry="7" fill="#ca8a04" />
      <text x="52" y="45" fill="#713f12" fontSize="14" fontWeight="bold">$</text>
    </svg>,
    // Step 3: Two people meeting
    <svg key="s3" viewBox="0 0 120 120" fill="none" className="w-16 h-16">
      <circle cx="35" cy="40" r="12" fill="#d6a756" />
      <path d="M20 72c0-8.3 6.7-15 15-15s15 6.7 15 72" fill="#ca8a04" />
      <circle cx="85" cy="40" r="12" fill="#6ea87a" />
      <path d="M70 72c0-8.3 6.7-15 15-15s15 6.7 15 72" fill="#15803d" />
      {/* Handshake */}
      <path d="M45 68h30" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="68" r="4" fill="#facc15" />
      <rect x="25" y="90" width="70" height="4" rx="2" fill="#e7e5e4" />
    </svg>,
    // Step 4: Checkmark success
    <svg key="s4" viewBox="0 0 120 120" fill="none" className="w-16 h-16">
      <circle cx="60" cy="55" r="35" fill="#ecfdf5" />
      <circle cx="60" cy="55" r="25" fill="#d1fae5" />
      <path d="M47 55l8 8 18-18" stroke="#15803d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 90l10-5m50 5l-10-5" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
      <circle cx="25" cy="40" r="3" fill="#facc15" />
      <circle cx="95" cy="40" r="3" fill="#facc15" />
      <circle cx="60" cy="95" r="3" fill="#15803d" />
    </svg>,
  ];
  return illustrations[index];
}

export default function HowItWorks() {
  return (
    <section
      data-testid="how-it-works-section"
      id="how-it-works"
      className="py-20 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-fun text-base md:text-lg font-semibold text-secondary tracking-wider uppercase">
            How It Works
          </span>
          <h2
            data-testid="how-it-works-title"
            className="font-fun text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mt-3"
          >
            Four steps to a deal you can trust
          </h2>
          <p className="font-body text-base md:text-lg text-stone-500 mt-4 max-w-2xl mx-auto">
            No more ghosting. No more wasted trips. Just real accountability
            from start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line connector (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`step-${step.num}`}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  i % 2 === 0 ? "" : "lg:direction-rtl"
                } ${i > 0 ? "lg:mt-20" : ""}`}
              >
                {/* Step number on timeline (desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10"
                  style={{ backgroundColor: step.accent }}
                >
                  <span className="font-mono text-sm font-bold text-white">{step.num}</span>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pl-20 lg:col-start-2"}`}>
                  <div className={`inline-flex items-center gap-3 ${step.color} rounded-full px-4 py-2 mb-4`}>
                    <step.icon size={18} strokeWidth={1.5} />
                    <span className="font-mono text-xs font-bold tracking-wider uppercase lg:hidden">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="font-fun text-2xl md:text-3xl font-semibold text-stone-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-stone-600 leading-relaxed max-w-md lg:max-w-none">
                    {step.description}
                  </p>
                </div>

                {/* Illustration */}
                <div className={`mt-6 lg:mt-0 flex ${i % 2 === 0 ? "lg:justify-start lg:col-start-2" : "lg:justify-end lg:col-start-1 lg:row-start-1"}`}>
                  <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] inline-flex items-center justify-center">
                    <StepIllustration step={step} index={i} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
