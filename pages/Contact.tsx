
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'seo',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'seo', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Let's Fuel Your <span className="text-blue-600">Growth</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to scale? Fill out the form below or reach out directly to our Kolkata office.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Contact Details</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Office Address</h4>
                      <p className="text-slate-600">Sector V, Salt Lake City, EP Block, Kolkata, WB 700091, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Phone Number</h4>
                      <p className="text-slate-600">+91 98765 43210</p>
                      <p className="text-slate-600 text-sm italic">Available Mon - Sat, 10 AM - 7 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email Address</h4>
                      <p className="text-slate-600">hello@clickperhour.com</p>
                      <p className="text-slate-600">support@clickperhour.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-200 h-80 rounded-3xl overflow-hidden relative border border-slate-100 shadow-inner group">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                     <MapPin className="mx-auto text-blue-500 mb-2 group-hover:scale-110 transition-transform" size={48} />
                     <p className="font-bold text-slate-500">Google Maps Embed Placeholder</p>
                     <p className="text-xs text-slate-400">Salt Lake, Sector V, Kolkata</p>
                   </div>
                </div>
                <img src="https://picsum.photos/seed/kolkatamap/800/400" className="w-full h-full object-cover opacity-20" alt="Map" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 text-slate-900">Get a Free Proposal</h2>
                <p className="text-slate-500">Expect a response within 24 business hours.</p>
              </div>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">Message Sent!</h3>
                  <p className="text-green-700">Thank you for reaching out. One of our growth experts will contact you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-green-700 font-bold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Primary Service</label>
                      <select 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="seo">Search Engine Optimization</option>
                        <option value="ppc">PPC / Google Ads</option>
                        <option value="smm">Social Media Marketing</option>
                        <option value="web-dev">Web Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">How can we help? *</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                      placeholder="Tell us about your project goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    disabled={status === 'submitting'}
                    type="submit" 
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Proposal Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
