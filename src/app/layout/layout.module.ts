import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmailComponent } from './email/email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';

import { loadingReducer } from '../ngrx/loading.reducer';


@NgModule({
  declarations: [EmailComponent, DashboardComponent, HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent, StoreModule],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DashboardModule,
    SharedModule,
    StoreModule.forRoot({ loading: loadingReducer })
  ]
})
export class LayoutModule { }
