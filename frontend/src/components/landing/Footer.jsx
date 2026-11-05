import { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import BrandLogo from "@/components/brand/BrandLogo";
import CrownSkyline from "@/components/brand/CrownSkyline";

const productLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Delete Account", to: "/delete-account" },
];

const linkCls = "font-body text-[15px] text-stone-400 hover:text-gilt transition-colors duration-200";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = (e) => {
    e?.preventDefault();
    setContactOpen(true);
  };

  return (
    <footer data-testid="footer" className="relative bg-[#070604] text-stone-300 overflow-hidden">
      <div className="h-1 w-full bg-crown-gradient" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block" data-testid="footer-logo">
              <BrandLogo size="lg" />
            </Link>
            <p className="font-display italic text-2xl text-stone-200 leading-snug max-w-sm mt-6">
              Royalty at street level.
            </p>
            <p className="font-body text-sm text-stone-500 leading-relaxed max-w-sm mt-3">
              The local marketplace built for how exchanges actually happen — in person, with
              trust, and without the games.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-body font-bold text-xs text-gilt mb-5 tracking-[0.24em] uppercase">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={linkCls}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-body font-bold text-xs text-gilt mb-5 tracking-[0.24em] uppercase">Company</h4>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={openContact}
                  data-testid="footer-link-contact-us"
                  className={`${linkCls} text-left p-0 bg-transparent border-0 cursor-pointer`}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-body font-bold text-xs text-gilt mb-5 tracking-[0.24em] uppercase">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={linkCls}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-stone-500">
            &copy; {new Date().getFullYear()} TruTown Marketplace. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" data-testid="cta-apple-store-footer" className="font-body text-xs text-stone-500 hover:text-gilt transition-colors">
              Download on App Store
            </a>
            <a href="#" data-testid="cta-google-play-footer" className="font-body text-xs text-stone-500 hover:text-gilt transition-colors">
              Get it on Google Play
            </a>
          </div>
        </div>
      </div>

      <CrownSkyline
        variant="solid"
        fill="#14100A"
        className="absolute -bottom-24 -right-24 w-[520px] opacity-80 pointer-events-none"
      />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  );
}
