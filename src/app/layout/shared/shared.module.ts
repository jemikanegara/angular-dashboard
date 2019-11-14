import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { CircleDetailComponent } from './circle-detail/circle-detail.component';
import { LineDetailComponent } from './line-detail/line-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SummaryDataComponent } from './summary-data/summary-data.component';

@NgModule({
  declarations: [SummaryComponent, CircleDetailComponent, LineDetailComponent, SummaryDataComponent],
  exports: [SummaryComponent, CircleDetailComponent, LineDetailComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
