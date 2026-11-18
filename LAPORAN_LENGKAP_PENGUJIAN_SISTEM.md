# LAPORAN LENGKAP PENGUJIAN SISTEM (DRAF)

## Judul
**Perencanaan dan Pengujian Portal The Internet dengan Pendekatan Manual Black-box, White-box Source Review, dan Automated Smoke Testing**

## Identitas
- Mata kuliah/kelas: `PENDING`
- Institusi: `PENDING`
- Tahun akademik: `PENDING`
- Anggota/NIM: lihat `timeline/PEMBAGIAN_TUGAS.md`
- Status laporan: DRAF — pengujian dan wawancara belum dieksekusi.

## Ringkasan
Dokumen ini merancang pengujian aman terhadap portal demo publik The Internet. Acuan standar edisi 2022–2026 yang dipakai adalah ISO/IEC/IEEE 29119-1:2022 untuk konsep testing dan ISO/IEC 25010:2023 untuk model kualitas produk. Aktivitas dibagi menjadi manual black-box, manual white-box terhadap source lokal yang revision-nya dicatat, dan automated black-box smoke tests. Sampai laporan ini ditulis, eksekusi, review source, wawancara, dan hasil belum dilakukan; karena itu tidak ada klaim pass rate, defect, kualitas skor, atau wawancara.

## BAB I — Pendahuluan
### 1.1 Latar belakang
Pengujian diperlukan untuk memeriksa kesesuaian perilaku aplikasi dengan ekspektasi serta mencatat bukti secara terstruktur. Portal QA demo dipilih karena menawarkan elemen UI yang dapat diamati tanpa akun, pembayaran, atau data riil.

### 1.2 Identifikasi masalah
1. Apakah fitur demo yang dipilih berperilaku sesuai ekspektasi yang diturunkan dari UI?
2. Bagaimana mengombinasikan uji manual dan otomasi secara hemat risiko terhadap layanan publik?
3. Bagaimana memisahkan observasi black-box dari analisis source white-box?

### 1.3 Batasan
Target https://the-internet.herokuapp.com/. Pengujian dibatasi pada navigasi dan latihan UI publik. Tidak ada load/stress test, vulnerability scanning, eksploitasi, brute-force, atau data pribadi. White-box hanya terhadap source lokal yang diperoleh secara sah; tidak ada akses internal ke server produksi.

### 1.4 Tujuan
Menyusun test plan, menjalankan test case manual dan otomatis yang aman, mendokumentasikan temuan yang bisa direproduksi, meninjau source lokal bila tersedia, dan mendapatkan perspektif praktisi QA setelah wawancara berizin.

## BAB II — Landasan dan acuan
### 2.1 ISO/IEC/IEEE 29119-1:2022
Edisi ini menjadi referensi konsep dan definisi pengujian. Scope acuan sengaja dibatasi pada edisi dalam rentang 2022–2026. Artefak test plan dan laporan di repo ini adalah format kerja tim, bukan sertifikasi atau klaim pemenuhan seluruh seri ISO 29119.

### 2.2 ISO/IEC 25010:2023
Model kualitas produk digunakan untuk memilih dimensi pengamatan: functional suitability, interaction capability/usability, reliability, performance efficiency, dan compatibility. Aspek yang tidak diuji tidak diberi nilai.

### 2.3 Alasan metode
- **Black-box manual:** target publik tanpa akses ke internal; cocok untuk menguji alur yang tampak bagi pengguna.
- **White-box manual:** melengkapi black-box dengan penelusuran kondisi/handler source lokal. Memerlukan source code dan revision yang jelas; tidak dapat disimpulkan dari UI saja.
- **Automation black-box:** smoke check berulang untuk fitur stabil sederhana; suite kecil, serial, tanpa beban tinggi. Tidak menggantikan exploratory/manual testing.
- **Equivalence partitioning/state transition:** berguna untuk membatasi variasi input dan perubahan state. Kasus yang disusun saat ini terutama pemeriksaan transisi, bukan klaim cakupan lengkap.

### 2.4 Tinjauan pustaka dan SINTA
Lihat `docs/02_STANDAR_DAN_REFERENSI.md`. Artikel JITET 2026 tercatat sebagai kandidat yang relevan untuk black-box/usability, dengan tautan DOI, laman artikel, dan profil SINTA; verifikasi ulang metadata dan periode akreditasi sebelum naskah final. Artikel yang tidak masuk SINTA 1–3 dinyatakan tidak memenuhi filter. Kutipan langsung belum disertakan karena naskah full-text belum diverifikasi kata demi kata. Tambahkan minimal satu/lebih artikel SINTA 1–3 yang benar-benar memenuhi tahun 2022–2026 sebelum submit.

