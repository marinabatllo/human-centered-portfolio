import { useState } from 'react';
import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { RollingText } from '@/components/ui-custom/RollingText';
import { Linkedin, Github, Mail } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:hello@marina.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="pt-24 pb-20 lg:pt-32 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader label="Contact" number="MBR® — Connect" subtitle="Let's Talk" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <h1 className="text-hero text-foreground mb-8">Let's talk.</h1>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Open to opportunities in data, AI, product, and health tech.
              Whether it's a full-time role, freelance project, or collaboration —
              let's discuss how I can help.
            </p>

            {/* Social links */}
            <div className="space-y-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">LinkedIn</span>
                <span className="text-xs text-muted-foreground/50 group-hover:text-muted-foreground ml-auto">↗</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm">GitHub</span>
                <span className="text-xs text-muted-foreground/50 group-hover:text-muted-foreground ml-auto">↗</span>
              </a>
              <a
                href="mailto:hello@marina.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@marina.com</span>
              </a>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="flex flex-col justify-end">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="section-label block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="section-label block mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="section-label block mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <RollingText
                text="Send Message"
                onClick={() => handleSubmit(new Event('submit') as any)}
                className="text-sm font-semibold text-foreground tracking-wider border border-border rounded-full px-8 py-3 hover:border-primary transition-colors"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
