import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SubscriptionsComponent } from './features/subscriptions/subscriptions.component';
import { ClientsComponent } from './features/clients/clients.component';
import { ReportsComponent } from './features/reports/reports.component';
import { BillingComponent } from './features/billing/billing.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RecoverPasswordComponent } from './features/auth/recover-password/recover-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'subscriptions', component: SubscriptionsComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
]; 