# 📌 FumeHood.id - Master Architecture & Technical Blueprint

Dokumen ini berisi rangkuman teknis lengkap (A-Z) mengenai struktur, arsitektur, teknologi, dan interaktivitas website **FumeHood.id**. Tujuannya adalah agar AI lain atau pengembang baru dapat langsung memahami seluruh aspek sistem ini tanpa harus membaca seluruh berkas kode sumber secara berulang-ulang.

---

## 1. Ringkasan Proyek (Project Overview)
* **Nama Bisnis:** FumeHood.id (di bawah PT. Haian Saintika Eltanindo).
* **Domain Utama:** `https://fumehood.id` (atau produsen langsung di `https://www.haianlab.com`).
* **Produk Utama:** Fume Hood (Lemari Asam) lokal kualitas premium yang mengacu pada standar internasional **SEFA** (Scientific Equipment and Furniture Association), dilengkapi dengan Blower PP Centrifugal tahan uap kimia pekat.
* **Tujuan Website:** Landing page dengan konversi tinggi (Conversion Rate Optimization / CRO) untuk pengadaan alat laboratorium secara langsung dari pabrik (tanpa markup distributor).

---

## 2. Spesifikasi Teknologi (Technology Stack)
* **Core Framework:** Next.js v16.2.6 (App Router) & React v19.2.4.
* **Bahasa Pemrograman:** TypeScript (konfigurasi di `tsconfig.json`).
* **Styling & CSS:** Tailwind CSS v4 (menggunakan format `@import "tailwindcss";` & `@theme` baru di `globals.css`).
* **Icons:** `lucide-react` v1.16.0.
* **Image Optimization:** `sharp` v0.34.5 (untuk rendering Next.js `Image` berkinerja tinggi).
* **Integrasi Tambahan:** `shaders` v2.5.128 & `hls.js` v1.6.16 (tersedia di dependensi namun tidak aktif di halaman utama).

---

## 3. Struktur Direktori Utama
Berikut adalah peta berkas dan folder penting dalam proyek ini:

```
📁 fumehood-id/
├── 📁 public/                 # Aset statis public
│   ├── 📄 katalog-spek-fh.pdf # File brosur spesifikasi teknis untuk diunduh
│   ├── 📄 molecule-bg.mp4     # Video background utama (gelap)
│   └── 📁 images/             # Gambar static & glossary (WebP)
├── 📁 src/
│   ├── 📁 app/                # Next.js App Router
│   │   ├── 📄 layout.tsx      # Root Layout (mengandung metadata SEO & schema JSON-LD)
│   │   ├── 📄 page.tsx        # Halaman utama landing page (Home)
│   │   ├── 📄 globals.css     # Gaya CSS, Font Poppins, & utilitas Liquid Glass
│   │   └── 📁 terimakasih/
│   │       └── 📄 page.tsx    # Halaman sukses setelah lead/download (/terimakasih)
│   └── 📁 components/         # Komponen UI modular
│       └── 📁 landing/        # Seluruh komponen penyusun Landing Page
```

---

## 4. Rincian Komponen Landing Page (`src/components/landing/`)
Landing page dibagun secara modular dengan membagi seksi menjadi komponen-komponen tersendiri:

