// This file uses .tsx because it might contain JSX, for example, icons.
// For dependencies, you would run: npm install lucide-react
import { 
    User, Store, Building2, CheckCircle, BrainCircuit, Bot, MessageSquare, Rocket, DollarSign, Puzzle, MapPin, 
    PenTool, Layers, Ear, HeartHandshake, Star, ThumbsUp, Clock, Image, UserCircle, Briefcase, GalleryVertical, 
    Quote, Tags, PenSquare, HelpCircle, Send, Camera, CalendarDays, Users, Map, ClipboardList, Share2, FileText,
    ShoppingCart, BookOpen, CalendarCheck, Ticket, KeyRound, Newspaper, PlayCircle, Film, LayoutGrid, Contact,
    UserCog, LifeBuoy, ScanLine, Building, Cloud, Mail
} from 'lucide-react';
import { Project, Testimonial, ServicePackage, WebService, Blog } from './types';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/layanan', label: 'Produk' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/kontak', label: 'Kontak' },
];

export const MASALAH_ITEMS = [
  {
    icon: <DollarSign className="w-12 h-12 text-brand-green" />,
    title: 'Website Keren Tapi Sepi?',
    description: 'Desain keren tapi nggak ada konversi? Mas Boy bedah strategi biar website UMKM kamu laris manis.',
  },
  {
    icon: <Puzzle className="w-12 h-12 text-brand-green" />,
    title: 'Template Mahal Tapi Ribet?',
    description: 'Template mahal malah bikin pusing? Mas Boy buatkan dari nol, 100% full custom untuk toko online-mu.',
  },
  {
    icon: <MapPin className="w-12 h-12 text-brand-green" />,
    title: 'Bingung Mulai Online?',
    description: 'Mau go-digital tapi bingung mulai dari mana? Mas Boy siap pandu langkah demi langkah.',
  },
];

export const LAYANAN_SEGMENTS = [
  {
    icon: <User className="w-10 h-10 text-brand-green" />,
    title: 'Perorangan',
    description: 'Website Portfolio & Personal Branding. Solusi untuk membangun citra diri yang kuat di dunia digital.',
  },
  {
    icon: <Store className="w-10 h-10 text-brand-green" />,
    title: 'UMKM',
    description: 'Jasa pembuatan website dan toko online untuk UMKM Profesional. Bantu bisnismu naik kelas dan jangkau lebih banyak pelanggan.',
  },
  {
    icon: <Building2 className="w-10 h-10 text-brand-green" />,
    title: 'Enterprise',
    description: 'Website Custom untuk Perusahaan. Solusi dengan fitur kompleks, keamanan, dan skalabilitas tinggi.',
  },
];

