import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  Facebook,
  Tag,
  ArrowRight
} from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = useMemo(() => {
    return BLOG_POSTS.find(p => p.id === id);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) {
      const timer = setTimeout(() => navigate('/knowledge-center'), 3000);
      return () => clearTimeout(timer);
    }
  }, [post, navigate]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const sameCategory = BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id);
    if (sameCategory.length < 3) {
      const others = BLOG_POSTS.filter(p => p.category !== post.category && p.id !== post.id);
      return [...sameCategory, ...others].slice(0, 3);
    }
    return sameCategory.slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Article Not Found</h2>
        <p className="text-slate-500">Redirecting to our knowledge center...</p>
        <Link to="/knowledge-center" className="inline-flex items-center text-blue-600 font-bold hover:underline">
          <ChevronLeft size={18} className="mr-1" /> Back to Knowledge Center
        </Link>
      </div>
    );
  }

  const shareContent = (platform: 'linkedin' | 'twitter' | 'facebook') => {
    const siteUrl = 'https://clickperhour.com'; 
    const text = encodeURIComponent(post.title);
    const encodedUrl = encodeURIComponent(siteUrl);

    let shareUrl = '';
    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        image={post.image}
        type="article"
      />
      
      {/* Hero Header */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <img 
          src={post.image} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" 
          alt={post.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-6">
          <div className="flex justify-center">
            <Link 
              to="/knowledge-center" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-bold text-sm uppercase tracking-widest mb-4"
            >
              <ChevronLeft size={16} className="mr-1" /> Knowledge Center
            </Link>
          </div>
          <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-sm md:text-base pt-4">
            <span className="flex items-center"><User size={18} className="mr-2 text-blue-400" /> {post.author}</span>
            <span className="flex items-center"><Calendar size={18} className="mr-2 text-blue-400" /> {post.date}</span>
            <span className="flex items-center"><Clock size={18} className="mr-2 text-blue-400" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="hidden lg:block lg:col-span-1 sticky top-32 h-fit">
              <div className="flex flex-col items-center space-y-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest vertical-text mb-2">Share</span>
                <button 
                  onClick={() => shareContent('linkedin')}
                  className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={20} />
                </button>
                <button 
                  onClick={() => shareContent('twitter')}
                  className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={20} />
                </button>
                <button 
                  onClick={() => shareContent('facebook')}
                  className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-800 hover:text-white transition-all shadow-sm"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={20} />
                </button>
              </div>
            </div>

            <article className="lg:col-span-8 lg:col-start-3 prose prose-lg prose-slate max-w-none">
              <div className="space-y-8 text-slate-700 leading-relaxed text-lg">
                <p className="text-xl font-medium text-slate-900 first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-blue-600">
                  {post.excerpt} In the rapidly evolving landscape of digital marketing, staying ahead means understanding the fundamental shifts in user behavior. As we look towards 2025, the synergy between technology and human psychology has never been more critical for businesses in Kolkata and across India.
                </p>
                
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Strategic Foundation</h2>
                <p>
                  Effective digital marketing is no longer just about being present; it's about being relevant. Whether you're focusing on Search Engine Optimization or precision-targeted Pay-Per-Click campaigns, the core objective remains the same: solving a problem for your customer at the exact moment they need it.
                </p>
                
                <blockquote className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl my-10 italic font-medium text-slate-800">
                  "The best marketing doesn't feel like marketing. It feels like a solution to a problem you didn't know you could solve so easily."
                </blockquote>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Key Performance Drivers</h3>
                <ul className="list-disc pl-6 space-y-4 marker:text-blue-600">
                  <li><strong>Data Integration:</strong> Utilizing first-party data to personalize the customer journey.</li>
                  <li><strong>Technical Excellence:</strong> Ensuring your web core vitals are optimized for maximum speed and accessibility.</li>
                  <li><strong>Authentic Storytelling:</strong> Building brand authority through transparent and value-driven content.</li>
                </ul>

                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  className="rounded-[2rem] shadow-2xl my-12 w-full h-96 object-cover" 
                  alt="Work Environment" 
                />

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Conclusion</h2>
                <p>
                  As we navigate the complexities of modern commerce, the businesses that succeed will be those that view digital marketing as a long-term investment rather than a short-term expense. By partnering with experts who understand both the local Kolkata market and global standards, you position your brand for sustainable, compounding growth.
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Tags:</span>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">{post.category}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Growth</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Marketing</span>
                  </div>
                </div>
                
                <div className="flex lg:hidden items-center space-x-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Share:</span>
                  <button onClick={() => shareContent('linkedin')} className="text-slate-400 hover:text-blue-600"><Linkedin size={18} /></button>
                  <button onClick={() => shareContent('twitter')} className="text-slate-400 hover:text-slate-900"><Twitter size={18} /></button>
                  <button onClick={() => shareContent('facebook')} className="text-slate-400 hover:text-blue-800"><Facebook size={18} /></button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs">More from Knowledge Center</h2>
              <h3 className="text-3xl font-extrabold text-slate-900">You Might Also Like</h3>
            </div>
            <Link to="/knowledge-center" className="hidden sm:flex items-center space-x-2 text-slate-900 font-bold hover:text-blue-600 transition-colors">
              <span>View All Articles</span>
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link 
                key={related.id} 
                to={`/knowledge-center/${related.id}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={related.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={related.title} 
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{related.category}</span>
                  <h4 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                  <div className="flex items-center text-slate-400 text-xs pt-2">
                    <span className="flex items-center mr-4"><Calendar size={12} className="mr-1" /> {related.date}</span>
                    <span className="flex items-center"><Clock size={12} className="mr-1" /> {related.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link to="/knowledge-center" className="inline-flex items-center space-x-2 text-blue-600 font-bold">
              <span>View All Articles</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Author/CTA Banner */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600 shrink-0">
               <img src="https://picsum.photos/seed/amit/200/200" className="w-full h-full object-cover" alt="Author" />
            </div>
            <div className="text-center md:text-left space-y-4">
               <h4 className="text-white text-2xl font-bold">About the Author</h4>
               <p className="text-slate-400 leading-relaxed">
                 Amit Das is the lead Digital Strategist at Click Per Hour. With over a decade of experience in the Indian e-commerce and SaaS landscape, he specializes in turning complex data into actionable growth blueprints.
               </p>
               <Link to="/contact-us" className="inline-flex items-center space-x-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                 <span>Get a Strategic Consultation</span>
                 <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;