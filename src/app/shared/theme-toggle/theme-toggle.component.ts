import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="theme-toggle"
      type="button"
      (click)="themeService.toggle()"
      [attr.aria-label]="themeService.theme() === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    >
      <app-icon [name]="themeService.theme() === 'dark' ? 'sun' : 'moon'" />
    </button>
  `,
  styles: [`
    .theme-toggle {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid var(--text-muted);
      background: transparent;
      color: var(--text-primary);
      cursor: pointer;
    }
    app-icon {
      width: 16px;
      height: 16px;
    }
  `],
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
}