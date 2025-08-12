
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, ChevronDown } from 'lucide-react';
import { PERORANGAN_PACKAGES, UMKM_PACKAGES, ENTERPRISE_PACKAGES, SECTION_CHOICES, PAGE_CHOICES } from '../constants';
import { ServicePackage, WebService } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Persona = 'Perorangan' | 'UMKM' | 'Enterprise';

const packageData: Record<Persona, ServicePackage[]> = {
  'Perorangan': PERORANGAN_PACKAGES,
  'UMKM': UMKM_PACKAGES,
  'Enterprise': ENTERPRISE_PACKAGES,
};

const personaDescriptions: Record<Persona, string> = {
  'Perorangan': 'Cocok buat: Content creator, fotografer, videografer, arsitek, desainer fashion, freelancer.',
  'UMKM': 'Cocok buat: Restoran, coffee shop, toko online, jasa lokal.',
  'Enterprise': 'Cocok buat: Perusahaan, startup, lembaga pendidikan.',
};

const AnimatedDiv = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return <div ref={ref} className={className}>{children}</div>;
};

const PackageCard: React.FC<{ pkg: ServicePackage }> = ({ pkg }) => {
    const cardRef = useScrollAnimation<HTMLDivElement>();
    const isFavorite = pkg.isFavorite ?? false;

    const cardClasses = isFavorite
        ? "relative bg-brand-green text-brand-dark rounded-xl p-8 h-full flex flex-col ring-4 ring-brand-green/60 ring-offset-4 ring-offset-brand-dark shadow-2xl shadow-brand-green/30 transform lg:scale-105 z-10 overflow-hidden hover:scale-[1.03] lg:hover:scale-110 transition-transform duration-300"
        : "relative bg-brand-gray border border-brand-white/10 rounded-xl p-8 h-full flex flex-col transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300";

    const titleClasses = isFavorite ? "" : "text-brand-green";
    const checkIconClasses = isFavorite ? "text-brand-dark" : "text-brand-green";
    const buttonClasses = isFavorite
        ? "w-full text-center block bg-brand-dark text-brand-green font-bold py-3 px-6 rounded-lg hover:bg-brand-gray transition-colors"
        : "w-full text-center block bg-brand-white/10 text-brand-white font-bold py-3 px-6 rounded-lg hover:bg-brand-white/20 transition-colors";

    return (
        <div ref={cardRef} className={cardClasses}>
            {isFavorite && (
                <>
                    <div className="absolute top-0 right-0 w-24 h-24">
                        <div className="absolute w-full h-full bg-blue-600" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                    </div>
                    <Star size={20} className="text-white absolute top-5 right-5" />
                </>
            )}
            <h3 className={`text-2xl font-bold font-heading ${titleClasses}`}>{pkg.name}</h3>
            {pkg.description && <p className={`mt-2 text-sm italic ${isFavorite ? 'text-brand-dark/90' : 'text-brand-white/70'}`}>{pkg.description}</p>}
            <p className="my-4 text-4xl font-bold font-heading">{pkg.price}</p>
            <ul className="space-y-3 flex-grow">
                {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check size={20} className={`${checkIconClasses} flex-shrink-0 mt-1`} />
                        <span className={isFavorite ? 'text-brand-dark/90' : 'text-brand-white/90'}>{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-8">
                <Link to="/kontak" className={buttonClasses}>
                    Pilih Paket Ini
                </Link>
            </div>
        </div>
    );
};


const Layanan: React.FC<{ services: WebService[] }> = ({ services }) => {
  const [activePersona, setActivePersona] = useState<Persona>('UMKM');
  const [showAllServices, setShowAllServices] = useState(false);

  const servicesToShow = showAllServices ? services : services.slice(0, 4);

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="py-24 text-center bg-brand-gray">
          <AnimatedDiv>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading">Layanan & Paket Harga</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-white/70">Solusi terbaik untuk UMKM, Perusahaan, dan Personal Brand. Pilih paket yang paling sesuai dengan target dan gaya bisnismu.</p>
          </AnimatedDiv>
      </section>

      {/* Jenis Website yang Bisa Dibuat */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedDiv className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading">Jenis Website Apa Aja yang Bisa Dibuat?</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-white/70">Dari yang simpel sampai yang kompleks, Mas Boy siap wujudkan idemu. Ini beberapa contoh solusi digital yang bisa kita bangun bersama.</p>
            </AnimatedDiv>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesToShow.map((service, index) => (
                <AnimatedDiv key={index}>
                  <div className="bg-brand-gray p-6 rounded-xl border border-brand-white/10 h-full transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-300 text-left flex flex-col">
                    {typeof service.icon === 'string'
                      ? <div className="w-8 h-8 text-brand-green" dangerouslySetInnerHTML={{ __html: service.icon }} />
                      : React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-brand-green" })}
                    <h3 className="text-lg font-bold font-heading text-brand-white mt-4">{service.title}</h3>
                    <p className="mt-2 text-sm text-brand-white/70 flex-grow">{service.description}</p>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
            {!showAllServices && services.length > 4 && (
                <AnimatedDiv className="mt-12 text-center">
                    <button
                        onClick={() => setShowAllServices(true)}
                        className="bg-brand-gray text-brand-white font-bold font-heading py-3 px-8 rounded-lg text-lg hover:bg-brand-white/10 transition-all duration-300 inline-flex items-center gap-2"
                        aria-label="Lihat lebih banyak jenis website"
                    >
                        Lihat Lebih Banyak <ChevronDown size={20} />
                    </button>
                </AnimatedDiv>
            )}
        </div>
      </section>

      {/* Persona Switcher */}
      <section className="py-16 pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedDiv className="text-center">
             <h2 className="text-3xl lg:text-4xl font-bold font-heading">Paket Harga</h2>
          </AnimatedDiv>
          <AnimatedDiv className="flex flex-col sm:flex-row justify-center gap-2 bg-brand-gray p-2 rounded-lg max-w-lg mx-auto mt-8">
            {(['Perorangan', 'UMKM', 'Enterprise'] as Persona[]).map(persona => (
              <button
                key={persona}
                onClick={() => setActivePersona(persona)}
                className={`w-full py-3 px-4 font-bold rounded-md transition-colors duration-300 ${activePersona === persona ? 'bg-brand-green text-brand-dark' : 'bg-transparent text-brand-white hover:bg-brand-white/5'}`}
              >
                {persona}
              </button>
            ))}
          </AnimatedDiv>
          <AnimatedDiv className="mt-6 text-center max-w-2xl mx-auto">
            <p className="text-brand-white/80 text-lg">{personaDescriptions[activePersona]}</p>
          </AnimatedDiv>
        </div>
      </section>
      
      {/* Paket Harga */}
      <section className="pb-24 pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {packageData[activePersona].map(pkg => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Pilihan Section Favorit */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedDiv className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading">Pilihan Section Favorit</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-white/70">
                Karena di BoyCodes unlimited section, kamu bebas pilih mau taruh apa aja di web. Nih Mas Boy kasih list biar gampang nyusunnya.
              </p>
            </AnimatedDiv>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SECTION_CHOICES.map((choice, index) => (
                <AnimatedDiv key={index}>
                  <div className="bg-brand-gray p-6 rounded-xl border border-transparent hover:border-brand-green/30 transition-colors duration-300 h-full flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{choice.icon}</div>
                    <div>
                      <h4 className="font-bold font-heading text-lg">{choice.title}</h4>
                      <p className="text-sm text-brand-white/70 mt-1">{choice.description}</p>
                    </div>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
        </div>
      </section>

      {/* Pilihan Halaman Website */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedDiv className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading">Struktur Halaman Umum</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-white/70">
                Berikut adalah halaman-halaman standar yang bisa menjadi bagian dari websitemu. Kamu bisa pilih kombinasi yang paling sesuai.
              </p>
            </AnimatedDiv>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PAGE_CHOICES.map((choice, index) => (
                <AnimatedDiv key={index}>
                  <div className="bg-brand-gray p-6 rounded-xl border border-transparent hover:border-brand-green/30 transition-colors duration-300 h-full flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{choice.icon}</div>
                    <div>
                      <h4 className="font-bold font-heading text-lg">{choice.title}</h4>
                      <p className="text-sm text-brand-white/70 mt-1">{choice.description}</p>
                    </div>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
            <AnimatedDiv className="mt-12 text-center bg-brand-dark/50 border border-brand-white/10 p-6 rounded-lg max-w-4xl mx-auto text-brand-white/80">
                <p><span className="font-bold text-brand-green">Butuh Halaman Custom?</span> Kalau kamu mau halaman spesial yang nggak ada di list ini — misalnya integrasi sistem, landing page unik, atau fitur interaktif — tinggal hubungi Mas Boy langsung. Kita bahas bareng biar pas sama kebutuhan kamu.</p>
            </AnimatedDiv>
        </div>
      </section>
      
       {/* Note Konsultan */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedDiv className="bg-brand-gray border-l-4 border-brand-green p-8 rounded-r-lg max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold font-heading">Catatan dari Mas Boy 📝</h3>
                <p className="mt-4 text-brand-white/80">
                    Bingung pilih paket? Jangan khawatir. Aturan umumnya adalah, mulai dari yang paling sesuai dengan kebutuhanmu <span className="font-bold text-brand-green">saat ini</span>, bukan 5 tahun ke depan. Website yang baik itu tumbuh bersama bisnismu. Yang terpenting adalah <span className="font-bold">memulai</span>. Kalau masih ragu, chat aja, kita diskusikan solusinya bareng-bareng.
                </p>
            </AnimatedDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedDiv>
                <h2 className="text-3xl lg:text-4xl font-bold font-heading">Siap Wujudkan Idemu?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-brand-white/70">Mas Boy siap bantu kamu menemukan solusi web terbaik tanpa pusing. Mari diskusikan proyek pembuatan toko online atau websitemu.</p>
                <div className="mt-8">
                    <Link to="/kontak" className="inline-flex items-center gap-2 bg-brand-green text-brand-dark font-bold font-heading py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 button-glow">
                        Konsultasi Gratis Sekarang <ArrowRight size={20} />
                    </Link>
                </div>
            </AnimatedDiv>
        </div>
      </section>
    </div>
  );
};

export default Layanan;
