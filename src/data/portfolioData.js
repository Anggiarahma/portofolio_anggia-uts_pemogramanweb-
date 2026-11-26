import funticsImage from "../assets/images/funtics.jpeg";
import infinityImage from "../assets/images/infinity.jpeg";
import riverImage from "../assets/images/air bersih.jpeg";
import lingkungankuImage from "../assets/images/lingkunganku.jpeg";
import HIMTECImage from "../assets/images/himtec.jpg";
import itfairImage from "../assets/images/it fair.jpg";
import organisasiImage from "../assets/images/bem.jpeg";
import careerImage from "../assets/images/career.png";
import magangImage from "../assets/images/scola.png";
import brandImage from "../assets/images/ba.jpeg";
import satgasImage from "../assets/images/satgas.png";
import pklImage from "../assets/images/pkl.jpeg";


export const profileData = {
  brandName: "Anggia",
  brandInitial: "A.",
  fullName: "Anggia Rahmadita",
  firstName: "Anggia",
  lastName: "Rahmadita",

  badgeText: "HALO, SENANG BERTEMU DENGANMU! ✨",

  roles: [
    "Mahasiswa Teknik Informatika",
    "Pengembang Web Frontend",
    "Peminat UI/UX",
    "Pecinta Teknologi dan Kreativitas",
  ],

  heroDescription:
    "Saya senang mengeksplorasi dunia pengembangan web, desain antarmuka, dan berbagai ide digital. Saat ini saya terus belajar, mengembangkan kemampuan, dan mengubah ide menjadi karya yang bermanfaat.",

  email: "rahmaditaanggia@gmail.com",
  location: "Bandung / Cimahi, Jawa Barat",

  // Sesuaikan dengan lokasi foto di folder public
  heroPhoto: "/images/profile/portrait.jpg",

  stats: [
    { value: "04+", label: "Proyek Pilihan" },
    { value: "2024", label: "Mulai Kuliah" },
    { value: "2×", label: "Finalis Hackathon" },
  ],

  // TENTANG SAYA
  aboutEyebrow: "TENTANG SAYA",
  aboutTitle: "Halo, Saya Anggia!",
  aboutSubtitle:
    "Senang bisa berbagi sedikit cerita tentang diri saya, perjalanan, dan hal-hal yang sedang saya kembangkan.",

  aboutParagraphs: [
    "Halo! Saya Anggia Rahmadita, mahasiswa Teknik Informatika di Universitas Nurtanio Bandung. Sebelumnya, saya menempuh pendidikan Rekayasa Perangkat Lunak di SMK Negeri 11 Bandung. Dari perjalanan tersebut, saya mulai mengenal dunia pemrograman dan semakin tertarik untuk mempelajari teknologi.",

    "Saya memiliki pengalaman mengembangkan berbagai tampilan website, mulai dari halaman utama, dashboard, hingga website reservasi dan pengaduan. Saya senang mencoba hal baru, mempelajari desain antarmuka, serta mengembangkan website yang tidak hanya menarik secara visual, tetapi juga nyaman digunakan.",
  ],

  aboutTags: [
    "Pengembangan Web",
    "Desain UI/UX",
    "Kreativitas",
    "Kerja Sama Tim",
    "Terus Belajar",
  ],
};

// ============================================================================
// RIWAYAT PENDIDIKAN
// ============================================================================

export const educationData = [
  {
    id: "edu-1",
    year: "2024 — Sekarang",
    place: "Universitas Nurtanio Bandung",
    major: "S1 Teknik Informatika",
    detail: "Mempelajari rekayasa perangkat lunak, pemrograman web, struktur data, dan pengembangan sistem informasi.",
    color: "sage",
    iconName: "graduation-cap",
  },
  {
    id: "edu-2",
    year: "2021 — 2024",
    place: "SMK Negeri 11 Bandung",
    major: "Rekayasa Perangkat Lunak (RPL)",
    detail: "Mempelajari dasar pemrograman, basis data, pengembangan web berbasis Laravel, serta praktik kerja lapangan.",
    color: "peach",
    iconName: "laptop",
  },
  {
    id: "edu-3",
    year: "2018 — 2021",
    place: "SMP PGRI 1 Cimahi",
    major: "Pendidikan Menengah Pertama",
    detail: "Membangun dasar pengetahuan, kedisiplinan, kreativitas, dan kemampuan bekerja sama.",
    color: "lilac",
    iconName: "book-open",
  },
  {
    id: "edu-4",
    year: "2012 — 2018",
    place: "SDN Cimahi Mandiri 3",
    major: "Pendidikan Dasar",
    detail: "Mengembangkan dasar pengetahuan, rasa ingin tahu, dan kebiasaan belajar.",
    color: "yellow",
    iconName: "backpack",
  },
];

// ============================================================================
// PROYEK
// ============================================================================

