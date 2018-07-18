import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:IUser[]=null;

  constructor(private _router:Router) { 
    this.users= new Array<IUser>(
      new User("Suhail", "happy"),
      new User("Pawan", "happy"),
      new User("Ujjal", "happy"),
      new User("Ricky", "happy")
    );
      
  }

  ngOnInit() {
  }

  msg:string="";
  loginStyleClass={};
  validateUserFromDataSource(uname,pwd){
    var status:boolean=false;
    for (let user of this.users){
      if(user.uname==uname && user.pwd == pwd){
        status=true;
        break;
      }
    }
    return status;
  }
  validateUser(user){
    if (this.validateUserFromDataSource(user.uname,user.pwd)){
      // this.msg="Credentials authenticate and found correct";
      localStorage.setItem('uname', user.uname); // Create session while successful login
      this._router.navigate(["../dashboard"]);
      this.loginStyleClass={"color":"green"};
    }
    else{
      this.msg="Invalid Input credentials";
      this.loginStyleClass={"color":"red"};
    }
  }

}

interface IUser{
  uname:string;
  pwd:string;
}

class User{
  uname:string;
  pwd:string;
  constructor(uname?:string, pwd?:string){
    this.uname=uname;
    this.pwd=pwd;
  }
}