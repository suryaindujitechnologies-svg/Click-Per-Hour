
import React, { useState, useEffect, useCallback } from 'react';
import { BLOG_POSTS } from '../constants';
import { Search, Calendar, User, Clock, ChevronRight, Sparkles, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI, Type } from "@google/genai";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const fetchAiSuggestions = useCallback(async (query: string) => {
    setIsAiLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = query 
        ? `Based on the search query "${query}", suggest 3 trending blog post titles for a digital marketing agency in Kolkata. Focus on SEO, PPC, or Social Media. Return as a JSON array of strings.`
        : `Suggest 3 trending digital marketing blog topics specifically for small businesses and startups in Kolkata, India for 2025. Return as a JSON array of strings.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
        },
      });

      const result = JSON.parse(response.text || '[]');
      setSuggestions(result);
    } catch (error) {
      console.error('Error fetching AI suggestions:', error);
      // Fallback suggestions
      setSuggestions([
        "Kolkata Local SEO Trends for 2025",
        "How to scale an E-commerce brand in West Bengal",
        "Optimizing Google Ads for Indian festive seasons"
      ]);
    } finally {
      setIsAiLoading(false);
    }
  }, []);

  // Debounce search and trigger AI suggestions
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAiSuggestions(searchQuery);
    }, 800);
    return () => clearTimeout(timer);
  }, [searchQuery, fetchAiSuggestions]);

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">Knowledge <span className="text-blue-600">Center</span></h1>
              <p className="text-xl text-slate-600 max-w-xl">
                The latest insights, trends, and strategies in digital marketing—curated specifically for the Indian business landscape.
              </p>
            </div>
            <div className="w-full max-w-md space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              </div>

              {/* AI Suggestions Box */}
              <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
                <div className="flex items-center space-x-2 mb-3 text-blue-600">
                  <Sparkles size={16} className="animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">AI Suggested Topics</span>
                  {isAiLoading && <Loader2 size={12} className="animate-spin ml-auto" />}
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.length > 0 ? (
                    suggestions.map((topic, i) => (
                      <button 
                        key={i} 
                        onClick={() => setSearchQuery(topic)}
                        className="text-[11px] font-semibold bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-100 transition-colors text-left"
                      >
                        {topic}
                      </button>
                    ))
                  ) : (
                    <p className="text-[11px] text-slate-400 italic">Finding the best topics for you...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-20">
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-[21/9]">
               <img src="https://picsum.photos/seed/featured/1200/600" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" alt="Featured Post" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
               <div className="absolute bottom-0 p-8 md:p-16 space-y-4 max-w-3xl">
                  <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest">Featured Article</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Mastering Digital Marketing in the Post-AI Era: What Every Kolkata Business Needs to Know</h2>
                  <div className="flex items-center space-x-6 text-slate-300 text-sm">
                     <span className="flex items-center"><User size={14} className="mr-2" /> Amit Das</span>
                     <span className="flex items-center"><Calendar size={14} className="mr-2" /> Oct 15, 2024</span>
                     <span className="flex items-center"><Clock size={14} className="mr-2" /> 12 min read</span>
                  </div>
                  <Link to="/blog" className="inline-flex items-center space-x-2 text-white font-bold bg-blue-600/50 hover:bg-blue-600 px-6 py-3 rounded-xl backdrop-blur-md transition-all">
                     <span>Read Article</span>
                     <ChevronRight size={18} />
                  </Link>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS
              .filter(post => 
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((post) => (
              <article key={post.id} className="group space-y-6">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                   <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                </div>
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{post.category}</span>
                      <span className="text-slate-400 text-xs flex items-center"><Clock size={12} className="mr-1" /> {post.readTime}</span>
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {post.title}
                   </h3>
                   <p className="text-slate-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                   </p>
                   <div className="pt-2">
                      <Link to="/blog" className="flex items-center space-x-1 font-bold text-slate-900">
                         <span>Read More</span>
                         <ChevronRight size={16} className="text-blue-600" />
                      </Link>
                   </div>
                </div>
              </article>
            ))}
            {BLOG_POSTS.filter(post => 
              post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
              post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && (
              <div className="col-span-full py-20 text-center space-y-4">
                <p className="text-slate-500 text-lg italic">No articles match your search yet. Try one of our AI-suggested topics above!</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center space-x-2">
             <button className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center">1</button>
             <button className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center justify-center">2</button>
             <button className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center justify-center">3</button>
             <button className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center justify-center"><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center space-y-8">
               <h2 className="text-4xl font-extrabold text-white">Join the Growth Insider</h2>
               <p className="text-blue-100 text-lg max-w-xl mx-auto">Get monthly marketing playbooks and case studies delivered straight to your inbox. No spam, just value.</p>
               <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-6 py-4 rounded-xl bg-white outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                  />
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl">
                    Subscribe
                  </button>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Blog;