export const projectsData = [
  {
    id: "funtics",
    number: "01",
    title: "Funtics — Bandung Zoo",
    category: "Aplikasi Web",
    subtitle: "Sistem Reservasi Website",
    year: "2023",
    description:
      "Website reservasi tiket Kebun Binatang Bandung. Berkontribusi dalam analisis basis data, desain website, dan pengembangan frontend menggunakan Laravel.",
    highlights: [
      "Merancang alur pemesanan tiket pengunjung secara online",
      "Menganalisis struktur basis data jadwal dan kategori tiket",
      "Mengembangkan tampilan antarmuka menggunakan Laravel Blade",
    ],
    tags: ["Laravel", "Frontend", "Desain UI", "Database"],
    color: "peach",
    iconName: "laptop",
    image: funticsImage,
    gallery: [],
  },
  {
    id: "sid-infinity",
    number: "02",
    title: "sid_Infinity",
    category: "Aplikasi Web",
    subtitle: "Pemesanan Layanan Internet",
    year: "2024",
    description:
      "Website pemesanan layanan jaringan internet (Wi-Fi) yang dikembangkan saat praktik kerja lapangan. Berkontribusi dalam pengembangan frontend menggunakan Laravel.",
    highlights: [
      "Mengembangkan halaman katalog paket layanan Wi-Fi",
      "Membuat formulir pendaftaran dan pengecekan area pemasangan",
      "Bekerja sama dengan tim pengembang selama praktik kerja lapangan",
    ],
    tags: ["Laravel", "Frontend", "Website"],
    color: "sage",
    iconName: "code",
    image: infinityImage,
    gallery: [],
  },
  {
    id: "river-clean-water",
    number: "03",
    title: "River & Clean Water",
    category: "Kompetisi",
    subtitle: "Hackathon HIMTEC × IT HOLIC",
    year: "2025",
    description:
      "Website bertema pemantauan sungai dan air bersih. Berkontribusi dalam pengembangan landing page responsif, desain antarmuka, serta pembuatan template surat laporan berbasis HTML. Proyek ini meraih peringkat 6 dalam kompetisi kelompok.",
    highlights: [
      "Meraih peringkat 6 dalam kompetisi kelompok",
      "Mengembangkan landing page edukasi dan pemantauan kualitas air bersih",
      "Membuat template surat laporan berbasis HTML yang siap dicetak",
    ],
    tags: ["CodeIgniter", "HTML", "Desain Responsif"],
    color: "yellow",
    iconName: "lightbulb",
    image: riverImage,
    gallery: [],
  },
  {
    id: "lingkunganku",
    number: "04",
    title: "Lingkunganku",
    category: "Kompetisi",
    subtitle: "Hackathon IT FAIR XIV",
    year: "2025",
    description:
      "Website pengaduan lingkungan masyarakat yang memiliki halaman utama, dashboard, login dan register, serta integrasi antarmuka untuk AI Chatbot dan Google Maps.",
    highlights: [
      "Merancang dashboard pelaporan warga dan halaman autentikasi",
      "Mengintegrasikan tampilan peta lokasi pengaduan menggunakan Google Maps",
      "Mengembangkan antarmuka AI Chatbot untuk membantu proses pelaporan",
    ],
    tags: ["CodeIgniter", "Google Maps", "AI Chatbot", "UI/UX"],
    color: "lilac",
    iconName: "mobile",
    image: lingkungankuImage,
    gallery: [],
  },
];

// ============================================================================
// PENGALAMAN
// ============================================================================

export const experiencesData = [
  {
    id: "exp-1",
    date: "Jan 2025 — Sekarang",
    title: "Badan Eksekutif Mahasiswa Informatika",
    role: "Organisasi Mahasiswa",
    text:
      "Menyusun, meninjau, dan mengedit dokumen organisasi serta membantu menyiapkan materi publikasi dan konten informasi untuk media sosial BEM Informatika.",
    color: "peach",
  },
  {
    id: "exp-2",
    date: "Jan — Jul 2024",
    title: "Sekolahan.id — PT. Forit Asta Solusindo",
    role: "Praktik Kerja Lapangan",
    text:
      "Membantu mengelola data siswa SMK melalui Microsoft Excel dan mengimpornya ke website. Selain itu, turut mengembangkan frontend website sid_Infinity menggunakan Laravel.",
    color: "sage",
  },
  {
    id: "exp-3",
    date: "1 Nov 2025",
    title: "Hackathon HIMTEC × IT HOLIC — UTB",
    role: "Pengembang Frontend • Peringkat 6",
    text:
      "Mengembangkan landing page responsif untuk proyek pemantauan sungai dan air bersih, memperbaiki tampilan antarmuka, serta membuat template surat laporan berbasis HTML.",
    color: "yellow",
  },
  {
    id: "exp-4",
    date: "18 Nov — 6 Des 2025",
    title: "Hackathon IT FAIR XIV — UIN",
    role: "Pengembang Frontend",
    text:
      "Mengembangkan landing page, dashboard, halaman login dan register untuk proyek Lingkunganku, serta mengintegrasikan tampilan AI Chatbot dan Google Maps.",
    color: "lilac",
  },
];

