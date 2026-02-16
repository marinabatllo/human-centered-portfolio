import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from '@/lib/router';
import { SectionHeader } from '@/components/ui-custom/SectionHeader';
import { getAllProjects, getAllTags, filterProjects, sortProjects } from '@/lib/projects';
import type { SortOption } from '@/types/project';

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
    <div className="pt-24 pb-20 lg:pt-32 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader label="All Projects" number="MBR® — Work" subtitle="Portfolio Archive" />

        {/* Page title */}
        <h1 className="text-hero text-foreground mb-6">Work.</h1>
        <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
          A collection of work spanning AI/ML, data engineering, healthcare,
          and product design. Each project represents a unique challenge and measurable impact.
        </p>

        {/* Search + filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2">
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-3 bg-card border border-border rounded-full text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
          >
            <option value="newest">Newest First</option>
            <option value="impact">Highest Impact</option>
            <option value="technical">Most Technical</option>
          </select>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedTags.includes(tag)
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-6 text-xs text-muted-foreground uppercase tracking-wider">
          {filteredProjects.length} of {allProjects.length} projects
        </div>

        {/* Projects list — Palmer stacked style */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-0">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="flex items-center gap-6 py-6 border-b border-border hover:border-primary/50 transition-colors">
                  <span className="text-xs text-muted-foreground font-medium w-8">
                    ({String(index + 1).padStart(2, '0')})
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 truncate">
                      {project.summary}
                    </p>
                  </div>
                  <span className="hidden md:block text-xs text-muted-foreground">{project.year}</span>
                  <span className="hidden md:block text-xs text-muted-foreground uppercase tracking-wider">
                    {project.tags[0]}
                  </span>
                  <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">→</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            No projects match your filters.
            <button
              onClick={() => { setSearchQuery(''); setSelectedTags([]); }}
              className="block mx-auto mt-4 text-primary hover:underline text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
