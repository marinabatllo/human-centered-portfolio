import { Link } from '@/lib/router';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';

export function CTABanner() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-8 lg:p-16">
            {/* Background gradient decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 pointer-events-none" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4">
                Let's Build Something Impactful
              </h2>

              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities in data, AI,
                product, and health tech. Whether you have a specific role in mind
                or just want to connect, I'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full px-8 gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

