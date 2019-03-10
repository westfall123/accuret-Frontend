import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AccuretService {

  stores: SelectItem[];
  skus: SelectItem[];
  times: SelectItem[];

  constructor() {
    this.populateSampleData();
  }

  populateSampleData(): void {
    this.stores = [
      {label: 'Beavercreek', value: 'Beavercreek'},
      {label: 'Dayton', value: 'Dayton'},
      {label: 'Miamisburg', value: 'Miamisburg'}
    ];
    this.skus = [
      {label: '1234567', value: '1234567'},
      {label: '7654321', value: '7654321'},
      {label: '4321765', value: '4321765'}
    ];
    this.times = [
      {label: 'Jan - April', value: 'Jan - April'},
      {label: 'May - August', value: 'May - August'},
      {label: 'September - December', value: 'September - December'}
    ];
  }

  getStores(): SelectItem[] {
    return this.stores;
  }

  getSKUs(): SelectItem[] {
    return this.skus;
  }

  getTimes(): SelectItem[] {
    return this.times;
  }
}
