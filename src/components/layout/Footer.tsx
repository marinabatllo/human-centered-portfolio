import { Link } from '@/lib/router';
import { useInView } from '@/hooks/useAnimations';

export function Footer() {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <footer
      ref={ref}
      className="mt-28 border-t border-border py-24 px-[5vw]"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-8">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30 italic">
            Endpoint // Contact
          </h4>
          <Link
            to="/contact"
            className="block text-4xl md:text-8xl font-light tracking-tighter hover:pl-6 transition-all duration-700"
          >
            Collaborate<span className="text-primary">.</span>
          </Link>
        </div>
        <div className="md:text-right space-y-4">
          <div className="flex gap-8 md:justify-end font-mono text-[10px] uppercase tracking-widest opacity-40">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity duration-300">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity duration-300">GitHub</a>
          </div>
          <p className="font-mono text-[10px] opacity-20 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Marina Batlló Rius
          </p>
        </div>
      </div>
    </footer>
  );
}
