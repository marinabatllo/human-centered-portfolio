import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router';
import { Reveal } from '@/components/ui-custom/Reveal';

export function Hero() {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center relative w-full pt-24 overflow-hidden bg-background">
      <div className="w-full mx-auto px-[5vw] relative z-20">
        <div className="max-w-5xl bg-background/60 dark:bg-black/40 backdrop-blur-xl p-10 md:p-16 border border-border/20 rounded-sm shadow-2xl">
          {/* Status badge + role label */}
          <Reveal delay={0} y={20}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
              <div className="px-3 py-1 rounded-full border border-foreground/10 font-mono text-[9px] uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for Work
              </div>
              <span className="font-mono text-[10px] opacity-30 uppercase tracking-[0.4em]">
                AI · Data · Product
              </span>
            </div>
          </Reveal>

          {/* Massive headline */}
          <Reveal delay={150} y={60} duration={1000}>
            <h1 className="text-hero font-light leading-[0.8] tracking-tighter mb-10">
              DATA TO<br />
              <span className="text-primary">REAL-WORLD</span><br />
              IMPACT<span className="font-serif italic text-secondary">.</span>
            </h1>
          </Reveal>

          {/* Description + CTA */}
          <Reveal delay={350} y={40}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl font-light leading-tight opacity-80 max-w-3xl">
                  I turn complex data into <span className="font-serif italic">actionable intelligence</span> building
                  AI models, designing <span className="font-serif italic">intuitive tools</span>, and using data for <span className="font-serif italic">decision-making</span>
                  in healthcare and strategy consulting.
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <Link
                  to="/projects"
                  className="group relative px-10 py-5 rounded-sm border border-foreground overflow-hidden transition-all hover:bg-foreground hover:text-background"
                >
                  <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                    View Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Custom localized background video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          poster="/assets/hero-poster.jpg"
        >
          <source src="/src/videos/Video_de_Partículas_Animadas_Cerebro_a_Chip.webm" type="video/webm" />
          <source src="/src/videos/Video_de_Partículas_Animadas_Cerebro_a_Chip.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradients to ensure smooth blending at edges */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </div>
    </section>
  );
}
