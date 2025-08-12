import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedDiv = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return <div ref={ref} className={className}>{children}</div>;
};

const Tentang: React.FC = () => {
  const values = [
    { icon: <HeartHandshake className="w-10 h-10 text-brand-green"/>, title: "Ngerti Bisnis Kamu", description: "Saya nggak cuma nulis kode. Saya berusaha ngerti tujuan bisnismu, jadi website yang dibikin bener-bener jadi solusi." },
    { icon: <Lightbulb className="w-10 h-10 text-brand-green"/>, title: "Desain + Strategi", description: "Desain yang bagus itu wajib, tapi strategi di baliknya lebih penting. Keduanya harus jalan bareng biar hasilnya maksimal." },
    { icon: <ShieldCheck className="w-10 h-10 text-brand-green"/>, title: "After Sales Aman", description: "Hubungan kita nggak putus setelah website jadi. Ada masalah atau butuh bantuan? Mas Boy siap bantu." }
  ];

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="py-24 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <AnimatedDiv className="md:col-span-2 flex justify-center">
                    <img src="https://i.ibb.co/ymtyBd6p/boycodes-1.webp" alt="Mas Boy - Partner Digital Kamu" className="rounded-xl w-full max-w-sm object-cover shadow-2xl shadow-brand-green/10" />
                </AnimatedDiv>
                <AnimatedDiv className="md:col-span-3 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold font-heading">Mas Boy, <br /><span className="text-brand-green">Partner Digital Kamu</span></h1>
                    <p className="mt-6 text-lg text-brand-white/80">
                        Lebih dari sekadar developer. Saya adalah teman diskusi, problem solver, dan partner strategis yang akan membantumu menaklukkan dunia digital dengan percaya diri.
                    </p>
                </AnimatedDiv>
            </div>
        </div>
      </section>
      
      {/* Cerita Singkat */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedDiv className="max-w-3xl mx-auto text-left md:text-center">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading">Dari Hobi Ngoding Jadi Solusi Bisnis</h2>
              <div className="prose prose-xl prose-invert mt-6 mx-auto text-brand-white/80">
                <p>
                    Semuanya berawal dari rasa penasaran dengan baris-baris kode. Tapi lama-kelamaan, saya sadar hal yang paling seru bukanlah membuat website yang 'canggih', melainkan membuat website yang <span className="font-bold text-brand-green">'berguna'</span>.
                </p>
                <p>
                    Terlalu banyak bisnis keren yang potensinya terhambat karena websitenya nggak pas. Dari situlah "BoyCodes" lahir sebagai solusi jasa pembuatan website profesional. Misinya simpel: membantu UMKM dan bisnis sepertimu punya website yang tidak hanya berfungsi sebagai 'brosur online', tapi sebagai aset digital yang nyata-nyata membantu bisnismu tumbuh.
                </p>
              </div>
          </AnimatedDiv>
        </div>
      </section>
      
      {/* Value Kerja */}
      <section className="py-24 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedDiv className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading">Value yang Mas Boy Pegang Teguh</h2>
          </AnimatedDiv>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedDiv key={index}>
                <div className="bg-brand-dark p-8 rounded-xl h-full text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold font-heading">{value.title}</h3>
                  <p className="mt-3 text-brand-white/70">{value.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>
      
      {/* Behind the Scenes */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedDiv className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading">Di Balik Layar</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">Sedikit cuplikan dari proses kreatif, meeting, dan sesi ngopi bareng klien.</p>
          </AnimatedDiv>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedDiv className="transform hover:scale-105 transition-transform duration-300"><img src="https://picsum.photos/seed/bts1/500/500" alt="Proses desain website oleh BoyCodes" className="rounded-lg shadow-lg" /></AnimatedDiv>
            <AnimatedDiv className="transform hover:scale-105 transition-transform duration-300 mt-8"><img src="https://picsum.photos/seed/bts2/500/500" alt="Diskusi proyek dengan klien" className="rounded-lg shadow-lg" /></AnimatedDiv>
            <AnimatedDiv className="transform hover:scale-105 transition-transform duration-300"><img src="https://picsum.photos/seed/bts3/500/500" alt="Coding website di kantor BoyCodes" className="rounded-lg shadow-lg" /></AnimatedDiv>
            <AnimatedDiv className="transform hover:scale-105 transition-transform duration-300 mt-8"><img src="https://picsum.photos/seed/bts4/500/500" alt="Suasana kerja BoyCodes Yogyakarta" className="rounded-lg shadow-lg" /></AnimatedDiv>
          </div>
        </div>
      </section>

       {/* CTA */}
      <section className="pb-24">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedDiv>
                <h2 className="text-3xl lg:text-4xl font-bold font-heading">Tertarik Kolaborasi?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-brand-white/70">Kalau kamu cari partner yang bisa diajak mikir bareng, bukan cuma 'tukang', kamu datang ke tempat yang tepat.</p>
                <div className="mt-8">
                    <Link to="/kontak" className="inline-block bg-brand-green text-brand-dark font-bold font-heading py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 button-glow">
                        Hubungi Mas Boy
                    </Link>
                </div>
            </AnimatedDiv>
        </div>
      </section>
    </div>
  );
};

export default Tentang;