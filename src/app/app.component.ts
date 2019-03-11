import { Component, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { AccuretService } from './services/accuret.service';
import { AvailabilityComponent } from './components/availability/availability.component';
import { ReportedAvailabilityComponent } from './components/reported-availability/reported-availability.component';
import { LostSalesComponent } from './components/lost-sales/lost-sales.component';
import { DataAccuracyComponent } from './components/data-accuracy/data-accuracy.component';
import { LostSalesSkuComponent } from './components/lost-sales-sku/lost-sales-sku.component';
import { LostSalesTimeComponent } from './components/lost-sales-time/lost-sales-time.component';
import { LostSalesStoreComponent } from './components/lost-sales-store/lost-sales-store.component';
import { LostSalesPercentVsUnitComponent } from './components/lost-sales-percent-vs-unit/lost-sales-percent-vs-unit.component';
import { SubstitutionWhenProductIsOOSComponent } from './components/substitution-when-product-is-oos/substitution-when-product-is-oos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('availability') availability: AvailabilityComponent;
  @ViewChild('reportedAvailability') reportedAvailability: ReportedAvailabilityComponent;
  @ViewChild('lostSales') lostSales: LostSalesComponent;
  @ViewChild('dataAccuracy') dataAccuracy: DataAccuracyComponent;
  @ViewChild('lostSalesSKU') lostSalesSKU: LostSalesSkuComponent;
  @ViewChild('lostSalesTime') LostSalesTime: LostSalesTimeComponent;
  @ViewChild('lostSalesStore') LostSalesStore: LostSalesComponent;
  @ViewChild('lostSalesPercent') LostSalesPercent: LostSalesPercentVsUnitComponent;
  @ViewChildren('substitution') Substitution: SubstitutionWhenProductIsOOSComponent;

  constructor(private service: AccuretService) {
    this.service.loadData();
    // this.service.loadData().subscribe(data => {
    //    this.availability.laodData();
    // })
  }

  ngOnInit() {
    this.availability.loadData();
    this.reportedAvailability.laodData();
    this.lostSales.loadData();
    this.dataAccuracy.laodData();
  }

  
}
