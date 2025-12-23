
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  MessageCircle,
  TrendingUp,
  Award,
  Users,
  Search,
  ChevronDown
} from 'lucide-react';

// Data
import { SERVICES } from './constants';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Dedicated Service Pages
import SEOService from './pages/services/SEO';
import PPCService from './pages/services/PPC';
import SMMService from './pages/services/SMM';
import WebDevService from './pages/services/WebDev';

// Helper to get consistent service paths
const getServicePath = (id: string) => {
  const slugMap: Record<string, string> = {
    'smm': 'social-media',
    'web-dev': 'web-development'
  };
  return `/services/${slugMap[id] || id}`;
};

// Helper to get shorter menu names from full service titles
const getServiceMenuName = (id: string) => {
  const nameMap: Record<string, string> = {
    'seo': 'SEO Services',
    'ppc': 'PPC Management',
    'smm': 'Social Media Marketing',
    'web-dev': 'Web Development'
  };
  return nameMap[id] || id;
};

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  // Dynamically generated service links
  const servicesLinks = [
    { name: 'All Services', path: '/services' },
    ...SERVICES.map(service => ({
      name: getServiceMenuName(service.id),
      path: getServicePath(service.id)
    }))
  ];

  const otherLinks = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Click<span className="text-blue-600">Per</span>Hour
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                  isActive(link.path) ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 text-sm font-semibold transition-colors hover:text-blue-600 ${
                  location.pathname.startsWith('/services') ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => setIsServicesOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 ${
                        location.pathname === service.path ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                  isActive(link.path) ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Get Free Audit
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b p-4 space-y-2 shadow-xl overflow-y-auto max-h-[80vh]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="px-3 py-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Our Services</p>
            {servicesLinks.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="block py-2 pl-4 text-base font-medium text-slate-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {service.name}
              </Link>
            ))}
          </div>

          {otherLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block bg-blue-600 text-white px-5 py-3 mt-4 rounded-lg font-bold text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Free Audit
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
              <span className="text-2xl font-extrabold tracking-tight">
                Click<span className="text-blue-600">Per</span>Hour
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empowering businesses in Kolkata and across the globe with ROI-focused digital marketing strategies. We turn clicks into loyal customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Search size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Users size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={getServicePath(service.id)} className="hover:text-blue-400 transition-colors">
                    {getServiceMenuName(service.id)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="hover:text-blue-400 transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
                <span>Sector V, Salt Lake City, Kolkata, West Bengal 700091</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <span>hello@clickperhour.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 space-y-4 md:space-y-0">
          <p>© 2024 Click Per Hour Digital Marketing Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Persistent WhatsApp CTA */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo" element={<SEOService />} />
            <Route path="/services/ppc" element={<PPCService />} />
            <Route path="/services/social-media" element={<SMMService />} />
            <Route path="/services/web-development" element={<WebDevService />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
