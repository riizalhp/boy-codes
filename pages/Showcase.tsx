
import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ProjectCard } from '../components/ProjectCard';
import { Search, Tag, X } from 'lucide-react';

type FilterCategory = 'All' | 'Perorangan' | 'UMKM' | 'Enterprise';

const AnimatedDiv = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return <div ref={ref} className={className}>{children}</div>;
};

const INITIAL_DISPLAY_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Showcase: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [searchParams] = useSearchParams();
  const [filterCategory, setFilterCategory] = useState<FilterCategory>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_DISPLAY_COUNT);

  const projectFilters: FilterCategory[] = ['All', 'Perorangan', 'UMKM', 'Enterprise'];

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);
  
  useEffect(() => {
    const tagFromUrl = searchParams.get('tag');
    if (tagFromUrl) {
      setSelectedTags([tagFromUrl]);
    }
  }, [searchParams]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (filterCategory !== 'All') {
      filtered = filtered.filter(p => p.category === filterCategory);
    }

    if (searchTerm.trim() !== '') {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(lowercasedTerm) ||
        p.description.toLowerCase().includes(lowercasedTerm) ||
        p.tags.some(tag => tag.toLowerCase().includes(lowercasedTerm))
      );
    }
    
    if (selectedTags.length > 0) {
      filtered = filtered.filter(project =>
        selectedTags.some(tag => project.tags.includes(tag))
      );
    }

    return filtered.sort((a, b) => b.id - a.id);
  }, [filterCategory, searchTerm, selectedTags, projects]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(INITIAL_DISPLAY_COUNT);
  }, [filterCategory, searchTerm, selectedTags]);


  const FilterSidebar = () => (
    <aside className="lg:w-1/4 xl:w-1/5 space-y-8 lg:sticky lg:top-28 self-start">
        <div className="space-y-2">
             <h3 className="text-xl font-heading font-bold">Cari Proyek</h3>
             <div className="relative w-full">
                <input 
                    type="text"
                    placeholder="E.g. e-commerce"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-brand-gray border border-brand-white/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-green w-full transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-white/50" size={20} />
            </div>
        </div>
        
        <div className="space-y-3">
             <h3 className="text-xl font-heading font-bold">Kategori</h3>
             <div className="flex flex-col space-y-2">
                {projectFilters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setFilterCategory(filter)}
                    className={`text-left p-2 rounded-md transition-colors duration-200 ${filterCategory === filter ? 'bg-brand-green/10 text-brand-green font-semibold' : 'text-brand-white/80 hover:bg-brand-gray'}`}
                  >
                    {filter}
                  </button>
                ))}
            </div>
        </div>

        <div className="space-y-3">
            <h3 className="text-xl font-heading font-bold flex items-center gap-2"><Tag size={20}/> Tags Teknologi</h3>
            <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`py-1 px-3 text-sm rounded-full transition-all duration-300 border ${
                            selectedTags.includes(tag) 
                                ? 'bg-brand-green text-brand-dark border-brand-green font-bold' 
                                : 'bg-brand-dark text-brand-white/80 border-brand-white/20 hover:border-brand-green hover:text-brand-green'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            {selectedTags.length > 0 && (
                <button 
                  onClick={() => setSelectedTags([])}
                  className="text-sm text-brand-white/60 hover:text-brand-green flex items-center gap-1 mt-2 transition-colors">
                    <X size={14}/> Bersihkan filter tag
                </button>
            )}
        </div>
    </aside>
  );

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="py-24 text-center bg-brand-gray">
          <AnimatedDiv>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading">Portofolio Jasa Pembuatan Website <span className="text-brand-green">BoyCodes</span></h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-white/70">Lihat hasil karya BoyCodes untuk UMKM, personal brand, dan perusahaan. Setiap proyek adalah cerita kesuksesan dan bukti nyata keahlian kami sebagai web developer profesional.</p>
          </AnimatedDiv>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
                <FilterSidebar />

                <main className="w-full">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredProjects.slice(0, visibleCount).map(project => (
                            <AnimatedDiv key={project.id}>
                              <ProjectCard project={project} />
                            </AnimatedDiv>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <AnimatedDiv className="text-center py-16 flex flex-col items-center justify-center h-full">
                            <h3 className="text-2xl font-bold font-heading">Oops! Proyek Tidak Ditemukan</h3>
                            <p className="text-lg mt-2 text-brand-white/70">Coba ubah filter atau kata kunci pencarianmu.</p>
                        </AnimatedDiv>
                    )}

                    {visibleCount < filteredProjects.length && (
                        <div className="mt-16 text-center">
                            <button
                                onClick={() => setVisibleCount(prev => prev + LOAD_MORE_COUNT)}
                                className="bg-brand-green text-brand-dark font-bold font-heading py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 button-glow"
                            >
                                Lihat Lebih Banyak
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedDiv>
                <h2 className="text-3xl lg:text-4xl font-bold font-heading">Mau Punya Website <span className="text-brand-green">Seperti Ini</span>?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-brand-white/70">Setiap ide hebat layak mendapatkan rumah digital yang keren. Ceritakan idemu ke Mas Boy.</p>
                <div className="mt-8">
                    <Link to="/kontak" className="inline-block bg-brand-green text-brand-dark font-bold font-heading py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 button-glow">
                        Ngobrol Dulu Yuk
                    </Link>
                </div>
            </AnimatedDiv>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
