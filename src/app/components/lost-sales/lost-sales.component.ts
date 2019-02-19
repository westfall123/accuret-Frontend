import { Component, OnInit } from '@angular/core';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lost-sales',
  templateUrl: './lost-sales.component.html',
  styleUrls: ['./lost-sales.component.css']
})
export class LostSalesComponent implements OnInit {

  bigPercentage: string;
  littlePercentage: string;
  faMoneyBillAlt = faMoneyBillAlt;

  constructor() {
    this.bigPercentage = '35.1';
    this.littlePercentage = '1%';
  }

  ngOnInit() {
  }

}
