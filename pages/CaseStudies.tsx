
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, ExternalLink, Trophy } from 'lucide-react';

const CaseStudies = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-white py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900">Proven <span className="text-blue-600">Results</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto italic">
            "Numbers don't lie. Our results define who we are."
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
                  {study.industry} Case Study
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">{study.title}</h2>
                
                <div className="space-y-4">
                   <h4 className="text-xl font-bold text-slate-900">The Challenge</h4>
                   <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                </div>
                
                <div className="space-y-4">
                   <h4 className="text-xl font-bold text-slate-900">Our Solution</h4>
                   <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {study.results.map((res, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                       <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter mb-1">{res.metric}</p>
                       <div className="flex items-end space-x-2">
                          <span className="text-3xl font-black text-slate-900">{res.value}</span>
                          <span className="text-green-600 font-bold mb-1 flex items-center">
                             <ArrowUpRight size={16} /> {res.improvement}
                          </span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                   <button className="flex items-center space-x-2 text-blue-600 font-black hover:underline">
                      <span>View Full Documentation</span>
                      <ExternalLink size={20} />
                   </button>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                   <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 text-amber-600 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-xl z-20">
                   <Trophy size={32} />
                   <span className="text-[10px] font-black uppercase">Success</span>
                </div>
                <div className="absolute -bottom-10 -left-10 w-full h-full bg-blue-50 rounded-3xl -z-10 transform translate-x-4 translate-y-4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Summary Banner */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-12">Consolidated Lifetime Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: 'Revenue Generated', val: '$50M+' },
                 { label: 'Leads Delivered', val: '250k+' },
                 { label: 'First Page Rankings', val: '15,000+' },
                 { label: 'Ads ROI (Avg)', val: '4.8x' }
               ].map((stat, i) => (
                 <div key={i} className="space-y-2">
                    <p className="text-4xl md:text-5xl font-black text-blue-600">{stat.val}</p>
                    <p className="text-slate-500 font-bold uppercase text-xs">{stat.label}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default CaseStudies;
