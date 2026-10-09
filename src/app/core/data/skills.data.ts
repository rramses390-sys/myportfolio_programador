import { SkillCategory } from '../models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    icon: 'server',
    skills: [
      { id: 'java', icon: 'java', label: 'Java / Spring Boot' },
      { id: 'python', icon: 'python', label: 'Python' },
      { id: 'rest', icon: 'code', label: 'REST APIs' },
    ],
  },
  {
    id: 'databases',
    icon: 'database',
    skills: [
      { id: 'mysql', icon: 'mysql', label: 'MySQL' },
      { id: 'postgresql', icon: 'postgresql', label: 'PostgreSQL' },
      { id: 'sql', icon: 'database', label: 'SQL' },
      { id: 'firebase', icon: 'firebase', label: 'Firebase' },
    ],
  },
  {
    id: 'frontend-tools',
    icon: 'monitor',
    skills: [
      { id: 'angular', icon: 'angular', label: 'Angular' },
      { id: 'web', icon: 'web', label: 'TypeScript / HTML / CSS' },
      { id: 'git-github', icon: 'github', label: 'Git / GitHub' },
      { id: 'editor', icon: 'editor', label: 'IntelliJ / VS Code' },
    ],
  },
];