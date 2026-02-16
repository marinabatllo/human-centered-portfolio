interface SectionHeaderProps {
    id: string;
    title: string;
}

export function SectionHeader({ id, title }: SectionHeaderProps) {
    return (
        <div className="mb-20 pt-10 border-t border-border">
            <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
                <span className="text-secondary">[{id}]</span>
                <span>Section // Protocol</span>
            </div>
            <h2 className="text-display font-light tracking-tighter italic font-serif">
                {title}<span className="text-primary not-italic">.</span>
            </h2>
        </div>
    );
}
