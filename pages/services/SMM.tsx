
import React from 'react';
import { Share2, Users, Heart, MessageSquare, CheckCircle, ArrowRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const SMMService = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl rotate-12">
              <Share2 size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              Build a <span className="text-blue-600">Community</span> <br /> 
              Not Just a Following.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              In India's vibrant social landscape, engagement is currency. We help brands in Kolkata create meaningful connections that convert into loyalty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                   <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                      <div className="p-4 bg-pink-100 text-pink-600 rounded-2xl mb-4"><Instagram /></div>
                      <h4 className="font-bold">Instagram</h4>
                      <p className="text-xs text-slate-500">Visual storytelling</p>
                   </div>
                   <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                      <div className="p-4 bg-blue-100 text-blue-700 rounded-2xl mb-4"><Linkedin /></div>
                      <h4 className="font-bold">LinkedIn</h4>
                      <p className="text-xs text-slate-500">B2B Authority</p>
                   </div>
                </div>
                <div className="space-y-6 pt-12">
                   <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                      <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl mb-4"><Facebook /></div>
                      <h4 className="font-bold">Facebook</h4>
                      <p className="text-xs text-slate-500">Hyper-targeting</p>
                   </div>
                   <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                      <div className="p-4 bg-slate-100 text-slate-900 rounded-2xl mb-4"><Twitter /></div>
                      <h4 className="font-bold">Twitter (X)</h4>
                      <p className="text-xs text-slate-500">Real-time engagement</p>
                   </div>
                </div>
             </div>

             <div className="space-y-8">
                <h2 className="text-4xl font-bold">Social Strategies That Actually Work</h2>
                <p className="text-lg text-slate-600">We don't just post pictures. We engineer viral content, manage thriving communities, and run performance-focused social ad campaigns.</p>
                <div className="space-y-4">
                   {[
                     { icon: <Users size={20} className="text-blue-600" />, title: 'Community Management', text: 'Engaging with your audience 24/7.' },
                     { icon: <Heart size={20} className="text-blue-600" />, title: 'Influencer Marketing', text: 'Leveraging local Kolkata influencers.' },
                     { icon: <MessageSquare size={20} className="text-blue-600" />, title: 'Content Production', text: 'High-end reels, graphics, and copy.' }
                   ].map((item, i) => (
                     <div key={i} className="flex items-start space-x-4">
                        <div className="bg-blue-50 p-2 rounded-lg mt-1">{item.icon}</div>
                        <div>
                           <h4 className="font-bold text-slate-900">{item.title}</h4>
                           <p className="text-slate-500 text-sm">{item.text}</p>
                        </div>
                     </div>
                   ))}
                </div>
                <Link to="/contact" className="inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                   <span>Start Your Campaign</span>
                   <ArrowRight size={20} />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMMService;
