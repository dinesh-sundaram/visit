import { useEffect, useRef, useState } from 'react';

/**
 * Returns a [ref, isVisible] pair.
 * Once the element enters the viewport it stays visible (fires once).
 *
 * @param {number} threshold  - 0–1, how much of the element must be visible
 * @param {string} rootMargin - e.g. "0px 0px -60px 0px" to trigger a little early
 */
export function useScrollReveal(threshold = 0.15, rootMargin = '0px 0px -50px 0px') {
  const ref   = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
