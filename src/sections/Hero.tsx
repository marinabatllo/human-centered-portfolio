import { useEffect, useState } from 'react';
import { BioHeatmap } from '@/components/ui-custom/BioHeatmap';
import { RollingText } from '@/components/ui-custom/RollingText';
import { SectionHeader } from '@/components/ui-custom/SectionHeader';

const roles = ['ML Engineer', 'Data Scientist', 'HCI Researcher', 'Product Builder', 'Creative Technologist'];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeIn(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Neural pulse background */}
      <BioHeatmap />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-[1400px] mx-auto w-full px-6 lg:px-10 pb-16 lg:pb-24">
        {/* Section annotation */}
        <SectionHeader label="Portfolio" number="MBR® — 01" subtitle="Applied AI" />

        {/* Top metadata row */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs text-muted-foreground tracking-wider uppercase">Based in Barcelona</span>
          <span className="text-xs text-muted-foreground tracking-wider uppercase">Applied AI Engineer + HCI Specialist</span>
        </div>

        {/* Massive headline */}
        <h1 className="text-hero text-foreground mb-8">
          Data & AI for<br />
          <span className="text-gradient-brand">Human Impact</span>
        </h1>

        {/* Roles ticker */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-border" />
          <span
            className={`text-sm text-muted-foreground font-medium tracking-wider uppercase transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {roles[roleIndex]}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-6">
          <RollingText
            text="Contact"
            href="/contact"
            className="text-sm font-semibold text-foreground tracking-wider border border-border rounded-full px-8 py-3 hover:border-primary transition-colors"
          />
          <RollingText
            text="See Projects"
            href="/projects"
            className="text-sm font-semibold text-muted-foreground tracking-wider hover:text-foreground transition-colors"
          />
        </div>
      </div>
    </section>
  );
}