export const WEB_SERVICES: WebService[] = [
  {
    id: 1,
    icon: <ShoppingCart className="w-8 h-8 text-brand-green" />,
    title: 'Toko Online (E-Commerce Website)',
    description: 'Website jualan produk lengkap dengan katalog, keranjang belanja, metode pembayaran, dan sistem pengiriman.',
    tag: 'E-commerce',
  },
  {
    id: 2,
    icon: <Building2 className="w-8 h-8 text-brand-green" />,
    title: 'Company Profile Website',
    description: 'Situs resmi perusahaan untuk memperkenalkan brand, layanan, portofolio, dan kontak profesional.',
    tag: 'Company Profile',
  },
  {
    id: 3,
    icon: <BookOpen className="w-8 h-8 text-brand-green" />,
    title: 'LMS (Learning Management System)',
    description: 'Platform belajar online dengan fitur kursus, ujian, forum diskusi, dan sertifikat digital.',
    tag: 'LMS',
  },
  {
    id: 4,
    icon: <CalendarCheck className="w-8 h-8 text-brand-green" />,
    title: 'Booking & Reservation System',
    description: 'Sistem pemesanan online untuk jadwal layanan atau fasilitas dengan konfirmasi otomatis.',
    tag: 'Booking',
  },
  {
    id: 5,
    icon: <Ticket className="w-8 h-8 text-brand-green" />,
    title: 'Event & E-Ticketing',
    description: 'Website penjualan tiket acara dengan e-ticket & QR code scan-ready.',
    tag: 'E-Ticketing',
  },
  {
    id: 6,
    icon: <HeartHandshake className="w-8 h-8 text-brand-green" />,
    title: 'Fundraising & Donation Platform',
    description: 'Platform penggalangan dana online, cocok untuk NGO, komunitas, atau proyek sosial.',
    tag: 'Fundraising',
  },
  {
    id: 7,
    icon: <Users className="w-8 h-8 text-brand-green" />,
    title: 'Forum & Community Platform',
    description: 'Website untuk diskusi, berbagi informasi, dan membangun komunitas online.',
    tag: 'Community',
  },
  {
    id: 8,
    icon: <KeyRound className="w-8 h-8 text-brand-green" />,
    title: 'Membership Website',
    description: 'Situs dengan konten eksklusif bagi anggota berbayar atau terdaftar.',
    tag: 'Membership',
  },
  {
    id: 9,
    icon: <UserCircle className="w-8 h-8 text-brand-green" />,
    title: 'Portfolio & Personal Branding',
    description: 'Website personal untuk memamerkan karya, pengalaman, dan pencapaian.',
    tag: 'Portfolio',
  },
  {
    id: 10,
    icon: <Newspaper className="w-8 h-8 text-brand-green" />,
    title: 'Blog / News Portal',
    description: 'Website berbasis artikel atau berita untuk edukasi, opini, atau informasi terkini.',
    tag: 'Blog',
  },
  {
    id: 11,
    icon: <PlayCircle className="w-8 h-8 text-brand-green" />,
    title: 'Media Streaming Website',
    description: 'Platform untuk streaming musik, video, atau podcast secara online.',
    tag: 'Streaming',
  },
  {
    id: 12,
    icon: <Film className="w-8 h-8 text-brand-green" />,
    title: 'Video Platform',
    description: 'Situs khusus untuk mengunggah, mengelola, dan membagikan video.',
    tag: 'Video',
  },
  {
    id: 13,
    icon: <LayoutGrid className="w-8 h-8 text-brand-green" />,
    title: 'ERP (Enterprise Resource Planning)',
    description: 'Sistem manajemen terpadu untuk keuangan, stok, produksi, dan operasional bisnis.',
    tag: 'ERP',
  },
  {
    id: 14,
    icon: <Contact className="w-8 h-8 text-brand-green" />,
    title: 'CRM (Customer Relationship Management)',
    description: 'Platform untuk mengelola data pelanggan, interaksi, dan penjualan.',
    tag: 'CRM',
  },
  {
    id: 15,
    icon: <UserCog className="w-8 h-8 text-brand-green" />,
    title: 'HRIS (Human Resource Information System)',
    description: 'Sistem manajemen SDM untuk absensi, payroll, cuti, dan data karyawan.',
    tag: 'HRIS',
  },
  {
    id: 16,
    icon: <LifeBuoy className="w-8 h-8 text-brand-green" />,
    title: 'Helpdesk & Support Ticketing',
    description: 'Sistem layanan pelanggan dengan tiket, live chat, dan tracking progress.',
    tag: 'Support',
  },
  {
    id: 17,
    icon: <ScanLine className="w-8 h-8 text-brand-green" />,
    title: 'POS (Point of Sale)',
    description: 'Sistem kasir online untuk toko, restoran, atau bisnis retail.',
    tag: 'POS',
  },
  {
    id: 18,
    icon: <Building className="w-8 h-8 text-brand-green" />,
    title: 'Real Estate Listing',
    description: 'Website daftar properti dengan peta, foto, dan fitur pencarian.',
    tag: 'Real Estate',
  },
  {
    id: 19,
    icon: <Cloud className="w-8 h-8 text-brand-green" />,
    title: 'SaaS (Software as a Service) Platform',
    description: 'Layanan aplikasi berbasis web untuk solusi digital yang bisa diakses kapan saja.',
    tag: 'SaaS',
  },
  {
    id: 20,
    icon: <Mail className="w-8 h-8 text-brand-green" />,
    title: 'Undangan Digital',
    description: 'Website undangan online dengan galeri foto, peta lokasi, RSVP, dan hitung mundur acara.',
    tag: 'Invitation',
  },
];


export const WHY_US_POINTS = [
    { icon: <PenTool size={28} />, title: '100% Desain Custom', description: 'Desain unik tanpa template, khusus untuk brand kamu.' },
    { icon: <Layers size={28} />, title: 'Unlimited Halaman', description: 'Fleksibilitas penuh sesuai paket yang kamu pilih.' },
    { icon: <Ear size={28} />, title: 'Paham Konteks Bisnis', description: 'Fokus ke hasil dan ROI, bukan sekadar baris kode.' },
    { icon: <HeartHandshake size={28} />, title: 'Support Penuh', description: 'Selalu ada untukmu, bahkan setelah proyek selesai.' },
];

export const PROCESS_STEPS = [
  {
    icon: <MessageSquare size={32} />,
    title: 'Ngobrol & Diskusi (Briefing)',
    description: 'Kita gali ide & tujuan websitemu. Diskusi mendalam adalah kunci untuk membangun solusi yang tepat sasaran.',
    note: 'Fase ini kunci segalanya. Makin jujur, makin mantap hasilnya.'
  },
  {
    icon: <BrainCircuit size={32} />,
    title: 'Strategi & Desain (Konsep)',
    description: 'Mas Boy melakukan riset pasar, lalu merancang desain UI/UX yang menjual dan berfokus pada pengalaman pengguna.',
    note: 'Di sini kita tentukan "nyawa" website-nya. Kamu bisa revisi sampai sreg.'
  },
  {
    icon: <Bot size={32} />,
    title: 'Eksekusi & Development (Coding)',
    description: 'Desain diubah menjadi kode yang rapi dengan performa optimal. Koding bersih untuk website cepat dan modern.',
    note: 'Proses ini butuh kesabaran, tapi hasilnya pasti sepadan.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Launching & Optimalisasi (Go Live!)',
    description: 'Website siap diluncurkan! Setelah live, Mas Boy bantu optimasi dasar SEO dan memantau performa untuk kesuksesan jangka panjang.',
    note: 'Perjuangan belum selesai, kita pantau bareng performanya.'
  }
];

