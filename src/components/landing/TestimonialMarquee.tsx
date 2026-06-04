import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Produk fumehood dan LAF dari Haian Lab ini kualitasnya sangat bagus. Materialnya kokoh, instalasinya profesional, dan selama pemakaian tidak ada kendala. Recommended untuk lab yang butuh alat berkualitas tinggi.",
    author: "Dr. Ir. Ahmad Fadhil",
    role: "Kepala Laboratorium",
    company: "PT. Arkadia Sinergi Indonesia"
  },
  {
    quote: "Akhirnya nemu pengganti yang pas buat alat lama kami yang sudah belasan tahun. LAF dari Haian Lab sangat membantu riset mahasiswa saya. Kualitasnya jempolan tapi harganya tetap masuk anggaran.",
    author: "Prof. Dr. Budi Santoso",
    role: "Dosen & Peneliti",
    company: "Universitas Negeri Jakarta"
  },
  {
    quote: "Sangat puas dengan performa Laminar Air Flow-nya. Suara blower halus, tidak berisik, dan yang paling penting filter HEPA-nya sudah tersertifikasi. Cocok untuk kultur jaringan.",
    author: "dr. Siti Aisyah, Sp.PK",
    role: "Spesialis Patologi Klinik",
    company: "RS Medika Utama"
  },
  {
    quote: "After-sales servicenya juara. Teknisi datang tepat waktu untuk kalibrasi tahunan dan respons CS sangat cepat saat kami butuh sparepart. Sangat direkomendasikan.",
    author: "Hendra Wijaya",
    role: "Manager Pengadaan",
    company: "PT. BioFarma Lab"
  },
  {
    quote: "Harga jauh lebih bersahabat dibanding produk impor yang biasa kami beli, tapi build quality-nya setara. Kabinet stainless-nya rapi dan sangat mudah dibersihkan.",
    author: "Rina Melati, M.Si",
    role: "Peneliti Senior",
    company: "Lembaga Riset Pangan"
  },
  {
    quote: "Pengiriman cepat dan instalasi dilakukan dengan sangat teliti. Alat berfungsi sempurna untuk pengujian mikrobiologi di lab kami yang menuntut sterilitas tinggi.",
    author: "Dr. Andi Gunawan",
    role: "Kepala UPT Laboratorium",
    company: "Lab Kesda Provinsi"
  },
  {
    quote: "Kami request custom ukuran LAF agar muat di ruangan yang sempit, dan dilayani dengan sangat baik. Tim engineering paham betul kebutuhan spesifik lab kami.",
    author: "drh. Maya Sari",
    role: "Penanggung Jawab Mutu",
    company: "Balai Karantina Hewan"
  },
  {
    quote: "Sudah pakai 3 unit untuk ruang produksi steril kami sejak 2 tahun lalu. Sejauh ini nol kendala. Sangat awet dan material bodinya memang standar industri.",
    author: "Bpk. Kusnadi",
    role: "Plant Manager",
    company: "Pabrik Farmasi Jaya"
  },
  {
    quote: "Desainnya modern dan kontrol panelnya user-friendly. Mahasiswa sangat mudah menggunakannya untuk praktikum tanpa harus dituntun terus menerus.",
    author: "Prof. Linda Wijayanti",
    role: "Dekan Fakultas Farmasi",
    company: "Fakultas Farmasi UI"
  },
  {
    quote: "Kebersihan area kerja sangat terjamin. Sertifikat filter lengkap dan hasil tes particle counter selalu memuaskan saat inspeksi kelayakan klinik.",
    author: "Agung Setiawan",
    role: "Direktur Operasional",
    company: "Klinik Fertilitas Harapan"
  }
];

export default function TestimonialMarquee() {
  const col1 = [testimonials[0], testimonials[1], testimonials[2], testimonials[3]];
  const col2 = [testimonials[4], testimonials[5], testimonials[6], testimonials[7]];
  const col3 = [testimonials[8], testimonials[9], testimonials[0], testimonials[1]];

  const renderCard = (item: typeof testimonials[0], idx: number) => (
    <div 
      key={idx} 
      className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col transition-all duration-300 hover:shadow-lg hover:border-[#34d399]/50 hover:-translate-y-1"
    >
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-600 font-semibold font-sans mb-6 text-sm sm:text-[15px] italic leading-relaxed">
        "{item.quote}"
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="h-11 w-11 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-extrabold font-stack-sans text-lg">
          {item.author.charAt(0)}
        </div>
        <div className="overflow-hidden">
          <div className="font-extrabold text-slate-900 font-stack-sans text-sm truncate">{item.author}</div>
          <div className="text-[11px] sm:text-xs text-slate-500 font-bold font-sans truncate">{item.role}, {item.company}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-50/50 overflow-hidden relative border-y border-slate-200/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-stack-sans mb-4">
          Telah Dipercaya oleh Laboratorium, Universitas &amp; Rumah Sakit Terkemuka
        </h2>
        <p className="text-slate-500 font-semibold font-sans max-w-2xl mx-auto text-sm sm:text-[15px]">
          Dari laboratorium penelitian kampus hingga pabrik farmasi skala besar, kualitas alat dan layanan purna jual kami telah terbukti nyata di lapangan.
        </p>
      </div>

      {/* Grid container with fixed height */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-[510px] overflow-hidden group">
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

        {/* Top and Bottom gradient fades for smooth cutoffs */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50/90 via-slate-50/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50/90 via-slate-50/50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
