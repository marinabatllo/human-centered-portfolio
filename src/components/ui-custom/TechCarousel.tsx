import { useInView } from '@/hooks/useAnimations';
import { useTheme } from '@/contexts/ThemeContext';

// New PNG Icon imports
import pytorchIcon from '@/icons/Pytorch--Streamline-Simple-Icons.png';
import scikitIcon from '@/icons/Scikitlearn--Streamline-Simple-Icons(1).png';
import awsBlack from '@/icons/aws-brands-solid-black.png';
import awsWhite from '@/icons/aws-brands-solid-white.png';
import azureIcon from '@/icons/azur.png';
import githubIcon from '@/icons/github.png';
import pythonIcon from '@/icons/logotipo-de-python-language.png';
import mlModelIcon from '@/icons/modelo-ml.png';
import postgreBlack from '@/icons/postgre-black.png';
import postgreWhite from '@/icons/postgrewhite.png';

const techIcons = [
    { name: 'Python', lightIcon: pythonIcon, darkIcon: pythonIcon },
    { name: 'PyTorch', lightIcon: pytorchIcon, darkIcon: pytorchIcon },
    { name: 'Scikit-learn', lightIcon: scikitIcon, darkIcon: scikitIcon },
    { name: 'Azure', lightIcon: azureIcon, darkIcon: azureIcon },
    { name: 'GitHub', lightIcon: githubIcon, darkIcon: githubIcon },
    { name: 'AWS', lightIcon: awsBlack, darkIcon: awsWhite },
    { name: 'Machine Learning', lightIcon: mlModelIcon, darkIcon: mlModelIcon },
    { name: 'PostgreSQL', lightIcon: postgreBlack, darkIcon: postgreWhite },
];

export function TechCarousel() {
    const [ref, isInView] = useInView<HTMLDivElement>();
    const { theme } = useTheme();

    // Duplicate the items for seamless infinite scroll
    const items = [...techIcons, ...techIcons, ...techIcons];

    return (
        <div
            ref={ref}
            className="relative overflow-hidden py-16 border-y border-border/10 bg-background/50 backdrop-blur-sm"
            style={{
                opacity: isInView ? 1 : 0,
                transition: 'opacity 1000ms cubic-bezier(0.16,1,0.3,1)',
            }}
        >
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div
                className="flex gap-20 animate-marquee items-center"
                style={{ width: 'max-content' }}
            >
                {items.map((tech, i) => (
                    <div
                        key={`${tech.name}-${i}`}
                        className="group flex flex-col items-center gap-4 transition-all duration-500 hover:scale-110"
                    >
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img
                                src={theme === 'dark' ? tech.darkIcon : tech.lightIcon}
                                alt={tech.name}
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-40 transition-opacity duration-500 whitespace-nowrap">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
