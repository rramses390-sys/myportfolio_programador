export type ProjectCategory = 'java-backend' | 'sql-db' | 'frontend' | 'fullstack';

export interface ProjectRepo {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  imageUrl: string;
  categories: ProjectCategory[];
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
  repos?: ProjectRepo[];
}