'use client';

import { useState, useEffect } from "react";
import { User, Building2, X, Download } from "lucide-react";

export default function GatedDownloadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ nama: "", institusi: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).triggerBrochureModal = () => {
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
    
    const waNumber = "6281290864275";
    const text = `Halo tim FumeHood.id, saya ${formData.nama} dari ${formData.institusi} telah mengunduh Katalog Spesifikasi Teknis Lemari Asam.`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    
    // 1. Open WhatsApp in a new tab
    window.open(waUrl, "_blank", "noopener,noreferrer");
    
    // 2. Redirect the main window to the thank you page with source=brochure
    window.location.href = "/terimakasih?source=brochure";
    
    // 3. Close the modal
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
              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                type="text"
                placeholder="Nama Institusi / Perusahaan"
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
              Mulai Unduh Katalog
            </button>
          </form>

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
