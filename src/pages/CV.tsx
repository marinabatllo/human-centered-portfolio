import { SectionHeader } from '@/components/ui-custom/SectionHeader';

const education = [
  { period: '2022 – 2023', degree: 'MSc Human-Computer Interaction', school: 'Utrecht University' },
  { period: '2017 – 2022', degree: 'BSc Biomedical Engineering', school: 'UIC Barcelona' },
  { period: '2020 – 2021', degree: 'Art History', school: 'UOC' },
];

const skills: Record<string, string[]> = {
  'Languages & ML': ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'XGBoost', 'SQL', 'R'],
  'Data & Cloud': ['Pandas', 'NumPy', 'Apache Airflow', 'Docker', 'AWS', 'Azure', 'Databricks'],
  'Frontend & Design': ['React', 'TypeScript', 'Figma', 'Tailwind CSS', 'HTML/CSS'],
  'Analytics & BI': ['Power BI', 'Tableau', 'Jupyter', 'Matplotlib', 'Statistical Analysis'],
};

const certifications = [
  'Google Professional Data Engineer',
  'AWS Cloud Practitioner',
  'HCI Research Methods (UCL)',
];

export function CV() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-20 relative z-10 space-y-32">
      <SectionHeader id="CV" title="Curriculum Vitae" />

      {/* Education */}
      <div>
        <div className="flex items-center gap-3 mb-12 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
          <span className="text-secondary">[EDU]</span>
          <span>Academic // Protocol</span>
        </div>
        <div className="space-y-0">
          {education.map((edu, i) => (
            <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-border items-center hover:bg-foreground/[0.01] transition-colors">
              <div className="lg:col-span-1 font-mono text-xs opacity-20">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="lg:col-span-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30">{edu.period}</span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-xl font-light tracking-tight group-hover:pl-2 transition-all duration-500">
                  {edu.degree}
                </h3>
              </div>
              <div className="lg:col-span-3 text-right">
                <span className="text-sm font-serif italic text-primary">{edu.school}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-3 mb-12 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
          <span className="text-secondary">[TECH]</span>
          <span>Technical // Stack</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 block mb-6">{category}</span>
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
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-3 mb-12 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
          <span className="text-secondary">[CERT]</span>
          <span>Verified // Credentials</span>
        </div>
        <div className="space-y-0">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-8 py-6 border-b border-border hover:bg-foreground/[0.01] transition-colors">
              <span className="font-mono text-xs text-primary opacity-60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-lg font-light tracking-tight">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
