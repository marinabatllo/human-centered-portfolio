import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { useInView } from '@/hooks/useAnimations';
import { BrainCircuit, Palette, Database, LineChart } from 'lucide-react';

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description: 'Building and deploying ML models that solve real problems — from classification and prediction to NLP and computer vision — with rigorous validation and interpretable results.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn'],
  },
  {
    icon: Palette,
    title: 'HCI & UX Design',
    description: 'Designing tools that people actually want to use. I ground every interface in user research, reducing training time and boosting adoption across technical and non-technical teams.',
    tags: ['Figma', 'Usability Testing', 'Prototyping', 'React'],
  },
  {
    icon: Database,
    title: 'Data Engineering & Governance',
    description: 'Turning fragmented, messy data into reliable, governed assets. I build automated ETL pipelines, data quality frameworks, and scalable architectures ready for analysis at scale.',
    tags: ['SQL', 'Airflow', 'Docker', 'AWS', 'Databricks'],
  },
  {
    icon: LineChart,
    title: 'Product & Data Strategy',
    description: 'Translating business needs into technical roadmaps. From Fortune 500 consulting to redesigning internal tools, I deliver measurable outcomes that align data capabilities with goals.',
    tags: ['Power BI', 'Tableau', 'Analytics', 'Roadmapping'],
  },
];

function CapabilityCard({ cap, index }: { cap: typeof capabilities[0]; index: number }) {
  const [ref, isInView] = useInView<HTMLDivElement>();
  const Icon = cap.icon;

  return (
    <div
      ref={ref}
      className="p-12 lg:p-16 bg-background hover:bg-card transition-colors duration-500 group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
        transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, background-color 500ms`,
      }}
    >
      <div className="mb-8 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
        <Icon size={28} strokeWidth={1} />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 block mb-4">
        {String(index + 1).padStart(2, '0')} // Capability
      </span>
      <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
        {cap.title}
      </h3>
      <p className="text-sm opacity-50 leading-relaxed mb-6">{cap.description}</p>
      <div className="flex flex-wrap gap-2">
        {cap.tags.map((t) => (
          <span key={t} className="font-mono text-[9px] px-2 py-1 bg-foreground/5 rounded-sm transition-colors hover:bg-primary hover:text-white">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Pillars() {
  return (
    <section>
      <SectionHeader id="03" title="What I Do" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border">
        {capabilities.map((cap, i) => (
          <CapabilityCard key={i} cap={cap} index={i} />
        ))}
      </div>
    </section>
  );
}
