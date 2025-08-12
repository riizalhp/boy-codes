// This file uses .tsx because it might contain JSX, for example, icons.
import i18n from './i18n';
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
    title: i18n.t('Toko Online (E-Commerce Website)'),
    description: i18n.t('Website jualan produk lengkap dengan katalog, keranjang belanja, metode pembayaran, dan sistem pengiriman.'),
    tag: 'E-commerce',
  },
  {
    id: 2,
    icon: <Building2 className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Company Profile Website'),
    description: i18n.t('Situs resmi perusahaan untuk memperkenalkan brand, layanan, portofolio, dan kontak profesional.'),
    tag: 'Company Profile',
  },
  {
    id: 3,
    icon: <BookOpen className="w-8 h-8 text-brand-green" />,
    title: i18n.t('LMS (Learning Management System)'),
    description: i18n.t('Platform belajar online dengan fitur kursus, ujian, forum diskusi, dan sertifikat digital.'),
    tag: 'LMS',
  },
  {
    id: 4,
    icon: <CalendarCheck className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Booking & Reservation System'),
    description: i18n.t('Sistem pemesanan online untuk jadwal layanan atau fasilitas dengan konfirmasi otomatis.'),
    tag: 'Booking',
  },
  {
    id: 5,
    icon: <Ticket className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Event & E-Ticketing'),
    description: i18n.t('Website penjualan tiket acara dengan e-ticket & QR code scan-ready.'),
    tag: 'E-Ticketing',
  },
  {
    id: 6,
    icon: <HeartHandshake className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Fundraising & Donation Platform'),
    description: i18n.t('Platform penggalangan dana online, cocok untuk NGO, komunitas, atau proyek sosial.'),
    tag: 'Fundraising',
  },
  {
    id: 7,
    icon: <Users className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Forum & Community Platform'),
    description: i18n.t('Website untuk diskusi, berbagi informasi, dan membangun komunitas online.'),
    tag: 'Community',
  },
  {
    id: 8,
    icon: <KeyRound className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Membership Website'),
    description: i18n.t('Situs dengan konten eksklusif bagi anggota berbayar atau terdaftar.'),
    tag: 'Membership',
  },
  {
    id: 9,
    icon: <UserCircle className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Portfolio & Personal Branding'),
    description: i18n.t('Website personal untuk memamerkan karya, pengalaman, dan pencapaian.'),
    tag: 'Portfolio',
  },
  {
    id: 10,
    icon: <Newspaper className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Blog / News Portal'),
    description: i18n.t('Website berbasis artikel atau berita untuk edukasi, opini, atau informasi terkini.'),
    tag: 'Blog',
  },
  {
    id: 11,
    icon: <PlayCircle className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Media Streaming Website'),
    description: i18n.t('Platform untuk streaming musik, video, atau podcast secara online.'),
    tag: 'Streaming',
  },
  {
    id: 12,
    icon: <Film className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Video Platform'),
    description: i18n.t('Situs khusus untuk mengunggah, mengelola, dan membagikan video.'),
    tag: 'Video',
  },
  {
    id: 13,
    icon: <LayoutGrid className="w-8 h-8 text-brand-green" />,
    title: i18n.t('ERP (Enterprise Resource Planning)'),
    description: i18n.t('Sistem manajemen terpadu untuk keuangan, stok, produksi, dan operasional bisnis.'),
    tag: 'ERP',
  },
  {
    id: 14,
    icon: <Contact className="w-8 h-8 text-brand-green" />,
    title: i18n.t('CRM (Customer Relationship Management)'),
    description: i18n.t('Platform untuk mengelola data pelanggan, interaksi, dan penjualan.'),
    tag: 'CRM',
  },
  {
    id: 15,
    icon: <UserCog className="w-8 h-8 text-brand-green" />,
    title: i18n.t('HRIS (Human Resource Information System)'),
    description: i18n.t('Sistem manajemen SDM untuk absensi, payroll, cuti, dan data karyawan.'),
    tag: 'HRIS',
  },
  {
    id: 16,
    icon: <LifeBuoy className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Helpdesk & Support Ticketing'),
    description: i18n.t('Sistem layanan pelanggan dengan tiket, live chat, dan tracking progress.'),
    tag: 'Support',
  },
  {
    id: 17,
    icon: <ScanLine className="w-8 h-8 text-brand-green" />,
    title: i18n.t('POS (Point of Sale)'),
    description: i18n.t('Sistem kasir online untuk toko, restoran, atau bisnis retail.'),
    tag: 'POS',
  },
  {
    id: 18,
    icon: <Building className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Real Estate Listing'),
    description: i18n.t('Website daftar properti dengan peta, foto, dan fitur pencarian.'),
    tag: 'Real Estate',
  },
  {
    id: 19,
    icon: <Cloud className="w-8 h-8 text-brand-green" />,
    title: i18n.t('SaaS (Software as a Service) Platform'),
    description: i18n.t('Layanan aplikasi berbasis web untuk solusi digital yang bisa diakses kapan saja.'),
    tag: 'SaaS',
  },
  {
    id: 20,
    icon: <Mail className="w-8 h-8 text-brand-green" />,
    title: i18n.t('Undangan Digital'),
    description: i18n.t('Website undangan online dengan galeri foto, peta lokasi, RSVP, dan hitung mundur acara.'),
    tag: 'Invitation',
  },
];


