import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router';
import { Reveal } from '@/components/ui-custom/Reveal';
import { useInView } from '@/hooks/useAnimations';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="min-h-[100vh] flex flex-col justify-center relative w-full pt-24 overflow-hidden bg-background">
      <div className="w-full mx-auto px-[5vw] relative z-20">
        <div className="max-w-6xl">
          {/* Status badge + role label */}
          <Reveal delay={0} y={20}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
              <div className="px-3 py-1 rounded-full border border-foreground/10 bg-background/60 dark:bg-black/40 backdrop-blur-md font-mono text-[9px] uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for Work
              </div>
              <span className="font-mono text-[10px] opacity-30 uppercase tracking-[0.4em] px-2 py-1 bg-background/40 dark:bg-black/20 backdrop-blur-sm rounded-sm">
                AI · Data · Product
              </span>
            </div>
          </Reveal>

          {/* Massive headline with granular highlights */}
          <Reveal delay={150} y={60} duration={1000}>
            <h1 className="text-hero font-light leading-[1.2] tracking-tighter mb-10">
              <span className="bg-background/80 dark:bg-black/60 px-4 py-2 backdrop-blur-md inline-block mb-2">DATA TO</span><br />
              <span className="bg-background/80 dark:bg-black/60 px-4 py-2 backdrop-blur-md inline-block mb-2 text-primary">REAL-WORLD</span><br />
              <span className="bg-background/80 dark:bg-black/60 px-4 py-2 backdrop-blur-md inline-block">IMPACT<span className="font-serif italic text-secondary">.</span></span>
            </h1>
          </Reveal>

          {/* Description + CTA */}
          <Reveal delay={350} y={40}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <p className="text-xl md:text-2xl font-light leading-[2.2] max-w-3xl">
                  <span className="bg-background/80 dark:bg-black/70 px-4 py-2 backdrop-blur-md inline box-decoration-clone leading-[2.2]">
                    I turn complex data into <span className="font-serif italic">actionable intelligence</span> building
                    AI models, designing <span className="font-serif italic">intuitive tools</span>, and using data for <span className="font-serif italic">decision-making</span>
                    in healthcare and strategy consulting.
                  </span>
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  to="/projects"
                  className="group relative px-10 py-5 rounded-sm border border-foreground overflow-hidden bg-background/80 dark:bg-black/60 backdrop-blur-md transition-all hover:bg-foreground hover:text-background"
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

      {/* Premium localized background video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <video
          ref={videoRef}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
        >
          <source src="/src/videos/Premium_Particle_Animation_Generation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradients to ensure smooth blending at edges */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </div>
    </section>
  );
}
