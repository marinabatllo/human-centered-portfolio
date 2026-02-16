import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { ProjectCard } from '@/components/ui-custom/ProjectCard';
import { getAllProjects, getAllTags, filterProjects, sortProjects } from '@/lib/projects';
import type { SortOption } from '@/types/project';

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);

  const allProjects = getAllProjects();
  const allTags = getAllTags();

  const filteredProjects = useMemo(() => {
    const filtered = filterProjects(allProjects, searchQuery, selectedTags);
    return sortProjects(filtered, sortBy);
  }, [allProjects, searchQuery, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setSortBy('newest');
  };

  const hasActiveFilters = searchQuery || selectedTags.length > 0;

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h1 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            A collection of work spanning AI/ML, data engineering, healthcare, 
            and product design. Each project represents a unique challenge and measurable impact.
          </p>
        </AnimatedSection>

        {/* Filters and Search */}
        <AnimatedSection delay={100} className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects, tags, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger className="w-full lg:w-48 rounded-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="impact">Highest Impact</SelectItem>
                <SelectItem value="technical">Most Technical</SelectItem>
              </SelectContent>
            </Select>

            {/* Filter toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className={`rounded-full gap-2 ${showFilters ? 'bg-primary/10 border-primary/30' : ''}`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {selectedTags.length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs">
                  {selectedTags.length}
                </span>
              )}
            </Button>
          </div>

          {/* Tag filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-card rounded-2xl border border-border/50 animate-fade-in">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">Filter by tag</span>
                {selectedTags.length > 0 && (
                  <button
                    onClick={() => setSelectedTags([])}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active filters */}
          {hasActiveFilters && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {selectedTags.map((tag) => (
                <Badge key={tag} variant="secondary" className="gap-1">
                  {tag}
                  <button onClick={() => toggleTag(tag)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:underline ml-2"
              >
                Clear all
              </button>
            </div>
          )}
        </AnimatedSection>

        {/* Results count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {allProjects.length} projects
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 50}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection className="text-center py-20">
            <div className="text-muted-foreground mb-4">
              No projects match your filters.
            </div>
            <Button variant="outline" onClick={clearFilters}>
              Clear filters
            </Button>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
