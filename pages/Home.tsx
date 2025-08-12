
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LAYANAN_SEGMENTS, MASALAH_ITEMS, WHY_US_POINTS, PROCESS_STEPS, COMPANIES_WORKED_WITH, FAQ_ITEMS } from '../constants';
import { ArrowRight, Star, ThumbsUp, Clock, Heart, MessageCircle, Share2, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { ProjectCard } from '../components/ProjectCard';
import { Project, Testimonial } from '../types';

const Section: React.FC<{ children: React.ReactNode; className?: string, id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-20 sm:py-24 lg:py-32 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const AnimatedDiv = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return <div ref={ref} className={className}>{children}</div>;
};

const AnimatedStat = ({ icon, end, suffix, label }: { icon: React.ReactNode; end: number; suffix: string; label: string }) => {
    const countRef = useCountUp(end);
    const { t } = useTranslation();
    return (
        <AnimatedDiv className="bg-brand-gray p-6 rounded-xl border border-brand-white/10 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl lg:text-6xl font-bold font-heading text-brand-green">
                <span ref={countRef}>0</span>{suffix}
            </div>
            <p className="mt-3 text-lg text-brand-white/80 flex items-center justify-center gap-2">
                {icon}
                <span>{t(label)}</span>
            </p>
        </AnimatedDiv>
    );
};

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="border-b border-brand-white/10 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg font-semibold font-heading text-brand-white hover:text-brand-green transition-colors">{t(question)}</h4>
        <ChevronDown
          size={24}
          className={`flex-shrink-0 text-brand-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-brand-white/80">{t(answer)}</p>
        </div>
      </div>
    </div>
  );
};


const Home: React.FC<{ projects: Project[]; testimonials: Testimonial[] }> = ({ projects, testimonials }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-brand-dark text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedDiv>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading tracking-tight leading-tight">
              {t('Jasa Pembuatan Website Profesional di Yogyakarta')}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-brand-white/80">
              {t('Bikin website yang menghasilkan untuk UMKM, personal brand, dan perusahaan. Desain modern, SEO-friendly, dan siap membantu bisnismu berkembang.')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div>
                <Link to="/kontak" className="w-full sm:w-auto bg-brand-green text-brand-dark font-bold font-heading py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center gap-2 button-glow">
                  {t('Konsultasi Gratis')} <ArrowRight size={20} />
                </Link>
                <p className="text-xs text-brand-white/60 mt-2">{t('Gratis 30 menit ngobrol strategi bareng Mas Boy')}</p>
              </div>
              <Link to="/layanan" className="w-full sm:w-auto bg-brand-gray text-brand-white font-bold font-heading py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300">
                {t('Lihat Paket')}
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Mas Boy Itu Siapa? */}
      <Section id="tentang" className="bg-brand-gray">
        <AnimatedDiv className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading">{t('Mas Boy itu Partner Digital Kamu.')}</h2>
                <p className="mt-4 text-lg text-brand-white/70">{t('Bukan cuma coder, tapi partner strategis yang ngerti bisnis kamu. Dari personal branding sampai pembuatan toko online, Mas Boy siap bikin kamu percaya diri di dunia online.')}</p>
            </div>
            <div className="flex justify-center">
                <img src="https://i.ibb.co/ymtyBd6p/boycodes-1.webp" alt="Mas Boy - Partner Digital Profesional" className="rounded-xl w-64 h-64 lg:w-80 lg:h-80 object-cover border-4 border-brand-green/50" />
            </div>
        </AnimatedDiv>
      </Section>

      {/* Masalah yang Sering Dialami */}
      <Section id="solusi">
        <AnimatedDiv className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">{t('Sering Ngerasain Ini?')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">{t('Kamu nggak sendirian. Ini beberapa masalah yang sering klien Mas Boy alamin sebelum kami bantu.')}</p>
        </AnimatedDiv>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {MASALAH_ITEMS.map((item, index) => (
            <AnimatedDiv key={index}>
              <div className="bg-brand-gray p-8 rounded-xl border border-brand-white/10 h-full transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold font-heading text-brand-green">{t(item.title)}</h3>
                <p className="mt-3 text-brand-white/70">{t(item.description)}</p>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </Section>
      
      {/* Segmen Layanan */}
      <Section id="layanan" className="bg-brand-gray">
          <AnimatedDiv className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading">{t('Solusi Lengkap Sesuai Kebutuhan')}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">{t('Baik kamu perorangan, UMKM, atau perusahaan besar, Mas Boy punya solusi jasa bikin website yang pas.')}</p>
          </AnimatedDiv>
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            {LAYANAN_SEGMENTS.map((item, index) => (
              <AnimatedDiv key={index}>
                 <div className="bg-brand-dark p-8 rounded-xl h-full flex flex-col">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold font-heading">{t(item.title)}</h3>
                    <p className="mt-2 text-brand-white/70 flex-grow">{t(item.description)}</p>
                    <Link to="/showcase" className="mt-6 text-brand-green font-semibold hover:text-white transition-colors">
                      {t('Lihat Contoh')}
                    </Link>
                 </div>
              </AnimatedDiv>
            ))}
          </div>
      </Section>

      {/* Kenapa Harus Mas Boy? */}
      <Section id="kenapa-kami">
        <AnimatedDiv className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading">{t('Kenapa Harus Mas Boy?')}</h2>
            <p className="mt-4 text-lg text-brand-white/80">{t('Karena website kamu harus kerja 24/7 buat bisnis, bukan cuma jadi pajangan.')}</p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {WHY_US_POINTS.map((item, index) => (
                    <div key={index} className="group bg-brand-gray p-6 rounded-xl border border-brand-white/10 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/10 transition-all duration-300 transform hover:-translate-y-1 text-left h-full">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 text-brand-green transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                            <div>
                                <h4 className="font-bold font-heading text-lg">{t(item.title)}</h4>
                                <p className="text-sm text-brand-white/70 mt-1">{t(item.description)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 pt-12 border-t border-brand-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <AnimatedStat icon={<Star size={24} />} end={50} suffix="+" label={t("Website Dibangun")} />
                    <AnimatedStat icon={<ThumbsUp size={24} />} end={100} suffix="%" label={t("Client Puas")} />
                    <AnimatedStat icon={<Clock size={24} />} end={98} suffix="%" label={t("Tepat Waktu")} />
                </div>
            </div>
          </AnimatedDiv>
      </Section>
      
      {/* Proses Kerja */}
      <Section id="proses">
        <AnimatedDiv className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">{t('Proses Kerja Mas Boy')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">{t('Transparan, kolaboratif, dan fokus pada hasil. Begini cara kita bekerja sama.')}</p>
        </AnimatedDiv>
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-white/10" aria-hidden="true"></div>
            {PROCESS_STEPS.map((step, index) => (
              <AnimatedDiv key={index} className="relative mb-10 md:mb-16">
                <div className="flex items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                  <div className="w-1/2 px-6">
                    <div className={`text-center md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green text-brand-dark mb-4`}>{step.icon}</div>
                      <h3 className="text-2xl font-bold font-heading">{t(step.title)}</h3>
                      <p className="mt-2 text-brand-white/80">{t(step.description)}</p>
                      <p className="mt-3 text-sm text-brand-green/80 italic">"{t(step.note)}"</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-green border-4 border-brand-dark"></div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Showcase Singkat */}
      <Section id="showcase" className="bg-brand-gray">
        <AnimatedDiv className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">{t('Portofolio & Hasil Karya Terbaik')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">{t('Beberapa proyek pilihan yang sudah bikin klien bangga dan bisnisnya berkembang.')}</p>
        </AnimatedDiv>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <AnimatedDiv key={project.id}>
              <ProjectCard project={project} />
            </AnimatedDiv>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/showcase" className="text-brand-green font-semibold text-lg hover:text-white transition-colors flex items-center justify-center gap-2">
            {t('Lihat Semua Proyek')} <ArrowRight size={20} />
          </Link>
        </div>
      </Section>

      {/* Company Worked With */}
      <Section className="py-20 sm:py-24 bg-brand-dark">
        <AnimatedDiv className="text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-white/60">{t('DIPERCAYA OLEH BRAND TERKEMUKA')}</h3>
        </AnimatedDiv>
        <AnimatedDiv className="mt-12 w-full inline-flex flex-nowrap overflow-hidden marquee-container">
            <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-marquee">
                {COMPANIES_WORKED_WITH.map((company, index) => (
                    <img key={`${company.name}-${index}`} src={company.logoUrl} alt={`Logo ${company.name}`} className="h-14 mx-8 sm:mx-12" />
                ))}
            </div>
            <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-marquee" aria-hidden="true">
                 {COMPANIES_WORKED_WITH.map((company, index) => (
                    <img key={`${company.name}-clone-${index}`} src={company.logoUrl} alt={`Logo ${company.name}`} className="h-14 mx-8 sm:mx-12" />
                ))}
            </div>
        </AnimatedDiv>
      </Section>
      
      {/* Testimoni */}
      <Section id="testimoni" className="bg-brand-gray">
        <AnimatedDiv className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">{t('Kata Mereka Tentang Mas Boy')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">{t('Testimoni asli dari klien yang sudah merasakan dampak positif dari jasa pembuatan website kami.')}</p>
        </AnimatedDiv>
        <div className="mt-16 w-full inline-flex flex-nowrap overflow-hidden marquee-container">
            <div className="flex items-stretch animate-marquee-reverse">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="flex-none w-full max-w-sm md:max-w-md p-3">
                  <div className="bg-brand-dark p-6 rounded-xl border border-brand-white/10 flex flex-col h-full gap-4 transition-all duration-300 hover:border-brand-green/30 hover:shadow-2xl hover:shadow-brand-green/10">
                    <div className="flex items-center gap-4">
                        <img src={testimonial.imageUrl} alt={`Foto profil ${testimonial.name}`} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                        <h4 className="font-bold font-heading text-brand-white">{testimonial.name}</h4>
                        <p className="text-sm text-brand-white/60">{testimonial.handle} - <span className="text-xs">{testimonial.role}</span></p>
                        </div>
                    </div>
                    <p className="text-brand-white/80 flex-grow">
                        {t(testimonial.quote)}
                    </p>
                    <div className="flex items-center gap-6 text-brand-white/50 pt-4 border-t border-brand-white/10">
                        <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
                        <Heart size={18} />
                        <span className="text-sm">2.1k</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-brand-green transition-colors cursor-pointer">
                        <MessageCircle size={18} />
                        <span className="text-sm">124</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer">
                        <Share2 size={18} />
                        <span className="text-sm">87</span>
                        </div>
                    </div>
                  </div>
                </div>
                ))}
            </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section id="faq">
        <AnimatedDiv className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">{t('Pertanyaan Umum (FAQ)')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">{t('Punya pertanyaan? Mungkin jawabannya ada di sini. Jika tidak, jangan ragu untuk menghubungi Mas Boy.')}</p>
        </AnimatedDiv>
        <AnimatedDiv className="mt-16 max-w-4xl mx-auto">
          {FAQ_ITEMS.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </AnimatedDiv>
      </Section>

      {/* CTA Penutup */}
      <Section>
        <AnimatedDiv className="text-center bg-brand-gray rounded-xl p-12 lg:p-20">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading">{t('Siap Punya Website Profesional yang Benar-Benar Bekerja?')}</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-brand-white/70">{t('Jangan tunda lagi. Ngobrol gratis nggak dipungut biaya, malah bisa dapet pencerahan.')}</p>
          <div className="mt-8">
            <Link to="/kontak" className="inline-block bg-brand-green text-brand-dark font-bold font-heading py-4 px-10 rounded-lg text-xl hover:bg-opacity-80 transition-all duration-300 button-glow">
              {t('Ayo Ngobrol Gratis Sekarang')}
            </Link>
            <p className="text-xs text-brand-white/60 mt-3">{t('Slot konsultasi gratis terbatas setiap bulan!')}</p>
          </div>
        </AnimatedDiv>
      </Section>
    </div>
  );
};

export default Home;
