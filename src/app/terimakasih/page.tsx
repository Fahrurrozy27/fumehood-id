'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Download } from "lucide-react";

export default function ThankYouPage() {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const src = params.get("source");
      setSource(src);

      // Trigger brochure download automatically if coming from the gated brochure modal
      if (src === "brochure") {
        const link = document.createElement("a");
        link.href = "/katalog-spek-fh.pdf";
        link.download = "katalog-spek-fh.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }, []);

  const isBrochure = source === "brochure";
  const title = isBrochure ? "Brosur Sedang Diunduh!" : "Terima Kasih!";
  const message = isBrochure
    ? "Brosur spesifikasi teknis Fume Hood (Lemari Asam) sedang diunduh secara otomatis. Jika unduhan tidak berjalan otomatis, silakan klik tombol di bawah untuk mengunduh secara manual."
    : "Permintaan Anda telah berhasil diteruskan ke WhatsApp kami. Tim technical support kami akan segera menghubungi Anda kembali dalam waktu maksimal 1×24 jam.";

  return (
    <div className="relative min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[450px] bg-gradient-to-b from-[#0ebd9f]/8 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl text-center flex flex-col items-center">
        
        {/* SUCCESS ICON */}
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-b from-[#0ebd9f]/10 to-[#097765]/10 border border-[#0ebd9f]/25 flex items-center justify-center text-[#0ebd9f] mb-8 animate-pulse shadow-[0_0_20px_rgba(14,189,159,0.15)]">
          <CheckCircle2 className="h-10 w-10" strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-[var(--font-stack-sans)] mb-4">
          {title}
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-[15px] font-semibold leading-relaxed text-slate-300 font-[var(--font-quicksand)] mb-8">
          {message}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col w-full gap-3">
          <Link
            href="/"
            className="btn-liquid-glass-cta-primary w-full"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
          <a
            href="/katalog-spek-fh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-glass-cta w-full"
          >
            <Download className="h-4 w-4" />
            Unduh Manual Brosur
          </a>
        </div>

      </div>
    </div>
  );
}
