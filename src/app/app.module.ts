import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { DataAccuracyComponent } from './components/data-accuracy/data-accuracy.component';
import { LostSalesComponent } from './components/lost-sales/lost-sales.component';
import { ReportedAvailabilityComponent } from './components/reported-availability/reported-availability.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxEchartsModule } from 'ngx-echarts';
import { LostSalesSkuComponent } from './components/lost-sales-sku/lost-sales-sku.component';
import { LostSalesTimeComponent } from './components/lost-sales-time/lost-sales-time.component';
import { LostSalesStoreComponent } from './components/lost-sales-store/lost-sales-store.component';
import { SubstitutionWhenProductIsOOSComponent } from './components/substitution-when-product-is-oos/substitution-when-product-is-oos.component';
import { LostSalesPercentVsUnitComponent } from './components/lost-sales-percent-vs-unit/lost-sales-percent-vs-unit.component';
import { FilterComponent } from './components/filter/filter.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    DataAccuracyComponent,
    LostSalesComponent,
    ReportedAvailabilityComponent,
    LostSalesSkuComponent,
    LostSalesTimeComponent,
    LostSalesStoreComponent,
    SubstitutionWhenProductIsOOSComponent,
    LostSalesPercentVsUnitComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxEchartsModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
