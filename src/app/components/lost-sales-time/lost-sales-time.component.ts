import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-lost-sales-time',
  templateUrl: './lost-sales-time.component.html',
  styleUrls: ['./lost-sales-time.component.css']
})
export class LostSalesTimeComponent implements OnInit {

  chartOption: EChartOption = {
    color: ['#E15759', '#3c4072', '#222a82', '#2e4064',
    '#092764', '#193163'],
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
        nameGap: 43,
        nameTextStyle: {
        fontWeight: 'bold'
      }
    },
    series: [{
      name: 'Total Lost Sales',
      data: [820, 932, 607, 1300, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }]
  };

  constructor() { }

  ngOnInit() {
    this.chartOption.series.push({
      name: 'Total Lost Sales 2',
      data: [840, 960, 930, 810, 1400, 1000, 200],
      type: 'line',
      areaStyle: {}
    });
  }

}
