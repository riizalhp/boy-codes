

import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const pageLinks = [
    { href: '/layanan', label: 'Produk' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/showcase', label: 'Showcase' },
    { href: '/tentang', label: 'Tentang' },
    { href: '/kontak', label: 'Kontak' },
  ];

  const sectionLinks = [
    { href: '/#tentang', label: 'Tentang Mas Boy' },
    { href: '/#layanan', label: 'Segmen Layanan' },
    { href: '/#kenapa-kami', label: 'Kenapa Kami' },
    { href: '/#proses', label: 'Proses Kerja' },
    { href: '/#showcase', label: 'Showcase Proyek' },
    { href: '/#testimoni', label: 'Testimoni Klien' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <footer className="bg-brand-gray border-t border-brand-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="text-3xl font-heading font-normal tracking-wider">
              boy<span className="font-bold">codes</span><span className="text-brand-green">.</span>
            </Link>
            <p className="text-brand-white/60">
              Partner digital profesional untuk membantu UMKM, perorangan, dan perusahaan tumbuh di dunia online.
            </p>
            <div className="flex items-center space-x-4 pt-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-white/70 hover:text-brand-green transition-colors"><Github size={24} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-white/70 hover:text-brand-green transition-colors"><Linkedin size={24} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-white/70 hover:text-brand-green transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
          
          {/* Column 2: Navigasi */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-brand-white">Navigasi</h3>
            <ul className="space-y-2">
              {pageLinks.map(link => (
                <li key={link.href + link.label}>
                  <Link to={link.href} className="text-brand-white/70 hover:text-brand-green transition-colors flex items-center gap-2 group">
                    <span className="w-2 h-px bg-brand-white/70 group-hover:bg-brand-green transition-colors"></span>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Jelajahi Section */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-brand-white">Jelajahi Halaman Utama</h3>
            <ul className="space-y-2">
              {sectionLinks.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-brand-white/70 hover:text-brand-green transition-colors flex items-center gap-2 group">
                     <span className="w-2 h-px bg-brand-white/70 group-hover:bg-brand-green transition-colors"></span>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: CTA */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-brand-white">Punya Ide Proyek?</h3>
            <p className="text-brand-white/60">
              Jangan ragu untuk berdiskusi. Konsultasi gratis, tanpa kewajiban.
            </p>
            <Link to="/kontak" className="inline-flex items-center gap-2 bg-brand-green text-brand-dark font-bold font-heading py-2 px-5 rounded-md hover:bg-opacity-80 transition-all duration-300 button-glow">
              Mulai Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-brand-white/10 text-center text-brand-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} BoyCodes. All rights reserved. Dibuat dengan ❤️ di Yogyakarta.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;