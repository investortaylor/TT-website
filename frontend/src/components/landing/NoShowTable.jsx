import { motion } from "framer-motion";
import { Ghost, Users, Timer, ShoppingBag, Store } from "lucide-react";

const columns = [
  { key: "buyerNoShow", title: "Buyer no-shows", icon: Ghost, tint: "bg-emerald-50", border: "border-emerald-200" },
  { key: "sellerNoShow", title: "Seller no-shows", icon: Ghost, tint: "bg-[#F6EFE4]", border: "border-[#E4D3BA]" },
  { key: "neither", title: "Neither shows", icon: Users, tint: "bg-gold-50", border: "border-gold-100" },
  { key: "unclosed", title: "Met, but nobody closed the deal", icon: Timer, tint: "bg-stone-100", border: "border-stone-200" },
];

const rows = [
  {
    key: "buyer",
    icon: ShoppingBag,
    label: "The buyer",
    buyerNoShow: (
      <>
        Loses <strong className="text-secondary">25%</strong> of their deposit, retains{" "}
        <strong className="text-stone-900">75%</strong>
      </>
    ),
    sellerNoShow: (
      <>
        Gets the <strong className="text-primary">full deposit back</strong>, plus the 25% fee, held in{" "}
        <strong className="text-stone-900">Compensation Awaiting</strong> and paid out when that
        seller&rsquo;s next sale completes (or they pay off their Balance Due)
      </>
    ),
    neither: (
      <>
        Pays <strong className="text-secondary">10%</strong> of their deposit, retains{" "}
        <strong className="text-stone-900">90%</strong>
      </>
    ),
    unclosed: (
      <>
        If no one taps Purchase, Cancel, or Report, the deposit is{" "}
        <strong className="text-secondary">kept after 48 hours</strong>. Tap Report or contact
        support within 48 hours and we&rsquo;ll step in before any money moves
      </>
    ),
  },
  {
    key: "seller",
    icon: Store,
    label: "The seller",
    buyerNoShow: (
      <>
        Gets <strong className="text-primary">15%</strong> of the deposit, or{" "}
        <strong className="text-primary">25%</strong> for Trusted Sellers, straight into{" "}
        <strong className="text-stone-900">Available Balance</strong> right away
      </>
    ),
    sellerNoShow: (
      <>
        Is charged <strong className="text-secondary">25%</strong> of the buyer&rsquo;s deposit,
        added to their <strong className="text-stone-900">Balance Due</strong>
      </>
    ),
    neither: (
      <>
        Is charged <strong className="text-secondary">10%</strong> of the buyer&rsquo;s deposit,
        added to their <strong className="text-stone-900">Balance Due</strong>
      </>
    ),
    unclosed: (
      <>
        Gets <strong className="text-primary">60%</strong> of the kept deposit for their time
      </>
    ),
  },
];

// Each row slides in from the left, one after another, as it scrolls into view.
const rowReveal = {
  hidden: { opacity: 0, x: -48 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.25, ease: [0.22, 1, 0.36, 1] },
  }),
};
const rowMotion = (i) => ({
  variants: rowReveal,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.6 },
  custom: i,
});

export default function NoShowTable() {
  return (
    <section data-testid="no-show-table-section" id="no-shows" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="font-fun text-base md:text-lg font-semibold text-secondary tracking-wider uppercase">
            Who gets what
          </span>
          <h2
            data-testid="no-show-table-title"
            className="font-fun text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight mt-3"
          >
            When someone doesn&rsquo;t show.
          </h2>
          <p className="font-body text-base md:text-lg text-stone-500 mt-4 max-w-2xl mx-auto">
            The same rules apply to both sides of the deal. Here&rsquo;s exactly where the money goes,
            including when nobody closes out the deal.
          </p>
        </motion.div>

        {/* Desktop / tablet table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:block rounded-3xl border border-stone-200 bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.05)]"
        >
          <table data-testid="no-show-table" className="w-full table-fixed border-collapse">
            <thead>
              <motion.tr {...rowMotion(0)}>
                <th className="w-[14%] p-5" aria-label="Who" />
                {columns.map((c) => (
                  <th
                    key={c.key}
                    scope="col"
                    data-testid={`no-show-col-${c.key}`}
                    className={`p-5 text-left align-top border-l ${c.border} ${c.tint}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex flex-shrink-0 items-center justify-center w-9 h-9 rounded-xl bg-white/80 text-secondary">
                        <c.icon size={18} strokeWidth={1.6} />
                      </span>
                      <span className="font-fun text-xl font-semibold text-stone-900 leading-tight">{c.title}</span>
                    </span>
                  </th>
                ))}
              </motion.tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr
                  key={r.key}
                  {...rowMotion(i + 1)}
                  data-testid={`no-show-row-${r.key}`}
                  className="border-t border-stone-200"
                >
                  <th scope="row" className="p-5 text-left align-top">
                    <span className="flex items-start gap-2">
                      <r.icon size={18} strokeWidth={1.6} className="text-primary mt-1 flex-shrink-0" />
                      <span className="font-fun text-lg font-semibold text-stone-900 leading-snug">{r.label}</span>
                    </span>
                  </th>
                  {columns.map((c) => (
                    <td
                      key={c.key}
                      data-testid={`no-show-cell-${r.key}-${c.key}`}
                      className={`p-5 align-top border-l ${c.border} font-body text-[14px] text-stone-600 leading-relaxed`}
                    >
                      {r[c.key]}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile / tablet: one card per scenario */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-5" data-testid="no-show-cards">
          {columns.map((c) => (
            <div key={c.key} data-testid={`no-show-card-${c.key}`} className={`rounded-2xl border ${c.border} ${c.tint} p-5`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex flex-shrink-0 items-center justify-center w-9 h-9 rounded-xl bg-white/80 text-secondary">
                  <c.icon size={18} strokeWidth={1.6} />
                </span>
                <h3 className="font-fun text-2xl font-semibold text-stone-900 leading-tight">{c.title}</h3>
              </div>
              <div className="space-y-4">
                {rows.map((r, i) => (
                  <motion.div key={r.key} {...rowMotion(i)} className="rounded-xl bg-white/80 p-4">
                    <p className="flex items-center gap-2 font-fun text-lg font-semibold text-stone-900">
                      <r.icon size={16} strokeWidth={1.8} className="text-primary" />
                      {r.label}
                    </p>
                    <p className="font-body text-sm text-stone-600 leading-relaxed mt-1.5">{r[c.key]}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
