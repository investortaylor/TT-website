import { motion } from "framer-motion";
import {
  Ban,
  CreditCard,
  UserCheck,
  MapPin,
  Navigation,
  Siren,
  RefreshCcw,
  Clock,
  Award,
  Activity,
  Wallet,
} from "lucide-react";
import SectionKicker from "@/components/brand/SectionKicker";

const features = [
  {
    icon: Ban,
    title: "No more flakes",
    description:
      "Deposits filter out tire-kickers instantly. Ghost a meet-up and you forfeit a slice of your deposit to the person you stood up.",
    feature: true,
  },
  {
    icon: CreditCard,
    title: "Stripe escrow deposits",
    description:
      "Buyers pledge 5–25% into bank-grade Stripe escrow. Money moves only after both parties tap Accept in person — and only once Stripe confirms the charge cleared.",
  },
  {
    icon: UserCheck,
    title: "Didit ID-verified sellers",
    description:
      "Every seller passes a government-ID check before their first listing. A green check follows them into every chat, listing and meeting.",
  },
  {
    icon: MapPin,
    title: "Safe meeting spots",
    description:
      "Police-station lots, credit unions, well-lit coffee shops. The community upvotes the best spots so the good ones rise.",
  },
  {
    icon: Navigation,
    title: "Live meeting map",
    description:
      "See each other on a shared map with buyer, seller and safe-spot pins. Within 130 ft, arrival confirms itself.",
  },
  {
    icon: Siren,
    title: "Two-tap police presence",
    description:
      "Inside any active meeting, verified users can call the closest police line in two taps. The address is shared and TruTown admins follow up for you.",
    feature: true,
  },
  {
    icon: RefreshCcw,
    title: "Failed-card retry",
    description:
      "A declined card never fakes success. Both sides see the exact reason, the buyer picks another card without leaving the deal, and the seller taps Retry.",
  },
  {
    icon: Clock,
    title: "Real inspection windows",
    description:
      "30–45 minutes for electronics. Up to 3 hours for vehicles. Up to 21 days for real estate. Inspect before any money moves.",
  },
  {
    icon: Award,
    title: "Trusted Seller tier",
    description:
      "Start by keeping 15% of forfeited deposits. Earn Trusted Seller status and it rises to 25%.",
  },
  {
    icon: Activity,
    title: "Live transaction states",
    description:
      "Pending → selected → viewing → purchase pending → completed. Both parties see the same status at the same moment.",
  },
  {
    icon: Wallet,
    title: "Wallet + Cash Out",
    description:
      "Net balance already reflects the 8.9% platform fee — no listing fees, ever. Cash out on demand, instantly when eligible, usually within 48 hours.",
    feature: true,
  },
];

export default function Features() {
  return (
    <section
      data-testid="features-section"
      id="features"
      className="relative bg-parchment py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20"
        >
          <div className="lg:col-span-7">
            <SectionKicker>Safeguards</SectionKicker>
            <h2
              data-testid="features-title"
              className="font-display font-bold text-ink tracking-[-0.02em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mt-5"
            >
              Protection fit
              <br />
              <span className="italic text-ochre">for royalty.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 font-body text-lg text-stone-600 leading-relaxed">
            Eleven quiet guardians standing between you and a wasted afternoon. Each one exists
            for a single reason: a buyer who shows up, on time, ready to shake on it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              data-testid={`feature-card-${i}`}
              className={`group relative overflow-hidden rounded-3xl p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 ${
                f.feature
                  ? "bg-ink text-stone-100 hover:shadow-[0_24px_60px_-20px_rgba(0,200,80,0.45)]"
                  : "bg-white border border-stone-200 hover:border-leaf/50 hover:shadow-[0_24px_60px_-24px_rgba(107,78,36,0.35)]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    f.feature ? "bg-crown-gradient text-ink" : "bg-emerald-50 text-leaf"
                  }`}
                >
                  <f.icon size={22} strokeWidth={1.8} />
                </div>
                <span
                  className={`font-display text-sm font-bold ${f.feature ? "text-gilt" : "text-stone-400"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className={`font-display text-2xl font-bold mt-6 ${f.feature ? "text-white" : "text-ink"}`}
              >
                {f.title}
              </h3>
              <p
                className={`font-body text-[15px] leading-relaxed mt-2.5 ${
                  f.feature ? "text-stone-300" : "text-stone-600"
                }`}
              >
                {f.description}
              </p>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-crown-gradient transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
