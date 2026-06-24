'use client';

import { useState, useEffect, useRef } from "react";

interface GlossaryItem {
  title: string;
  description: string;
  image: string;
}

const GLOSSARY: Record<string, GlossaryItem> = {
  blower: {
    title: "Blower Centrifugal PP/PVDF",
    description: "Kipas pembuangan sentrifugal khusus berbahan termoplastik tahan korosi kimia tinggi. Menjamin daya hisap uap asam pekat tetap kuat dan bebas karat sepanjang masa pakai.",
    image: "/images/glossary/blower.webp"
  },
  sash: {
    title: "Sash Tempered Glass",
    description: "Pintu geser vertikal kaca tempered tebal berpemberat (counterweight). Berfungsi sebagai pelindung fisik utama operator dari risiko ledakan reaksi atau percikan kimia.",
    image: "/images/glossary/sash.webp"
  },
  sefa: {
    title: "Standar Internasional SEFA",
    description: "Scientific Equipment and Furniture Association. Standar industri internasional yang mengatur kelayakan struktural, keselamatan operasional, & efisiensi aerodinamika alat laboratorium.",
    image: "/images/glossary/sefa.webp"
  },
  "smoke-test": {
    title: "Face Velocity & Smoke Test",
    description: "Metode sertifikasi keselamatan wajib untuk mengukur kecepatan aliran udara (standar 0.3-0.5 m/s) dan memvisualisasikan asap guna memastikan pembuangan tanpa turbulensi balik.",
    image: "/images/glossary/smoke-test.webp"
  },
  ducting: {
    title: "Sistem Ducting Laboratorium",
    description: "Saluran pipa pembuangan gas beracun berbahan PVC/PP tebal yang dirancang dengan sudut aerodinamis optimal untuk membuang uap dari Fume Hood (Lemari Asam) ke udara luar dengan lancar.",
    image: "/images/glossary/ducting.webp"
  }
};

const ALIASES: Record<string, string> = {
  "blower-centrifugal": "blower",
  "blower-centrifugal-pp": "blower",
  "blower": "blower",
  "sash-tempered": "sash",
  "sash-tempered-glass": "sash",
  "sash": "sash",
  "standar-sefa": "sefa",
  "sefa": "sefa",
  "smoke-test": "smoke-test",
  "face-velocity": "smoke-test",
  "ducting": "ducting",
  "sistem-ducting": "ducting"
};

