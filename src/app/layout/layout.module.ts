import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmailComponent } from './email/email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [EmailComponent, DashboardComponent, HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DashboardModule,
    SharedModule
  ]
})
export class LayoutModule { }
