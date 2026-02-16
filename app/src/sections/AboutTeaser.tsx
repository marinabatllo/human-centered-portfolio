import { Link } from '@/lib/router';
import { ArrowRight, GraduationCap, Briefcase, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';

export function AboutTeaser() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <AnimatedSection>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
              About Me
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Why These Domains Connect
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                My background in bioengineering taught me to approach complex systems with rigor.
                My MSc in Human-Computer Interaction taught me that technology only matters if
                people can use it. And my work in consulting taught me that impact requires
                understanding business context.
              </p>
              <p>
                This unique combination—technical depth, design thinking, and business acumen—
                is what I bring to every project. Whether it's accelerating drug discovery
                pipelines or building AI products, I focus on outcomes that matter.
              </p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Barcelona, Spain</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>MSc Human-Computer Interaction</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>4+ Years Experience</span>
              </div>
            </div>

            <Link to="/about">
              <Button className="rounded-full gap-2">
                Read my story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>

          {/* Visual */}
          <AnimatedSection delay={200} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-card rounded-3xl border border-border/50 shadow-elevated" />

              {/* Content placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="font-display text-3xl font-semibold text-primary">MB</span>
                </div>
                <div className="text-center">
                  <div className="font-display text-xl font-semibold text-foreground mb-2">
                    Marina Batlló Rius
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Data & AI Engineer
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Bioengineering
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                      HCI
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/15 text-accent-foreground text-xs font-medium">
                      AI/ML
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-secondary/30" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
