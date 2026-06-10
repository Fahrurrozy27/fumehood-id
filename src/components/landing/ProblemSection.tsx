import { AlertTriangle, ArrowRight, XCircle, CheckCircle, Clock, Wrench, DollarSign } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 bg-rose-950/10 text-rose-400 px-3.5 py-1.5 rounded-full border-none liquid-glass">
              <AlertTriangle className="h-3.5 w-3.5 text-rose-500" />
              <span className="text-[11px] font-extrabold tracking-[0.1em] uppercase font-stack-sans">
                Masalah Umum
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-5 font-stack-sans leading-tight">
              Berhenti Membuang Anggaran untuk Fume Hood <span className="whitespace-nowrap">(Lemari Asam)</span> <span className="text-rose-600">Impor yang Mahal &amp; Sulit Di-Service</span>
            </h2>

            <p className="text-sm sm:text-[15px] font-medium leading-relaxed text-slate-400 mb-8 font-sans">
              Laboratorium kimia membutuhkan area kerja yang aman, tahan korosi, dan memiliki pembuangan udara optimal. Membeli Fume Hood <span className="whitespace-nowrap">(Lemari Asam)</span> impor atau melalui perantara sering kali menghadirkan kendala klasik:
            </p>

            <a
              href="#produk"
              className="btn-liquid-glass-cta group"
            >
              Bandingkan Keunggulan Kami
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Visual Representation */}
          <div className="liquid-glass-strong relative rounded-3xl overflow-hidden border-none shadow-2xl flex flex-col p-6 sm:p-8">

            <div className="relative z-10 flex flex-col gap-6">

              {/* Bad Scenario (Import) */}
              <div className="liquid-glass rounded-2xl p-5 border border-rose-500/20 bg-rose-950/15 shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-default">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-600 group-hover:w-2 transition-all duration-300"></div>
                <div className="flex justify-between items-start sm:items-center gap-2 mb-4 pl-2 flex-wrap sm:flex-nowrap">
                  <span className="font-extrabold text-slate-200 flex items-start gap-2 font-sans text-sm sm:text-base">
                    <XCircle className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform shrink-0 mt-0.5 sm:mt-1" />
                    <span>Fume Hood <span className="whitespace-nowrap">(Lemari Asam)</span> Impor</span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 pl-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><DollarSign className="w-3.5 h-3.5 shrink-0" /> Harga</span>
                    <span className="text-sm font-extrabold text-rose-500 font-sans">Sangat Mahal</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><Clock className="w-3.5 h-3.5 shrink-0" /> Indent</span>
                    <span className="text-sm font-extrabold text-rose-500 font-sans">3-4 Bulan</span>
                  </div>
                  <div className="flex flex-col gap-1 col-span-2">
                    <span className="text-[11px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><Wrench className="w-3.5 h-3.5 shrink-0" /> Sparepart &amp; Servis</span>
                    <span className="text-sm font-extrabold text-rose-500 font-sans">Langka &amp; Lama Menunggu</span>
                  </div>
                </div>
              </div>

              {/* Good Scenario (Local) */}
              <div className="liquid-glass rounded-2xl p-5 border border-emerald-500/35 bg-emerald-950/15 shadow-md relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-default">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#10b981] group-hover:w-2 transition-all duration-300"></div>
                <div className="flex justify-between items-start sm:items-center gap-2 mb-4 pl-2 flex-wrap sm:flex-nowrap">
                  <span className="font-extrabold text-slate-200 flex items-start gap-2 font-sans text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 text-[#10b981] group-hover:scale-110 transition-transform shrink-0 mt-0.5 sm:mt-1" />
                    <span>Fume Hood <span className="whitespace-nowrap">(Lemari Asam)</span> Haian Lab</span>
                  </span>
                  <span className="text-[10px] font-extrabold bg-[#10b981]/15 text-[#34d399] px-2.5 py-1 rounded-full uppercase tracking-wider border border-[#10b981]/20 shrink-0">Solusi</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pl-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><DollarSign className="w-3.5 h-3.5 shrink-0" /> Harga</span>
                    <span className="text-sm font-extrabold text-[#10b981] font-sans">Langsung Pabrik</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><Clock className="w-3.5 h-3.5 shrink-0" /> Waktu</span>
                    <span className="text-sm font-extrabold text-[#10b981] font-sans">2-3 Minggu</span>
                  </div>
                  <div className="flex flex-col gap-1 col-span-2">
                    <span className="text-[11px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><Wrench className="w-3.5 h-3.5 shrink-0" /> Sparepart &amp; Servis</span>
                    <span className="text-sm font-extrabold text-[#10b981] font-sans">Ready Stock &amp; Teknisi Lokal</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
