import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LangToggleComponent } from '../../shared/lang-toggle/lang-toggle.component';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { ProfileService } from '../../core/services/profile.service';
import { NAV_LINKS } from '../../core/data/nav-links.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, LangToggleComponent, ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  profileService = inject(ProfileService);
  readonly links = NAV_LINKS;
  menuOpen = signal(false);
  showIdentity = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.showIdentity.set(window.scrollY > window.innerHeight * 0.5);
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}