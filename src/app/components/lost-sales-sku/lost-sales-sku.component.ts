import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-lost-sales-sku',
  templateUrl: './lost-sales-sku.component.html',
  styleUrls: ['./lost-sales-sku.component.css']
})
export class LostSalesSkuComponent implements OnInit {

  chartOption: EChartOption = {
    xAxis: {
      type: 'value',
      name: 'Total Lost Sales',
      nameLocation: 'middle',
      nameGap: 35,
      nameTextStyle: {
        fontWeight: 'bold'
      }
    },
    yAxis: {
      type: 'category',
      data: ['5', '3', '7', '8', '9', '4', '2', '6', '10', '1'],
      name: 'SKU ID',
      nameLocation: 'middle',
      nameGap: 35,
      nameTextStyle: {
        fontWeight: 'bold'
      }
    },
    series: [{
      data: [800, 900, 1000, 1700, 1850, 2500, 4950, 5400, 5800, 11000],
      type: 'bar'
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
