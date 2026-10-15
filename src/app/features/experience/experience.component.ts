import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TimelineService } from '../../core/services/timeline.service';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  timelineService = inject(TimelineService);
}