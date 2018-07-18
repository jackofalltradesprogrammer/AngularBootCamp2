import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  uname:string='';
  msg:string='';
  constructor(private _router:Router) {
    if (localStorage.getItem('uname') != null){
      this.uname= localStorage.getItem('uname');
      this.msg = "Hello " + this.uname + " , your login is successful and welcome to Dashboar";
    }
    else{
      alert("Invalid entry to this page");
      this._router.navigate(['../login']);
    }
   }

  ngOnInit() {
  }

}
