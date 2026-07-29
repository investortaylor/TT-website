import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  MapPin,
  Siren,
  Clock,
  Ban,
  CreditCard,
  RefreshCcw,
  Navigation,
  Award,
  Activity,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Ban,
    title: "No More Flakes",
    description:
      "Deposits filter out tire-kickers instantly. If someone ghosts you, they forfeit a slice of their deposit and you get compensated for your time.",
    size: "lg",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-primary",
  },
  {
    icon: CreditCard,
    title: "Stripe Escrow Deposits",
    description:
      "Buyers put down 5-25% into bank-grade Stripe escrow. Money only moves to the seller after both parties tap Accept in person — and only after Stripe confirms the charge cleared.",
    size: "sm",
    color: "bg-gold-50 border-gold-100",
    iconColor: "text-secondary",
  },
  {
    icon: UserCheck,
    title: "Didit ID Verified Sellers",
    description:
      "Every seller passes a Didit government-ID check before their first listing goes live. A green check appears next to verified users in every chat, listing, and meeting screen.",
    size: "sm",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-primary",
  },
  {
    icon: MapPin,
    title: "Safe Meeting Spots",
    description:
      "Community-vetted locations like police-station lots, credit unions, and well-lit coffee shops. Users upvote the best spots so the good ones bubble up.",
    size: "sm",
    color: "bg-gold-50 border-gold-100",
    iconColor: "text-secondary",
  },
  {
    icon: Navigation,
    title: "Live Meeting Map",
    description:
      "Both parties see each other on a shared map with buyer, seller, and safe-spot pins — plus a live distance chip. When you're both within 130 ft, arrival auto-confirms.",
    size: "sm",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-primary",
  },
  {
    icon: Siren,
    title: "Two-Tap Police Presence",
    description:
      "From inside any active meeting, verified users can call the closest police line in two taps. The safe-spot address is shared and TruTown admins follow up with the department on your behalf.",
    size: "sm",
    color: "bg-gold-50 border-gold-100",
    iconColor: "text-secondary",
  },
  {
    icon: RefreshCcw,
    title: "Failed-Card Retry",
    description:
      "If a card declines at the moment of sale, no fake success. Both sides see the exact Stripe reason. The buyer picks a different card without leaving the deal — the seller taps Retry Payment and it's done.",
    size: "lg",
    color: "bg-stone-50 border-stone-200",
    iconColor: "text-stone-700",
  },
  {
    icon: Clock,
    title: "Real Inspection Windows",
    description:
      "30-45 minutes for electronics. Up to 3 hours for vehicles. Up to 21 days for real estate. Inspect the item properly before any money moves.",
    size: "sm",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-primary",
  },
  {
    icon: Award,
    title: "Trusted Seller Tier",
    description:
      "Start earning 15% on forfeited deposits. Earn Trusted Seller status and that jumps to 25%. Your reputation compounds into real money.",
    size: "sm",
    color: "bg-gold-50 border-gold-100",
    iconColor: "text-secondary",
  },
  {
    icon: Activity,
    title: "Live Transaction States",
    description:
      "Every deal moves through visible states — pending → selected → viewing → purchase pending → completed. Both parties see the same status at the same time, and forfeiture warnings ping the party at fault before any money moves.",
    size: "sm",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-primary",
  },
  {
    icon: Wallet,
    title: "Wallet + Cash Out",
    description:
      "Net balance reflects the 8.9% platform fee — no listing fees, ever. Cash Out to your bank on demand (instant when eligible, usually within 48 hours). Year-to-date and monthly earnings hit your inbox automatically.",
    size: "lg",
    color: "bg-gold-50 border-gold-100",
    iconColor: "text-secondary",
  },
];

function FeatureArt({ feature, index }) {
  // Small inline illustrations for each feature
  if (index === 0) {
    // No More Flakes - Ghost crossed out
    return (
      <svg viewBox="0 0 80 80" fill="none" className="w-12 h-12 mt-4 opacity-20">
        <circle cx="40" cy="32" r="18" fill="#15803d" />
        <path d="M30 50c0 0 5 12 10 15s10-3 10-15" fill="#15803d" opacity="0.6" />
        <line x1="15" y1="15" x2="65" y2="65" stroke="#b91c1c" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 5) {
    // Inspection Time - Clock
    return (
      <svg viewBox="0 0 80 80" fill="none" className="w-12 h-12 mt-4 opacity-20">
        <circle cx="40" cy="40" r="28" stroke="#1c1917" strokeWidth="2" />
        <circle cx="40" cy="40" r="2" fill="#1c1917" />
        <line x1="40" y1="40" x2="40" y2="22" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="40" y1="40" x2="52" y2="45" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return null;
}

export default function Features() {
  return (
    <section
      data-testid="features-section"
      id="features"
      className="py-20 md:py-32 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="font-fun text-base md:text-lg font-semibold text-secondary tracking-wider uppercase">
            Features
          </span>
          <h2
            data-testid="features-title"
            className="font-fun text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight mt-3 max-w-2xl"
          >
            The reason your buyer actually shows.
          </h2>
          <p className="font-body text-base md:text-lg text-stone-500 mt-4 max-w-2xl">
            Every feature here exists to deliver the same simple thing: a buyer
            who shows up, on time, ready to close.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              data-testid={`feature-card-${i}`}
              className={`group relative rounded-2xl p-7 border transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] ${feature.color} ${
                feature.size === "lg" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 ${feature.iconColor} mb-4`}>
                    <feature.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-fun text-xl font-semibold text-stone-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <FeatureArt feature={feature} index={i} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
