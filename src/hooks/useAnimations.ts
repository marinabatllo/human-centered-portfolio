import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Hook: returns a ref + boolean that becomes true when the element enters the viewport.
 * Once triggered, it stays true (no re-hide on scroll out).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
    options?: IntersectionObserverInit
): [RefObject<T | null>, boolean] {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, ...options }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, isInView];
}

/**
 * Hook: animates a number from 0 to `target` when `shouldAnimate` is true.
 * Handles integers, decimals, and strings like "90%", "8x", "-75%".
 */
export function useCountUp(target: string, shouldAnimate: boolean, duration = 1500): string {
    const [display, setDisplay] = useState('0');

    useEffect(() => {
        if (!shouldAnimate) return;

        // Extract numeric part and suffix
        const match = target.match(/^([+-]?)(\d+\.?\d*)(.*)/);
        if (!match) {
            setDisplay(target);
            return;
        }

        const sign = match[1];
        const numericTarget = parseFloat(match[2]);
        const suffix = match[3];
        const isFloat = match[2].includes('.');
        const startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numericTarget * eased;

            if (isFloat) {
                setDisplay(`${sign}${current.toFixed(1)}${suffix}`);
            } else {
                setDisplay(`${sign}${Math.round(current)}${suffix}`);
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [shouldAnimate, target, duration]);

    return shouldAnimate ? display : '0';
}
