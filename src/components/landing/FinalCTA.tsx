'use client';
import { ArrowRight, Clock, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 bg-dot-texture-dark overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0ebd9f]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#097765]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 bg-white/5 text-[#0ebd9f] px-3.5 py-1.5 rounded-lg border border-[#0ebd9f]/20">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] font-[var(--font-stack-sans)]">Kapasitas Terbatas</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-5 font-[var(--font-stack-sans)]">
              Slot Produksi Bulan Ini Terbatas — Amankan Jadwal Anda Sekarang
            </h2>

            <p className="text-sm sm:text-[15px] font-semibold text-slate-400 leading-relaxed mb-8 font-[var(--font-quicksand)]">
              Dengan kapasitas workshop yang terbatas dan permintaan yang terus meningkat, pastikan proyek laboratorium Anda tidak tertunda. Hubungi tim kami hari ini untuk mendapatkan estimasi harga dan jadwal produksi.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <a
                href="#konsultasi"
                className="btn-futuristic-green group"
              >
                Amankan Slot Produksi
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/6281290864275"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setTimeout(() => {
                    window.location.href = "/terimakasih";
                  }, 100);
                }}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-300 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-200 font-[var(--font-quicksand)]"
              >
                <Zap className="h-4 w-4 text-[#0ebd9f]" />
                WhatsApp Langsung
              </a>
            </div>
          </div>

          {/* Stats side */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "30+", label: "Lab Dilayani" },
              { value: "48 Jam", label: "Instalasi Prioritas" },
              { value: "99,997%", label: "Efisiensi HEPA" },
              { value: "1 Tahun", label: "Garansi Resmi" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 text-center hover:border-[#0ebd9f]/15 transition-colors duration-300">
                <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-b from-[#0ebd9f] to-[#097765] bg-clip-text text-transparent block tracking-tight font-[var(--font-stack-sans)]">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-500 mt-1.5 block font-[var(--font-quicksand)]">
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
