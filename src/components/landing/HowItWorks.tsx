'use client';

import { useState } from "react";
import { ArrowRight, MessageSquareText, PencilRuler, Factory, Truck, ClipboardCheck } from "lucide-react";

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).triggerFormHighlight) {
      (window as any).triggerFormHighlight();
    } else {
      const el = document.getElementById("konsultasi-form-container");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      icon: MessageSquareText,
      title: "Minta Quotation",
      desc: "Kirim spesifikasi awal Anda, tim kami akan mengirimkan penawaran harga resmi dalam waktu 1x24 jam.",
    },
    {
      icon: PencilRuler,
      title: "Desain & CAD",
      desc: "Konsultasi teknis, survei lokasi gratis, dan pembuatan gambar kerja (CAD) untuk persetujuan desain.",
    },
    {
      icon: Factory,
      title: "Produksi & QC",
      desc: "Unit diproduksi presisi di workshop Bogor menggunakan material standar industri dan melewati proses inspeksi kualitas ketat.",
    },
    {
      icon: Truck,
      title: "Kirim & Pasang",
      desc: "Pengiriman aman dan perakitan penuh di lokasi Anda oleh teknisi ahli, termasuk pemasangan sistem <span class='wiki-term' data-term='ducting'>ducting lengkap</span>.",
    },
    {
      icon: ClipboardCheck,
      title: "Sertifikasi & Tes",
      desc: "Uji hisap udara (<span class='wiki-term' data-term='face-velocity'>Face Velocity</span>), uji visual kebocoran (<span class='wiki-term' data-term='smoke-test'>Smoke Test</span>), dan training operator sebelum serah terima.",
    },
  ];

  const isAnyHovered = activeIdx !== null;

  return (
    <section id="proses" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Proses Transparan, Bebas Hambatan
          </h2>
          <p className="text-sm sm:text-[15px] font-semibold text-white/60 max-w-2xl mx-auto leading-relaxed">
            Mulai dari diskusi sketsa awal hingga sertifikasi keselamatan di laboratorium Anda, kami menjamin pengerjaan yang terstruktur dan tepat waktu.
          </p>
        </div>

        {/* Steps container (Desktop Only) */}
        <div 
          className="hidden md:flex relative min-h-[180px] items-start justify-center py-4"
          onMouseLeave={() => setActiveIdx(null)}
        >
          {/* Connecting Line (Only visible when no hover) */}
          <div 
            className={`absolute top-12 sm:top-14 left-[10%] right-[10%] h-[1px] bg-white/10 transition-opacity duration-300 pointer-events-none hidden sm:block ${
              isAnyHovered ? 'opacity-0' : 'opacity-100'
            }`} 
          />

          {/* Steps Wrapper */}
          <div className="flex justify-between w-full max-w-4xl mx-auto relative">
            {steps.map((step, idx) => {
              const isHovered = activeIdx === idx;
              const isOthersHovered = isAnyHovered && !isHovered;

              return (
                <div
                  key={idx}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isOthersHovered 
                      ? 'max-w-0 w-0 opacity-0 pointer-events-none overflow-hidden' 
                      : 'w-28'
                  } ${isHovered ? 'max-w-full flex-1 w-full' : ''}`}
                >
                  <div className={`flex items-start transition-all duration-500 w-full pl-4 ${
                    isHovered ? 'gap-10' : 'gap-0'
                  }`}>
                    
                    {/* Icon & Default Title Column */}
                    <div 
                      className="flex flex-col items-center shrink-0 cursor-pointer group relative"
                      onMouseEnter={() => setActiveIdx(idx)}
                    >
                      {/* Hint tooltip on the first icon */}
                      {idx === 0 && (
                        <div className={`absolute -top-14 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none transition-all duration-500 z-20 ${
                          isAnyHovered ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                        }`}>
                          <span className="liquid-glass text-xs font-bold text-white/90 px-3 py-1 rounded-full whitespace-nowrap shadow-xl border-none animate-pulse">
                            Lihat di sini
                          </span>
                          {/* Pointing arrow indicator */}
                          <svg className="w-3.5 h-3.5 text-white/40 mt-0.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                          </svg>
                        </div>
                      )}

                      {/* Icon wrapper */}
                      <div className={`relative transition-all duration-500 flex items-center justify-center rounded-2xl border-none ${
                        isHovered 
                          ? 'w-24 h-24 liquid-glass-strong scale-110 rotate-6 shadow-2xl shadow-emerald-500/10 border border-emerald-500/20' 
                          : 'w-20 h-20 liquid-glass hover:scale-105 shadow-xl'
                      }`}>
                        <step.icon className={`transition-all duration-500 ${
                          isHovered 
                            ? 'w-12 h-12 text-emerald-400 scale-110' 
                            : 'w-10 h-10 text-white/60 group-hover:scale-110 group-hover:text-white group-hover:rotate-3'
                        }`} strokeWidth={1.5} />
                      </div>
                      
                      {/* Default Title (below icon) */}
                      <span className={`mt-4 text-sm font-bold text-center max-w-[120px] leading-tight transition-all duration-300 ${
                        isAnyHovered 
                          ? 'opacity-0 scale-90 h-0 overflow-hidden mt-0' 
                          : 'text-white/50 opacity-100 scale-100 group-hover:text-white'
                      }`}>
                        {step.title}
                      </span>
                    </div>

                    {/* Details content */}
                    <div className={`transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] overflow-hidden ${
                      isHovered 
                        ? 'opacity-100 translate-x-0 max-w-4xl max-h-[300px]' 
                        : 'opacity-0 -translate-x-4 max-w-0 max-h-0 pointer-events-none'
                    }`}>
                      <div className="w-[720px] flex flex-col items-start pt-2">
                        {/* Stage Badge */}
                        <div className={`inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full border-none transition-all duration-300 ${
                          isHovered 
                            ? "bg-emerald-950/20 text-emerald-400 border border-emerald-500/20" 
                            : "liquid-glass text-white/80"
                        }`}>
                          <span className="text-[10px] font-extrabold tracking-wider uppercase">
                            Tahap {idx + 1}
                          </span>
                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        {/* Description */}
                        <p 
                          className="text-base font-normal text-white/60 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: step.desc }}
                        />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Steps container (Mobile Only - Vertical Timeline) */}
        <div className="md:hidden flex flex-col gap-8 px-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex gap-4 relative">
                {/* Connecting Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-[-24px] w-[1px] bg-emerald-500/20" />
                )}
                
                {/* Step Circle & Icon */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl liquid-glass border border-emerald-500/10 flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-emerald-400" />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 text-slate-950 text-[10.5px] font-black flex items-center justify-center shadow-md">
                    {idx + 1}
                  </span>
                </div>
                
                {/* Step Text Info */}
                <div className="flex flex-col pt-1">
                  <span className="text-[9px] font-extrabold tracking-wider text-emerald-400/80 uppercase">
                    Tahap {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 mb-1.5 leading-tight">
                    {step.title}
                  </h3>
                  <p 
                    className="text-xs text-white/60 leading-relaxed font-normal"
                    dangerouslySetInnerHTML={{ __html: step.desc }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#konsultasi"
            onClick={handleCTAClick}
            className="btn-liquid-glass-cta-primary group"
          >
            Minta Penawaran Sekarang
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
