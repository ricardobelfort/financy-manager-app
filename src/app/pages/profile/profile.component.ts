import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  profileForm = this.fb.group({
    fullName: ['Conta teste', [Validators.required, Validators.minLength(3)]],
    email: [{ value: 'conta@teste.com', disabled: true }, [Validators.required, Validators.email]],
  });

  onSave() {
    if (this.profileForm.valid) {
      console.log('Profile saved:', this.profileForm.getRawValue());
      // TODO: Implement profile update service
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  onLogout() {
    console.log('User logged out');
    // TODO: Implement logout service
    this.router.navigate(['/login']);
  }
}
