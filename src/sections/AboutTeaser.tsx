import { RollingText } from '@/components/ui-custom/RollingText';
import { SectionHeader } from '@/components/ui-custom/SectionHeader';

export function AboutTeaser() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader label="Profile" number="MBR® — 02" subtitle="Interdisciplinary" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Bold statement */}
          <div>
            <h2 className="text-title text-foreground mb-8">
              Bold Vision.
            </h2>
            {/* Initials display */}
            <div className="text-[8rem] lg:text-[12rem] font-extrabold leading-none text-foreground/5 select-none mb-4">
              MB
            </div>
          </div>

          {/* Right — Bio and stats */}
          <div className="flex flex-col justify-end">
            <h3 className="text-display text-foreground mb-6">
              4+ years™ of building ML systems, sharpening interactions, and bridging data science with real human needs.
            </h3>

            <div className="flex items-center gap-6 mb-10">
              <RollingText
                text="Contact"
                href="/contact"
                className="text-sm font-semibold text-foreground tracking-wider border border-border rounded-full px-8 py-3 hover:border-primary transition-colors"
              />
              <RollingText
                text="See Projects"
                href="/projects"
                className="text-sm font-semibold text-muted-foreground tracking-wider hover:text-foreground transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section annotation for next */}
        <div className="mt-20 grid grid-cols-3 items-center border-y border-border py-3">
          <span className="section-label text-left">© Featured Projects</span>
          <span className="section-label text-center">(MBR® — 03)</span>
          <span className="section-label text-right">Creative Development</span>
        </div>
      </div>
    </section>
  );
}
