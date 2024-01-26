 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './main-container/login/login.component';
import { HomeComponent } from './main-container/home/home.component';
import { AdminLoginComponent } from './main-container/admin-login/admin-login.component';
import { AdminHomeComponent } from './main-container/admin-home/admin-home.component';
import { AdminStatsComponent } from './main-container/admin-stats/admin-stats.component';
import { KeeperBookingsComponent } from './main-container/keeper-bookings/keeper-bookings.component';
import { VisitorFindKeepersComponent } from './main-container/visitor-find-keepers/visitor-find-keepers.component';
import { KeeperHomeComponent } from './main-container/keeper-home/keeper-home.component';
import { OwnerHomeComponent } from './main-container/owner-home/owner-home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // Existing routes...

  // New route
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-home', component: AdminHomeComponent ,canActivate: [AuthGuard]},
  { path: 'admin/stats', component: AdminStatsComponent ,canActivate: [AuthGuard]},
  { path: 'keeper-bookings/keeper/:user_id', component: KeeperBookingsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'visitor-find-keepers', component: VisitorFindKeepersComponent },
  { path: 'keeper-home/:user_id', component: KeeperHomeComponent ,canActivate: [AuthGuard]},
  { path: 'owner-home/:user_id', component: OwnerHomeComponent ,canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