// ============================================================================
// KETERAMPILAN
// ============================================================================

export const skillGroupsData = [
  {
    id: "skill-web",
    title: "Pengembangan Web",
    iconName: "code",
    color: "peach",
    skills: [
      { name: "HTML", level: "Mahir" },
      { name: "CSS", level: "Mahir" },
      { name: "JavaScript", level: "Menengah" },
      { name: "Vue.js", level: "Menengah" },
      { name: "Laravel", level: "Mahir" },
      { name: "CodeIgniter", level: "Menengah" },
      { name: "React Native", level: "Dasar" },
    ],
  },
  {
    id: "skill-design",
    title: "Desain dan Kreativitas",
    iconName: "palette",
    color: "lilac",
    skills: [
      { name: "Figma", level: "Mahir" },
      { name: "Adobe Illustrator", level: "Menengah" },
      { name: "Canva", level: "Mahir" },
      { name: "Nicepage", level: "Menengah" },
    ],
  },
  {
    id: "skill-office",
    title: "Aplikasi Perkantoran dan Data",
    iconName: "laptop",
    color: "sage",
    skills: [
      { name: "Microsoft Word", level: "Mahir" },
      { name: "PowerPoint", level: "Mahir" },
      { name: "Excel", level: "Mahir" },
      { name: "Analisis Data", level: "Menengah" },
    ],
  },
  {
    id: "skill-soft",
    title: "Kemampuan Personal",
    iconName: "users",
    color: "yellow",
    skills: [
      { name: "Kepemimpinan", level: "Aktif" },
      { name: "Kerja Sama Tim", level: "Aktif" },
      { name: "Komunikasi", level: "Aktif" },
      { name: "Pemecahan Masalah", level: "Aktif" },
    ],
  },
];

// ============================================================================
// GALERI MOMEN DAN DOKUMENTASI
// ============================================================================


export const galleryData = [
  {
    id: "gal-1",
    title: "Hackathon HIMTEC × IT HOLIC",
    category: "Kompetisi",
    year: "2025",
    caption:
      "Pengalaman mengikuti kompetisi bersama tim melalui proyek pemantauan sungai dan air bersih. Berhasil meraih peringkat 6.",
    image: HIMTECImage,
    color: "yellow",
  },
  {
    id: "gal-2",
    title: "Hackathon IT FAIR XIV",
    category: "Kompetisi",
    year: "2025",
    caption:
      "Pengalaman mengembangkan antarmuka website pengaduan lingkungan masyarakat melalui proyek Lingkunganku.",
    image: itfairImage,
    color: "lilac",
  },
  {
    id: "gal-3",
    title: "BEM Informatika Unnur",
    category: "Organisasi",
    year: "2025",
    caption:
      "Pengalaman berkontribusi dalam kegiatan organisasi, penyusunan dokumen, dan pembuatan konten informasi.",
    image: organisasiImage,
    color: "peach",
  },
  {
    id: "gal-4",
    title: "PKL — PT. Forit Asta Solusindo",
    category: "Pengalaman",
    year: "2024",
    caption:
      "Pengalaman mengelola data Sekolahan.id dan mengembangkan frontend website sid_Infinity.",
    image: pklImage,
    color: "sage",
  },
  {
    id: "brand-ambassador",
    title: "Brand Ambassador Universitas Nurtanio",
    category: "Organisasi & Kampus",
    year: "2026",
    caption:
      "Menjadi bagian dari Brand Ambassador Universitas Nurtanio dan turut memperkenalkan lingkungan serta kegiatan kampus.",
    image: brandImage,
    color: "peach",
  },
  {
    id: "scola-ai-intern",
    title: "AI Prompt Intern — Scola.id",
    category: "Pengalaman Magang",
    year: "2026",
    caption:
      "Mendapat kesempatan belajar dan berkontribusi sebagai AI Prompt Intern di Scola.id melalui eksplorasi dan pengembangan prompt berbasis AI.",
    image: magangImage,
    color: "sage",
  },
  {
    id: "satgas-kampus",
    title: "Satgas Kampus",
    category: "Organisasi & Kampus",
    year: "2026",
    caption:
      "Menjadi bagian dari Satgas Kampus dan ikut berkontribusi dalam kegiatan serta lingkungan kampus.",
    image: satgasImage,
    color: "yellow",
  },
  {
    id: "from-campus-to-career",
    title: "From Campus to Career",
    category: "Seminar",
    year: "2026",
    caption:
      "Mengikuti seminar From Campus to Career sebagai kesempatan untuk menambah wawasan dan mempersiapkan diri menghadapi dunia kerja.",
    image: careerImage,
    color: "lilac",
  },
];
