import { Profile } from '../models/profile.model';

export const PROFILE: Profile = {
  name: 'Ramses Rodriguez',
  role: 'Desarrollador de Software · Java & Sistemas de Gestión',
  tagline:
    'Construyo sistemas backend robustos con Java - desde la lógica de negocio hasta la base de datos - y domino el frontend para entregar el producto completo.',
  bio: 'Soy estudiante de Desarrollo de Software apasionado por construir sistemas que resuelvan problemas reales...',
  avatarUrl: '/assets/avatar.png',
  cvUrl: '/assets/cv-ramses-rodriguez.pdf',
  phone: '+507 XXXX-XXXX',
  email: 'rramses390@gmail.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/tu-usuario', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario', icon: 'linkedin' },
  ],
};