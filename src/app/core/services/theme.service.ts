import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'portfolio-theme';

  theme = signal<Theme>(this.readInitialTheme());

  constructor() {
    effect(() => {
      const value = this.theme();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', value);
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.storageKey, value);
      }
    });
  }

  toggle() {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private readInitialTheme(): Theme {
    if (typeof localStorage === 'undefined') return 'dark';
    return (localStorage.getItem(this.storageKey) as Theme) ?? 'dark';
  }
}