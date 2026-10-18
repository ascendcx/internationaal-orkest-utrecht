import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll('.fade-up');
    const segs = el.querySelectorAll('.path-seg');
    // Reduced motion: show everything at once, no observer, no animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      children.forEach((child) => child.classList.add('visible'));
      segs.forEach((seg) => seg.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Path segments are zero width until drawn, so they ride on their step.
            entry.target.querySelectorAll('.path-seg').forEach((seg) => seg.classList.add('visible'));
          }
        });
      },
      { threshold: 0.12 }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}
