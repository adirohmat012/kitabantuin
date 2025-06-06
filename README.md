# KitaBantu — Aplikasi Donasi dan Bantuan Sosial

KitaBantu adalah aplikasi front-end berbasis **HTML**, dan **Tailwind CSS** yang berfokus pada fitur donasi, akun pengguna, dan interaksi sosial untuk membantu sesama. Desain aplikasi ini responsif dan cocok untuk tampilan mobile.

## ✨ Fitur Utama

- 💸 Halaman **Donasi** dengan pilihan nominal dan input custom
- 👤 Halaman **Akun Saya** untuk profil dan pengaturan
- 🛂 Halaman **Sebelum Login** untuk ajakan masuk atau daftar
- 🌈 Menggunakan **Tailwind CSS** untuk styling
- 📱 Tampilan mobile-first yang responsif

## 📂 Struktur File

```
├── akun.html
├── before_login.html
├── donasi.html
├── src/
│   └── output.css     # Hasil build Tailwind CSS
├── .gitignore         # Mengabaikan node_modules
```

## 🛠 Teknologi

- HTML5
- Tailwind CSS
- JavaScript Vanilla

## 🚀 Cara Menjalankan

1. Jalankan build Tailwind (jika kamu pakai CLI):

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

2. Buka file HTML langsung di browser (contoh: `donasi.html`).

## 📌 Catatan

- File `output.css` wajib dibuild dari Tailwind CLI.
- Tidak menggunakan framework JS — murni HTML, CSS, dan JS.

---

© 2025 KitaBantu — by [pamanahrasa](https://github.com/adirohmat012) source Codepolitan