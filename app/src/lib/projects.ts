import projectsData from '@/content/projects.json';
import type { Project, SortOption } from '@/types/project';

export function getAllProjects(): Project[] {
  return projectsData.projects;
}

export function getFeaturedProjects(): Project[] {
  return projectsData.projects.filter(project => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.projects.find(project => project.slug === slug);
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  projectsData.projects.forEach(project => {
    project.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

export function filterProjects(projects: Project[], searchQuery: string, selectedTags: string[]): Project[] {
  return projects.filter(project => {
    // Search filter
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    // Tag filter
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.some(tag => project.tags.includes(tag));

    return matchesSearch && matchesTags;
  });
}

export function sortProjects(projects: Project[], sortBy: SortOption): Project[] {
  const sorted = [...projects];

  const getLevelValue = (level: string): number => {
    const order: Record<string, number> = { high: 3, medium: 2, low: 1 };
    return order[level] || 0;
  };

  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => b.year - a.year);
    case 'impact':
      return sorted.sort((a, b) => getLevelValue(b.impactLevel) - getLevelValue(a.impactLevel));
    case 'technical':
      return sorted.sort((a, b) => getLevelValue(b.technicalLevel) - getLevelValue(a.technicalLevel));
    default:
      return sorted;
  }
}

export function getImpactBadgeColor(level: string): string {
  switch (level) {
    case 'high':
      return 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary';
    case 'medium':
      return 'bg-accent/15 text-accent-foreground dark:bg-accent/20 dark:text-accent';
    case 'low':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
}

export function getTechnicalBadgeColor(level: string): string {
  switch (level) {
    case 'high':
      return 'bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary';
    case 'medium':
      return 'bg-accent/15 text-accent-foreground dark:bg-accent/20 dark:text-accent';
    case 'low':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
}
