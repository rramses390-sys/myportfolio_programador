import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SkillsService } from '../../core/services/skills.service';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillsService = inject(SkillsService);
}