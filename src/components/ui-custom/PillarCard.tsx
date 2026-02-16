import type { LucideIcon } from 'lucide-react';

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  delay?: number;
  colorScheme?: {
    bg: string;
    text: string;
    border: string;
    skillBg: string;
  };
}

export function PillarCard({ icon: Icon, title, description, skills, delay = 0, colorScheme }: PillarCardProps) {
  const colors = colorScheme || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-t-primary', skillBg: 'bg-muted text-muted-foreground' };

  return (
    <div
      className={`group relative bg-card rounded-2xl border border-border/50 border-t-4 ${colors.border} p-6 lg:p-8 hover-lift`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 transition-colors`}>
        <Icon className={`h-6 w-6 ${colors.text}`} />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colors.skillBg}`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Hover accent line */}
      <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-current ${colors.text} scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full`} />
    </div>
  );
}