const DUMMY_PROJECTS: Project[] = [
  { id: 1, title: 'Kopi Senja', category: 'UMKM', imageUrl: 'https://picsum.photos/seed/kopisenja-project/600/400', 
    subtitle: 'Kopi Senja - Website & Sistem Order',
    description: 'Website E-commerce untuk toko kopi di Yogyakarta. Dibangun dengan desain responsif, SEO-friendly, dan integrasi pembayaran otomatis.',
    tags: ['E-commerce', 'Next.js', 'Food']},
  { id: 2, title: 'Jane Doe', category: 'Perorangan', imageUrl: 'https://picsum.photos/seed/janedoe-project/600/400',
    subtitle: 'Jane Doe - Portfolio Fotografi',
    description: 'Portfolio interaktif yang memenangkan hati klien enterprise, menampilkan karya dengan elegan dan profesional.',
    tags: ['Portfolio', 'React', 'Animation']},
  { id: 3, title: 'CorpFlow', category: 'Enterprise', imageUrl: 'https://picsum.photos/seed/corpflow-project/600/400',
    subtitle: 'CorpFlow - Dashboard Internal',
    description: 'Solusi dashboard internal yang aman dan skalabel untuk membantu manajemen data perusahaan yang kompleks.',
    tags: ['Dashboard', 'ERP', 'Security']},
  { id: 4, title: 'LokalBrand', category: 'UMKM', imageUrl: 'https://picsum.photos/seed/lokalbrand-project/600/400',
    subtitle: 'LokalBrand - Fashion E-commerce',
    description: 'Toko online yang stylish untuk brand fashion lokal, lengkap dengan sistem manajemen inventori yang mudah.',
    tags: ['E-commerce', 'Inventory', 'Fashion']},
  { id: 5, title: 'ArchProject', category: 'Perorangan', imageUrl: 'https://picsum.photos/seed/archproject-showcase/600/400',
    subtitle: 'ArchProject - Showcase Arsitek',
    description: 'Showcase visual yang imersif untuk para arsitek modern, menonjolkan detail dan filosofi di setiap proyek.',
    tags: ['Showcase', 'Portfolio', 'Architecture']},
  { id: 6, title: 'Foodie Resto', category: 'UMKM', imageUrl: 'https://picsum.photos/seed/foodieresto-booking/600/400',
    subtitle: 'Foodie Resto - Web & Reservasi',
    description: 'Website restoran yang menggugah selera, dilengkapi dengan sistem reservasi online yang praktis.',
    tags: ['Restaurant', 'Booking', 'CMS']},
  { id: 7, title: 'SoundWave', category: 'Perorangan', imageUrl: 'https://picsum.photos/seed/soundwave-music/600/400',
    subtitle: 'SoundWave - Musician Portfolio',
    description: 'Situs web portofolio untuk musisi dengan pemutar audio terintegrasi dan tanggal tur.',
    tags: ['Portfolio', 'Music', 'Streaming']},
  { id: 8, title: 'DataSecure', category: 'Enterprise', imageUrl: 'https://picsum.photos/seed/datasecure-platform/600/400',
    subtitle: 'DataSecure - Platform Keamanan Siber',
    description: 'Platform B2B untuk pemantauan keamanan siber secara real-time dan pelaporan insiden.',
    tags: ['Cybersecurity', 'SaaS', 'B2B']},
  { id: 9, title: 'Roti Lezat', category: 'UMKM', imageUrl: 'https://picsum.photos/seed/rotilezat-bakery/600/400',
    subtitle: 'Roti Lezat - Toko Roti Online',
    description: 'Toko online yang hangat dan ramah untuk toko roti lokal dengan pemesanan khusus.',
    tags: ['E-commerce', 'Food', 'Local Business']},
  { id: 10, title: 'PixelPerfect', category: 'Perorangan', imageUrl: 'https://picsum.photos/seed/pixelperfect-design/600/400',
    subtitle: 'PixelPerfect - Portofolio Desainer UI/UX',
    description: 'Portofolio minimalis yang menyoroti studi kasus desain dan proses berpikir.',
    tags: ['UI/UX', 'Design', 'Portfolio']},
  { id: 11, 'title': 'HR-Connect', 'category': 'Enterprise', 'imageUrl': 'https://picsum.photos/seed/hrconnect-app/600/400',
    'subtitle': 'HR-Connect - Portal Karyawan',
    'description': 'Portal internal untuk manajemen SDM, termasuk pengajuan cuti, slip gaji, dan pengumuman perusahaan.',
    'tags': ['HRIS', 'Internal Tools', 'Vue.js']},
  { id: 12, 'title': 'Wisata Jogja', 'category': 'UMKM', 'imageUrl': 'https://picsum.photos/seed/wisatajogja-tour/600/400',
    'subtitle': 'Wisata Jogja - Situs Pemandu Wisata',
    'description': 'Situs web yang menarik secara visual untuk pemandu wisata lokal, menampilkan paket wisata dan ulasan.',
    'tags': ['Tourism', 'Booking', 'Local SEO']},
  { id: 13, 'title': 'Cerita Pena', 'category': 'Perorangan', 'imageUrl': 'https://picsum.photos/seed/ceritapena-writer/600/400',
    'subtitle': 'Cerita Pena - Blog & Arsip Penulis',
    'description': 'Blog elegan untuk seorang penulis, dengan fokus pada keterbacaan dan langganan buletin.',
    'tags': ['Blog', 'Writing', 'SEO']},
  { id: 14, 'title': 'LogiTrack', 'category': 'Enterprise', 'imageUrl': 'https://picsum.photos/seed/logitrack-system/600/400',
    'subtitle': 'LogiTrack - Dasbor Logistik',
    'description': 'Dasbor pelacakan real-time untuk perusahaan logistik untuk memantau pengiriman dan mengelola armada.',
    'tags': ['Logistics', 'Dashboard', 'ERP']},
  { id: 15, 'title': 'Griya Impian', 'category': 'Enterprise', 'imageUrl': 'https://picsum.photos/seed/griyaimpian-realestate/600/400',
    'subtitle': 'Griya Impian - Platform Real Estat',
    'description': 'Platform daftar properti dengan pencarian lanjutan, tur virtual, dan portal agen.',
    'tags': ['Real Estate', 'Marketplace', 'Virtual Tour']},
];

