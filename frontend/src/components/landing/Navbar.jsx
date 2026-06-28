import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-stone-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo + Slogan */}
          <Link
            to="/"
            data-testid="navbar-logo"
            className="flex items-center gap-3 md:gap-4 min-w-0"
          >
            <img
              src="/logo.png"
              alt="TruTown Marketplace"
              className="h-[60px] sm:h-[75px] md:h-[90px] w-auto my-2 flex-shrink-0"
              style={{ mixBlendMode: "multiply" }}
            />
            <span
              data-testid="navbar-slogan"
              className="font-body font-semibold text-black leading-tight text-[11px] sm:text-xs md:text-sm border-l border-stone-300 pl-3 md:pl-4 max-w-[150px] sm:max-w-[220px] md:max-w-none"
            >
              Where motivated buyers meet trusted sellers.
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-body text-sm font-semibold text-stone-600 hover:text-primary transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#download"
              data-testid="nav-download-btn"
              className="rounded-full bg-primary text-white px-6 py-2.5 font-body font-semibold text-sm hover:bg-primary-hover transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get the App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-700"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-body font-semibold text-stone-700 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#download"
                onClick={() => setMobileOpen(false)}
                className="block rounded-full bg-primary text-white px-6 py-3 font-body font-semibold text-center hover:bg-primary-hover transition-all"
              >
                Get the App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
