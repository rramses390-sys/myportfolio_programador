import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { HeroComponent } from './features/hero/hero.component';
import { LangToggleComponent } from './shared/lang-toggle/lang-toggle.component';

@Component({
  imports: [RouterOutlet, HeroComponent, AboutComponent, LangToggleComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-portfolio-developer');
}