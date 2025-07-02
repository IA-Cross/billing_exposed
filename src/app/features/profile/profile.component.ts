import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-text-primary">Profile</h1>
        <button 
          (click)="saveChanges()"
          class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Save Changes
        </button>
      </div>

      <!-- Profile Information -->
      <form [formGroup]="profileForm" class="space-y-6">
        <div class="bg-white rounded-lg border border-border overflow-hidden">
          <div class="p-6 border-b border-border">
            <h2 class="text-lg font-bold text-text-primary">Información personal</h2>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-6 mb-8">
              <div class="bg-blue-100 text-primary rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold">
                JD
              </div>
              <div>
                <h3 class="text-text-primary font-medium text-lg">John Doe</h3>
                <p class="text-text-secondary">Administrador</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block">
                  <span class="text-text-primary text-sm font-medium mb-1.5 block">Nombre completo</span>
                  <input
                    type="text"
                    formControlName="fullName"
                    class="form-input w-full rounded-lg border-border bg-slate-50 px-4 py-2.5 text-text-primary"
                  />
                </label>
              </div>

              <div>
                <label class="block">
                  <span class="text-text-primary text-sm font-medium mb-1.5 block">Email</span>
                  <input
                    type="email"
                    formControlName="email"
                    class="form-input w-full rounded-lg border-border bg-slate-50 px-4 py-2.5 text-text-primary"
                  />
                </label>
              </div>

              <div>
                <label class="block">
                  <span class="text-text-primary text-sm font-medium mb-1.5 block">Teléfono</span>
                  <input
                    type="tel"
                    formControlName="phone"
                    class="form-input w-full rounded-lg border-border bg-slate-50 px-4 py-2.5 text-text-primary"
                  />
                </label>
              </div>

              <div>
                <label class="block">
                  <span class="text-text-primary text-sm font-medium mb-1.5 block">Rol</span>
                  <input
                    type="text"
                    formControlName="role"
                    class="form-input w-full rounded-lg border-border bg-slate-50 px-4 py-2.5 text-text-primary"

                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Security Settings -->
        <div class="bg-white rounded-lg border border-border overflow-hidden">
          <div class="p-6 border-b border-border">
            <h2 class="text-lg font-bold text-text-primary">Seguridad</h2>
          </div>
          <div class="p-6">
            <div class="space-y-6">
              <div>
                <label class="block">
                  <span class="text-text-primary text-sm font-medium mb-1.5 block">Contraseña actual</span>
                  <input
                    type="password"
                    formControlName="currentPassword"
                    class="form-input w-full rounded-lg border-border bg-slate-50 px-4 py-2.5 text-text-primary"
                    placeholder="Enter current password"
                  />
                </label>
              </div>

              <div>
                <label class="block">
                  <span class="text-text-primary text-sm font-medium mb-1.5 block">Nueva contraseña</span>
                  <input
                    type="password"
                    formControlName="newPassword"
                    class="form-input w-full rounded-lg border-border bg-slate-50 px-4 py-2.5 text-text-primary"
                    placeholder="Enter new password"
                  />
                </label>
              </div>

              <div>
                <label class="block">
                  <span class="text-text-primary text-sm font-medium mb-1.5 block">Confirmar nueva contraseña</span>
                  <input
                    type="password"
                    formControlName="confirmPassword"
                    class="form-input w-full rounded-lg border-border bg-slate-50 px-4 py-2.5 text-text-primary"
                    placeholder="Confirm new password"
                  />
                </label>
              </div>

              <button 
                type="button"
                (click)="changePassword()"
                class="text-text-secondary hover:text-text-primary px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>

        <!-- Preferences -->
        <div class="bg-white rounded-lg border border-border overflow-hidden">
          <div class="p-6 border-b border-border">
            <h2 class="text-lg font-bold text-text-primary">Preferencias</h2>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-text-primary font-medium">Notificationes de email</h3>
                  <p class="text-text-secondary text-sm">Recibe notificaciones de email para actualizaciones importantes</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" formControlName="emailNotifications" class="sr-only peer">
                  <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-text-primary font-medium">Autentificación de dos factores</h3>
                  <p class="text-text-secondary text-sm">Añade una capa adicional de seguridad a tu cuenta</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" formControlName="twoFactorAuth" class="sr-only peer">
                  <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['John Doe'],
      email: ['john.doe@example.com'],
      phone: ['(555) 123-4567'],
      role: ['Administrator'],
      currentPassword: [''],
      newPassword: [''],
      confirmPassword: [''],
      emailNotifications: [true],
      twoFactorAuth: [false]
    });
  }

  ngOnInit() {}

  saveChanges() {
    if (this.profileForm.valid) {
      console.log('Form values:', this.profileForm.value);
      // Here you would typically call a service to save the changes
    }
  }

  changePassword() {
    const { currentPassword, newPassword, confirmPassword } = this.profileForm.value;
    if (newPassword && newPassword === confirmPassword) {
      console.log('Changing password...');
      // Here you would typically call a service to change the password
    }
  }
} 