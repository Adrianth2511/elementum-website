import { useEffect } from 'react';

/**
 * Adds the 'visible' class to ref.current when it enters the viewport.
 * Used for scroll-triggered fade-in animations.
 */
export default function useInView(ref, threshold = 0.15) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);
}
