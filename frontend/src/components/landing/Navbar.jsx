import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";

const navLinks = [
  { label: "How It Works", id: "how-it-works", testid: "how-it-works" },
  { label: "Features", id: "features", testid: "features" },
  { label: "Testimonials", id: "testimonials", testid: "testimonials" },
  { label: "FAQ", id: "faq", testid: "faq" },
];

function smoothScrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  const navOffset = window.innerWidth >= 768 ? 88 : 76;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onLanding = location.pathname === "/";


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    if (onLanding) {
      setTimeout(() => smoothScrollToId(id), 50);
      return;
    }
    navigate(`/#${id}`);
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-xl border-b border-gilt/15 transition-shadow duration-500 ${
        scrolled ? "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px] md:h-[88px]">
          <Link to="/" data-testid="navbar-logo" className="flex items-center gap-4 min-w-0">
            <BrandLogo size="md" />
            <span
              data-testid="navbar-slogan"
              className="hidden lg:block font-display italic text-sm text-stone-300 border-l border-gilt/25 pl-4"
            >
              Where serious buyers meet trusted sellers.
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => handleAnchorClick(e, link.id)}
                data-testid={`nav-link-${link.testid}`}
                className="relative font-body text-[13px] font-semibold tracking-[0.14em] uppercase text-stone-200 hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-crown-gradient after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#download"
              onClick={(e) => handleAnchorClick(e, "download")}
              data-testid="nav-download-btn"
              className="rounded-full bg-leaf text-ink px-6 py-2.5 font-body font-bold text-sm hover:bg-neon transition-all duration-300 hover:shadow-[0_10px_30px_-8px_rgba(47,224,58,0.7)] cursor-pointer"
            >
              Get the App
            </a>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-100"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ink border-b border-gilt/20 overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="px-5 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleAnchorClick(e, link.id)}
                  data-testid={`mobile-nav-link-${link.testid}`}
                  className="flex items-baseline gap-4 font-display text-2xl text-stone-100 hover:text-leaf transition-colors py-2.5 cursor-pointer"
                >
                  <span className="font-body text-xs text-gilt tracking-widest">0{i + 1}</span>
                  {link.label}
                </a>
              ))}
              <a
                href="/#download"
                onClick={(e) => handleAnchorClick(e, "download")}
                data-testid="mobile-nav-download-btn"
                className="block mt-4 rounded-full bg-leaf text-ink px-6 py-3.5 font-body font-bold text-center cursor-pointer"
              >
                Get the App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