export const WHY_US_POINTS = [
    { icon: <PenTool size={28} />, title: i18n.t('100% Desain Custom'), description: i18n.t('Desain unik tanpa template, khusus untuk brand kamu.') },
    { icon: <Layers size={28} />, title: i18n.t('Unlimited Halaman'), description: i18n.t('Fleksibilitas penuh sesuai paket yang kamu pilih.') },
    { icon: <Ear size={28} />, title: i18n.t('Paham Konteks Bisnis'), description: i18n.t('Fokus ke hasil dan ROI, bukan sekadar baris kode.') },
    { icon: <HeartHandshake size={28} />, title: i18n.t('Support Penuh'), description: i18n.t('Selalu ada untukmu, bahkan setelah proyek selesai.') },
];

export const PROCESS_STEPS = [
  {
    icon: <MessageSquare size={32} />,
    title: i18n.t('Ngobrol & Diskusi (Briefing)'),
    description: i18n.t('Kita gali ide & tujuan websitemu. Diskusi mendalam adalah kunci untuk membangun solusi yang tepat sasaran.'),
    note: i18n.t('Fase ini kunci segalanya. Makin jujur, makin mantap hasilnya.')
  },
  {
    icon: <BrainCircuit size={32} />,
    title: i18n.t('Strategi & Desain (Konsep)'),
    description: i18n.t('Mas Boy melakukan riset pasar, lalu merancang desain UI/UX yang menjual dan berfokus pada pengalaman pengguna.'),
    note: i18n.t('Di sini kita tentukan "nyawa" website-nya. Kamu bisa revisi sampai sreg.')
  },
  {
    icon: <Bot size={32} />,
    title: i18n.t('Eksekusi & Development (Coding)'),
    description: i18n.t('Desain diubah menjadi kode yang rapi dengan performa optimal. Koding bersih untuk website cepat dan modern.'),
    note: i18n.t('Proses ini butuh kesabaran, tapi hasilnya pasti sepadan.')
  },
  {
    icon: <Rocket size={32} />,
    title: i18n.t('Launching & Optimalisasi (Go Live!)'),
    description: i18n.t('Website siap diluncurkan! Setelah live, Mas Boy bantu optimasi dasar SEO dan memantau performa untuk kesuksesan jangka panjang.'),
    note: i18n.t('Perjuangan belum selesai, kita pantau bareng performanya.')
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
  { id: 1, quote: i18n.t('Mas Boy ngerti banget kebutuhan kami. Website baru bikin penjualan naik 3x lipat. Prosesnya juga cepat dan transparan!'), name: 'Sarah Livia', handle: '@sarahlivia', role: i18n.t('Owner Kopi Senja'), imageUrl: 'https://picsum.photos/seed/sarah-l/100/100' },
  { id: 2, quote: i18n.t('Portofolio saya sekarang bukan cuma galeri, tapi mesin klien. Jumlah klien internasional saya naik pesat setelah website dari Mas Boy live. Profesional banget!'), name: 'Jane Doe', handle: '@janedoe_photo', role: i18n.t('Fotografer Profesional'), imageUrl: 'https://picsum.photos/seed/andipratama-p/100/100' },
  { id: 3, quote: i18n.t('Sangat profesional. Dashboard internal baru kami dapat banyak pujian dari manajemen dan membantu efisiensi tim. Komunikasi lancar dan timeline-nya on point.'), name: 'Rina Wijaya', handle: '@rinawijaya', role: i18n.t('Project Manager CorpFlow'), imageUrl: 'https://picsum.photos/seed/rina-w/100/100' },
];

export const PERORANGAN_PACKAGES: ServicePackage[] = [
    {
        name: i18n.t('Start'),
        price: 'Rp 799.000',
        description: i18n.t('Biar personal brand kamu kelihatan rapi dan profesional, tapi tetap hemat.'),
        features: [
            i18n.t('Unlimited halaman & section (portofolio, galeri foto/video, bio, kontak)'),
            i18n.t('Desain custom sesuai personal style'),
            i18n.t('Mobile friendly'),
            i18n.t('1x konsultasi singkat (30 menit)'),
            i18n.t('1x revisi gratis'),
            i18n.t('SEO basic (biar gampang dicari di Google)'),
            i18n.t('Hosting 3 bulan + free SSL'),
            i18n.t('Garansi maintenance 1 minggu'),
        ],
    },
    {
        name: i18n.t('Pro'),
        price: 'Rp 1.299.000',
        description: i18n.t('Biar karya kamu nggak cuma dilihat, tapi juga di-notice orang.'),
        features: [
            i18n.t('Semua di Start, plus:'),
            i18n.t('Desain premium + animasi smooth'),
            i18n.t('Galeri portofolio interaktif'),
            i18n.t('Integrasi WhatsApp langsung'),
            i18n.t('3x revisi gratis'),
            i18n.t('2x konsultasi (total 1 jam)'),
            i18n.t('Hosting 6 bulan'),
            i18n.t('Garansi maintenance 1 bulan'),
        ],
        isFavorite: true,
    },
    {
        name: i18n.t('Custom'),
        price: 'Mulai Rp 2.000.000',
        description: i18n.t('Buat yang mau websitenya beda banget dari orang lain.'),
        features: [
            i18n.t('Semua di Pro, plus:'),
            i18n.t('Request fitur spesial (booking jadwal, form custom, dll.)'),
            i18n.t('Desain interaktif full'),
            i18n.t('Speed optimization'),
            i18n.t('Revisi fleksibel selama project'),
            i18n.t('Maintenance 2 bulan'),
        ],
    },
];

export const UMKM_PACKAGES: ServicePackage[] = [
    {
        name: i18n.t('Start'),
        price: 'Rp 999.000',
        description: i18n.t('Biar bisnis kamu langsung ada di Google tanpa ribet.'),
        features: [
            i18n.t('Unlimited halaman & section (produk, testimoni, kontak, promo)'),
            i18n.t('Desain custom simple & profesional'),
            i18n.t('Mobile friendly'),
            i18n.t('1x konsultasi singkat'),
            i18n.t('1x revisi gratis'),
            i18n.t('SEO basic untuk bisnis lokal'),
            i18n.t('Hosting 3 bulan + free SSL'),
            i18n.t('Garansi maintenance 1 minggu'),
        ],
    },
    {
        name: i18n.t('Pro'),
        price: 'Rp 1.499.000',
        description: i18n.t('Website yang nggak cuma ada, tapi juga jualan.'),
        features: [
            i18n.t('Semua di Start, plus:'),
            i18n.t('Desain premium + animasi smooth'),
            i18n.t('Halaman produk + galeri foto/video'),
            i18n.t('WhatsApp order langsung'),
            i18n.t('Form pemesanan sederhana'),
            i18n.t('3x revisi gratis'),
            i18n.t('Hosting 6 bulan'),
            i18n.t('Garansi maintenance 1 bulan'),
        ],
        isFavorite: true,
    },
    {
        name: i18n.t('Custom'),
        price: 'Mulai Rp 2.500.000',
        description: i18n.t('Full fitur, siap gas buat scale up bisnis.'),
        features: [
            i18n.t('Semua di Pro, plus:'),
            i18n.t('Fitur katalog lengkap + filter produk'),
            i18n.t('Form booking / reservasi custom'),
            i18n.t('Desain interaktif full'),
            i18n.t('Speed optimization'),
            i18n.t('Maintenance 2 bulan'),
        ],
    },
];

export const ENTERPRISE_PACKAGES: ServicePackage[] = [
    {
        name: i18n.t('Start'),
        price: 'Rp 1.500.000',
        description: i18n.t('Paket entry-level buat kebutuhan profil perusahaan sederhana.'),
        features: [
            i18n.t('Unlimited halaman & section (profil, layanan, kontak, news)'),
            i18n.t('Desain corporate clean & profesional'),
            i18n.t('Mobile friendly'),
            i18n.t('1x konsultasi singkat'),
            i18n.t('1x revisi gratis'),
            i18n.t('SEO basic'),
            i18n.t('Hosting 3 bulan + free SSL'),
            i18n.t('Garansi maintenance 1 minggu'),
        ],
    },
    {
        name: i18n.t('Pro'),
        price: 'Rp 2.500.000',
        description: i18n.t('Biar citra perusahaan makin meyakinkan di mata klien dan investor.'),
        features: [
            i18n.t('Semua di Start, plus:'),
            i18n.t('Desain premium + animasi profesional'),
            i18n.t('Integrasi chat / form kontak cepat'),
            i18n.t('Halaman layanan & portofolio lengkap'),
            i18n.t('3x revisi gratis'),
            i18n.t('2x konsultasi intensif'),
            i18n.t('Hosting 6 bulan'),
            i18n.t('Garansi maintenance 1 bulan'),
        ],
        isFavorite: true,
    },
    {
        name: i18n.t('Custom'),
        price: 'Mulai Rp 4.000.000',
        description: i18n.t('Website kelas korporat dengan fitur sesuai kebutuhan bisnis skala besar.'),
        features: [
            i18n.t('Semua di Pro, plus:'),
            i18n.t('Integrasi sistem internal / API khusus'),
            i18n.t('Fitur login user / portal karyawan'),
            i18n.t('Desain interaktif premium'),
            i18n.t('Speed optimization'),
            i18n.t('Maintenance 2 bulan'),
        ],
    },
];

export const SECTION_CHOICES = [
    { icon: <Image size={32} className="text-brand-green" />, title: i18n.t('Hero Section'), description: i18n.t('Banner utama + headline besar + CTA. Bisa pakai foto/ilustrasi/animasi.') },
    { icon: <UserCircle size={32} className="text-brand-green" />, title: i18n.t('Tentang / Profil'), description: i18n.t('Cerita singkat bisnis atau personal. Bisa tambah foto tim atau diri sendiri.') },
    { icon: <Briefcase size={32} className="text-brand-green" />, title: i18n.t('Layanan / Jasa'), description: i18n.t('Daftar layanan yang ditawarkan. Bisa dibuat card/grid.') },
    { icon: <GalleryVertical size={32} className="text-brand-green" />, title: i18n.t('Portofolio / Showcase'), description: i18n.t('Galeri foto atau video project. Bisa filter berdasarkan kategori.') },
    { icon: <Quote size={32} className="text-brand-green" />, title: i18n.t('Testimoni'), description: i18n.t('Review dari klien. Format slider atau grid.') },
    { icon: <Tags size={32} className="text-brand-green" />, title: i18n.t('Pricing / Paket'), description: i18n.t('Tabel harga atau card harga. Bisa pakai highlight paket favorit.') },
    { icon: <PenSquare size={32} className="text-brand-green" />, title: i18n.t('Blog / Artikel'), description: i18n.t('Tips, cerita, atau update bisnis. SEO-friendly.') },
    { icon: <HelpCircle size={32} className="text-brand-green" />, title: i18n.t('FAQ'), description: i18n.t('Pertanyaan & jawaban umum. Accordion style biar rapi.') },
    { icon: <Send size={32} className="text-brand-green" />, title: i18n.t('Kontak / Call to Action'), description: i18n.t('Form kontak singkat. Tombol WA langsung.') },
    { icon: <Camera size={32} className="text-brand-green" />, title: i18n.t('Galeri Foto / Video'), description: i18n.t('Cocok untuk fotografer, videografer, brand fashion.') },
    { icon: <CalendarDays size={32} className="text-brand-green" />, title: i18n.t('Event / Promo'), description: i18n.t('Pengumuman acara atau diskon. Countdown timer opsional.') },
    { icon: <Users size={32} className="text-brand-green" />, title: i18n.t('Team Section'), description: i18n.t('Foto & bio singkat anggota tim. Cocok untuk UMKM & Enterprise.') },
    { icon: <Map size={32} className="text-brand-green" />, title: i18n.t('Map / Lokasi'), description: i18n.t('Google Maps embed. Info alamat lengkap.') },
    { icon: <ClipboardList size={32} className="text-brand-green" />, title: i18n.t('Form Khusus'), description: i18n.t('Booking, reservasi, pendaftaran.') },
    { icon: <Share2 size={32} className="text-brand-green" />, title: i18n.t('Integrasi Sosial Media'), description: i18n.t('Feed Instagram, TikTok, atau YouTube langsung di web.') },
];

export const PAGE_CHOICES = [
    { icon: <FileText size={32} className="text-brand-green" />, title: i18n.t('Halaman Utama (Home)'), description: i18n.t('Pusat informasi pertama yang dilihat pengunjung. Bisa diisi hero banner, layanan, portofolio singkat, testimoni, dll.') },
    { icon: <UserCircle size={32} className="text-brand-green" />, title: i18n.t('Tentang (About)'), description: i18n.t('Cerita singkat bisnis atau personal branding. Cocok buat bangun kepercayaan.') },
    { icon: <Briefcase size={32} className="text-brand-green" />, title: i18n.t('Layanan / Jasa (Services)'), description: i18n.t('Penjelasan detail semua layanan yang ditawarkan. Bisa dibagi per kategori atau paket.') },
    { icon: <GalleryVertical size={32} className="text-brand-green" />, title: i18n.t('Portofolio / Showcase'), description: i18n.t('Kumpulan hasil kerja. Bisa filter berdasarkan kategori atau jenis project.') },
    { icon: <PenSquare size={32} className="text-brand-green" />, title: i18n.t('Blog / Artikel'), description: i18n.t('Tempat berbagi tips, berita, atau update bisnis. SEO-friendly buat naik di Google.') },
    { icon: <Send size={32} className="text-brand-green" />, title: i18n.t('Kontak (Contact)'), description: i18n.t('Form kontak singkat, tombol chat WA, alamat & media sosial.') },
    { icon: <Tags size={32} className="text-brand-green" />, title: i18n.t('Halaman Harga (Pricing)'), description: i18n.t('Detail paket harga & perbandingan fitur.') },
    { icon: <HelpCircle size={32} className="text-brand-green" />, title: i18n.t('FAQ'), description: i18n.t('Pertanyaan umum yang sering ditanyakan calon klien.') },
    { icon: <Quote size={32} className="text-brand-green" />, title: i18n.t('Testimoni / Review'), description: i18n.t('Kumpulan review klien dalam bentuk teks atau video.') },
    { icon: <Camera size={32} className="text-brand-green" />, title: i18n.t('Galeri'), description: i18n.t('Foto atau video produk, acara, atau behind the scene.') },
    { icon: <Users size={32} className="text-brand-green" />, title: i18n.t('Tim Kami (Our Team)'), description: i18n.t('Foto & profil anggota tim.') },
    { icon: <CalendarDays size={32} className="text-brand-green" />, title: i18n.t('Event / Promo'), description: i18n.t('Info promo khusus atau pengumuman event.') },
    { icon: <Map size={32} className="text-brand-green" />, title: i18n.t('Lokasi / Map'), description: i18n.t('Google Maps embed + alamat lengkap.') },
    { icon: <ClipboardList size={32} className="text-brand-green" />, title: i18n.t('Halaman Form Khusus'), description: i18n.t('Booking, reservasi, pendaftaran event.') }
];

export const FAQ_ITEMS = [
  {
    question: i18n.t('Berapa lama proses pengerjaan sebuah website?'),
    answer: i18n.t('Tergantung kompleksitas. Untuk paket Start/Pro, biasanya sekitar 7-14 hari kerja setelah semua materi (teks, gambar) kami terima. Untuk paket Custom, waktunya akan disesuaikan dengan scope proyek.')
  },
  {
    question: i18n.t('Apakah harga sudah termasuk domain dan hosting?'),
    answer: i18n.t('Betul! Setiap paket sudah termasuk gratis domain (.com) dan hosting untuk tahun pertama, serta SSL untuk keamanan. Kamu tidak perlu pusing soal teknis di awal.')
  },
  {
    question: i18n.t('Apakah ada garansi setelah website jadi?'),
    answer: i18n.t('Tentu. Kami memberikan garansi maintenance selama 1-2 bulan (tergantung paket) untuk memastikan website berjalan lancar dan bebas dari error teknis setelah launching.')
  },
  {
    question: i18n.t('Apakah saya bisa mengelola konten website sendiri nanti?'),
    answer: i18n.t('Sangat bisa! Kami membangun website di atas platform (CMS) yang user-friendly. Kami akan berikan panduan singkat agar kamu bisa update konten seperti teks, gambar, atau artikel blog dengan mudah.')
  },
  {
    question: i18n.t('Bagaimana sistem pembayarannya?'),
    answer: i18n.t('Sistemnya fleksibel. Biasanya 50% DP (Down Payment) di awal sebagai tanda jadi, dan 50% sisanya setelah website selesai dan siap untuk online (sebelum serah terima akun).')
  },
  {
    question: i18n.t('Saya masih bingung, bisa konsultasi dulu?'),
    answer: i18n.t('Tentu saja! Konsultasi gratis dan tidak ada kewajiban. Justru kami senang bisa diskusi dulu untuk memahami kebutuhanmu. Klik tombol "Konsultasi Gratis" dan kita ngobrol santai.')
  },
];
