'use client';
import { useState, useEffect } from "react";
import { Check, ArrowRight, Send, Building2, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({ nama: "", email: "", phone: "", institusi: "", kebutuhan: "" });

  useEffect(() => {
    const shakeForm = () => {
      const formDiv = document.getElementById('konsultasi-form-container');
      if (formDiv) {
        formDiv.classList.remove('animate-shake', 'ring-4', 'ring-[#0ebd9f]/50');
        void formDiv.offsetWidth; // trigger reflow
        formDiv.classList.add('animate-shake', 'ring-4', 'ring-[#0ebd9f]/50');
        setTimeout(() => {
          formDiv.classList.remove('animate-shake', 'ring-4', 'ring-[#0ebd9f]/50');
        }, 800);
      }
    };

    const smoothScrollTo = (targetId: string, duration: number, callback?: () => void) => {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const currentScroll = window.scrollY;
      const targetPosition = targetElement.getBoundingClientRect().top + currentScroll;
      const distance = targetPosition - currentScroll;
      let start: number | null = null;

      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = progress < duration / 2 
          ? 4 * Math.pow(progress / duration, 3) 
          : 1 - Math.pow(-2 * progress / duration + 2, 3) / 2;
        window.scrollTo(0, currentScroll + distance * ease);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          window.scrollTo(0, targetPosition);
          if (callback) callback();
        }
      });
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const a = target.closest('a');
      if (!a) return;

      const href = a.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();

          if (targetId === 'konsultasi') {
            const currentScroll = window.scrollY;
            if (currentScroll < 300) {
              shakeForm();
            } else {
              smoothScrollTo('konsultasi', 600, shakeForm);
            }
          } else {
            smoothScrollTo(targetId, 800);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = "6281290864275";
    const text = `Halo tim LaminarAirFlow.id, saya ingin mendapatkan penawaran. Berikut detail saya:
- Nama: ${formData.nama}
- Email: ${formData.email}
- No. HP: ${formData.phone}
- Institusi: ${formData.institusi}
- Kebutuhan: ${formData.kebutuhan}`;
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    window.location.href = "/terimakasih";
  };

  return (
    <section id="konsultasi" className="relative w-full min-h-screen flex flex-col">
      {/* Hero Content — vertically centered */}
      <div className="flex-1 flex flex-col justify-center pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl w-full relative z-20">
        {/* Social Proof Pill */}
        <div className="relative z-10 mb-4">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-[#ecfdf5]/90 backdrop-blur-sm border border-[#a7f3d0]">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#065f46]">
              Mitra Terpercaya Pengadaan Alat Laboratorium
            </span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Text */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 font-[var(--font-stack-sans)] leading-[1.1] mb-7">
              Laminar Air Flow dengan Filter HEPA 99,997%{' '}
              <span className="bg-gradient-to-r from-[#0ebd9f] to-[#097765] bg-clip-text text-transparent">— Langsung dari Pabrik</span>, Tanpa Markup
            </h1>

            <div className="flex flex-col gap-3.5 mb-9">
              {[
                "Filter HEPA H14 efisiensi 99,997% untuk partikel ≥0,3μm",
                "Mengacu pada standar SEFA (Scientific Equipment & Furniture Association)",
                "Harga pabrik langsung — hemat hingga 30% vs distributor",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5.5 w-5.5 rounded-full bg-gradient-to-b from-[#0ebd9f]/15 to-[#097765]/15 border border-[#0ebd9f]/30 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-[#0ebd9f]" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-slate-600 font-[var(--font-quicksand)]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
              <a 
                href="#konsultasi"
                className="btn-futuristic-green group"
              >
                Minta Penawaran Harga
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-xs font-semibold text-slate-400 font-[var(--font-quicksand)]">
              Konsultasi gratis, tanpa komitmen. Respon cepat dalam 1×24 jam.
            </p>
          </div>

          {/* Right — Lead Capture Form */}
          <div className="lg:col-span-5">
            <div id="konsultasi-form-container" className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-200/50 shadow-sm transition-all duration-300">
              <p className="text-lg font-extrabold text-slate-900 mb-1 font-[var(--font-quicksand)]">
                Dapatkan Penawaran
              </p>
              <p className="text-xs font-semibold text-slate-400 mb-6 font-[var(--font-quicksand)]">
                Isi formulir dan tim teknis kami segera menghubungi Anda.
              </p>

              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-lg text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0ebd9f]/20 focus:border-[#0ebd9f]/50 transition-all font-[var(--font-quicksand)]"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-lg text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0ebd9f]/20 focus:border-[#0ebd9f]/50 transition-all font-[var(--font-quicksand)]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="No. HP / WhatsApp"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-lg text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0ebd9f]/20 focus:border-[#0ebd9f]/50 transition-all font-[var(--font-quicksand)]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Institusi / Perusahaan"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-lg text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0ebd9f]/20 focus:border-[#0ebd9f]/50 transition-all font-[var(--font-quicksand)]"
                    value={formData.institusi}
                    onChange={(e) => setFormData({ ...formData, institusi: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <textarea
                    placeholder="Kebutuhan (tipe LAF, jumlah, ukuran, dll.)"
                    rows={3}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-lg text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0ebd9f]/20 focus:border-[#0ebd9f]/50 transition-all resize-none font-[var(--font-quicksand)]"
                    value={formData.kebutuhan}
                    onChange={(e) => setFormData({ ...formData, kebutuhan: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-futuristic-green w-full mt-1"
                >
                  <Send className="h-4 w-4" />
                  Kirim Permintaan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
