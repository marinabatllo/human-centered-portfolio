import { SectionHeader } from '@/components/ui-custom/SectionHeader';

const education = [
  { period: '2022 – 2023', degree: 'MSc Human-Computer Interaction', school: 'University College London (UCL)' },
  { period: '2017 – 2022', degree: 'BSc Biomedical Engineering', school: 'Universitat de Barcelona' },
];

const skills = {
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
    <div className="pt-24 pb-20 lg:pt-32 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader label="Curriculum Vitae" number="MBR® — CV" subtitle="Qualifications" />

        <h1 className="text-hero text-foreground mb-16">CV.</h1>

        {/* Education */}
        <div className="mb-20">
          <h2 className="section-label mb-8">Education</h2>
          <div className="space-y-0">
            {education.map((edu, i) => (
              <div key={i} className="flex gap-8 py-6 border-b border-border">
                <span className="text-xs text-muted-foreground font-medium w-32 flex-shrink-0 pt-1">
                  {edu.period}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-sm text-primary">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="section-label mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-bold text-foreground mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 border border-border rounded-full text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
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
          <h2 className="section-label mb-8">Certifications</h2>
          <div className="space-y-0">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-4 py-4 border-b border-border">
                <span className="text-xs text-primary font-bold">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
