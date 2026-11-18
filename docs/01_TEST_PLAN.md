# 01 — Test Plan

## 1. Tujuan
Merencanakan pengujian fungsional dan kualitas dasar portal The Internet melalui observasi UI publik, inspeksi source code lokal bila tersedia, dan smoke-test otomatis ringan. Tujuan bukan mengaudit keamanan atau menguji kapasitas produksi.

## 2. Identifikasi target
- URL target: https://the-internet.herokuapp.com/
- Sifat: aplikasi demo/latihan QA publik, bukan LMS.
- Source code yang dirujuk: https://github.com/saucelabs/the-internet
- Ukuran pengunjung, pengguna aktif, dan omzet: tidak diketahui / tidak ada bukti publik yang dipakai dalam laporan ini.
- Klasifikasi: proyek komunitas/demo berskala bisnis kecil atau non-komersial; klaim ini tidak menyatakan trafik kecil.
- Tanggal pengujian, versi browser, commit source, dan pelaksana: isi setelah eksekusi.

## 3. Acuan dan metodologi
- ISO/IEC/IEEE 29119-1:2022 untuk konsep/terminologi pengujian. Kami tidak menyatakan conformant terhadap seluruh ISO 29119.
- ISO/IEC 25010:2023 untuk memilih atribut kualitas yang dapat diamati: functional suitability, interaction capability/usability, reliability, performance efficiency (observasi terbatas), security (hanya praktik aman tanpa eksploitasi), dan compatibility.
- Siklus kerja: identifikasi ruang lingkup → desain skenario → persiapan lingkungan → eksekusi → catat bukti/defect → evaluasi → ringkasan.

## 4. Tingkat dan jenis pengujian
A. **Manual black-box:** UI tanpa melihat implementasi; expected result ditentukan dari fungsi yang ditampilkan.
B. **Manual white-box:** review source lokal yang disediakan repo sumber. Catat commit, file, fungsi dan jalur keputusan. Jangan mengakses source code host produksi atau database. Jika source tidak tersedia/review belum dilakukan, tandai `NOT RUN`.
C. **Automated black-box:** Playwright smoke tests serial untuk halaman dan interaksi tidak destruktif. Tidak ada concurrency/load test.
D. **Eksplorasi usability/responsiveness:** inspeksi visual terbatas pada ukuran desktop dan mobile emulasi; bukan evaluasi SUS formal tanpa responden.

## 5. In-scope
Home, navigasi ke fitur demo, Add/Remove Elements, Checkboxes, Dropdown, dan halaman status code. Penyesuaian selector/expected result boleh dilakukan jika UI berubah, tetapi rekam perubahan.

## 6. Out-of-scope
Akun/credential nyata, pembelian atau pembayaran, data pengguna lain, pengujian beban, fuzzing, vulnerability scanning, eksploitasi, brute-force, pengiriman payload berbahaya, serta klaim aksesibilitas formal. Fitur yang membutuhkan tindakan/akun tidak diuji tanpa izin.

## 7. Entry/exit criteria
- Entry: target dapat diakses, izin penggunaan demo dipatuhi, tool/browser terpasang, test data hanya data sintetis.
- Exit: semua case memiliki status (PASS/FAIL/BLOCKED/NOT RUN), bukti yang tidak sensitif, environment tercatat, defect diverifikasi ulang, dan ringkasan ditinjau kelompok.

## 8. Severity
- Critical: dampak luas dan fungsi inti berhenti (tidak diantisipasi dalam smoke test ini).
- High: fungsi utama tidak dapat digunakan, tanpa workaround.
- Medium: fungsi sebagian terganggu atau hasil membingungkan.
- Low: isu tampilan/teks minor.
Jangan memberi severity tanpa dampak dan bukti.

## 9. Artefak
Skenario dan hasil manual: `../tests/manual/TEST_EXECUTION.md`; white-box checklist: `../tests/manual/WHITE_BOX_REVIEW.md`; automation: `../tests/automated/`; defect: `../reports/DEFECT_LOG.md`; ringkasan: `../reports/TEST_SUMMARY.md`.

## 10. Risiko
Target pihak ketiga dapat berubah/tidak tersedia. Automation dapat terkena perubahan locator atau rate-limiting. Batasi ke satu worker dan eksekusi seperlunya. Jangan menganggap kegagalan jaringan sebagai defect aplikasi sebelum diulang secara wajar dan dicatat.
