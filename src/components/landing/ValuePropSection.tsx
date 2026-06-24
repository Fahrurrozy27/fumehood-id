'use client';

import { Check, ArrowRight, Shield, Factory, Wrench } from "lucide-react";
import Carousel from "./Carousel";

interface ValuePropItem {
  label: string;
  headline: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  imageAlt: string;
  reverse?: boolean;
  icon: React.ReactNode;
  images?: string[];
}

const valueProps: ValuePropItem[] = [
  {
    label: "Proteksi Kelas Dunia",
    headline: "Sistem Penghisap Kuat & Desain Aerodinamis — Melindungi Operator dari Uap Berbahaya",
    description:
      "Setiap unit Fume Hood <span class='whitespace-nowrap'>(Lemari Asam)</span> kami dilengkapi dengan <span class='wiki-term' data-term='blower'>blower centrifugal PP</span> yang tahan korosi kimia tinggi, baffle untuk distribusi aliran udara optimal, <span class='wiki-term' data-term='sash'>sash door tempered glass</span> serta material worktop dari Phenolic Resin untuk memenuhi persyaratan keselamatan laboratorium internasional dan mengacu pada <span class='wiki-term' data-term='standar-sefa'>standar SEFA</span> (Scientific Equipment dan Furniture Association).",
    bullets: [
      "<span class='wiki-term' data-term='blower'>Blower Centrifugal PP</span> — tahan uap asam pekat & kimia korosif",
      "Worktop Phenolic Resin — tahan tumpahan bahan kimia",
      "<span class='wiki-term' data-term='sash'>Sash Door Tempered Glass</span> — untuk perlindungan ekstra",
    ],
    ctaText: "Unduh Spesifikasi Teknis",
    ctaHref: "/katalog-spek-fh.pdf",
    imageAlt: "[Fume Hood Lemari Asam tampak depan]",
    reverse: false,
    icon: <Shield className="h-4 w-4" />,
    images: [
      "/images/section-a/section-a-1.webp",
      "/images/section-a/section-a-2.webp",
      "/images/section-a/section-a-3.webp",
      "/images/section-a/section-a-4.webp",
      "/images/section-a/section-a-5.webp",
      "/images/section-a/section-a-6.webp",
      "/images/section-a/section-a-7.webp",
      "/images/section-a/section-a-8.webp",
    ],
  },
  {
    label: "Factory Direct Pricing",
    headline: "Langsung dari Workshop Kami di Bogor — Potong Rantai Distribusi, Hemat Anggaran",
    description:
      "Sebagai produsen langsung, kami menghilangkan markup distributor dan importir. Anda membayar untuk kualitas material dan keahlian engineering, bukan komisi perantara. Produksi 20% lebih cepat dengan opsi instalasi prioritas 48 jam serta hemat biaya hingga 30%.",
    bullets: [
      "Harga langsung pabrik — hemat hingga 30%",
      "Waktu produksi 20% lebih cepat dari rata-rata industri",
      "Opsi instalasi prioritas dalam 48 jam",
    ],
    ctaText: "Minta Penawaran",
    ctaHref: "#konsultasi",
    imageAlt: "[Workshop produksi Fume Hood (Lemari Asam) di Bogor]",
    reverse: true,
    icon: <Factory className="h-4 w-4" />,
    images: [
      "/images/section-b/section-b-1.webp",
      "/images/section-b/section-b-2.webp",
      "/images/section-b/section-b-3.webp",
      "/images/section-b/section-b-4.webp",
      "/images/section-b/section-b-5.webp",
      "/images/section-b/section-b-6.webp",
      "/images/section-b/section-b-7.webp",
      "/images/section-b/section-b-8.webp",
      "/images/section-b/section-b-9.webp",
      "/images/section-b/section-b-10.webp",
    ],
  },
  {
    label: "Garansi 1 Tahun & Purna Jual",
    headline: "Pengujian Face Velocity, Kalibrasi & Maintenance — Kami Selalu Siap",
    description:
      "Investasi Fume Hood <span class='whitespace-nowrap'>(Lemari Asam)</span> bukan hanya soal pembelian awal. Dengan garansi resmi 1 tahun, layanan purna jual berkelanjutan, ketersediaan suku cadang lokal, dan tim teknisi berpengalaman, performa safety Fume Hood <span class='whitespace-nowrap'>(Lemari Asam)</span> Anda tetap prima sepanjang masa pakai.",
    bullets: [
      "Garansi resmi 1 tahun & dukungan teknisi",
      "Suku cadang lokal — selalu tersedia, tanpa tunggu impor",
      "<span class='wiki-term' data-term='face-velocity'>Pengujian Face Velocity</span> & uji fungsi (<span class='wiki-term' data-term='smoke-test'>Smoke Test</span>) berkala",
    ],
    ctaText: "Jadwalkan Maintenance",
    ctaHref: "#konsultasi",
    imageAlt: "[Teknisi melakukan maintenance Fume Hood (Lemari Asam)]",
    reverse: false,
    icon: <Wrench className="h-4 w-4" />,
    images: [
      "/images/section-c/section-c-1.webp",
      "/images/section-c/section-c-2.webp",
      "/images/section-c/section-c-3.webp",
      "/images/section-c/section-c-4.webp",
      "/images/section-c/section-c-5.webp",
      "/images/section-c/section-c-6.webp",
      "/images/section-c/section-c-7.webp",
      "/images/section-c/section-c-8.webp",
      "/images/section-c/section-c-9.webp",
      "/images/section-c/section-c-10.webp",
      "/images/section-c/section-c-11.webp",
    ],
  },
];

