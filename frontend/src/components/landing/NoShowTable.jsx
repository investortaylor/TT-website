import { motion } from "framer-motion";
import { Ghost, UserX, UserCheck } from "lucide-react";

const columns = [
  { key: "buyer", title: "Buyer no-shows", tint: "bg-emerald-50", border: "border-emerald-200" },
  { key: "seller", title: "Seller no-shows", tint: "bg-[#F6EFE4]", border: "border-[#E4D3BA]" },
];

const rows = [
  {
    key: "absent",
    icon: UserX,
    label: "The person who didn't show",
    buyer: (
      <>
        Loses <strong className="text-secondary">25%</strong> of their deposit, retains{" "}
        <strong className="text-stone-900">75%</strong>
      </>
    ),
    seller: (
      <>
        Is charged <strong className="text-secondary">25%</strong> of the buyer&rsquo;s deposit,
        added to their <strong className="text-stone-900">Balance Due</strong>
      </>
    ),
  },
  {
    key: "present",
    icon: UserCheck,
    label: "The person who showed up",
    buyer: (
      <>
        Gets <strong className="text-primary">15%</strong> of the deposit, or{" "}
        <strong className="text-primary">25%</strong> for Trusted Sellers, straight into{" "}
        <strong className="text-stone-900">Available Balance</strong> right away
      </>
    ),
    seller: (
      <>
        Gets the <strong className="text-primary">full deposit back</strong>. The 25% is held in{" "}
        <strong className="text-stone-900">Compensation Awaiting</strong> and paid out only when
        that seller&rsquo;s next sale completes (or they pay off their Balance Due)
      </>
    ),
  },
];

export default function NoShowTable() {
  return (
    <section data-testid="no-show-table-section" id="no-shows" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            The same rules apply to both sides of the deal. Here&rsquo;s exactly where the money goes.
          </p>
        </motion.div>

        {/* Desktop / tablet table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block rounded-3xl border border-stone-200 bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.05)]"
        >
          <table data-testid="no-show-table" className="w-full table-fixed border-collapse">
            <thead>
              <tr>
                <th className="w-[26%] p-6" aria-label="Who" />
                {columns.map((c) => (
                  <th
                    key={c.key}
                    scope="col"
                    data-testid={`no-show-col-${c.key}`}
                    className={`p-6 text-left border-l ${c.border} ${c.tint}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 text-secondary">
                        <Ghost size={20} strokeWidth={1.6} />
                      </span>
                      <span className="font-fun text-2xl font-semibold text-stone-900">{c.title}</span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key} data-testid={`no-show-row-${r.key}`} className="border-t border-stone-200">
                  <th scope="row" className="p-6 text-left align-top">
                    <span className="flex items-start gap-3">
                      <r.icon size={20} strokeWidth={1.6} className="text-primary mt-1 flex-shrink-0" />
                      <span className="font-fun text-xl font-semibold text-stone-900 leading-snug">{r.label}</span>
                    </span>
                  </th>
                  {columns.map((c) => (
                    <td
                      key={c.key}
                      data-testid={`no-show-cell-${r.key}-${c.key}`}
                      className={`p-6 align-top border-l ${c.border} font-body text-[15px] text-stone-600 leading-relaxed`}
                    >
                      {r[c.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile: one card per scenario */}
        <div className="md:hidden space-y-5" data-testid="no-show-cards">
          {columns.map((c) => (
            <div key={c.key} className={`rounded-2xl border ${c.border} ${c.tint} p-5`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/80 text-secondary">
                  <Ghost size={18} strokeWidth={1.6} />
                </span>
                <h3 className="font-fun text-2xl font-semibold text-stone-900">{c.title}</h3>
              </div>
              <div className="space-y-4">
                {rows.map((r) => (
                  <div key={r.key} className="rounded-xl bg-white/80 p-4">
                    <p className="flex items-center gap-2 font-fun text-lg font-semibold text-stone-900">
                      <r.icon size={16} strokeWidth={1.8} className="text-primary" />
                      {r.label}
                    </p>
                    <p className="font-body text-sm text-stone-600 leading-relaxed mt-1.5">{r[c.key]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