1. **`Navbar.tsx`**: Header lengkung yang melayang (*sticky navbar*) dengan *glassmorphism*. Memiliki pendeteksi latar belakang dinamis (*scroll background detection*) untuk menyesuaikan estetika visual di layar.
2. **`HeroSection.tsx`**: Area utama di atas lipatan (*above-the-fold*) berisi value proposition, poin keunggulan utama, tombol CTA cepat, dan Form Pengambilan Lead.
3. **`ProblemSection.tsx`**: Penjelasan perbandingan visual masalah klasik Fume Hood impor (mahal, indent 3-4 bulan, sparepart langka) vs solusi lokal dari Haian Lab.
4. **`HowItWorks.tsx`**: Alur kerja transaksi sistematis dalam 5 tahap: (1) Permintaan & Penawaran, (2) Konsultasi & Desain, (3) Produksi, (4) Pengiriman & Instalasi, (5) Uji Fungsi & Serah Terima.
5. **`ValuePropSection.tsx` / `ValuePropCard`**: Tiga seksi detail keunggulan produk (Proteksi SEFA, Harga Langsung Pabrik, Layanan Purna Jual) terintegrasi dengan Carousel gambar.
6. **`Carousel.tsx`**: Slider gambar dengan transisi halus, mendukung auto-play dengan tombol Play/Pause, dot indicator, dan kontrol swipe untuk perangkat seluler.
7. **`ComparisonTable.tsx`**: Tabel perbandingan fitur detail antara Haian Lab dengan importir A/B serta kompetitor lokal C/D.
8. **`TestimonialMarquee.tsx`**: Galeri testimoni pelanggan asli (PDAM, PLN, Krakatau Tirta, ITB, BRIN, Al-Azhar, Samator) dalam bentuk grid 3 kolom yang bergulir vertikal secara otomatis dengan efek arah berlawanan (*scroll-up* & *scroll-down*).
9. **`FAQSection.tsx`**: Accordion tanya jawab interaktif seputar produksi, standar SEFA, sistem filtrasi, kustomisasi ukuran, dan garansi.
10. **`FinalCTA.tsx`**: Tombol ajakan bertindak penutup di bagian bawah halaman sebelum footer.
11. **`Footer.tsx`**: Bagian kaki halaman dengan info alamat lengkap pabrik di Bogor, peta lokasi, navigasi cepat, dan hak cipta.
12. **`WhatsAppFloating.tsx`**: Tombol melayang WhatsApp di pojok kanan bawah dengan efek notifikasi berdenyut untuk memancing chat langsung.
13. **`WikiGlossary.tsx`**: Layanan *Glossary* interaktif ala Wikipedia untuk definisi istilah teknis (`blower`, `sash`, `sefa`, `smoke-test`, `ducting`).
14. **`GatedDownloadModal.tsx`**: Modal popup untuk mengunduh brosur spesifikasi teknis setelah pengguna mengisi Nama & Institusi.

---

## 5. Logika Interaktivitas & Sistem Khusus

### A. Aliran Leads & Pengumpulan Kontak (Lead Generation Funnel)
Seluruh tombol kontak dan pengisian form diarahkan untuk menggunakan **WhatsApp** sebagai backend instan. Selain itu, setiap form submit juga mengirim data lead secara **fire-and-forget** ke **Telegram Bot** (`@dataformhaian_bot`) dan **Google Spreadsheet** melalui API endpoint `/api/send-lead` (server-side route handler):
1. **Form Lead (`HeroSection.tsx`)**: Pengguna memasukkan Nama, No. HP/WA, dan Instansi. Saat submit, data dikirim secara paralel ke Telegram & Google Sheets (source: `Form Lead — FumeHood.id`), kemudian jendela utama dialihkan ke `/terimakasih?source=lead` untuk countdown dan redirect ke WhatsApp.
2. **Gated Brochure Download (`GatedDownloadModal.tsx` & `/terimakasih`)**: 
   * Tombol brosur memicu fungsi global `window.triggerBrochureModal()`.
   * Form meminta Nama, No. HP/WA, & Institusi. Saat submit, data dikirim secara paralel ke Telegram & Google Sheets (source: `Form Brosur — FumeHood.id`), lalu modal melanjutkan ke Step 2 (opsi unduh PDF atau hubungi admin via WhatsApp).
   * Halaman `/terimakasih` mendeteksi parameter query `source=brochure_wa`, dan mengarahkan ke WhatsApp setelah countdown.
3. **API Endpoint (`/api/send-lead`)**: Route handler server-side di `src/app/api/send-lead/route.ts` yang menerima POST JSON (`nama`, `phone`, `institusi`, `source`), mengirim ke Telegram (format HTML) dan Google Sheets secara paralel dengan `Promise.allSettled()`. Token disimpan di `.env.local` (tidak terexpose ke browser).

