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
    const revealAll = () => {
      children.forEach((child) => child.classList.add('visible'));
      segs.forEach((seg) => seg.classList.add('visible'));
    };
    // Without IntersectionObserver there is nothing to trigger the reveal, so show everything.
    if (typeof IntersectionObserver === 'undefined') {
      revealAll();
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
    // Safety net: anything near the viewport that the observer has not revealed after 2s is shown anyway.
    const fallback = window.setTimeout(() => {
      children.forEach((child) => {
        if (child.getBoundingClientRect().top < window.innerHeight * 1.2) {
          child.classList.add('visible');
          child.querySelectorAll('.path-seg').forEach((seg) => seg.classList.add('visible'));
        }
      });
    }, 2000);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);
  return ref;
}
