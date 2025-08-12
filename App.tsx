

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import Showcase from './pages/Showcase';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';
import SplashScreen from './components/SplashScreen';
import { ALL_PROJECTS, WEB_SERVICES, TESTIMONIALS } from './constants';
import { WebService } from './types';


const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      // a short timeout to allow the page to render before scrolling
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

// Layout for the main public-facing site
const SiteLayout: React.FC<{ services: WebService[] }> = ({ services }) => (
  <>
    <Header services={services} />
    <main className="flex-grow">
      <Outlet /> {/* Child routes will render here */}
    </main>
    <Footer />
  </>
);


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const projects = ALL_PROJECTS;
  const services = WEB_SERVICES;
  const testimonials = TESTIMONIALS;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Splash screen duration

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Public site routes, nested under SiteLayout to get Header/Footer */}
          <Route element={<SiteLayout services={services} />}>
            <Route path="/" element={<Home projects={projects} testimonials={testimonials} />} />
            <Route path="/layanan" element={<Layanan services={services} />} />
            <Route path="/showcase" element={<Showcase projects={projects} />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;