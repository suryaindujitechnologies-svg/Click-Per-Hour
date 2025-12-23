
import React from 'react';
import { MousePointer2, Target, BarChart, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PPCService = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                <Zap size={14} />
                <span>Fast Growth Results</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
                Precision Ads <br /> 
                <span className="text-blue-600">Instant ROI.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Don't waste budget on "clicks". Our PPC management focuses on high-intent lead generation and sales conversion for Indian enterprises.
              </p>
              <div className="flex gap-4">
                <Link to="/contact-us" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  Scale Your Ads Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" className="rounded-3xl shadow-2xl" alt="PPC Dashboard" />
              <div className="absolute top-12 -right-8 bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                 <p className="text-xs font-bold text-blue-400">Ad Spend Efficiency</p>
                 <p className="text-3xl font-black">9.5x ROAS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Target className="text-blue-600" />, title: 'Google Ads', desc: 'Search, Display, Shopping, & Video.' },
              { icon: <MousePointer2 className="text-blue-600" />, title: 'Facebook Ads', desc: 'Social commerce and lead gen.' },
              { icon: <BarChart className="text-blue-600" />, title: 'Retargeting', desc: 'Bringing back lost visitors.' },
              { icon: <Zap className="text-blue-600" />, title: 'LinkedIn Ads', desc: 'B2B high-ticket lead gen.' }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl">{card.icon}</div>
                <h4 className="text-xl font-bold">{card.title}</h4>
                <p className="text-sm text-slate-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Stop Burning Your Marketing Budget</h2>
                <p className="text-blue-100 text-lg">Most agencies focus on CPC. We focus on CPL (Cost Per Lead) and Customer Acquisition Cost. We optimize for the metrics that actually matter to your bank account.</p>
                <ul className="space-y-3">
                   {['Daily Monitoring', 'A/B Split Testing', 'Negative Keyword Sculpting', 'Custom Landing Pages'].map((li, i) => (
                     <li key={i} className="flex items-center space-x-2">
                        <CheckCircle size={18} />
                        <span className="font-semibold">{li}</span>
                     </li>
                   ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                 <h3 className="text-2xl font-bold mb-4 text-center">Ready to see your real ROI?</h3>
                 <Link to="/contact-us" className="block w-full text-center bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                    Request Free Proposal
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default PPCService;
