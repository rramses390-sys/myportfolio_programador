import { Injectable, signal } from '@angular/core';
import { PROFILE } from '../data/profile.data';
import { Profile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  profile = signal<Profile>(PROFILE);
}