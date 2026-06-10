import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Sangat membantu untuk kelancaran pengujian kualitas air harian kami. Material phenolic resin-nya tahan korosi kimia, dan pengerjaan unit Fume Hood <span class='whitespace-nowrap'>(Lemari Asam)</span> ini rapi serta dikirim tepat waktu sesuai spesifikasi pengadaan.",
    author: "Chandra Purnomo",
    role: "Purchasing",
    company: "PDAM Tirta Giri Nata Cirebon",
    logo: "/images/logo-cust/pdam-tirta-giri-nata.png"
  },
  {
    quote: "Konstruksi Fume Hood <span class='whitespace-nowrap'>(Lemari Asam)</span> ini sangat kokoh dan exhaust system-nya bekerja stabil untuk ruang pengujian oli dan kimia pembangkit kami. Safety factor-nya benar-benar memenuhi standar industri.",
    author: "Erfin Budi",
    role: "Engineer",
    company: "PLN Indonesia Power Maintenance Bussiness Unit",
    logo: "/images/logo-cust/pln.png"
  },
  {
    quote: "Daya tahan bodi dan blower centrifugal-nya luar biasa untuk lingkungan operasi air industri kami. Instalasi di lapangan sangat profesional, dan tim after-sales sangat responsif saat jadwal maintenance berkala.",
    author: "Ariantama",
    role: "Site Manager",
    company: "Krakatau Tirta Operasi dan Pemeliharaan",
    logo: "/images/logo-cust/krakatau.png"
  },
  {
    quote: "Sangat andal untuk pengujian sintesis polimer yang menggunakan pelarut organik kuat dan zat asam pekat. Face velocity stabil dan sash door tempered glass memberikan rasa aman optimal bagi peneliti di lab.",
    author: "Dr. Nina Siti Aminah, S.Si., M.Si.",
    role: "Dosen/Peneliti",
    company: "Lab. Polimer FMIPA ITB",
    logo: "/images/logo-cust/itb.png"
  },
  {
    quote: "Tim engineering Haian Lab sangat kooperatif saat kami meminta custom ukuran Fume Hood <span class='whitespace-nowrap'>(Lemari Asam)</span> untuk riset teknologi radioisotop kami. Hasil uji fungsi dan sertifikasi on-site sangat memuaskan.",
    author: "Andru Irvanda",
    role: "Purchasing",
    company: "BRIN - Pusat Riset Teknologi Radioisotop, Radiofarmaka dan Biodosimetri",
    logo: "/images/logo-cust/brin.png"
  },
  {
    quote: "Faktor keamanan adalah prioritas utama untuk lab sekolah kami. Desain kabinetnya rapi, pengoperasian panelnya aman bagi siswa, dan harganya tetap rasional untuk anggaran institusi pendidikan.",
    author: "Rr. Septriwi Antarsari, S.Pd.Ing, MM.",
    role: "Kepala Sekolah",
    company: "SMA Islam Al-Azhar 35",
    logo: "/images/logo-cust/sma-alazhar.png"
  },
  {
    quote: "Sangat merekomendasikan untuk proyek fasilitas gas industri. Unit diselesaikan tepat waktu sesuai timeline proyek kami, dan integrasi exhaust dengan manifold gas di area kerja berfungsi tanpa kendala.",
    author: "Kevin",
    role: "Project Manager",
    company: "Samator Indo Gas Tbk.",
    logo: "/images/logo-cust/samator.png"
  },
  {
    quote: "Praktikum kimia siswa jadi jauh lebih aman dan nyaman. Blower-nya halus tidak bising sehingga suasana kelas tetap kondusif saat guru menyampaikan materi praktikum.",
    author: "Naili Afwillah, M.Pd",
    role: "Guru Cambridge MA Kimia",
    company: "Madrasah Istiqlal Jakarta",
    logo: "/images/logo-cust/madrasah-istiqlal.png"
  },
  {
    quote: "Sebagai supervisor proyek, koordinasi instalasi ducting dan unit dengan tim lapangan Haian Lab berjalan sangat sinkron. Kualitas pengerjaan setara produk impor dengan efisiensi biaya yang nyata.",
    author: "Lingga",
    role: "Project Supervisor",
    company: "Arkadia Sinergi Indonesia",
    logo: "/images/logo-cust/arkadia.png"
  }
];

export default function TestimonialMarquee() {
  const col1 = [testimonials[0], testimonials[1], testimonials[2]];
  const col2 = [testimonials[3], testimonials[4], testimonials[5]];
  const col3 = [testimonials[6], testimonials[7], testimonials[8]];

  const renderCard = (item: typeof testimonials[0], idx: number) => (
    <div
      key={idx}
      className="w-full liquid-glass p-6 sm:p-8 rounded-2xl border-none shadow-lg flex flex-col transition-all duration-300 hover:scale-105"
    >
      {/* Strict Grayscale Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
        ))}
      </div>
      <p
        className="text-white/70 font-normal font-sans mb-6 text-sm sm:text-[15px] italic leading-relaxed"
        dangerouslySetInnerHTML={{ __html: `&ldquo;${item.quote}&rdquo;` }}
      />
      <div className="flex items-center gap-4 mt-auto">
        <div className="h-11 w-11 shrink-0 rounded-full bg-white overflow-hidden flex items-center justify-center border border-white/10 shadow-sm">
          <img
            src={item.logo}
            alt={item.company}
            className="w-full h-full object-contain p-1.5"
          />
        </div>
        <div className="overflow-hidden">
          <div className="font-extrabold text-white text-sm truncate">{item.author}</div>
          <div className="text-[11px] sm:text-xs text-white/50 font-bold truncate">{item.role}</div>
          <div className="text-[10px] sm:text-[11px] text-white/30 font-semibold truncate mt-0.5">{item.company}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-transparent overflow-hidden relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Telah Dipercaya oleh Laboratorium, Universitas &amp; Rumah Sakit Terkemuka
        </h2>
        <p className="text-white/60 font-semibold max-w-2xl mx-auto text-sm sm:text-[15px]">
          Dari laboratorium penelitian kampus hingga pabrik/industri skala besar, kualitas alat dan layanan purna jual kami telah terbukti nyata di lapangan.
        </p>
      </div>

      {/* Grid container with fixed height and CSS mask for seamless scrolling transitions */}
      <div 
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-[510px] overflow-hidden group"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, white 12%, white 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, white 12%, white 88%, transparent)"
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">

          {/* Column 1 (Downward) */}
          <div className="relative h-full overflow-hidden">
            <div className="animate-scroll-down flex flex-col gap-6 hover:[animation-play-state:paused] py-2">
              {[...col1, ...col1].map((item, idx) => renderCard(item, idx))}
            </div>
          </div>

          {/* Column 2 (Upward) */}
          <div className="relative h-full overflow-hidden hidden md:block">
            <div className="animate-scroll-up flex flex-col gap-6 hover:[animation-play-state:paused] py-2">
              {[...col2, ...col2].map((item, idx) => renderCard(item, idx))}
            </div>
          </div>

          {/* Column 3 (Downward) */}
          <div className="relative h-full overflow-hidden hidden md:block">
            <div className="animate-scroll-down flex flex-col gap-6 hover:[animation-play-state:paused] py-2">
              {[...col3, ...col3].map((item, idx) => renderCard(item, idx))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
