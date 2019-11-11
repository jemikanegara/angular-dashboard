import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { LayoutComponent } from './layout/layout.component'
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
