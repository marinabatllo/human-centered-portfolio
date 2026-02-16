import { Link } from '@/lib/router';
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/cv', label: 'CV' },
    { href: '/contact', label: 'Contact' },
  ],
  social: [
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://github.com', label: 'GitHub', icon: Github },
    { href: 'mailto:hello@marina.com', label: 'Email', icon: Mail },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary/95 to-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-display text-xl font-semibold tracking-tight mb-4"
            >
              <span className="text-primary-foreground">Marina</span>
              <span className="text-accent">.</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-sm leading-relaxed mb-6">
              Data & AI for Human Impact. Bridging machine learning, human-centered design,
              and business strategy to build systems that matter.
            </p>
            <div className="flex items-center gap-3">
              {footerLinks.social.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 hover:border-accent transition-all"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold text-primary-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-primary-foreground mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Open to opportunities in data, AI, product, and health tech.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Let's talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            {currentYear} Marina Batlló Rius. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Built with care using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
