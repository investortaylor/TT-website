import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL =
  (typeof process !== "undefined" && process.env && process.env.REACT_APP_BACKEND_URL) ||
  "";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Buyer Support",
  "Seller Support",
  "Partnership",
  "Press / Media",
  "Other",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
};

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please pick a subject.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleClose = () => {
    if (submitting) return;
    onClose?.();
    // Reset after the close animation
    setTimeout(() => {
      setForm(initialState);
      setSubmitted(false);
      setErrors({});
    }, 250);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        subject: form.subject,
        message: form.message.trim(),
      });
      setSubmitted(true);
      toast.success("Message sent!", {
        description: "Thanks for reaching out — we'll be in touch soon.",
      });
      // Auto-close after a short success state
      setTimeout(() => {
        handleClose();
      }, 1800);
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        "Something went wrong sending your message. Please try again.";
      toast.error("Couldn't send your message", { description: detail });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="contact-modal-overlay"
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-stone-900/60 backdrop-blur-sm px-0 sm:px-4 py-0 sm:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            data-testid="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative w-full sm:max-w-xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              disabled={submitting}
              data-testid="contact-modal-close"
              aria-label="Close contact form"
              className="absolute right-4 top-4 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors disabled:opacity-50"
            >
              <X size={20} />
            </button>

            <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-stone-100">
              <p className="font-body text-xs font-semibold tracking-wide uppercase text-primary mb-2">
                Get in touch
              </p>
              <h2
                id="contact-modal-title"
                className="font-fun text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight"
              >
                Contact us
              </h2>
              <p className="font-body text-sm sm:text-base text-stone-600 mt-2">
                Have a question, a partnership idea, or feedback? Send us a note
                — we read every message.
              </p>
            </div>

            {submitted ? (
              <div
                data-testid="contact-success"
                className="px-6 sm:px-8 py-12 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-primary" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-fun text-2xl font-semibold text-stone-900 mb-2">
                  Message sent.
                </h3>
                <p className="font-body text-stone-600 max-w-sm">
                  Thanks for reaching out — we&rsquo;ll get back to you at{" "}
                  <span className="font-semibold text-stone-900">{form.email}</span>{" "}
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="px-6 sm:px-8 py-6 space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-body text-sm font-semibold text-stone-800 mb-1.5"
                    >
                      Full name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="contact-name"
                      data-testid="contact-input-name"
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Jane Doe"
                      autoComplete="name"
                      className={`w-full rounded-lg border bg-white px-4 py-3 font-body text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none ${
                        errors.name ? "border-destructive" : "border-stone-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive font-body">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-body text-sm font-semibold text-stone-800 mb-1.5"
                    >
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="contact-email"
                      data-testid="contact-input-email"
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="jane@example.com"
                      autoComplete="email"
                      className={`w-full rounded-lg border bg-white px-4 py-3 font-body text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none ${
                        errors.email ? "border-destructive" : "border-stone-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive font-body">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block font-body text-sm font-semibold text-stone-800 mb-1.5"
                    >
                      Phone <span className="font-normal text-stone-400">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      data-testid="contact-input-phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      placeholder="+1 (555) 123-4567"
                      autoComplete="tel"
                      className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 font-body text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block font-body text-sm font-semibold text-stone-800 mb-1.5"
                    >
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      data-testid="contact-input-subject"
                      value={form.subject}
                      onChange={handleChange("subject")}
                      className={`w-full rounded-lg border bg-white px-4 py-3 font-body text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none ${
                        errors.subject ? "border-destructive" : "border-stone-200"
                      }`}
                    >
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-body text-sm font-semibold text-stone-800 mb-1.5"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    data-testid="contact-input-message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder="Tell us a bit about what you're looking for…"
                    className={`w-full rounded-lg border bg-white px-4 py-3 font-body text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-y min-h-[120px] ${
                      errors.message ? "border-destructive" : "border-stone-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive font-body">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                  <p className="font-body text-xs text-stone-500">
                    We typically reply within 1 business day.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="contact-submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3 font-body font-semibold text-sm hover:bg-primary-hover transition-all duration-300 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
