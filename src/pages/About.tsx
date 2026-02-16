import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { Reveal } from '@/components/ui-custom/Reveal';
import { Lightbulb } from 'lucide-react';
import { Link } from '@/lib/router';

const experience = [
  {
    period: '2024 – Present',
    role: 'Senior Consultant',
    company: 'Axis Corporate (Accenture)',
    description: 'Delivering data strategy, BI transformation, and governance frameworks for multinational clients including Bimbo, Danone, and Suntory. Improved reporting efficiency by 60% and enabled self-service analytics for 200+ business users.',
  },
  {
    period: '2023 – 2024',
    role: 'Data Manager & UX Designer',
    company: 'VITALA – Biomedical Research',
    description: 'Led data management, governance, and internal tool design. Built automated ETL pipelines (reducing data retrieval time by 60%), launched an internal analysis software product adopted by 85% of the team, and increased experimental throughput by 8x.',
  },
  {
    period: '2022 – 2023',
    role: 'AI Developer & Researcher',
    company: 'Universitat de Barcelona',
    description: 'Developed ML models for biomarker detection (87% accuracy) and pain classification in preclinical research (92% accuracy). Built end-to-end data pipelines for brain imaging datasets. Contributed to peer-reviewed publications.',
  },
  {
    period: '2022 – 2023',
    role: 'Computational Researcher',
    company: 'Electronic Nose Project',
    description: 'Designed computational models for an electronic nose prototype. Developed predictive models for wine differentiation with 95%+ accuracy and explored health monitoring applications.',
  },
];

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-20 relative z-10 space-y-48">
      <SectionHeader id="02" title="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-7">
          <Reveal y={50} duration={900}>
            <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-12">
              I translate complex data into{' '}
              <span className="italic font-serif text-primary">real-world applications</span> —
              using AI, user-centric design, and{' '}
              <span className="italic font-serif text-secondary">product thinking</span>.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="space-y-8 text-xl font-light opacity-60 leading-relaxed max-w-2xl">
              <p>
                My background combines a BSc in Biomedical Engineering (UIC Barcelona) with an
                MSc in Human-Computer Interaction (Utrecht University). This dual lens lets me
                approach problems with both scientific rigor and a deep understanding of how
                people interact with technology.
              </p>
              <p>
                I've built ML models for healthcare research, designed internal tools that entire
                teams adopted, automated pipelines that run 4x faster, and helped Fortune 500
                companies modernize their data capabilities. I believe the best work happens at
                the intersection of data science, design, and strategy.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={300} className="lg:col-span-5">
          <div className="p-12 border border-border rounded-sm aspect-square flex flex-col justify-between hover:border-primary/30 transition-colors duration-700">
            <Lightbulb size={48} strokeWidth={1} className="text-primary" />
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-6 italic">
                Education
              </h5>
              <ul className="space-y-6">
                <li className="flex justify-between items-end border-b border-border pb-2 hover:border-primary/30 transition-colors">
                  <span className="text-sm font-bold">MSc Human-Computer Interaction</span>
                  <span className="font-mono text-[10px] opacity-40">Utrecht</span>
                </li>
                <li className="flex justify-between items-end border-b border-border pb-2 hover:border-primary/30 transition-colors">
                  <span className="text-sm font-bold">BSc Biomedical Engineering</span>
                  <span className="font-mono text-[10px] opacity-40">UIC Barcelona</span>
                </li>
                <li className="flex justify-between items-end border-b border-border pb-2 hover:border-primary/30 transition-colors">
                  <span className="text-sm font-bold">Art History</span>
                  <span className="font-mono text-[10px] opacity-40">UOC</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Experience timeline */}
      <div>
        <div className="mb-20 pt-10 border-t border-border">
          <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
            <span className="text-secondary">[EXP]</span>
            <span>Career // Timeline</span>
          </div>
          <h2 className="text-display font-light tracking-tighter italic font-serif">
            Experience<span className="text-primary not-italic">.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border items-start hover:bg-foreground/[0.01] transition-colors">
                <div className="lg:col-span-1 font-mono text-xs opacity-20">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="lg:col-span-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30">{exp.period}</span>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-light tracking-tight mb-2 group-hover:pl-2 transition-all duration-500">
                    {exp.role}
                  </h3>
                  <p className="text-sm opacity-50 font-light leading-relaxed">{exp.description}</p>
                </div>
                <div className="lg:col-span-3 text-right">
                  <span className="text-sm font-serif italic text-primary">{exp.company}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-10 border-t border-border">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-4 px-10 py-5 rounded-sm border border-foreground overflow-hidden transition-all hover:bg-foreground hover:text-background"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">View All Projects</span>
        </Link>
      </div>
    </div>
  );
}
