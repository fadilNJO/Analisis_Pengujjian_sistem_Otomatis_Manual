# PRESENTASI — Rencana QA Portal The Internet

> Outline presentasi. Ganti status setelah pekerjaan sungguhan selesai; jangan tampilkan hasil/angka yang belum diuji.

## Slide 1 — Judul
Perencanaan Pengujian Portal The Internet: Manual Black-box, White-box Source Review, dan Automated Smoke Test.

## Slide 2 — Objek
- Portal demo latihan QA: https://the-internet.herokuapp.com/
- Bukan LMS; alasan: fitur latihan web publik, tanpa akun untuk skenario terpilih.
- Trafik/pengguna aktual tidak diketahui; skala komunitas bukan angka pengunjung.

## Slide 3 — Standar (rentang 2022–2026)
- ISO/IEC/IEEE 29119-1:2022: konsep dan istilah testing.
- ISO/IEC 25010:2023: model kualitas produk.
- Tidak mengklaim sertifikasi/conformance penuh.

## Slide 4 — Metode dan alasan
- Manual black-box: perilaku UI.
- Manual white-box: source lokal, revision dicatat; bukan inspeksi produksi.
- Playwright black-box: smoke checks serial, ringan.

## Slide 5 — Scope dan keselamatan
Checkbox, dropdown, add/remove, navigasi/status page. Tanpa load test, eksploitasi, akun/data nyata, atau payload berbahaya.

## Slide 6 — Test cases dan otomasi
Tunjukkan tabel `docs/03_TEST_CASES.md` dan suite `tests/automated/specs/portal.smoke.spec.js`.

## Slide 7 — Literatur
Gunakan referensi yang telah diverifikasi full-text dan profil SINTA periode artikel. Saat ini ada kandidat JITET 2026 yang perlu final verification; kutipan dan artikel SINTA 1–3 tambahan masih harus dipastikan.

## Slide 8 — Hasil
Isi hanya setelah eksekusi: lingkungan, pass/fail/blocked, evidence, defect. Sebelum itu tampilkan “belum dijalankan”, bukan angka perkiraan.

## Slide 9 — Praktisi QA
Isi setelah wawancara narasumber berpengalaman ≥3 tahun dan izin publikasi. Tanpa transkrip/nama rekaan.

## Slide 10 — Kesimpulan & keterbatasan
Jelaskan yang teruji, tidak teruji, keterbatasan target pihak ketiga, dan rencana tindak lanjut.
