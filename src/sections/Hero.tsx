import { ArrowRight, Dna } from 'lucide-react';
import { Link } from '@/lib/router';

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative">
      <div className="max-w-6xl relative z-10">
        {/* Status badge + role label */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 animate-fade-in">
          <div className="px-3 py-1 rounded-full border border-foreground/10 font-mono text-[9px] uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            System Active: Marina_Bio_01
          </div>
          <span className="font-mono text-[10px] opacity-30 uppercase tracking-[0.4em]">
            Biomedical Data Architect
          </span>
        </div>

        {/* Massive headline */}
        <h1 className="text-hero font-light leading-[0.8] tracking-tighter mb-16 animate-fade-in-up">
          BIO<span className="text-primary">DATA</span>
          <br />
          STRATEGY<span className="font-serif italic text-secondary">.</span>
        </h1>

        {/* Description + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-4xl font-light leading-tight opacity-70 max-w-3xl">
              Translating complex <span className="font-serif italic">biological phenomena</span> into scalable
              <span className="font-serif italic"> digital intelligence</span>. Specialist in AI-driven biomarker discovery and FMCG transformation.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link
              to="/projects"
              className="group relative px-10 py-5 rounded-sm border border-foreground overflow-hidden transition-all hover:bg-foreground hover:text-background"
            >
              <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                View Trials <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Background DNA icon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
        <Dna size={600} strokeWidth={0.5} className="text-primary" />
      </div>
    </section>
  );
}
