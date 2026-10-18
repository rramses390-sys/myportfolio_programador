import { IconName } from './icon.model';

export interface SocialLink {
  label: string;
  url: string;
  icon: IconName;
}

export interface Profile {
  name: string;
  avatarUrl: string;
  cvUrl: string;
  phone: string;
  email: string;
  social: SocialLink[];
}