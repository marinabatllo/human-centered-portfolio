import { Hero } from '@/sections/Hero';
import { Pillars } from '@/sections/Pillars';
import { FeaturedProjects } from '@/sections/FeaturedProjects';
import { Proof } from '@/sections/Proof';
import { AboutTeaser } from '@/sections/AboutTeaser';
import { CTABanner } from '@/sections/CTABanner';

export function Home() {
  return (
    <div className="grain">
      <Hero />
      <Pillars />
      <FeaturedProjects />
      <Proof />
      <AboutTeaser />
      <CTABanner />
    </div>
  );
}
