import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [{
  path: "",
  component: LayoutComponent,
  canActivate: [AuthGuardService]
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
