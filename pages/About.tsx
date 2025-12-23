
import React from 'react';
import { Target, Eye, Users, ShieldCheck, Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Intro */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Who We Are</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Driving the Digital Pulse of <span className="text-gradient">Kolkata.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in the heart of Kolkata, Click Per Hour was born from a simple realization: businesses don't need "digital marketing," they need **growth**. Most agencies focus on impressions; we focus on the bottom line.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With a blend of local market insights and global performance standards, we help brands across India and the world dominate their niche through data, creativity, and relentless execution.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-3xl font-black text-slate-900">8+ Years</h4>
                  <p className="text-slate-500 font-medium">Industry Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900">50+</h4>
                  <p className="text-slate-500 font-medium">Marketing Experts</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/aboutus/800/800" className="rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" alt="About Click Per Hour" />
              <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                 <p className="text-4xl font-black mb-1">100%</p>
                 <p className="font-bold opacity-80">Performance Driven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To bridge the gap between businesses and their ideal customers using cutting-edge marketing technology and human-centric creativity. We strive to be the most ROI-obsessed agency in India.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To redefine digital marketing as a transparent, predictable, and scalable engine for business success globally, starting from our roots in Kolkata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold">The Values That Drive Us</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our culture is built on transparency, results, and a deep-seated desire to see our clients succeed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Extreme Ownership', desc: 'We treat your business like it\'s our own. Every project is our priority.', icon: <ShieldCheck /> },
              { title: 'Radical Transparency', desc: 'No hidden costs, no vanity metrics. Just clear, honest reporting.', icon: <Heart /> },
              { title: 'Global Thinking', desc: 'Local roots, global standards. We use world-class tools and strategies.', icon: <Globe /> }
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.cloneElement(value.icon, { size: 40 })}
                </div>
                <h4 className="text-2xl font-bold">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <h2 className="text-4xl font-bold">Led by Industry Visionaries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <div key={i} className="group overflow-hidden rounded-3xl bg-slate-800 border border-slate-700">
                <div className="aspect-[4/5] relative">
                  <img src={`https://picsum.photos/seed/member${i}/500/600`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Team member" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold">Expert Name {i}</h4>
                  <p className="text-blue-400">Digital Strategist</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
