import { Link } from '@/lib/router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { ProjectCard } from '@/components/ui-custom/ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-accent/5 via-transparent to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
              Selected Work
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of projects spanning AI/ML, data engineering,
              healthcare, and product design.
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="rounded-full gap-2 w-fit">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <ProjectCard project={project} featured />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
