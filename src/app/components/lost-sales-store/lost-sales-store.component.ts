import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-lost-sales-store',
  templateUrl: './lost-sales-store.component.html',
  styleUrls: ['./lost-sales-store.component.css']
})
export class LostSalesStoreComponent implements OnInit {

  chartOption: EChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}'
    },
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
      data: ['37', '27', '26', '88', '65', '89', '51', '94', '58'],
      name: 'Store ID',
      nameLocation: 'middle',
      nameGap: 35,
      nameTextStyle: {
        fontWeight: 'bold'
      }
    },
    series: [{
      name: 'Lost Sales by Store',
      data: [440, 450, 470, 480, 490, 500, 510, 515, 590],
      type: 'bar'
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
