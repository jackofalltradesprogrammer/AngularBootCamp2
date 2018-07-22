import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SampleHttpComponent } from './sample-http/sample-http.component';
import { SampleHttpService } from './sample-http.service';
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleHttpComponent,
    JokeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [SampleHttpService, JokeService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
