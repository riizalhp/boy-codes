import { useEffect, useRef, useCallback } from 'react';

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const useCountUp = (end: number, duration: number = 2000) => {
    const elementRef = useRef<HTMLElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    const animateCountUp = useCallback((el: HTMLElement) => {
        let startTime: number | null = null;
        
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const currentNumber = Math.floor(easedProgress * end);
            
            if (el) {
                el.textContent = String(currentNumber);
            }

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(step);
            } else {
                if (el) {
                    el.textContent = String(end); // Ensure it ends on the exact number
                }
            }
        };
        animationFrameRef.current = requestAnimationFrame(step);
    }, [end, duration]);

    const observerCallback = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (elementRef.current) {
                    animateCountUp(elementRef.current);
                }
                observer.unobserve(entry.target);
            }
        });
    }, [animateCountUp]);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(observerCallback, { threshold: 0.5 });
        const currentElement = elementRef.current;
        if (currentElement) {
            observerRef.current.observe(currentElement);
        }

        return () => {
            if (observerRef.current && currentElement) {
                observerRef.current.unobserve(currentElement);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [observerCallback]);

    return elementRef;
};
