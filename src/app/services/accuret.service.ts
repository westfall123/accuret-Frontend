import { Injectable, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSet } from '../models/dataSet';

@Injectable({
  providedIn: 'root'
})
export class AccuretService {

  stores: SelectItem[];
  skus: SelectItem[];
  times: SelectItem[];

  availability = '90.5';
  reportedAvailability = '95.0';
  lostSales = '35.1';
  dataAccuracy = '27.9';
  url;

  @Output() notifyDataIsReady = new EventEmitter();

  constructor(private http: HttpClient) {
    this.populateSampleData();
  }

  loadData(): void {
    // This will be an http command that will load the JSON into our model.
    // It is void now but will return an observable in the future.
    this.http.get<DataSet>(this.url);
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

  getAvailability(): string {
    return this.availability;
  }

  getDataAccuracy(): string {
    return this.dataAccuracy;
  }

  getLostSales(): string {
    return this.lostSales;
  }

  getReportedAvailability(): string {
    return this.reportedAvailability;
  }
}
