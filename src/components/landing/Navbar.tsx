'use client';
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const links = [
    { label: "Proses", href: "#proses" },
    { label: "Produk", href: "#produk" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    // Detect dark sections by checking the element behind the navbar
    const checkBackground = () => {
      // Sample a point just below the navbar (center-x, ~60px from top)
      const navHeight = 72;
      const sampleY = navHeight + 4;
      const sampleX = window.innerWidth / 2;

      const el = document.elementFromPoint(sampleX, sampleY);
      if (!el) return;

      // Walk up the DOM to find the nearest section/footer with a bg class
      let current: Element | null = el;
      while (current && current !== document.body) {
        const tag = current.tagName.toLowerCase();
        if (tag === 'section' || tag === 'footer') {
          const cl = current.className || '';
          // Check if this section has a dark background
          if (
            cl.includes('bg-slate-950') ||
            cl.includes('bg-slate-900') ||
            cl.includes('bg-gray-950') ||
            cl.includes('bg-gray-900') ||
            cl.includes('bg-black')
          ) {
            setIsDark(true);
            return;
          }
          setIsDark(false);
          return;
        }
        current = current.parentElement;
      }
      setIsDark(false);
    };

    // Run on scroll + resize
    window.addEventListener('scroll', checkBackground, { passive: true });
    window.addEventListener('resize', checkBackground, { passive: true });
    checkBackground(); // initial check

    return () => {
      window.removeEventListener('scroll', checkBackground);
      window.removeEventListener('resize', checkBackground);
    };
  }, []);

  // Theme-based styles (dark navbar on light sections, light navbar on dark sections)
  const navBg = isDark
    ? 'bg-white/50 border-slate-200/40'
    : 'bg-slate-900/70 border-white/10';

  const logoColor = isDark
    ? 'text-slate-900'
    : 'text-white';

  const linkColor = isDark
    ? 'text-slate-700 hover:text-slate-900'
    : 'text-white/90 hover:text-white';

  const phoneIconColor = isDark
    ? 'text-slate-600'
    : 'text-white/70';

  const mobileToggleColor = isDark
    ? 'text-slate-700 hover:text-slate-900'
    : 'text-white/90 hover:text-white';

  const mobileBg = isDark
    ? 'bg-white/90 border-slate-200/40'
    : 'bg-slate-900/90 border-white/10';

  const mobileLinkColor = isDark
    ? 'text-slate-800 hover:text-slate-900'
    : 'text-white/90 hover:text-white';

  const mobilePhoneColor = isDark
    ? 'text-slate-700'
    : 'text-white/80';

  const mobileHrColor = isDark
    ? 'border-slate-200'
    : 'border-white/15';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10">
        <nav className={`${navBg} backdrop-blur-2xl rounded-xl shadow-sm px-6 py-3 flex items-center justify-between transition-colors duration-500`}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5 group">
            <span className={`text-lg font-extrabold tracking-tight ${logoColor} font-stack-sans transition-colors duration-500`}>
              LaminarAirFlow<span className="text-[#10b981]">.id</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[13px] font-semibold ${linkColor} transition-colors duration-500 tracking-wide font-[var(--font-quicksand)]`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">
            <a href="tel:+6281290864275" className={`flex items-center gap-2 text-[13px] font-semibold ${linkColor} transition-colors duration-500 font-[var(--font-quicksand)]`}>
              <Phone className={`h-3.5 w-3.5 ${phoneIconColor} transition-colors duration-500`} />
              <span>0812-9086-4275</span>
            </a>
            <a
              href="#konsultasi"
              className="btn-futuristic-green px-5 py-2 text-xs"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${mobileToggleColor} transition-colors duration-500`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`md:hidden mt-2 ${mobileBg} backdrop-blur-2xl rounded-xl shadow-lg p-5 flex flex-col gap-4 transition-colors duration-500`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold ${mobileLinkColor} transition-colors duration-500 font-[var(--font-quicksand)]`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className={mobileHrColor} />
            <a href="tel:+6281290864275" className={`flex items-center gap-2 text-sm font-semibold ${mobilePhoneColor} font-[var(--font-quicksand)]`}>
              <Phone className={`h-4 w-4 ${phoneIconColor}`} />
              0812-9086-4275
            </a>
            <a
              href="#konsultasi"
              className="btn-futuristic-green text-center px-5 py-2.5 text-xs"
              onClick={() => setMobileOpen(false)}
            >
              Konsultasi Gratis
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
