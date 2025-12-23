
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Zap, 
  Users,
  Search,
  MousePointer2,
  Share2,
  Code,
  // Added missing icon imports
  MapPin,
  Phone
} from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span>Top Rated Digital Agency in Kolkata</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                Scale Your Revenue <br />
                <span className="text-gradient">Faster Than Ever.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Click Per Hour is a data-driven digital marketing agency in Kolkata. We don't just sell services; we engineer growth through SEO, PPC, and high-performance creative strategies.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center shadow-xl shadow-blue-200">
                  Book Free Strategy Call <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/services" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                  View Our Services
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="Client" />
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-500">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                  </div>
                  <p className="text-sm font-semibold text-slate-600">500+ Happy Clients Nationwide</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
                 <img src="https://picsum.photos/seed/marketing/800/600" alt="Marketing Results" className="rounded-xl" />
                 
                 {/* Floating Metric Card */}
                 <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-50 flex items-center space-x-4 animate-bounce">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Avg. Traffic Boost</p>
                      <p className="text-2xl font-extrabold text-slate-900">+185%</p>
                    </div>
                 </div>
              </div>
              {/* Background Decorative Element */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Digital Solutions for Real Business Growth</h3>
            <p className="text-slate-600 text-lg">We provide end-to-end digital marketing services tailored to the Indian market ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => {
              const IconComp = service.id === 'seo' ? Search : 
                               service.id === 'ppc' ? MousePointer2 : 
                               service.id === 'smm' ? Share2 : Code;
              return (
                <div key={service.id} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComp size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h4>
                  <p className="text-slate-600 mb-6 line-clamp-3">{service.shortDescription}</p>
                  <Link to="/services" className="text-blue-600 font-bold flex items-center group-hover:underline">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Why Smart Businesses in India Choose Us?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Data-First Approach', desc: 'No guesswork. We rely on hard analytics to steer campaigns.', icon: <BarChart3 /> },
                  { title: 'Kolkata Local Experts', desc: 'Deep understanding of West Bengal and Indian regional markets.', icon: <MapPin /> },
                  { title: 'ROI Guaranteed', desc: 'We focus on leads and revenue, not just vanity metrics like likes.', icon: <Target /> },
                  { title: 'Fast Execution', desc: 'We move as fast as your business needs to grow.', icon: <Zap /> }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="text-blue-500">{item.icon}</div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
                Partner With Us Today
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                  <p className="text-4xl font-black text-blue-500 mb-2">500+</p>
                  <p className="text-sm font-bold text-slate-300 uppercase">Projects Delivered</p>
                </div>
                <div className="bg-blue-600 p-8 rounded-2xl shadow-xl">
                  <p className="text-4xl font-black text-white mb-2">98%</p>
                  <p className="text-sm font-bold text-blue-100 uppercase">Client Retention</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                  <p className="text-4xl font-black text-blue-500 mb-2">10M+</p>
                  <p className="text-sm font-bold text-slate-300 uppercase">Ad Spend Managed</p>
                </div>
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                  <p className="text-4xl font-black text-blue-500 mb-2">12+</p>
                  <p className="text-sm font-bold text-slate-300 uppercase">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16">Trusted by Growth-Minded Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 text-left relative">
                <div className="absolute -top-6 left-12 w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-lg">
                  <span className="text-4xl font-serif">“</span>
                </div>
                <p className="text-lg text-slate-700 italic mb-8 pt-4 leading-relaxed">
                  {t.content}
                </p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full grayscale hover:grayscale-0 transition-all" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white text-center space-y-8 shadow-2xl shadow-blue-200">
            <h2 className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto">Ready to Stop Guessing and Start Growing?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Join hundreds of businesses in India that trust Click Per Hour for their digital dominance.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-full font-black text-xl hover:bg-slate-100 transition-all shadow-xl">
                Get My Free Audit
              </Link>
              <a href="tel:+919876543210" className="flex items-center space-x-2 text-white font-bold text-xl hover:text-blue-100">
                <Phone /> <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal components for clean code
const BarChart3 = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
);

export default Home;
