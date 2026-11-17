import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Ghost, Wallet, Clock, CheckCircle2, ChevronRight } from "lucide-react";

/**
 * Recreation of the in-app Wallet card. A ghosted buyer's forfeit ($11.34) lands
 * straight in the seller's Available Balance, matching the FAQ and no-show table.
 */
/** Counts a dollar amount up from $0.00 the first time it scrolls into view. */
function CountUp({ value, duration = 1.6, delay = 0.2, onComplete }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
      onComplete: () => onComplete && onComplete(),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      ${display.toFixed(2)}
    </span>
  );
}

function WalletCard() {
  const [counted, setCounted] = useState(false);
  const [cashOutAsap, setCashOutAsap] = useState(true);
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Soft glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-100/60 via-gold-100/40 to-emerald-50/60 blur-2xl" />

      <div className="relative bg-white rounded-[1.75rem] border border-stone-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
        {/* Last cash-out pill */}
        <div className="p-4 md:p-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-50 border border-gold-100 px-3 py-1.5">
            <span className="font-body text-[11px] md:text-xs text-stone-500">
              Last cash-out:
            </span>
            <span className="font-fun text-sm md:text-base font-semibold text-secondary">
              $32.71
            </span>
            <span className="text-stone-400 text-xs">on Jul 12</span>
            <ChevronRight size={12} className="text-stone-400" />
            <span className="font-body text-[11px] md:text-xs text-stone-500 truncate">
              arriving…
            </span>
            <ChevronRight size={12} className="text-stone-300" />
          </div>
        </div>

        {/* 3-column stats */}
        <div className="grid grid-cols-3 divide-x divide-stone-100 border-t border-stone-100">
          <div className="relative p-4 md:p-5 text-center bg-emerald-50/40">
            {/* Highlight ring */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-none border-2 border-primary/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="font-body text-[11px] md:text-xs text-stone-600 font-semibold leading-tight">
              Available
              <br />
              Balance
            </p>
            <p
              data-testid="wallet-available-amount"
              className="font-fun text-3xl md:text-4xl font-bold text-primary leading-none mt-2"
            >
              <CountUp value={11.34} onComplete={() => setCounted(true)} />
            </p>
            <p className="font-body text-[10px] md:text-[11px] text-stone-500 mt-1">
              From a no-show
            </p>
          </div>
          <div className="p-4 md:p-5 text-center">
            <p className="font-body text-[11px] md:text-xs text-stone-500">
              Balance Due
            </p>
            <p className="font-fun text-2xl md:text-3xl font-semibold text-stone-900 leading-none mt-2">
              $0.00
            </p>
            <p className="font-body text-[10px] md:text-[11px] text-stone-400 mt-1">
              Fees owed
            </p>
          </div>
          <div className="p-4 md:p-5 text-center">
            <p className="font-body text-[11px] md:text-xs text-stone-500 leading-tight">
              Compensation
              <br />
              Awaiting
            </p>
            <p
              data-testid="wallet-compensation-amount"
              className="font-fun text-2xl md:text-3xl font-semibold text-stone-900 leading-none mt-2"
            >
              $0.00
            </p>
            <p className="font-body text-[10px] md:text-[11px] text-stone-400 mt-1">
              From seller no-shows
            </p>
          </div>
        </div>

        {/* Net balance strip */}
        <div className="mx-4 md:mx-5 my-4 md:my-5 rounded-2xl bg-stone-50 border border-stone-100 px-5 py-4 flex items-center justify-between">
          <span className="font-body text-sm font-semibold text-stone-800">
            Net Balance
          </span>
          <span data-testid="wallet-net-balance" className="font-fun text-2xl md:text-3xl font-semibold text-primary">
            <CountUp value={11.34} />
          </span>
        </div>

        {/* Cash out ASAP toggle */}
        <div className="mx-4 md:mx-5 mb-4 md:mb-5 flex items-center justify-between">
          <span className="font-body text-sm font-semibold text-stone-800">
            Cash Out ASAP
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={cashOutAsap}
            aria-label="Cash Out ASAP"
            data-testid="cash-out-asap-toggle"
            onClick={() => setCashOutAsap((enabled) => !enabled)}
            className={`relative w-14 h-8 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${cashOutAsap ? "bg-primary" : "bg-stone-300"}`}
          >
            <span
              className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-transform ${cashOutAsap ? "right-1" : "left-1"}`}
            />
          </button>
        </div>

        {/* Footnote */}
        <div className="px-5 pb-5">
          <p className="font-body text-[11px] leading-relaxed text-stone-500">
            Cash Out requires a minimum balance of $10.00.
            <br />
            ACH Payouts typically arrive in 2 business days.
          </p>
        </div>
      </div>

      {/* Floating "Ghosted buyer forfeit" badge */}
      <motion.div
        data-testid="wallet-forfeit-badge"
        initial={{ opacity: 0, y: -14, scale: 0.6 }}
        animate={counted ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -14, scale: 0.6 }}
        transition={{ type: "spring", stiffness: 420, damping: 16, mass: 0.7 }}
        className="absolute -top-4 -right-2 md:-right-6 rounded-2xl bg-white px-3 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-stone-100 flex items-center gap-2"
      >
        <div className="relative w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
          {counted && (
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping [animation-iteration-count:2]" />
          )}
          <Ghost size={16} className="relative text-primary" strokeWidth={1.8} />
        </div>
        <div>
          <p className="font-mono text-[9px] font-bold tracking-wider uppercase text-stone-500">
            No-show forfeit
          </p>
          <p className="font-fun text-sm font-semibold text-stone-900 leading-none mt-0.5">
            +$11.34 to you
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const points = [
  {
    icon: Ghost,
    title: "Buyer flakes? Seller still gets paid.",
    body:
      "When a buyer confirms a meet-up and then doesn't show, they forfeit a slice of their deposit — and your share goes straight into your Available Balance, ready to cash out. No more driving across town for nothing.",
  },
  {
    icon: Ghost,
    title: "Seller flakes? Buyer gets made whole.",
    body:
      "When a seller confirms a meet-up and then doesn't show, the buyer isn't left empty-handed. Their deposit comes back in full, and the seller is charged a no-show fee. That fee is held for the buyer in their Compensation Awaiting bucket and paid into their wallet as soon as the seller settles up. Showing up matters on both sides of the deal.",
  },
  {
    icon: Clock,
    title: "Late cancels cost them, not you.",
    body:
      "If a buyer bails after accepting the meeting invite, they're charged a prorated fee based on how late they cancel. Asking to reschedule costs 15% of the deposit, and all of it goes to the other person for the hassle. Ignore an invite for 12+ hours? That's a 10% forfeit.",
  },
  {
    icon: CheckCircle2,
    title: "Earn Trusted Seller status.",
    body:
      "When a buyer forfeits part of their deposit, you keep 60% of it. Complete 20 sales with an 8.0+ rating to become a Trusted Seller and keep 100%. Your reputation compounds, literally.",
  },
];

export default function Compensation() {
  return (
    <section
      data-testid="compensation-section"
      id="compensation"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold-100/50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 mb-6">
              <Wallet size={14} className="text-primary" strokeWidth={2} />
              <span className="font-body text-xs font-semibold text-primary tracking-wide uppercase">
                Your time has value
              </span>
            </div>

            <h2
              data-testid="compensation-title"
              className="font-fun text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight leading-[1.02]"
            >
              Ghosted?{" "}
              <span className="text-primary">You still get paid.</span>
            </h2>

            <p className="font-body text-base md:text-lg text-stone-600 leading-relaxed mt-5 max-w-xl">
              Every other marketplace treats your time like it&rsquo;s free.
              TruTown doesn&rsquo;t. If a buyer confirms a meet-up and no-shows,
              a chunk of their deposit lands straight in your Available Balance,
              automatically.
            </p>

            <div className="mt-10 space-y-6">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  data-testid={`compensation-point-${i}`}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-emerald-100 shadow-sm flex items-center justify-center text-primary">
                    <p.icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-fun text-lg font-semibold text-stone-900 leading-tight">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm text-stone-600 leading-relaxed mt-1">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Wallet card mockup */}
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
