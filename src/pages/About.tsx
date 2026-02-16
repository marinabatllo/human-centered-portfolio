import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { RollingText } from '@/components/ui-custom/RollingText';

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
    <div className="pt-24 pb-20 lg:pt-32 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader label="Personal Profile" number="MBR® — About" subtitle="Background" />

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left — title + image placeholder */}
          <div>
            <h1 className="text-hero text-foreground mb-8">About.</h1>
            <div className="aspect-[4/5] bg-card border border-border rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-display text-4xl text-primary">MB</span>
                </div>
                <p className="text-sm text-muted-foreground">Marina Batlló Rius</p>
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div className="flex flex-col justify-end">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Blending data science and human-centered design with functional clarity and
              creative precision. Delivering thoughtful analytical systems with structure,
              flow, and real-world impact.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My background in bioengineering taught me to approach complex systems with rigor.
              My MSc in Human-Computer Interaction taught me that technology only matters if
              people can use it. And my work in consulting taught me that impact requires
              understanding business context.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              This unique combination — technical depth, design thinking, and business acumen —
              is what I bring to every project. Whether accelerating drug discovery pipelines
              or building AI products, I focus on outcomes that matter.
            </p>

            <div className="flex items-center gap-6">
              <RollingText
                text="See Projects"
                href="/projects"
                className="text-sm font-semibold text-foreground tracking-wider border border-border rounded-full px-8 py-3 hover:border-primary transition-colors"
              />
              <RollingText
                text="Download CV"
                href="/cv"
                className="text-sm font-semibold text-muted-foreground tracking-wider hover:text-foreground transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Experience timeline */}
        <SectionHeader label="Experience" number="MBR® — Career" subtitle="Professional Path" />

        <div className="space-y-0">
          {experience.map((exp, index) => (
            <div key={index} className="flex gap-8 py-8 border-b border-border group">
              <span className="text-xs text-muted-foreground font-medium w-32 flex-shrink-0 pt-1">
                {exp.period}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-primary mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
