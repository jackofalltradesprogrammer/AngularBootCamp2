import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:IEmployee[];
  constructor(private _es:EmployeeService) { 
    this.employees = _es.employees;
  }

  ngOnInit() {
  }

}
