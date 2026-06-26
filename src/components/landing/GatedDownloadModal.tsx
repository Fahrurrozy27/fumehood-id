'use client';

import { useState, useEffect } from "react";
import { User, Phone, Building2, X, Download, MessageSquare, CheckCircle2 } from "lucide-react";

export default function GatedDownloadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ nama: "", phone: "", institusi: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).triggerBrochureModal = () => {
        setFormData({ nama: "", phone: "", institusi: "" });
        setStep(1);
        setIsOpen(true);
      };
    }
    return () => {
      if (typeof window !== "undefined") {
        delete (window as any).triggerBrochureModal;
      }
    };
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fire-and-forget: kirim data lead ke Telegram & Google Sheets via API
    fetch('/api/send-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nama: formData.nama,
        phone: formData.phone,
        institusi: formData.institusi,
        source: 'Form Brosur — FumeHood.id',
      }),
    }).catch(() => {});

    setStep(2); // Move to Step 2
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/katalog-spek-fh.pdf";
    link.download = "katalog-spek-fh.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactAdmin = () => {
    const url = `/terimakasih?source=brochure_wa&nama=${encodeURIComponent(formData.nama)}&phone=${encodeURIComponent(formData.phone)}&institusi=${encodeURIComponent(formData.institusi)}`;
    window.location.href = url;
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9998] flex items-center justify-center p-4"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[calc(100%-32px)] sm:w-full max-w-md p-0.5 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        <div className="liquid-glass-strong rounded-[22px] p-6 sm:p-8 relative border-none bg-[#090d1a]">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-white/40 hover:text-white cursor-pointer transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {step === 1 ? (
            <>
              {/* Icon Header */}
              <div className="mx-auto w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                <Download className="h-6 w-6 text-emerald-400" />
              </div>

              <h3 className="text-xl font-extrabold text-white text-center mb-1">
                Unduh Spesifikasi Teknis
              </h3>
              <p className="text-xs font-semibold text-white/50 text-center mb-6 max-w-sm mx-auto leading-relaxed">
                Dapatkan dokumen spesifikasi teknis lengkap Fume Hood (Lemari Asam) langsung di perangkat Anda.
              </p>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-950/40 border border-white/10 rounded-xl text-sm font-semibold text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50 transition-all"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    type="tel"
                    placeholder="No. HP / WhatsApp"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-950/40 border border-white/10 rounded-xl text-sm font-semibold text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Institusi / Perusahaan"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-950/40 border border-white/10 rounded-xl text-sm font-semibold text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50 transition-all"
                    value={formData.institusi}
                    onChange={(e) => setFormData({ ...formData, institusi: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-liquid-glass-cta-primary w-full mt-2 flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Kirim &amp; Lanjutkan
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Icon Header */}
              <div className="mx-auto w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 animate-bounce">
                <CheckCircle2 className="h-6 w-6 text-emerald-400" />
              </div>

              <h3 className="text-xl font-extrabold text-white text-center mb-1">
                Data Berhasil Diterima
              </h3>
              <p className="text-xs font-semibold text-white/50 text-center mb-6 max-w-sm mx-auto leading-relaxed">
                Silakan pilih langkah selanjutnya untuk mendapatkan katalog spesifikasi teknis atau berkonsultasi langsung.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="btn-liquid-glass-cta-primary w-full flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Unduh Brosur (PDF)
                </button>

                <button
                  type="button"
                  onClick={handleContactAdmin}
                  className="btn-liquid-glass-cta w-full flex items-center justify-center gap-2 border border-emerald-500/20"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  Hubungi Admin via WhatsApp
                </button>
              </div>
            </>
          )}

          {/* Footer branding */}
          <div className="mt-6 pt-4 border-t border-white/5 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80">
              FumeHood.id Secure Download
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
