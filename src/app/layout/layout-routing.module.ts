import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';


const routes: Routes = [{
  path: "",
  component: DashboardComponent
},
{
  path: "email",
  component: EmailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
