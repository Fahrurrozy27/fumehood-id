'use client';

import { useState } from "react";
import { ArrowRight, MessageSquareText, PencilRuler, Factory, Truck, ClipboardCheck } from "lucide-react";

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const steps = [
    {
      icon: MessageSquareText,
      title: "Permintaan & Penawaran",
      desc: "Hubungi kami dengan spesifikasi awal. Kami akan merespons cepat dengan penawaran harga (quotation) yang transparan dan kompetitif.",
    },
    {
      icon: PencilRuler,
      title: "Konsultasi & Desain",
      desc: "Diskusi mendalam terkait kebutuhan lab, site survey jika diperlukan, dan persetujuan gambar kerja (drawing) sebelum produksi.",
    },
    {
      icon: Factory,
      title: "Produksi Pabrik",
      desc: "Alat diproduksi di workshop kami dengan standar presisi tinggi, menggunakan material Stainless Steel terbaik, dan melewati Quality Control ketat.",
    },
    {
      icon: Truck,
      title: "Pengiriman & Instalasi",
      desc: "Unit dikirim dengan aman ke lokasi Anda. Tim teknisi ahli kami akan melakukan instalasi penuh termasuk kelistrikan dan sistem ducting.",
    },
    {
      icon: ClipboardCheck,
      title: "Uji Fungsi & Serah Terima",
      desc: "Pengujian final (kecepatan udara, particle counter) untuk memastikan performa valid, dilanjutkan dengan training user dan serah terima resmi.",
    },
  ];

  const isAnyHovered = activeIdx !== null;

  return (
    <section id="proses" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 bg-dot-texture-dark overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ebd9f]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#097765]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 font-stack-sans">
            Alur Kerja Sistematis: Dari Penawaran Hingga Serah Terima
          </h2>
          <p className="text-sm sm:text-[15px] font-semibold text-slate-400 font-sans max-w-2xl mx-auto">
            Proses kerja transparan dan terstruktur kami memastikan Anda mendapatkan Laminar Air Flow berkualitas tanpa drama keterlambatan.
          </p>
        </div>

        {/* Steps container */}
        <div 
          className="relative min-h-[150px] sm:min-h-[180px] flex items-start justify-center py-4"
          onMouseLeave={() => setActiveIdx(null)}
        >
          {/* Connecting Line (Only visible when no hover) */}
          <div 
            className={`absolute top-12 sm:top-14 left-[10%] right-[10%] h-[2px] bg-slate-700 transition-opacity duration-300 pointer-events-none hidden sm:block ${
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
                      : 'w-20 sm:w-28'
                  } ${isHovered ? 'max-w-full flex-1 w-full' : ''}`}
                >
                  <div className={`flex items-start transition-all duration-500 w-full pl-2 sm:pl-4 ${
                    isHovered ? 'gap-6 sm:gap-10' : 'gap-0'
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
                          <span className="text-[10px] sm:text-xs font-extrabold text-[#0ebd9f] bg-[#0ebd9f]/10 border border-[#0ebd9f]/25 px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-xl shadow-black/40 animate-pulse font-sans">
                            Lihat di sini
                          </span>
                          {/* Pointing arrow indicator */}
                          <svg className="w-3.5 h-3.5 text-[#0ebd9f] mt-0.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                          </svg>
                        </div>
                      )}

                      {/* Icon wrapper */}
                      <div className={`relative transition-all duration-500 flex items-center justify-center rounded-2xl border ${
                        isHovered 
                          ? 'w-20 h-20 sm:w-24 sm:h-24 bg-[#0ebd9f]/15 border-[#0ebd9f] shadow-[0_0_25px_rgba(14,189,159,0.3)] scale-110 rotate-6' 
                          : 'w-16 h-16 sm:w-20 sm:h-20 bg-slate-950 border-white/[0.1] hover:border-[#0ebd9f]/60 hover:bg-[#0ebd9f]/10 shadow-xl'
                      }`}>
                        <step.icon className={`transition-all duration-500 ${
                          isHovered 
                            ? 'w-10 h-10 sm:w-12 sm:h-12 text-[#0ebd9f] scale-110' 
                            : 'w-8 h-8 sm:w-10 sm:h-10 text-[#10b981] group-hover:scale-110 group-hover:text-[#0ebd9f] group-hover:rotate-3'
                        }`} strokeWidth={1.5} />
                      </div>
                      
                      {/* Default Title (below icon) */}
                      <span className={`mt-4 text-xs sm:text-sm font-bold text-center max-w-[100px] sm:max-w-[120px] font-sans leading-tight transition-all duration-300 ${
                        isAnyHovered 
                          ? 'opacity-0 scale-90 h-0 overflow-hidden mt-0' 
                          : 'text-slate-400 opacity-100 scale-100 group-hover:text-white'
                      }`}>
                        {step.title}
                      </span>
                    </div>

                    {/* Details content (horizontal, to the right of icon when hovered) */}
                    <div className={`transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] overflow-hidden ${
                      isHovered 
                        ? 'opacity-100 translate-x-0 max-w-4xl max-h-[300px]' 
                        : 'opacity-0 -translate-x-4 max-w-0 max-h-0 pointer-events-none'
                    }`}>
                      {/* Inner fixed-width container to prevent text reflow jitter during animation */}
                      <div className="w-[calc(100vw-140px)] xs:w-[calc(100vw-160px)] sm:w-[calc(100vw-240px)] md:w-[720px] flex flex-col items-start pt-1 sm:pt-2">
                        {/* Stage Badge */}
                        <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 rounded-md bg-[#0ebd9f]/10 border border-[#0ebd9f]/20">
                          <span className="text-[11px] font-extrabold text-[#0ebd9f] tracking-wider uppercase font-sans">
                            Tahap {idx + 1}
                          </span>
                        </div>
                        {/* Title */}
                        <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 font-stack-sans">
                          {step.title}
                        </h3>
                        {/* Description */}
                        <p className="text-xs sm:text-base font-medium text-slate-400 font-sans leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#konsultasi"
            className="btn-futuristic-green group inline-flex items-center gap-2"
          >
            Minta Penawaran Sekarang
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
