import { Download, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';

const experience = [
  {
    period: 'Feb 2023 - Feb 2025',
    role: 'Data Manager & UX Designer',
    company: 'VITALA',
    description: 'Led the design and implementation of the Data Management Plan including governance, cybersecurity, and ETL workflows. Automated NMR/MRI analysis pipelines, improving speed by 4x. Built internal data analysis software with 85% team adoption.',
    highlights: ['Data Governance', 'ETL Pipelines', 'UX Design', 'ML Development'],
  },
  {
    period: 'Nov 2023 - Jun 2023',
    role: 'AI Developer & Researcher',
    company: 'Nerf, IMEC',
    description: 'Built end-to-end data pipelines for brain imaging datasets. Developed pain classification model in rodents with 90%+ accuracy. Conducted model validation and performance optimization.',
    highlights: ['Deep Learning', 'Medical Imaging', 'Data Pipelines', 'Research'],
  },
  {
    period: 'Jan 2021 - Feb 2023',
    role: 'Computational Researcher',
    company: 'UIC Barcelona',
    description: 'Designed computational models for electronic nose prototype. Developed predictive models for wine differentiation with 95%+ accuracy. Analyzed large experimental datasets and created visualization dashboards.',
    highlights: ['Machine Learning', 'Signal Processing', 'Data Analysis', 'Python'],
  },
];

const education = [
  {
    period: 'Sep 2021 - Jun 2023',
    degree: 'MSc in Human-Computer Interaction',
    school: 'Utrecht University',
    details: 'Graduated with honours. Scholarship for academic success, top 3 of the class. Focus on recommender systems and advanced psychology.',
  },
  {
    period: 'Sep 2017 - Jun 2021',
    degree: 'BSc in Bioengineering',
    school: 'International University of Catalonia',
    details: 'Graduated with honours in Programming, Ethics, 3D Printing, Bioprinting, Business and Society, and Biomaterials.',
  },
];

const skills = {
  'Data & Analytics': ['SQL', 'Python', 'Pandas', 'NumPy', 'Data Visualization', 'A/B Testing', 'Statistical Analysis'],
  'AI & Machine Learning': ['scikit-learn', 'TensorFlow', 'Keras', 'XGBoost', 'LLMs', 'RAG', 'MLOps'],
  'Engineering': ['ETL Pipelines', 'Docker', 'Git', 'AWS', 'Apache Airflow', 'FastAPI', 'PostgreSQL'],
  'Product & Design': ['UX Research', 'Figma', 'React', 'TypeScript', 'Product Strategy', 'Agile'],
  'Domain Expertise': ['Healthcare', 'Biomedical Data', 'Medical Imaging', 'Consulting', 'Data Governance'],
};

const cvVersions = [
  {
    title: 'Data & AI Focus',
    description: 'Emphasizes ML, data engineering, and technical depth',
    filename: 'CV_AI.pdf',
  },
  {
    title: 'Business & Product Focus',
    description: 'Highlights consulting, strategy, and product experience',
    filename: 'CV_ProjectManager.pdf',
  },
  {
    title: 'Pharma & Health Focus',
    description: 'Showcases biomedical research and healthcare impact',
    filename: 'CV_Pharma.pdf',
  },
  {
    title: 'Consulting Focus',
    description: 'Positions for strategy and digital transformation roles',
    filename: 'CV_SeniorConsultant.pdf',
  },
];

export function CV() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Curriculum Vitae
          </span>
          <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-4">
            Experience & Skills
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            A summary of my professional journey, education, and capabilities.
            Download tailored CV versions for different opportunities.
          </p>
        </AnimatedSection>

        {/* Download CVs */}
        <AnimatedSection delay={100} className="mb-16">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            Download CV
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cvVersions.map((cv) => (
              <div
                key={cv.filename}
                className="flex items-center justify-between p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{cv.title}</div>
                    <div className="text-xs text-muted-foreground">{cv.description}</div>
                  </div>
                </div>
                <a
                  href={`/cv/${cv.filename}`}
                  download
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  title={`Download ${cv.title}`}
                >
                  <Download className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={150} className="mb-16">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                <div className="mb-1 text-sm text-muted-foreground font-mono">
                  {job.period}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {job.role}
                </h3>
                <div className="text-primary text-sm mb-3">
                  {job.company}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={200} className="mb-16">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-border"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-secondary" />
                <div className="mb-1 text-sm text-muted-foreground font-mono">
                  {edu.period}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <div className="text-secondary text-sm mb-2">
                  {edu.school}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={250} className="mb-16">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="p-5 bg-card rounded-xl border border-border/50">
                <h3 className="font-display font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-muted text-xs text-muted-foreground font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Certifications & Additional */}
        <AnimatedSection delay={300}>
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            Additional Information
          </h2>
          <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 rounded-2xl p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Languages
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>English (Professional)</li>
                  <li>Spanish (Native)</li>
                  <li>Catalan (Native)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Publications
                </h3>
                <p className="text-sm text-muted-foreground">
                  Contributed to 5+ peer-reviewed publications in biomedical imaging,
                  machine learning, and computational research.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
