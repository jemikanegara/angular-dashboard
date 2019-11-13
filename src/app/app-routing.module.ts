import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { EmailComponent } from './layout/email/email.component';

const routes: Routes = [{
  path: "",
  component: LayoutComponent,
  canActivate: [AuthGuardService],
  children: [{
    path: "",
    component: DashboardComponent
  },
  {
    path: "email",
    component: EmailComponent
  }]
},
{
  path: "login",
  component: AuthComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
