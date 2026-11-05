import { motion } from "framer-motion";
import { Ghost, Clock, Award, ChevronRight } from "lucide-react";
import SectionKicker from "@/components/brand/SectionKicker";
import CrownSkyline from "@/components/brand/CrownSkyline";

function WalletCard() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-leaf/25 via-transparent to-gilt/25 blur-3xl" />

      <div className="relative rounded-[1.75rem] bg-parchment text-ink overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-gilt/30">
        <div className="p-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-50 border border-gold-200 px-3 py-1.5">
            <span className="font-body text-[11px] text-stone-500">Last cash-out:</span>
            <span className="font-display text-base font-bold text-ochre">$32.71</span>
            <span className="text-stone-400 text-xs">on Jul 12</span>
            <ChevronRight size={12} className="text-stone-400" />
            <span className="font-body text-[11px] text-stone-500">arriving…</span>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-stone-200 border-t border-stone-200">
          <div className="p-4 md:p-5 text-center">
            <p className="font-body text-[11px] text-stone-500">Available Balance</p>
            <p className="font-display text-2xl md:text-3xl font-bold text-leaf leading-none mt-2">$0.00</p>
            <p className="font-body text-[10px] text-stone-400 mt-1">from sales</p>
          </div>
          <div className="p-4 md:p-5 text-center">
            <p className="font-body text-[11px] text-stone-500">Balance Due</p>
            <p className="font-display text-2xl md:text-3xl font-bold text-ink leading-none mt-2">$0.00</p>
            <p className="font-body text-[10px] text-stone-400 mt-1">Fees owed</p>
          </div>
          <div className="relative p-4 md:p-5 text-center bg-emerald-50">
            <motion.div
              className="pointer-events-none absolute inset-0 border-2 border-leaf"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="font-body text-[11px] text-stone-700 font-semibold leading-tight">
              Compensation
              <br />
              Awaiting
            </p>
            <p
              data-testid="wallet-compensation-amount"
              className="font-display text-3xl md:text-4xl font-bold text-leaf leading-none mt-2"
            >
              $11.34
            </p>
            <p className="font-body text-[10px] text-stone-500 mt-1">From no-shows</p>
          </div>
        </div>

        <div className="mx-5 my-5 rounded-2xl bg-stone-100 border border-stone-200 px-5 py-4 flex items-center justify-between">
          <span className="font-body text-sm font-semibold">Net Balance</span>
          <span className="font-display text-2xl md:text-3xl font-bold text-leaf">$0.00</span>
        </div>

        <div className="mx-5 mb-5 flex items-center justify-between">
          <span className="font-body text-sm font-semibold">Cash Out ASAP</span>
          <div className="relative w-14 h-8 rounded-full bg-leaf flex items-center">
            <div className="absolute right-1 w-6 h-6 rounded-full bg-white shadow" />
          </div>
        </div>

        <div className="px-5 pb-5">
          <p className="font-body text-[11px] leading-relaxed text-stone-500">
            Cash Out requires a minimum balance of $10.00.
            <br />
            ACH Payouts typically arrive in 2 business days.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute -top-5 -right-2 md:-right-8 rounded-2xl bg-gilt text-ink px-4 py-3 shadow-2xl flex items-center gap-2.5"
      >
        <Ghost size={20} strokeWidth={2} />
        <div>
          <p className="font-body text-[9px] font-extrabold tracking-[0.2em] uppercase">No-show forfeit</p>
          <p className="font-display text-base font-bold leading-none mt-0.5">+$11.34 to you</p>
        </div>
      </motion.div>
    </div>
  );
}

const points = [
  {
    icon: Ghost,
    title: "They flake. You’re paid.",
    body:
      "When a buyer confirms a meet-up and doesn’t show, they forfeit a slice of their deposit — it lands in your Compensation Awaiting bucket automatically.",
  },
  {
    icon: Clock,
    title: "Late cancels cost them, not you.",
    body:
      "Bail after accepting the meeting invite and a prorated fee applies, based on how late they cancel. Reschedules cost 15% of the deposit to protect your time.",
  },
  {
    icon: Award,
    title: "Wear the Trusted Seller crown.",
    body:
      "New sellers keep 15% of a forfeited deposit. Earn Trusted Seller status and it jumps to 25%. Your reputation compounds — literally.",
  },
];

export default function Compensation() {
  return (
    <section
      data-testid="compensation-section"
      id="compensation"
      className="grain relative bg-bark-night text-stone-100 py-24 md:py-36 overflow-hidden"
    >
      <CrownSkyline
        variant="solid"
        fill="#3A2A14"
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[180%] md:w-[110%] opacity-45 pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionKicker onDark>Your time is royal</SectionKicker>
            <h2
              data-testid="compensation-title"
              className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mt-5"
            >
              Ghosted?
              <br />
              <span className="italic text-crown-gradient">You still get paid.</span>
            </h2>
            <p className="font-body text-lg text-stone-300 leading-relaxed mt-7 max-w-xl">
              Every other marketplace treats your Saturday like it&rsquo;s free. TruTown
              doesn&rsquo;t. If a buyer confirms and no-shows, part of their pledge lands in your
              wallet — right next to your balance.
            </p>

            <div className="mt-12 space-y-7">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                  data-testid={`compensation-point-${i}`}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gilt/40 flex items-center justify-center text-gilt">
                    <p.icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white leading-tight">{p.title}</h3>
                    <p className="font-body text-[15px] text-stone-400 leading-relaxed mt-1.5">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            data-testid="compensation-wallet-mockup"
          >
            <WalletCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
