import { SectionHeader } from '@/components/ui-custom/SectionHeader';

const metrics = [
  {
    value: '4x',
    label: 'Faster Pipelines',
    description: 'Reduced analysis time from 4-6 hours to under 1 hour through automated NMR/MRI processing pipelines.',
  },
  {
    value: '90%+',
    label: 'Model Accuracy',
    description: 'Achieved 90%+ accuracy in pain detection classification and 87% in biomarker identification.',
  },
  {
    value: '8x',
    label: 'Throughput Increase',
    description: 'Led process redesign that increased experimental throughput from 12 to 96 experiments per week.',
  },
  {
    value: '85%',
    label: 'Team Adoption',
    description: 'Internal analysis software achieved 85% team adoption within 3 months of launch.',
  },
];

export function Proof() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader label="Impact Proof" number="MBR® — 05" subtitle="Measurable Results" />

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="group border-t border-border pt-8">
              <div className="text-5xl lg:text-6xl font-extrabold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                {metric.label}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