## BAB III — Metodologi
### 3.1 Profil objek
The Internet adalah portal latihan testing publik di `https://the-internet.herokuapp.com/`. URL source yang dirujuk: `https://github.com/saucelabs/the-internet`. Ukuran trafik, jumlah pengguna dan omzet tidak diketahui. Klasifikasi kecil/komunitas mengacu sifat demo/source project, bukan bukti trafik. Portal ini bukan e-learning; jika tugas mewajibkan LMS, ganti target setelah persetujuan dan revisi scope.

### 3.2 Tahapan
1. Identifikasi target, batas aman, dan fitur.
2. Susun kasus dan expected result.
3. Catat environment/revision.
4. Eksekusi black-box manual.
5. Eksekusi white-box review lokal jika source tersedia.
6. Jalankan Playwright smoke suite secara serial.
7. Laporkan defect yang terverifikasi dan retest.
8. Wawancara praktisi QA berpengalaman ≥3 tahun dengan persetujuan.
9. Tinjau silang dan simpulkan dengan keterbatasan.

### 3.3 Test cases
Detail BB-01–BB-08 serta WB-01–WB-05 di `docs/03_TEST_CASES.md`. Hasil dicatat di `tests/manual/TEST_EXECUTION.md` dan `tests/manual/WHITE_BOX_REVIEW.md`.

### 3.4 Automation
Playwright suite di `tests/automated/`. Lima smoke cases mencakup homepage, checkbox, dropdown, add/remove element, dan status-code page. Konfigurasi satu worker, timeout terbatas, tidak ada loop beban. Suite perlu dijalankan dari lingkungan pengguna; hasil belum tersedia.

### 3.5 Wawancara
Kriteria dan pertanyaan tersedia di `docs/04_PEDOMAN_WAWANCARA_QA.md`. Belum ada narasumber yang dihubungi/diwawancarai.

## BAB IV — Hasil dan pembahasan
### 4.1 Manual black-box
Status: belum dijalankan. Laporan case-by-case masih `NOT RUN`; tidak dihitung pass rate.

### 4.2 Manual white-box
Status: belum dijalankan. Source revision dan hasil inspeksi belum dicatat. Tidak ada klaim tentang implementasi internal.

### 4.3 Automated testing
Status: skrip telah ditulis, belum dieksekusi. Lihat `reports/AUTOMATED_TEST_REPORT.md`. Tidak ada hasil pass/fail yang boleh disimpulkan sebelum menjalankan suite.

### 4.4 Defect
Belum ada defect terverifikasi. Gunakan `reports/DEFECT_LOG.md`; jangan menambah dugaan sebagai temuan aktual.

### 4.5 Evaluasi kualitas
Belum ada skor ISO/IEC 25010. Setelah eksekusi, laporkan hanya atribut yang punya bukti, metode, ukuran sampel, dan keterbatasan. Kecepatan satu kali akses bukan bukti performa umum atau load capacity.

### 4.6 Wawancara
Belum dilakukan. Tidak ada kutipan atau kesimpulan narasumber.

## BAB V — Kesimpulan dan tindak lanjut
### 5.1 Kesimpulan sementara
Repo menyiapkan rancangan pengujian yang aman dan dapat direproduksi untuk portal demo QA. Belum cukup bukti untuk menyimpulkan kualitas aktual target.

### 5.2 Pekerjaan sebelum final
- Jalankan dan dokumentasikan seluruh kasus yang feasible.
- Catat tanggal, browser, OS, jaringan dan bukti.
- Selesaikan source review lokal atau tandai keterbatasan.
- Verifikasi artikel SINTA 1–3 sesuai tahun terbit; baca full text dan kutip akurat dengan halaman.
- Wawancarai tester/QA dengan pengalaman ≥3 tahun setelah persetujuan.
- Isi nama kelompok dan pembagian kerja.
- Perbarui semua `PENDING` dan minta peer review.

## Daftar sumber
1. ISO, ISO/IEC/IEEE 29119-1:2022: https://www.iso.org/standard/81015.html
2. ISO, ISO/IEC 25010:2023: https://www.iso.org/standard/78176.html
3. JITET candidate article DOI: https://doi.org/10.23960/jitet.v14i1.8386 (metadata/SINTA period must be confirmed before final citation).
4. Portal target: https://the-internet.herokuapp.com/
5. Source project reference: https://github.com/saucelabs/the-internet
