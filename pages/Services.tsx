
import React from 'react';
import { SERVICES } from '../constants';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  MousePointer2, 
  Share2, 
  Code, 
  Layers, 
  BarChart4, 
  PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-24">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900">Our <span className="text-blue-600">Growth</span> Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From dominating search engines to crafting pixel-perfect web experiences, we provide the full stack of digital services you need to outpace your competition.
          </p>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section className="py-24 space-y-32">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          const IconComp = service.id === 'seo' ? Search : 
                           service.id === 'ppc' ? MousePointer2 : 
                           service.id === 'smm' ? Share2 : Code;

          return (
            <div key={service.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`space-y-8 ${isEven ? 'order-1' : 'lg:order-2'}`}>
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                    <IconComp size={32} />
                  </div>
                  <h2 className="text-4xl font-extrabold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 flex items-center">
                      <Layers className="mr-2 text-blue-600" size={20} /> Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-3 text-slate-600">
                          <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 flex items-center">
                      <BarChart4 className="mr-2 text-blue-600" size={20} /> Our Process
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((p, pIdx) => (
                        <span key={pIdx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">
                          {pIdx + 1}. {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 flex items-center">
                      <PenTool className="mr-2 text-blue-600" size={20} /> Tools We Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((t, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 border border-slate-200 text-slate-500 rounded-full text-xs font-bold uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link to="/contact-us" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                      Get a Quote for {service.title} <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                </div>

                <div className={`relative ${isEven ? 'order-2' : 'lg:order-1'}`}>
                  <div className="bg-slate-100 rounded-[2rem] overflow-hidden aspect-video shadow-2xl">
                     <img 
                       src={`https://picsum.photos/seed/${service.id}/800/600`} 
                       alt={service.title} 
                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                     />
                  </div>
                  <div className={`absolute -z-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50 ${isEven ? '-top-10 -right-10' : '-bottom-10 -left-10'}`}></div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Regional Focus (Kolkata) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe size={300} />
             </div>
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <h2 className="text-4xl md:text-5xl font-extrabold">Hyper-Local Experts for Kolkata Businesses</h2>
                   <p className="text-xl text-blue-100 leading-relaxed">
                      We understand the specific nuances of the Kolkata market—from linguistic preferences to local search behavior. Our Local SEO and hyper-targeted ads ensure you reach your neighbors first.
                   </p>
                   <ul className="space-y-4">
                      {['Google Maps Optimization', 'Bengali Content Marketing', 'Regional Language PPC', 'Local Directory Listings'].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3">
                           <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                              <CheckCircle2 size={16} />
                           </div>
                           <span className="font-bold">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="flex justify-center lg:justify-end">
                   <Link to="/contact-us" className="bg-white text-blue-600 px-10 py-5 rounded-full font-black text-xl hover:bg-slate-100 transition-all shadow-2xl">
                      Grow Your Local Reach
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Globe = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

export default Services;