function ValuePropCard({ item, index }: { item: ValuePropItem; index: number }) {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.ctaHref.startsWith("#")) {
      e.preventDefault();
      if (typeof window !== "undefined" && (window as any).triggerFormHighlight) {
        (window as any).triggerFormHighlight();
      } else {
        const el = document.getElementById("konsultasi-form-container");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item.ctaHref.endsWith(".pdf")) {
      e.preventDefault();
      if (typeof window !== "undefined" && (window as any).triggerBrochureModal) {
        (window as any).triggerBrochureModal();
      } else {
        window.open(item.ctaHref, "_blank");
      }
    }
  };

  return (
    <section
      id={index === 0 ? "produk" : undefined}
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="mx-auto max-w-6xl">
        <div className="liquid-glass rounded-3xl p-6 sm:p-10 border-none shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Side */}
            <div className={item.reverse ? "lg:order-2" : "lg:order-1"}>
              <div className="inline-flex items-center gap-2 mb-6 bg-emerald-950/20 text-emerald-400 px-3.5 py-1.5 rounded-full border border-emerald-500/20 liquid-glass">
                {item.icon}
                <span className="text-[11px] font-bold uppercase tracking-[0.15em]">{item.label}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-5 leading-tight">
                {item.headline}
              </h2>

              <p
                className="text-sm sm:text-[15px] font-normal leading-relaxed text-white/60 mb-6"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />

              <ul className="flex flex-col gap-3 mb-8">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={3} />
                    </div>
                    <span
                      className="text-sm sm:text-[15px] font-normal text-white/70"
                      dangerouslySetInnerHTML={{ __html: bullet }}
                    />
                  </li>
                ))}
              </ul>

              <a
                href={item.ctaHref}
                target={item.ctaHref.endsWith('.pdf') ? "_blank" : undefined}
                rel={item.ctaHref.endsWith('.pdf') ? "noopener noreferrer" : undefined}
                onClick={handleCTAClick}
                className={`${item.ctaHref.startsWith("#") ? "btn-liquid-glass-cta-primary" : "btn-liquid-glass-cta"} group`}
              >
                {item.ctaText}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Image Side */}
            <div className={`relative rounded-2xl bg-white/5 overflow-hidden aspect-[4/3] border-none flex items-center justify-center ${item.reverse ? "lg:order-1" : "lg:order-2"} hover:scale-[1.02] transition-transform duration-300`}>
              {item.images ? (
                <Carousel images={item.images} alt={item.imageAlt} />
              ) : (
                <>
                  {/* Engineering Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)",
                      backgroundSize: "24px 24px"
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-3">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-extrabold tracking-wide text-white">
                      Skema &amp; Foto Teknik
                    </span>
                    <span className="text-xs text-white/50 mt-1.5 font-semibold max-w-[280px]">
                      {item.imageAlt}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ValuePropSections() {
  return (
    <>
      {valueProps.map((item, i) => (
        <ValuePropCard key={i} item={item} index={i} />
      ))}
    </>
  );
}