export const ALL_PROJECTS = DUMMY_PROJECTS;

export const COMPANIES_WORKED_WITH = [
  { name: 'Gojek', logoUrl: 'https://logo.clearbit.com/gojek.com?grayscale=true&size=128' },
  { name: 'Tokopedia', logoUrl: 'https://logo.clearbit.com/tokopedia.com?grayscale=true&size=128' },
  { name: 'Traveloka', logoUrl: 'https://logo.clearbit.com/traveloka.com?grayscale=true&size=128' },
  { name: 'Bukalapak', logoUrl: 'https://logo.clearbit.com/bukalapak.com?grayscale=true&size=128' },
  { name: 'Telkomsel', logoUrl: 'https://logo.clearbit.com/telkomsel.com?grayscale=true&size=128' },
  { name: 'Unilever', logoUrl: 'https://logo.clearbit.com/unilever.com?grayscale=true&size=128' },
  { name: 'BCA', logoUrl: 'https://logo.clearbit.com/bca.co.id?grayscale=true&size=128' },
];


export const TESTIMONIALS: Testimonial[] = [
  { id: 1, quote: 'Mas Boy ngerti banget kebutuhan kami. Website baru bikin penjualan naik 3x lipat. Prosesnya juga cepat dan transparan!', name: 'Sarah Livia', handle: '@sarahlivia', role: 'Owner Kopi Senja', imageUrl: 'https://picsum.photos/seed/sarah-l/100/100' },
  { id: 2, quote: 'Portofolio saya sekarang bukan cuma galeri, tapi mesin klien. Jumlah klien internasional saya naik pesat setelah website dari Mas Boy live. Profesional banget!', name: 'Jane Doe', handle: '@janedoe_photo', role: 'Fotografer Profesional', imageUrl: 'https://picsum.photos/seed/andipratama-p/100/100' },
  { id: 3, quote: 'Sangat profesional. Dashboard internal baru kami dapat banyak pujian dari manajemen dan membantu efisiensi tim. Komunikasi lancar dan timeline-nya on point.', name: 'Rina Wijaya', handle: '@rinawijaya', role: 'Project Manager CorpFlow', imageUrl: 'https://picsum.photos/seed/rina-w/100/100' },
];

export const PERORANGAN_PACKAGES: ServicePackage[] = [
    {
        name: 'Start',
        price: 'Rp 799.000',
        description: 'Biar personal brand kamu kelihatan rapi dan profesional, tapi tetap hemat.',
        features: [
            'Unlimited halaman & section (portofolio, galeri foto/video, bio, kontak)',
            'Desain custom sesuai personal style',
            'Mobile friendly',
            '1x konsultasi singkat (30 menit)',
            '1x revisi gratis',
            'SEO basic (biar gampang dicari di Google)',
            'Hosting 3 bulan + free SSL',
            'Garansi maintenance 1 minggu',
        ],
    },
    {
        name: 'Pro',
        price: 'Rp 1.299.000',
        description: 'Biar karya kamu nggak cuma dilihat, tapi juga di-notice orang.',
        features: [
            'Semua di Start, plus:',
            'Desain premium + animasi smooth',
            'Galeri portofolio interaktif',
            'Integrasi WhatsApp langsung',
            '3x revisi gratis',
            '2x konsultasi (total 1 jam)',
            'Hosting 6 bulan',
            'Garansi maintenance 1 bulan',
        ],
        isFavorite: true,
    },
    {
        name: 'Custom',
        price: 'Mulai Rp 2.000.000',
        description: 'Buat yang mau websitenya beda banget dari orang lain.',
        features: [
            'Semua di Pro, plus:',
            'Request fitur spesial (booking jadwal, form custom, dll.)',
            'Desain interaktif full',
            'Speed optimization',
            'Revisi fleksibel selama project',
            'Maintenance 2 bulan',
        ],
    },
];

