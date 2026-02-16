import { useInView } from '@/hooks/useAnimations';

interface SectionHeaderProps {
    id: string;
    title: string;
}

export function SectionHeader({ id, title }: SectionHeaderProps) {
    const [ref, isInView] = useInView<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className="mb-20 pt-10 border-t border-border"
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)',
            }}
        >
            <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
                <span className="text-secondary">[{id}]</span>
                <span>Section // Protocol</span>
            </div>
            <h2
                className="text-display font-light tracking-tighter italic font-serif"
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'opacity 800ms cubic-bezier(0.16,1,0.3,1) 200ms, transform 800ms cubic-bezier(0.16,1,0.3,1) 200ms',
                }}
            >
                {title}<span className="text-primary not-italic">.</span>
            </h2>
        </div>
    );
}
