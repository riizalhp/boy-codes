import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { DUMMY_BLOGS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

const AnimatedDiv = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return <div ref={ref} className={className}>{children}</div>;
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = DUMMY_BLOGS.find(b => b.slug === slug);

  if (!blog) {
    // Redirect to blog list or a 404 page if the post doesn't exist
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(blog.publishedDate).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-brand-dark text-brand-white">
      {/* Post Header with Background Image */}
      <header className="relative py-32 sm:py-48 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={blog.imageUrl} alt={`Latar belakang untuk artikel ${blog.title}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedDiv>
            <p className="text-brand-green font-bold uppercase tracking-wider">{blog.category}</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mt-2 max-w-4xl mx-auto">{blog.title}</h1>
            <div className="mt-6 flex items-center justify-center gap-6 text-brand-white/80">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Oleh {blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time dateTime={blog.publishedDate}>{formattedDate}</time>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </header>
      
      {/* Post Content */}
      <article className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
             <div className="prose" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

            {/* Tags Section */}
            <div className="mt-12 pt-8 border-t border-brand-white/10">
                <h3 className="text-lg font-semibold font-heading flex items-center gap-2">
                    <Tag size={20} className="text-brand-green" />
                    Tags
                </h3>
                <div className="flex flex-wrap gap-3 mt-4">
                    {blog.tags.map(tag => (
                        <Link 
                            key={tag} 
                            to={`/blog?tag=${encodeURIComponent(tag)}`}
                            className="bg-brand-gray text-brand-white/80 py-1.5 px-4 text-sm rounded-full hover:bg-brand-green hover:text-brand-dark transition-colors duration-300"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
            
             {/* Back to Blog Button */}
            <div className="mt-12 text-center">
                 <Link to="/blog" className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-white transition-colors">
                    <ArrowLeft size={18} />
                    Kembali ke Semua Artikel
                </Link>
            </div>
          </div>
        </div>
      </article>

    </div>
  );
};

export default BlogPost;
