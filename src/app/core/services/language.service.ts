import { Injectable, effect, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private readonly storageKey = 'portfolio-lang';

  lang = signal<Lang>(this.readInitialLang());

  constructor() {
    effect(() => {
      const value = this.lang();
      this.translate.use(value);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.storageKey, value);
      }
    });
  }

  toggle() {
    this.lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  private readInitialLang(): Lang {
    if (typeof localStorage === 'undefined') return 'es';
    return (localStorage.getItem(this.storageKey) as Lang) ?? 'es';
  }
}