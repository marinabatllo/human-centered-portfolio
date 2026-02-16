import { MapPin, GraduationCap, Briefcase, Heart, Target, Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';



const workProcess = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the problem space, user needs, and business constraints through research and stakeholder interviews.',
  },
  {
    step: '02',
    title: 'Model',
    description: 'Design solutions, prototype approaches, and define success metrics before writing production code.',
  },
  {
    step: '03',
    title: 'Validate',
    description: 'Test assumptions with real users, iterate based on feedback, and ensure technical feasibility.',
  },
  {
    step: '04',
    title: 'Ship',
    description: 'Build with quality, deploy with confidence, and measure impact against defined success criteria.',
  },
];

export function About() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            About Me
          </span>
          <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-6">
            The Story Behind the Work
          </h1>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection delay={100} className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm Marina Batlló Rius, an applied AI engineer with a background in bioengineering
              and a Master's in Human-Computer Interaction. My journey has taken me from biomedical
              research labs to consulting for Fortune 500 companies—and along the way, I've learned
              that the best technology is both powerful and human-centered.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My work sits at the intersection of three domains: rigorous data science, thoughtful
              product design, and real business impact. Whether I'm building ML pipelines for
              healthcare research or designing analytics tools for enterprise clients, I bring the
              same approach: understand the problem deeply, design with users in mind, and measure
              success by outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What drives me is the potential for technology to solve meaningful problems—from
              accelerating drug discovery to making complex data accessible to the people who need it.
              I believe that the best solutions come from teams that combine technical excellence
              with empathy for the humans who will use what we build.
            </p>
          </div>
        </AnimatedSection>

        {/* Quick info */}
        <AnimatedSection delay={150} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">Location</div>
                <div className="text-sm text-muted-foreground">Barcelona, Spain</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">Education</div>
                <div className="text-sm text-muted-foreground">MSc HCI, Utrecht University</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">Experience</div>
                <div className="text-sm text-muted-foreground">4+ Years in Data & AI</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why these domains connect */}
        <AnimatedSection delay={200} className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            Why These Domains Connect
          </h2>
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Bioengineering</strong> taught me to approach
              complex biological systems with scientific rigor—to form hypotheses, design experiments,
              and validate results with statistical confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Human-Computer Interaction</strong> taught me
              that technology is only successful if humans can use it effectively. User research,
              usability testing, and iterative design are as important as technical implementation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Consulting</strong> taught me that impact requires
              understanding business context—stakeholder management, ROI communication, and delivering
              solutions that actually get adopted and drive value.
            </p>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection delay={250} className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            How I Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Heart, title: 'Human-First', desc: 'Technology should serve people, not the other way around.', bg: 'bg-primary/10', text: 'text-primary' },
              { icon: Target, title: 'Impact-Driven', desc: 'Every line of code should create measurable positive outcomes.', bg: 'bg-secondary/10', text: 'text-secondary' },
              { icon: Sparkles, title: 'Craft & Quality', desc: 'I take pride in clean code, thoughtful design, and attention to detail in everything I build.', bg: 'bg-accent/15', text: 'text-accent-foreground' },
            ].map((value) => (
              <div key={value.title} className="p-6 bg-card rounded-2xl border border-border/50 hover-lift">
                <div className={`w-10 h-10 rounded-lg ${value.bg} flex items-center justify-center mb-4`}>
                  <value.icon className={`h-5 w-5 ${value.text}`} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection delay={300} className="mb-16">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            My Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workProcess.map((step, index) => (
              <div
                key={step.step}
                className="relative p-6 bg-card rounded-2xl border border-border/50"
              >
                <div className="font-mono text-3xl font-bold text-primary/30 mb-4">
                  {step.step}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Closing */}
        <AnimatedSection delay={350} className="text-center py-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            I'm always interested in connecting with people who share a passion for
            building technology that makes a real difference.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Let's start a conversation
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}
