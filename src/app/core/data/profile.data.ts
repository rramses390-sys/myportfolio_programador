import { Profile } from '../models/profile.model';

export const PROFILE: Profile = {
  name: 'Ramses Rodriguez',
  avatarUrl: '/avatar.png',
  cvUrl: '/cv-ramses-rodriguez.pdf',
  phone: '+507 XXXX-XXXX',
  email: 'rramses390@gmail.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/tu-usuario', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario', icon: 'linkedin' },
  ],
};