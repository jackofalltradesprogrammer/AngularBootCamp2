import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SampleHttpComponent } from './sample-http/sample-http.component';
import { SampleHttpService } from './sample-http.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleHttpComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [SampleHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
