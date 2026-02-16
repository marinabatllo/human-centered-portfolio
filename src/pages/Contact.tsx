import { useState } from 'react';
import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-20 relative z-10 space-y-32">
      <SectionHeader id="C1" title="Get in Touch" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left — Info */}
        <div className="lg:col-span-5 space-y-16">
          <p className="text-3xl md:text-4xl font-light leading-tight tracking-tight">
            Open to opportunities in <span className="font-serif italic text-primary">data</span>,{' '}
            <span className="font-serif italic text-secondary">AI</span>, and{' '}
            <span className="font-serif italic text-accent">product</span>.
          </p>

          <div className="space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 block">
              Channels // Direct
            </span>
            <a
              href="mailto:marinabatllo7@gmail.com"
              className="flex items-center gap-4 group py-3 border-b border-border hover:border-primary transition-colors"
            >
              <Mail size={16} strokeWidth={1} className="opacity-40" />
              <span className="text-sm">marinabatllo7@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group py-3 border-b border-border hover:border-primary transition-colors"
            >
              <Linkedin size={16} strokeWidth={1} className="opacity-40" />
              <span className="text-sm">LinkedIn</span>
              <span className="ml-auto font-mono text-[9px] opacity-20 group-hover:opacity-60">↗</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group py-3 border-b border-border hover:border-primary transition-colors"
            >
              <Github size={16} strokeWidth={1} className="opacity-40" />
              <span className="text-sm">GitHub</span>
              <span className="ml-auto font-mono text-[9px] opacity-20 group-hover:opacity-60">↗</span>
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-12">
            Message // Form
          </span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:marinabatllo7@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
            }}
            className="space-y-8"
          >
            <div>
              <label className="font-mono text-[9px] uppercase tracking-widest opacity-30 block mb-3">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-b border-border text-lg font-light tracking-tight placeholder:opacity-20 focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="font-mono text-[9px] uppercase tracking-widest opacity-30 block mb-3">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-b border-border text-lg font-light tracking-tight placeholder:opacity-20 focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="font-mono text-[9px] uppercase tracking-widest opacity-30 block mb-3">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-0 py-4 bg-transparent border-b border-border text-lg font-light tracking-tight placeholder:opacity-20 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Describe your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="group relative px-10 py-5 rounded-sm border border-foreground overflow-hidden transition-all hover:bg-foreground hover:text-background"
            >
              <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                Send <ArrowRight size={16} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
