import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { Reveal } from '@/components/ui-custom/Reveal';
import { Lightbulb } from 'lucide-react';

export function AboutTeaser() {
  return (
    <section>
      <SectionHeader id="02" title="How I Work" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left — Bold statement */}
        <div className="lg:col-span-7">
          <Reveal y={50} duration={900}>
            <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-12">
              I connect{' '}
              <span className="italic font-serif text-primary">messy data</span> to{' '}
              <span className="italic font-serif text-secondary">meaningful outcomes</span> —
              using AI, user research, and product thinking.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="space-y-8 text-xl font-light opacity-60 leading-relaxed max-w-2xl">
              <p>
                With a Bioengineering degree and an MSc in Human-Computer Interaction, I work
                at the intersection of data science, AI, and product design. I've built ML models
                that classify pain in preclinical research, automated analysis pipelines that run 4x
                faster, and designed internal tools adopted by entire teams.
              </p>
              <p>
                Currently a Senior Consultant at Axis Corporate (Accenture), I help multinationals
                like Bimbo, Danone, and Suntory modernize their data strategy, governance
                frameworks, and analytics capabilities.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — Academic credentials card */}
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
                  <span className="font-mono text-[10px] opacity-40">Utrecht University</span>
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
    </section>
  );
}
