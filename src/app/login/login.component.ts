import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  msg:string="";
  validateUser(user){
    if (user.uname == "kiran" && user.pwd=="kumar"){
      this.msg="Credentials authenticate and found correct";
    }
    else
      this.msg="Invalid Input credentials";
  }

}
