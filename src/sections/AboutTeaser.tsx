import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { Microscope } from 'lucide-react';

export function AboutTeaser() {
  return (
    <section>
      <SectionHeader id="02" title="The Researcher's Path" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left — Bold statement */}
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

        {/* Right — Academic credentials card */}
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
    </section>
  );
}