export const UMKM_PACKAGES: ServicePackage[] = [
    {
        name: 'Start',
        price: 'Rp 999.000',
        description: 'Biar bisnis kamu langsung ada di Google tanpa ribet.',
        features: [
            'Unlimited halaman & section (produk, testimoni, kontak, promo)',
            'Desain custom simple & profesional',
            'Mobile friendly',
            '1x konsultasi singkat',
            '1x revisi gratis',
            'SEO basic untuk bisnis lokal',
            'Hosting 3 bulan + free SSL',
            'Garansi maintenance 1 minggu',
        ],
    },
    {
        name: 'Pro',
        price: 'Rp 1.499.000',
        description: 'Website yang nggak cuma ada, tapi juga jualan.',
        features: [
            'Semua di Start, plus:',
            'Desain premium + animasi smooth',
            'Halaman produk + galeri foto/video',
            'WhatsApp order langsung',
            'Form pemesanan sederhana',
            '3x revisi gratis',
            'Hosting 6 bulan',
            'Garansi maintenance 1 bulan',
        ],
        isFavorite: true,
    },
    {
        name: 'Custom',
        price: 'Mulai Rp 2.500.000',
        description: 'Full fitur, siap gas buat scale up bisnis.',
        features: [
            'Semua di Pro, plus:',
            'Fitur katalog lengkap + filter produk',
            'Form booking / reservasi custom',
            'Desain interaktif full',
            'Speed optimization',
            'Maintenance 2 bulan',
        ],
    },
];

export const ENTERPRISE_PACKAGES: ServicePackage[] = [
    {
        name: 'Start',
        price: 'Rp 1.500.000',
        description: 'Paket entry-level buat kebutuhan profil perusahaan sederhana.',
        features: [
            'Unlimited halaman & section (profil, layanan, kontak, news)',
            'Desain corporate clean & profesional',
            'Mobile friendly',
            '1x konsultasi singkat',
            '1x revisi gratis',
            'SEO basic',
            'Hosting 3 bulan + free SSL',
            'Garansi maintenance 1 minggu',
        ],
    },
    {
        name: 'Pro',
        price: 'Rp 2.500.000',
        description: 'Biar citra perusahaan makin meyakinkan di mata klien dan investor.',
        features: [
            'Semua di Start, plus:',
            'Desain premium + animasi profesional',
            'Integrasi chat / form kontak cepat',
            'Halaman layanan & portofolio lengkap',
            '3x revisi gratis',
            '2x konsultasi intensif',
            'Hosting 6 bulan',
            'Garansi maintenance 1 bulan',
        ],
        isFavorite: true,
    },
    {
        name: 'Custom',
        price: 'Mulai Rp 4.000.000',
        description: 'Website kelas korporat dengan fitur sesuai kebutuhan bisnis skala besar.',
        features: [
            'Semua di Pro, plus:',
            'Integrasi sistem internal / API khusus',
            'Fitur login user / portal karyawan',
            'Desain interaktif premium',
            'Speed optimization',
            'Maintenance 2 bulan',
        ],
    },
];

export const SECTION_CHOICES = [
    { icon: <Image size={32} className="text-brand-green" />, title: 'Hero Section', description: 'Banner utama + headline besar + CTA. Bisa pakai foto/ilustrasi/animasi.' },
    { icon: <UserCircle size={32} className="text-brand-green" />, title: 'Tentang / Profil', description: 'Cerita singkat bisnis atau personal. Bisa tambah foto tim atau diri sendiri.' },
    { icon: <Briefcase size={32} className="text-brand-green" />, title: 'Layanan / Jasa', description: 'Daftar layanan yang ditawarkan. Bisa dibuat card/grid.' },
    { icon: <GalleryVertical size={32} className="text-brand-green" />, title: 'Portofolio / Showcase', description: 'Galeri foto atau video project. Bisa filter berdasarkan kategori.' },
    { icon: <Quote size={32} className="text-brand-green" />, title: 'Testimoni', description: 'Review dari klien. Format slider atau grid.' },
    { icon: <Tags size={32} className="text-brand-green" />, title: 'Pricing / Paket', description: 'Tabel harga atau card harga. Bisa pakai highlight paket favorit.' },
    { icon: <PenSquare size={32} className="text-brand-green" />, title: 'Blog / Artikel', description: 'Tips, cerita, atau update bisnis. SEO-friendly.' },
    { icon: <HelpCircle size={32} className="text-brand-green" />, title: 'FAQ', description: 'Pertanyaan & jawaban umum. Accordion style biar rapi.' },
    { icon: <Send size={32} className="text-brand-green" />, title: 'Kontak / Call to Action', description: 'Form kontak singkat. Tombol WA langsung.' },
    { icon: <Camera size={32} className="text-brand-green" />, title: 'Galeri Foto / Video', description: 'Cocok untuk fotografer, videografer, brand fashion.' },
    { icon: <CalendarDays size={32} className="text-brand-green" />, title: 'Event / Promo', description: 'Pengumuman acara atau diskon. Countdown timer opsional.' },
    { icon: <Users size={32} className="text-brand-green" />, title: 'Team Section', description: 'Foto & bio singkat anggota tim. Cocok untuk UMKM & Enterprise.' },
    { icon: <Map size={32} className="text-brand-green" />, title: 'Map / Lokasi', description: 'Google Maps embed. Info alamat lengkap.' },
    { icon: <ClipboardList size={32} className="text-brand-green" />, title: 'Form Khusus', description: 'Booking, reservasi, pendaftaran.' },
    { icon: <Share2 size={32} className="text-brand-green" />, title: 'Integrasi Sosial Media', description: 'Feed Instagram, TikTok, atau YouTube langsung di web.' },
];

