import { Injectable, signal } from '@angular/core';
import { SKILL_CATEGORIES } from '../data/skills.data';
import { SkillCategory } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  categories = signal<SkillCategory[]>(SKILL_CATEGORIES);
}