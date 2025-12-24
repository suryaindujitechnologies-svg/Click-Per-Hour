
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BLOG_POSTS } from '../constants';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  Sparkles, 
  Loader2,
  Linkedin,
  Twitter,
  Facebook,
  Share2,
  Filter,
  Lightbulb,
  TrendingUp,
  RefreshCw,
  ArrowRight,
  Zap,
  MousePointer2,
  Gem
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI, Type } from "@google/genai";
import SEO from '../components/SEO';

const POSTS_PER_PAGE = 3;

interface AiContentIdea {
  title: string;
  outline: string;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // AI Content Lab State
  const [aiIdeas, setAiIdeas] = useState<AiContentIdea[]>([]);
  const [isTrendsLoading, setIsTrendsLoading] = useState(false);
  const [niche, setNiche] = useState('E-commerce');

  // Fix: Added handlePageChange function for pagination control
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fix: Reset to first page when search or category filter changes to prevent empty views
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    const cats = new Set(BLOG_POSTS.map(post => post.category));
    return ['All', ...Array.from(cats)].sort();
  }, []);

  const niches = ['E-commerce', 'Real Estate', 'Local Services', 'Healthcare', 'B2B SaaS'];

  const fetchAiTrendAnalysis = useCallback(async (selectedNiche: string) => {
    setIsTrendsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Using gemini-3-pro-preview for more strategic and complex reasoning about trends
      const prompt = `Act as a senior Digital Marketing Strategist in Kolkata. 
      Analyze current high-impact digital marketing trends specifically for the ${selectedNiche} industry in the Kolkata (India) market for 2025. 
      Consider hyper-local needs, regional language preferences (Bengali-English mix), and seasonal consumer behavior (e.g., Durga Puja lead-ups, wedding seasons).
      
      Generate 4 unique, highly engaging blog post titles and a detailed 2-sentence outline/blueprint for each.
      The titles should be click-worthy and SEO-optimized.
      Return strictly as a JSON array of objects with keys 'title' and 'outline'.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                outline: { type: Type.STRING }
              },
              required: ['title', 'outline']
            }
          },
        },
      });

      const result = JSON.parse(response.text || '[]');
      setAiIdeas(result);
    } catch (error) {
      console.error('Error fetching trend analysis:', error);
      setAiIdeas([
        { title: `Kolkata's ${selectedNiche} Boom: Local SEO Hacks`, outline: "A deep dive into ranking for hyper-local terms in Salt Lake and Ballygunge. Essential for growing visibility in 2025." },
        { title: `Optimizing Ad Spend for the Kolkata Festive Season`, outline: "How to balance budget across Meta and Google during peak shopping months in West Bengal to maximize ROAS." }
      ]);
    } finally {
      setIsTrendsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAiTrendAnalysis(niche);
  }, [fetchAiTrendAnalysis, niche]);

  const shareContent = (platform: 'linkedin' | 'twitter' | 'facebook', title: string) => {
    const siteUrl = window.location.origin; 
    const text = encodeURIComponent(title);
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

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const displayedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title="Knowledge Center | Digital Marketing Insights" 
        description="Explore the latest insights, trends, and strategies in digital marketing—curated specifically for the Indian business landscape by Click Per Hour."
        image="https://picsum.photos/seed/blog-og/1200/630"
      />
      
      {/* Search & Hero */}
      <section className="py-20 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                Knowledge <span className="text-blue-600">Center</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl">
                The latest insights, trends, and strategies in digital marketing—curated specifically for the Indian business landscape.
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Content Lab Section */}
      <section className="py-24 bg-white overflow-hidden relative border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] -z-10 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600 bg-blue-50 w-fit px-4 py-1 rounded-full border border-blue-100">
                <Gem size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">CPH Content Lab</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900">Market Intelligence <span className="text-blue-600">Assistant</span></h2>
              <p className="text-slate-500 max-w-xl">Our AI analyzes regional search trends and social sentiment to suggest high-impact topics for your specific industry.</p>
            </div>

            <div className="w-full lg:w-fit bg-slate-50 p-2 rounded-2xl border border-slate-100 flex flex-wrap gap-2">
              {niches.map((n) => (
                <button
                  key={n}
                  onClick={() => setNiche(n)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    niche === n 
                    ? 'bg-white text-blue-600 shadow-sm border border-blue-100' 
                    : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isTrendsLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-64 rounded-[2.5rem] bg-slate-50 animate-pulse border border-slate-100"></div>
              ))
            ) : (
              aiIdeas.map((idea, i) => (
                <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-500 relative flex flex-col h-full overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-600 opacity-5 rounded-full group-hover:scale-[6] transition-transform duration-1000 -z-10"></div>
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Zap size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{idea.title}</h4>
                  <div className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow space-y-2">
                    <p className="font-bold text-slate-400 uppercase text-[9px] tracking-widest">Strategy Blueprint</p>
                    <p>{idea.outline}</p>
                  </div>
                  <button className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 uppercase tracking-widest flex items-center mt-auto">
                    Full Content Brief <ArrowRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))
            )}
          </div>
          
          <div className="mt-12 flex justify-center">
             <button 
              onClick={() => fetchAiTrendAnalysis(niche)}
              disabled={isTrendsLoading}
              className="flex items-center space-x-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all disabled:opacity-50 shadow-xl shadow-slate-100"
            >
              {isTrendsLoading ? <Loader2 size={18} className="animate-spin" /> : <RefreshCw size={18} />}
              <span>Refresh Predictions</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white sticky top-[72px] z-30 border-b border-slate-50 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3 text-slate-900 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide">
              <Filter size={18} className="text-blue-600 hidden md:block" />
              <div className="flex space-x-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                      selectedCategory === cat 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
              <span className="text-blue-600">{filteredPosts.length}</span> Articles Found
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayedPosts.map((post) => (
              <article key={post.id} className="group flex flex-col h-full">
                <Link to={`/knowledge-center/${post.id}`} className="block aspect-[16/10] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 relative mb-6">
                   <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex space-x-2">
                        <button onClick={(e) => { e.preventDefault(); shareContent('linkedin', post.title); }} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-blue-600 transition-all"><Linkedin size={18} /></button>
                        <button onClick={(e) => { e.preventDefault(); shareContent('twitter', post.title); }} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-slate-900 transition-all"><Twitter size={18} /></button>
                      </div>
                   </div>
                </Link>
                <div className="space-y-4 flex flex-col flex-grow">
                   <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em]">
                      <span className="text-blue-600">{post.category}</span>
                      <span className="text-slate-400 flex items-center"><Clock size={12} className="mr-1" /> {post.readTime}</span>
                   </div>
                   <Link to={`/knowledge-center/${post.id}`}>
                     <h3 className="text-2xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {post.title}
                     </h3>
                   </Link>
                   <p className="text-slate-500 leading-relaxed line-clamp-2 text-sm">
                      {post.excerpt}
                   </p>
                   <div className="pt-6 mt-auto flex items-center justify-between border-t border-slate-100">
                      <Link to={`/knowledge-center/${post.id}`} className="flex items-center space-x-2 font-bold text-slate-900 hover:text-blue-600 transition-all">
                         <span className="text-sm">Explore Strategy</span>
                         <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                   </div>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-20 flex justify-center items-center space-x-2">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button 
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 rounded-2xl font-bold text-sm transition-all flex items-center justify-center ${
                    currentPage === page 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white border border-slate-200 text-slate-600'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
