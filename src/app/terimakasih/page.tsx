'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ExternalLink } from "lucide-react";

export default function ThankYouPage() {
  const [source, setSource] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(2);
  const [waUrl, setWaUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const src = params.get("source") || "direct_wa";
      const nama = params.get("nama") || "";
      const phone = params.get("phone") || "";
      const institusi = params.get("institusi") || "";
      setSource(src);

      // Construct WhatsApp URL
      const waNumber = "6281290864275";
      let text = "";

      if (src === "lead") {
        text = `Halo tim FumeHood.id, saya ingin mendapatkan penawaran. Berikut detail saya:
- Nama: ${nama}
- No. HP / WhatsApp: ${phone}
- Instansi / Perusahaan: ${institusi}`;
      } else if (src === "brochure_wa") {
        text = `Halo tim FumeHood.id, saya ${nama} dari ${institusi} (No. HP: ${phone}) ingin berkonsultasi mengenai Fume Hood Lemari Asam.`;
      } else {
        text = `Halo tim FumeHood.id, saya tertarik dengan produk Fume Hood (Lemari Asam) dan ingin berkonsultasi.`;
      }

      const generatedUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      setWaUrl(generatedUrl);

      // Countdown effect
      const interval = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      // Redirect after 2 seconds
      const timer = setTimeout(() => {
        window.location.href = generatedUrl;
      }, 2000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, []);

  const isBrochure = source === "brochure_wa";
  const title = "Terima Kasih!";
  const message = isBrochure
    ? "Permintaan Anda untuk berkonsultasi mengenai spesifikasi teknis sedang diproses."
    : "Permintaan Anda telah berhasil kami terima.";

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
        <p className="text-sm sm:text-[15px] font-semibold leading-relaxed text-slate-300 font-[var(--font-quicksand)] mb-4">
          {message}
        </p>

        {/* Redirect text */}
        <p className="text-xs font-medium text-emerald-400/90 mb-8 flex items-center gap-1.5 justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Mengarahkan ke WhatsApp dalam {countdown} detik...
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col w-full gap-3">
          {waUrl && (
            <a
              href={waUrl}
              className="btn-liquid-glass-cta-primary w-full"
            >
              <ExternalLink className="h-4 w-4" />
              Buka WhatsApp Sekarang
            </a>
          )}
          <Link
            href="/"
            className="btn-liquid-glass-cta w-full"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>

      </div>
    </div>
  );
}
