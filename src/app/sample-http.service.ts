import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SampleHttpService {

  constructor(private _http:Http) { 

  }
  private _url:string="";
  
  getDateTimeFromWebAPI(){
    this._url="http://date.jsontest.com";
    return this._http.get(this._url).pipe(map(res => res.json()));    
  }
  
}
