import { Brain, Activity, Database } from 'lucide-react';
import { useInView, useCountUp } from '@/hooks/useAnimations';

const metrics = [
  { label: 'Classification Model', val: '90%', sub: 'Pain detection accuracy', Icon: Brain },
  { label: 'Pipeline Efficiency', val: '8x', sub: 'Throughput optimization', Icon: Activity },
  { label: 'Processing Latency', val: '-75%', sub: 'Data delivery speed', Icon: Database },
];

function MetricCard({ m, index }: { m: typeof metrics[0]; index: number }) {
  const [ref, isInView] = useInView<HTMLDivElement>();
  const count = useCountUp(m.val, isInView, 1500);

  return (
    <div
      ref={ref}
      className="py-20 px-8 bg-background hover:bg-card transition-colors duration-500"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${index * 150}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${index * 150}ms, background-color 500ms`,
      }}
    >
      <div className="mb-8 text-primary">
        <m.Icon size={24} strokeWidth={1} />
      </div>
      <h3 className="text-6xl font-light tracking-tighter mb-2">{count}</h3>
      <p className="font-mono text-xs uppercase tracking-widest opacity-40 mb-4">{m.label}</p>
      <p className="text-sm opacity-60 italic font-serif">{m.sub}</p>
    </div>
  );
}

export function Proof() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-px border-y border-border">
      {metrics.map((m, i) => (
        <MetricCard key={i} m={m} index={i} />
      ))}
    </section>
  );
}
