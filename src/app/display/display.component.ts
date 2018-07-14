import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }
  name:string;
  ngOnInit() {
    this.name = this._activatedRoute.snapshot.params['name'];
  }

}
