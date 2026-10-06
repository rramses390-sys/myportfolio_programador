export type ProjectCategory = 'java-backend' | 'sql-db' | 'frontend' | 'fullstack';

export interface Project {
  id: string;
  imageUrl: string;
  categories: ProjectCategory[];
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
}