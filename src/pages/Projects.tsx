import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from '@/lib/router';
import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { getAllProjects, getAllTags, filterProjects, sortProjects } from '@/lib/projects';
import type { SortOption } from '@/types/project';

const ACCENT_COLORS = ['#B58CC8', '#FF857E', '#F0C965'];

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const allProjects = getAllProjects();
  const allTags = getAllTags();

  const filteredProjects = useMemo(() => {
    const filtered = filterProjects(allProjects, searchQuery, selectedTags);
    return sortProjects(filtered, sortBy);
  }, [allProjects, searchQuery, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-8 pt-32 pb-20 relative z-10">
      <SectionHeader id="A1" title="All Projects" />

      {/* Search + Sort */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 opacity-30" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-4 bg-transparent border-b border-border font-mono text-xs uppercase tracking-wider placeholder:opacity-30 focus:outline-none focus:border-primary transition-colors"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="px-4 py-4 bg-transparent border-b border-border font-mono text-xs uppercase tracking-wider focus:outline-none focus:border-primary transition-colors"
        >
          <option value="newest">Newest First</option>
          <option value="impact">Highest Impact</option>
          <option value="technical">Most Technical</option>
        </select>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-16">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`font-mono text-[9px] px-3 py-1.5 rounded-sm uppercase tracking-wider transition-all ${selectedTags.includes(tag)
              ? 'bg-foreground text-background'
              : 'bg-foreground/5 opacity-40 hover:opacity-100'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="font-mono text-[10px] uppercase tracking-widest opacity-30 mb-8">
        {filteredProjects.length} of {allProjects.length} trials
      </div>

      {/* Project rows */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-0">
          {filteredProjects.map((project, i) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border items-center hover:bg-foreground/[0.01] transition-colors"
            >
              <div className="lg:col-span-1 font-mono text-xs opacity-20">
                REF_{String(i + 1).padStart(2, '0')}
              </div>
              <div className="lg:col-span-6">
                <h4 className="text-2xl md:text-4xl font-light tracking-tight mb-2 group-hover:pl-4 transition-all duration-500">
                  {project.title}
                </h4>
                <p className="text-sm opacity-40 font-light leading-relaxed max-w-lg">{project.summary}</p>
              </div>
              <div className="lg:col-span-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] block mb-1 opacity-30">Role</span>
                <p className="text-sm font-bold">{project.role}</p>
              </div>
              <div className="lg:col-span-2 flex justify-end">
                <span className="text-xl font-serif italic" style={{ color: ACCENT_COLORS[i % 3] }}>
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 opacity-30 font-mono text-xs uppercase tracking-widest">
          No trials match your protocol.
          <button onClick={() => { setSearchQuery(''); setSelectedTags([]); }} className="block mx-auto mt-4 text-primary underline">
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
