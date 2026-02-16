import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { Microscope } from 'lucide-react';
import { Link } from '@/lib/router';

const experience = [
  {
    period: '2024 – Present',
    role: 'Senior Consultant',
    company: 'Axis Corporate (Accenture)',
    description: 'Delivering data-driven strategy and BI transformation for clients including Bimbo, Danone, and Suntory.',
  },
  {
    period: '2023 – 2024',
    role: 'Data Manager & UX Designer',
    company: 'VITALA – Biomedical Research',
    description: 'Led data management, ML model development, and internal software design for healthcare research.',
  },
  {
    period: '2022 – 2023',
    role: 'AI Developer & Researcher',
    company: 'Universitat de Barcelona',
    description: 'Developed ML models for biomarker detection and pain classification in preclinical research.',
  },
];

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-20 relative z-10 space-y-48">
      <SectionHeader id="02" title="The Researcher's Path" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-7">
          <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-12">
            Bridging the gap between{' '}
            <span className="italic font-serif text-primary">scientific discovery</span> and{' '}
            <span className="italic font-serif text-secondary">market application</span>.
          </p>
          <div className="space-y-8 text-xl font-light opacity-60 leading-relaxed max-w-2xl">
            <p>
              My background in Bioengineering and MSc in HCI allows me to view technical
              problems through two lenses: the empirical rigor of the lab and the user-centric
              requirements of a digital product.
            </p>
            <p>
              I focus on &quot;Standardization&quot; as a service — creating the ETL pipelines
              and governance frameworks that turn messy experimental data into clean, strategic
              fuel for multinationals.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="p-12 border border-border rounded-sm aspect-square flex flex-col justify-between">
            <Microscope size={48} strokeWidth={1} className="text-primary" />
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-6 italic">
                Academic Credentials
              </h5>
              <ul className="space-y-6">
                <li className="flex justify-between items-end border-b border-border pb-2">
                  <span className="text-sm font-bold">MSc HCI (Honours)</span>
                  <span className="font-mono text-[10px] opacity-40">Utrecht</span>
                </li>
                <li className="flex justify-between items-end border-b border-border pb-2">
                  <span className="text-sm font-bold">Bioengineering</span>
                  <span className="font-mono text-[10px] opacity-40">UIC Barcelona</span>
                </li>
                <li className="flex justify-between items-end border-b border-border pb-2">
                  <span className="text-sm font-bold">Art History</span>
                  <span className="font-mono text-[10px] opacity-40">UOC</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border items-start hover:bg-foreground/[0.01] transition-colors">
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
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-10 border-t border-border">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-4 px-10 py-5 rounded-sm border border-foreground overflow-hidden transition-all hover:bg-foreground hover:text-background"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">View All Trials</span>
        </Link>
      </div>
    </div>
  );
}
