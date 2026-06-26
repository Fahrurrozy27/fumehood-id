# 📝 FumeHood.id - Development Logs & Roadmap

Dokumen ini mencatat riwayat perubahan berkas (*changelog*), status proyek saat ini, sisa tugas (*to-do list*), serta panduan kerja bagi AI atau pengembang berikutnya agar pengembangan dapat dilanjutkan secara efisien tanpa membuang-buang token.

---

## 1. Riwayat Perubahan Terbaru (Changelog)

### Perubahan Lokal Terbaru (Developer Update - 2026-06-27)
* **Integrasi Pengiriman Lead ke Telegram Bot & Google Sheets:**
  * Membuat API route baru [route.ts](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/app/api/send-lead/route.ts) (`/api/send-lead`) yang menerima POST request dan mengirim data lead ke **Telegram Bot** (`@dataformhaian_bot` di grup `DATA FORM HAIAN`) dan **Google Spreadsheet** secara paralel menggunakan `Promise.allSettled()`.
  * Menambahkan fire-and-forget `fetch('/api/send-lead', ...)` di handler submit [HeroSection.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/components/landing/HeroSection.tsx) (source: `Form Lead — FumeHood.id`) dan [GatedDownloadModal.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/components/landing/GatedDownloadModal.tsx) (source: `Form Brosur — FumeHood.id`).
  * Membuat [.env.local](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/.env.local) untuk menyimpan token Telegram dan URL Google Sheets (server-only, tidak terexpose ke client).
  * Membuat [.env.example](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/.env.example) sebagai referensi placeholder untuk developer lain.
  * Menambahkan exception `!.env.example` di [.gitignore](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/.gitignore) agar file referensi tetap masuk Git.
* **Pemasangan Google Tag Manager (GTM):**
  * Memasang skrip GTM (`GTM-KLPLVLNP`) pada `<head>` dan `<noscript>` di awal tag `<body>` di [layout.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/app/layout.tsx) untuk pelacakan analitik dan konversi.
* **Update Favicon:**
  * Mengubah ikon favicon dari `/favicon.ico` menjadi `/favicon.png` pada metadata [layout.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/app/layout.tsx).
* **Alur Redirect & Deteksi GTM Halaman Terima Kasih:**
  * Memodifikasi halaman [terimakasih/page.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/app/terimakasih/page.tsx) agar menampilkan countdown selama 2 detik sebelum otomatis dialihkan (*redirect*) ke link chat WhatsApp yang sesuai. Hal ini memastikan halaman terima kasih terekam penuh oleh GTM sebelum redirect dilakukan.
  * Mengubah pengiriman form di [HeroSection.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/components/landing/HeroSection.tsx) agar mengalihkan jendela utama langsung ke `/terimakasih?source=lead&nama=...` (membawa data lewat parameter URL).
  * Mengubah tombol WhatsApp di [Navbar.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/components/landing/Navbar.tsx), [WhatsAppFloating.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/components/landing/WhatsAppFloating.tsx), dan [FinalCTA.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/components/landing/FinalCTA.tsx) agar mengarah ke halaman terima kasih `/terimakasih?source=direct_wa`.
* **Pembaruan Modal Unduhan Brosur (`GatedDownloadModal.tsx`):**
  * Menyelaraskan form input agar meminta tiga data: Nama Lengkap, No. HP / WhatsApp, dan Institusi / Perusahaan.
  * Menambahkan sistem multi-step: Setelah mengisi form, pengguna ditunjukkan Step 2 dengan opsi:
    1. Tombol **Unduh Brosur (PDF)**: Mengunduh file `/public/katalog-spek-fh.pdf` secara instan tanpa berpindah halaman.
    2. Tombol **Hubungi Admin via WhatsApp**: Mengalihkan ke halaman terima kasih `/terimakasih?source=brochure_wa&nama=...` untuk melakukan chat konsultasi.

### Riwayat Commit Git Sebelumnya
Berikut adalah riwayat perubahan kode resmi sebelum pembaruan lokal:

1. **Commit 508a309944994cde593bc2977a42f6fbdd404817 (2026-06-24)**
   * **Deskripsi:** *Update gallery and wiki glossary with new optimized WebP photos.*
   * **Detail:** Mengganti foto-foto lama berukuran besar dengan format `.webp` yang telah terkompresi di bawah folder `/public/images/` untuk mempercepat pemuatan halaman.

