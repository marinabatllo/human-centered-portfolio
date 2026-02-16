export interface Project {
  id: string;
  slug: string;
  title: string;
  year: number;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  tools: string[];
  tags: string[];
  role: string;
  featured: boolean;
  impactLevel: string;
  technicalLevel: string;
  links: {
    github: string | null;
    demo: string | null;
    caseStudy: string | null;
  };
  images: string[];
}

export interface ProjectsData {
  projects: Project[];
}

export type SortOption = 'newest' | 'impact' | 'technical';
export type FilterOption = 'all' | string;
