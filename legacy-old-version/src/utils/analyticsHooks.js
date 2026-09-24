import { useEffect } from 'react';
import { trackPageView, trackEvent } from './analytics';

 
export const usePageAnalytics = (pageName) => {
  useEffect(() => {
    trackPageView(pageName);
  }, [pageName]);
};
 
export const useScrollAnalytics = (pageName) => {
  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 25) {
          trackEvent('scroll_engagement', { page: pageName, percentage: Math.round(scrollPercentage) });
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [pageName]);
};
