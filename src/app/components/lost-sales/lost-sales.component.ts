import { Component, OnInit } from '@angular/core';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { AccuretService } from 'src/app/services/accuret.service';

@Component({
  selector: 'app-lost-sales',
  templateUrl: './lost-sales.component.html',
  styleUrls: ['./lost-sales.component.css']
})
export class LostSalesComponent implements OnInit {

  bigPercentage: string;
  littlePercentage: string;
  faMoneyBillAlt = faMoneyBillAlt;

  constructor(private service: AccuretService) {
    this.bigPercentage = '';
    this.littlePercentage = '1%';
  }

  ngOnInit() {
  }

  loadData(): void {
    this.bigPercentage = this.service.getLostSales();
  }
}
