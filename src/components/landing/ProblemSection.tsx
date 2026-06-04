import { AlertTriangle, ArrowRight, XCircle, CheckCircle, Clock, Wrench, DollarSign } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 bg-rose-50/80 px-3.5 py-1.5 rounded-lg border border-rose-100/50">
              <AlertTriangle className="h-3.5 w-3.5 text-rose-500" />
              <span className="text-[11px] font-extrabold text-rose-600 tracking-[0.1em] uppercase font-stack-sans">
                Masalah Umum
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 font-stack-sans leading-tight">
              Berhenti Membuang Anggaran untuk LAF <span className="text-rose-600">Impor yang Mahal &amp; Sulit Di-Service</span>
            </h2>

            <p className="text-sm sm:text-[15px] font-semibold leading-relaxed text-slate-500 mb-8 font-sans">
              Banyak institusi masih bergantung pada LAF impor dengan harga selangit, waktu pengiriman berbulan-bulan, dan suku cadang yang sulit ditemukan di Indonesia. Kami hadir mengubah itu — produksi lokal dengan standar internasional, sparepart selalu tersedia, dan teknisi siap melayani di lokasi Anda.
            </p>

            <a 
              href="#produk"
              className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-200 font-sans"
            >
              Bandingkan Keunggulan Kami
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Visual Representation */}
          <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl overflow-hidden border border-slate-200/50 shadow-sm flex flex-col p-6 sm:p-8">
            {/* Background Texture */}
            <div 
              className="absolute inset-0 opacity-[0.15] pointer-events-none" 
              style={{
                backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px"
              }}
            />
            
            <div className="relative z-10 flex flex-col gap-6">
              
              {/* Bad Scenario (Import) */}
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm relative overflow-hidden group hover:border-rose-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300 cursor-default">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500 group-hover:w-2 transition-all duration-300"></div>
                <div className="flex justify-between items-center mb-4 pl-2">
                  <span className="font-extrabold text-slate-800 flex items-center gap-2 font-sans">
                    <XCircle className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                    LAF Impor Biasa
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 pl-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><DollarSign className="w-3.5 h-3.5"/> Harga</span>
                    <span className="text-sm font-extrabold text-rose-600 font-sans">Sangat Mahal</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><Clock className="w-3.5 h-3.5"/> Indent</span>
                    <span className="text-sm font-extrabold text-rose-600 font-sans">3-4 Bulan</span>
                  </div>
                  <div className="flex flex-col gap-1 col-span-2">
                    <span className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><Wrench className="w-3.5 h-3.5"/> Sparepart &amp; Servis</span>
                    <span className="text-sm font-extrabold text-rose-600 font-sans">Langka &amp; Lama Menunggu</span>
                  </div>
                </div>
              </div>

              {/* Good Scenario (Local) */}
              <div className="bg-white rounded-xl p-5 border border-[#34d399]/40 shadow-md relative overflow-hidden group hover:border-[#10b981] hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#10b981]/15 transition-all duration-300 cursor-default">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#10b981] group-hover:w-2 transition-all duration-300"></div>
                <div className="flex justify-between items-center mb-4 pl-2">
                  <span className="font-extrabold text-slate-800 flex items-center gap-2 font-sans">
                    <CheckCircle className="w-4 h-4 text-[#10b981] group-hover:scale-110 transition-transform" />
                    LAF Haian Lab
                  </span>
                  <span className="text-[10px] font-extrabold bg-[#ecfdf5] text-[#065f46] px-2 py-1 rounded uppercase tracking-wider">Solusi</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pl-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><DollarSign className="w-3.5 h-3.5"/> Harga</span>
                    <span className="text-sm font-extrabold text-[#10b981] font-sans">Langsung Pabrik</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><Clock className="w-3.5 h-3.5"/> Waktu</span>
                    <span className="text-sm font-extrabold text-[#10b981] font-sans">2-3 Minggu</span>
                  </div>
                  <div className="flex flex-col gap-1 col-span-2">
                    <span className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5 font-sans"><Wrench className="w-3.5 h-3.5"/> Sparepart &amp; Servis</span>
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
