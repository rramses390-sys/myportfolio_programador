import { IconName } from './icon.model';

export interface Skill {
  id: string;
  icon: IconName;
  label: string;
}

export interface SkillCategory {
  id: string;
  icon: IconName;
  skills: Skill[];
}