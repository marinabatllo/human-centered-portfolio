import { Link } from '@/lib/router';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoLoop } from '@/components/ui/LogoLoop';
import Shuffle from '@/components/ui/Shuffle';
import { BioHeatmap } from '@/components/ui-custom/BioHeatmap';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Bio-heatmap animated background */}
      <BioHeatmap />

      {/* Gradient overlay — ensures text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4" />
          <span>Open to new opportunities</span>
        </div>

        {/* Headline */}
        <div className="mb-6">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight">
            <Shuffle
              text="Data & AI for"
              tag="span"
              className="text-foreground"
              shuffleDirection="right"
              duration={0.35}
              stagger={0.03}
              threshold={0.3}
              triggerOnce={false}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
            {' '}
            <Shuffle
              text="Human Impact"
              tag="span"
              className="text-gradient-brand"
              shuffleDirection="right"
              duration={0.35}
              stagger={0.03}
              threshold={0.3}
              triggerOnce={false}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
          </h1>
        </div>

        {/* Logo Carousel */}
        <div className="mb-10 animate-fade-in-up delay-75">
          <LogoLoop
            logos={[
              { node: <span className="text-muted-foreground font-medium">Python</span> },
              { node: <span className="text-muted-foreground font-medium">TensorFlow</span> },
              { node: <span className="text-muted-foreground font-medium">PyTorch</span> },
              { node: <span className="text-muted-foreground font-medium">React</span> },
              { node: <span className="text-muted-foreground font-medium">Scikit-learn</span> },
              { node: <span className="text-muted-foreground font-medium">Pandas</span> },
              { node: <span className="text-muted-foreground font-medium">SQL</span> },
              { node: <span className="text-muted-foreground font-medium">Docker</span> },
            ]}
            speed={60}
            direction="left"
            logoHeight={20}
            gap={48}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="hsl(50, 30%, 97%)"
            scaleOnHover={true}
            ariaLabel="Technologies and skills"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-100">
          I bridge machine learning, human-centered design, and business strategy
          to build systems that matter—from accelerating drug discovery to scaling AI products.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
          <Link to="/projects">
            <Button size="lg" className="rounded-full px-8 gap-2">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/cv">
            <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </Link>
        </div>

        {/* Positioning statement */}
        <div className="mt-16 pt-8 border-t border-border/30 animate-fade-in-up delay-300">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Applied AI Engineer with HCI expertise. Proven impact: 4x faster pipelines,
            90%+ accuracy models, and tools teams actually use.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
