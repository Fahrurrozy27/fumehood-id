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
    headline: "Filter HEPA H14 dengan Efisiensi 99,997% — Menjaga Sterilitas Ruang Kerja Anda",
    description:
      "Setiap unit LAF kami dilengkapi filter HEPA grade H14 yang lolos uji kebocoran (leak test) menggunakan instrumen Laser Particle Counter. Material cabinet dari Stainless Steel 304/316 tahan korosi kimia, memenuhi persyaratan GMP dan mengacu pada standar SEFA (Scientific Equipment dan Furniture Association).",
    bullets: [
      "HEPA H14 — efisiensi 99,997% untuk partikel ≥0,3μm",
      "Uji kebocoran (leak test) dengan Laser Particle Counter",
      "Material Stainless Steel 304/316 anti-korosi",
    ],
    ctaText: "Unduh Spesifikasi Teknis",
    ctaHref: "/katalog-spek.pdf",
    imageAlt: "[LAF Clean Bench tampak depan]",
    reverse: false,
    icon: <Shield className="h-4 w-4" />,
    images: [
      "/images/tes/tes-1.webp",
      "/images/tes/tes-2.webp",
      "/images/tes/tes-3.webp",
      "/images/tes/tes-4.webp",
      "/images/tes/tes-5.webp",
      "/images/tes/tes-6.webp",
      "/images/tes/tes-7.webp",
    ],
  },
  {
    label: "Factory Direct Pricing",
    headline: "Langsung dari Workshop Kami di Bogor — Potong Rantai Distribusi, Hemat Anggaran",
    description:
      "Sebagai produsen langsung, kami menghilangkan markup distributor dan importir. Anda membayar untuk kualitas material dan keahlian engineering, bukan komisi perantara. Produksi 20% lebih cepat dengan opsi instalasi prioritas 48 jam.",
    bullets: [
      "Harga langsung pabrik — hemat hingga 30%",
      "Waktu produksi 20% lebih cepat dari rata-rata industri",
      "Opsi instalasi prioritas dalam 48 jam",
    ],
    ctaText: "Minta Penawaran",
    ctaHref: "#konsultasi",
    imageAlt: "[Workshop produksi LAF di Bogor]",
    reverse: true,
    icon: <Factory className="h-4 w-4" />,
    images: [
      "/images/workshop/workshop-2.webp",
      "/images/workshop/workshop-3.webp",
      "/images/workshop/workshop-4.webp",
      "/images/workshop/workshop-5.webp",
      "/images/workshop/workshop-6.webp",
      "/images/workshop/workshop-7.webp",
      "/images/workshop/workshop-8.webp",
      "/images/workshop/workshop-9.webp",
    ],
  },
  {
    label: "Garansi 1 Tahun & Purna Jual",
    headline: "Penggantian Filter HEPA, Kalibrasi & Maintenance — Kami Selalu Siap",
    description:
      "Investasi LAF bukan hanya soal pembelian awal. Dengan garansi resmi 1 tahun, layanan purna jual berkelanjutan, ketersediaan suku cadang lokal, dan tim teknisi berpengalaman, performa LAF Anda tetap prima sepanjang masa pakai.",
    bullets: [
      "Garansi resmi 1 tahun & dukungan teknisi",
      "Suku cadang lokal — selalu tersedia, tanpa tunggu impor",
      "Jadwal maintenance preventif & kalibrasi berkala",
    ],
    ctaText: "Jadwalkan Maintenance",
    ctaHref: "#konsultasi",
    imageAlt: "[Teknisi melakukan maintenance LAF]",
    reverse: false,
    icon: <Wrench className="h-4 w-4" />,
    images: [
      "/images/laf/laf-1.webp",
      "/images/laf/laf-2.webp",
      "/images/laf/laf-3.webp",
      "/images/laf/laf-4.webp",
      "/images/laf/laf-5.webp",
      "/images/laf/laf-6.webp",
      "/images/laf/laf-7.webp",
      "/images/laf/laf-8.webp",
      "/images/laf/laf-9.webp",
    ],
  },
];

function ValuePropCard({ item, index }: { item: ValuePropItem; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={index === 0 ? "produk" : undefined}
      className={`relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${
        isEven ? "bg-dot-texture" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Side */}
          <div className={item.reverse ? "lg:order-2" : "lg:order-1"}>
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-b from-[#0ebd9f]/10 to-[#097765]/10 text-[#097765] px-3.5 py-1.5 rounded-lg border border-[#0ebd9f]/25">
              {item.icon}
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] font-[var(--font-stack-sans)]">{item.label}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-5 font-[var(--font-stack-sans)] leading-tight">
              {item.headline}
            </h2>

            <p className="text-sm sm:text-[15px] font-semibold leading-relaxed text-slate-500 mb-6 font-[var(--font-quicksand)]">
              {item.description}
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-b from-[#0ebd9f]/15 to-[#097765]/15 border border-[#0ebd9f]/30 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-[#0ebd9f]" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-slate-600 font-[var(--font-quicksand)]">{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href={item.ctaHref}
              target={item.ctaHref.endsWith('.pdf') ? "_blank" : undefined}
              rel={item.ctaHref.endsWith('.pdf') ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-200 font-[var(--font-quicksand)]"
            >
              {item.ctaText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Image Side */}
          <div className={`relative rounded-2xl bg-slate-50/50 overflow-hidden aspect-[4/3] border border-slate-200/40 flex items-center justify-center ${item.reverse ? "lg:order-1" : "lg:order-2"}`}>
            {item.images ? (
              <Carousel images={item.images} alt={item.imageAlt} />
            ) : (
              <>
                {/* Engineering Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-30 pointer-events-none" 
                  style={{
                    backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
                    backgroundSize: "24px 24px"
                  }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-b from-[#0ebd9f]/10 to-[#097765]/10 border border-[#0ebd9f]/20 flex items-center justify-center text-[#0ebd9f] mb-3">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-extrabold tracking-wide text-slate-600 font-[var(--font-stack-sans)]">
                    Skema &amp; Foto Teknik
                  </span>
                  <span className="text-xs text-slate-400 mt-1.5 font-semibold max-w-[280px] font-[var(--font-quicksand)]">
                    {item.imageAlt}
                  </span>
                </div>
              </>
            )}
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
