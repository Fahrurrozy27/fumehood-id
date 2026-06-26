'use client';
import { useState, useEffect } from "react";
import { Check, ArrowRight, User, Mail, Phone, Building2, MessageSquare, Send } from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({ nama: "", phone: "", institusi: "" });
  const [isShaking, setIsShaking] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

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
        source: 'Form Lead — FumeHood.id',
      }),
    }).catch(() => {});

    const url = `/terimakasih?source=lead&nama=${encodeURIComponent(formData.nama)}&phone=${encodeURIComponent(formData.phone)}&institusi=${encodeURIComponent(formData.institusi)}`;
    window.location.href = url;
  };

  const triggerFormHighlight = (immediate = false) => {
    // 1. Scroll smoothly to the very top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    const el = document.getElementById("konsultasi-form-container");
    if (el) {
      const runEffects = () => {
        // Trigger shake
        setIsShaking(true);
        // Trigger green glow highlight
        setIsHighlighted(true);
        
        // Focus the first input field
        const firstInput = el.querySelector("input");
        if (firstInput) {
          firstInput.focus();
        }

        // Reset animations after they finish
        setTimeout(() => {
          setIsShaking(false);
        }, 600); // matches Tailwind shake duration (0.6s)

        setTimeout(() => {
          setIsHighlighted(false);
        }, 1500); // Glow duration
      };

      if (immediate) {
        runEffects();
      } else {
        // Wait 1000ms for scroll to complete
        setTimeout(runEffects, 1000);
      }
    }
  };

  // Register the trigger function to window so other components can access it
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).triggerFormHighlight = triggerFormHighlight;
    }
    return () => {
      if (typeof window !== "undefined") {
        delete (window as any).triggerFormHighlight;
      }
    };
  }, []);

  const handleCTA = () => {
    triggerFormHighlight(true);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 z-10 text-white font-sans">
      <div className="mx-auto max-w-6xl w-full relative z-20">
        
        {/* Social Proof Badge */}
        <div className="relative z-10 mb-6 flex justify-start">
          <div className="liquid-glass inline-flex items-center px-4 py-2 rounded-full border-none">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              PT. Haian Saintika Eltanindo — Produsen Spesialis Alat Laboratorium
            </span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.1] mb-7">
              Fume Hood Standar SEFA <span className="text-emerald-400">Langsung dari Pabrik</span> — Aman, Presisi, Bergaransi
            </h1>

            {/* Checklists */}
            <div className="flex flex-col gap-3.5 mb-9 w-full">
              {[
                "<strong>Blower PP Centrifugal & Kustom Material:</strong> Bebas karat dari uap asam pekat. Pilihan interior Phenolic Resin atau Stainless Steel 316 dengan <span class='wiki-term' data-term='blower'>Blower Centrifugal PP</span>.",
                "<strong>Sertifikasi Aliran Udara:</strong> Pengujian <span class='wiki-term' data-term='face-velocity'>Face Velocity</span> dan <span class='wiki-term' data-term='smoke-test'>Smoke Test</span> langsung di lokasi sesuai <span class='wiki-term' data-term='sefa'>standar SEFA</span>.",
                "<strong>Produsen Tangan Pertama:</strong> Hemat anggaran pengadaan hingga 30% tanpa perantara distributor dengan waktu pengerjaan 1-2 minggu & bisa full custom ukuran sesuai ruangan lab.",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5.5 w-5.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={3} />
                  </div>
                  <span 
                    className="text-sm sm:text-[15px] font-medium text-white/70"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>

            {/* CTA Button & Subtext */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
              <button 
                onClick={handleCTA}
                className="btn-liquid-glass-cta-primary group"
              >
                Minta Penawaran Harga
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-xs font-medium text-white/40">
              Siap menerbitkan Faktur Pajak resmi (PPN) untuk pengadaan swasta, BUMN, maupun instansi pemerintah.
            </p>
          </div>

          {/* Right Column — Lead Capture Form Card */}
          <div className="lg:col-span-5 w-full">
            <div 
              id="konsultasi-form-container" 
              className={`liquid-glass-strong rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500 ${isShaking ? "animate-shake" : ""}`}
              style={{
                borderColor: isHighlighted ? "rgba(16, 185, 129, 0.6)" : undefined,
                boxShadow: isHighlighted ? "0 0 35px rgba(16, 185, 129, 0.55), inset 0 1px 2px rgba(255, 255, 255, 0.2)" : undefined
              }}
            >
              <h2 className="text-lg font-extrabold text-white mb-1">
                Minta Penawaran Harga
              </h2>
              <p className="text-xs font-semibold text-white/50 mb-6">
                Isi data berikut untuk mendapatkan estimasi biaya dan proposal resmi.
              </p>

              <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/40 border border-white/10 rounded-xl text-sm font-semibold text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-all"
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
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/40 border border-white/10 rounded-xl text-sm font-semibold text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-all"
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
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/40 border border-white/10 rounded-xl text-sm font-semibold text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-all"
                    value={formData.institusi}
                    onChange={(e) => setFormData({ ...formData, institusi: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-liquid-glass-cta-primary w-full mt-1 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Kirim Permintaan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
