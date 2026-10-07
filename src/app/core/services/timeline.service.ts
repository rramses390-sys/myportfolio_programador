import { Injectable, signal } from '@angular/core';
import { EDUCATION, EXPERIENCE } from '../data/timeline.data';
import { TimelineItem } from '../models/timeline.model';

@Injectable({ providedIn: 'root' })
export class TimelineService {
  experience = signal<TimelineItem[]>(EXPERIENCE);
  education = signal<TimelineItem[]>(EDUCATION);
}