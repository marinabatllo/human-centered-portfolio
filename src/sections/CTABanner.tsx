import { useState } from 'react';
import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { RollingText } from '@/components/ui-custom/RollingText';

const faqs = [
  {
    question: 'What kind of projects do you work on?',
    answer: 'I focus on data-intensive projects at the intersection of ML engineering, human-centered design, and product strategy — from healthcare analytics platforms to enterprise BI transformations.',
  },
  {
    question: 'What is your technical stack?',
    answer: 'Python (TensorFlow, scikit-learn, PyTorch), SQL, React/TypeScript for UIs, Docker for deployment, and cloud services (AWS, Azure, Databricks). I pick tools that fit the problem.',
  },
  {
    question: 'Can you handle both design and development?',
    answer: 'Yes — my MSc in HCI and engineering background means I can go from user research and interface design to building production ML pipelines, all within the same project.',
  },
  {
    question: 'What industries have you worked in?',
    answer: 'Healthcare/biotech (VITALA, biomarker research), FMCG consulting (Bimbo, Danone, Suntory), and tech startups. My approach adapts to domain-specific challenges.',
  },
  {
    question: 'Are you open to full-time or freelance work?',
    answer: 'I\'m open to both full-time positions and freelance/consulting engagements, particularly in health tech, AI products, and data-driven organizations looking to build impactful systems.',
  },
];

export function CTABanner() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader label="FAQ" number="MBR® — 06" subtitle="Answers" />

        {/* FAQ title */}
        <h2 className="text-display text-foreground mb-4">FAQ.</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed mb-12">
          Clarifying deliverables before they begin with real process and honest answers.
        </p>

        {/* Accordion */}
        <div className="mb-20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </div>
                <span
                  className={`text-xl text-muted-foreground transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                    }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-6' : 'max-h-0'
                  }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <SectionHeader label="Final Section" number="MBR® — 07" subtitle="Let's Connect" />

        <div className="text-center py-16">
          <h2 className="text-hero text-foreground mb-8">
            Let's build<br />something.
          </h2>
          <RollingText
            text="Get In Touch"
            href="/contact"
            className="text-sm font-semibold text-foreground tracking-wider border border-border rounded-full px-10 py-4 hover:border-primary transition-colors"
          />
        </div>
      </div>
    </section>
  );
}
