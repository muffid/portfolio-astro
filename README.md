# Portfolio Astro

Website portfolio web developer — minimalis & modern. Dibuat dengan Astro 5 + Tailwind CSS 4.

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil di folder dist/
npm run preview
```

## Kustomisasi

- **Semua konten** (nama, bio, skill, proyek, pengalaman, kontak, sosmed) ada di `src/data/site.ts`.
- Warna aksen: ubah `--color-accent` dan `--color-accent-dark` di `src/styles/global.css`.
- Ganti `public/favicon.svg` dengan ikon kamu.
- Saat deploy, isi `site` di `astro.config.mjs`.

## Struktur

```
src/
  components/  Header, Hero, About, Skills, Projects, Experience, Contact, Footer
  data/site.ts Konten
  layouts/     Layout.astro (SEO, font, dark mode)
  pages/       index.astro
  styles/      global.css (Tailwind)
```

Fitur: dark/light mode (tersimpan), responsif, animasi scroll, menu mobile, form kontak via mailto.
