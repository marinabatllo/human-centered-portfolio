import { useState } from 'react';
import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { Link } from '@/lib/router';
import { Plus } from 'lucide-react';

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
    answer: 'I\'m open to both full-time positions and freelance/consulting engagements, particularly in health tech, AI products, and data-driven organizations.',
  },
];

export function CTABanner() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <SectionHeader id="04" title="Frequently Asked" />

      <div className="max-w-4xl mb-32">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-border">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-8 text-left group"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs opacity-20">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xl md:text-2xl font-light tracking-tight group-hover:pl-2 transition-all duration-500">
                  {faq.question}
                </span>
              </div>
              <Plus
                size={20}
                strokeWidth={1}
                className={`flex-shrink-0 opacity-40 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                  }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-40 pb-8' : 'max-h-0'
                }`}
            >
              <p className="text-sm opacity-50 leading-relaxed pl-14 max-w-xl font-light">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing CTA */}
      <div className="py-20 border-t border-border">
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30 italic block mb-8">
          Final Protocol // Initiate Contact
        </span>
        <Link
          to="/contact"
          className="block text-5xl md:text-[8rem] font-light tracking-tighter leading-[0.8] hover:pl-6 transition-all duration-700"
        >
          Let&apos;s build<span className="text-primary">.</span>
        </Link>
      </div>
    </section>
  );
}
