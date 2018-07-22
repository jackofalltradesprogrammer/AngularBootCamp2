import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  msg:string="";
  constructor(private js:JokeService) { }

  ngOnInit() {
  }
  getJoke(){
    this.js.getJokeFromWebAPI().subscribe(x=>this.msg=x.value.joke);
  }




}
