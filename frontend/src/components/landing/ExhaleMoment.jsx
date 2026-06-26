import { motion } from "framer-motion";

export default function ExhaleMoment() {
  return (
    <section
      data-testid="exhale-moment-section"
      className="py-16 md:py-24 bg-stone-50/60 border-y border-stone-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          data-testid="exhale-quote"
          className="font-fun text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 tracking-tight leading-[1.05]"
        >
          <span className="text-primary">&ldquo;</span>
          First time I sold something without checking my phone twelve times wondering if they&rsquo;d show.
          <span className="text-primary">&rdquo;</span>
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-sm md:text-base text-stone-500 mt-8 tracking-wide uppercase"
        >
          &mdash; Shawn T., Baltimore
        </motion.p>
      </div>
    </section>
  );
}
