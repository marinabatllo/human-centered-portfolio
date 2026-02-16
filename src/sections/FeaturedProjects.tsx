import { Link } from '@/lib/router';
import { RollingText } from '@/components/ui-custom/RollingText';
import projectsData from '@/content/projects.json';

const featured = projectsData.projects.filter((p) => p.featured).slice(0, 5);

export function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Marquee header like Palmer */}
        <div className="overflow-hidden border-b border-border pb-8 mb-12">
          <div className="flex gap-8 whitespace-nowrap">
            <h2 className="text-display text-foreground">Featured Works©</h2>
            <span className="text-display text-muted-foreground/20">•</span>
            <h2 className="text-display text-foreground">Featured Works©</h2>
            <span className="text-display text-muted-foreground/20">•</span>
            <h2 className="text-display text-foreground">Featured Works©</h2>
          </div>
        </div>

        {/* Description + CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Every project is a chance to blend data science and design, shaping bold analytical
            ideas into impactful systems — built with intent, precision, and human-centered clarity.
          </p>
          <RollingText
            text="See All Projects"
            href="/projects"
            className="text-sm font-semibold text-foreground tracking-wider border border-border rounded-full px-8 py-3 hover:border-primary transition-colors flex-shrink-0"
          />
        </div>

        {/* Project cards — stacked vertically like Palmer */}
        <div className="space-y-2">
          {featured.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="flex items-center gap-6 py-6 border-b border-border hover:border-primary/50 transition-colors">
                {/* Number */}
                <span className="text-xs text-muted-foreground font-medium w-8">
                  ({String(index + 1).padStart(2, '0')})
                </span>

                {/* Title — grows on hover */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                  {project.title}
                </h3>

                {/* Category tag */}
                <span className="hidden md:block text-xs text-muted-foreground uppercase tracking-wider">
                  {project.tags[0]}
                </span>

                {/* Arrow or indicator */}
                <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all text-lg">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
