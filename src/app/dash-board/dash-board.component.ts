import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  uname:string='';
  msg:string='';
  constructor() {
    if (localStorage.getItem('uname') != null){
      this.uname= localStorage.getItem('uname');
      this.msg = "Hello " + this.uname + " , your login is successful and welcome to Dashboar";
    }
   }

  ngOnInit() {
  }

}
