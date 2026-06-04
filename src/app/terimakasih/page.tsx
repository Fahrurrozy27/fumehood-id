import Link from "next/link";
import { CheckCircle2, ArrowLeft, Download } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen bg-[#FAFBFD] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[450px] bg-gradient-to-b from-[#0ebd9f]/8 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-2xl text-center flex flex-col items-center">
        
        {/* SUCCESS ICON */}
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-b from-[#0ebd9f]/10 to-[#097765]/10 border border-[#0ebd9f]/25 flex items-center justify-center text-[#0ebd9f] mb-8 animate-pulse shadow-[0_0_20px_rgba(14,189,159,0.15)]">
          <CheckCircle2 className="h-10 w-10" strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-[var(--font-stack-sans)] mb-4">
          Terima Kasih!
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-[15px] font-semibold leading-relaxed text-slate-500 font-[var(--font-quicksand)] mb-8">
          Permintaan Anda telah berhasil diteruskan ke WhatsApp kami. Tim technical support kami akan segera menghubungi Anda kembali dalam waktu maksimal 1×24 jam.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col w-full gap-3">
          <Link
            href="/"
            className="btn-futuristic-green w-full"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
          <a
            href="/katalog-spek.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-xl transition-all duration-200 font-[var(--font-quicksand)]"
          >
            <Download className="h-4 w-4" />
            Unduh Brosur Spesifikasi
          </a>
        </div>

      </div>
    </div>
  );
}
