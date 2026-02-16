import { SectionHeader } from '@/components/ui-custom/SectionHeader';

const capabilities = [
  {
    number: '01',
    title: 'Machine Learning & AI',
    description: 'From biomarker detection to pain classification, I design and deploy ML models that solve real problems — with rigorous validation and interpretable results.',
  },
  {
    number: '02',
    title: 'HCI & UX Research',
    description: 'I ground every interface in user research, ensuring that complex analytical tools feel intuitive — reducing training time and boosting adoption across teams.',
  },
  {
    number: '03',
    title: 'Data Engineering',
    description: 'I build automated pipelines and governance frameworks that turn messy, fragmented data into reliable, reproducible assets ready for analysis at scale.',
  },
  {
    number: '04',
    title: 'Product Strategy',
    description: 'From consulting Fortune 500 companies to redesigning internal tools, I translate business needs into technical roadmaps that deliver measurable impact.',
  },
];

const keywords = ['Precise', 'Structured', 'Focused', 'Analytical'];

export function Pillars() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader label="Capabilities" number="MBR® — 04" subtitle="Core Skills" />

        {/* Keywords row */}
        <div className="flex items-center gap-6 mb-16">
          {keywords.map((word, i) => (
            <span
              key={word}
              className={`text-sm font-medium ${i === 0 ? 'text-foreground' : 'text-muted-foreground'
                }`}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Numbered services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {capabilities.map((cap) => (
            <div key={cap.number} className="group">
              <div className="flex items-start gap-4">
                <span className="text-xs text-primary font-bold mt-1">{cap.number}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
