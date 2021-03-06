import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { HrComponent } from './hr/hr.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayComponent } from './display/display.component';
import { SquareComponent } from './square/square.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HrComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    ContactComponent,
    DisplayComponent,
    SquareComponent,
    EmployeeDetailsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path:'hr', component:HrComponent},
      {path:'home', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'contact', component:ContactComponent},
      {path:'display/:name', component:DisplayComponent},
      {path:'square/:num', component:SquareComponent},
      {path:'employees', component:EmployeesComponent},
      {path:'employee-details/:id', component:EmployeeDetailsComponent},
      {path:'', redirectTo: 'home',pathMatch:'full'},
      {path:'**', component:PageNotFoundComponent}

    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
