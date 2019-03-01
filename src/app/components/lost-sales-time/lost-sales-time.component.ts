import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-lost-sales-time',
  templateUrl: './lost-sales-time.component.html',
  styleUrls: ['./lost-sales-time.component.css']
})
export class LostSalesTimeComponent implements OnInit {

  chartOption: EChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      name: 'Day of Date [2017]',
      nameLocation: 'middle',
      nameGap: 35,
      nameTextStyle: {
        fontWeight: 'bold'
      }
    },
    yAxis: {
        type: 'value',
        name: 'Total Lost Sales',
        nameLocation: 'middle',
        nameGap: 45,
        nameTextStyle: {
        fontWeight: 'bold'
      }
    },
    series: [{
      name: 'Total Lost Sales',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }]
  };

  constructor() { }

  ngOnInit() {
  
  }

}
