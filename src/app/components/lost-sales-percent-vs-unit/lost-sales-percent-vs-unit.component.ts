import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-lost-sales-percent-vs-unit',
  templateUrl: './lost-sales-percent-vs-unit.component.html',
  styleUrls: ['./lost-sales-percent-vs-unit.component.css']
})
export class LostSalesPercentVsUnitComponent implements OnInit {

  chartOption: EChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}'
    },
    xAxis: {
      name: 'Lost Sales Units',
      nameLocation: 'middle',
      nameGap: 35,
      nameTextStyle: {
        fontWeight: 'bold'
      }
    },
    yAxis: {
      name: 'Lost Sales %',
      nameLocation: 'middle',
      nameGap: 25,
      nameTextStyle: {
        fontWeight: 'bold'
      },
    },
    series: [{
      name: 'Lost Sales % vs Unit',
      data: [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
      ],
      type: 'scatter'
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
