import { BarChart3, Brain, TrendingUp, HeartPulse } from 'lucide-react';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { PillarCard } from '@/components/ui-custom/PillarCard';

const pillars = [
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Transforming raw data into actionable insights through rigorous analysis, experimentation frameworks, and intuitive dashboards that drive decision-making.',
    skills: ['SQL', 'Python', 'Data Viz', 'A/B Testing', 'ETL'],
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description: 'Building intelligent systems from concept to production—LLMs, ML pipelines, RAG architectures, and workflow automation that scales.',
    skills: ['Machine Learning', 'LLMs', 'RAG', 'MLOps', 'Python'],
  },
  {
    icon: TrendingUp,
    title: 'Business & Strategy',
    description: 'Connecting technical capabilities to business outcomes—growth initiatives, operational efficiency, and strategic decision support.',
    skills: ['Product Strategy', 'Analytics', 'Operations', 'Consulting'],
  },
  {
    icon: HeartPulse,
    title: 'Health & Human-Centered',
    description: 'Applying data and AI to healthcare and life sciences with a human-computer interaction lens—building tools people actually want to use.',
    skills: ['Healthcare', 'UX Research', 'Biomedical', 'HCI'],
  },
];

const pillarColors = [
  { bg: 'bg-primary/10 group-hover:bg-primary/20', text: 'text-primary', border: 'border-t-primary', skillBg: 'bg-primary/10 text-primary' },
  { bg: 'bg-secondary/10 group-hover:bg-secondary/20', text: 'text-secondary', border: 'border-t-secondary', skillBg: 'bg-secondary/10 text-secondary' },
  { bg: 'bg-accent/15 group-hover:bg-accent/25', text: 'text-accent-foreground', border: 'border-t-accent', skillBg: 'bg-accent/15 text-accent-foreground' },
  { bg: 'bg-primary/10 group-hover:bg-primary/20', text: 'text-primary', border: 'border-t-primary', skillBg: 'bg-primary/10 text-primary' },
];

export function Pillars() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            What I Do
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Four Pillars of Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A unique blend of technical depth, design thinking, and business acumen
            applied to high-impact challenges.
          </p>
        </AnimatedSection>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 100}>
              <PillarCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                skills={pillar.skills}
                colorScheme={pillarColors[index]}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
