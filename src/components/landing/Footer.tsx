'use client';
import { MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white block mb-0.5 font-stack-sans">
              LaminarAirFlow<span className="text-[#10b981]">.id</span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-600 block mb-5 font-[var(--font-quicksand)]">
              by{" "}
              <a
                href="https://www.haianlab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0ebd9f] hover:text-[#0ebd9f]/80 transition-colors font-bold duration-200"
              >
                PT. Haian Saintika Eltanindo
              </a>
            </span>
            <p className="text-sm font-semibold text-slate-400 leading-relaxed font-[var(--font-quicksand)] max-w-sm">
              Produsen Laminar Air Flow lokal berstandar internasional. Solusi lengkap dari desain, produksi, instalasi, hingga pemeliharaan berkala.
            </p>
          </div>

          {/* Kontak */}
          <div className="md:justify-self-end">
            <h3 className="text-white font-bold mb-5 uppercase tracking-[0.15em] text-[11px] font-[var(--font-stack-sans)]">
              Hubungi Kami
            </h3>
            <div className="flex flex-col gap-3.5 max-w-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#0ebd9f] shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-slate-400 leading-relaxed font-[var(--font-quicksand)]">
                  Jl. Pangeran Sogiri No.135B, Tanah Baru, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16154
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#0ebd9f] shrink-0" />
                <p className="text-sm font-semibold text-slate-400 font-[var(--font-quicksand)]">
                  Senin – Jumat: 08:00 – 17:00
                </p>
              </div>
            </div>

            {/* Social Logos */}
            <div className="flex gap-5 mt-6">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/haian.lab/",
                  icon: (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/haian-lab/",
                  icon: (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/6281290864275",
                  icon: (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  onClick={s.label === "WhatsApp" ? () => {
                    setTimeout(() => {
                      window.location.href = "/terimakasih";
                    }, 100);
                  } : undefined}
                  className="text-slate-500 hover:text-[#0ebd9f] transition-all hover:scale-110 duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 text-left text-xs sm:text-sm font-semibold text-slate-500 font-[var(--font-quicksand)]">
          <p>
            © {new Date().getFullYear()} laminarairflow.id by{" "}
            <a
              href="https://www.haianlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0ebd9f] hover:text-[#0ebd9f]/80 transition-colors font-bold duration-200"
            >
              PT. Haian Saintika Eltanindo
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
