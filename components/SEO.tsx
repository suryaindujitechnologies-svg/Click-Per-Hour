import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
}

const SEO = ({ title, description, image, type = 'website' }: SEOProps) => {
  const { pathname } = useLocation();
  const siteUrl = window.location.origin; 
  const fullUrl = `${siteUrl}${pathname}`;
  const defaultImage = 'https://picsum.photos/seed/clickperhour/1200/630';

  useEffect(() => {
    // Update Title
    document.title = `${title} | Click Per Hour`;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard Meta Tags
    setMeta('description', description);

    // Open Graph / Facebook
    setMeta('og:type', type, 'property');
    setMeta('og:url', fullUrl, 'property');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', image || defaultImage, 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:url', fullUrl);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image || defaultImage);

  }, [title, description, image, fullUrl, type]);

  return null;
};

export default SEO;