
import { useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = <T extends HTMLElement,>() => {
  const elementRef = useRef<T>(null);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.classList.add('scroll-reveal');
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [observerCallback]);

  return elementRef;
};
