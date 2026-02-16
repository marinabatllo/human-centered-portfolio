import type { LucideIcon } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
  delay?: number;
}

// Helper function to extract number from value string (e.g., "4x" -> 4, "90%+" -> 90)
const parseMetricValue = (value: string): { number: number; prefix: string; suffix: string } => {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (match) {
    return {
      number: parseFloat(match[2]),
      prefix: match[1],
      suffix: match[3]
    };
  }
  return { number: 0, prefix: '', suffix: value };
};

export function MetricCard({ value, label, description, icon: Icon, delay = 0 }: MetricCardProps) {
  const { number, prefix, suffix } = parseMetricValue(value);
  const hasNumber = number > 0;

  return (
    <div
      className="group relative bg-card rounded-2xl border border-border/30 border-l-4 border-l-secondary p-6 lg:p-8 text-center hover:bg-secondary/5 hover:border-border/50 transition-all hover-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
          <Icon className="h-5 w-5 text-secondary" />
        </div>
      )}

      <div className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-2">
        {hasNumber ? (
          <>
            {prefix}
            <CountUp
              to={number}
              duration={2}
              delay={delay / 1000}
            />
            {suffix}
          </>
        ) : (
          value
        )}
      </div>

      <div className="font-medium text-foreground mb-1">
        {label}
      </div>

      {description && (
        <div className="text-sm text-muted-foreground">
          {description}
        </div>
      )}
    </div>
  );
}

