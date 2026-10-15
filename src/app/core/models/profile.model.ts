export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin';
}

export interface Profile {
  name: string;
  avatarUrl: string;
  cvUrl: string;
  phone: string;
  email: string;
  social: SocialLink[];
}