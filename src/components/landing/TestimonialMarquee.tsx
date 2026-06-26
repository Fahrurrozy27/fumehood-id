import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Fume hood nya udh kepasang rapi gan di lab air pdam. Phenolic worktopnya mantap tebel, pengerjaan mulus. Pengiriman jg ontime sesuai jadwal PO kemaren. Makasih ya.",
    author: "Chandra Purnomo",
    role: "Purchasing",
    company: "PDAM Tirta Giri Nata Cirebon",
    logo: "/images/logo-cust/pdam-tirta-giri-nata.webp"
  },
  {
    quote: "Exhaust system lemari asamnya jalan kenceng dan stabil mas, aman bgt buat nguji oli & kimia pembangkit. Fisik unitnya jg kokoh, safety factor pas bgt sesuai spek safety PLN IP. Sukses trus Haian.",
    author: "Erfin Budi",
    role: "Engineer",
    company: "PLN Indonesia Power Maintenance Bussiness Unit",
    logo: "/images/logo-cust/pln.webp"
  },
  {
    quote: "Blower centrifugal PP nya juara bos, tahan bgt sm uap asam air industri krakatau. Pemasangan di site jg rapi & cepet. Kemarin minta cek maintenance berkala jg tim aftersales lgsg dtg. Mantapp.",
    author: "Ariantama",
    role: "Site Manager",
    company: "Krakatau Tirta Operasi dan Pemeliharaan",
    logo: "/images/logo-cust/krakatau.webp"
  },
  {
    quote: "Alhamdulillah lemari asamnya sangat membantu untuk riset polimer di ITB. Daya hisapnya stabil jd uap pelarut organik sm asam pekat ga bocor. Kaca tempered nya jg tebel, mahasiswa jd merasa aman pas praktikum.",
    author: "Dr. Nina Siti Aminah, S.Si., M.Si.",
    role: "Dosen/Peneliti",
    company: "Lab. Polimer FMIPA ITB",
    logo: "/images/logo-cust/itb.webp"
  },
  {
    quote: "Custom ukuran lemari asam kemarin pas bgt sama ruang lab BRIN yg agak sempit. Tim engineeringnya kooperatif bgt diajak diskusi CAD. Smoke test sm face velocity test jg lolos di lokasi. Rekomendasi.",
    author: "Andru Irvanda",
    role: "Purchasing",
    company: "BRIN - Pusat Riset Teknologi Radioisotop, Radiofarmaka dan Biodosimetri",
    logo: "/images/logo-cust/brin.webp"
  },
  {
    quote: "Lemari asamnya rapi dan aman bgt buat anak-anak sekolah. Harganya jg bersahabat bgt sm budget yayasan Al-Azhar, ga dimarkup mahal kayak impor. Pelayanan adminnya ramah pol.",
    author: "Rr. Septriwi Antarsari, S.Pd.Ing, MM.",
    role: "Kepala Sekolah",
    company: "SMA Islam Al-Azhar 35",
    logo: "/images/logo-cust/sma-alazhar.webp"
  },
  {
    quote: "Pengiriman unit ke site Samator gas ontime sesuai schedule PM mas. Pemasangan ducting & sambungan exhaust gas lancar jaya, ga ada kendala pas ditest. Proyek lancar, trims buat kerjasamanya.",
    author: "Kevin",
    role: "Project Manager",
    company: "Samator Indo Gas Tbk.",
    logo: "/images/logo-cust/samator.webp"
  },
  {
    quote: "Alhamdulillah lemari asam barunya udh dipake praktek kimia. Suara blowernya ga bising mba, jd kelas tetep tenang pas guru jelasin materi. Praktikum jd aman bgt sekarang.",
    author: "Naili Afwillah, M.Pd",
    role: "Guru Cambridge MA Kimia",
    company: "Madrasah Istiqlal Jakarta",
    logo: "/images/logo-cust/madrasah-istiqlal.webp"
  },
  {
    quote: "Instalasi ducting & unit lemari asam sinkron bgt sm lapangan mas. Koordinasinya gampang, ga ribet. Kualitas barang mantap mirip impor tp dapet harga lokal bogor. Nanti ada proyek lg sy hubungi ya.",
    author: "Lingga",
    role: "Project Supervisor",
    company: "Arkadia Sinergi Indonesia",
    logo: "/images/logo-cust/arkadia.webp"
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
