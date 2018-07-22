import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string='http://localhost:6911/api/Employees/'
  constructor(private http:Http) { }
  getEmployeesFromDB(){
    var observable= this.http.get(this.url).pipe(map(x => x.json()));
    return observable;
  }
}
