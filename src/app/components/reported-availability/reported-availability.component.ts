import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reported-availability',
  templateUrl: './reported-availability.component.html',
  styleUrls: ['./reported-availability.component.css']
})
export class ReportedAvailabilityComponent implements OnInit {

  bigPercentage: string;
  littlePercentage: string;
  faBook = faBook;

  constructor() {
    this.bigPercentage = '95.0';
    this.littlePercentage = '';
  }

  ngOnInit() {
  }

}
