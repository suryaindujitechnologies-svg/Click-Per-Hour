
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
import BlogPostDetail from './pages/BlogPostDetail';
import Contact from './pages/Contact';

// Dedicated Service Pages
import SEOService from './pages/services/SEO';
import PPCService from './pages/services/PPC';
import SMMService from './pages/services/SMM';
import WebDevService from './pages/services/WebDev';

// Scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Helper to get consistent service paths
export const getServicePath = (id: string) => {
  const slugMap: Record<string, string> = {
    'seo': 'seo-services',
    'ppc': 'ppc-management',
    'smm': 'social-media-marketing',
    'web-dev': 'web-design-development'
  };
  return `/services/${slugMap[id] || id}`;
};

// Helper to get exact menu labels
export const getServiceMenuLabel = (id: string) => {
  const nameMap: Record<string, string> = {
    'seo': 'SEO Services',
    'ppc': 'PPC Management',
    'smm': 'Social Media Marketing',
    'web-dev': 'Web Design & Development'
  };
  return nameMap[id] || id;
};

// Navbar Component
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
    { name: 'About Us', path: '/about-us' },
  ];

  const servicesLinks = [
    { name: 'All Services', path: '/services' },
    ...SERVICES.map(service => ({
      name: getServiceMenuLabel(service.id),
      path: getServicePath(service.id)
    }))
  ];

  const otherLinks = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Knowledge Center', path: '/knowledge-center' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
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
                      onClick={() => {
                        setIsServicesOpen(false);
                        closeMobileMenu();
                      }}
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
              to="/contact-us"
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
              className={`block px-3 py-2 text-lg font-medium rounded-lg ${isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
              onClick={closeMobileMenu}
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
                className={`block py-2 pl-4 text-base font-medium ${location.pathname === service.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                onClick={closeMobileMenu}
              >
                {service.name}
              </Link>
            ))}
          </div>

          {otherLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 text-lg font-medium rounded-lg ${isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact-us"
            className="block bg-blue-600 text-white px-5 py-3 mt-4 rounded-lg font-bold text-center"
            onClick={closeMobileMenu}
          >
            Get Free Audit
          </Link>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
              <span className="text-2xl font-extrabold tracking-tight">
                Click<span className="text-blue-600">Per</span>Hour
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering businesses in Kolkata and across the globe with ROI-focused digital marketing strategies. We turn clicks into loyal customers.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Search size={18} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">All Services</Link></li>
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={getServicePath(service.id)} className="hover:text-blue-400 transition-colors">
                    {getServiceMenuLabel(service.id)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/knowledge-center" className="hover:text-blue-400 transition-colors">Knowledge Center</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
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
                <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <a href="mailto:hello@clickperhour.com" className="hover:text-blue-400 transition-colors">hello@clickperhour.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 space-y-4 md:space-y-0">
          <p>© 2024 Click Per Hour Digital Marketing Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link>
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

// Main App Component
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo-services" element={<SEOService />} />
            <Route path="/services/ppc-management" element={<PPCService />} />
            <Route path="/services/social-media-marketing" element={<SMMService />} />
            <Route path="/services/web-design-development" element={<WebDevService />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/knowledge-center" element={<Blog />} />
            <Route path="/knowledge-center/:id" element={<BlogPostDetail />} />
            <Route path="/contact-us" element={<Contact />} />
            {/* Legal Placeholders */}
            <Route path="/privacy-policy" element={<div className="pt-32 text-center h-screen">Privacy Policy Content</div>} />
            <Route path="/terms-of-service" element={<div className="pt-32 text-center h-screen">Terms of Service Content</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
