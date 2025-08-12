import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    
    return (
        <Link to="/showcase" className="group relative block w-full h-80 sm:h-96 overflow-hidden rounded-xl shadow-lg">
            {/* Background Image */}
            <img 
                src={project.imageUrl} 
                alt={`Tampilan website ${project.title} di perangkat laptop dan mobile`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></div>
            
            {/* Content container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                {/* Animated content that slides up */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <h3 className="font-heading text-2xl font-bold">{project.title}</h3>
                    <p className="mt-1 text-sm text-brand-white/80 leading-relaxed truncate">{project.description}</p>
                    
                    <div className="mt-4 flex justify-between items-end">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-xs backdrop-blur-xl bg-white/10 px-2.5 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <div
                            className="flex-shrink-0 bg-brand-green text-brand-dark font-bold text-sm py-2 px-4 rounded-lg flex items-center gap-1.5"
                            aria-label={`Lihat detail untuk ${project.title}`}
                        >
                            Lihat Detail <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Tag (Always Visible) */}
            <div className="absolute top-4 right-4">
                 <span className="text-xs font-bold px-3 py-1 rounded-full shadow-md transition-opacity duration-300 group-hover:opacity-0 bg-brand-green text-brand-dark">
                    {project.category}
                </span>
            </div>
        </Link>
    );
};