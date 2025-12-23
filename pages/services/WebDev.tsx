
import React from 'react';
import { Code, Smartphone, Rocket, ArrowRight, Layout, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevService = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                <Code size={14} />
                <span>Modern Tech Stack</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
                High Performance <br /> 
                <span className="text-blue-600">Digital Assets.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                A website isn't a digital brochure; it's your #1 salesperson. We build lightning-fast, secure, and conversion-optimized sites for the modern web.
              </p>
              <Link to="/contact-us" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                Start Your Project <ArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-blue-600 blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <div className="bg-slate-900 p-4 rounded-3xl shadow-2xl relative border border-slate-800">
                  <div className="flex space-x-2 mb-4 border-b border-slate-800 pb-4">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" className="rounded-xl opacity-90" alt="Code Development" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Layout className="text-blue-600" />, title: 'UI/UX Design', desc: 'User-centered designs that drive interaction and sales.' },
                { icon: <Smartphone className="text-blue-600" />, title: 'Responsive Dev', desc: 'Flawless performance on mobile, tablet, and desktop.' },
                { icon: <Cpu className="text-blue-600" />, title: 'Custom Solutions', desc: 'E-commerce, SaaS platforms, and enterprise portals.' }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                   <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">{item.icon}</div>
                   <h4 className="text-2xl font-bold">{item.title}</h4>
                   <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-12 md:p-20 space-y-8 text-white">
                     <h2 className="text-4xl font-bold">The Click Per Hour Standard</h2>
                     <div className="space-y-6">
                        {[
                          { title: '99+ Page Speed Score', desc: 'Google loves fast sites, and so do your users.' },
                          { title: 'SEO-Ready Architecture', desc: 'Rank naturally from day one.' },
                          { title: 'Iron-Clad Security', desc: 'Protecting your data and your users.' }
                        ].map((s, i) => (
                          <div key={i} className="flex items-start space-x-4">
                             <div className="mt-1 text-blue-500"><Rocket size={24} /></div>
                             <div>
                                <h4 className="font-bold text-xl">{s.title}</h4>
                                <p className="text-slate-400">{s.desc}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="bg-blue-600 flex items-center justify-center p-20 text-center">
                     <div className="space-y-6">
                        <p className="text-4xl font-black text-white">Ready for a better website?</p>
                        <Link to="/contact-us" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-slate-800 transition-all shadow-2xl">
                           Launch Your Site
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default WebDevService;