export default function WikiGlossary() {
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState<GlossaryItem | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number; placeAbove: boolean; width: number }>({ top: 0, left: 0, placeAbove: true, width: 350 });
  const [arrowLeft, setArrowLeft] = useState<number>(175);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const currentTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lock background scroll on mobile while the drawer is visible
  useEffect(() => {
    if (isMobile && isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isVisible]);

  useEffect(() => {
    if (!mounted) return;

    // 1. MouseOver handler for desktop (handles hover previews)
    const handleMouseOver = (e: MouseEvent) => {
      if (isMobile) return; // Ignore hover behaviors on touch-first viewports
      
      const target = (e.target as HTMLElement).closest(".wiki-term") as HTMLElement;
      
      if (target) {
        if (currentTargetRef.current === target) {
          if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
            hideTimeout.current = null;
          }
          return;
        }

        currentTargetRef.current = target;

        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
          hideTimeout.current = null;
        }
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

        const cursorX = e.pageX;
        const cursorY = e.pageY;
        const viewportCursorY = e.clientY;

        hoverTimeout.current = setTimeout(() => {
          const rawTerm = target.getAttribute("data-term") || "";
          const termKey = ALIASES[rawTerm.toLowerCase()] || rawTerm.toLowerCase();
          const glossaryItem = GLOSSARY[termKey];

          if (glossaryItem) {
            const cardWidth = Math.min(350, window.innerWidth - 32);
            const cardHeight = 330;

            let left = cursorX - (cardWidth / 2);
            const margin = 16;
            
            if (left < margin) {
              left = margin;
            } else if (left + cardWidth > window.innerWidth - margin) {
              left = window.innerWidth - cardWidth - margin;
            }

            const placeAbove = viewportCursorY > cardHeight + 24;

            let top = 0;
            if (placeAbove) {
              top = cursorY - cardHeight - 16;
            } else {
              top = cursorY + 16;
            }

            let relativeArrowLeft = cursorX - left;
            const minArrowMargin = 24;
            if (relativeArrowLeft < minArrowMargin) {
              relativeArrowLeft = minArrowMargin;
            } else if (relativeArrowLeft > cardWidth - minArrowMargin) {
              relativeArrowLeft = cardWidth - minArrowMargin;
            }

            setActiveItem(glossaryItem);
            setPosition({ top, left, placeAbove, width: cardWidth });
            setArrowLeft(relativeArrowLeft);
            setIsVisible(true);
          }
        }, 80);
      } else {
        if (hoverTimeout.current) {
          clearTimeout(hoverTimeout.current);
          hoverTimeout.current = null;
        }
        setIsVisible(false);
        currentTargetRef.current = null;
        setActiveItem(null);
      }
    };

    // 2. Click handler for mobile (ensures instant response to screen taps)
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".wiki-term") as HTMLElement;
      if (target) {
        e.preventDefault();
        e.stopPropagation();

        const rawTerm = target.getAttribute("data-term") || "";
        const termKey = ALIASES[rawTerm.toLowerCase()] || rawTerm.toLowerCase();
        const glossaryItem = GLOSSARY[termKey];

        if (glossaryItem) {
          setActiveItem(glossaryItem);
          setIsVisible(true);
        }
      }
    };

    // 3. Scroll handler to automatically close absolute tooltip cards on desktop scroll
    const handleScroll = () => {
      if (!isMobile && isVisible) {
        setIsVisible(false);
        setActiveItem(null);
        currentTargetRef.current = null;
      }
    };

    // 4. Keyboard keydown handler to close tooltips/drawers on hitting Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        setIsVisible(false);
        setActiveItem(null);
        currentTargetRef.current = null;
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [mounted, isVisible, isMobile]);

  if (!mounted || !activeItem) return null;

  if (isMobile) {
    return (
      <>
        {/* Dark Backdrop Overlay */}
        <div 
          className={`fixed inset-0 bg-slate-950/80 z-[9998] transition-opacity duration-200 ${
            isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => {
            setIsVisible(false);
            setActiveItem(null);
            currentTargetRef.current = null;
          }}
        />
        {/* Bottom Drawer Card */}
        <div
          ref={cardRef}
          className={`fixed bottom-0 left-0 right-0 z-[9999] bg-[#090d1a] border-t border-emerald-500/30 rounded-t-3xl shadow-[0_-10px_35px_rgba(0,0,0,0.85)] px-6 py-6 pb-8 transition-all duration-300 transform pointer-events-auto ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          {/* Drawer Handle Accent */}
          <div className="mx-auto w-12 h-1 bg-white/10 rounded-full mb-6" />

          {/* Close button */}
          <button
            onClick={() => {
              setIsVisible(false);
              setActiveItem(null);
              currentTargetRef.current = null;
            }}
            className="absolute top-4 right-4 p-2 text-white/40 hover:text-white cursor-pointer"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2 leading-tight">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0" />
              {activeItem.title}
            </h4>
            <p className="text-sm leading-relaxed text-white/80 font-normal">
              {activeItem.description}
            </p>
            {activeItem.image && (
              <div className="relative h-[150px] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5 mt-2">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Footer Accent */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80">
                FumeHood.id Glossary
              </span>
              <span className="text-[10px] text-white/30 font-medium">
                Technical Definition
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`absolute z-[9999] h-[330px] overflow-hidden rounded-2xl bg-[#090d1a] border border-emerald-500/30 shadow-[0_15px_45px_rgba(0,0,0,0.85)] pointer-events-auto transition-all duration-200 ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
          : "opacity-0 translate-y-1 scale-95 pointer-events-none"
      }`}
      style={{
        top: position.top,
        left: position.left,
        width: position.width,
      }}
    >
      {/* Top Image */}
      {activeItem.image && (
        <div className="relative h-[160px] w-full bg-slate-900 border-b border-white/5">
          <img
            src={activeItem.image}
            alt={activeItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[170px]">
        <div>
          <h4 className="text-sm sm:text-[15px] font-bold text-white flex items-center gap-2 mb-2 leading-tight">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
            {activeItem.title}
          </h4>
          <p className="text-xs leading-relaxed text-white/80 font-normal">
            {activeItem.description}
          </p>
        </div>

        {/* Footer Accent */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400/80">
            FumeHood.id Glossary
          </span>
          <span className="text-[9px] text-white/30 font-medium">
            Technical Definition
          </span>
        </div>
      </div>

      {/* Dynamic Arrow Pointer */}
      <div
        className={`absolute w-3 h-3 bg-[#090d1a] rotate-45 transform -translate-x-1/2 transition-all duration-300 ${
          position.placeAbove
            ? "bottom-[-6px] border-r border-b border-emerald-500/30"
            : "top-[-6px] border-l border-t border-emerald-500/30"
        }`}
        style={{ left: arrowLeft }}
      />
    </div>
  );
}