### B. Wikipedia-Style Glossary Tooltip & Drawer (`WikiGlossary.tsx`)
Komponen ini mendengarkan event hover/click secara global pada elemen dengan kelas CSS `.wiki-term`:
* **Desktop (Hover):** Menampilkan tooltip melayang yang dinamis di atas/bawah teks dengan pointer panah yang sejajar kursor. Dilengkapi dengan judul istilah, deskripsi teknis, dan gambar visual (WebP).
* **Mobile (Click):** Menampilkan *bottom drawer* yang muncul dari bawah layar dengan efek overlay latar belakang gelap untuk mempermudah pembacaan pada layar kecil.
* **Aliasing:** Istilah pemetaan otomatis mendukung alias seperti `face-velocity` -> `smoke-test` atau `blower-centrifugal-pp` -> `blower`.

### C. Efek Sorotan Form (`window.triggerFormHighlight`)
Untuk mempermudah konversi, klik tombol "Konsultasi Gratis" di Navbar atau tombol CTA lainnya akan memicu fungsi global `window.triggerFormHighlight()`. Fungsi ini akan:
1. Melakukan *smooth scroll* kembali ke puncak halaman (posisi form berada).
2. Memberikan animasi getar (*shake animation*) pada kartu form selama 0.6 detik.
3. Memberikan efek cahaya hijau berpendar (*green glow highlight*) selama 1.5 detik.
4. Memindahkan fokus kursor langsung ke kolom input pertama ("Nama Lengkap").

### D. Pendeteksi Tema Dinamis (`Navbar.tsx`)
* Saat pengguna melakukan scroll halaman, kode akan memeriksa elemen DOM tepat di bawah navbar (`document.elementFromPoint`).
* Jika navbar mendeteksi elemen di bawahnya memiliki kelas latar belakang gelap (`bg-slate-950`, `bg-black`, dll.), ia akan menyesuaikan skema warna teks dan efek glassmorphism agar konten menu tetap terbaca dengan kontras sempurna.

---

## 6. Desain Visual & Sistem Gaya (Styling System)
Desain website bertema **Premium Dark Theme** dengan aksen warna **Teal/Emerald** yang melambangkan nuansa sains/laboratorium higienis.

* **Tipografi:** Menggunakan Google Fonts **Poppins** (sans-serif) sebagai font utama dan **Source Serif 4** (serif) untuk variasi judul tertentu.
* **Liquid Glass (Glassmorphism):** Didefinisikan di `globals.css` menggunakan properti CSS `backdrop-filter: blur(...)`:
  * `.liquid-glass`: Transparansi tipis dengan border putih tipis (`rgba(255,255,255,0.08)`).
  * `.liquid-glass-strong`: Latar belakang gelap slate transparan tebal untuk kontras kartu form dan tabel.
  * `.btn-liquid-glass-cta` / `.btn-liquid-glass-cta-primary`: Tombol glassmorphism dengan efek transisi transparan hijau/abu-abu saat kursor melayang (*hover*).
* **Video Background:** Menggunakan pemutar video loop bisu (`/molecule-bg.mp4`) di latar belakang halaman yang dilapisi gradien gelap ke hijau tua (`#01251e`) untuk menjaga kenyamanan pembacaan teks putih di atasnya.

---

## 7. Optimasi SEO & Metadata
* **SEO Terintegrasi (`layout.tsx`):** Mendefinisikan Title, Meta Description, Keywords, OpenGraph (locale `id_ID`), dan Twitter Card yang kaya akan kata kunci pengadaan lemari asam laboratorium standar SEFA di Indonesia.
* **JSON-LD Schema Markup:** Skema terstruktur disuntikkan langsung di `<head>` untuk mesin pencari:
  1. `LocalBusiness` (`PT. Haian Saintika Eltanindo`) beserta alamat lengkap di Bogor, nomor telepon, dan jam buka.
  2. `Product` (`Fume Hood Lemari Asam`) dengan spesifikasi pabrikan dan agregasi penawaran IDR.
* **Sitemap & Robots:** Di-generate secara dinamis via Next.js (`sitemap.ts` & `robots.ts`).
