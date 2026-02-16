import { Brain, Activity, Database } from 'lucide-react';

const metrics = [
  { label: 'Classification Model', val: '90%', sub: 'Pain detection accuracy', Icon: Brain },
  { label: 'Pipeline Efficiency', val: '8x', sub: 'Throughput optimization', Icon: Activity },
  { label: 'Processing Latency', val: '-75%', sub: 'Data delivery speed', Icon: Database },
];

export function Proof() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-px border-y border-border">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="py-20 px-8 bg-background hover:bg-card transition-colors duration-500"
        >
          <div className="mb-8 text-primary">
            <m.Icon size={24} strokeWidth={1} />
          </div>
          <h3 className="text-6xl font-light tracking-tighter mb-2">{m.val}</h3>
          <p className="font-mono text-xs uppercase tracking-widest opacity-40 mb-4">{m.label}</p>
          <p className="text-sm opacity-60 italic font-serif">{m.sub}</p>
        </div>
      ))}
    </section>
  );
}
