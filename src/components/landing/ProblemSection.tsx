import { AlertTriangle, ArrowRight, Clock, Wrench, DollarSign } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle section divider glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#10b981]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header - Centered & Premium */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 bg-rose-950/10 text-rose-400 px-3.5 py-1.5 rounded-full border border-rose-500/10 liquid-glass">
            <AlertTriangle className="h-3.5 w-3.5 text-rose-500" />
            <span className="text-[10px] font-black tracking-[0.15em] uppercase font-sans">
              Tantangan Lab
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Masalah Klasik Lemari Asam: <span className="text-rose-500">Harga Impor Mahal &amp; Inden Berbulan-bulan</span>
          </h2>

          <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-400 max-w-2xl mx-auto">
            Banyak pengelola laboratorium terjebak memilih antara unit impor berbiaya tinggi dengan waktu inden yang lama, atau memilih unit murah tanpa sertifikasi keamanan. Kami memotong kerumitan tersebut dengan memproduksi langsung unit bersertifikasi di workshop lokal.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Product Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group hover:scale-[1.005] transition-all duration-300">
              <img
                src="/images/section-c/section-c-4.webp"
                alt="Pengujian &amp; Sertifikasi Fume Hood"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Floating Feature Annotation Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-slate-950/70 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Wrench className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Sertifikasi &amp; Smoke Test On-Site</span>
                  <span className="text-[10px] text-white/50 font-medium">Uji fungsi langsung di lab Anda sebelum serah terima</span>
                </div>
              </div>
            </div>
            
            {/* Quick Action button under image */}
            <div className="flex justify-center lg:justify-start pl-2 mb-2">
              <a
                href="#produk"
                className="btn-liquid-glass-cta group w-full sm:w-auto text-center"
              >
                Lihat Spesifikasi &amp; Keunggulan Detail
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust highlights to fill empty space aesthetically */}
            <div className="grid grid-cols-2 gap-4 mt-2 pl-2">
              <div className="liquid-glass rounded-2xl p-4 flex flex-col gap-1.5 border border-white/5 bg-slate-950/20">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Kapasitas Workshop</span>
                <span className="text-base font-black text-emerald-400">15+ Unit / Bulan</span>
                <span className="text-[10.5px] text-slate-300 leading-normal font-medium">Sanggup menangani pengadaan skala laboratorium kecil hingga kompleks.</span>
              </div>
              <div className="liquid-glass rounded-2xl p-4 flex flex-col gap-1.5 border border-white/5 bg-slate-950/20">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Kepatuhan Pajak</span>
                <span className="text-base font-black text-emerald-400">100% Legal (PT)</span>
                <span className="text-[10.5px] text-slate-300 leading-normal font-medium">PKP Resmi, siap menerbitkan Faktur Pajak (PPN) untuk BUMN &amp; Pemerintah.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Dashboard */}
          <div className="lg:col-span-7">
            {/* Visual Representation — Comparative Dashboard */}
            <div className="liquid-glass-strong relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col p-6 sm:p-8">
              {/* Decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-6 sm:gap-7">
                
                {/* Header Columns */}
                <div className="grid grid-cols-2 gap-4 pb-3 border-b border-white/10 text-center">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-400">
                    Fume Hood Impor
                  </span>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-400 flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Haian Lab (Lokal)
                  </span>
                </div>

                {/* Row 1: Harga */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-300 uppercase tracking-wider pl-1">
                    <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
                    Harga &amp; Anggaran
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-rose-950/10 border border-rose-500/20 rounded-xl p-4 flex flex-col gap-1.5 transition-all cursor-default">
                      <span className="text-sm sm:text-base font-black text-rose-400">Sangat Mahal</span>
                      <span className="text-xs sm:text-[13px] text-slate-400 font-medium leading-relaxed">Terbebani markup distributor berlapis &amp; bea masuk tinggi.</span>
                    </div>
                    <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 flex flex-col gap-1.5 shadow-lg shadow-emerald-950/50 hover:border-emerald-500/40 transition-all cursor-default">
                      <span className="text-sm sm:text-base font-black text-emerald-400">Harga Pabrik</span>
                      <span className="text-xs sm:text-[13px] text-emerald-100 font-medium leading-relaxed">Hemat hingga 30% karena hubungan langsung tanpa perantara.</span>
                    </div>
                  </div>
                </div>

                {/* Row 2: Waktu Tunggu */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-300 uppercase tracking-wider pl-1">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    Waktu Tunggu (Lead Time)
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-rose-950/10 border border-rose-500/20 rounded-xl p-4 flex flex-col gap-1.5 transition-all cursor-default">
                      <span className="text-sm sm:text-base font-black text-rose-400">3 - 4 Bulan Inden</span>
                      <span className="text-xs sm:text-[13px] text-slate-400 font-medium leading-relaxed">Proses pengiriman laut internasional &amp; birokrasi bea cukai.</span>
                    </div>
                    <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 flex flex-col gap-1.5 shadow-lg shadow-emerald-950/50 hover:border-emerald-500/40 transition-all cursor-default">
                      <span className="text-sm sm:text-base font-black text-emerald-400">1 - 2 Minggu</span>
                      <span className="text-xs sm:text-[13px] text-emerald-100 font-medium leading-relaxed">Bisa full custom ukuran kabinet menyesuaikan luas ruangan lab Anda.</span>
                    </div>
                  </div>
                </div>

                {/* Row 3: Servis & Sparepart */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-300 uppercase tracking-wider pl-1">
                    <Wrench className="w-4 h-4 text-emerald-400 shrink-0" />
                    Suku Cadang &amp; Servis
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-rose-950/10 border border-rose-500/20 rounded-xl p-4 flex flex-col gap-1.5 transition-all cursor-default">
                      <span className="text-sm sm:text-base font-black text-rose-400">Langka &amp; Lama</span>
                      <span className="text-xs sm:text-[13px] text-slate-400 font-medium leading-relaxed">Kendala suku cadang impor membuat perbaikan lab tertunda.</span>
                    </div>
                    <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 flex flex-col gap-1.5 shadow-lg shadow-emerald-950/50 hover:border-emerald-500/40 transition-all cursor-default">
                      <span className="text-sm sm:text-base font-black text-emerald-400">Ready &amp; On-Site</span>
                      <span className="text-xs sm:text-[13px] text-emerald-100 font-medium leading-relaxed">Teknisi standby meluncur ke lokasi dengan garansi 1 tahun.</span>
                    </div>
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
