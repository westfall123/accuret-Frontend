import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AccuretService } from '../../services/accuret.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  selectedStores;
  selectedSKUs;
  selectedTimes;
  stores: SelectItem[];
  skus: SelectItem[];
  times: SelectItem[];

  constructor(private service: AccuretService) { }

  ngOnInit() {
    this.stores = this.service.getStores();
    this.skus = this.service.getSKUs();
    this.times = this.service.getTimes();
  }

  updateCharts(type: string): void {
    if (type === 'stores') {
      
    } else if (type === 'skus') {

    } else if (type === 'times') {

    }
  }

}
