import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProfileService } from '../../core/services/profile.service';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  profileService = inject(ProfileService);

    whatsappUrl(phone: string): string {
    return 'https://wa.me/' + phone.replace(/\D/g, '');
  }
}