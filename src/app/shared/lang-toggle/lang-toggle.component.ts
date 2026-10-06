import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button class="lang-toggle" type="button" (click)="languageService.toggle()">
      {{ languageService.lang() === 'es' ? 'EN' : 'ES' }}
    </button>
  `,
  styles: [`
    .lang-toggle {
      background: transparent;
      border: 1px solid var(--text-muted);
      color: var(--text-primary);
      border-radius: 999px;
      padding: 0.4rem 0.9rem;
      font-weight: 600;
      cursor: pointer;
    }
  `],
})
export class LangToggleComponent {
  languageService = inject(LanguageService);
}