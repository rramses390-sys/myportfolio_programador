import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TECH_ICONS } from '../../core/data/tech-icons.data';
import { ProjectCategory } from '../../core/models/project.model';
import { ProjectsService } from '../../core/services/projects.service';

type FilterOption = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsService = inject(ProjectsService);

  readonly filters: FilterOption[] = ['all', 'java-backend', 'sql-db', 'frontend', 'fullstack'];
  activeFilter = signal<FilterOption>('all');

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const all = this.projectsService.projects();
    return filter === 'all' ? all : all.filter((p) => p.categories.includes(filter));
  });

  setFilter(filter: FilterOption) {
    this.activeFilter.set(filter);
  }

  techIcon(tech: string): string | null {
    return TECH_ICONS[tech] ?? null;
  }
}