import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:any=[];
  constructor() {
    this.employees = [
      {id:1001,ename:'Kiran',job:'Trainer',salary:10000},
      {id:1002,ename:'Dave',job:'Developer',salary:10000},
      {id:1003,ename:'Happy',job:'Manager',salary:10000},
      {id:1004,ename:'Gagan',job:'Trainer',salary:10000}
    ];
   }
}
