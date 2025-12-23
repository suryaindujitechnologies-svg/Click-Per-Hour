
import React from 'react';
import { Search, TrendingUp, CheckCircle, Shield, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEOService = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-blue-100/30 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                <Search size={14} />
                <span>SEO Specialist Agency</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
                Dominate Search <br /> 
                <span className="text-blue-600">Drive Results.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                We don't just optimize for search engines; we optimize for humans and ROI. Our data-driven SEO strategies help Kolkata businesses rank where it matters most.
              </p>
              <div className="flex gap-4">
                <Link to="/contact-us" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  Get Free SEO Audit
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-2xl" alt="SEO Analysis" />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 text-green-600 rounded-lg"><TrendingUp /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-400">Traffic Growth</p>
                    <p className="text-2xl font-black text-slate-900">+312%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold">Our SEO Arsenal</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A comprehensive approach to organic growth, covering every technical and creative angle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Technical SEO', 
                desc: 'Optimizing site architecture, speed, and mobile responsiveness for better crawlability.',
                icon: <Shield className="text-blue-600" />
              },
              { 
                title: 'Local SEO', 
                desc: 'Dominating Kolkata searches with GMB optimization and hyper-local citations.',
                icon: <MapPin className="text-blue-600" />
              },
              { 
                title: 'Content Strategy', 
                desc: 'Creating high-authority content that ranks and converts visitors into customers.',
                icon: <Globe className="text-blue-600" />
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Why SEO is Non-Negotiable in 2025</h2>
              <div className="space-y-4">
                {[
                  '93% of online experiences begin with a search engine.',
                  '75% of users never scroll past the first page.',
                  'Organic traffic provides the highest long-term ROI.',
                  'Builds brand credibility and trust naturally.'
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-blue-500" size={20} />
                    <span className="text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700">
               <h3 className="text-2xl font-bold mb-6">Proven Process</h3>
               <div className="space-y-8">
                  {[
                    { step: '01', title: 'Deep Audit', desc: 'Analyzing your current standing and competitors.' },
                    { step: '02', title: 'Keyword Intelligence', desc: 'Finding high-intent terms your customers use.' },
                    { step: '03', title: 'On-Page & Technical', desc: 'Making your site a search engine magnet.' }
                  ].map((s, i) => (
                    <div key={i} className="flex space-x-6">
                       <span className="text-4xl font-black text-blue-600 opacity-50">{s.step}</span>
                       <div>
                          <h4 className="font-bold text-lg">{s.title}</h4>
                          <p className="text-slate-400 text-sm">{s.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOService;
