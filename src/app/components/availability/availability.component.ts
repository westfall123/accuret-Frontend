import { Component, OnInit } from '@angular/core';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { AccuretService } from 'src/app/services/accuret.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  bigPercentage: string;
  littlePercentage: string;
  faChartArea = faChartArea;

  constructor(private service: AccuretService) {
    this.littlePercentage = '-9';
  }

  ngOnInit() {
  }

  loadData(): void {
    this.bigPercentage = this.service.getAvailability();
  }

}
