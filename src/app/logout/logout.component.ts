import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  uname:string='';
  msg:string='';
  constructor() {
    if (localStorage.getItem('uname') != null){
      this.uname= localStorage.getItem('uname');
      this.msg = "Pawan " + this.uname + " , logged out successfully";
      localStorage.clear(); // Clear session data
    }
   }

  ngOnInit() {
  }

}
