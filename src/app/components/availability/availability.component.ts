import { Component, OnInit } from '@angular/core';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  bigPercentage: string;
  littlePercentage: string;
  faChartArea = faChartArea;

  constructor() {
    this.bigPercentage = '90.4';
    this.littlePercentage = '-9';
  }

  ngOnInit() {
  }

}
