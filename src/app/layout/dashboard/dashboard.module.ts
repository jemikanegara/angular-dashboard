import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [MapComponent, DetailComponent],
  exports: [MapComponent, AgmCoreModule, DetailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClsojZYYr5d3CQRJpfwDOWozk1bZ3190w'
    })
  ]
})
export class DashboardModule { }
