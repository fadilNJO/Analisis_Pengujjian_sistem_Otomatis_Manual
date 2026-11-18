# 03 — Manual Test Cases

**Target:** https://the-internet.herokuapp.com/  
**Status awal:** kasus dirancang, belum dieksekusi. Isi hasil aktual dan bukti di `tests/manual/TEST_EXECUTION.md`.

## Manual black-box

| ID | Fitur | Prasyarat/langkah | Expected result | Teknik |
|---|---|---|---|---|
| BB-01 | Beranda | Buka root URL | Beranda tampil dan daftar latihan terlihat | Exploratory |
| BB-02 | Navigasi checkbox | Pilih link Checkboxes | Halaman checkbox tampil | Functional |
| BB-03 | Checkbox | Ubah status checkbox satu per satu | Status berubah sesuai interaksi; status awal dicatat | State transition |
| BB-04 | Dropdown | Buka Dropdown; pilih opsi yang tersedia | Opsi terpilih ditampilkan | Functional |
| BB-05 | Add/Remove | Buka Add/Remove Elements; klik Add Element sekali lalu Remove | Tombol muncul setelah add dan hilang setelah remove | State transition |
| BB-06 | Status code | Buka halaman Status Codes dan pilih tautan status yang disediakan | Halaman menjelaskan status yang diminta; catat HTTP/status teks yang diamati | Functional |
| BB-07 | Responsif | Periksa beranda/fitur pada desktop dan viewport ponsel emulasi | Konten utama dapat dibaca dan kontrol yang diuji dapat dijangkau | Compatibility/usability |
| BB-08 | Kegagalan navigasi | Gunakan tautan internal yang tersedia; amati respons | Halaman tidak menunjukkan error tak terduga; catat setiap perilaku aktual | Reliability |

## Manual white-box (hanya bila source lokal tersedia)
Lakukan review kode secara lokal pada source terbuka/revision yang dicatat, bukan pada server live. Buat traceability dari kode ke perilaku yang dapat diuji.

| ID | Fokus review | Langkah aman | Bukti yang dicatat |
|---|---|---|---|
| WB-01 | Route/handler Add/Remove | Temukan route dan fungsi handler, ikuti kondisi add/remove | commit SHA, file/line, kondisi, hasil review |
| WB-02 | Checkbox state | Identifikasi markup/handler state checkbox dan default | commit SHA, file/line, state awal/transisi |
| WB-03 | Dropdown | Inspeksi definisi opsi dan mekanisme pemilihan | commit SHA, file/line, nilai opsi dan expected |
| WB-04 | Status code routes | Lihat route yang memetakan status demo; jangan kirim payload | commit SHA, file/line, status yang dimaksud |
| WB-05 | Error handling | Inspeksi penanganan route/exception yang relevan | commit SHA, file/line, gap yang dapat direproduksi lokal |

White-box execution status harus `NOT RUN` sampai source, revision, pemeriksa, dan bukti dicatat. Jangan menebak internal implementation hanya dari UI.

## Automation
Lihat suite minimal di `tests/automated/`. Otomasi black-box tidak menggantikan manual/white-box. Tidak ada akses ke data internal target.