2. **Commit b5dcc9dfdd500165c45a8d64dbc32289dfa2c5dd (2026-06-10)**
   * **Deskripsi:** *feat: optimize UX and CRO, fix mobile comparison table and glossary tooltips, implement gated brochure downloads with WhatsApp redirection, and update testimonial logos.*
   * **Detail:** Menambahkan efek form shake/glow, optimasi tabel & glossary mobile, dan implementasi popup unduhan brosur.

3. **Commit eaf45c915332c535477a6a6d3499a30b743995aa (2026-06-04)**
   * **Deskripsi:** *Initial commit - Laminar Air Flow landing page.*
   * **Detail:** Pembuatan boilerplate Next.js awal yang mulanya ditujukan untuk produk Laminar Air Flow.

---

## 2. Catatan Khusus Codebase (Developer Notes)

### ⚠️ Berkas Tidak Terpakai (Deprecations / Unused Code)
* **`ShaderBackground.tsx` & `ShaderWrapper.tsx`:** Kedua berkas ini berada di `src/components/landing/` tetapi **tidak diimpor** di halaman utama (`src/app/page.tsx`). Berkas ini merupakan sisa rancangan bertema putih (*light theme*) dengan latar belakang dinamis WebGL. Saat ini, halaman utama menggunakan video background (`molecule-bg.mp4`) di atas latar gelap (`bg-slate-950`).
* **Rekomendasi:** Jika ingin menghemat ukuran bundle, berkas ini bisa dihapus dengan aman. Namun jika ingin beralih kembali ke Light Theme Shader, bungkus elemen `main` pada `src/app/page.tsx` menggunakan `<ShaderWrapper>`.

### 📞 Lokasi Konfigurasi Kontak WhatsApp
Nomor WhatsApp tujuan lead diarahkan ke nomor sales admin: `6281290864275` (Format internasional tanpa tanda `+`).
Jika nomor admin WhatsApp ingin diganti di kemudian hari, Anda **wajib** mengubahnya pada berkas-berkas berikut:
1. `src/components/landing/Navbar.tsx` (baris #38 & #145)
2. `src/components/landing/HeroSection.tsx` (baris #12)
3. `src/components/landing/GatedDownloadModal.tsx` (baris #28)
4. `src/components/landing/WhatsAppFloating.tsx` (baris #15 & #43)

### 🛠️ Mengubah / Menambah Istilah Glosarium (Glossary)
Jika ingin menambahkan istilah teknis baru yang otomatis memiliki tooltip dan drawer ala Wikipedia:
1. Buka berkas [WikiGlossary.tsx](file:///c:/Users/USER-PC/OneDrive/Dokumen/Fumehood/src/components/landing/WikiGlossary.tsx).
2. Tambahkan entri baru di dalam objek `GLOSSARY` dengan struktur:
   ```typescript
   kunci_istilah: {
     title: "Nama Istilah",
     description: "Definisi teknis istilah secara singkat.",
     image: "/images/glossary/nama-file.webp"
   }
   ```
3. Tambahkan alias variasi kata di dalam objek `ALIASES` agar pencarian tidak sensitif terhadap huruf kapital atau tanda hubung.
4. Pada teks komponen UI lain, bungkus kata tersebut dengan format:
   ```html
   <span class="wiki-term" data-term="kunci_istilah">Teks Yang Ingin Ditampilkan</span>
   ```

---

## 3. Daftar Tugas & Pengembangan Mendatang (To-Do / Roadmap)

- [ ] **Pembersihan Kode (Cleanup):** Menghapus berkas `ShaderWrapper.tsx` dan `ShaderBackground.tsx` jika dipastikan desain dark theme permanen.
- [ ] **Validasi Link Unduhan Brosur:** Memastikan file `/public/katalog-spek-fh.pdf` selalu up-to-date dengan brosur fisik terbaru dari tim sales.
- [ ] **Integrasi Analitik (Optional):** Memasang tracker event Google Analytics atau Facebook Pixel ketika form disubmit atau tombol WhatsApp diklik (sangat berguna untuk melacak ROI iklan).
- [ ] **Optimasi Performa Gambar:** Memeriksa direktori `/galeri-fumehood` dan folder galeri lainnya yang masih memiliki ekstensi `.JPG` berukuran megabyte agar dikonversi penuh ke WebP.

---

## 4. Panduan Perintah Kerja (Command Guide)

Untuk menjalankan, mengetes, dan memvalidasi proyek ini secara lokal:

```bash
# 1. Instalasi dependensi (jika belum dilakukan)
npm install

# 2. Menjalankan server pengembangan (local development)
npm run dev

# 3. Menjalankan linter untuk memeriksa standar penulisan kode
npm run lint

# 4. Melakukan kompilasi build produksi (sangat disarankan sebelum deploy)
npm run build
```
