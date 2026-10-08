import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NAV_LINKS } from '../../core/data/nav-links.data';
import { LangToggleComponent } from '../../shared/lang-toggle/lang-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, LangToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly links = NAV_LINKS;
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}