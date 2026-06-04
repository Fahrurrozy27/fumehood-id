'use client';
import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Berapa lama waktu produksi LAF dari Haian Lab?",
      a: "Waktu produksi standar berkisar antara 2–4 minggu tergantung spesifikasi dan jumlah pesanan. Kami juga menyediakan opsi Fast-Track Production dengan instalasi prioritas dalam 48 jam untuk kebutuhan mendesak.",
    },
    {
      q: "Apakah LAF Haian Lab memenuhi standar SEFA?",
      a: "Ya. Seluruh produk Laminar Air Flow kami dirancang dan diuji dengan mengacu pada standar SEFA (Scientific Equipment dan Furniture Association) untuk menjamin kualitas konstruksi dan fungsionalitas laboratorium. Setiap unit menjalani uji kebocoran (leak test) menggunakan Laser Particle Counter secara individual sebelum dikirim ke pelanggan.",
    },
    {
      q: "Bagaimana proses penggantian filter HEPA?",
      a: "Filter HEPA H14 pada LAF kami memiliki masa pakai 3–5 tahun tergantung kondisi lingkungan. Tim teknisi kami tersedia untuk penggantian filter on-site, termasuk pengujian ulang integritas filter setelah pemasangan.",
    },
    {
      q: "Apakah tersedia opsi custom ukuran dan material?",
      a: "Tentu. Kami menerima pesanan custom meliputi dimensi, material cabinet (Stainless Steel 304/316, powder-coated steel, atau kombinasi), serta konfigurasi aliran udara (horizontal/vertikal). Konsultasikan kebutuhan spesifik Anda dengan tim engineering kami.",
    },
    {
      q: "Bagaimana sistem garansi dan after-sales service?",
      a: "Kami memberikan garansi resmi 1 tahun untuk suku cadang serta dukungan layanan purna jual berkelanjutan yang mencakup bantuan teknis, ketersediaan suku cadang lokal, jadwal maintenance preventif, serta kalibrasi berkala. Seluruh suku cadang diproduksi dan tersedia secara lokal, tanpa perlu menunggu impor.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-dot-texture">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center text-slate-900 mb-4 font-[var(--font-stack-sans)]">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-center text-sm sm:text-[15px] font-semibold text-slate-500 mb-12 font-[var(--font-quicksand)]">
          Temukan jawaban untuk pertanyaan teknis dan komersial seputar produk LAF kami.
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-[#0ebd9f]/20 shadow-[0_0_20px_rgba(14,189,159,0.06)]"
                    : "bg-white/60 border-slate-200/50 hover:border-slate-300/60"
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-bold text-[15px] sm:text-base text-slate-800 group-hover:text-slate-900 transition-colors pr-6 font-[var(--font-stack-sans)]">
                    {faq.q}
                  </span>
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-gradient-to-b from-[#0ebd9f] to-[#097765] text-white rotate-45 shadow-[0_0_12px_rgba(14,189,159,0.3)]"
                        : "bg-slate-100 text-slate-400 group-hover:bg-slate-200/80"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-[15px] font-semibold text-slate-500 leading-relaxed font-[var(--font-quicksand)]">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
