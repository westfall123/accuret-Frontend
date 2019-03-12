import { Component, OnInit } from '@angular/core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { AccuretService } from 'src/app/services/accuret.service';

@Component({
  selector: 'app-data-accuracy',
  templateUrl: './data-accuracy.component.html',
  styleUrls: ['./data-accuracy.component.css']
})
export class DataAccuracyComponent implements OnInit {

  bigPercentage: string;
  littlePercentage: string;
  faCheckSquare = faCheckSquare;

  constructor(private service: AccuretService) {
    this.bigPercentage = '';
    this.littlePercentage = '';
  }

  ngOnInit() {
  }

  loadData(): void {
    this.bigPercentage = this.service.getDataAccuracy();
  }

}
