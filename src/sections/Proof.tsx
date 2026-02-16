import { Zap, TrendingUp, Users, Award } from 'lucide-react';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { MetricCard } from '@/components/ui-custom/MetricCard';

const metrics = [
  {
    value: '4x',
    label: 'Faster Analysis',
    description: 'Pipeline automation improvement',
    icon: Zap,
  },
  {
    value: '90%+',
    label: 'Model Accuracy',
    description: 'Pain detection in rodent models',
    icon: TrendingUp,
  },
  {
    value: '8x',
    label: 'Throughput Increase',
    description: 'Experimental capacity optimization',
    icon: Users,
  },
  {
    value: '5+',
    label: 'Publications',
    description: 'Peer-reviewed research contributions',
    icon: Award,
  },
];

export function Proof() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/10 via-accent/5 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Proof of Impact
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Results That Speak
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quantifiable outcomes from projects across healthcare, AI, and data engineering.
          </p>
        </AnimatedSection>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={index * 100}>
              <MetricCard
                value={metric.value}
                label={metric.label}
                description={metric.description}
                icon={metric.icon}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Additional proof points */}
        <AnimatedSection delay={400} className="mt-12">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-6 lg:p-8 text-primary-foreground">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="font-display text-2xl font-semibold text-primary-foreground mb-1">
                  Enterprise
                </div>
                <div className="text-sm text-primary-foreground/80">
                  Delivered analytics transformation for Fortune 500 clients
                </div>
              </div>
              <div className="text-center md:text-left md:border-l md:border-r md:border-primary-foreground/20 md:px-8">
                <div className="font-display text-2xl font-semibold text-primary-foreground mb-1">
                  Healthcare
                </div>
                <div className="text-sm text-primary-foreground/80">
                  Built AI systems for biomedical research and drug discovery
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-display text-2xl font-semibold text-primary-foreground mb-1">
                  Product
                </div>
                <div className="text-sm text-primary-foreground/80">
                  Designed and shipped internal tools with 85% team adoption
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
