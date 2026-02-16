import { Link } from '@/lib/router';

interface RollingTextProps {
    text: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    uppercase?: boolean;
}

export function RollingText({ text, href, onClick, className = '', uppercase = true }: RollingTextProps) {
    const textClass = `inline-flex overflow-hidden relative cursor-pointer group ${uppercase ? 'uppercase' : ''} ${className}`;

    const inner = (
        <>
            <span className="block transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
                {text}
            </span>
            <span
                className="block absolute top-full left-0 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full"
                aria-hidden
            >
                {text}
            </span>
        </>
    );

    if (href) {
        return (
            <Link to={href} className={textClass}>
                {inner}
            </Link>
        );
    }

    if (onClick) {
        return (
            <button onClick={onClick} className={textClass}>
                {inner}
            </button>
        );
    }

    return <span className={textClass}>{inner}</span>;
}
