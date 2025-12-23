
import React from 'react';
import { 
  Search, 
  MousePointer2, 
  Share2, 
  Code, 
  MapPin, 
  PenTool, 
  BarChart3 
} from 'lucide-react';
import { Service, Testimonial, CaseStudy, BlogPost } from './types';

export const COLORS = {
  primary: '#2563eb',
  secondary: '#0f172a',
  accent: '#f59e0b',
  white: '#ffffff',
  slate: '#64748b'
};

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortDescription: 'Dominate Google rankings and drive organic traffic with data-backed SEO strategies.',
    fullDescription: 'Our SEO service focuses on long-term organic growth. We optimize your technical foundation, content, and authority to ensure you stay ahead of the competition in Kolkata and beyond.',
    benefits: ['Increased Organic Visibility', 'Higher Quality Traffic', 'Better ROI than Paid Ads', 'Sustainable Growth'],
    process: ['Audit', 'Keyword Research', 'On-Page Optimization', 'Link Building', 'Reporting'],
    tools: ['Ahrefs', 'SEMRush', 'Google Search Console', 'Screaming Frog'],
    icon: 'Search'
  },
  {
    id: 'ppc',
    title: 'Google Ads / PPC',
    shortDescription: 'Instant visibility and high-quality leads with precision-targeted advertising campaigns.',
    fullDescription: 'Maximize your advertising spend with expert-managed PPC campaigns. We focus on conversion, not just clicks.',
    benefits: ['Immediate Results', 'Targeted Reach', 'Measurable ROI', 'Cost Control'],
    process: ['Strategy', 'Ad Copywriting', 'Landing Page Optimization', 'Bid Management', 'A/B Testing'],
    tools: ['Google Ads Editor', 'Keyword Planner', 'Optmyzr'],
    icon: 'MousePointer2'
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    shortDescription: 'Build a loyal community and engage your target audience on platforms they love.',
    fullDescription: 'From Instagram to LinkedIn, we create content that resonates and drives engagement for brands in India.',
    benefits: ['Brand Awareness', 'Customer Loyalty', 'Direct Engagement', 'Targeted Ads'],
    process: ['Content Calendar', 'Creative Design', 'Community Management', 'Performance Tracking'],
    tools: ['Canva Pro', 'Buffer', 'Meta Business Suite'],
    icon: 'Share2'
  },
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    shortDescription: 'Fast, responsive, and SEO-friendly websites designed for modern conversions.',
    fullDescription: 'We build websites that don\'t just look good—they work. Optimized for speed, mobile, and user experience.',
    benefits: ['Mobile First Design', 'Ultra-fast Loading', 'SEO Friendly Architecture', 'Secure & Scalable'],
    process: ['Wireframing', 'UI/UX Design', 'Development', 'Testing', 'Launch'],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    icon: 'Code'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Mukherjee',
    role: 'CEO',
    company: 'Bengal Tech Solutions',
    content: 'Click Per Hour transformed our online presence. Our organic leads grew by 300% within 6 months of their SEO intervention.',
    avatar: 'https://picsum.photos/seed/rajesh/100/100'
  },
  {
    id: '2',
    name: 'Sneha Kapoor',
    role: 'Marketing Head',
    company: 'E-com India',
    content: 'The most transparent and data-driven agency we have worked with. Their PPC strategy cut our CPA by 40%.',
    avatar: 'https://picsum.photos/seed/sneha/100/100'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Local SEO Success for Kolkata Real Estate',
    industry: 'Real Estate',
    challenge: 'Low organic visibility for competitive keywords like "flats in Kolkata".',
    solution: 'Implemented aggressive local SEO and content clustering strategy.',
    results: [
      { metric: 'Organic Traffic', value: '15k/mo', improvement: '+240%' },
      { metric: 'Leads Generated', value: '450+', improvement: '+180%' }
    ],
    image: 'https://picsum.photos/seed/realestate/800/600'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Your Kolkata Business Needs Local SEO in 2025',
    excerpt: 'Explore how local search trends are changing and how businesses in West Bengal can capitalize.',
    category: 'SEO',
    author: 'Amit Das',
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/blog1/800/400'
  },
  {
    id: '2',
    title: 'Scaling E-commerce Brands with Google Shopping Ads',
    excerpt: 'A comprehensive guide to boosting sales for Indian e-commerce startups using smart bidding.',
    category: 'PPC',
    author: 'Priya Sen',
    date: 'Oct 10, 2024',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/blog2/800/400'
  },
  {
    id: '3',
    title: 'The Future of Content Marketing: AI Integration',
    excerpt: 'How artificial intelligence is reshaping the way we create and distribute digital content.',
    category: 'Content',
    author: 'Vikram Roy',
    date: 'Oct 08, 2024',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/blog3/800/400'
  },
  {
    id: '4',
    title: 'Maximizing Instagram Reels for B2B Engagement',
    excerpt: 'Think Reels are just for Gen Z? Learn how professional services are landing clients via short-form video.',
    category: 'SMM',
    author: 'Ananya Bose',
    date: 'Oct 05, 2024',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/blog4/800/400'
  },
  {
    id: '5',
    title: 'Technical Web Performance: Core Web Vitals Explained',
    excerpt: 'Why LCP, FID, and CLS are the most important metrics for your website\'s health and SEO.',
    category: 'Web Dev',
    author: 'Rahul Chatterjee',
    date: 'Oct 02, 2024',
    readTime: '10 min read',
    image: 'https://picsum.photos/seed/blog5/800/400'
  },
  {
    id: '6',
    title: 'Building a Lead Generation Machine on LinkedIn',
    excerpt: 'Practical strategies for optimizing your LinkedIn profile and content to drive high-ticket sales.',
    category: 'SMM',
    author: 'Priya Sen',
    date: 'Sep 28, 2024',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/blog6/800/400'
  },
  {
    id: '7',
    title: 'Email Marketing Secrets for High Conversion Rates',
    excerpt: 'From subject lines to segmenting, discover how to keep your open rates high and churn low.',
    category: 'Email',
    author: 'Amit Das',
    date: 'Sep 25, 2024',
    readTime: '9 min read',
    image: 'https://picsum.photos/seed/blog7/800/400'
  }
];
