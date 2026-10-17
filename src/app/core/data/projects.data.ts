import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'medicitas',
    categories: ['java-backend', 'sql-db'],
    tech: ['Java 21', 'JavaFX', 'MySQL', 'MongoDB', 'JDBC'],
    codeUrl: 'https://gitlab.com/rramses390/medicitaspanama',
  },
  {
    id: 'payroll',
    categories: ['java-backend', 'sql-db'],
    tech: ['Java', 'PostgreSQL', 'JDBC', 'Swing'],
    codeUrl: 'https://gitlab.com/rramses390/payroll-system-appbitabit',
  },
  {
    id: 'portfolio',
    categories: ['frontend', 'fullstack'],
    tech: ['Angular', 'TypeScript', 'SCSS', 'Firebase Hosting'],
    codeUrl: 'https://github.com/rramses390-sys/myportfolio_programador',
  },
  {
    id: 'pymecloud',
    categories: ['fullstack', 'java-backend', 'frontend'],
    tech: ['Java 21', 'Spring Boot', 'Angular', 'Ionic', 'PostgreSQL'],
    repos: [
      { label: 'Frontend', url: 'https://gitlab.com/rramses390/pymecloud-frontend.git' },
      { label: 'Backend', url: 'https://gitlab.com/victoralfonsojv/pymecloud-backend.git' },
    ],
  },
];