import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }
  num:number;
  ngOnInit() {
    this.num = this._activatedRoute.snapshot.params['num'];
    this.num *= this.num;
  }

}
