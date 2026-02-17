import { Link, useRouter } from '@/lib/router';
import { ArrowLeft, Calendar, ExternalLink, Github, Tag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { getProjectBySlug, getImpactBadgeColor, getTechnicalBadgeColor } from '@/lib/projects';

export function ProjectDetail() {
  const { currentPath, navigate } = useRouter();

  // Extract slug from path /projects/:slug
  const pathParts = currentPath.split('/').filter(Boolean);
  const slug = pathParts.length >= 2 ? pathParts[1] : '';

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    // Redirect to projects page
    navigate('/projects');
    return null;
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="w-full mx-auto px-[5vw]">
        {/* Back button */}
        <AnimatedSection className="mb-8">
          <Link to="/projects">
            <Button variant="ghost" className="gap-2 -ml-4 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Button>
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={100} className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary" className={getImpactBadgeColor(project.impactLevel)}>
              {project.impactLevel} impact
            </Badge>
            <Badge variant="secondary" className={getTechnicalBadgeColor(project.technicalLevel)}>
              {project.technicalLevel} technical
            </Badge>
          </div>

          <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{project.role}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Summary */}
        <AnimatedSection delay={150} className="mb-10">
          <div className="bg-card rounded-2xl border border-border/50 p-6 lg:p-8">
            <p className="text-lg text-foreground leading-relaxed">
              {project.summary}
            </p>
          </div>
        </AnimatedSection>

        {/* Problem / Approach / Impact */}
        <AnimatedSection delay={200} className="mb-10">
          <div className="grid grid-cols-1 gap-6">
            {/* Problem */}
            <div className="bg-muted/50 rounded-2xl p-6 lg:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Approach */}
            <div className="bg-muted/50 rounded-2xl p-6 lg:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                My Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Impact */}
            <div className="bg-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/20">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                The Impact
              </h2>
              <p className="text-foreground leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Tools & Tags */}
        <AnimatedSection delay={250} className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tools */}
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-muted text-sm text-muted-foreground font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Links */}
        {(project.links.github || project.links.demo) && (
          <AnimatedSection delay={300} className="mb-10">
            <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Links
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </AnimatedSection>
        )}

        {/* Navigation */}
        <AnimatedSection delay={350} className="pt-10 border-t border-border/50">
          <div className="flex items-center justify-between">
            <Link to="/projects">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                All projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="gap-2">
                Discuss this project
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
