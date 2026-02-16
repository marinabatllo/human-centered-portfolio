import { Link } from '@/lib/router';

export function Footer() {
  return (
    <footer className="mt-64 border-t border-border py-24 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
          </div>
          <p className="font-mono text-[10px] opacity-20 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Marina Batlló Rius
          </p>
        </div>
      </div>
    </footer>
  );
}
