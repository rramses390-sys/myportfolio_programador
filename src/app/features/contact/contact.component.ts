import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ProfileService } from '../../core/services/profile.service';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  profileService = inject(ProfileService);
  private fb = inject(FormBuilder);

  submitted = signal(false);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get name() { return this.form.controls.name; }
  get email() { return this.form.controls.email; }
  get subject() { return this.form.controls.subject; }
  get message() { return this.form.controls.message; }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // TODO: conectar el envío real (por ejemplo, EmailJS) cuando se decida el proveedor.
    console.log('Formulario listo para enviar:', this.form.getRawValue());

    this.submitted.set(true);
    this.form.reset();
  }
}