import { Component, OnInit } from '@angular/core';
import { SampleHttpService } from "../sample-http.service";
@Component({
  selector: 'app-sample-http',
  templateUrl: './sample-http.component.html',
  styleUrls: ['./sample-http.component.css']
})
export class SampleHttpComponent implements OnInit {

  constructor(private _ss:SampleHttpService) { }
  date:string="";

  getDate(){
    this._ss.getDateFromWebAPI()
      .subscribe(x =>this.date = x.value.joke);
  }

  ngOnInit() {
  }

}