export const PAGE_CHOICES = [
    { icon: <FileText size={32} className="text-brand-green" />, title: 'Halaman Utama (Home)', description: 'Pusat informasi pertama yang dilihat pengunjung. Bisa diisi hero banner, layanan, portofolio singkat, testimoni, dll.' },
    { icon: <UserCircle size={32} className="text-brand-green" />, title: 'Tentang (About)', description: 'Cerita singkat bisnis atau personal branding. Cocok buat bangun kepercayaan.' },
    { icon: <Briefcase size={32} className="text-brand-green" />, title: 'Layanan / Jasa (Services)', description: 'Penjelasan detail semua layanan yang ditawarkan. Bisa dibagi per kategori atau paket.' },
    { icon: <GalleryVertical size={32} className="text-brand-green" />, title: 'Portofolio / Showcase', description: 'Kumpulan hasil kerja. Bisa filter berdasarkan kategori atau jenis project.' },
    { icon: <PenSquare size={32} className="text-brand-green" />, title: 'Blog / Artikel', description: 'Tempat berbagi tips, berita, atau update bisnis. SEO-friendly buat naik di Google.' },
    { icon: <Send size={32} className="text-brand-green" />, title: 'Kontak (Contact)', description: 'Form kontak singkat, tombol chat WA, alamat & media sosial.' },
    { icon: <Tags size={32} className="text-brand-green" />, title: 'Halaman Harga (Pricing)', description: 'Detail paket harga & perbandingan fitur.' },
    { icon: <HelpCircle size={32} className="text-brand-green" />, title: 'FAQ', description: 'Pertanyaan umum yang sering ditanyakan calon klien.' },
    { icon: <Quote size={32} className="text-brand-green" />, title: 'Testimoni / Review', description: 'Kumpulan review klien dalam bentuk teks atau video.' },
    { icon: <Camera size={32} className="text-brand-green" />, title: 'Galeri', description: 'Foto atau video produk, acara, atau behind the scene.' },
    { icon: <Users size={32} className="text-brand-green" />, title: 'Tim Kami (Our Team)', description: 'Foto & profil anggota tim.' },
    { icon: <CalendarDays size={32} className="text-brand-green" />, title: 'Event / Promo', description: 'Info promo khusus atau pengumuman event.' },
    { icon: <Map size={32} className="text-brand-green" />, title: 'Lokasi / Map', description: 'Google Maps embed + alamat lengkap.' },
    { icon: <ClipboardList size={32} className="text-brand-green" />, title: 'Halaman Form Khusus', description: 'Booking, reservasi, pendaftaran event.' }
];

export const FAQ_ITEMS = [
  {
    question: 'Berapa lama proses pengerjaan sebuah website?',
    answer: 'Tergantung kompleksitas. Untuk paket Start/Pro, biasanya sekitar 7-14 hari kerja setelah semua materi (teks, gambar) kami terima. Untuk paket Custom, waktunya akan disesuaikan dengan scope proyek.'
  },
  {
    question: 'Apakah harga sudah termasuk domain dan hosting?',
    answer: 'Betul! Setiap paket sudah termasuk gratis domain (.com) dan hosting untuk tahun pertama, serta SSL untuk keamanan. Kamu tidak perlu pusing soal teknis di awal.'
  },
  {
    question: 'Apakah ada garansi setelah website jadi?',
    answer: 'Tentu. Kami memberikan garansi maintenance selama 1-2 bulan (tergantung paket) untuk memastikan website berjalan lancar dan bebas dari error teknis setelah launching.'
  },
  {
    question: 'Apakah saya bisa mengelola konten website sendiri nanti?',
    answer: 'Sangat bisa! Kami membangun website di atas platform (CMS) yang user-friendly. Kami akan berikan panduan singkat agar kamu bisa update konten seperti teks, gambar, atau artikel blog dengan mudah.'
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Sistemnya fleksibel. Biasanya 50% DP (Down Payment) di awal sebagai tanda jadi, dan 50% sisanya setelah website selesai dan siap untuk online (sebelum serah terima akun).'
  },
  {
    question: 'Saya masih bingung, bisa konsultasi dulu?',
    answer: 'Tentu saja! Konsultasi gratis dan tidak ada kewajiban. Justru kami senang bisa diskusi dulu untuk memahami kebutuhanmu. Klik tombol "Konsultasi Gratis" dan kita ngobrol santai.'
  },
];

