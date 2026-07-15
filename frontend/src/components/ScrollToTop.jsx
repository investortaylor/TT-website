import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If URL has a hash (e.g. /#how-it-works), scroll to that element
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a tick so the target section is mounted (esp. after route change)
      const tryScroll = (attempt = 0) => {
        const el = document.getElementById(id);
        if (el) {
          // Offset for the fixed navbar (~112px on md+, ~96px on mobile)
          const navOffset = window.innerWidth >= 768 ? 112 : 96;
          const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top, behavior: "smooth" });
        } else if (attempt < 10) {
          // Retry until the section is in the DOM (max ~500ms)
          setTimeout(() => tryScroll(attempt + 1), 50);
        }
      };
      tryScroll();
      return;
    }

    // No hash → scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
