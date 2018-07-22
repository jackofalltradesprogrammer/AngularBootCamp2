import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private url = 'http://api.icndb.com/jokes/random/';
  constructor(private http:Http) { }
  
  getJokeFromWebAPI(){
    var observable= this.http.get(this.url).pipe(map(x => x.json()));
    return observable;
  }
}
