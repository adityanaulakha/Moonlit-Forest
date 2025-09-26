import { useEffect } from 'react';

// Hook to auto-reveal elements with class 'reveal'
export default function useReveal(options = {}) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15, ...options });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);
}
