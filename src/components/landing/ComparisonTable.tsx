'use client';

import { useState, useEffect, useRef } from "react";
import { Check, X, ArrowRight } from "lucide-react";

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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
    { name: "Filter HEPA H14 (99,997%)", haian: true, impA: true, impB: true, lokC: false, lokD: true },
    { name: "Harga Direct Factory", haian: true, impA: false, impB: false, lokC: true, lokD: true },
    { name: "Garansi 1 Tahun & Dukungan Servis", haian: true, impA: true, impB: false, lokC: false, lokD: true },
    { name: "Material Stainless 304/316", haian: true, impA: true, impB: true, lokC: false, lokD: true },
    { name: "Instalasi Prioritas 48 Jam", haian: true, impA: false, impB: false, lokC: false, lokD: false },
    { name: "Suku Cadang Lokal Tersedia", haian: true, impA: false, impB: false, lokC: false, lokD: true },
    { name: "Uji Kebocoran Particle Counter", haian: true, impA: false, impB: false, lokC: false, lokD: false },
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
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 bg-dot-texture-dark overflow-hidden border-y border-slate-900"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ebd9f]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#097765]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 font-[var(--font-stack-sans)] leading-tight">
            Mengapa Memilih LAF dari Haian Lab?
          </h2>
          <p className="text-sm sm:text-[15px] font-semibold text-slate-400 font-[var(--font-quicksand)]">
            Bandingkan sendiri — lihat bagaimana produk kami unggul di setiap aspek penting untuk laboratorium Anda.
          </p>
        </div>

        {/* Table Container Card */}
        <div className="relative rounded-2xl border border-slate-800/65 bg-slate-900/30 backdrop-blur-xl overflow-hidden shadow-2xl p-2.5 sm:p-6">
          <table className="w-full border-collapse table-fixed md:table-auto">
            <thead>
              <tr className="border-b border-slate-800/80">
                <th className="w-[32%] md:w-auto text-left p-2 sm:p-4 text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 font-[var(--font-stack-sans)]">
                  Fitur Keunggulan
                </th>
                {cols.map((col, colIdx) => {
                  const isHaian = col.key === "haian";
                  return (
                    <th
                      key={col.key}
                      className={`w-[13.6%] md:w-auto p-2 sm:p-4 text-center text-[9px] xs:text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.15em] font-[var(--font-stack-sans)] transition-all duration-500 ${
                        isInView 
                          ? "opacity-100 translate-y-0 scale-100" 
                          : "opacity-0 translate-y-2 scale-95"
                      } ${
                        isHaian
                          ? "text-[#0ebd9f] bg-[#0ebd9f]/[0.04] border-t border-x border-slate-800/70 rounded-t-xl"
                          : "text-slate-500"
                      }`}
                      style={{ transitionDelay: `${(colIdx + 1) * 60}ms` }}
                    >
                      {col.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {features.map((feat, i) => (
                <tr 
                  key={i} 
                  className="hover:bg-slate-900/40 transition-colors duration-300"
                >
                  {/* Feature Title (slides in from left) */}
                  <td 
                    className={`p-2 sm:p-4 text-[10px] xs:text-[11px] sm:text-sm font-bold text-slate-300 font-[var(--font-stack-sans)] transition-all duration-500 transform ${
                      isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {feat.name}
                  </td>

                  {/* Column Cells (staggered diagonally) */}
                  {cols.map((col, colIdx) => {
                    const val = feat[col.key as keyof typeof feat] as boolean;
                    const isHaian = col.key === "haian";
                    // Diagonal delay calculation
                    const delayMs = (colIdx + 1) * 60 + i * 20;
                    return (
                      <td
                        key={col.key}
                        className={`p-1 sm:p-4 text-center transition-all duration-500 transform ${
                          isHaian ? "bg-[#0ebd9f]/[0.02] border-x border-slate-800/50" : ""
                        } ${
                          isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
                        }`}
                        style={{ transitionDelay: `${delayMs}ms` }}
                      >
                        <div 
                          className={`inline-flex items-center justify-center transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                            isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
                          }`}
                          style={{ transitionDelay: `${delayMs + 100}ms` }}
                        >
                          {val ? (
                            <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center ${
                              isHaian
                                ? "bg-gradient-to-b from-[#0ebd9f] to-[#097765] text-white shadow-[0_0_12px_rgba(14,189,159,0.5)]"
                                : "bg-emerald-950/40 text-[#10b981] border border-emerald-900/50"
                            }`}>
                              <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3.5} />
                            </div>
                          ) : (
                            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-slate-900/80 border border-slate-800 text-slate-600 flex items-center justify-center">
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

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="#konsultasi"
            className="btn-futuristic-green group"
          >
            Konsultasi Sekarang
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
