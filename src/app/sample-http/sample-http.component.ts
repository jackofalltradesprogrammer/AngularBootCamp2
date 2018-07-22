import { Component, OnInit } from '@angular/core';
import { SampleHttpService } from "../sample-http.service";
@Component({
  selector: 'app-sample-http',
  templateUrl: './sample-http.component.html',
  styleUrls: ['./sample-http.component.css']
})
export class SampleHttpComponent implements OnInit {

  constructor(private _ss:SampleHttpService) { }
  msg:string="";

  getDate(){
    this._ss.getDateTimeFromWebAPI()
      .subscribe(x =>this.msg = "Date is " + x.date);
  }
  getTIme(){
    this._ss.getDateTimeFromWebAPI()
      .subscribe(x =>this.msg = "Time is " + x.time);
  }

  ngOnInit() {
  }

}
