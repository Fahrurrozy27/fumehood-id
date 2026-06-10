'use client';
import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Berapa lama waktu produksi Fume Hood (Lemari\u00A0Asam) dari Haian Lab?",
      a: "Waktu produksi standar berkisar antara 2–4 minggu tergantung spesifikasi dan jumlah pesanan. Kami juga menyediakan opsi Fast-Track Production dengan instalasi prioritas dalam 48 jam untuk kebutuhan mendesak.",
    },
    {
      q: "Apakah Fume Hood (Lemari\u00A0Asam) Haian Lab memenuhi standar SEFA?",
      a: "Ya. Seluruh produk Fume Hood <span class='whitespace-nowrap'>(Lemari Asam)</span> kami dirancang dan diuji dengan mengacu pada <span class='wiki-term' data-term='standar-sefa'>standar SEFA</span> (Scientific Equipment dan Furniture Association) untuk menjamin kualitas konstruksi dan fungsionalitas laboratorium. Setiap unit menjalani pengujian <span class='wiki-term' data-term='face-velocity'>Face Velocity</span> dan <span class='wiki-term' data-term='smoke-test'>Smoke Test</span> secara individual sebelum dikirim ke pelanggan.",
    },
    {
      q: "Apakah perlu proses penggantian filter secara berkala?",
      a: "Fume Hood <span class='whitespace-nowrap'>(Lemari Asam)</span> standar tipe ducted mengeluarkan uap keluar ruangan dan tidak menggunakan filter. Namun, jika Anda memerlukan sistem ductless dengan filter carbon aktif atau filter untuk aplikasi khusus (seperti penanganan isotop radioaktif), tim engineering kami siap mendesain konfigurasi filter kustom sesuai kebutuhan Anda.",
    },
    {
      q: "Apakah tersedia opsi custom ukuran dan material?",
      a: "Tentu. Kami menerima pesanan custom meliputi dimensi, material cabinet (Stainless Steel 304/316, powder-coated steel, atau kombinasi), serta konfigurasi sistem air flow alarm. Konsultasikan kebutuhan spesifik Anda dengan tim engineering kami.",
    },
    {
      q: "Bagaimana sistem garansi dan after-sales service?",
      a: "Kami memberikan garansi resmi 1 tahun untuk suku cadang serta dukungan layanan purna jual berkelanjutan yang mencakup bantuan teknis, ketersediaan suku cadang lokal, jadwal maintenance preventif, serta kalibrasi berkala. Seluruh suku cadang diproduksi dan tersedia secara lokal, tanpa perlu menunggu impor.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center text-white mb-4">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-center text-sm sm:text-[15px] font-semibold text-white/60 mb-12">
          Temukan jawaban untuk pertanyaan teknis dan komersial seputar produk Fume Hood <span className="whitespace-nowrap">(Lemari Asam)</span> kami.
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl transition-all duration-300 border-none ${isOpen
                  ? "liquid-glass-strong shadow-2xl scale-[1.01]"
                  : "liquid-glass shadow-md hover:scale-[1.005]"
                  }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left group cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className={`font-bold text-[15px] sm:text-base transition-colors pr-6 ${isOpen ? "text-emerald-400" : "text-white/95 group-hover:text-white"
                    }`}>
                    {faq.q}
                  </span>
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                      ? "bg-emerald-400 text-slate-950 rotate-45 shadow-lg shadow-emerald-500/10"
                      : "bg-white/10 text-white/60 group-hover:bg-white/20"
                      }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                >
                  <p
                    className="text-sm sm:text-[15px] font-normal text-white/60 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
