import { Hero } from '@/sections/Hero';
import { TechCarousel } from '@/components/ui-custom/TechCarousel';
import { Proof } from '@/sections/Proof';
import { FeaturedProjects } from '@/sections/FeaturedProjects';
import { Pillars } from '@/sections/Pillars';
import { AboutTeaser } from '@/sections/AboutTeaser';
import { CTABanner } from '@/sections/CTABanner';

export function Home() {
  return (
    <div className="relative">
      {/* Dot grid background */}
      <div className="dot-grid" />

      {/* Precision vertical lines */}
      <div className="precision-line-left hidden xl:block" />
      <div className="precision-line-right hidden xl:block" />

      {/* Content with generous clinical spacing */}
      <Hero />

      {/* Content with generous clinical spacing */}
      <div className="mx-auto px-[5vw] relative z-10 space-y-28 pb-28">
        <TechCarousel />
        <Proof />
        <FeaturedProjects />
        <Pillars />
        <AboutTeaser />
        <CTABanner />
      </div>
    </div>
  );
}
