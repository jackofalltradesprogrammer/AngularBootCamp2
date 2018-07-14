import { Injectable } from '@angular/core';
import { IEmployee, Employee } from 'src/app/employees/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:IEmployee[];
  constructor() {
    this.employees = new Array<IEmployee>(
      new Employee(1001, 'Happy', 'Trainer', 5000),
      new Employee(1002, 'Dave', 'Manager', 5000),
      new Employee(1003, 'Gagan', 'Developer', 5000),
      new Employee(1004, 'Sona', 'Trainer', 5000)
    );
   }
}


