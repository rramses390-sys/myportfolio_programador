import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { HeroComponent } from './features/hero/hero.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
import { LangToggleComponent } from './shared/lang-toggle/lang-toggle.component';

@Component({
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    LangToggleComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-portfolio-developer');
}