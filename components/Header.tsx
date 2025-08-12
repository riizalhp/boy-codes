
import React, { useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, MapPin, Mail, Phone, ChevronDown, Globe } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { WebService } from '../types';

interface HeaderProps {
  services: WebService[];
}

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language.startsWith('en') ? 'EN' : 'ID';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 transition-colors hover:text-brand-green"
      >
        <Globe size={16} className="text-brand-green" />
        <span className="font-medium">{currentLanguage}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-brand-dark border border-brand-white/10 rounded-md shadow-lg z-10">
          <button
            onClick={() => changeLanguage('id')}
            className="w-full text-left px-4 py-2 text-sm text-brand-white hover:bg-brand-gray"
          >
            Bahasa Indonesia
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="w-full text-left px-4 py-2 text-sm text-brand-white hover:bg-brand-gray"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ services }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const productTimeoutRef = useRef<number | null>(null);
  const { t } = useTranslation();

  const handleProductEnter = () => {
    if (productTimeoutRef.current) {
      clearTimeout(productTimeoutRef.current);
    }
    setIsProductOpen(true);
  };

  const handleProductLeave = () => {
    productTimeoutRef.current = window.setTimeout(() => {
      setIsProductOpen(false);
    }, 200); // Jeda untuk memindahkan kursor ke dropdown
  };

  const activeLinkStyle = {
    color: '#39FF14',
    textShadow: '0 0 8px #39FF14'
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-brand-gray text-brand-white/80 border-b border-brand-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-green flex-shrink-0" />
            <span>Yogyakarta, Indonesia</span>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href="mailto:halo@boycodes.id" className="flex items-center gap-2 transition-colors hover:text-brand-green">
              <Mail size={16} className="text-brand-green" />
              <span className="hidden md:inline">halo@boycodes.id</span>
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-brand-green">
              <Phone size={16} className="text-brand-green" />
              <span className="hidden md:inline">+62 812-3456-7890</span>
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="bg-brand-dark/80 backdrop-blur-sm w-full border-b border-brand-gray/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-heading font-normal tracking-wider">
              boy<span className="font-bold">codes</span><span className="text-brand-green">.</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(link => {
                if (link.label === 'Produk') {
                  return (
                    <div
                      key={link.label}
                      onMouseEnter={handleProductEnter}
                      onMouseLeave={handleProductLeave}
                    >
                      <button className="font-heading text-base text-brand-white/80 hover:text-brand-green transition-colors duration-300 flex items-center gap-1">
                        {t(link.label)}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isProductOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    className="font-heading text-base text-brand-white/80 hover:text-brand-green transition-colors duration-300"
                    style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  >
                    {t(link.label)}
                  </NavLink>
                );
              })}
            </nav>
            <div className="hidden md:block">
              <Link to="/kontak" className="bg-brand-green text-brand-dark font-bold font-heading py-2 px-6 rounded-md hover:bg-opacity-80 transition-all duration-300 button-glow">
                {t('Mulai Project')}
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-brand-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Mega Menu */}
        {isProductOpen && (
            <div
                onMouseEnter={handleProductEnter}
                onMouseLeave={handleProductLeave}
                className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-7xl bg-brand-gray rounded-b-lg shadow-2xl shadow-brand-green/10 border-x border-b border-brand-white/10 p-6 z-50"
            >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {services.map(service => {
                      const iconClassName = 'w-8 h-8 text-brand-green flex-shrink-0 mt-1';
                      const serviceIcon = typeof service.icon === 'string'
                        ? <div className={iconClassName} dangerouslySetInnerHTML={{ __html: service.icon }} />
                        : React.cloneElement(service.icon as React.ReactElement<any>, { className: iconClassName });

                      return (
                        <Link
                          key={service.title}
                          to={`/showcase?tag=${encodeURIComponent(service.tag || '')}`}
                          onClick={() => setIsProductOpen(false)}
                          className="group flex items-start text-left gap-3 p-2 rounded-md hover:bg-brand-dark transition-colors duration-200"
                        >
                          {serviceIcon}
                          <div>
                            <p className="font-bold font-heading text-sm text-brand-white group-hover:text-brand-green transition-colors">
                                {t(service.title)}
                            </p>
                            <p className="text-xs text-brand-white/70 mt-1">
                                {t(service.description)}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                </div>
            </div>
        )}

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-[121px] left-0 w-full bg-brand-dark transition-all duration-500 ease-in-out transform ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="flex flex-col items-center space-y-6 py-8 border-t border-brand-gray/50">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-xl text-brand-white/80 hover:text-brand-green transition-colors duration-300"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {t(link.label)}
              </NavLink>
            ))}
             <Link to="/kontak" onClick={() => setIsOpen(false)} className="bg-brand-green text-brand-dark font-bold font-heading py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 button-glow mt-4">
                {t('Mulai Project')}
              </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
