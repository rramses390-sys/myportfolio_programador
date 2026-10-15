import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'medicitas',
    imageUrl: 'https://placehold.co/600x340/1a1a1a/4fc3f7?text=MediCitas+Panama',
    categories: ['java-backend', 'sql-db'],
    tech: ['Java 21', 'JavaFX', 'MySQL', 'MongoDB', 'JDBC'],
    codeUrl: 'https://gitlab.com/rramses390/medicitaspanama',
  },
  {
    id: 'payroll',
    imageUrl: 'https://placehold.co/600x340/1a1a1a/4fc3f7?text=Payroll+BIT+A+BIT',
    categories: ['java-backend', 'sql-db'],
    tech: ['Java', 'PostgreSQL', 'JDBC', 'Swing'],
    codeUrl: 'https://gitlab.com/rramses390/payroll-system-appbitabit',
  },
  {
    id: 'portfolio',
    imageUrl: 'https://placehold.co/600x340/1a1a1a/4fc3f7?text=Portafolio+Web',
    categories: ['frontend', 'fullstack'],
    tech: ['Angular', 'TypeScript', 'SCSS', 'Firebase Hosting'],
    codeUrl: 'https://github.com/rramses390-sys/myportfolio_programador',
  },
  {
    id: 'pymecloud',
    imageUrl: 'https://placehold.co/600x340/1a1a1a/4fc3f7?text=PymeCloud',
    categories: ['fullstack', 'java-backend', 'frontend'],
    tech: ['Java 21', 'Spring Boot', 'Angular', 'Ionic', 'PostgreSQL'],
    repos: [
      { label: 'Frontend', url: 'https://gitlab.com/rramses390/pymecloud-frontend.git' },
      { label: 'Backend', url: 'https://gitlab.com/victoralfonsojv/pymecloud-backend.git' },
    ],
  },
];