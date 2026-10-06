import { Injectable, signal } from '@angular/core';
import { PROJECTS } from '../data/projects.data';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  projects = signal<Project[]>(PROJECTS);
}