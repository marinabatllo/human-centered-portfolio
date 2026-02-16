import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '@/hooks/useAnimations';

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;       // ms
    duration?: number;    // ms
    y?: number;           // translateY offset in px (default 40)
    once?: boolean;
}

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 */
export function Reveal({
    children,
    className = '',
    delay = 0,
    duration = 800,
    y = 40,
}: RevealProps) {
    const [ref, isInView] = useInView<HTMLDivElement>();

    const style: CSSProperties = {
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
    };

    return (
        <div ref={ref} className={className} style={style}>
            {children}
        </div>
    );
}

interface StaggerProps {
    children: ReactNode[];
    className?: string;
    stagger?: number;     // ms between each child
    y?: number;
    duration?: number;
}

/**
 * Staggers the reveal of each child element with increasing delays.
 */
export function Stagger({
    children,
    className = '',
    stagger = 100,
    y = 30,
    duration = 700,
}: StaggerProps) {
    const [ref, isInView] = useInView<HTMLDivElement>();

    return (
        <div ref={ref} className={className}>
            {children.map((child, i) => {
                const style: CSSProperties = {
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(0)' : `translateY(${y}px)`,
                    transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * stagger}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * stagger}ms`,
                    willChange: 'opacity, transform',
                };
                return (
                    <div key={i} style={style}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
}
