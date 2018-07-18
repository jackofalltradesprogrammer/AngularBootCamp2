import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    HomeComponent,
    LogoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {path:'', redirectTo:'/home',pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'login', component:LoginComponent},
      {path:'dashboard', component:DashBoardComponent},
      {path:'logout', component:LogoutComponent},
      {path:'**', component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
