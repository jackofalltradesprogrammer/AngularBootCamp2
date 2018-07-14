import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { HrComponent } from './hr/hr.component';

@NgModule({
  declarations: [
    AppComponent,
    HrComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path:'hr', component:HrComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
