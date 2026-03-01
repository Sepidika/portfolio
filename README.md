# 🚀 Portfolio Website — Setup & Deployment Guide

## 📁 Struktur File
```
portfolio/
├── index.html      ← Website utama (semua dalam 1 file)
├── robots.txt      ← SEO: izin crawler
├── sitemap.xml     ← SEO: peta halaman
└── assets/         ← Buat folder ini untuk gambar
    ├── photo.jpg       ← Foto profil kamu
    └── og-image.jpg    ← Gambar preview social media (1200×630px)
```

---

## ✏️ Kustomisasi Wajib di `index.html`

### 1. Ganti Identitas
Cari & ganti teks berikut (Ctrl+H di VS Code):
| Teks lama | Ganti dengan |
|-----------|--------------|
| `Nama Kamu` | Nama lengkap kamu |
| `NK` | Inisial kamu (logo) |
| `namadomain.com` | Domain kamu di Hostinger |
| `kamu@email.com` | Email kamu |
| `usernamekamu` | Username GitHub/LinkedIn/Twitter |
| `Jakarta` | Kota kamu |
| `628xxxxxxxxx` | Nomor WhatsApp (format internasional) |

### 2. Foto Profil
- Simpan foto kamu sebagai `assets/photo.jpg`
- Ganti div `.about-photo-placeholder` dengan:
  ```html
  <img src="assets/photo.jpg" alt="Foto [Nama Kamu]" class="about-photo" width="400" height="533" loading="lazy" />
  ```

### 3. Form Contact (Formspree — Gratis)
1. Daftar di https://formspree.io
2. Buat form baru → salin Form ID
3. Ganti `YOUR_FORM_ID` di action form dengan ID kamu

### 4. OG Image (Social Media Preview)
- Buat gambar 1200×630px (nama kamu + "Frontend Developer" + background)
- Simpan sebagai `assets/og-image.jpg`

---

## 🌐 Deploy ke Hostinger

### Langkah-langkah:
1. **Login** ke hPanel Hostinger → **File Manager**
2. Masuk ke folder `public_html`
3. **Upload** semua file: `index.html`, `robots.txt`, `sitemap.xml`, folder `assets/`
4. Pastikan `index.html` ada di root `public_html`

### Setelah Upload:
1. **Submit sitemap** ke Google Search Console:
   - Daftar di https://search.google.com/search-console
   - Tambahkan property domain kamu
   - Submit sitemap: `https://namadomain.com/sitemap.xml`

2. **Update sitemap.xml**:
   - Ganti `namadomain.com` dengan domain asli
   - Update `<lastmod>` setiap kali update konten

---

## ⚡ Checklist SEO Sebelum Launch

- [ ] Ganti semua `namadomain.com` dengan domain asli
- [ ] Isi meta description yang relevan (max 160 karakter)
- [ ] Upload foto profil dan OG image
- [ ] Setup Formspree untuk form kontak
- [ ] Submit ke Google Search Console
- [ ] Submit ke Bing Webmaster Tools
- [ ] Daftar di Google My Business (opsional tapi bagus)
- [ ] Pastikan HTTPS aktif (Hostinger biasanya otomatis)

---

## 📊 Tools Cek Performa & SEO

- **PageSpeed Insights**: https://pagespeed.web.dev
- **SEO Check**: https://www.seobility.net/en/seocheck/
- **Schema Validator**: https://validator.schema.org
- **Mobile Test**: https://search.google.com/test/mobile-friendly

---

*Dibuat dengan ❤️ — Siap deploy ke Hostinger!*
