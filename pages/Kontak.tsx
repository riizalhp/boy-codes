import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedDiv = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return <div ref={ref} className={className}>{children}</div>;
};

const Kontak: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Mengirim...');
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('Pesanmu sudah terkirim! Mas Boy akan segera membalas.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-brand-dark">
      <section className="py-24 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedDiv className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-heading">Hubungi BoyCodes - Konsultasi Gratis <br className="sm:hidden"/><span className="text-brand-green">Pembuatan Website Profesional</span></h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">Punya ide untuk website UMKM atau butuh konsultasi dengan Mas Boy? Hubungi Mas Boy. Gratis kok!</p>
          </AnimatedDiv>

          <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Form Kontak */}
            <AnimatedDiv className="bg-brand-gray p-8 rounded-xl">
              <h2 className="text-2xl font-bold font-heading">Kirim Pesan Langsung</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-white/80">Nama</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full bg-brand-dark/50 border-brand-white/20 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-green focus:border-brand-green"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-white/80">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full bg-brand-dark/50 border-brand-white/20 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-green focus:border-brand-green"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-white/80">Kebutuhan/Pesan</label>
                  <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full bg-brand-dark/50 border-brand-white/20 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-green focus:border-brand-green"></textarea>
                </div>
                <div>
                  <label htmlFor="attachment" className="block text-sm font-medium text-brand-white/80">Lampiran Brief (Opsional)</label>
                  <input type="file" name="attachment" id="attachment" className="mt-1 block w-full text-sm text-brand-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-green file:text-brand-dark hover:file:bg-opacity-80 cursor-pointer"/>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-brand-dark bg-brand-green hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green transition-all button-glow">
                    Kirim Pesan <Send size={20}/>
                  </button>
                </div>
              </form>
              {status && <p className="mt-4 text-center text-brand-green">{status}</p>}
               <p className="mt-6 text-xs text-center text-brand-white/50">
                  Kami akan membalas dalam waktu maksimal 1x24 jam. Data Anda aman dan tidak akan dibagikan ke pihak ketiga.
              </p>
            </AnimatedDiv>

            {/* Info Kontak */}
            <AnimatedDiv className="flex flex-col justify-center gap-8">
              <div className="bg-brand-gray p-8 rounded-xl text-center flex flex-col justify-center h-full">
                <img src="https://i.ibb.co/ymtyBd6p/boycodes-1.webp" alt="Mas Boy, siap membantu proyek websitemu" className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-brand-green/50"/>
                <h2 className="text-2xl font-bold font-heading">Cara Tercepat? WhatsApp!</h2>
                <p className="mt-2 text-brand-white/70">Langsung ngobrol untuk konsultasi pembuatan toko online atau website lainnya.</p>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex justify-center items-center gap-3 w-full py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-green-500 hover:bg-green-600 focus:outline-none transition-all">
                  <MessageSquare size={24}/> Chat Mas Boy di WA
                </a>
              </div>
              <div className="bg-brand-gray p-8 rounded-xl text-center">
                 <h2 className="text-2xl font-bold font-heading">Info Lainnya</h2>
                 <div className="mt-4 flex items-center justify-center gap-3 text-lg text-brand-white/80">
                    <Mail size={20} className="text-brand-green" />
                    <a href="mailto:halo@boycodes.id" className="hover:text-brand-green">halo@boycodes.id</a>
                 </div>
                 <div className="mt-4 pt-4 border-t border-brand-white/10">
                    <h3 className="font-semibold text-brand-white">Jam Operasional</h3>
                    <p className="text-brand-white/70">Senin - Jumat, 09:00 - 17:00 WIB</p>
                 </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;