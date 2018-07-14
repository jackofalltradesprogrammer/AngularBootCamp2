import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employees/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute, private _es:EmployeeService) { }
  employee:IEmployee;
  ngOnInit() {
    var id = this._activatedRoute.snapshot.params["id"];
    for(var e of this._es.employees){
      if (e.id == id)
        this.employee=e;
    }
  }

}
