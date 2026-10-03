export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin';
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  cvUrl: string;
  phone: string;
  email: string;
  social: SocialLink[];
}