import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { HrComponent } from './hr/hr.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HrComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path:'hr', component:HrComponent},
      {path:'home', component:HomeComponent},
      {path:'contact', component:ContactComponent},
      {path:'about', component:AboutComponent},
      {path:'', redirectTo: 'home',pathMatch:'full'},
      {path:'**', component:PageNotFoundComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
