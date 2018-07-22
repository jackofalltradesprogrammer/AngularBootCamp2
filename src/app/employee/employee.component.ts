import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any[];
  constructor(private es:EmployeeService) { }

  ngOnInit() {
  }
  getEmployees(){
    this.es.getEmployeesFromDB().subscribe(x => this.employees=x);
  }
  
  x:any={};
  getEmployeeById(){
    this.es.getEmployeeByIdFromDB(this.x.Id).subscribe(x => this.x=x);
  }

  // addEmployee(){
  //   this.es.addEmployeeInDB(this.x).subscribe(data => this.x=data.json());
  //   alert("Row added succesfully");
  //   this.x={};
  // }
}
