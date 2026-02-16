import { useInView } from '@/hooks/useAnimations';

const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'React', 'TypeScript',
    'SQL', 'Docker', 'AWS', 'Figma', 'scikit-learn',
    'Pandas', 'Power BI', 'Airflow', 'Azure', 'Databricks',
    'NumPy', 'XGBoost', 'Tableau', 'FastAPI', 'PostgreSQL',
];

export function TechCarousel() {
    const [ref, isInView] = useInView<HTMLDivElement>();

    // Double the items for seamless infinite scroll
    const items = [...techStack, ...techStack];

    return (
        <div
            ref={ref}
            className="relative overflow-hidden py-10 border-y border-border"
            style={{
                opacity: isInView ? 1 : 0,
                transition: 'opacity 800ms cubic-bezier(0.16,1,0.3,1)',
            }}
        >
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div
                className="flex gap-4 animate-marquee"
                style={{ width: 'max-content' }}
            >
                {items.map((tech, i) => (
                    <span
                        key={`${tech}-${i}`}
                        className="inline-flex items-center px-5 py-2.5 rounded-full border border-foreground/10 font-mono text-[10px] uppercase tracking-[0.2em] opacity-50 hover:opacity-100 hover:border-primary hover:text-primary transition-all duration-300 cursor-default whitespace-nowrap select-none"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