export const DUMMY_BLOGS: Blog[] = [
  {
    id: 1,
    slug: '5-tanda-kamu-butuh-website-baru',
    title: '5 Tanda Kamu Butuh Website Baru untuk Bisnismu',
    excerpt: 'Websitemu sepi pengunjung? Konversi rendah? Mungkin ini saatnya untuk upgrade. Kenali 5 tanda bahwa bisnismu butuh website baru yang lebih profesional.',
    imageUrl: 'https://picsum.photos/seed/blog-website-baru/800/450',
    category: 'Tips Bisnis',
    tags: ['Website', 'Bisnis Online', 'UMKM', 'SEO'],
    author: 'Mas Boy',
    publishedDate: '2023-10-26T00:00:00Z',
    content: `
      <p class="lead">Website lama terasa kurang maksimal? Banyak pemilik bisnis merasakan hal yang sama. Terkadang, kita terlalu sibuk mengurus operasional sampai lupa bahwa 'rumah digital' kita sudah usang. Berikut adalah 5 tanda jelas bahwa sudah saatnya kamu mempertimbangkan untuk membuat website baru.</p>
      
      <h2>1. Desain Ketinggalan Zaman</h2>
      <p>Tampilan adalah kesan pertama. Jika desain websitemu terlihat seperti peninggalan tahun 2010, pengunjung mungkin akan meragukan profesionalitas bisnismu. Desain modern tidak hanya soal estetika, tapi juga soal kepercayaan dan kredibilitas.</p>
      <img src="https://picsum.photos/seed/blog-design/600/350" alt="Contoh desain website modern vs lama" class="rounded-lg my-4">
      
      <h2>2. Tidak Mobile-Friendly (Responsif)</h2>
      <p>Lebih dari 60% trafik internet datang dari perangkat mobile. Jika websitemu sulit dinavigasi di smartphone, kamu kehilangan banyak calon pelanggan potensial. Coba buka websitemu di HP sekarang. Apakah teksnya mudah dibaca? Apakah tombolnya mudah diklik? Jika tidak, ini masalah besar.</p>
      
      <h2>3. Loadingnya Super Lambat</h2>
      <p>Studi menunjukkan bahwa jika website tidak termuat dalam 3 detik, lebih dari 50% pengunjung akan langsung pergi. Kecepatan adalah kunci. Website modern dibangun dengan teknologi terbaru yang memastikan performa cepat dan efisien.</p>

      <h2>4. Sulit Ditemukan di Google (SEO Buruk)</h2>
      <p>Punya website tapi tidak ada yang mengunjungi itu seperti punya toko tapi tidak ada yang tahu lokasinya. Website lama seringkali tidak dioptimalkan untuk mesin pencari (SEO). Website baru yang dibangun dengan praktik SEO terbaik akan lebih mudah ditemukan oleh calon pelangganmu di Google.</p>
      
      <h2>5. Kamu Sulit Mengupdate Konten Sendiri</h2>
      <p>Mau ganti nomor telepon atau tambah promo baru tapi harus hubungi developer dulu? Repot banget! Website modern harusnya dibangun di atas Content Management System (CMS) yang memungkinkan kamu mengelola konten dengan mudah tanpa perlu skill koding.</p>
      
      <h3>Kesimpulan</h3>
      <p>Menginvestasikan dana untuk website baru bukan sekadar 'biaya', tapi investasi untuk pertumbuhan bisnismu. Website profesional adalah aset digital yang bekerja 24/7 untukmu. Jika kamu merasakan salah satu dari tanda di atas, mungkin ini saatnya untuk <a href="/kontak" class="text-brand-green font-bold hover:underline">ngobrol dengan Mas Boy</a> untuk konsultasi gratis.</p>
    `
  },
  {
    id: 2,
    slug: 'seo-101-untuk-umkm',
    title: 'SEO 101 untuk Pemilik UMKM: Panduan Praktis untuk Pemula',
    excerpt: 'Bingung soal SEO? Tenang, kamu nggak sendirian. Pelajari dasar-dasar SEO yang bisa langsung kamu terapkan di website UMKM-mu agar mudah ditemukan pelanggan.',
    imageUrl: 'https://picsum.photos/seed/blog-seo-umkm/800/450',
    category: 'SEO',
    tags: ['SEO', 'UMKM', 'Google', 'Pemasaran Digital'],
    author: 'Mas Boy',
    publishedDate: '2023-10-15T00:00:00Z',
    content: `
      <p class="lead">SEO atau Search Engine Optimization terdengar teknis dan menakutkan bagi banyak pemilik UMKM. Padahal, konsep dasarnya sederhana: membuat websitemu 'disukai' oleh Google sehingga ditampilkan di halaman pertama saat orang mencari produk atau jasamu.</p>

      <h2>Kenapa SEO Penting untuk UMKM?</h2>
      <p>Bayangkan punya toko di gang sempit yang tidak diketahui orang. Itulah website tanpa SEO. SEO membantu 'memindahkan' tokomu ke jalan utama yang ramai, tempat calon pelanggan berkumpul. Ini adalah cara pemasaran paling efektif dan hemat biaya dalam jangka panjang.</p>

      <h2>3 Langkah Awal SEO yang Bisa Kamu Lakukan Sekarang:</h2>
      
      <h3>1. Riset Kata Kunci Sederhana</h3>
      <p>Pikirkan, kata apa yang akan diketik calon pelangganmu di Google untuk menemukan bisnismu? Jika kamu jual "Kopi Gula Aren di Jogja", maka itulah kata kuncimu. Gunakan kata kunci ini di judul halaman, deskripsi, dan konten websitemu.</p>
      
      <h3>2. Optimasi On-Page Dasar</h3>
      <p>Ini adalah hal-hal yang bisa kamu kontrol langsung di websitemu:</p>
      <ul>
        <li><strong>Title Tag:</strong> Judul setiap halaman harus unik dan mengandung kata kunci utama. Contoh: "Jual Kopi Gula Aren Enak di Jogja | Kopi Senja".</li>
        <li><strong>Meta Description:</strong> Deskripsi singkat (sekitar 155 karakter) yang muncul di bawah judul di hasil pencarian Google. Buatlah semenarik mungkin.</li>
        <li><strong>Konten Berkualitas:</strong> Tulis deskripsi produk atau layanan yang jelas dan informatif.</li>
      </ul>

      <h3>3. Daftarkan di Google Business Profile</h3>
      <p>Ini adalah langkah wajib untuk bisnis lokal. Daftarkan bisnismu di Google Business Profile (dulu Google My Business) secara gratis. Ini akan membuat bisnismu muncul di Google Maps dan hasil pencarian lokal.</p>
      <img src="https://picsum.photos/seed/blog-gmb/600/350" alt="Contoh tampilan Google Business Profile" class="rounded-lg my-4">

      <h3>Masih Bingung?</h3>
      <p>SEO adalah maraton, bukan sprint. Lakukan langkah-langkah kecil ini secara konsisten. Jika websitemu dibangun oleh profesional, biasanya fondasi SEO dasarnya sudah disertakan. Butuh bantuan untuk audit atau strategi SEO lebih lanjut? <a href="/kontak" class="text-brand-green font-bold hover:underline">Hubungi Mas Boy</a> kapan saja!</p>
    `
  },
  {
    id: 3,
    slug: 'wordpress-vs-custom-code',
    title: 'Memilih Platform Website: WordPress vs Custom Code',
    excerpt: 'Bingung memilih antara WordPress yang populer atau website custom yang fleksibel? Mas Boy bedah kelebihan dan kekurangan masing-masing untuk membantumu membuat keputusan.',
    imageUrl: 'https://picsum.photos/seed/blog-platform/800/450',
    category: 'Tutorial Teknis',
    tags: ['WordPress', 'Custom Code', 'Web Development', 'Platform'],
    author: 'Mas Boy',
    publishedDate: '2023-09-28T00:00:00Z',
    content: `
      <p class="lead">Salah satu keputusan terbesar saat membuat website adalah memilih platform yang tepat. Dua pilihan paling umum adalah menggunakan CMS populer seperti WordPress atau membangun dari nol dengan custom code. Keduanya punya kelebihan dan kekurangan.</p>
      
      <h2>WordPress: Si Raksasa Populer</h2>
      <p>WordPress menguasai lebih dari 40% website di seluruh dunia. Ini adalah platform yang sangat kuat dan fleksibel jika digunakan dengan benar.</p>
      <h4>Kelebihan WordPress:</h4>
      <ul>
        <li><strong>User-Friendly:</strong> Dashboardnya relatif mudah dipelajari untuk mengelola konten.</li>
        <li><strong>Ekosistem Besar:</strong> Ribuan tema dan plugin tersedia untuk menambah fungsionalitas.</li>
        <li><strong>Biaya Awal Lebih Rendah:</strong> Banyak tema dan plugin gratis atau murah.</li>
      </ul>
      <h4>Kekurangan WordPress:</h4>
      <ul>
        <li><strong>Keamanan:</strong> Popularitasnya membuatnya jadi target utama hacker. Butuh maintenance rutin.</li>
        <li><strong>Performa:</strong> Terlalu banyak plugin bisa membuat website jadi lambat.</li>
        <li><strong>Kustomisasi Terbatas:</strong> Terkadang sulit untuk mendapatkan fungsionalitas yang sangat spesifik tanpa kompromi.</li>
      </ul>

      <h2>Custom Code: Fleksibilitas Tanpa Batas</h2>
      <p>Membangun website dari nol menggunakan teknologi seperti React, Next.js, atau lainnya. Ini seperti membangun rumah sesuai denah yang kita gambar sendiri.</p>
      <h4>Kelebihan Custom Code:</h4>
      <ul>
        <li><strong>Fleksibilitas Maksimal:</strong> Fitur apapun yang bisa kamu bayangkan, bisa dibuat.</li>
        <li><strong>Performa Optimal:</strong> Website hanya memuat kode yang benar-benar dibutuhkan, jadi sangat cepat.</li>
        <li><strong>Keamanan Lebih Tinggi:</strong> Tidak bergantung pada plugin pihak ketiga yang rentan.</li>
      </ul>
      <h4>Kekurangan Custom Code:</h4>
      <ul>
        <li><strong>Biaya Lebih Tinggi:</strong> Membutuhkan waktu dan keahlian developer yang lebih intensif.</li>
        <li><strong>Waktu Pengerjaan Lebih Lama:</strong> Semua dibangun dari nol.</li>
        <li><strong>Ketergantungan pada Developer:</strong> Perubahan signifikan mungkin memerlukan bantuan developer.</li>
      </ul>

      <h2>Jadi, Pilih yang Mana?</h2>
      <p>Tidak ada jawaban yang benar-benar mutlak. Ini tergantung kebutuhanmu:</p>
      <ul>
        <li>Pilih <strong>WordPress</strong> jika: Kamu butuh blog atau website company profile standar, budget terbatas, dan ingin cepat online.</li>
        <li>Pilih <strong>Custom Code</strong> jika: Kamu butuh fitur unik (seperti platform e-commerce khusus, sistem booking kompleks, SaaS), performa super cepat adalah prioritas, dan punya budget investasi yang lebih besar.</li>
      </ul>
      <p>Di BoyCodes, kami menyediakan kedua solusi tersebut. Yang terpenting adalah diskusi di awal untuk menentukan mana yang paling pas untuk tujuan bisnismu.</p>
    `
  }
];