import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '../../core/models/icon.model';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.component.html',
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  `],
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
}