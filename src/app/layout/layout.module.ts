import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [EmailComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DashboardModule
  ]
})
export class LayoutModule { }
