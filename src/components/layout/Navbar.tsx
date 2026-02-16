import { useState, useEffect } from 'react';
import { Link, useRouter } from '@/lib/router';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/about', label: 'about' },
  { href: '/cv', label: 'cv' },
  { href: '/contact', label: 'contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { currentPath } = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center bg-transparent backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-8 w-full flex justify-between items-center">
        {/* Logo: Monogram circle + mono name */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-foreground flex items-center justify-center font-bold text-xs group-hover:bg-foreground group-hover:text-background transition-all duration-300">
            M
          </div>
          <span className="hidden sm:block font-mono text-[10px] font-bold uppercase tracking-[0.4em]">
            Marina Batlló Rius
          </span>
        </Link>

        {/* Desktop Navigation — Clinical style */}
        <div className="hidden md:flex items-center gap-12 font-mono text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-all hover:opacity-100 ${isActive(link.href)
                  ? 'opacity-100 font-serif italic text-sm lowercase tracking-normal text-primary'
                  : ''
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="opacity-40 hover:opacity-100 transition-opacity"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link
            to="/contact"
            className="font-mono text-[10px] font-bold uppercase tracking-widest bg-foreground text-background px-6 py-2 rounded-sm hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden font-mono text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-24 left-0 right-0 bg-background border-b border-border overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-80 py-6' : 'max-h-0'
          }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${isActive(link.href) ? 'opacity-100 text-primary' : 'opacity-40 hover:opacity-100'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
