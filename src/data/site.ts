// Semua konten portfolio ada di file ini. Edit sesuai data kamu.

export const profile = {
  name: 'Mufid Mahnun',
  role: 'Web Developer',
  tagline: 'Saya membangun website yang cepat, rapi, dan enak dipakai.',
  intro:
    'Web developer yang fokus pada performa, aksesibilitas, dan detail antarmuka. Saya membantu bisnis dan startup mengubah ide menjadi produk web yang nyata.',
  location: 'Indonesia',
  email: 'muffid.mahnun@gmail.com',
  available: true,
  about: [
    'Halo! Saya web developer dengan pengalaman membangun aplikasi web dari sisi frontend hingga backend. Saya suka kode yang bersih, desain yang sederhana, dan produk yang benar-benar menyelesaikan masalah pengguna.',
    'Saat ini saya banyak bekerja dengan JavaScript/TypeScript, Astro, dan ekosistem modern lainnya. Di luar kode, saya suka belajar hal baru, berbagi ilmu, dan mengoptimalkan sesuatu sampai terasa ngebut.',
  ],
  stats: [
    { value: '7+', label: 'Tahun pengalaman' },
    { value: '10+', label: 'Proyek selesai' },
    { value: '10+', label: 'Klien puas' },
  ],
};

export const socials = [
  { name: 'GitHub', url: 'https://github.com/muffid' },
  { name: 'Instagram', url: 'https://www.instagram.com/muffidmahnun/' },
  { name: 'Facebook', url: 'https://www.facebook.com/pitshipied' },
  { name: 'Whatsapp', url: 'https://api.whatsapp.com/send?phone=6287846867493&text=' },
];

export const nav = [
  { label: 'Tentang', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Kontak', href: '#contact' },
];

export const skills = [
  { group: 'Frontend', items: ['HTML & CSS', 'JavaScript', 'TypeScript', 'Astro', 'React', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'PHP', 'Laravel', 'REST API', 'PostgreSQL', 'MySQL'] },
  { group: 'Tools', items: ['Git & GitHub', 'Vite', 'Figma', 'Linux', 'CI/CD'] },
];

export const projects = [
  {
    title: 'PoS UD Tri L Distributor Pupuk',
    description:
      'Aplikasi Point of Sales untuk manajemen inventori, pembelian dan penjualan Pupuk di Kecamatan dampit',
    tags: ['PHP', 'JQuery', 'Tailwind', 'MySQL'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Toko Online Nyawa.id (discontinued)',
    description:
      'E-commerce dengan arsitektur headless, halaman produk statis yang sangat cepat, dan checkout yang aman.',
    tags: ['Next.js', 'Node.js', 'MySQL','Tailwind'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Undangan Digital Rabine.id',
    description:
      'Platform undangan pernikahan digital dengan tema kustom, RSVP, galeri foto, dan musik latar.',
    tags: ['JavaScript', 'Next.js','React.js', 'MySQL'],
    demo: 'https://rabineid.vercel.app/',
    repo: '#',
  },
  {
    title: 'Sistem Manajemen Order CV. Polaris Adv',
    description:
      'Aplikasi manajemen customer, pencatatan order, tracking progress order dan pengiriman ekspedisi',
    tags: ['PHP', 'Laravel', 'MySQL','Bootstrap'],
    demo: 'https://ekspedisi.jualdecal.com/',
    repo: '#',
  },
  {
    title: 'Sistem Monitoring & Rekap kehadiran karyawan CV. Polaris Adv',
    description:
      'Aplikasi monitoring realtime harian, bulanan kehadiran jam masuk dan kehadiran kerja',
    tags: ['PHP', 'Laravel', 'MySQL','Tailwind'],
    demo: 'https://absensi.jualdecal.com/live/',
    repo: '#',
  },

  {
    title: 'Sistem Absensi RFID CV. Nozzle Printing',
    description: 'Aplikasi absensi karyawan berbasis RFID, user dapat mengakses secara realtime data harian mereka',
    tags: ['React.js','MySQL','Tailwind'],
    demo: 'https://saspolaris.netlify.app/home',
    repo: '#',
  },
  {
    title: 'Zantedeschia Property',
    description: 'Website untuk company profile dan listing property',
    tags: ['Wordpress'],
    demo: 'https://zantedeschia-property.com/',
    repo: '#',
  },
  {
    title: 'Portal berita sekilasmalang.com (discontinued)',
    description: 'portal berita online sekilasmalang.com',
    tags: ['Wordpress'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'School Profile SMK',
    description: 'Website pusat informasi dan kabar terbaru serta profil lengkap SMK cendika Bangsa',
    tags: ['PHP','Javascript','Laravel','MySQL','Wordpress','GraphQL','Tailwind'],
    demo: 'https://cendikabangsa.sch.id',
    repo: '#',
  },
];

export const experience = [
  {
    role: 'Graphic Designer',
    company: 'PT. Indospring Tbk.',
    period: '2012 — 2013',
    points: [
      'Mendesain kebutuhan grafis untuk keperluan promosi maupun publikasi',
      'Mendesain kebutuhan cetak untuk event inernal perusahaan ',
      'Mendesain karakter maskot perusahana berupa kartun 2D',
    ],
  },
  {
    role: 'Frontend developer',
    company: 'Yukti.id',
    period: '2021 - 2023',
    points: [
      'Membangun fitur frontend dan API untuk produk SaaS dari nol hingga rilis.',
      'Merapikan design system sehingga waktu pengembangan UI berkurang signifikan.',
    ],
  },
  {
    role: 'Staff Web Admin & Graphic Designer',
    company: 'SMK Cendika Bangsa',
    period: '2019 — sekrang',
    points: [
      'Mengembangkan website company profile dan aplikasi berbasis PHP.',
      'Mulai mendalami JavaScript modern dan alur kerja berbasis Git.',
    ],
  },
  {
    role: 'Owner',
    company: 'Rabine.id',
    period: '2022 — sekrang',
    points: [
      'Mengembangkan website untuk platform pembuatan undangan pernikahan online.',
    ],
  },
];
