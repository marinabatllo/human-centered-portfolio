import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { FlaskConical, Fingerprint, Database, Dna } from 'lucide-react';

const capabilities = [
  {
    icon: Dna,
    title: 'Machine Learning & AI',
    description: 'From biomarker detection to pain classification, designing and deploying ML models that solve real problems — with rigorous validation and interpretable results.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn'],
  },
  {
    icon: Fingerprint,
    title: 'HCI & UX Research',
    description: 'Grounding every interface in user research, ensuring complex analytical tools feel intuitive — reducing training time and boosting adoption across teams.',
    tags: ['Figma', 'Usability Testing', 'Prototyping'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Building automated pipelines and governance frameworks that turn messy, fragmented data into reliable, reproducible assets ready for analysis at scale.',
    tags: ['SQL', 'Airflow', 'Docker', 'AWS'],
  },
  {
    icon: FlaskConical,
    title: 'Product Strategy',
    description: 'From consulting Fortune 500 companies to redesigning internal tools, translating business needs into technical roadmaps that deliver measurable impact.',
    tags: ['Power BI', 'Tableau', 'Analytics'],
  },
];

export function Pillars() {
  return (
    <section>
      <SectionHeader id="03" title="Capabilities Protocol" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <div key={i} className="p-12 lg:p-16 bg-background hover:bg-card transition-colors duration-500 group">
              <div className="mb-8 text-primary">
                <Icon size={28} strokeWidth={1} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 block mb-4">
                Protocol_{String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
              <p className="text-sm opacity-50 leading-relaxed mb-6">{cap.description}</p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((t) => (
                  <span key={t} className="font-mono text-[9px] px-2 py-1 bg-foreground/5 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
