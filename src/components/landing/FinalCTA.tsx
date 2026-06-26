'use client';
import { ArrowRight, Clock, Zap } from "lucide-react";

export default function FinalCTA() {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).triggerFormHighlight) {
      (window as any).triggerFormHighlight();
    } else {
      const el = document.getElementById("konsultasi-form-container");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 bg-emerald-950/20 text-emerald-400 px-3.5 py-1.5 rounded-full border border-emerald-500/20 liquid-glass">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em]">Garansi Jadwal</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-5">
              Jaminan Ketepatan Waktu Proyek Laboratorium Anda
            </h2>

            <p className="text-sm sm:text-[15px] font-semibold text-white/60 leading-relaxed mb-8">
              Kami memahami setiap hari penundaan berarti kerugian biaya operasional. Hubungi tim teknis Haian Lab hari ini untuk survei lokasi gratis dan estimasi jadwal produksi yang terencana.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <a
                href="#konsultasi"
                onClick={handleCTAClick}
                className="btn-liquid-glass-cta-primary group"
              >
                Minta Penawaran Resmi
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/terimakasih?source=direct_wa"
                className="btn-liquid-glass-cta group"
              >
                <Zap className="h-4 w-4 text-white" />
                WhatsApp Hubungi Kami
              </a>
            </div>
          </div>

          {/* Stats side */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "30+", label: "Lab Dilayani" },
              { value: "48 Jam", label: "Instalasi Prioritas" },
              { value: "PP", label: "Material Tahan Kimia" },
              { value: "1 Tahun", label: "Garansi Resmi" },
            ].map((stat, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-5 text-center border-none hover:scale-105 transition-transform duration-300 shadow-xl">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block tracking-tight drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white/40 mt-1.5 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
