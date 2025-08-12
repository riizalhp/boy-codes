import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../types';
import { Calendar, User } from 'lucide-react';

export const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
    
    // Format date for display
    const formattedDate = new Date(blog.publishedDate).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Link to={`/blog/${blog.slug}`} className="group bg-brand-gray rounded-xl overflow-hidden flex flex-col h-full border border-brand-white/10 hover:border-brand-green/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-green/10">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
                <img 
                    src={blog.imageUrl} 
                    alt={`Gambar untuk artikel ${blog.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>
            
            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-green">{blog.category}</span>
                    <h3 className="font-heading text-xl font-bold mt-2 text-brand-white group-hover:text-brand-green transition-colors duration-300 line-clamp-2">
                        {blog.title}
                    </h3>
                    <p className="mt-3 text-sm text-brand-white/70 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                    </p>
                </div>

                {/* Author and Date Info */}
                <div className="mt-6 pt-4 border-t border-brand-white/10 flex items-center justify-between text-xs text-brand-white/60">
                    <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{blog.author}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <time dateTime={blog.publishedDate}>{formattedDate}</time>
                    </div>
                </div>
            </div>
        </Link>
    );
};
