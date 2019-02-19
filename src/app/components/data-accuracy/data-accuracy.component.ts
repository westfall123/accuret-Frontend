import { Component, OnInit } from '@angular/core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-accuracy',
  templateUrl: './data-accuracy.component.html',
  styleUrls: ['./data-accuracy.component.css']
})
export class DataAccuracyComponent implements OnInit {

  bigPercentage: string;
  littlePercentage: string;
  faCheckSquare = faCheckSquare;

  constructor() {
    this.bigPercentage = '27.9';
    this.littlePercentage = '';
  }

  ngOnInit() {
  }

}
