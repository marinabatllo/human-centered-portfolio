interface SectionHeaderProps {
    label: string;
    number: string;
    subtitle: string;
}

export function SectionHeader({ label, number, subtitle }: SectionHeaderProps) {
    return (
        <div className="grid grid-cols-3 items-center border-y border-border py-3 mb-12 lg:mb-16">
            <span className="section-label text-left">© {label}</span>
            <span className="section-label text-center">({number})</span>
            <span className="section-label text-right">{subtitle}</span>
        </div>
    );
}
