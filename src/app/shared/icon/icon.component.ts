import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '../../core/models/icon.model';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
}