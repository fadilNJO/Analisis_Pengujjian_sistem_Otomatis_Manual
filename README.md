# QA Portal Testing Study

> Proyek tugas kelompok untuk latihan Rekayasa Perangkat Lunak dan Quality Assurance. Pengujian hanya dilakukan pada halaman demo publik, dengan frekuensi rendah dan tanpa uji beban, eksploitasi, atau data pribadi.

## Objek studi
- **Nama:** The Internet (QA practice portal)
- **URL:** https://the-internet.herokuapp.com/
- **Jenis:** portal demonstrasi untuk latihan interaksi web dan pengujian perangkat lunak; bukan platform e-learning untuk kegiatan belajar-mengajar.
- **Alasan pemilihan:** aplikasi sengaja menyediakan skenario UI yang dapat diuji publik (misalnya checkbox, dropdown, add/remove elements, dan status codes), dan implementasi sumbernya tersedia secara publik. Karena ini demo komunitas, skala bisnis/pengunjung tidak dapat dinyatakan sebagai angka. Kami mengklasifikasikan skala bisnis sebagai kecil/komunitas berdasarkan sifat proyek, bukan statistik pengunjung.
- **Sumber proyek:** https://github.com/saucelabs/the-internet (pastikan lisensi dan instruksi proyek dibaca sebelum memakai/menyalin source).
- **Batasan:** jangan melakukan load/stress testing, fuzzing, pemindaian kerentanan, upload file berbahaya, penggunaan kredensial nyata, atau tindakan yang mengubah data pengguna lain. Navigasi dan interaksi demo yang ringan saja.

## Ruang lingkup pengujian
1. Manual black-box: perilaku terlihat dari sisi pengguna.
2. Manual white-box: inspeksi kode sumber yang tersedia lokal; tidak menguji/mengakses backend produksi. Hasilnya belum diisi sebelum source revision dan inspeksi benar-benar dilakukan.
3. Otomatis black-box: Playwright dengan sejumlah kecil navigasi/interaksi UI, dijalankan serial.

**Status pelaksanaan:** dokumen dan skrip disiapkan; eksekusi nyata, tanggal/browser, bukti, defect aktual, wawancara, dan hasil white-box masih berstatus `NOT RUN / PENDING`. Tidak ada angka pass rate atau klaim wawancara dibuat tanpa bukti.

## Struktur
- `docs/` — test plan, test cases, standar dan referensi, panduan wawancara.
- `tests/manual/` — lembar pencatatan manual dan white-box.
- `tests/automated/` — Playwright suite dan konfigurasi.
- `reports/` — template dan catatan hasil eksekusi.
- `timeline/` — pembagian kerja kelompok.
- `LAPORAN_LENGKAP_PENGUJIAN_SISTEM.md` — laporan akademik.
- `PRESENTASI_PENGUJIAN_SISTEM.md` — outline presentasi.

## Jalankan automated smoke tests
```bash
cd tests/automated
npm install
npx playwright install chromium
npm test
```
Gunakan hanya untuk beberapa smoke test manual/serial. Jangan jalankan berulang-ulang atau mengubah konfigurasi menjadi tes beban. Pengujian membutuhkan koneksi internet ke target publik dan bisa gagal jika demo tidak tersedia atau berubah.

## Acuan standar (edisi 2022–2026 saja)
- ISO/IEC/IEEE 29119-1:2022 — konsep dan definisi software testing: https://www.iso.org/standard/81015.html
- ISO/IEC 25010:2023 — model kualitas produk perangkat lunak: https://www.iso.org/standard/78176.html

Catatan: Part 1 seri 29119 adalah acuan konsep, bukan klaim bahwa seluruh seri/part dokumentasi telah dipenuhi. Model kualitas dipakai sebagai lensa evaluasi; nilai harus didukung bukti. Standar lengkap berhak cipta, gunakan katalog resmi dan materi berlisensi.

## Referensi riset
- Aurelius, Z. F. J. (2026). “Evaluasi Kualitas Perangkat Lunak dengan Metode Black Box Testing dan System Usability Scale (SUS) pada SIUBER Universitas Palangka Raya.” JITET, 14(1). DOI: https://doi.org/10.23960/jitet.v14i1.8386. Halaman jurnal: https://jurnal.fmipa.unila.ac.id/jitet/article/view/8386. Profil SINTA jurnal (peringkat yang tercantum di profil; cek periode akreditasi artikel): https://sinta.kemdiktisaintek.go.id/journals/profile/4682. **Catatan:** konfirmasi ulang metadata artikel dan periode akreditasi di laman resmi sebelum mengutip sebagai bukti final.
- Referensi ini relevan untuk black-box dan usability, tetapi belum menjadi bukti khusus untuk white-box atau automation. Tambahkan artikel terverifikasi yang memenuhi rentang 2022–2026 dan peringkat SINTA 1–3 sebelum laporan final; jangan mengarang kutipan. Lihat `docs/02_STANDAR_DAN_REFERENSI.md`.

## Kelompok
Nama, NIM, dan pembagian kerja harus diisi oleh anggota kelompok yang sebenarnya di `timeline/PEMBAGIAN_TUGAS.md`. Wawancara hanya dapat dilaporkan setelah narasumber dengan pengalaman QA/testing ≥3 tahun benar-benar diwawancarai dan menyetujui pencatatan.
