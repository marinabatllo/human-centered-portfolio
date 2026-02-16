import { Link } from '@/lib/router';
import { Linkedin, Github, Mail } from 'lucide-react';
import { RollingText } from '@/components/ui-custom/RollingText';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com', label: 'GitHub', icon: Github },
  { href: 'mailto:hello@marina.com', label: 'Email', icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Closing section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Keyword marquee */}
        <div className="py-8 border-b border-border overflow-hidden">
          <div className="flex gap-12 text-display text-3xl lg:text-5xl font-extrabold tracking-tight text-foreground/10 whitespace-nowrap animate-marquee">
            <span>Independent</span>
            <span>•</span>
            <span>Multidisciplinary</span>
            <span>•</span>
            <span>Human-Centered</span>
            <span>•</span>
            <span>Data-Driven</span>
            <span>•</span>
            <span>Independent</span>
            <span>•</span>
            <span>Multidisciplinary</span>
            <span>•</span>
            <span>Human-Centered</span>
            <span>•</span>
            <span>Data-Driven</span>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Bio + Back to top */}
          <div className="lg:col-span-6">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-8">
              I build thoughtful, data-driven systems by blending ML engineering,
              human-centered design, and product strategy — helping teams and organizations
              create impact that matters.
            </p>
            <RollingText
              text="Back To Top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm font-semibold text-foreground tracking-wider border border-border rounded-full px-6 py-3 hover:border-primary transition-colors"
            />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="section-label mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <RollingText
                    text={link.label}
                    href={link.href}
                    uppercase={false}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <h3 className="section-label mb-6">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {currentYear} Marina Batlló Rius. All rights reserved.
          </p>
          <Link
            to="/"
            className="text-foreground font-display text-sm tracking-tight hover:opacity-70 transition-opacity"
          >
            Marina<span className="text-primary">®</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
