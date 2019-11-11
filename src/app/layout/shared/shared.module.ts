import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
