import { useState } from 'react';
import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { Reveal } from '@/components/ui-custom/Reveal';
import { Lightbulb, Download, X, Briefcase, GraduationCap, Award } from 'lucide-react';

/* ─── Timeline data ─── */
type TimelineCategory = 'work' | 'education' | 'other';

interface TimelineEntry {
  year: string;
  title: string;
  org: string;
  description: string;
  category: TimelineCategory;
}

const timeline: TimelineEntry[] = [
  {
    year: '2024 – Present',
    title: 'Senior Consultant',
    org: 'Axis Corporate (Accenture)',
    description: 'Data strategy, BI transformation, and governance for multinational clients (Bimbo, Danone, Suntory). Improved reporting efficiency by 60%.',
    category: 'work',
  },
  {
    year: '2023 – 2024',
    title: 'Data Manager & UX Designer',
    org: 'VITALA – Biomedical Research',
    description: 'Led data governance, built ETL pipelines (60% faster retrieval), launched internal analysis software (85% adoption), increased throughput 8x.',
    category: 'work',
  },
  {
    year: '2022 – 2023',
    title: 'MSc Human-Computer Interaction',
    org: 'Utrecht University',
    description: 'Graduated with Honours. Thesis on user-centered design for data-intensive applications.',
    category: 'education',
  },
  {
    year: '2022 – 2023',
    title: 'AI Developer & Researcher',
    org: 'Universitat de Barcelona',
    description: 'ML models for biomarker detection (87% accuracy) and pain classification (92% accuracy). Contributed to peer-reviewed publications.',
    category: 'work',
  },
  {
    year: '2022 – 2023',
    title: 'Computational Researcher',
    org: 'Electronic Nose Project',
    description: 'Predictive models for wine differentiation (95%+ accuracy) and health monitoring applications.',
    category: 'work',
  },
  {
    year: '2020 – 2021',
    title: 'Art History',
    org: 'UOC',
    description: 'Complementary studies in art history, design theory, and visual culture.',
    category: 'education',
  },
  {
    year: '2017 – 2022',
    title: 'BSc Biomedical Engineering',
    org: 'UIC Barcelona',
    description: 'Biomedical engineering degree with focus on signal processing, data analysis, and computational biology.',
    category: 'education',
  },
  {
    year: '2023',
    title: 'Google Professional Data Engineer',
    org: 'Google Cloud',
    description: 'Professional certification in data engineering on Google Cloud Platform.',
    category: 'other',
  },
  {
    year: '2023',
    title: 'AWS Cloud Practitioner',
    org: 'Amazon Web Services',
    description: 'Foundational certification in cloud concepts, security, and AWS services.',
    category: 'other',
  },
  {
    year: '2022',
    title: 'HCI Research Methods',
    org: 'UCL (London)',
    description: 'Advanced course in human-computer interaction research methodology.',
    category: 'other',
  },
];

const CATEGORY_CONFIG: Record<TimelineCategory, { color: string; label: string; Icon: typeof Briefcase }> = {
  work: { color: '#B58CC8', label: 'Work Experience', Icon: Briefcase },
  education: { color: '#FF857E', label: 'Education', Icon: GraduationCap },
  other: { color: '#F0C965', label: 'Certifications & Courses', Icon: Award },
};

/* ─── Skills ─── */
const skills: Record<string, string[]> = {
  'Languages & ML': ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'XGBoost', 'SQL', 'R'],
  'Data & Cloud': ['Pandas', 'NumPy', 'Apache Airflow', 'Docker', 'AWS', 'Azure', 'Databricks'],
  'Frontend & Design': ['React', 'TypeScript', 'Figma', 'Tailwind CSS', 'HTML/CSS'],
  'Analytics & BI': ['Power BI', 'Tableau', 'Jupyter', 'Matplotlib', 'Statistical Analysis'],
};

/* ─── CV Download Modal ─── */
const cvOptions = [
  { label: 'AI & Machine Learning', desc: 'Deep learning, NLP, computer vision, MLOps', file: '/cv/CV_AI.pdf', emoji: '🤖' },
  { label: 'Project Management', desc: 'Agile, stakeholder management, roadmapping', file: '/cv/CV_ProjectManager.pdf', emoji: '📊' },
  { label: 'Senior Consultant', desc: 'Data strategy, BI, enterprise transformation', file: '/cv/CV_SeniorConsultant.pdf', emoji: '💼' },
  { label: 'Pharma & Biotech', desc: 'Healthcare data, clinical research, biomarkers', file: '/cv/Copia de CV_Pharma.pdf', emoji: '🧬' },
];

function CVModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-background border border-border rounded-sm max-w-lg w-full p-8 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'modalIn 300ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 opacity-40 hover:opacity-100 transition-opacity"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <h3 className="text-2xl font-light tracking-tight mb-2">Download My CV</h3>
        <p className="text-sm opacity-50 font-light mb-8">
          Pick the version tailored to your industry. Each highlights the most relevant experience and skills.
        </p>

        <div className="space-y-3">
          {cvOptions.map((cv) => (
            <a
              key={cv.label}
              href={cv.file}
              download
              className="group flex items-center gap-4 p-5 border border-border rounded-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <span className="text-2xl">{cv.emoji}</span>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium tracking-tight block">{cv.label}</span>
                <span className="text-xs opacity-40 font-light">{cv.desc}</span>
              </div>
              <Download size={16} strokeWidth={1.5} className="opacity-30 group-hover:opacity-100 text-primary transition-opacity flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Timeline Item ─── */
function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const config = CATEGORY_CONFIG[entry.category];
  const Icon = config.Icon;

  return (
    <Reveal delay={index * 60}>
      <div className="group grid grid-cols-[auto_1fr] gap-6 pb-10 last:pb-0">
        {/* Vertical line + dot */}
        <div className="flex flex-col items-center">
          <div
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
            style={{ borderColor: config.color }}
          >
            <Icon size={16} strokeWidth={1.5} style={{ color: config.color }} />
          </div>
          <div className="w-px flex-1 mt-2 bg-border" />
        </div>

        {/* Content */}
        <div className="pb-8">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30">{entry.year}</span>
            <span
              className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ color: config.color, backgroundColor: `${config.color}15` }}
            >
              {config.label}
            </span>
          </div>
          <h3 className="text-xl font-light tracking-tight mb-1 group-hover:pl-1 transition-all duration-500">
            {entry.title}
          </h3>
          <p className="text-sm font-serif italic text-primary mb-2">{entry.org}</p>
          <p className="text-sm opacity-50 font-light leading-relaxed max-w-xl">{entry.description}</p>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main About Page ─── */
export function About() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="w-full mx-auto px-[5vw] pt-32 pb-20 relative z-10 space-y-24">
      <SectionHeader id="02" title="About Me" />

      {/* Download CV button */}
      <Reveal>
        <button
          onClick={() => setIsCVOpen(true)}
          className="group inline-flex items-center gap-4 px-8 py-4 rounded-sm border border-foreground overflow-hidden transition-all hover:bg-foreground hover:text-background"
        >
          <Download size={18} strokeWidth={1.5} />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">Download CV</span>
        </button>
      </Reveal>

      {/* Description */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <Reveal y={50} duration={900}>
            <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-10">
              I translate complex data into{' '}
              <span className="italic font-serif text-primary">real-world applications</span> —
              using AI, user-centric design, and{' '}
              <span className="italic font-serif text-secondary">product thinking</span>.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="space-y-6 text-lg font-light opacity-60 leading-relaxed max-w-2xl">
              <p>
                My background combines a BSc in Biomedical Engineering (UIC Barcelona) with an
                MSc in Human-Computer Interaction (Utrecht University). This dual lens lets me
                approach problems with both scientific rigor and a deep understanding of how
                people interact with technology.
              </p>
              <p>
                I've built ML models for healthcare research, designed internal tools that entire
                teams adopted, automated pipelines that run 4x faster, and helped Fortune 500
                companies modernize their data capabilities.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={300} className="lg:col-span-5">
          <div className="p-10 border border-border rounded-sm flex flex-col justify-between hover:border-primary/30 transition-colors duration-700">
            <Lightbulb size={40} strokeWidth={1} className="text-primary mb-8" />
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-4 italic">
                Education
              </h5>
              <ul className="space-y-4">
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

      {/* Timeline legend */}
      <div className="flex flex-wrap gap-6 border-t border-border pt-8">
        {Object.entries(CATEGORY_CONFIG).map(([key, config]) => (
          <div key={key} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: config.color }} />
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">{config.label}</span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div>
        {timeline.map((entry, i) => (
          <TimelineItem key={i} entry={entry} index={i} />
        ))}
      </div>

      {/* Technical Skills */}
      <div>
        <div className="flex items-center gap-3 mb-10 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
          <span className="text-secondary">[TECH]</span>
          <span>Technical // Stack</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <Reveal key={category} delay={catIndex * 100}>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 block mb-4">{category}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[9px] px-3 py-1.5 bg-foreground/5 rounded-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CV Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
