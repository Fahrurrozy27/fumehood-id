'use client';

import { useState, useEffect, useRef } from "react";
import { Check, X, ArrowRight } from "lucide-react";

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).triggerFormHighlight) {
      (window as any).triggerFormHighlight();
    } else {
      const el = document.getElementById("konsultasi-form-container");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Triggers the animation only once
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const features = [
    { name: "<span class='wiki-term' data-term='blower'>Blower Centrifugal PP (Tahan Asam)</span>", haian: true, impA: true, impB: true, lokC: false, lokD: true },
    { name: "Harga Pabrik (Tanpa Markup)", haian: true, impA: false, impB: false, lokC: true, lokD: true },
    { name: "Garansi 1 Tahun & Dukungan Servis", haian: true, impA: true, impB: false, lokC: false, lokD: true },
    { name: "Worktop Phenolic Resin", haian: true, impA: true, impB: true, lokC: false, lokD: true },
    { name: "Instalasi Prioritas 48 Jam", haian: true, impA: false, impB: false, lokC: false, lokD: false },
    { name: "Suku Cadang Lokal Selalu Tersedia", haian: true, impA: false, impB: false, lokC: false, lokD: true },
    { name: "<span class='wiki-term' data-term='smoke-test'>Uji Face Velocity & Smoke Test</span>", haian: true, impA: false, impB: false, lokC: false, lokD: false },
    { name: "Kalibrasi & Maintenance On-Site", haian: true, impA: true, impB: false, lokC: false, lokD: false },
  ];

  const cols = [
    { key: "haian", label: "Haian Lab", highlight: true },
    { key: "impA", label: "Importir A", highlight: false },
    { key: "impB", label: "Importir B", highlight: false },
    { key: "lokC", label: "Lokal C", highlight: false },
    { key: "lokD", label: "Lokal D", highlight: false },
  ];

  return (
    <section
      id="keunggulan"
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
    >
      <div className="mx-auto max-w-5xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Mengapa Memilih Fume Hood <span className="whitespace-nowrap">(Lemari Asam)</span> dari Haian Lab?
          </h2>
          <p className="text-sm sm:text-[15px] font-semibold text-white/60">
            Bandingkan sendiri — lihat bagaimana produk kami unggul di setiap aspek penting untuk laboratorium Anda.
          </p>
        </div>

        {/* Table Container Card */}
        <div className="relative rounded-3xl border-none liquid-glass-strong overflow-hidden shadow-2xl p-4 sm:p-8">
          {/* Mobile Swipe Helper */}
          <div className="md:hidden flex items-center justify-end gap-1.5 text-[10px] font-bold text-emerald-400/80 mb-3.5 px-1 uppercase tracking-wider">
            <span>Geser untuk detail</span>
            <ArrowRight className="h-3.5 w-3.5 animate-pulse text-emerald-400" />
          </div>

          <div className="overflow-x-auto w-full scrollbar-none">
            <table className="w-full min-w-[630px] md:min-w-full border-collapse table-fixed md:table-auto">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="w-[140px] md:w-[30%] text-left p-2.5 sm:p-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 sticky left-0 bg-[#0b0f19] md:bg-transparent z-30 md:z-auto border-r border-white/10 md:border-r-0 shadow-[4px_0_12px_rgba(0,0,0,0.5)] md:shadow-none">
                    Fitur Keunggulan
                  </th>
                  {cols.map((col, colIdx) => {
                    const isHaian = col.key === "haian";
                    return (
                      <th
                        key={col.key}
                        className={`${isHaian
                          ? "w-[90px] md:w-[14%] text-emerald-400 bg-[#061e18] md:bg-emerald-950/30 rounded-t-2xl border-x border-t border-emerald-500/20 sticky left-[140px] z-30 md:z-auto shadow-[4px_0_12px_rgba(0,0,0,0.5)] md:shadow-none"
                          : "w-[100px] md:w-[14%] text-white/40"
                          } p-2.5 sm:p-4 text-center text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.15em] transition-all duration-500 ${isInView
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-2 scale-95"
                          }`}
                        style={{ transitionDelay: `${(colIdx + 1) * 60}ms` }}
                      >
                        {col.label}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {features.map((feat, i) => (
                  <tr
                    key={i}
                    className="hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    {/* Feature Title (slides in from left, sticky on mobile) */}
                    <td
                      className={`p-2.5 sm:p-4 text-[10px] xs:text-[11px] sm:text-sm font-normal text-white/70 transition-all duration-500 transform sticky left-0 bg-[#0b0f19] md:bg-transparent z-10 md:z-auto border-r border-white/10 md:border-r-0 shadow-[4px_0_12px_rgba(0,0,0,0.5)] md:shadow-none ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                      style={{ transitionDelay: `${i * 30}ms` }}
                      dangerouslySetInnerHTML={{ __html: feat.name }}
                    />

                    {/* Column Cells (staggered diagonally, Haian is sticky left) */}
                    {cols.map((col, colIdx) => {
                      const val = feat[col.key as keyof typeof feat] as boolean;
                      const isHaian = col.key === "haian";
                      // Diagonal delay calculation
                      const delayMs = (colIdx + 1) * 60 + i * 20;
                      return (
                        <td
                          key={col.key}
                          className={`p-2.5 sm:p-4 text-center transition-all duration-500 transform ${isHaian
                            ? `bg-[#051411] md:bg-emerald-950/10 border-x border-emerald-500/10 sticky left-[140px] z-20 md:z-auto shadow-[4px_0_12px_rgba(0,0,0,0.5)] md:shadow-none ${i === features.length - 1 ? "border-b border-emerald-500/10" : ""}`
                            : ""
                            } ${isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
                            }`}
                          style={{ transitionDelay: `${delayMs}ms` }}
                        >
                          <div
                            className={`inline-flex items-center justify-center transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
                              }`}
                            style={{ transitionDelay: `${delayMs + 100}ms` }}
                          >
                            {val ? (
                              <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center ${isHaian
                                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-xl shadow-emerald-500/10"
                                : "bg-white/10 text-white"
                                }`}>
                                <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3.5} />
                              </div>
                            ) : (
                              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white/5 text-white/20 flex items-center justify-center">
                                <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={2.5} />
                              </div>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="#konsultasi"
            onClick={handleCTAClick}
            className="btn-liquid-glass-cta-primary group"
          >
            Konsultasi Sekarang
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
