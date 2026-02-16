import { Link } from '@/lib/router';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types/project';
import { getImpactBadgeColor } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block bg-card rounded-2xl border border-border/50 border-l-4 border-l-primary overflow-hidden hover:bg-primary/5 hover-lift transition-all"
      >
        <div className="p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
            <Badge variant="secondary" className={getImpactBadgeColor(project.impactLevel)}>
              {project.impactLevel} impact
            </Badge>
          </div>

          <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6 line-clamp-3">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block bg-card rounded-xl border border-border/50 p-5 hover:bg-accent/5 hover-lift transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span>{project.year}</span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs font-normal border-accent/30 text-accent-foreground">
            {tag}
          </Badge>
        ))}
        {project.tags.length > 3 && (
          <Badge variant="outline" className="text-xs font-normal border-accent/30 text-accent-foreground">
            +{project.tags.length - 3}
          </Badge>
        )}
      </div>
    </Link>
  );
}
