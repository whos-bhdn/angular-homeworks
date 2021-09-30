import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework14',
  templateUrl: './homework14.component.html',
  styleUrls: ['./homework14.component.css']
})
export class Homework14Component implements OnInit {

  isDone = false;
  isSave = false;

  constructor() { }

  ngOnInit(): void {
  }

  done(): void {
    this.isDone = true;
  }

}
