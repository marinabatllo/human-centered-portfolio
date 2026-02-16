import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { Link } from '@/lib/router';
import { Reveal } from '@/components/ui-custom/Reveal';
import { useInView } from '@/hooks/useAnimations';
import projectsData from '@/content/projects.json';

const ACCENT_COLORS = ['#B58CC8', '#FF857E', '#F0C965', '#B58CC8', '#FF857E'];
const featured = projectsData.projects.filter((p) => p.featured).slice(0, 5);

function ProjectRow({ project, index }: { project: typeof featured[0]; index: number }) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
        transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${index * 120}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${index * 120}ms`,
      }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-b border-border items-center hover:bg-foreground/[0.01] transition-colors"
      >
        <div className="lg:col-span-1 font-mono text-xs opacity-20">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="lg:col-span-6">
          <h4 className="text-3xl md:text-5xl font-light tracking-tight mb-4 group-hover:pl-4 transition-all duration-500">
            {project.title}
          </h4>
          <p className="text-lg opacity-50 max-w-xl font-light leading-relaxed">
            {project.summary}
          </p>
        </div>
        <div className="lg:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] block mb-2 opacity-30">
            Role
          </span>
          <p className="text-sm font-bold">{project.role}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.slice(0, 3).map((t) => (
              <span key={t} className="font-mono text-[9px] px-2 py-1 bg-foreground/5 rounded-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-end">
          <div className="text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] block mb-1 opacity-30">
              Domain
            </span>
            <span
              className="text-2xl font-serif italic"
              style={{ color: ACCENT_COLORS[index % ACCENT_COLORS.length] }}
            >
              {project.tags[0]}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section>
      <Reveal>
        <SectionHeader id="01" title="Selected Work" />
      </Reveal>

      <div className="grid grid-cols-1 gap-12">
        {featured.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
