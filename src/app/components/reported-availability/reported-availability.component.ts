import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { AccuretService } from 'src/app/services/accuret.service';

@Component({
  selector: 'app-reported-availability',
  templateUrl: './reported-availability.component.html',
  styleUrls: ['./reported-availability.component.css']
})
export class ReportedAvailabilityComponent implements OnInit {

  bigPercentage: string;
  littlePercentage: string;
  faBook = faBook;

  constructor(private service: AccuretService) {
    this.bigPercentage = '';
    this.littlePercentage = '';
  }

  ngOnInit() {
  }

  laodData(): void {
    this.bigPercentage = this.service.getReportedAvailability();
  }
}
